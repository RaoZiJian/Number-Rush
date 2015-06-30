/**
 * Created by Kirito on 6/29/15.
 */
var MainScene;

var Count7Player = cc.Sprite.extend({

    _name:null,
    _nameLabel:null,
    _sequenceId: null,
    _isMe: false,

    ctor: function (isMe,sequenceId) {
        this._super()
        this._isMe = isMe;
        this._sequenceId = sequenceId;

        if(isMe){
            this.initWithSpriteFrameName("Shu7_0004.png");
        }else{
            this.initWithSpriteFrameName("Shu7_0003.png");
        }

        this._name = Game_Constraint.Count7Names[sequenceId];
        this._nameLabel = new cc.LabelTTF(this._name);
        this._nameLabel.setFontFillColor(cc.color(255,237,191));
        this._nameLabel.setFontSize(30);
        this.addChild(this._nameLabel);
    },

    getName: function () {
        return this._name;
    },

    checkIsMe:function(){
        return this._isMe;
    },

    init: function () {
        if(!this._super()){
            return false;
        };

        return true;
    },

    onEnter: function () {
        this._super();

    }
});

var Count7Layer = cc.Layer.extend({

    players:[],
    catBg:null,
    selfPlayer:null,

    ctor:function(){
        this._super();
    },

    init:function(){
        if(!this._super()){
            return false
        }

        return true;
    },

    initPlayers:function(){

        var winSize = cc.director.getWinSize();
        for(var i=0;i<8;i++){
            var player = new Count7Player(false, i);
            if(2==i) {
                player = new Count7Player(true, i);
            }
            player.setPosition(Game_Constraint.Count7Positions[i].x+winSize.width/2,Game_Constraint.Count7Positions[i].y+winSize.height/2);
            player.setScale(0)
            var catDelay = cc.delayTime(2.8+i*0.2);
            var catAct1 = cc.scaleTo(0.3,1.15);
            var catAct2 = cc.scaleTo(0.1,1);
            var catAct9 = cc.sequence(catDelay,catAct1,catAct2);
            player.runAction(catAct9);
            this.addChild(player);
            this.players.push(player);
        }
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
        this.catBg = new cc.Sprite(res.Count7Cat);
        this.catBg.setPosition(bg.getContentSize().width/2,bg.getContentSize().height/2);
        this.catBg.setScale(0);
        var catDelay = cc.delayTime(1.6);
        var catAct1 = cc.scaleTo(0.3,1.15);
        var catAct2 = cc.scaleTo(0.1,1);
        var catAct3 = cc.scaleTo(0.1,1.1);
        var catAct6 = cc.scaleTo(0.1,1);
        var catAct7 = cc.scaleTo(0.1,1.05);
        var catAct8 = cc.scaleTo(0.1,1);
        var catAct9 = cc.sequence(catDelay,catAct1,catAct2,catAct3,catAct6,catAct7,catAct8);
        this.catBg.runAction(catAct9);
        this.addChild(this.catBg);

        this.initPlayers();
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