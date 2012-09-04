
// Search up from one of the control elements until we hit the caption wrapper wrapper
function findWrapper(el){
    var wrapper = el;
    while (wrapper && (!wrapper.className || wrapper.className.toLowerCase() != "demowrapper")){
        wrapper = wrapper.parentNode;
    }
    return wrapper;
}

// Search up to caption div, then back down to sibling target
function findUnder(el,target){
    var wrapper = el;
    while (wrapper && (!wrapper.className || wrapper.className.toLowerCase() != "demowrapper")){
        wrapper = wrapper.parentNode;
    }
    if(!wrapper) return;
    return $(wrapper).find(target)[0];
}

// Set the audio playing to the current audio choice
function SetAudio(anchor)
{
    var audio = findUnder(anchor,'audio');
    var caption = findWrapper(anchor);
    var src = $(anchor).attr('value');
    if(!audio) return;
    if(!caption)return;
    if(!src)return;

    // reloading the audio will cause it to start over; save play status and playtime
    var playing = !(audio.paused);
    var position = audio.currentTime;

    audio.src=src;

    // We can't set the playback time on the new audio to match where
    // the old audio left off until metadata has successfully loaded;
    // push the rest of the playback resume process into a callback
    audio.addEventListener("loadedmetadata",
                           function() {
                               // don't set if zero
                               if(position>0)
                                   audio.currentTime = position;
                               if(playing)
                                   audio.play();
                               this.removeEventListener("loadedmetadata",arguments.callee,true);
                           }, true);
 
    audio.load();

    $(caption).find('a').each(function(){
        this.style.background="none";
    });
    anchor.style.background="#ffe080";

}

$(document).ready(function() {

        // default audio sources aren't statically set in the HTML;
        // pull out the first option in each caption with an audio tag
        // and the correct structure
        $('.caption').each(function() {
            $(this).find(".demowrapper").each(function(){
                    var first=undefined;
                    $(this).find("a").each(function(){
                            this.onmousedown=function(){SetAudio(this);};
                            if(first===undefined){
                                SetAudio(this);
                                first=this;
                            }
                        });
                });
            });
    });

