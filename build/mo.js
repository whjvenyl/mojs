!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t():"function"==typeof define&&define.amd?define([],t):"object"==typeof exports?exports.mojs=t():e.mojs=t()}(this,function(){return function(e){function t(n){if(i[n])return i[n].exports;var s=i[n]={i:n,l:!1,exports:{}};return e[n].call(s.exports,s,s.exports,t),s.l=!0,s.exports}var i={};return t.m=e,t.c=i,t.i=function(e){return e},t.d=function(e,i,n){t.o(e,i)||Object.defineProperty(e,i,{configurable:!1,enumerable:!0,get:n})},t.n=function(e){var i=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(i,"a",i),i},t.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},t.p="build/",t(t.s=6)}([function(e,t,i){var n,s,a,n,s,a;!function(i,o){s=[e,t],n=o,void 0!==(a="function"==typeof n?n.apply(t,s):n)&&(e.exports=a)}(0,function(e,t){"use strict";!function(i,o){s=[e,t],n=o,void 0!==(a="function"==typeof n?n.apply(t,s):n)&&(e.exports=a)}(0,function(e,t){function i(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(t,"__esModule",{value:!0});var n=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var i=arguments[t];for(var n in i)Object.prototype.hasOwnProperty.call(i,n)&&(e[n]=i[n])}return e},s=function(){function e(e,t){for(var i=0;i<t.length;i++){var n=t[i];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,i,n){return i&&e(t.prototype,i),n&&e(t,n),t}}(),a=function(){function e(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};i(this,e),this._o=t,this._init(),this._declareDefaults(),this._extendDefaults(),this._vars()}return s(e,[{key:"_init",value:function(){}},{key:"_declareDefaults",value:function(){this._defaults={}}},{key:"_extendDefaults",value:function(){this._props=n({},this._defaults,this._o)}},{key:"_setProp",value:function(e,t){if("object"==typeof e)for(var i in e)this._assignProp(i,e[i]);else this._assignProp(e,t)}},{key:"_assignProp",value:function(e,t){this._props[e]=t}},{key:"_vars",value:function(){}}]),e}();t.default=a,e.exports=t.default})})},function(e,t,i){var n,s,a,n,s,a;!function(i,o){s=[e,t],n=o,void 0!==(a="function"==typeof n?n.apply(t,s):n)&&(e.exports=a)}(0,function(e,t){"use strict";!function(i,o){s=[e,t],n=o,void 0!==(a="function"==typeof n?n.apply(t,s):n)&&(e.exports=a)}(0,function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.default={duration:350,delay:0,repeat:0,speed:1,isYoyo:!1,easing:"Sin.Out",backwardEasing:null,isReverse:!1,onProgress:function(){},onStart:function(){},onRefresh:function(){},onComplete:function(){},onRepeatStart:function(){},onRepeatComplete:function(){},onFirstUpdate:function(){},onUpdate:function(){},onPlaybackStart:function(){},onPlaybackPause:function(){},onPlaybackStop:function(){},onPlaybackComplete:function(){},name:null,shiftTime:0,nameBase:"Tween",isChained:!1},e.exports=t.default})})},function(e,t,i){var n,s,a,n,s,a;!function(o,r){s=[e,t,i(0),i(1)],n=r,void 0!==(a="function"==typeof n?n.apply(t,s):n)&&(e.exports=a)}(0,function(e,t){"use strict";!function(o,r){s=[e,t,i(0),i(1)],n=r,void 0!==(a="function"==typeof n?n.apply(t,s):n)&&(e.exports=a)}(0,function(e,t,i,n){function s(e){return e&&e.__esModule?e:{default:e}}function a(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function o(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function r(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var u=s(i),l=s(n),p=function(){function e(e,t){for(var i=0;i<t.length;i++){var n=t[i];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,i,n){return i&&e(t.prototype,i),n&&e(t,n),t}}(),h=function e(t,i,n){null===t&&(t=Function.prototype);var s=Object.getOwnPropertyDescriptor(t,i);if(void 0===s){var a=Object.getPrototypeOf(t);return null===a?void 0:e(a,i,n)}if("value"in s)return s.value;var o=s.get;if(void 0!==o)return o.call(n)},f=function(e){function t(){return a(this,t),o(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return r(t,e),p(t,[{key:"_declareDefaults",value:function(){return this._defaults=l.default}},{key:"_extendDefaults",value:function(){h(t.prototype.__proto__||Object.getPrototypeOf(t.prototype),"_extendDefaults",this).call(this);var e=this._props,i=e.delay,n=e.duration;e.speed;this._originalDelay=i,this._originalDuration=n,this._normalizeDelayAndDuration()}},{key:"_normalizeDelayAndDuration",value:function(){var e=this._props.speed;this._props.delay=this._originalDelay/e,this._props.duration=this._originalDuration/e}},{key:"_vars",value:function(){this._plan=[],this._calcTotalTime()}},{key:"createPlan",value:function(){this._plan.length=0,this._calcTotalTime();for(var e=16,t=this._props.delay;t<=this._totalTime;){var i=this._getPeriod(t-e),n=this._getPeriod(t),s=this._getPeriod(t+e),a=this._plan[this._plan.length-1],o=0;if("delay"!==n){o|=8;var r=void 0!==a;r||(o|=2);var u="delay"===i;r&&!u&&i!==n-1||(o|=4),"delay"!==s&&s!==n+1||(o|=16),this._plan.push(o),t+=e}else this._plan.push(o),t+=e}var l=this._plan.length-1;return this._plan[l]=32|this._plan[l],this._props.isReverse&&this._plan.reverse(),this._plan}},{key:"_calcTotalTime",value:function(){var e=this._props,t=e.delay,i=e.duration,n=e.repeat,s=i+t;this._totalTime=s*(n+1)}},{key:"_getPeriod",value:function(e){var t=this._props,i=t.delay,n=t.duration,s=i+n,a=e/s,o=e<this._totalTime?e%s:0;return a=e>=this._totalTime?Math.round(a):Math.floor(a),e>this._totalTime?Math.round(this._totalTime/s):o>0&&o<i?"delay":0===o&&e<this._totalTime&&e<i?"delay":0===o&&e>i?a-1:a}}]),t}(u.default);t.default=f,e.exports=t.default})})},function(e,t,i){var n,s,a,n,s,a;!function(i,o){s=[e,t],n=o,void 0!==(a="function"==typeof n?n.apply(t,s):n)&&(e.exports=a)}(0,function(e,t){"use strict";!function(i,o){s=[e,t],n=o,void 0!==(a="function"==typeof n?n.apply(t,s):n)&&(e.exports=a)}(0,function(e,t){function i(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(t,"__esModule",{value:!0});var n=function(){function e(e,t){for(var i=0;i<t.length;i++){var n=t[i];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,i,n){return i&&e(t.prototype,i),n&&e(t,n),t}}(),s=function(){function e(){var t=this;return i(this,e),this._loop=function(){if(0===t.tweens.length)return t._stopLoop();t.update(performance.now()),requestAnimationFrame(t._loop)},this._onVisibilityChange=function(){document[t._visibilityHidden]?t._savePlayingTweens():t._restorePlayingTweens()},this._vars(),this._listenVisibilityChange(),this}return n(e,[{key:"_vars",value:function(){this.tweens=[],this._savedTweens=[]}},{key:"_startLoop",value:function(){this._isRunning||(this._isRunning=!0,requestAnimationFrame(this._loop))}},{key:"_stopLoop",value:function(){this.tweens.length=0,this._isRunning=!1}},{key:"removeAll",value:function(){this.tweens.length=0}},{key:"remove",value:function(e){var t="number"==typeof e?e:this.tweens.indexOf(e);t!==-1&&(e=this.tweens[t],e._isRunning=!1,this.tweens.splice(t,1))}},{key:"_listenVisibilityChange",value:function(){void 0!==document.hidden?(this._visibilityHidden="hidden",this._visibilityChange="visibilitychange"):void 0!==document.mozHidden?(this._visibilityHidden="mozHidden",this._visibilityChange="mozvisibilitychange"):void 0!==document.msHidden?(this._visibilityHidden="msHidden",this._visibilityChange="msvisibilitychange"):void 0!==document.webkitHidden&&(this._visibilityHidden="webkitHidden",this._visibilityChange="webkitvisibilitychange"),document.addEventListener(this._visibilityChange,this._onVisibilityChange,!1)}},{key:"_savePlayingTweens",value:function(){this._savedTweens=this.tweens.slice(0);for(var e=0;e<this._savedTweens.length;e++)this._savedTweens[e].pause()}},{key:"_restorePlayingTweens",value:function(){for(var e=0;e<this._savedTweens.length;e++)this._savedTweens[e].resume()}},{key:"update",value:function(e){for(var t=this.tweens.length;t--;){var i=this.tweens[t];i.update(e)===!0&&(this.remove(i),i.onTweenerFinish(),i._prevTime=void 0)}}},{key:"add",value:function(e){e._isRunning||(e._isRunning=!0,this.tweens.push(e),this._startLoop())}},{key:"caffeinate",value:function(){document.removeEventListener(this._visibilityChange,this._onVisibilityChange,!1)}}]),e}();t.default=new s,e.exports=t.default})})},function(e,t,i){var n,s,a,n,s,a;!function(o,r){s=[e,t,i(0),i(1),i(2),i(3)],n=r,void 0!==(a="function"==typeof n?n.apply(t,s):n)&&(e.exports=a)}(0,function(e,t){"use strict";!function(o,r){s=[e,t,i(0),i(1),i(2),i(3)],n=r,void 0!==(a="function"==typeof n?n.apply(t,s):n)&&(e.exports=a)}(0,function(e,t,i,n,s,a){function o(e){return e&&e.__esModule?e:{default:e}}function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function u(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function l(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var p=o(i),h=o(n),f=o(s),c=o(a),_=function(){function e(e,t){for(var i=0;i<t.length;i++){var n=t[i];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,i,n){return i&&e(t.prototype,i),n&&e(t,n),t}}(),d=function(e){function t(e){r(this,t);var i=u(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));i._envokeCallBacks=function(e){if(0!==e){var t=1,n=i._props;e&(t<<=1)&&n.onStart(),e&(t<<=1)&&n.onRepeatStart(),e&(t<<=1)&&n.onUpdate(),e&(t<<=1)&&n.onRepeatComplete(),e&(t<<=1)&&n.onComplete()}},i._envokeCallBacksRev=function(e){if(0!==e){var t=64,n=i._props;e&(t>>=1)&&n.onComplete(),e&(t>>=1)&&n.onRepeatComplete(),e&(t>>=1)&&n.onUpdate(),e&(t>>=1)&&n.onRepeatStart(),e&(t>>=1)&&n.onStart()}};var n=i._props.isReverse;return i._cb=n?i._envokeCallBacksRev:i._envokeCallBacks,i._cbr=n?i._envokeCallBacks:i._envokeCallBacksRev,i}return l(t,e),_(t,[{key:"_declareDefaults",value:function(){return this._defaults=h.default}},{key:"_vars",value:function(){this._planner=new f.default(this._o),this._plan=this._planner.createPlan(),this._prevTime=-(1/0),this._totalTime=this._planner._totalTime,this._resumeTime=void 0,this._elapsed=0,this._frameIndex=-1,this._negativeShift=0,this._isReversed=!1,this._state="stop",this._prevState="stop",this._cb=this._envokeCallBacks}},{key:"_setStartTime",value:function(e){var t=this._props,i=t.shiftTime,n=t.isReverse,s=this._props.delay;void 0===e&&(e=performance.now()),this._startPoint=e,s=n?0:s,this._startTime=this._startPoint+s,this._startTime+=this._negativeShift+i,this._playTime=void 0!==this._resumeTime?this._resumeTime:e+i,this._resumeTime=void 0}},{key:"_setPlaybackState",value:function(e){this._prevState=this._state,this._state=e;var t="pause"===this._prevState,i="stop"===this._prevState,n="play"===this._prevState,s="playBackward"===this._prevState,a=n||s,o=i||t;"play"!==e&&"playBackward"!==e||!o||this._props.onPlaybackStart(),"pause"===e&&a&&this._props.onPlaybackPause(),"stop"===e&&(a||t)&&this._props.onPlaybackStop()}},{key:"_subPlay",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0,t=arguments[1],i=this._state,n=this._prevState,s="pause"===i,a="play"===i,o="playBackward"===i,r="playBackward"===n,u=a||s&&"play"===n,l=o||s&&r,p=u&&"playBackward"===t||l&&"play"===t;return this._elapsed=this._elapsed>=this._totalTime?0:this._elapsed,p&&(this._elapsed=this._totalTime-this._elapsed),this._setResumeTime(t,e),c.default.add(this),this}},{key:"_setResumeTime",value:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0;this._resumeTime=performance.now();var i=this._resumeTime-Math.abs(t)-this._elapsed;if(this._setStartTime(i,!1),this._prevTime>-(1/0)){var n=this._startTime,s=this._elapsed,a=this._totalTime;this._prevTime="play"===e?this._startPoint+s:n+a-this._props.delay-this._elapsed}}},{key:"update",value:function(e){if(e>this._prevTime){if(e>this._startTime+this._totalTime-this._props.delay){for(;this._frameIndex<this._plan.length;)this._frameIndex++,this._cb(this._plan[this._frameIndex]);return this._prevTime=+(1/0),this._frameIndex=this._plan.length,!0}if(e>=this._startTime)for(;16*this._frameIndex<e-this._startTime;)this._frameIndex++,this._cb(this._plan[this._frameIndex]),this._prevTime=e}else if(e<this._prevTime){if(e<this._startTime){for(;this._frameIndex>0;)this._frameIndex--,this._cbr(this._plan[this._frameIndex]);return this._prevTime=-(1/0),this._frameIndex=-1,!0}if(e<=this._startTime+this._totalTime)for(;16*this._frameIndex>e-this._startTime;)this._frameIndex--,this._cbr(this._plan[this._frameIndex]),this._prevTime=e}}},{key:"play",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0;return"play"===this._state&&this._isRunning?this:(this._isReversed=!1,this._subPlay(e,"play"),this._setPlaybackState("play"),this)}},{key:"playBackward",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0;return"playBackward"===this._state&&this._isRunning?this:(this._props.isReversed=!0,this._subPlay(e,"playBackward"),this._setPlaybackState("playBackward"),this)}},{key:"replay",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0;return this.reset(),this.play(e),this}},{key:"replayBackward",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0;return this.reset(),this.playBackward(e),this}},{key:"pause",value:function(){return"pause"===this._state||"stop"===this._state?this:(c.default.remove(this),this._setPlaybackState("pause"),this)}},{key:"resume",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0;if("pause"!==this._state)return this;switch(this._prevState){case"play":this.play(e);break;case"playbackward":this.playBackward(e)}return this}},{key:"stop",value:function(e){if("stop"===this._state)return this;this._elapsed=0;var t=null!=e?e:"playBackward"===this._state?1:0;return this.setProgress(t),this.reset(),this}},{key:"reset",value:function(){return c.default.remove(this),this._setPlaybackState("stop"),this._elapsed=0,this._frameIndex=-1,this}},{key:"setProgress",value:function(e){!this._startTime&&this._setStartTime(),this._playTime=void 0,e<0&&(e=0),e>1&&(e=1);var t=this._startTime-this._props.delay;return this.update(t+e*this._totalTime),this}},{key:"setSpeed",value:function(e){return this._props.speed=e,"play"!==this._state&&"playingBackward"!==this._state||this._setResumeTime(this._state),this}},{key:"onTweenerFinish",value:function(){return this._setPlaybackState("stop"),this._props.onPlaybackComplete(),this}}]),t}(p.default);t.default=d,e.exports=t.default})})},function(e,t,i){var n,s,a,n,s,a;!function(o,r){s=[e,t,i(4),i(0),i(2),i(1),i(3)],n=r,void 0!==(a="function"==typeof n?n.apply(t,s):n)&&(e.exports=a)}(0,function(e,t){"use strict";!function(o,r){s=[e,t,i(4),i(0),i(2),i(1),i(3)],n=r,void 0!==(a="function"==typeof n?n.apply(t,s):n)&&(e.exports=a)}(0,function(e,t,i,n,s,a,o){function r(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var u=r(i),l=r(n),p=r(s),h=r(a),f=r(o),c={revision:"2.2.1",Tween:u.default,tweener:f.default,__helpers__:{ClassProto:l.default,TweenPlanner:p.default,tweenDefaults:h.default}};t.default=c,e.exports=t.default})})},function(e,t,i){e.exports=i(5)}])});