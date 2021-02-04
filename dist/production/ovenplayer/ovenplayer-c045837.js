/*! For license information please see ovenplayer-c045837.js.LICENSE */
(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{136:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});t.default=function(e,t,n){var r=t?1e3:1024;if(Math.abs(e)<r)return e+" B";var o=n||"B",a=["k"+o,"M"+o,"G"+o,"T"+o,"P"+o,"E"+o,"Z"+o,"Y"+o],i=-1;do{e/=r,++i}while(Math.abs(e)>=r&&i<a.length-1);return e.toFixed(1)+a[i]}},312:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=l(n(318)),o=l(n(319)),a=l(n(66)),i=l(n(313)),u=n(308),s=n(1);function l(e){return e&&e.__esModule?e:{default:e}}t.default=function(e,t,n){OvenPlayerConsole.log("[Provider] loaded. ");var l={};(0,a.default)(l);var c=e.element,d=null,g=null;e.adTagUrl&&(OvenPlayerConsole.log("[Provider] Ad Client - ",t.getAdClient()),(d=t.getAdClient()===s.AD_CLIENT_VAST?(0,o.default)(c,l,t,e.adTagUrl):(0,r.default)(c,l,t,e.adTagUrl))||console.log("Can not load due to google ima for Ads.")),g=(0,i.default)(c,l,d?d.videoEndedCallback:null,t),c.playbackRate=c.defaultPlaybackRate=t.getPlaybackRate();var E=function(r){var o=e.sources[e.currentSource];if(e.framerate=o.framerate,l.setVolume(t.getVolume()),e.framerate||t.setTimecodeMode(!0),n)n(o,r);else{OvenPlayerConsole.log("source loaded : ",o,"lastPlayPosition : "+r);var a=c.src;o.file!==a&&(c.src=o.file,(a||""===a)&&c.load(),r&&r>0&&l.seek(r)),r>0&&(l.seek(r),t.isAutoStart()),t.isAutoStart()}};return l.getName=function(){return e.name},l.getMse=function(){return e.mse},l.canSeek=function(){return e.canSeek},l.setCanSeek=function(t){e.canSeek=t},l.isSeeking=function(){return e.seeking},l.setSeeking=function(t){e.seeking=t},l.setMetaLoaded=function(){e.isLoaded=!0},l.metaLoaded=function(){return e.isLoaded},l.setState=function(t){if(e.state!==t){var n=e.state;if(OvenPlayerConsole.log("Provider : setState()",t),n===s.STATE_AD_PLAYING&&(t===s.STATE_ERROR||t===s.STATE_IDLE))return!1;switch(OvenPlayerConsole.log("Provider : triggerSatatus",t),t){case s.STATE_COMPLETE:l.trigger(s.PLAYER_COMPLETE);break;case s.STATE_PAUSED:l.trigger(s.PLAYER_PAUSE,{prevState:e.state,newstate:s.STATE_PAUSED});break;case s.STATE_AD_PAUSED:l.trigger(s.PLAYER_PAUSE,{prevState:e.state,newstate:s.STATE_AD_PAUSED});break;case s.STATE_PLAYING:l.trigger(s.PLAYER_PLAY,{prevState:e.state,newstate:s.STATE_PLAYING});case s.STATE_AD_PLAYING:l.trigger(s.PLAYER_PLAY,{prevState:e.state,newstate:s.STATE_AD_PLAYING})}e.state=t,l.trigger(s.PLAYER_STATE,{prevstate:n,newstate:e.state})}},l.getState=function(){return e.state},l.setBuffer=function(t){e.buffer=t},l.getBuffer=function(){return e.buffer},l.isLive=function(){return!!e.isLive||c.duration===1/0},l.getDuration=function(){return l.isLive()?1/0:c.duration},l.getPosition=function(){return c?c.currentTime:0},l.setVolume=function(e){if(!c)return!1;c.volume=e/100},l.getVolume=function(){return c?100*c.volume:0},l.setMute=function(e){return!!c&&(void 0===e?(c.muted=!c.muted,l.trigger(s.CONTENT_MUTE,{mute:c.muted})):(c.muted=e,l.trigger(s.CONTENT_MUTE,{mute:c.muted})),c.muted)},l.getMute=function(){return!!c&&c.muted},l.preload=function(n,r){return e.sources=n,e.currentSource=(0,u.pickCurrentSource)(n,e.currentSource,t),E(r||0),new Promise(function(e,n){t.isMute()&&l.setMute(!0),t.getVolume()&&l.setVolume(t.getVolume()),e()})},l.load=function(n){e.sources=n,e.currentSource=(0,u.pickCurrentSource)(n,e.currentSource,t),E(e.sources.starttime||0)},l.play=function(){if(OvenPlayerConsole.log("Provider : play()"),!c)return!1;if(l.getState()!==s.STATE_PLAYING)if(d&&d.isActive()||d&&!d.started())d.play().then(function(e){OvenPlayerConsole.log("Provider : ads play success")}).catch(function(e){OvenPlayerConsole.log("Provider : ads play fail",e)});else{var e=c.play();void 0!==e?e.then(function(){OvenPlayerConsole.log("Provider : video play success")}).catch(function(e){OvenPlayerConsole.log("Provider : video play error",e.message)}):OvenPlayerConsole.log("Provider : video play success (ie)")}},l.pause=function(){if(OvenPlayerConsole.log("Provider : pause()"),!c)return!1;l.getState()===s.STATE_PLAYING?c.pause():l.getState()===s.STATE_AD_PLAYING&&d.pause()},l.seek=function(e){if(!c)return!1;c.currentTime=e},l.setPlaybackRate=function(e){return!!c&&(l.trigger(s.PLAYBACK_RATE_CHANGED,{playbackRate:e}),c.playbackRate=c.defaultPlaybackRate=e)},l.getPlaybackRate=function(){return c?c.playbackRate:0},l.getSources=function(){return c?e.sources.map(function(e,t){var n={file:e.file,type:e.type,label:e.label,index:t,sectionStart:e.sectionStart,sectionEnd:e.sectionEnd,gridThumbnail:e.gridThumbnail};return e.lowLatency&&(n.lowLatency=e.lowLatency),n}):[]},l.getCurrentSource=function(){return e.currentSource},l.setCurrentSource=function(n,r){if(n>-1&&e.sources&&e.sources.length>n)return OvenPlayerConsole.log("source changed : "+n),e.currentSource=n,l.trigger(s.CONTENT_SOURCE_CHANGED,{currentSource:n}),t.setSourceIndex(n),l.setState(s.STATE_IDLE),r&&E(c.currentTime||0),e.currentSource},l.getQualityLevels=function(){return c?e.qualityLevels:[]},l.getCurrentQuality=function(){return c?e.currentQuality:null},l.setCurrentQuality=function(e){},l.isAutoQuality=function(){},l.setAutoQuality=function(e){},l.getFramerate=function(){return e.framerate},l.setFramerate=function(t){return e.framerate=t},l.seekFrame=function(t){var n=e.framerate,r=(c.currentTime*n+t)/n;r+=1e-5,l.pause(),l.seek(r)},l.stop=function(){if(!c)return!1;for(OvenPlayerConsole.log("CORE : stop() "),c.removeAttribute("preload"),c.removeAttribute("src");c.firstChild;)c.removeChild(c.firstChild);l.pause(),l.setState(s.STATE_IDLE)},l.destroy=function(){if(!c)return!1;l.stop(),g.destroy(),d&&(d.destroy(),d=null),l.off(),OvenPlayerConsole.log("CORE : destroy() player stop, listener, event destroied")},l.super=function(e){var t=l[e];return function(){return t.apply(l,arguments)}},l}},313:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n(1),o=n(308);t.default=function(e,t,n,a){var i={};OvenPlayerConsole.log("EventListener loaded.",e,t);var u={},s=-1,l=e;return i.canplay=function(){t.setCanSeek(!0),t.trigger(r.CONTENT_BUFFER_FULL),OvenPlayerConsole.log("EventListener : on canplay")},i.durationchange=function(){i.progress(),OvenPlayerConsole.log("EventListener : on durationchange")},i.ended=function(){OvenPlayerConsole.log("EventListener : on ended"),l.pause(),t.getState()!==r.STATE_IDLE&&t.getState()!==r.STATE_COMPLETE&&t.getState()!==r.STATE_ERROR&&(n?n(function(){t.setState(r.STATE_COMPLETE)}):t.setState(r.STATE_COMPLETE))},i.loadeddata=function(){},i.loadedmetadata=function(){var e=t.getSources(),n=t.getCurrentSource(),o=n>-1?e[n].type:"",a={duration:t.isLive()?1/0:l.duration,type:o};t.setMetaLoaded(),OvenPlayerConsole.log("EventListener : on loadedmetadata",a),t.trigger(r.CONTENT_META,a)},i.pause=function(){return t.getState()!==r.STATE_COMPLETE&&t.getState()!==r.STATE_ERROR&&!l.ended&&!l.error&&l.currentTime!==l.duration&&(OvenPlayerConsole.log("EventListener : on pause"),void t.setState(r.STATE_PAUSED))},i.loadstart=function(){a&&!a.getConfig().showBigPlayButton&&a.getConfig().autoStart&&t.setState(r.STATE_LOADING)},i.play=function(){s=-1,l.paused||t.getState()===r.STATE_PLAYING||t.setState(r.STATE_LOADING)},i.playing=function(){OvenPlayerConsole.log("EventListener : on playing"),s<0&&t.setState(r.STATE_PLAYING)},i.progress=function(){var e=l.buffered;if(!e)return!1;var n=l.duration,o=l.currentTime,a=function(e,t,n){return Math.max(Math.min(e,n),t)}((e.length>0?e.end(e.length-1):0)/n,0,1);t.setBuffer(100*a),t.trigger(r.CONTENT_BUFFER,{bufferPercent:100*a,position:o,duration:n}),OvenPlayerConsole.log("EventListener : on progress",100*a)},i.timeupdate=function(){var e=l.currentTime,n=l.duration;if(!isNaN(n)){if(e>n)return l.pause(),void t.setState(r.STATE_COMPLETE);var o=t.getSources()[t.getCurrentSource()].sectionStart;o&&e<o&&t.getState()===r.STATE_PLAYING&&t.seek(o);var a=t.getSources()[t.getCurrentSource()].sectionEnd;if(a&&e>a&&t.getState()===r.STATE_PLAYING)return t.stop(),void t.setState(r.STATE_COMPLETE);n>9e15&&(n=1/0),t.isSeeking()||l.paused||t.getState()!==r.STATE_STALLED&&t.getState()!==r.STATE_LOADING&&t.getState()!==r.STATE_AD_PLAYING||function(e,t){return e.toFixed(2)===t.toFixed(2)}(s,e)||(s=-1,t.setState(r.STATE_PLAYING)),o&&o>0&&(e-=o)<0&&(e=0),a&&(n=a),o&&(n-=o),(t.getState()===r.STATE_PLAYING||t.isSeeking())&&t.trigger(r.CONTENT_TIME,{position:e,duration:n})}},i.seeking=function(){t.setSeeking(!0),OvenPlayerConsole.log("EventListener : on seeking",l.currentTime),t.trigger(r.CONTENT_SEEK,{position:l.currentTime})},i.seeked=function(){t.isSeeking()&&(OvenPlayerConsole.log("EventListener : on seeked"),t.setSeeking(!1),t.trigger(r.CONTENT_SEEKED))},i.stalled=function(){OvenPlayerConsole.log("EventListener : on stalled")},i.waiting=function(){OvenPlayerConsole.log("EventListener : on waiting",t.getState()),t.isSeeking()?t.setState(r.STATE_LOADING):t.getState()===r.STATE_PLAYING&&(s=l.currentTime,t.setState(r.STATE_STALLED))},i.volumechange=function(){OvenPlayerConsole.log("EventListener : on volumechange",Math.round(100*l.volume)),t.trigger(r.CONTENT_VOLUME,{volume:Math.round(100*l.volume),mute:l.muted})},i.error=function(){var e=l.error&&l.error.code||0,n={0:r.PLAYER_UNKNWON_ERROR,1:r.PLAYER_UNKNWON_OPERATION_ERROR,2:r.PLAYER_UNKNWON_NETWORK_ERROR,3:r.PLAYER_UNKNWON_DECODE_ERROR,4:r.PLAYER_FILE_ERROR}[e]||0;OvenPlayerConsole.log("EventListener : on error",n),(0,o.errorTrigger)(r.ERRORS.codes[n],t)},Object.keys(i).forEach(function(e){l.removeEventListener(e,i[e]),l.addEventListener(e,i[e])}),u.destroy=function(){OvenPlayerConsole.log("EventListener : destroy()"),Object.keys(i).forEach(function(e){l.removeEventListener(e,i[e])})},u}},74:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=l(n(312)),o=n(308),a=l(n(136)),i=n(1),u=l(n(7)),s=n(1);function l(e){return e&&e.__esModule?e:{default:e}}t.default=function(e,t,n){var l={},c=null,d=null,g=null,E=0,f=!1,T=null,S=null,A="",v=!1;try{if(dashjs.Version<"2.6.5")throw i.ERRORS.codes[i.INIT_DASH_UNSUPPORT];var y=function(e){dashjs.Version>="3.0.0"?c.updateSettings({streaming:{abr:{autoSwitchBitrate:{video:e}}}}):dashjs.Version>"2.9.0"?c.setAutoSwitchQualityFor("video",e):c.setAutoSwitchQualityFor(e)},L=function(){return dashjs.Version>="3.0.0"?c.getSettings().streaming.abr.autoSwitchBitrate.video:dashjs.Version>"2.9.0"?c.getAutoSwitchQualityFor("video"):c.getAutoSwitchQualityFor()},P=function(){if(c.duration()!==T){T=c.duration();var e=c.getDashMetrics().getCurrentDVRInfo(),n=t.getConfig().lowLatencyMpdLiveDelay;n||(n=3),c.seek(e.range.end-e.range.start-n)}};(c=dashjs.MediaPlayer().create()).initialize(e,null,!1),window.op_dash=c;var _={name:i.PROVIDER_DASH,element:e,mse:c,listener:null,isLoaded:!1,canSeek:!1,isLive:!1,seeking:!1,state:i.STATE_IDLE,buffer:0,framerate:0,currentQuality:-1,currentSource:-1,qualityLevels:[],sources:[],adTagUrl:n};l=(0,r.default)(_,t,function(e,n){OvenPlayerConsole.log("DASH : Attach File : ",e,"lastPlayPosition : "+n),l.trigger(i.DASH_PREPARED,c),y(!0),A=e.file,c.off(dashjs.MediaPlayer.events.PLAYBACK_PLAYING,P),!0===e.lowLatency?(T=null,dashjs.Version>="3.0.0"?c.updateSettings({streaming:{lowLatencyEnabled:e.lowLatency}}):c.setLowLatencyEnabled(e.lowLatency),t.getConfig().lowLatencyMpdLiveDelay&&"number"==typeof t.getConfig().lowLatencyMpdLiveDelay&&(dashjs.Version>="3.0.0"?c.updateSettings({streaming:{liveDelay:t.getConfig().lowLatencyMpdLiveDelay}}):c.setLiveDelay(t.getConfig().lowLatencyMpdLiveDelay)),c.on(dashjs.MediaPlayer.events.PLAYBACK_PLAYING,P)):dashjs.Version>="3.0.0"?c.updateSettings({streaming:{lowLatencyEnabled:!1,liveDelay:void 0}}):(c.setLowLatencyEnabled(!1),c.setLiveDelay()),dashjs.Version>="3.0.0"?c.updateSettings({debug:{logLevel:dashjs.Debug.LOG_LEVEL_NONE},streaming:{retryAttempts:{MPD:0}}}):c.getDebug().setLogToBrowserConsole(!1),c.attachSource(A),E=n}),d=l.super("play"),g=l.super("destroy"),OvenPlayerConsole.log("DASH PROVIDER LOADED.");var O=t.getConfig().loadingRetryCount;c.on(dashjs.MediaPlayer.events.ERROR,function(e){if(e&&(e.error.code===dashjs.MediaPlayer.errors.DOWNLOAD_ERROR_ID_MANIFEST_CODE||e.error.code===dashjs.MediaPlayer.errors.MANIFEST_LOADER_LOADING_FAILURE_ERROR_CODE))if(O>0)l.setState(s.STATE_LOADING),S&&(clearTimeout(S),S=null),O-=1,S=setTimeout(function(){c.attachSource(A)},1e3);else{var t=i.ERRORS.codes[i.PLAYER_UNKNWON_NETWORK_ERROR];t.error=e,(0,o.errorTrigger)(t,l)}}),c.on(dashjs.MediaPlayer.events.QUALITY_CHANGE_REQUESTED,function(e){e&&e.mediaType&&"video"===e.mediaType&&l.trigger(i.CONTENT_LEVEL_CHANGED,{isAuto:L(),currentQuality:_.currentQuality,type:"request"})}),c.on(dashjs.MediaPlayer.events.QUALITY_CHANGE_RENDERED,function(e){e&&e.mediaType&&"video"===e.mediaType&&(_.currentQuality=e.newQuality,l.trigger(i.CONTENT_LEVEL_CHANGED,{isAuto:L(),currentQuality:e.newQuality,type:"render"}))}),c.on(dashjs.MediaPlayer.events.PLAYBACK_METADATA_LOADED,function(e){OvenPlayerConsole.log("DASH : PLAYBACK_METADATA_LOADED  : ",c.getQualityFor("video"),c.getBitrateInfoListFor("video"),c.getBitrateInfoListFor("video")[c.getQualityFor("video")]),f=!0;var n=c.getBitrateInfoListFor("video");_.currentQuality=c.getQualityFor("video");for(var r=0;r<n.length;r++)u.default.findWhere(_.qualityLevels,{bitrate:n[r].bitrate,height:n[r].height,width:n[r].width})||_.qualityLevels.push({bitrate:n[r].bitrate,height:n[r].height,width:n[r].width,index:n[r].qualityIndex,label:n[r].width+"x"+n[r].height+", "+(0,a.default)(n[r].bitrate,!0,"bps")});c.isDynamic()&&(_.isLive=!0),E&&!_.isLive&&c.seek(E),t.isAutoStart()&&!v&&(OvenPlayerConsole.log("DASH : AUTOPLAY()!"),l.play(),v=!0)}),l.play=function(t){var n=0;l.getState()===i.STATE_AD_PLAYING||l.getState()===i.STATE_AD_PAUSED||(f=!1,c.attachView(e)),function e(){n++,f?d(t):n<300?setTimeout(e,100):l.play()}()},l.setCurrentQuality=function(e){return l.getState()!==i.STATE_PLAYING&&l.play(),_.currentQuality=e,L()&&y(!1),c.setQualityFor("video",e),_.currentQuality},l.isAutoQuality=function(){return L()},l.setAutoQuality=function(e){y(e)},l.destroy=function(){c.reset(),c.destroy(),c=null,l.trigger(i.DASH_DESTROYED),OvenPlayerConsole.log("DASH : PROVIDER DESTROYED."),g()}}catch(e){if(e&&e.code&&e.code===i.INIT_DASH_UNSUPPORT)throw e;var C=i.ERRORS.codes[i.INIT_DASH_NOTFOUND];throw C.error=e,C}return l}}}]);