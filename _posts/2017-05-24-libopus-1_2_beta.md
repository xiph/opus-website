---
title: libopus 1.2-beta
categories: ["release", "dev"]
date: 2017-05-24
layout: post
component: libopus
---

This [Opus 1.2-beta](https://archive.mozilla.org/pub/opus/opus-1.2-beta.tar.gz) beta release
of the upcoming Opus 1.2 fixes a bug in surround encoding causing very bad quality
on signals beyond a certain amplitude. Thanks to Franziska Trojahn and others from HfT Leipzig
for finding this issue through their [listening test](https://www.hft-leipzig.de/fileadmin/image_hftl/Institut_TKI/ESSV2017Trojahn.pdf) (the quality of the two bad files in the paper should now be similar to the others). Also included in this release are some more ARM Neon optimizations and some low-bitrate quality tuning.

Source code: [opus-1.2-beta.tar.gz](https://archive.mozilla.org/pub/opus/opus-1.2-beta.tar.gz)
