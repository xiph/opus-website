---
layout: page
title: Development
permalink: /development/
---

# Opus development

## Discussion

Development chat takes place on [#opus on irc.freenode.net][irc] (&rarr; [Webchat][irc-web])

The Xiph.Org wiki has an [Opus Todo][opus-todo] page, and the [IETF Codec WG page][ietf-wg] has list archives,
meeting minutes, and technical presentation. Monty's [CELT demo page][monty-celt] provides a broad overview of
the MDCT layer of Opus.

## Contributing

If you wish to contribute to Opus, see the [Opus contributing][opus-contributing-wiki] wiki page for more information.


## Source code repository

[![travis-ci.org build status for Opus](https://travis-ci.org/xiph/opus.svg?branch=master)](https://travis-ci.org/xiph/opus)
[![appveyor (windows) build status for opus](https://ci.appveyor.com/api/projects/status/github/xiph/opus?svg=true&branch=master)](https://ci.appveyor.com/project/rillian/opus)

Master git repository:

<pre><code>$ git clone <a href="https://git.xiph.org/?p=opus.git">https://git.xiph.org/opus.git</a></code></pre>

There is also a [Gitweb frontend][git-web] and a mirror at [GitHub](https://github.com/xiph/opus).

See the [documentation][docs] for an API reference and test vectors for verifying your implementation.


## Opus-tools

[![travis-ci.org build status for opus-tools](https://travis-ci.org/xiph/opus-tools.svg?branch=master)](https://travis-ci.org/xiph/opus-tools)
[![appveyor (windows) build status for opus-tools](https://ci.appveyor.com/api/projects/status/github/xiph/opus-tools?svg=true&branch=master)](https://ci.appveyor.com/project/rillian/opus-tools)

Opus-tools includes a set of tools for encoding/decoding Opus to and from wav. The files the tools produce
are suitable for distribution with support for seeking, metadata, and multichannel.
See also: the [OggOpus mapping][oggopus].

<pre><code>$ git clone <a href="https://git.xiph.org/?p=opus-tools.git">https://git.xiph.org/opus-tools.git</a></code></pre>

Manpages: [opusenc][opusenc], [opusdec][opusdec], [opusinfo][opusinfo]


## Opusfile

[![travis-ci.org build status for opusfile](https://travis-ci.org/xiph/opusfile.svg?branch=master)](https://travis-ci.org/xiph/opusfile)
[![appveyor (windows) build status for opusfile](https://ci.appveyor.com/api/projects/status/github/xiph/opusfile?svg=true&branch=master)](https://ci.appveyor.com/project/rillian/opusfile)

Opusfile provides a high-level API for decoding and seeking within .opus files similar to what libvorbisfile
provides for Vorbis.

<pre><code>$ git clone <a href="https://git.xiph.org/?p=opusfile.git">https://git.xiph.org/opusfile.git</a></code></pre>

## libopusenc

[![travis-ci.org build status for libopusenc](https://travis-ci.org/xiph/libopusenc.svg?branch=master)](https://travis-ci.org/xiph/libopusenc)

Libopusenc provides a high-level API for creating .opus files and streams.

<pre><code>$ git clone <a href="https://git.xiph.org/?p=libopusenc.git">https://git.xiph.org/libopusenc.git</a></code></pre>

## Continuous integration

The [Opus continuous integration][opus-ci] server performs automated builds and tests of Opus on many platforms
and configurations.
Some of the builds run on remote systems and may fail from time to time due to connectivity problems. The console
output is available and usually very informative when builds fail.

Build status for the [Github mirrors](https://github.com/xiph/) and test results for pull requests there are provided by
[Travis](https://travis-ci.org/) and [AppVeyor](https://appveyor.com).

<ul>
	<li>Test coverage reports:
		<ul>
			<li><a href="https://mf4.xiph.org/jenkins/job/opus-coverage/ws/coverage/index.html">Floating-point</a></li>
			<li><a href="https://mf4.xiph.org/jenkins/job/opus-coverage-fixed/ws/coverage/index.html">Fixed-point</a></li>
		</ul>
	</li>
	<li>Latest rendered codec specification:
		<ul>
			<li><a href="https://mf4.xiph.org/jenkins/view/opus/job/opus-draft/ws/doc/draft-ietf-codec-opus.txt">Text</a></li>
			<li><a href="https://mf4.xiph.org/jenkins/view/opus/job/opus-draft/ws/doc/draft-ietf-codec-opus.html">HTML</a></li>
		</ul>
	</li>
	<li>Static analysis results:
		<ul>
			<li><a href="https://mf4.xiph.org/jenkins/view/opus/job/opus-scan-build/ws/scan-build/current/index.html">scan-build</a></li>
			<li><a href="https://mf4.xiph.org/jenkins/job/opus-cppcheck/cppcheckResult">cppcheck</a></li>
		</ul>
	</li>
	<li>Libopus API documentation:
		<ul>
			<li><a href="https://mf4.xiph.org/jenkins/view/opus/job/opus/ws/doc/html/index.html">HTML</a></li>
			<li><a href="https://mf4.xiph.org/jenkins/view/opus/job/opus/ws/doc/latex/refman.pdf">PDF</a></li>
		</ul>
	</li>
</ul>

[irc]: irc://irc.freenode.net:6667/opus
[irc-web]: http://webchat.freenode.net/?channels=opus
[opus-todo]: https://wiki.xiph.org/OPUS_TODO
[ietf-wg]: http://tools.ietf.org/wg/codec/
[monty-celt]: http://people.xiph.org/~xiphmont/demo/celt/demo.html
[git-web]: https://git.xiph.org/?p=opus.git
[exp_lbr_tune-branch]: http://git.xiph.org/?p=opus.git;a=shortlog;h=refs/heads/exp_lbr_tune
[opus-master.tar.gz]: http://git.xiph.org/?p=opus.git;a=snapshot;h=HEAD;sf=tgz
[opus-exp_lbr_tune-branch.tar.gz]: http://git.xiph.org/?p=opus.git;a=snapshot;h=exp_lbr_tune;sf=tgz
[oggopus]: https://wiki.xiph.org/OggOpus
[opusenc]: https://mf4.xiph.org/jenkins/view/opus/job/opus-tools/ws/man/opusenc.html
[opusdec]: https://mf4.xiph.org/jenkins/view/opus/job/opus-tools/ws/man/opusdec.html
[opusinfo]: https://mf4.xiph.org/jenkins/view/opus/job/opus-tools/ws/man/opusinfo.html
[opus-ci]: https://mf4.xiph.org/jenkins/view/opus/
[opus-contributing-wiki]: https://wiki.xiph.org/OpusContributing
[docs]: {{ "/docs" | prepend: site.baseurl }}


