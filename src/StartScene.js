/**
 * Created by Kirito on 6/1/15.
 */

var StartLayer = cc.Layer.extend({

    ctor:function(){
        this._super();
    },

    init:function(){
        if(!this._super()){
            return false
        }

        return true;
    },

    onEnter: function () {
        //cc.audioEngine.playMusic(res.Audio_BGM,true);
        this._super();
        var winSize = cc.director.getWinSize();
        var logo = new cc.Sprite(res.Logo);
        logo.setPosition(winSize.width/2,winSize.height+500);
        var move1 = cc.moveTo(1, cc.p(winSize.width/2,winSize.height/2+40));
        var move_ease_inout1 = move1.easing(cc.easeInOut(3.0));
        logo.runAction(move_ease_inout1);
        this.addChild(logo);

        var start_btn = new ccui.Button();
        start_btn.setTouchEnabled(true);
        start_btn.loadTextures(res.Btn_Start_Normal, res.Btn_Start_Push,"");
        start_btn.setPosition(winSize.width/2,winSize.height+500);
        start_btn.setScale(0.7);
        var move2= cc.moveTo(0.8, cc.p(winSize.width/2,winSize.height/2-100));
        var move_ease_inout2=move2.easing(cc.easeInOut(3.0));
        var scaleAct1 = cc.scaleTo(0.2,1);
        var scaleAct2 = cc.scaleTo(0.2, 0.7);
        var delay = cc.delayTime(1);
        var scaleRepeat = cc.repeatForever(cc.sequence(scaleAct1,scaleAct2,delay));
        start_btn.runAction(move_ease_inout2);
        start_btn.runAction(scaleRepeat);
        this.addChild(start_btn);
    }
});


var StartScene = cc.Scene.extend({

    ctor:function(){
        this._super();
    },

    init:function(){
        if(!this._super()){
            return false
        }

        return true;
    },

    onEnter:function(){
        this._super();

        var startLayer = new StartLayer();
        this.addChild(startLayer);
    }
})