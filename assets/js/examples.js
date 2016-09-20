// Player source switching

// Event handler
function updateTargets(e, pseudo_this) {
  var sender = pseudo_this || this;
  var targets = sender.getAttribute("data-target");
  targets = targets.split(" ");

  for (var i = 0; i < targets.length; i++) {
    var t = document.getElementById(targets[i]);
    if (!t)
      return;

    if (t.tagName.toLowerCase() === "audio") {
      var playing = !(t.paused);
      var position = t.currentTime;
      t.src= "/examples/samples/" + sender.value + ".wav";

      // We can't set the playback time on the new audio to match where
      // the old audio left off until metadata has successfully loaded;
      // push the rest of the playback resume process into a callback
      t.addEventListener("loadedmetadata", function() {
        // don't set if zero
        if (position > 0)
          this.currentTime = position;
        if (playing)
          this.play();
        console.log(arguments.callee);
        this.removeEventListener("loadedmetadata", arguments.callee, true);
      }, true);
      t.load();
    } else if (t.tagName.toLowerCase() === "a") {
      t.href = "/examples/samples/" + sender.value + ".wav";
    }
  };
}

// Find all selects and register event handler
var selects = document.getElementsByClassName("ex-select");

for (var i = 0; i < selects.length; i++) {
  selects[i].addEventListener("change", updateTargets, false);
  updateTargets(undefined, selects[i]);
}

// Setup gauges
var player = document.getElementById("p1");
var stereo = document.getElementById("stereo");
var mono = document.getElementById("mono");
var bitrateGauge = new JustGage({
    id: "gauge_1",
    value: 8,
    min: 0,
    max: 64,
    title: "Bitrate",
    label: "kbps",
    levelColors: ["#a9d70b"]
});
var bandwidthGauge = new JustGage({
    id: "gauge_2",
    value: 4,
    min: 0,
    max: 20,
    title: "Audio bandwidth",
    label: "kHz",
    levelColors: ["#a9d70b"]
});

var bitrateStart = 8;
var bitrateEnd = 64;

// Event handler
function updateGauges() {
  if (!player.duration)
    return;

  // Update bitrate gauge
  var time = player.currentTime;
  var progress = time / player.duration;
  var bitrate = (bitrateEnd - bitrateStart) * progress + bitrateStart;
  bitrateGauge.refresh(bitrate);

  // Update Mono/Stereo
  if (time < 6.14) {
    stereo.style.display = "none";
    mono.style.display = "";
  } else {
    stereo.style.display = "";
    mono.style.display = "none";
  }

  // Update bandwidth gauge
  var bandwidth = 4;
  if (time < 1.06) {
    bandwidth = 4;
  } else if (time < 3.24) {
    bandwidth = 6;
  } else if (time < 4) {
    bandwidth = 8;
  } else if (time < 6.4) {
    bandwidth = 12;
  } else {
    bandwidth = 20;
  }
  bandwidthGauge.refresh(bandwidth);
}

// Register player event
player.addEventListener("timeupdate", updateGauges, false);
