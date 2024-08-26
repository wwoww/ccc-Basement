window.__require=function e(t,c,o){function i(r,s){if(!c[r]){if(!t[r]){var a=r.split("/");if(a=a[a.length-1],!t[a]){var u="function"==typeof __require&&__require;if(!s&&u)return u(a,!0);if(n)return n(a,!0);throw new Error("Cannot find module '"+r+"'")}}var d=c[r]={exports:{}};t[r][0].call(d.exports,function(e){return i(t[r][1][e]||e)},d,d.exports,e,t,c,o)}return c[r].exports}for(var n="function"==typeof __require&&__require,r=0;r<o.length;r++)i(o[r]);return i}({Dici:[function(e,t,c){"use strict";cc._RF.push(t,"e6b1b1NZFpDi5WBW+obYLxB","Dici");var o=e("Player");cc.Class({extends:cc.Component,properties:{dieAudio:{default:null,type:cc.AudioClip}},onLoad:function(){var e=this,t={event:cc.EventListener.TOUCH_ONE_BY_ONE,onTouchBegan:function(t,c){var o=cc.moveBy(.2,cc.v2(0,140));return e.node.runAction(o),!0},onTouchMoved:function(e,t){},onTouchEnded:function(e,t){},onTouchCancelled:function(e,t){}};cc.systemEvent.on(t,this.node)},noteBox:function(){return this.node.getBoundingBoxToWorld()},update:function(e){cc.find("Canvas/normal").getComponent(o).node.getBoundingBoxToWorld().intersects(this.noteBox())&&(cc.audioEngine.playEffect(this.dieAudio,!1),cc.director.loadScene("OverScene"))}}),cc._RF.pop()},{Player:"Player"}],Main:[function(e,t,c){"use strict";cc._RF.push(t,"2c8f4fxQ8JFCJms4itrYWg8","Main"),cc.Class({extends:cc.Component,properties:{player:{default:null,type:cc.Node},dici:{default:null,type:cc.Prefab},diciCount:0,bgAudio:{default:null,type:cc.AudioClip},jumpAudio:{default:null,type:cc.AudioClip},playTime:60,timeLabe:{default:null,type:cc.Label},scoreLabel:{default:null,type:cc.Label},score:0,dc_duration:140},playerMoveLeft:function(){var e=cc.moveTo(.2,cc.v2(-this.node.width/2+80,this.player.getPositionY())),t=cc.moveTo(.1,cc.v2(-this.node.width/2+80+30,this.player.getPositionY())),c=cc.moveTo(.1,cc.v2(-this.node.width/2+80,this.player.getPositionY())),o=cc.sequence(t,c);0==this.player.rotationY?(this.player.rotationY=0,this.player.runAction(o)):(this.player.rotationY=0,this.player.runAction(e))},playerMoveRight:function(){var e=cc.moveTo(.2,cc.v2(this.node.width/2-80,this.player.getPositionY())),t=cc.moveTo(.1,cc.v2(this.node.width/2-80-30,this.player.getPositionY())),c=cc.moveTo(.1,cc.v2(this.node.width/2-80,this.player.getPositionY())),o=cc.sequence(t,c);180==this.player.rotationY?(this.player.rotationY=180,this.player.runAction(o)):(this.player.rotationY=180,this.player.runAction(e))},NewDici:function(){this.diciCount+=1;var e=cc.instantiate(this.dici);this.node.addChild(e);var t=Math.random();e.rotationY=t>=.5?0:180,e.setPosition(this.diciPosition(t))},diciPosition:function(e){var t=0,c=0;return t=e>=.5?this.node.width/2-80:-this.node.width/2+80,c=this.diciCount<=8?this.node.height/2-this.dc_duration*this.diciCount-1*this.dc_duration:this.node.height/2-8*this.dc_duration-1*this.dc_duration,cc.v2(t,c)},setInputControl:function(){var e=this,t={event:cc.EventListener.TOUCH_ONE_BY_ONE,onTouchBegan:function(t,c){return cc.audioEngine.playEffect(e.jumpAudio,!1),c.getCurrentTarget().convertToNodeSpace(t.getLocation()).x>e.node.width/2?e.playerMoveRight():e.playerMoveLeft(),e.score+=1,cc.sys.localStorage.setItem("score",e.score),e.scoreLabel.string=e.score,e.NewDici(),!0},onTouchMoved:function(e,t){},onTouchEnded:function(e,t){},onTouchCancelled:function(e,t){}};cc.systemEvent.on(t,e.node)},onLoad:function(){this.score=0,cc.audioEngine.setEffectsVolume(.2),cc.audioEngine.playMusic(this.bgAudio,!0),cc.director.preloadScene("OverScene"),this.setInputControl(),this.player.setPosition(-this.node.width/2+80,this.node.height/2-175);for(var e=0;e<8;e++)this.NewDici();this.schedule(function(){this.playTime--,this.timeLabe.string="\u5012\u8ba1\u65f6:"+this.playTime,this.playTime<=0&&(cc.audioEngine.pauseMusic(),cc.director.loadScene("OverScene"))},1)}}),cc._RF.pop()},{}],Over:[function(e,t,c){"use strict";cc._RF.push(t,"157c3/gc4xGeZoVjfFuYCje","Over"),cc.Class({extends:cc.Component,properties:{scoreLabel:{default:null,type:cc.Label},button:{default:null,type:cc.Node}},onLoad:function(){var e=cc.sys.localStorage.getItem("score");cc.log(e),this.scoreLabel.string="\u6700\u7ec8\u5f97\u5206\uff1a"+e,this.button.on("touchstart",function(){cc.director.loadScene("MainScene")})}}),cc._RF.pop()},{}],Player:[function(e,t,c){"use strict";cc._RF.push(t,"4ab77ykYIRHkqhXzpYTs+/H","Player"),cc.Class({extends:cc.Component,properties:{},onLoad:function(){},noteBox:function(){return this.node.getBoundingBox()}}),cc._RF.pop()},{}],WelcomeCame:[function(e,t,c){"use strict";cc._RF.push(t,"9c887RDKsJINpgWLoYBeMKv","WelcomeCame"),cc.Class({extends:cc.Component,properties:{bgAudio:{default:null,type:cc.AudioClip},startBtn:{default:null,type:cc.Node}},onLoad:function(){cc.audioEngine.playMusic(this.bgAudio,!0),cc.director.preloadScene("MainScene");var e=cc.scaleTo(.8,.9),t=cc.scaleTo(.8,1),c=cc.sequence(e,t),o=cc.repeatForever(c);this.startBtn.runAction(o),this.startBtn.on("touchstart",function(){cc.audioEngine.pauseMusic(),cc.director.loadScene("MainScene")})}}),cc._RF.pop()},{}]},{},["Dici","Main","Over","Player","WelcomeCame"]);