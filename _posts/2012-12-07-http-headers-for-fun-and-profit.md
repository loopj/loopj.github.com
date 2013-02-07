---
layout: post
title: HTTP Headers For Fun & Profit
---

Recently I've stumbled across some curious HTTP headers.


Pinterest loves corgis
----------------------

[Pinterest](http://pinterest.com/) seem to be a fan of corgi dogs:

{% highlight bash %}
$ curl -I pinterest.com

Breed: CORGI
{% endhighlight %}


Newsblur love *The Simpsons*
----------------------------

[Newsblur](http://www.newsblur.com/) will deliver you a random *Simpsons* quote in their HTTP headers:

{% highlight bash %}
$ curl -I newsblur.com
    
X-Homer: D'oh.
X-Sideshow-Bob: Attempted murder? Now honestly, what is that? Do they give a Nobel Prize for attempted chemistry?
X-Ed-Begley-Jr: I prefer a vehicle that doesn't hurt Mother Earth. It's a go-cart, powered by my own sense of self-satisfaction.
{% endhighlight %}


Interstate loves hackers
------------------------

[Interstate](http://interstateapp.com/) use their header to find hackers looking for a job:

{% highlight bash %}
$ curl -I interstateapp.com

X-Company: BakedCode
X-Hacker: bakedcode.com/jobs
{% endhighlight %}

I'm sure there are a ton more interesting/fun headers out there, if you've 
seen a particularly good one, add it to the 
[discussion on Hacker News](http://news.ycombinator.com/item?id=4886291).