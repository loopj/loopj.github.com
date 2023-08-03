---
layout: post
title: Flash Preloaders Don't Show with HTML Anchors
---

### What's the Problem?

If you use HTML anchors on your webpages (for example `http://www.example.com/index.html#anchor`) and also embed flash files, beware of a flash player bug which might cause preloaders on your swf files not to appear!

### Why does this happen?

This [flash preloader bug](http://kb2.adobe.com/cps/154/tn_15415.html) (which is still unresolved) means that large swf files with preloaders will not show the preloader while the rest of the swf is loading, meaning you may see a blank box when waiting for the file to download completely.

Flash 6+ has had the support for [named anchors within swf files](http://noscope.com/journal/2004/04/named-anchors), meaning that your flash file can set and read #anchor tags to jump between frames in your flash movie. When you have an unrecognized anchor tag in your URL, flash doesn't know which frame to jump to, and therefore appears to jump to the first frame of the inner swf file, therefore skipping the preloader.

### What's the solution?

If the swf file and preloader are outside your control, you'll simply have to *remove any anchors from the original url*, at least until Adobe issue a flash player fix.

If you *do* have access to the swf file and you're using Flex 3, you can use the BrowserManagerShim class attached to [this bug report](http://bugs.adobe.com/jira/browse/SDK-14162).

If you've found any other general solutions, please let me know and I'll update this post!
