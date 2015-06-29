/**
 * Created by Kirito on 6/29/15.
 */
var MainScene;
var Count7Layer = cc.Layer.extend({
    ctor:function(){
        this._super();
    },

    init:function(){
        if(!this._super()){
            return false
        }

        return true;
    },

    btnBackBtnTouchEvent: function (sender, type) {

        if(type == ccui.Widget.TOUCH_ENDED){
            var replaceScene = function(){
                var mainScene = new MainScene();
                cc.director.runScene(mainScene);
            };
            //var act1 = cc.scaleBy(2,4);
            var act2 = cc.callFunc(replaceScene,this);
            //var act3 = cc.sequence(act1,act2);
            //sender.setZOrder(2);
            sender.runAction(act2);
        }
    },

    onEnter:function(){
        this._super();

        //background
        var bg = new cc.Sprite(res.Count7Bg);
        bg.setAnchorPoint(0,0);
        bg.setPosition(0,0);
        this.addChild(bg,0);

        //back icon
        var backIcon = new cc.Sprite(cc.spriteFrameCache.getSpriteFrame("Shu7_0014.png"));
        backIcon.setPosition(bg.getContentSize().width/2-100,200);
        this.addChild(backIcon);

        //back button
        var backBtn = new ccui.Button();
        backBtn.loadTextures("Shu7_0013.png","","",ccui.Widget.PLIST_TEXTURE);
        backBtn.setPosition(bg.getContentSize().width/2+50,200);
        this.addChild(backBtn,1);
        backBtn.addTouchEventListener(this.btnBackBtnTouchEvent ,this);

        //logo
        var logo = new cc.Sprite(cc.spriteFrameCache.getSpriteFrame("Main_0001.png"));
        logo.setAnchorPoint(0,0.5);
        logo.setPosition(-500,bg.getContentSize().height-70);
        var move1 = cc.moveTo(1, cc.p(110,bg.getContentSize().height-70));
        var moveMore1 = cc.moveBy(0.2,cc.p(-40,0));
        var move_ease_inout1 = move1.easing(cc.easeInOut(3.0));
        var logoMoveAct = cc.sequence(move_ease_inout1,moveMore1);
        logo.runAction(logoMoveAct);
        this.addChild(logo);

        //count7 logo
        var count7Logo = new cc.Sprite(cc.spriteFrameCache.getSpriteFrame("Main_0006.png"));
        count7Logo.setAnchorPoint(0,0.5);
        count7Logo.setPosition(-800,bg.getContentSize().height-150);
        var delay = cc.delayTime(0.3)
        var move1 = cc.moveTo(1, cc.p(110,bg.getContentSize().height-150));
        var moveMore1 = cc.moveBy(0.2,cc.p(-40,0));
        var move_ease_inout1 = move1.easing(cc.easeInOut(3.0));
        var logoMoveAct = cc.sequence(delay,move_ease_inout1,moveMore1);
        count7Logo.runAction(logoMoveAct);
        this.addChild(count7Logo);

        //cat
        var cat = new cc.Sprite(res.Count7Cat);
        cat.setPosition(bg.getContentSize().width/2,bg.getContentSize().height/2);
        //cat.setScale(0);
        //var catDelay = cc.delayTime(1.6);
        //var catAct1 = cc.scaleTo(0.4,1.1);
        //var catAct2 = cc.scaleTo(0.2,1);
        //var catAct3 = cc.sequence(catDelay,catAct1,catAct2);
        //cat.runAction(catAct3);
        this.addChild(cat);
    }
});


var Count7Scene = cc.Scene.extend({

    ctor:function(){
        this._super();
        cc.spriteFrameCache.addSpriteFrames(res.Count7Plist);
    },

    init:function(){
        if(!this._super()){
            return false
        }

        return true;
    },

    onEnter:function(){
        this._super();
        var layer = new Count7Layer();
        this.addChild(layer);
    }
});