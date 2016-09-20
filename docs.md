---
layout: page
title: Documentation
permalink: /docs/
---

# Opus documentation

## Developing with libopus (API reference)

Libopus is the reference implementation of the Opus Codec.

<ul class="download-list">
   <li>libopus 1.1.3 release
      <ul>
         <li><a class="i-html" href="/docs/opus_api-1.1.3/index.html">HTML</a></li>
         <li><a class="i-pdf" href="/docs/opus_api-1.1.3.pdf">PDF</a></li>
      </ul>
   </li>
   <li>pre-release version
      <ul>
         <li><a class="i-html" href="https://mf4.xiph.org/jenkins/view/opus/job/opus/ws/doc/html/index.html">HTML</a></li>
         <li><a class="i-pdf" href="https://mf4.xiph.org/jenkins/view/opus/job/opus/ws/doc/latex/refman.pdf">PDF</a></li>
      </ul>
   </li>
   <li>libopus 1.0.3 release
      <ul>
         <li><a class="i-html" href="/docs/html_api-1.0.3/index.html">HTML</a></li>
         <li><a class="i-pdf" href="/docs/opus_api-1.0.3.pdf">PDF</a></li>
      </ul>
   </li>
</ul>


## Developing with Opusfile (API reference)

Opusfile is a easy to use library that encapsulates everything you need beyond libopus to correctly and
completely support the playback of .opus (OggOpus) files.

<ul class="download-list">
   <li>libopusfile 0.7 release
      <ul>
         <li><a class="i-html" href="/docs/opusfile_api-0.7/index.html">HTML</a></li>
         <li><a class="i-pdf" href="/docs/opusfile_api-0.7.pdf">PDF</a></li>
      </ul>
   </li>
   <li>pre-release version
      <ul>
         <li><a class="i-html" href="https://mf4.xiph.org/jenkins/view/opus/job/opusfile-unix/ws/doc/html/index.html">HTML</a></li>
         <li><a class="i-pdf" href="https://mf4.xiph.org/jenkins/view/opus/job/opusfile-unix/ws/doc/latex/refman.pdf">PDF</a></li>
      </ul>
   </li>
</ul>


## Opus-tools man-pages

<ul class="download-list">
   <li>opusenc <span>(.wav to .opus)</span>
      <ul>
         <li><a class="i-html" href="https://mf4.xiph.org/jenkins/view/opus/job/opus-tools/ws/man/opusenc.html">HTML</a></li>
      </ul>
   </li>
   <li>opusdec <span>(.opus to .wav)</span>
      <ul>
         <li><a class="i-html" href="https://mf4.xiph.org/jenkins/view/opus/job/opus-tools/ws/man/opusdec.html">HTML</a></li>
      </ul>
   </li>
   <li>opusinfo <span>(.opus file info)</span>
      <ul>
         <li><a class="i-html" href="https://mf4.xiph.org/jenkins/view/opus/job/opus-tools/ws/man/opusinfo.html">HTML</a></li>
      </ul>
   </li>
</ul>


## IETF specifications

<ul class="download-list">
    <li>Official Opus codec RFC<br /><span>RFC 6716</span>
        <ul>
            <li><a class="i-html" href="https://tools.ietf.org/html/rfc6716">HTML</a></li>
            <li><a class="i-pdf" href="https://tools.ietf.org/pdf/rfc6716">PDF</a></li>
            <li><a class="i-txt" href="https://tools.ietf.org/rfc/rfc6716.txt">TXT</a></li>
        </ul>
    </li>
    <li>Official Opus RTP specification<br /><span>RFC 7587</span>
        <ul>
            <li><a class="i-html" href="https://tools.ietf.org/html/rfc7587">HTML</a></li>
            <li><a class="i-pdf" href="https://tools.ietf.org/pdf/rfc7587">PDF</a></li>
            <li><a class="i-txt" href="https://tools.ietf.org/rfc/rfc7587.txt">TXT</a></li>
        </ul>
    </li>
    <li>Official Opus file format specification<br /><span>RFC 7845</span>
        <ul>
            <li><a class="i-html" href="https://tools.ietf.org/html/rfc7845.html">HTML</a></li>
            <li><a class="i-pdf" href="https://tools.ietf.org/pdf/rfc7845.pdf">PDF</a></li>
            <li><a class="i-txt" href="https://tools.ietf.org/id/rfc7845.txt">TXT</a></li>
        </ul>
    </li>
</ul>


## Other specifications

