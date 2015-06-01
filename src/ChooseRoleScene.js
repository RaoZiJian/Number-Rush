/**
 * Created by Kirito on 5/30/15.
 */

var ChooseRoleLayer = cc.Layer.extend({

    ctor:function(){
      this._super();
    },

    init:function(){
        if(!this._super()){
            return false
        }

        return true;
    },

    onEnter:function() {
        this._super();
        var resRect = cc.Rect(0,192-48,48,48);

        var roles = RoleManager.createRandom16Roles();
        for(var i =0;i<roles.length;i++){

            var row = Math.floor(i/4+1);
            var column = i%4;
            roles[i].setPosition(70+row*Game_Constraint.ChooseRoleOffset,50+column*Game_Constraint.ChooseRoleOffset);
            this.addChild(roles[i]);
        }
    }
});


var ChooseRoleScene = cc.Scene.extend({
    onEnter:function () {
        this._super();

        var chooseRoleLayer = new ChooseRoleLayer()
        this.addChild(chooseRoleLayer)
    }
});

