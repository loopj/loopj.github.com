---
layout: post
title: Extract GET Params from a JavaScript Script Tag
---

Here’s a simple trick to extracting HTTP GET style parameters from a &lt;script&gt; tag, from within the script itself.

Motivation
----------
At [Heyzap](http://www.heyzap.com), we create a variety of games widgets that publishers can embed on their sites to instantly get great game content. Publishers can choose which games appear on their widget by supplying a custom "embed key" to the widget.

Typically, you'd supply extra context to a javascript embed as follows:

{% highlight html %}
<script type="javascript" src="http://www.blah.com/myscript.js"></script>
<script type="javascript">
    new HeyzapWidget({key: "123"});
</script>
{% endhighlight %}

It would be much nicer, however, to be able to do this in one line:

{% highlight html %}
<script type="javascript" src="http://www.blah.com/myscript.js?key=123"></script>
{% endhighlight %}

This way we'd be able give publishers only one line to copy and paste into their site, rather than four.

You could provide this "one line" version to publisher if the javascript was dynamically served, eg. if a rails/django/php page examined the GET params, and injected them into the script body. This is not very practical under heavy loads and it would be nicer and much more flexible to serve a static javascript file.

Ideally we want to be able to do this *entirely in javascript* in the file we are including. This way, we can host the file anywhere, including cloud services such as S3.

Shut up and show me some code...
--------------------------------

{% highlight javascript %}
// Extract "GET" parameters from a JS include querystring
function getParams(script_name) {
  // Find all script tags
  var scripts = document.getElementsByTagName("script");
  
  // Look through them trying to find ourselves
  for(var i=0; i<scripts.length; i++) {
    if(scripts[i].src.indexOf("/" + script_name) > -1) {
      // Get an array of key=value strings of params
      var pa = scripts[i].src.split("?").pop().split("&");

      // Split each key=value into array, the construct js object
      var p = {};
      for(var j=0; j<pa.length; j++) {
        var kv = pa[j].split("=");
        p[kv[0]] = kv[1];
      }
      return p;
    }
  }
  
  // No scripts match
  return {};
}

// Mini version :)
function getParams(a){var b=document.getElementsByTagName("script");for(var i=0;i<b.length;i++){if(b[i].src.indexOf("/"+a)>-1){var c=b[i].src.split("?").pop().split("&");var p={};for(var j=0;j<c.length;j++){var d=c[j].split("=");p[d[0]]=d[1]}return p}}return{}}
{% endhighlight %}