<ul class="download-list">
   <li>Opus in ISO Base Media Format<br /><span>mp4 encapsulation</span>
      <ul>
         <li><a class="i-html" href="/docs/opus_in_isobmff.html">HTML</a></li>
      </ul>
   </li>
   <li>Opus in WebM<br /><span>Matroska encapsulation</span>
      <ul>
         <li><a class="i-html" href="https://wiki.xiph.org/MatroskaOpus">HTML</a></li>
      </ul>
   </li>
</ul>


## Tutorials

-  [Encoding Opus from foobar2000 (Windows)](http://www.saunalahti.fi/~cse/Opus/)
-  Amit Ashara, [Implementing OPUS Voice Code for TM4C129x Device](http://www.ti.com/lit/an/spma076/spma076.pdf), Application
   Report, Texas Instruments, June 2016.


## Inside Opus

Beyond the RFC itself, there are a several documents out there that describe Opus or parts of Opus. Not everything
in them applies to the final version of Opus, but they should still be useful to those who want to understand how
Opus works. For an overview of the codec, see the [linux.conf.au 2012 Opus presentation][presentations].

The most accessible descriptions of Opus are probaly Monty's demos. We have also written some papers describing the
algorithm in details:

-  J.-M. Valin, G. Maxwell, T. B. Terriberry, K. Vos, [High-Quality, Low-Delay Music Coding in the OpusCodec][aes135_opus_celt], Accepted for the 135th AES Convention, 2013.
-  K. Vos, K. V. Sorensen, S. S. Jensen, J.-M. Valin, [Voice Coding with Opus][aes135_opus_silk], Accepted for the 135th AES Convention, 2013.
-  K. Vos, [A Fast Implementation of Burg's Method][vos_fastburg], 2013.


## Older contents

For historical reasons, some of the information on the algorithmic details is specific to either SILK or CELT.

For more information on SILK, see the [slides][79_ietf_slides] by Koen Vos from the 79th IETF meeting.

You can see Tim Terriberry's [linux.conf.au 2009 CELT presentation][celt_presentations].
Those with a signal processing background can also read two papers that were published on CELT:

-  J.-M. Valin, T. B. Terriberry, C. Montgomery, G. Maxwell, [A High-Quality Speech and Audio Codec With Less Than 10 ms delay][celt_tasl], IEEE Transactions on Audio, Speech and Language Processing, Vol. 18, No. 1, pp. 58-67, 2010.
-  J.-M. Valin, T. B. Terriberry, G. Maxwell, [A Full-Bandwidth Audio Codec with Low Complexity and Very Low Delay][celt_eusipco2009], Proc. EUSIPCO, 2009.

Paper 1 describes CELT version 0.3.2, while paper 2 applies to 0.5.2. The main things that changed since these papers
were written are the pitch prediction/filtering and the birdie avoidance method.


## Test Vectors

Test files to verify that the Opus decoders are operating properly.

[Bitstream conformance set][opus_testvectors] for the codec.

This set of bitstreams is used to measure codec implementations for conformance with the specification.
Also available from [Xiph.Org][opus_testvectors_xiph], [Mozilla][opus_testvectors_moz] and the [IETF][opus_testvectors_ietf].

[The .opus test set][opus_testvectors_large] is an in-development larger test suite for .opus files. These are
suitable for testing opusdec and other media-player software. Files prefixed with 'broken' and 'failure' are
intentionally malformed and at least the latter should be rejected.

Note that these files are designed to exercise all aspects of an implementation, the fact that they sound terrible
is an intended consequence.

[aes135_opus_celt]: http://jmvalin.ca/papers/aes135_opus_celt.pdf
[aes135_opus_silk]: http://jmvalin.ca/papers/aes135_opus_silk.pdf
[vos_fastburg]: /docs/vos_fastburg.pdf
[79_ietf_slides]: https://www.ietf.org/proceedings/79/slides/codec-4.pdf
[celt_presentations]: http://celt-codec.org/presentations/
[celt_tasl]: http://jmvalin.ca/papers/celt_tasl.pdf
[celt_eusipco2009]: http://jmvalin.ca/papers/celt_eusipco2009.pdf
[opus_testvectors]: /docs/opus_testvectors.tar.gz
[opus_testvectors_xiph]: http://downloads.xiph.org/releases/opus/opus_testvectors.tar.gz
[opus_testvectors_moz]: https://archive.mozilla.org/pub/opus/opus_testvectors.tar.gz
[opus_testvectors_large]: http://people.xiph.org/~greg/opus_testvectors/
[opus_testvectors_ietf]: https://www.ietf.org/proceedings/83/slides/slides-83-codec-0.gz
[presentations]: {{ "/presentations" | prepend: site.baseurl }}

