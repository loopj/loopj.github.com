--- 
wordpress_id: 25
layout: post
title: Python API for TheTVDB.com
wordpress_url: http://loopj.com/?p=25
---
<h2>Overview</h2>
[TheTVDB.com](http://www.thetvdb.com) is user contributed TV show and episode database which is used by many popular home theatre applications, such as [XBMC](http://xbmc.org/) to look up details of TV shows.

I've written a simple Python interface to their [Programmer's API](http://thetvdb.com/wiki/index.php?title=Programmers_API) which makes it possible for developers to extract the TV data they need from TheTVDB with minimal effort.

Let me know if you find this useful, or you use it in any real projects!

<h2>Dependencies</h2>
This module uses cElementTree (available in Python 2.5+) to traverse XML, so you'll need Python 2.5 available. Alternatively if you have an older version of Python you can install [cElementTree](http://effbot.org/zone/celementtree.htm) or [ElementTree](http://effbot.org/zone/element-index.htm) yourself, and modify the import line at the top of the file.

<h2>Usage</h2>
I'm not going to go into great detail about the interface because the module is fairly self explanatory, but here are a few of the main functions:

<h4>Classes</h4>
There are 2 classes, the <code>Show</code> class and the <code>Episode</code> class. Most functions in this API return either a <code>Show</code> object, an <code>Episode</code> object, or a list of IDs. I'm not going to document all of the properties in each object as these are visible in the module itself, but you'd usually access the public variables directly, e.g. <code>episode.overview</code>.

<h4>Functions</h4>
<ul>
<li><code>get_matching_shows(show_name)</code><br />
Returns a list of tuples (id, name) of all matching shows in thetvdb </li>
<li><code>get_show(show_id)</code><br />Get the show object matching this show_id.</li>
<li><code>get_episode(episode_id)</code><br />Get the episode object matching this episode_id.</li>
<li><code>get_show_and_episodes(show_id)</code><br />Get the show object and all matching episode objects for this show_id.</li>
<li><code>get_updated_shows(period)</code><br />Get a list of show ids which have been updated within this period (day/week/month).</li>
<li><code>get_updated_episodes(period)</code><br />Get a list of episode ids which have been updated within this period (day/week/month).</li>
<li><code>get_show_image_choices(show_id)</code><br />Get a list of image urls and types relating to this show.</li>
</ul>

<h2>License</h2>
I'm releasing this under the GPL2 license. If you reuse it or improve it, please let me know! 

<h2>Download</h2>
[http://loopj.com/thetvdbapi/thetvdbapi.py](http://loopj.com/thetvdbapi/thetvdbapi.py)
