/**
 * Created by Kirito on 6/1/15.
 */
var ChooseGameLayer = cc.Layer.extend({

    ctor: function () {
        this._super();
    },

    createAnimal: function (animalId) {
        var animalSprite = new cc.Sprite(res.Btn_normal_animal_1);
        var rect = cc.rect(0,0,72,72);
        var animalFrames =[];

        switch (animalId) {
            case 0:
                animalSprite= new cc.Sprite(res.Btn_normal_animal_1);

                var animalFrame1 = new cc.SpriteFrame(res.Btn_normal_animal_1,rect);
                var animalFrame2 = new cc.SpriteFrame(res.Btn_pressed_animal_1,rect);
                var animalFrame3 = new cc.SpriteFrame(res.Btn_normal_animal_1,rect);
                animalFrames[0]=animalFrame1;
                animalFrames[1]=animalFrame2;
                animalFrames[2]=animalFrame3;
                var animation = new cc.Animation(animalFrames, 0.2,true);
                var action = cc.animate(animation);
                var delayAction = cc.delayTime(1.6);
                var sequence = cc.sequence(delayAction,action)
                animalSprite.runAction(cc.repeatForever(sequence));
                break;
            case 1:
                var animalFrame1 = new cc.SpriteFrame(res.Btn_normal_animal_2,rect);
                var animalFrame2 = new cc.SpriteFrame(res.Btn_pressed_animal_2,rect);
                var animalFrame3 = new cc.SpriteFrame(res.Btn_normal_animal_2,rect);

                animalFrames[0]=animalFrame1;
                animalFrames[1]=animalFrame2;
                animalFrames[2]=animalFrame3;
                animalSprite= new cc.Sprite(res.Btn_normal_animal_2);
                var animation = new cc.Animation(animalFrames, 0.3 ,true);
                var action = cc.animate(animation);
                var delayAction = cc.delayTime(2);
                var sequence = cc.sequence(delayAction,action)
                animalSprite.runAction(cc.repeatForever(sequence));
                break;
            case 2:
                var animalFrame1 = new cc.SpriteFrame(res.Btn_normal_animal_3,rect);
                var animalFrame2 = new cc.SpriteFrame(res.Btn_pressed_animal_3,rect);
                var animalFrame3 = new cc.SpriteFrame(res.Btn_normal_animal_3,rect);

                animalFrames[0]=animalFrame1;
                animalFrames[1]=animalFrame2;
                animalFrames[2]=animalFrame3;
                animalSprite= new cc.Sprite(res.Btn_normal_animal_3);
                var animation = new cc.Animation(animalFrames, 0.3 ,true);
                var action = cc.animate(animation);
                var delayAction = cc.delayTime(1.7);
                var sequence = cc.sequence(delayAction,action)
                animalSprite.runAction(cc.repeatForever(sequence));
                break;
            case 3:
                var animalFrame1 = new cc.SpriteFrame(res.Btn_normal_animal_4,rect);
                var animalFrame2 = new cc.SpriteFrame(res.Btn_pressed_animal_4,rect);
                var animalFrame3 = new cc.SpriteFrame(res.Btn_normal_animal_4,rect);

                animalFrames[0]=animalFrame1;
                animalFrames[1]=animalFrame2;
                animalFrames[2]=animalFrame3;
                animalSprite= new cc.Sprite(res.Btn_normal_animal_4);
                var animation = new cc.Animation(animalFrames, 0.3 ,true);
                var action = cc.animate(animation);
                var delayAction = cc.delayTime(2.2);
                var sequence = cc.sequence(delayAction,action)
                animalSprite.runAction(cc.repeatForever(sequence));
                break;
            default :
                animalSprite= new cc.Sprite(res.Btn_normal_animal_1);

                var animalFrame1 = new cc.SpriteFrame(res.Btn_normal_animal_1,rect);
                var animalFrame2 = new cc.SpriteFrame(res.Btn_pressed_animal_1,rect);
                var animalFrame3 = new cc.SpriteFrame(res.Btn_normal_animal_1,rect);
                animalFrames[0]=animalFrame1;
                animalFrames[1]=animalFrame2;
                animalFrames[2]=animalFrame3;
                var animation = new cc.Animation(animalFrames, 0.3,true);
                var action = cc.animate(animation);
                var delayAction = cc.delayTime(1.5);
                var sequence = cc.sequence(delayAction,action);
                animalSprite.runAction(cc.repeatForever(sequence));
                break;
        }

        return animalSprite;
    },

    createLabels: function (labelId) {
        var menuLabelBtn = new ccui.Button();
        menuLabelBtn.setTouchEnabled(true);
        menuLabelBtn.loadTextures(res.Btn_normal_count_7,res.Btn_pressed_count_7,"",ccui.Widget.LOCAL_TEXTURE);

        switch (labelId) {
            case 0:
                menuLabelBtn.loadTextures(res.Btn_normal_count_7,res.Btn_pressed_count_7,"",ccui.Widget.LOCAL_TEXTURE);
                break;
            case 1:
                menuLabelBtn.loadTextures(res.Btn_normal_push_3,res.Btn_pressed_push_3,"",ccui.Widget.LOCAL_TEXTURE);
                break;
            case 2:
                menuLabelBtn.loadTextures(res.Btn_normal_plus,res.Btn_pressed_plus,"",ccui.Widget.LOCAL_TEXTURE);
                break;
            case 3:
                menuLabelBtn.loadTextures(res.Btn_normal_count_people,res.Btn_pressed_count_people,"",ccui.Widget.LOCAL_TEXTURE);
                break;
            default :
                menuLabelBtn.loadTextures(res.Btn_normal_count_7,res.Btn_pressed_count_7,"",ccui.Widget.LOCAL_TEXTURE);
                break;
        }

        return menuLabelBtn;
    },

    createBoards: function () {

        for(var i=0;i<4;i++) {
            var board = new cc.Sprite(res.board);
            var boardContentSizeWidth = board.getContentSize().width/2;
            var boardContentSizeHeight = board.getContentSize().height/2;
            board.setScale(0.5);
            board.setOpacity(150);

            var row = Math.floor(i/2+1);
            var column = i%2;
            var boardPosition = cc.p(300*row-50,200*column+120);

            board.setPosition(boardPosition);
            board.setScale(0);
            var boardScaleAction1 = cc.scaleTo(0.2,0.6);
            var boardDelay = cc.delayTime(0.5*i);
            var boardSequence = cc.sequence(boardDelay,boardScaleAction1);
            board.runAction(boardSequence);
            this.addChild(board,1);

            //创建动物按钮
            var animalButton = this.createAnimal(i);
            animalButton.setScale(0);
            var animalScale = cc.scaleTo(0.2,0.8);
            var animalSequence = cc.sequence(boardDelay.clone(),animalScale);
            this.addChild(animalButton,2);
            animalButton.setPosition(boardPosition.x-boardContentSizeWidth/2,boardPosition.y+boardContentSizeHeight/2);
            animalButton.runAction(animalSequence);

            //创建文字标题
            var menuLabel = this.createLabels(i);
            menuLabel.setScale(0);
            var menuLabelScaleAct1 = cc.scaleTo(0.2,0.7);
            var menuLabelSequence = cc.sequence(boardDelay.clone(),menuLabelScaleAct1);
            menuLabel.setPosition(boardPosition.x,boardPosition.y);
            menuLabel.runAction(menuLabelSequence);
            this.addChild(menuLabel,2)
        }
    },

    onEnter: function () {
        this._super();
        this.createBoards();
    }
});

