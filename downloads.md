---
layout: page
title: Downloads
permalink: /downloads/
---

# Opus downloads

Even though Opus is now standardized by the IETF, this Opus implementation will keep improving in the future.
Of course, __all future versions will still be fully compliant with the Opus IETF specification__.  
See the [development][dev] page for the latest development information.

## Development binary builds

In addition to [support in Firefox][ff_opus], Mozilla provides binary builds of Opus utilities.

<ul class="download-list">
  <li>opus-tools <span>0.2</span><br /><span>(Opus 1.3)</span>
    <ul>
      <li><a href="https://archive.mozilla.org/pub/opus/opus-tools-0.2.tar.gz">Source</a></li>
      <li><a href="https://archive.mozilla.org/pub/opus/win32/opus-tools-0.2-opus-1.3.zip">Windows</a></li>
      <li><a href="https://archive.mozilla.org/pub/opus/macos/opus-tools-0.1.9-macos.tar.gz">OS X (older)</a></li>
    </ul>
  </li>
  <li>opusfile <span>0.9</span>
    <ul>
      <li><a href="https://archive.mozilla.org/pub/opus/opusfile-0.9.tar.gz">Source</a></li>
      <li><a href="https://archive.mozilla.org/pub/opus/win32/opusfile-v0.9-win32.zip">Windows</a></li>
    </ul>
  </li>
</ul>

Opus-tools provides command-line utilities to encode, inspect, and decode .opus files.
Opusfile provides application developers with a high-level API for decoding and seeking in .opus files. DLLs for the
required libraries libogg 1.3.2, libopus 1.1.1 and openssl, are also included in the binary package.



## Source code (stable release)

<ul class="post-list">
  {% assign components = site.categories.stable | group_by:"component" %}
  {% for component in components %}
    <!-- {{ component.name }} -->
    {% if component.name == '' %}
      {% continue %}
    {% endif %}

    {% for post in site.categories.stable limit: 1 %}
    <li>
      <article>
        <header>
          <h3 class="post-head"><a class="post-link" href="{{ post.url | prepend: site.baseurl }}">{{ post.title }}</a></h3>
          <span class="post-meta">{{ post.date | date: "%b %-d, %Y" }}</span>
        </header>
        {{ post.content }}
      </article>
      {% if forloop.last == false %}<hr />{% endif %}
    </li>
    {% endfor %}
    {% if forloop.last == false %}<hr />{% endif %}
  {% endfor %}
</ul>

## Source code (development releases)

<ul class="post-list">
  {% assign components = site.categories.dev | group_by:"component" %}
  {% for component in components %}
    <!-- {{ component.name }} -->
    {% if component.name == '' %}
      {% continue %}
    {% endif %}

    {% for post in component.items limit: 1 %}
      <li>
        <article>
          <header>
            <h3 class="post-head"><a class="post-link" href="{{ post.url | prepend: site.baseurl }}">{{ post.title }}</a></h3>
            <span class="post-meta">{{ post.date | date: "%b %-d, %Y" }}</span>
          </header>
          {{ post.content }}
        </article>
        {% if forloop.last == false %}<hr />{% endif %}
      </li>
    {% endfor %}
    {% if forloop.last == false %}<hr />{% endif %}
  {% endfor %}
</ul>

<p>See the <a href="{{ "/news" | prepend: site.baseurl }}">news archive</a> for all releases</p>

[ff_opus]: https://developer.mozilla.org/en/Media_formats_supported_by_the_audio_and_video_elements#Ogg_Opus
[dev]: {{ "/development" | prepend: site.baseurl }}
