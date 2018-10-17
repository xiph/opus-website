---
layout: page
title: Test Vectors
permalink: /testvectors/
---

# Test Vectors

These are the [original test vectors][testvectors] for the version of the Opus
codec in RFC6716. A copy of these
test vectors is [available from the IETF][ietf-vectors].

Those testvectors are still valid (and passing them still shows compliance),
but [new test vectors][rfc8251-testvectors], provided with RFC 8251, now allow
some decoder improvements while maintaining full compatibility.
These new testvectors are also
[available from the IETF][rfc8251-ietf-vectors].

On POSIX environments, the run_vectors.sh script can be used to
verify all test vectors.  This can be done with

```
run_vectors.sh <exec path> <vector path> <rate>
```

where `exec path` is the directory where the opus_demo and
opus_compare executables are built, `vector path` is the directory
containing the test vectors, and `rate` is the sampling rate to test
(8000, 12000, 16000, 24000, or 48000).

[testvectors]: {{ "/static/testvectors/opus_testvectors.tar.gz" | prepend: site.baseurl }}
[ietf-vectors]: https://www.ietf.org/proceedings/83/slides/slides-83-codec-0.gz
[rfc8251-testvectors]: {{ "/static/testvectors/opus_testvectors-rfc8251.tar.gz" | prepend: site.baseurl }}
[rfc8251-ietf-vectors]: https://www.ietf.org/proceedings/98/slides/materials-98-codec-opus-newvectors-00.tar.gz
