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

    onEnter: function () {
        this._super();
        var winSize = cc.director.getWinSize();

        cc.audioEngine.playMusic(res.Audio_BGM,true);

        //create background
        var background =new cc.LayerColor(new cc.Color(255,255,220,255),winSize.width,winSize.height);
        background.setPosition(0,0);
        this.addChild(background,1);

        //logo sprite and its action
        var logo = new cc.Sprite(res.Logo);
        logo.setPosition(winSize.width/2,winSize.height+500);
        var move1 = cc.moveTo(1, cc.p(winSize.width/2,winSize.height/2));
        var moveMore1 = cc.moveBy(0.2,cc.p(0,40));
        var move_ease_inout1 = move1.easing(cc.easeInOut(3.0));
        var logoMoveAct = cc.sequence(move_ease_inout1,moveMore1);
        logo.runAction(logoMoveAct);
        this.addChild(logo,3);

        //start button and its action
        var start_btn = new ccui.Button();
        start_btn.setTouchEnabled(true);
        start_btn.loadTextures(res.Btn_Start_Normal, res.Btn_Start_Push,"");
        start_btn.setPosition(winSize.width/2,winSize.height+500);
        start_btn.setScale(0.7);
        var move2= cc.moveTo(0.8, cc.p(winSize.width/2,winSize.height/2-140));
        var move_ease_inout2=move2.easing(cc.easeInOut(3.0));
        var moveMore2 = cc.moveBy(0.2,cc.p(0,40));
        var star_btnMove = cc.sequence(move_ease_inout2,moveMore2);
        var scaleAct1 = cc.scaleTo(0.2,1);
        var scaleAct2 = cc.scaleTo(0.2, 0.7);
        var delay = cc.delayTime(2.85);
        var scaleRepeat = cc.repeatForever(cc.sequence(delay,scaleAct1,scaleAct2));
        start_btn.runAction(star_btnMove);
        start_btn.runAction(scaleRepeat);
        this.addChild(start_btn,3);

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
        this.addChild(startLayer);
    }
})