---
layout: page
title: Comparison
permalink: /comparison/
---

# Codec Landscape

## Quality vs Bitrate

The figure below illustrates the quality of various codecs as a function of the bitrate. It attempts to summarize
results from a collection of listening tests and (when no data exists) show anecdotal evidence. It is overall fairly
representative, but attempting to extract any exact value at a particular bitrate is certainly not recommended.

<a href="quality.svg">
	<img alt="Illustration of the quality of different codecs" src="quality.png" />
</a>


## Bitrate/Latency Comparison

<a href="opus_comparison.png">
	<img alt="Illustration showing overlapping circles against delay/quality to suggest applications where Opus is useful." src="opus_comparison.png" />
</a>


## Listening Tests

Several tests were conducted on Opus, but only the ones conducted on the final bit-stream are listed below.
Although these should give a good idea of the quality of Opus at the time of its standardization (and 1.0 release),
we are hoping that newer and more advanced encoders will reach even better quality.

### HydrogenAudio (64 kb/s)

These are the results of ABC/HR tests comparing Opus with Vorbis and HE-AAC on 48 kHz stereo music at 64 kb/s.
For the full details, see the [official results page][hydro64] and [Greg Maxwell's analysis/listening page][maxwell].

<a href="http://people.xiph.org/~greg/opus/ha2011/">
	<img src="opus_ha_results.png" alt="Bar chart showing Opus outperforming two AAC-HE encoders and libvorbis." />
</a>

### HydrogenAudio (96 kb/s)

These are the results of a second set of ABC/HR tests on 48 kHz stereo music comparing Opus with Vorbis and
LC-AAC at 96 kb/s and MP3 at 136 kb/s. For the full details, see the [official results page][hydro96].

<a href="http://listening-test.coresv.net/results.htm">
	<img src="opus_ha_results_96kbps.png" alt="Scatter plots showing Opus outperforming two LC-AAC encoders, libvorbis, and a 136 kb/s MP3 encoder." />
</a>

### Google listening tests

Jan Skoglund from Google organized two sets of listening tests. The [first set of listening tests][google_1]
includes a narrowband speech test, a wideband-fullband speech test, and a stereo music test.

The [second set of listening tests][google_2] measures the narrowband and wideband/fullband speech quality on
Mandarin and the transcoding quality in narrowband and wideband.

### Nokia listening test

Anssi Ramo and Henri Toukomaa from Nokia measured the Opus speech quality at various rates and published
their results in this conference paper:

-  Anssi Ramo and Henri Toukomaa, [Voice Quality Characterization of IETF Opus Codec][nokia], _Proc. Interspeech 2011_, Florence, Italy, August 2011.

In this paper, the Opus "hybrid" and "MDCT" curves measure the constant bitrate (CBR) quality, which is not as
good as the quality Opus achieves with variable bitrate (VBR).


[hydro64]: http://listening-tests.hydrogenaud.io/igorc/results.html
[maxwell]: http://people.xiph.org/~greg/opus/ha2011/
[hydro96]: http://listening-test.coresv.net/results.htm
[google_1]: https://opus-codec.org/comparison/GoogleTest1.pdf
[google_2]: https://opus-codec.org/comparison/GoogleTest2.pdf
[nokia]: https://pdfs.semanticscholar.org/064c/d1c023b658aaa2ee8259286fc9998801e77b.pdf
