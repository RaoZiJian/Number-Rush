var MainLayer = cc.Layer.extend({

    title:null,
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

        //the title background at the wall background
        var main007 = new cc.Sprite(cc.spriteFrameCache.getSpriteFrame("Main_0007_tishikuang_UI.png"));
        main007.setAnchorPoint(0,0.5);
        main007.setScaleX(0.8);
        main007.setPosition(170,wallBg.getContentSize().height/2)
        wallBg.addChild(main007,1);

        //the title
        this.title = new cc.Sprite(cc.spriteFrameCache.getSpriteFrame("Main_0006.png"));
        this.title.setAnchorPoint(0,0.5);
        this.title.setPosition(100,main007.getContentSize().height/2);
        this.title.setVisible(false);
        main007.addChild(this.title);

        //the clouds
        var main021 = new cc.Sprite(cc.spriteFrameCache.getSpriteFrame("Main_0021_yuncai.png"));
        main021.setAnchorPoint(0,1);
        main021.setPosition(0,bg.getContentSize().height-80);
        this.addChild(main021,1);

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