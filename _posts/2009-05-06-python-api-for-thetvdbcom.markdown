---
wordpress_id: 25
layout: post
title: Python API for TheTVDB.com
---

### Overview

[TheTVDB.com](http://www.thetvdb.com) is user contributed TV show and episode database which is used by many popular home theatre applications, such as [XBMC](http://xbmc.org/) to look up details of TV shows.

I've written a simple Python interface to their [Programmer's API](http://thetvdb.com/wiki/index.php?title=Programmers_API) which makes it possible for developers to extract the TV data they need from TheTVDB with minimal effort.

Let me know if you find this useful, or you use it in any real projects!

### Dependencies

This module uses cElementTree (available in Python 2.5+) to traverse XML, so you'll need Python 2.5 available. Alternatively if you have an older version of Python you can install [cElementTree](http://effbot.org/zone/celementtree.htm) or [ElementTree](http://effbot.org/zone/element-index.htm) yourself, and modify the import line at the top of the file.

### Usage

I'm not going to go into great detail about the interface because the module is fairly self explanatory, but here are a few of the main functions:

#### Classes

There are 2 classes, the `Show` class and the `Episode` class. Most functions in this API return either a `Show` object, an `Episode` object, or a list of IDs. I'm not going to document all of the properties in each object as these are visible in the module itself, but you'd usually access the public variables directly, e.g. `episode.overview`.

#### Functions

```python
# Return a list of tuples (id, name) of all matching shows in thetvdb
get_matching_shows(show_name)

# Get the show object matching this show_id
get_show(show_id)

# Get the episode object matching this episode_id
get_episode(episode_id)

# Get the show object and all matching episode objects for this show_id
get_show_and_episodes(show_id)

# Get a list of show ids updated within this period (day/week/month)
get_updated_shows(period)

# Get a list of episode ids updated within this period (day/week/month)
get_updated_episodes(period)

# Get a list of image urls and types relating to this show
get_show_image_choices(show_id)
```

### License

I'm releasing this under the GPL2 license. If you reuse it or improve it, please let me know!

### Download

[thetvdbapi.py](https://raw.githubusercontent.com/loopj/thetvdbapi/main/thetvdbapi.py)
