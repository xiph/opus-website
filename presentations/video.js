var vlcActiveX = false;
var vlcPlugin = false;
var videoElement = false;
var oggPlugin = false;
var javaEnabled = false;
var theorahelperurl = "http://www.theora.org/";
var cortadourl = '';

function initVideo()
{

    var video = document.createElement("video");

    if ((video.canPlayType
	 && video.canPlayType("video/ogg;codecs=\"theora,vorbis\"") ==
	 "probably") || (!video.canPlayType && video.play)) {
	videoElement = true;
    }

    if (!videoElement) {
	var searchedMimeTypes = false;
	var foundJavaMimeType = false;

	// search for MIME-types
	if (navigator.mimeTypes && navigator.mimeTypes.length > 0) {

	    searchedMimeTypes = true;

	    for (var i = 0; i < navigator.mimeTypes.length; i++) {
		if (navigator.mimeTypes[i].type.indexOf("video/ogg") > -1) {
		    oggPlugin = true;
		}
		if (navigator.mimeTypes[i].type.
		    indexOf("application/x-vlc-plugin") > -1) {
		    vlcPlugin = true;
		}
		if (navigator.mimeTypes[i].type.
		    indexOf("application/x-java-applet") > -1) {
		    foundJavaMimeType = true;
		}
	    }
	}


	if (searchedMimeTypes) {
	    javaEnabled = navigator.javaEnabled() && foundJavaMimeType;
	} else {
	    javaEnabled = navigator.javaEnabled();
	}

	var inlinePlayback = vlcActiveX || vlcPlugin || oggPlugin
	    || javaEnabled;

	var videos = document.getElementsByTagName("video");

	// replace all video elements with fallbacks
	var i = 0;
	while (videos.length > 0) {

	    var video = videos[0];

	    var src = video.getAttribute("src");
	    var poster = video.getAttribute("poster");
	    var width = video.getAttribute("width");
	    var height = video.getAttribute("height");
	    var controls = video.getAttribute("controls");
	    var autoplay = video.getAttribute("autoplay");
	    var duration = video.getAttribute("duration");
	    var id = video.getAttribute("id");

	    if (controls != null)
		controls = "true";
	    else
		controls = "false";

	    if ((autoplay == null) || !inlinePlayback)
		autoplay = "false";
	    else if (autoplay != null)
		autoplay = "true";
	    if (autoplay == "false") {
		autoplay = "true";
		var posterid = id + "_poster_" + i;
		var jsexec = "swapVideo(document.getElementById('"
		    + posterid + "'),'" + src + "','" +
		    width + "','" + height + "','" +
		    controls + "','" + duration + "','" + autoplay +
		    "','" + javaEnabled + "','" +
		    oggPlugin + "','" + vlcActiveX + "','" + vlcPlugin +
		    "');";
		if (poster) {
		    var posterobj = document.createElement("img");
		    posterobj.setAttribute("id", posterid);
		    posterobj.setAttribute("src", poster);
		    posterobj.setAttribute("width", width);
		    posterobj.setAttribute("height", height);
		    if (inlinePlayback) {
			posterobj.setAttribute("onclick", jsexec);
		    } else {
			var link = document.createElement("a");
			link.setAttribute("href", src);
			link.appendChild(posterobj);
			posterobj = link;
		    }
		} else {
		    var posterobj = document.createElement("span");
		    posterobj.setAttribute("id", posterid);
		    var link = document.createElement("a");
		    if (inlinePlayback) {
			link.setAttribute("href", "javascript:" + jsexec);
		    } else {
			link.setAttribute("href", src);
		    }
		    var text = document.createTextNode("> Play video <");
		    link.appendChild(text);
		    posterobj.appendChild(link);
		}

		if (!inlinePlayback) {
		    var div = document.createElement("div");
		    div.setAttribute("align", "center");
		    div.appendChild(posterobj);
		    div.appendChild(document.createElement("br"));
		    small = document.createElement("small");
		    small.setAttribute("class", "small");
		    text = document.createTextNode(" (");
		    small.appendChild(text);
		    link = document.createElement("a");
		    link.setAttribute("href", theorahelperurl);
		    text = document.createTextNode("Ogg/Theora");
		    link.appendChild(text);
		    small.appendChild(link);
		    text = document.createTextNode(" required)");
		    small.appendChild(text);
		    div.appendChild(small);
		    posterobj = div;
		}

		video.parentNode.replaceChild(posterobj, video);

	    } else {
		swapVideo(video, src, width, height, controls, duration,
			  autoplay, javaEnabled, oggPlugin, vlcActiveX,
			  vlcPlugin);
	    }
	    i++;
	}
    }
}

