var MainLayer = cc.Layer.extend({

    title:null,
    main007:null,
    ctor:function(){
        this._super();
    },

    init:function(){
        if(!this._super()){
            return false
        }

        return true;
    },

    btnShu7TouchEvent: function (sender, type) {
        switch (type) {
            case ccui.Widget.TOUCH_BEGAN:
                var main007Height = this.main007.getContentSize().height/2;
                if(this.title){
                    this.title.removeFromParent()
                }
                this.title = new cc.Sprite(cc.spriteFrameCache.getSpriteFrame("Main_0006.png"));
                this.title.setAnchorPoint(0,0.5);
                this.title.setPosition(100,main007Height);
                this.main007.addChild(this.title);
            case ccui.Widget.TOUCH_ENDED:
                break;
            default:
                break;
        }
    },

    btnShu3TouchEvent: function (sender, type) {
        switch (type) {
            case ccui.Widget.TOUCH_BEGAN:
                var main007Height = this.main007.getContentSize().height/2;
                if(this.title){
                    this.title.removeFromParent()
                }
                this.title = new cc.Sprite(cc.spriteFrameCache.getSpriteFrame("Main_0005.png"));
                this.title.setAnchorPoint(0,0.5);
                this.title.setPosition(100,main007Height);
                this.main007.addChild(this.title);
            case ccui.Widget.TOUCH_ENDED:
                break;
            default:
                break;
        }
    },

    btnBusTouchEvent: function (sender, type) {
        switch (type) {
            case ccui.Widget.TOUCH_BEGAN:
                var main007Height = this.main007.getContentSize().height/2;
                if(this.title){
                    this.title.removeFromParent()
                }
                this.title = new cc.Sprite(cc.spriteFrameCache.getSpriteFrame("Main_0004.png"));
                this.title.setAnchorPoint(0,0.5);
                this.title.setPosition(100,main007Height);
                this.main007.addChild(this.title);
            case ccui.Widget.TOUCH_ENDED:
                break;
            default:
                break;
        }
    },

    btnJiaTouchEvent: function (sender, type) {
        switch (type) {
            case ccui.Widget.TOUCH_BEGAN:
                var main007Height = this.main007.getContentSize().height/2;
                if(this.title){
                    this.title.removeFromParent()
                }
                this.title = new cc.Sprite(cc.spriteFrameCache.getSpriteFrame("Main_0003.png"));
                this.title.setAnchorPoint(0,0.5);
                this.title.setPosition(100,main007Height);
                this.main007.addChild(this.title);
            case ccui.Widget.TOUCH_ENDED:
                break;
            default:
                break;
        }
    },

    onEnter: function () {
        this._super();

        //background
        var bg = new cc.Sprite(res.MainSceneBG);
        bg.setAnchorPoint(0,0);
        bg.setPosition(0,0);
        this.addChild(bg,0);

        //logo
        var logo = new cc.Sprite(cc.spriteFrameCache.getSpriteFrame("Main_0001.png"));
        logo.setAnchorPoint(0.5,0.5);
        logo.setPosition(270,bg.getContentSize().height-70);
        var logoAct1 = cc.moveBy(10,cc.p(150,0));
        var logoAct2 = cc.moveBy(10,cc.p(-150,0));
        var logoAct3 = cc.delayTime(1);
        var logoSequenceAct = cc.sequence(logoAct3,logoAct1,logoAct2);
        var logoRepeatAct = cc.repeatForever(logoSequenceAct);
        logo.runAction(logoRepeatAct);
        this.addChild(logo);

        //wall background at bottom
        var wallBg = new cc.Sprite(res.MainScene10);
        wallBg.setAnchorPoint(0,0);
        wallBg.setPosition(0,0);
        this.addChild(wallBg,1);

        //the mouse at the wall background
        var main002 = new cc.Sprite(cc.spriteFrameCache.getSpriteFrame("Main_0002.png"));
        main002.setPosition(100,wallBg.getContentSize().height/2);
        wallBg.addChild(main002,1);

        //the this.title background at the wall background
        this.main007 = new cc.Sprite(cc.spriteFrameCache.getSpriteFrame("Main_0007_tishikuang_UI.png"));
        this.main007.setAnchorPoint(0,0.5);
        this.main007.setScaleX(0.8);
        var main007Height = this.main007.getContentSize().height/2
        this.main007.setPosition(170,wallBg.getContentSize().height/2)
        wallBg.addChild(this.main007,1);

        //the this.title
        this.title = new cc.Sprite(cc.spriteFrameCache.getSpriteFrame("Main_0006.png"));
        this.title.setAnchorPoint(0,0.5);
        this.title.setPosition(100,main007Height);
        this.title.setVisible(false);
        this.main007.addChild(this.title);

        //the clouds
        var main021 = new cc.Sprite(cc.spriteFrameCache.getSpriteFrame("Main_0021_yuncai.png"));
        main021.setAnchorPoint(0,1);
        main021.setPosition(0,bg.getContentSize().height-80);
        this.addChild(main021,1);

        var shu7Btn = new ccui.Button();
        shu7Btn.setTouchEnabled(true);
        shu7Btn.loadTextures("Main_0012_shu7_UI.png","","",ccui.Widget.PLIST_TEXTURE);
        shu7Btn.setPosition(200,bg.getContentSize().height-400);
        this.addChild(shu7Btn,1);
        shu7Btn.addTouchEventListener(this.btnShu7TouchEvent ,this);

        var shu3Btn = new ccui.Button();
        shu3Btn.setTouchEnabled(true);
        shu3Btn.loadTextures("Main_0009_shu3_UI.png","","",ccui.Widget.PLIST_TEXTURE);
        shu3Btn.setPosition(500,bg.getContentSize().height-400);
        this.addChild(shu3Btn,1);
        shu3Btn.addTouchEventListener(this.btnShu3TouchEvent ,this);

        var busBtn = new ccui.Button();
        busBtn.setTouchEnabled(true);
        busBtn.loadTextures("Main_0011_cheshangjigeren_UI.png","","",ccui.Widget.PLIST_TEXTURE);
        busBtn.setPosition(200,bg.getContentSize().height-720);
        this.addChild(busBtn,1);
        busBtn.addTouchEventListener(this.btnBusTouchEvent ,this);

        var jiaBtn = new ccui.Button();
        jiaBtn.setTouchEnabled(true);
        jiaBtn.loadTextures("Main_0008_jiajiajia_UI.png","","",ccui.Widget.PLIST_TEXTURE);
        jiaBtn.setPosition(500,bg.getContentSize().height-700);
        this.addChild(jiaBtn,1);
        jiaBtn.addTouchEventListener(this.btnJiaTouchEvent ,this);

        var shu7Rect = shu7Btn.getBoundingBox();
        var shu3Rect = shu3Btn.getBoundingBox();
        var busRect  = busBtn.getBoundingBox();
        var jiaRect  = jiaBtn.getBoundingBox();

        if ('touch' in cc.sys.capabilities) {
            cc.eventManager.addListener({
                event: cc.EventListener.TOUCH_ONE_BY_ONE,

                onTouchBegan: function (touch,event) {
                    return true;
                },
                onTouchMoved: function (touch, event) {
                    var target = event.getCurrentTarget();
                    var location = touch.getLocation();
                    var main007Height = target.main007.getContentSize().height/2
                    if (cc.rectContainsPoint(shu7Rect, location)) {
                        if (target.title) {
                            target.title.removeFromParent()
                        }
                        target.title = new cc.Sprite(cc.spriteFrameCache.getSpriteFrame("Main_0006.png"));
                        target.title.setAnchorPoint(0, 0.5);
                        target.title.setPosition(100, main007Height);
                        target.main007.addChild(target.title);
                    } else if (cc.rectContainsPoint(shu3Rect, location)) {
                        if (target.title) {
                            target.title.removeFromParent()
                        }
                        target.title = new cc.Sprite(cc.spriteFrameCache.getSpriteFrame("Main_0005.png"));
                        target.title.setAnchorPoint(0, 0.5);
                        target.title.setPosition(100, main007Height);
                        target.main007.addChild(target.title);
                    } else if (cc.rectContainsPoint(busRect, location)) {
                        if (target.title) {
                            target.title.removeFromParent()
                        }
                        target.title = new cc.Sprite(cc.spriteFrameCache.getSpriteFrame("Main_0004.png"));
                        target.title.setAnchorPoint(0, 0.5);
                        target.title.setPosition(100, main007Height);
                        target.title.setVisible(true);
                        target.main007.addChild(target.title);
                    } else if (cc.rectContainsPoint(jiaRect, location)) {
                        if (target.title) {
                            target.title.removeFromParent()
                        }
                        target.title = new cc.Sprite(cc.spriteFrameCache.getSpriteFrame("Main_0003.png"));
                        target.title.setAnchorPoint(0, 0.5);
                        target.title.setPosition(100, main007Height);
                        target.main007.addChild(target.title);
                    } else {
                        if (target.title) {
                            target.title.removeFromParent()
                        }
                    }
                }
            }, this);
        }else if ('mouse' in cc.sys.capabilities) {
            cc.eventManager.addListener({
                event: cc.EventListener.MOUSE,
                onMouseMove: function (event) {
                    var location = cc.p(event._x,event._y);
                    var target = event.getCurrentTarget();
                    var main007Height = target.main007.getContentSize().height/2
                    if(cc.rectContainsPoint(shu7Rect,location)){
                        if(target.title){
                            target.title.removeFromParent()
                        }
                        target.title = new cc.Sprite(cc.spriteFrameCache.getSpriteFrame("Main_0006.png"));
                        target.title.setAnchorPoint(0,0.5);
                        target.title.setPosition(100,main007Height);
                        target.main007.addChild(target.title);
                    }else if(cc.rectContainsPoint(shu3Rect,location)){
                        if(target.title){
                            target.title.removeFromParent()
                        }
                        target.title = new cc.Sprite(cc.spriteFrameCache.getSpriteFrame("Main_0005.png"));
                        target.title.setAnchorPoint(0,0.5);
                        target.title.setPosition(100,main007Height);
                        target.main007.addChild(target.title);
                    }else if(cc.rectContainsPoint(busRect,location)){
                        if(target.title){
                            target.title.removeFromParent()
                        }
                        target.title = new cc.Sprite(cc.spriteFrameCache.getSpriteFrame("Main_0004.png"));
                        target.title.setAnchorPoint(0,0.5);
                        target.title.setPosition(100,main007Height);
                        target.title.setVisible(true);
                        target.main007.addChild(target.title);
                    }else if(cc.rectContainsPoint(jiaRect,location)){
                        if(target.title){
                            target.title.removeFromParent()
                        }
                        target.title = new cc.Sprite(cc.spriteFrameCache.getSpriteFrame("Main_0003.png"));
                        target.title.setAnchorPoint(0,0.5);
                        target.title.setPosition(100,main007Height);
                        target.main007.addChild(target.title);
                    }else{
                        if(target.title){
                            target.title.removeFromParent()
                        }
                    }
                }
            }, this);
        }
    }
});


var MainScene = cc.Scene.extend({

    ctor:function(){
        this._super();
        cc.spriteFrameCache.addSpriteFrames(res.MainScenePlist);
    },

    init:function(){
        if(!this._super()){
            return false
        }

        return true;
    },

    onEnter:function(){
        this._super();
        var mainLayer = new MainLayer();
        this.addChild(mainLayer);
    }
});