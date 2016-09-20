---
layout: page
---

# Opus Interactive Audio Codec

## Overview

Opus is a totally open, royalty-free, highly versatile audio codec. Opus is unmatched for interactive
speech and music transmission over the Internet, but is also intended for storage and streaming
applications. It is standardized by the Internet Engineering Task Force (IETF) as [RFC 6716][rfc6716]
which incorporated technology from Skype's SILK codec and Xiph.Org's CELT codec.


## Technology

Opus can handle a wide range of audio applications, including Voice over IP, videoconferencing,
in-game chat, and even remote live music performances. It can scale from low bitrate narrowband
speech to very high quality stereo music. Supported features are:

-  Bitrates from 6 kb/s to 510 kb/s
-  Sampling rates from 8 kHz (narrowband) to 48 kHz (fullband)
-  Frame sizes from 2.5 ms to 60 ms
-  Support for both constant bitrate (CBR) and variable bitrate (VBR)
-  Audio bandwidth from narrowband to fullband
-  Support for speech and music
-  Support for mono and stereo
-  Support for up to 255 channels (multistream frames)
-  Dynamically adjustable bitrate, audio bandwidth, and frame size
-  Good loss robustness and packet loss concealment (PLC)
-  Floating point and fixed-point implementation

You can read the full specification, including the reference implementation, in [RFC 6716][rfc6716].
An up-to-date implementation of the Opus standard is also available from the [downloads] page.

[rfc6716]: http://tools.ietf.org/html/rfc6716
[downloads]: {{ "/downloads" | prepend: site.baseurl }}


## News

<ul class="post-list">
  {% for post in site.posts limit: 4 %}
  <li>
  	<article>
  		<header>
    		<h3 class="post-head"><a class="post-link" href="{{ post.url | prepend: site.baseurl }}">{{ post.title }}</a></h3>
    		<span class="post-meta">{{ post.date | date: "%b %-d, %Y" }}</span>
    	</header>
    	{{ post.content }}
    </article>
    <hr />
  </li>
  {% endfor %}
</ul>

<p>See <a href="{{ "/news" | prepend: site.baseurl }}">all news</a> or
   subscribe <a href="{{ "/feed.xml" | prepend: site.baseurl }}">via RSS</a></p>