function swapVideo(video, src, width, height, controls, duration, autoplay,
		   javaEnabled, oggPlugin, vlcActiveX, vlcPlugin)
{
    var parent = video.parentNode;
    var containerdiv = document.createElement("div");
    containerdiv.setAttribute("width", width);
    containerdiv.setAttribute("height", height);
    if (javaEnabled=="true") {
	if (cortadourl == '') {
	    cortadourl = cortadourl + 'cortado.jar';
	}
	var applet = document.createElement("applet");
	applet.setAttribute("code", "com.fluendo.player.Cortado.class");
	applet.setAttribute("archive", cortadourl);
	applet.setAttribute("width", width);

	if (controls == "true") {
		height=parseInt(height)+12;
	}
	applet.setAttribute("height", height);

	var param = document.createElement("param");
	param.setAttribute("name", "BufferSize");
	param.setAttribute("value", "4096");
	applet.appendChild(param);

	param = document.createElement("param");
	param.setAttribute("name", "BufferHigh");
	param.setAttribute("value", "25");
	applet.appendChild(param);

	param = document.createElement("param");
	param.setAttribute("name", "BufferLow");
	param.setAttribute("value", "5");
	applet.appendChild(param);

	param = document.createElement("param");
	param.setAttribute("name", "url");
	param.setAttribute("value", src);
	applet.appendChild(param);

	param = document.createElement("param");
	param.setAttribute("name", "autoPlay");
	param.setAttribute("value", autoplay);
	applet.appendChild(param);

	if (controls == "true") {
	    param = document.createElement("param");
	    param.setAttribute("name", "showStatus");
	    param.setAttribute("value", "show");
	    applet.appendChild(param);
	}

	if (duration) {
	    param = document.createElement("param");
	    param.setAttribute("name", "duration");
	    param.setAttribute("value", duration);
	    applet.appendChild(param);
	}
	containerdiv.appendChild(applet);
	parent.replaceChild(containerdiv, video);
    } else if (oggPlugin=="true") {
	var object = document.createElement("object");
	object.setAttribute("width", width);
	object.setAttribute("height", height);
	object.setAttribute("data", src);
	object.setAttribute("type", "video/ogg");
	containerdiv.appendChild(object);
	parent.replaceChild(containerdiv, video);
    } else if (vlcActiveX=="true") {
	var span = document.createElement("span");
	span.innerHTML =
	    "<object classid='clsid:9BE31822-FDAD-461B-AD51-BE1D1C159921' codebase='http://downloads.videolan.org/pub/videolan/vlc/latest/win32/axvlc.cab' width='"
	    + width + "' height='" + height +
	    "' id='vlc' events='True'><param name='Src' value='" + src +
	    "'/> <param name='ShowDisplay' value='True'/><param name='AutoLoop' value='False'/><param name='AutoPlay' value='False'/></object>";
	parent.replaceChild(span, video);
	containerdiv.appendChild(span);
	parent.replaceChild(containerdiv, video);
    } else if (vlcPlugin=="true") {
	var span = document.createElement("span");
	span.innerHTML =
	    "<object type='application/x-vlc-plugin' id='vlc_element' width='"
	    + width + "' height='" + height + "' data='" + src +
	    "'></object><br>" +
	    "<input type='button' value='play' onClick='document.getElementById(\"vlc_element\").play()'>"
	    +
	    "<input type='button' value='stop' onClick='document.getElementById(\"vlc_element\").stop()'>";
	containerdiv.appendChild(span);
	parent.replaceChild(containerdiv, video);
    } else {
	var msg =
	    document.createTextNode
	    ("No fitting Ogg decoder found. Install a proper browser with Ogg Theora support or a browser plugin fit for Ogg Theora playback.");
	parent.appendChild(msg);
    }

}