var StartLayer = cc.Layer.extend({
    start_btn:null,
    logo:null,

    ctor:function(){
        this._super();
    },

    init:function(){
        if(!this._super()){
            return false
        }

        return true;
    },

    generateNumbers:function(){
        var numbers = [];
        for(var i=0;i<10;i++){
            var numRes = res.Number_0;
            var position = cc.p(0,0);
            switch (i){
                case 0:
                    numRes = res.Number_0;
                    position = cc.p(30,80);
                    break;
                case 1:
                    numRes = res.Number_1;
                    position = cc.p(60,340);
                    break;
                case 2:
                    numRes = res.Number_2;
                    position = cc.p(200,120);
                    break;
                case 3:
                    numRes = res.Number_3;
                    position = cc.p(325,350);
                    break;
                case 4:
                    position = cc.p(689,290);
                    numRes = res.Number_4;
                    break;
                case 5:
                    position = cc.p(750,134);
                    numRes = res.Number_5;
                    break;
                case 6:
                    position = cc.p(454,50);
                    numRes = res.Number_6;
                    break;
                case 7:
                    numRes = res.Number_7;
                    position = cc.p(550,380);
                    break;
                case 8:
                    position = cc.p(713,400);
                    numRes = res.Number_8;
                    break;
                case 9:
                    position = cc.p(650,100);
                    numRes = res.Number_9;
                    break;
                default :
                    break;
            }
            var number = new cc.Sprite(numRes);
            number.setPosition(position);
            number.setScale(0);
            number.setOpacity(50);

            //begin actions of numbers
            var scaleCoefficient = Math.random()*0.3+0.4;
            //scale actions of numbers
            var scaleAction = cc.repeatForever(cc.sequence(cc.scaleTo(0.5,scaleCoefficient*1.5),cc.scaleTo(0.1,scaleCoefficient),cc.delayTime(2.85)));

            number.runAction(cc.sequence(cc.delayTime(0.15+i*0.15),cc.scaleTo(0.2,scaleCoefficient)));
            numbers[i]=number;
            this.addChild(number,2);
        }


    },

    btnStartTouchEvent: function (sender, type) {
        switch (type) {
            case ccui.Widget.TOUCH_ENDED:

                var logoMoveAct2 = cc.moveBy(1,cc.p(800,0));
                var logoMoveInOut = logoMoveAct2.easing(cc.easeInOut(4.0));
                var logSequence = cc.sequence(logoMoveInOut,cc.callFunc(this.removeFromParentAndCleanup,this.logo,true));
                this.logo.runAction(logSequence);

                var startBtnMoveAct2 = cc.moveBy(1,cc.p(-800,0));
                var startBtnMoveInOut = startBtnMoveAct2.easing(cc.easeInOut(4.0));
                var startBtnSequence = cc.sequence(startBtnMoveInOut,cc.callFunc(this.removeFromParentAndCleanup,this.start_btn,true),cc.callFunc(this.createChooseGameLayer));
                this.start_btn.runAction(startBtnSequence);

                break;
            default:
                break;
        }
    },

    removeFromParentAndCleanup:function (nodeExecutingAction, data) {
        nodeExecutingAction.removeFromParent(data);
    },

    createChooseGameLayer: function () {
        ChooseGameLayer = new ChooseGameLayer();
        componentManger.push(ChooseGameLayer);
        componentManger[0].addChild(ChooseGameLayer,2);
    },

    createLogo:function(){
        var winSize = cc.director.getWinSize();
        //logo sprite and its action
        this.logo = new cc.Sprite(res.Logo);
        this.logo.setPosition(winSize.width/2,winSize.height+500);
        var move1 = cc.moveTo(1, cc.p(winSize.width/2,winSize.height/2));
        var moveMore1 = cc.moveBy(0.2,cc.p(0,40));
        var move_ease_inout1 = move1.easing(cc.easeInOut(3.0));
        var logoMoveAct = cc.sequence(move_ease_inout1,moveMore1);
        this.logo.runAction(logoMoveAct);
        this.addChild(this.logo,3);
    },

    createBtnStart:function(){
        var winSize = cc.director.getWinSize();
        //start button and its action
        this.start_btn = new ccui.Button();
        this.start_btn.setTouchEnabled(true);
        this.start_btn.loadTextures(res.Btn_Start_Normal, res.Btn_Start_Push,"");
        this.start_btn.setPosition(winSize.width/2,winSize.height+500);
        this.start_btn.setScale(0.7);
        var move2= cc.moveTo(0.8, cc.p(winSize.width/2,winSize.height/2-140));
        var move_ease_inout2=move2.easing(cc.easeInOut(3.0));
        var moveMore2 = cc.moveBy(0.2,cc.p(0,40));
        var star_btnMove = cc.sequence(move_ease_inout2,moveMore2);
        var scaleAct1 = cc.scaleTo(0.2,1);
        var scaleAct2 = cc.scaleTo(0.2, 0.7);
        var delay = cc.delayTime(2.85);
        var scaleRepeat = cc.repeatForever(cc.sequence(delay,scaleAct1,scaleAct2));
        this.start_btn.runAction(star_btnMove);
        this.start_btn.runAction(scaleRepeat);
        this.addChild(this.start_btn,3);
        this.start_btn.addTouchEventListener(this.btnStartTouchEvent ,this);
    },

    onEnter: function () {
        this._super();
        var winSize = cc.director.getWinSize();

        //cc.audioEngine.playMusic(res.Audio_BGM,true);

        //create background
        var background =new cc.LayerColor(new cc.Color(255,255,220,255),winSize.width,winSize.height);
        background.setPosition(0,0);
        this.addChild(background,1);

        this.createLogo();
        this.createBtnStart();

        //run number actions
        var numberActions = cc.sequence(cc.delayTime(1.2),cc.callFunc(this.generateNumbers, this) );
        this.runAction(numberActions)
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
        componentManger.push(startLayer);
        this.addChild(startLayer);
    }
})