/**
 * Created by Kirito on 6/29/15.
 */
var MainScene;

var Count7Controller = cc.Class.extend({
    timeCount:0,
    numberCount:0,
    scheduleTime:0.5,
    players:[],
    ctor:function(players){
        this.players = players;
    },

    timerCount: function (isKeepCount, callback,time) {

        if(isKeepCount){
            this.scheduleOnce(callback,time);
            this.time++;
        }else{
            this.time++;
            this.scheduleOnce(callback,time);
        }
        return this.time;
    },

    begin:function(){

        this.time = 0;
        this.count = 1;
    }

});

var Count7Player = cc.Sprite.extend({

    _name:null,
    _nameLabel:null,
    _sequenceId: null,
    _isMe: false,

    ctor: function (isMe,sequenceId) {
        this._super();
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
        this._nameLabel.setFontSize(20);
        this._nameLabel.setPosition(100,20);

        //this.addChild(this._nameLabel);
    },

    isDivisibled7:function(num){

        return num%7==0;
    },

    getName: function () {
        return this._name;
    },

    checkIsMe:function(){
        return this._isMe;
    },

    numberOff:function(num){
        if(this.isDivisibled7(num)){
            num = "过"
        }
        var numberOff = new cc.LabelBMFont(num,res.NumberTTF,60);
        numberOff.setPosition(60,150);
        numberOff.setScale(0);
        numberOff.runAction(cc.sequence(cc.scaleTo(0.2,3),cc.delayTime(1),cc.callFunc(function(){
            numberOff.removeFromParent();
        })));
        this.addChild(numberOff);
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
    controller:null,
    updateTime:0,
    time:0,
    countTime:0,
    countId:1,
    countPlayerId:1,

    ctor:function(){
        this._super();
    },

    getSelfPlayer:function(){

        for(var i=0;i<this.players.length;i++){
            if(this.players[i].checkIsMe()){
                return this.players[i];
            }
        }
    },

    init:function(){
        if(!this._super()){
            return false;
        }

        return true;
    },

    update:function(dt){
        this.updateTime+=dt;
        this.countTime+=dt;


        if(this.updateTime>=0.01){
            this.time+=0.01;
            this.updateTime =0;
        }

        if(this.countTime>=2){

            var player = this.players[this.countPlayerId-1]
            if(player.checkIsMe()){

            }
            player.numberOff(this.countId);

            if(++this.countPlayerId>8){
                this.countPlayerId = 1;
            }

            this.countId++;
            this.countTime=0;
        }
    },

    initPlayers:function(){

        var winSize = cc.director.getWinSize();
        for(var i=0;i<8;i++){
            var player = new Count7Player(false, i);
            if(2==i) {
                player = new Count7Player(true, i);
            }
            player.setPosition(Game_Constraint.Count7Positions[i].x+winSize.width/2,Game_Constraint.Count7Positions[i].y+winSize.height/2);
            player.setScale(0);
            var catDelay = cc.delayTime(3.7+i*0.2);
            var catAct1 = cc.scaleTo(0.3,1.15);
            var catAct2 = cc.scaleTo(0.1,1);
            var catAct9 = cc.sequence(catDelay,catAct1,catAct2);
            player.runAction(catAct9);
            this.addChild(player);
            this.players.push(player);
        }
    },

    startBtnTouchEvent:function(sender,type){

        if(type == ccui.Widget.TOUCH_BEGAN){
            sender.text.setScale(1.2);
        }
        if(type == ccui.Widget.TOUCH_CANCELED || type == ccui.Widget.TOUCH_MOVED){
            sender.text.setScale(1);
        }
        if(type==ccui.Widget.TOUCH_ENDED){
            var winSize = cc.director.getWinSize();
            sender.text.setScale(1);
            sender.setVisible(false);

            var mainLayer = sender.getParent();
            var countDown1 = new cc.Sprite(res.Number_1);
            var countDown2 = new cc.Sprite(res.Number_2);
            var countDown3 = new cc.Sprite(res.Number_3);
            var countDown4 = new cc.Sprite(cc.spriteFrameCache.getSpriteFrame("btn_start_normal.png"));
            countDown1.setScale(2);
            countDown2.setScale(2);
            countDown3.setScale(2);
            countDown4.setScale(2);
            countDown1.setPosition(winSize.width/2,winSize.height/2);
            countDown2.setPosition(winSize.width/2,winSize.height/2);
            countDown3.setPosition(winSize.width/2,winSize.height/2);
            countDown4.setPosition(winSize.width/2,winSize.height/2);
            countDown1.setVisible(false);
            countDown2.setVisible(false);
            countDown3.setVisible(false);
            countDown4.setVisible(false);
            mainLayer.addChild(countDown1);
            mainLayer.addChild(countDown2);
            mainLayer.addChild(countDown3);
            mainLayer.addChild(countDown4);
            var countDown4Act1 = cc.callFunc(function(){
                countDown4.setVisible(true);
            });
            var countDown3Act1 = cc.callFunc(function(){
                countDown3.setVisible(true);
            });
            var countDown2Act1 = cc.callFunc(function(){
                countDown2.setVisible(true);
            });
            var countDown1Act1 = cc.callFunc(function(){
                countDown1.setVisible(true);
            });

            var countDown4Act2 = cc.scaleTo(0.7,0);
            var countDown3Act2 = cc.scaleTo(0.7,0);
            var countDown2Act2 = cc.scaleTo(0.7,0);
            var countDown1Act2 = cc.scaleTo(0.7,0);

            var countDown4Act3 = cc.callFunc(function(){
                countDown4.removeFromParent();
                mainLayer.scheduleUpdate();
                mainLayer.passBtn.setVisible(true);
            });
            var countDown1Act3 = cc.callFunc(function(){
                countDown1.removeFromParent();
                countDown4.runAction(cc.sequence(countDown4Act1,countDown4Act2,countDown4Act3));
            });
            var countDown2Act3 = cc.callFunc(function(){
                countDown2.removeFromParent();
                countDown1.runAction(cc.sequence(countDown1Act1,countDown1Act2,countDown1Act3));
            });
            var countDown3Act3 = cc.callFunc(function(){
                countDown3.removeFromParent();
                countDown2.runAction(cc.sequence(countDown2Act1,countDown2Act2,countDown2Act3));
            });

            var countDown3Act4 = cc.sequence(countDown3Act1,countDown3Act2,countDown3Act3);
            countDown3.runAction(countDown3Act4);

            //mainLayer.controller = new Count7Controller();
            //mainLayer.controller.begin(mainLayer.players);
        }
    },

    initStartButton:function(){

        var winSize = cc.director.getWinSize();
        //back button
        this.startBtn = new ccui.Button();
        this.startBtn.loadTextures("Shu7_0012.png","","",ccui.Widget.PLIST_TEXTURE);
        this.startBtn.setPosition(winSize.width/2,winSize.height/2-70);
        this.addChild(this.startBtn,1);
        this.startBtn.addTouchEventListener(this.startBtnTouchEvent ,this);
        this.startBtn.text = new cc.Sprite(cc.spriteFrameCache.getSpriteFrame("Shu7_0010.png"));
        this.startBtn.text.setPosition(this.startBtn.getContentSize().width/2,this.startBtn.getContentSize().height/2);
        this.startBtn.addChild(this.startBtn.text);
        this.startBtn.setScale(0);

        var startBtnAct1 = cc.delayTime(6);
        var startBtnAct2 = cc.scaleTo(0.1,1.2);
        var startBtnAct3 = cc.scaleTo(0.1,1);
        var startBtnAct4 = cc.sequence(startBtnAct1,startBtnAct2,startBtnAct3);
        this.startBtn.runAction(startBtnAct4);
    },

    passBtnTouchEvent:function(sender,type){
        if(type == ccui.Widget.TOUCH_BEGAN){
            sender.text.setScale(1.2)
        }
        if(type == ccui.Widget.TOUCH_CANCELED || type == ccui.Widget.TOUCH_MOVED){
            sender.text.setScale(1);
        }
        if(type == ccui.Widget.TOUCH_ENDED){
            sender.text.setScale(1)
        }

    },

    initPassButton: function () {
        //passBtn button
        var winSize = cc.director.getWinSize();
        var selfPlayer = this.getSelfPlayer();
        this.passBtn = new ccui.Button();
        this.passBtn.loadTextures("Shu7_0011.png","","",ccui.Widget.PLIST_TEXTURE);
        this.passBtn.setPosition(selfPlayer.getContentSize().width/2,-20);
        selfPlayer.addChild(this.passBtn);
        this.passBtn.addTouchEventListener(this.passBtnTouchEvent ,this);
        this.passBtn.text = new cc.Sprite(cc.spriteFrameCache.getSpriteFrame("Shu7_0009.png"));
        this.passBtn.text.setPosition(this.passBtn.getContentSize().width/2,this.passBtn.getContentSize().height/2);
        this.passBtn.addChild(this.passBtn.text);
        this.passBtn.setVisible(false);
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
        var delay = cc.delayTime(0.3);
        var move1 = cc.moveTo(1, cc.p(110,bg.getContentSize().height-150));
        var moveMore1 = cc.moveBy(0.2,cc.p(-40,0));
        var move_ease_inout1 = move1.easing(cc.easeInOut(3.0));
        var logoMoveAct = cc.sequence(delay,move_ease_inout1,moveMore1);
        count7Logo.runAction(logoMoveAct);
        this.addChild(count7Logo);

        //catBg
        this.catBg = new cc.Sprite(res.Count7Cat);
        this.catBg.setPosition(bg.getContentSize().width/2,bg.getContentSize().height/2);
        this.catBg.setScale(0);
        var catbgDelay = cc.delayTime(1.6);
        var catbgAct1 = cc.scaleTo(0.3,1.15);
        var catbgAct2 = cc.scaleTo(0.1,1);
        var catbgAct3 = cc.scaleTo(0.1,1.1);
        var catbgAct6 = cc.scaleTo(0.1,1);
        var catbgAct7 = cc.scaleTo(0.1,1.05);
        var catbgAct8 = cc.scaleTo(0.1,1);
        var catbgAct9 = cc.sequence(catbgDelay,catbgAct1,catbgAct2,catbgAct3,catbgAct6,catbgAct7,catbgAct8);
        this.catBg.runAction(catbgAct9);
        this.addChild(this.catBg);

        //cat
        this.cat  = new cc.Sprite(cc.spriteFrameCache.getSpriteFrame("Shu7_0000_maomi.png"));
        this.cat.setAnchorPoint(0.5,0.4);
        this.cat.setPosition(bg.getContentSize().width/2,bg.getContentSize().height/2);
        this.cat.setScale(0);
        this.addChild(this.cat);
        var catDelay = cc.delayTime(2.6);
        var catAct0 = cc.scaleTo(0.1,1);
        var catAct3 = cc.rotateTo(0.12,20);
        var catAct6 = cc.rotateTo(0.12,-20);
        var catAct7 = cc.rotateTo(0.12,10);
        var catAct8 = cc.rotateTo(0.12,-10);
        var catAct9 = cc.rotateTo(0.12,0);
        var catAct10 = cc.sequence(catAct3,catAct6,catAct7,catAct8,catAct9);
        var catAct11 = cc.spawn(catAct0,catAct10);
        var catAct12 = cc.sequence(catDelay,catAct11);
        this.cat.runAction(catAct12);

        this.initPlayers();
        this.initStartButton();
        this.initPassButton();
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