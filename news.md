---
layout: page
title: News Archive
permalink: /news/
---

{% for post in site.posts %}
  <article>
  	<header>
    	<h3 class="post-head"><a class="post-link" href="{{ post.url | prepend: site.baseurl }}">{{ post.title }}</a></h3>
    	<span class="post-meta">{{ post.date | date: "%b %-d, %Y" }}</span>
    </header>
    {{ post.content }}
  </article>
  <hr />
{% endfor %}

<p>Subscribe <a href="{{ "/feed.xml" | prepend: site.baseurl }}">via RSS</a></p>
