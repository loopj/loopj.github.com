---
layout: post
title: Removing Gaps Under Images In CSS
---

CSS veterans will probably already know this, but here's a fix to a problem which has been bugging me for ages.

### Problem

If you have something like:

```html
<div>
    <img src="blah.jpg" />
</div>
```

You may see a gap below the image on some browsers, a gap which cannot be removed by setting the padding/margins to 0:

![Gap example](/images/gap.gif)

### Solution

`<img>` tags are rendered using display: inline by default, which means they act and flow like text does on a page. In order to stop spaces being added (caused by spaces next to the img tag in your html), you should set your img to use `display: block`:

```html
<img style="display: block" src="..." alt="" />
```

This means your image will no longer act like flowing text and will no longer have a gap below it!

### Caveats

Changing from display: inline means your img tag will ignore things like text-align: center, and other alignments specific to displaying elements inline.

![Mind the gap](/images/mind-the-gap.jpg)

Image credit: [buhsnarf](http://flickr.com/photos/buhsnarf/2534278930/) on flickr
