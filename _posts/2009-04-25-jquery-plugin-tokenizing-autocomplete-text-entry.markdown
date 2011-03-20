--- 
layout: post
title: "jQuery Plugin: Tokenizing Autocomplete Text Entry"
---

This Project Has Moved!
-----------------------
For the latest version and awesome documentation, please head over to:

<http://loopj.com/jquery-tokeninput/>




Overview
---------
This is a jQuery plugin to allow users to select multiple items from a predefined list, using autocompletion as they type to find each item. You may have seen a similar type of text entry when filling in the recipients field sending messages on facebook.

Features
--------
- Intuitive UI for selecting multiple items from a large list
- Layout controlled fully in CSS, easily customisable
- Result caching reduces server load
- No images required, just the plugin's .js file and some CSS
- Handles json search data for autocompletion
- Smooth animations when results load
- Select items using the mouse or keyboard

Screenshots
-----------
![List style](/images/tokeninput-list-style.png)

Vertical list style item selection


![List style](/images/tokeninput-facebook-style.png)

Facebook style item selection

Demo
----
A live demo of the token input is available [here](http://loopj.com/jquery-tokeninput/demo.html).

Usage
-----
Latest documentation can be found here:

<http://loopj.com/jquery-tokeninput/>

- Make sure you have jquery script included on your page
- Include jquery.tokeninput.js on your page
- Include one of the provided stylesheets, or make your own
- Create a server-side script (php/rails/django anything goes) to generate the search results. The script itself can fetch data from wherever you like, for example a database or a hardcoded list, but it must take exactly one GET parameter named "q" which will contain the query string. E.g. http://www.example.com/myscript?q=query.
- Make sure you script outputs JSON search results in the following format:

        [{"id":"856","name":"House"},
         {"id":"1035","name":"Desperate Housewives"},
         {"id":"1048","name":"Dollhouse"},
         {"id":"1113","name":"Full House"}
        ]
- Turn text inputs into tokeninputs using jQuery and point them to your results script

        <script type="text/javascript">
            $(document).ready(function () {
                $("#my-text-input").tokenInput("/url/to/your/script/");
            });
        </script>

- A list of selected item ids is created inside the original text entry, process them as usual when the form is submitted.

License
-------
This plugin is released under a dual license. You can choose either the GPL or MIT license depending on the project you are using it in and how you wish to use it.

Quick Download
--------------
Please don't use these links directly in your scripts, I might change their location at any time. Instead, download them and use your own local copy.
- Script: <https://github.com/loopj/jquery-tokeninput/raw/master/src/jquery.tokeninput.js>
- Facebook style CSS: <https://github.com/loopj/jquery-tokeninput/raw/master/styles/token-input-facebook.css>
- List style CSS: <https://github.com/loopj/jquery-tokeninput/raw/master/styles/token-input.css>

Github Project
--------------
If you would like to contribute to this plugin, check out the github repository here:
<http://github.com/loopj/jquery-tokeninput>