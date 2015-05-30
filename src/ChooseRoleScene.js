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
        var roles = roleManager.createRandom16Roles();
        for(var i =0;i<roles.length;i++){

            roles[i].setPosition(i%4*Game_Constraint.ChooseRoleOffset,i%4*Game_Constraint.ChooseRoleOffset);
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

