---
title: libopus 1.3-beta
categories: ["release", "dev"]
date: 2017-12-21
layout: post
component: libopus
---

This [Opus 1.3-beta](https://archive.mozilla.org/pub/opus/opus-1.3-beta.tar.gz) beta release
of the upcoming Opus 1.3 includes:
- Enabling by default the spec fixes in RFC 8251
- Improvements to the VAD and speech/music classification using an RNN
- Improvements to stereo speech coding at low bitrate
- Added support for ambisonics projection using mapping 3 (disabled by default)
- Fixes to the CELT PLC

Additionally, as a way to test the upcoming update to opus-tools, we're providing Windows binaries
built with 1.3-beta. These binaries are based on libopusenc, which means opusenc is finally able
to make use of the Opus delayed-decision feature to make better speech/music transitions.

Source code: [opus-1.3-beta.tar.gz](https://archive.mozilla.org/pub/opus/opus-1.3-beta.tar.gz)  
Win32 binaries (experimental): [opus-tools-test1.zip](https://archive.mozilla.org/pub/opus/win32/opus-tools-test1.zip)
