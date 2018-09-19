---
title: libopus 1.2-alpha
categories: ["release", "dev"]
date: 2016-11-03
layout: post
component: libopus
---

This [Opus 1.2-alpha](http://downloads.xiph.org/releases/opus/opus-1.2-alpha.tar.gz) alpha release
of the upcoming Opus 1.2 brings many quality improvements, new features, and bug fixes, including:
- Speech quality improvements especially in the 12-20 kbit/s range
- Improved VBR encoding for hybrid mode
- More aggressive use of wider speech bandwidth, including fullband speech starting at 14 kbit/s
- Music quality improvements in the 32-48 kb/s range
- Generic and SSE CELT optimizations
- Support for directly encoding packets up to 120 ms
- DTX support for CELT mode
- SILK CBR improvements
- Support for all of the fixes in draft-ietf-codec-opus-update-04 (the mono downmix and the folding fixes need `--enable-update-draft`)
- Many bug fixes, including integer overflows discovered through fuzzing (no security implications)

Please test it and and report any problems. There are no known regressions compared to the
latest stable release (1.1.3), but given the large number of changes, it's possible some bugs have
slipped through.

Source code: [opus-1.2-alpha.tar.gz](http://downloads.xiph.org/releases/opus/opus-1.2-alpha.tar.gz)
