--- 
layout: post
title: A Django Developer's Views on Rails
---

Introduction
------------
I've recently started work on a Rails project after working on many Django apps in the past couple of years and I'd like to share my experiences and gripes from my transition. Rather than attempting to analyze all the pros and cons of each framework, I'm going to try to focus on the transition pain points.

Python vs. Ruby (Perl's Ugly Sister)
------------------------------------
Python and Ruby are quite similar languages and I'm not going to compare them in any serious depth. Both have their relative merits and I find both languages easy to work in. The one complaint I have about Ruby is that it *borrows far too much from Perl*. I've done a fair bit of scripting in Perl, and most people agree with me that Perl scripts of any substantial size quickly become *very difficult to maintain*.

Ruby is a great language but it tries to provide similar syntax and constructs to Perl, while duct taping all of Ruby's own powerful features on too. This makes the Ruby syntax look like someone *emptied all the symbols from the keyboard into a shotgun and shot them into your face*.

Another irritating habit Ruby borrowed from Perl is having *multiple ways of doing the same thing* when simple having one way would be fine.

Say what you will about Python's whitespace rules, but Python code is easy to read and consistent, and generally there is a single correct way of doing things.

As I mentioned earlier though, I do like Ruby, and *one of the awesome features is Ruby's blocks*. Blocks are basically Ruby's way of implementing closures and they are extremely flexible and powerful. In Python, to do something similar you'd use lambdas or list comprehensions.

Views Versus Templates
----------------------
In the Rails world, the layer which generates the final markup sent to the browser is called the View layer. In a Rails View, you can chuck as much rails code as you like in amongst your markup.

Some of the early sites I worked on many years ago were written in PHP, which had the same idea. Rails views and PHP both allow the developer to *mix markup and code together* in the same file. When making PHP sites, you quickly learn that this is a *terrible idea* and quickly becomes a *maintenance nightmare*. One of the best things I ever did in my PHP days was to start using a PHP templating library, such as [Smarty](http://www.smarty.net/).

By restricting the template layer to simple constructs, like Smarty and Django both do, the developer is *forced* to keep business logic and complex constructs *separate from the markup*, which makes maintaining and changing the markup in future a piece of cake.

When it comes to markup reuse, the two frameworks are quite evenly matched. Django has template inheritance, which I think is a very elegant solution to the age old problem of sharing common markup, whereas Rails solves this problem using "Layouts". Both frameworks also support template inclusion and "partials".

Multiple Apps in a Project
--------------------------
When developing web projects, there are many situations where you need to have 2 very different applications which may need to access some of the same data. In the django world, you create a project and a project may contain multiple applications. Application B can use the ORM classes defined in application A's model layer if it so chooses.

In rails, there is no such distinction between project and application. If you want to share model layer objects between code, your best bet is to have all the code in the same application. If you wish to logically seperate your applications, you can do so by creating 2 seperate rails projects, but it is not easy (or recommended) to share the models between the 2 projects. Another option is to have a controller per logical application, but this quickly leads to huge amounts of code in each controller.

URL Routing
-----------
In Django, you design the URLs for your application using *regular expressions*, a skill in every programmer's toolbox (or at least it should be). In Rails you do these mappings using Ruby. Anyone who knows how to write regular expressions can instantly write url matching/capture expressions in Django.

Schema Migration
----------------
One thing Rails used to be much better at than Django was database schema migration. This is a feature built into Rails, but Django developers used to have to write manual schema migration scripts to transition their databases. These days though, there are numerous choices for easy schema migration for Django projects, my favourite being [South](http://south.aeracode.org/). This is an area where Django really had to play catch-up though, and the various stable projects which have emerged to supporting migration are indicative of the maturity of Django as a whole.

Conclusion
----------
Django and Rails both have their strong points and are similar in many ways, but certain fundamental philosophies differ, especially the Convention vs Configuration side. They are both great frameworks, and transition issues aside I look forward to working more with Rails in the future. Let me know what you think in the comments section below!