---
layout: page
title: Examples
permalink: /examples/
---

# Opus examples

## Audio samples

These samples demonstrate the quality achievable with Opus. They are have been encoded with Opus and then
decoded back to wav so that any browser can play them. The bitrates indicated are target bitrates, i.e.
the average that would be achieved on a large audio collection.

<div class="example">
	<p><strong>Opus speech samples, various bitrates</strong></p>
	<audio id="audio1" style="width: 100%" controls="controls"></audio>
	<label for="quality1">Playback: </label>
	<select class="ex-select" id="quality1" name="quality1" data-target="audio1 dl1">
		<option value="speech_orig">Uncompressed</option>
		<option value="speech_8kbps_nb">8 kb/s (NB)</option>
		<option value="speech_12kbps_mb">12 kb/s (MB)</option>
		<option value="speech_16kbps_wb">16 kb/s (WB)</option>
		<option value="speech_24kbps_swb">24 kb/s (SWB)</option>
		<option value="speech_32kbps_fb">32 kb/s (FB)</option>
	</select>
	<span style="float: right;"><a id="dl1">Download</a></span>
	<hr />
	<p><strong>Opus stereo music samples, various bitrates</strong></p>
	<audio id="audio2" style="width: 100%" controls="controls"></audio>
	<label for="quality2">Playback: </label>
	<select class="ex-select" id="quality2" name="quality2" data-target="audio2 dl2">
		<option value="music_orig">Uncompressed</option>
		<option value="music_48kbps">48 kb/s VBR</option>
		<option value="music_64kbps">64 kb/s VBR</option>
		<option value="music_96kbps">96 kb/s VBR</option>
		<option value="music_128kbps">128 kb/s VBR</option>
	</select>
	<span style="float: right;"><a id="dl2">Download</a></span>
	<hr />
	<p><strong>Packet loss robustness at 24 kb/s wideband, 30% loss</strong></p>
	<audio id="audio3" style="width: 100%" controls="controls"></audio>
	<label for="quality3">Playback: </label>
	<select class="ex-select" id="quality3" name="quality3" data-target="audio3 dl3">
		<option value="plc_orig">No loss</option>
		<option value="plc30_opus">Opus 30% loss</option>
		<option value="plc30_opus_fec">Opus 30% loss with FEC</option>
		<option value="plc30_amrwb">AMR-WB 30 % loss</option>
	</select>
	<span style="float: right;"><a id="dl3">Download</a></span>
</div>

## Bitrate scalability

The following example demonstrates what happens when gradually varying the bitrate from 8 kb/s to 64 kb/s.
It's an extreme example, but it shows how Opus can change bandwidth and bitrate seamlessly without any glitch.
In practical applications, bitrate changes are expected to occur much more slowly.

<div class="example">
	<div id="stereo" style="text-align: center; display: none;">
		<img style="height: 1.5em; vertical-align: middle;" src="/assets/img/stereo.svg" alt="" />
		<span>Stereo</span>
	</div>
	<div id="mono" style="text-align: center;">
		<img style="height: 1.5em; vertical-align: middle;" src="/assets/img/mono.svg" alt="" />
		<span>Mono</span>
	</div>
	<div style="width: 50%; float: left; text-align: center;">
		<div id="gauge_1"></div>
	</div>
	<div style="width: 50%; float: left; text-align: center;">
		<div id="gauge_2"></div>
	</div>
	<audio id="p1" style="width: 100%" src="/static/examples/sweep.wav" controls="controls"></audio>
</div>

<script type="text/javascript" src="/assets/js/raphael-2.1.4.min.js"></script>
<script type="text/javascript" src="/assets/js/justgage.js"></script>
<script type="text/javascript" src="/assets/js/examples.js"></script>

## Example of use in a web page

Opus works with the `<audio>` element just like Vorbis. For example, this code in a web page
`<audio src="ehren-paper_lights-96.opus" controls></audio>`
displays an embedded player that can play an Opus file:

<div class="example">
	<p>Paper Lights by <a href="http://magnatune.com/artists/ehren">Ehren Starks</a>, encoded at 96 kb/s</p>
	<audio src="https://people.xiph.org/~giles/2012/opus/ehren-paper_lights-96.opus" controls="controls">
		Your browser does not support the audio element
	</audio>
	<a href="https://creativecommons.org/licenses/by-nc-sa/1.0/">
		<img src="https://i.creativecommons.org/l/by-nc-sa/1.0/80x15.png" alt="CC-BY-NC-SA" />
	</a>
	<p>Playback should work in Firefox or Chrome.</p>
</div>

## Live HTTP streams

These streams can be played in using [Firefox][firefox]
(version 15 or higher), foobar2000, Gstreamer/Totem (in Linux), or using opusdec from the command-line.

<div class="example">
	<p><a href="http://repeater.xiph.org:8000/temporalfugue.opus">Hypnotic torture clock</a> (Mono 12kbit/sec)</p>
	<audio src="http://repeater.xiph.org:8000/temporalfugue.opus" controls="controls"></audio>
	<p>A rhythmic electronic chant of the current time. Prolonged exposure to this Temporal Fugue is not
		recommended. The stream is synthesized in real-time using <a href="http://boodler.org/">boodler</a> and
		encoded using opusenc and streamed using oggfwd and Icecast.</p>
	<hr />
	<p><a href="http://repeater.xiph.org:8000/clock.opus">Endless drone</a> (Stereo 64kbit/sec)</p>
	<audio src="http://repeater.xiph.org:8000/clock.opus" controls="controls"></audio>
	<p>A simulation of an <a href="https://en.wikipedia.org/wiki/FM3">FM3 Buddha Machine</a>, this stream produces an
		endless stream of peaceful droning. The stream is synthesized in real-time using
		<a href="http://boodler.org/">boodler</a> and encoded using opusenc and streamed using oggfwd and Icecast.</p>
</div>

There is also a list of Opus internet radio streams on the [Icecast directory][icecast_dir].

[firefox]: https://www.mozilla.org/en-US/firefox/new/
[icecast_dir]: http://dir.xiph.org/by_format/Opus
