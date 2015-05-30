/**
 * Created by Kirito on 5/30/15.
 */
var Role = cc.Sprite.extend({

    roleId:1,

    onEnter:function() {
        this._super();
    },

    ctor: function (roleId) {
        this.roleId = roleId
        var resPath = res[roleId-1];
        var resRect = cc.rect(0,192-48,48,48);
        var sprite = cc.Sprite.create(resPath,resRect);
        return sprite;
    }
})



var RoleManager = cc.Class.extend({

    ChooseRoleArray:[],
    ChooseRoleIdArray:[],
    RolesArray:[],
    RolesIdArray:[],

    ctor:function(){

    },

    roleChooseTouchEvent: function () {

    },

    generateRandomRoleId:function(){
        var roleId = Math.floor(Math.random()*15+1);
        for(var i =0;i<this.ChooseRoleIdArray.length;i++){
            if(roleId != this.ChooseRoleIdArray[i]) {
                return roleId;
            }else{
                roleId = this.generateRandomRoleId();
            }
        }
    },

    createRandom16Roles:function(){
        var roles = {};

        while(this.ChooseRoleIdArray.length!=16){
            var roleId = this.generateRandomRoleId();
            this.ChooseRoleIdArray[i] = role;
            var role = new Role(roleId)
            this.ChooseRoleArray[i] = role;
        }

        return this.ChooseRoleArray[i];
    },

    clearRoleManager:function(){
        this.ChooseRoleArray = [];
        this.ChooseRoleIdArray = [];
        this.RolesArray = [];
        this.RolesIdArray = [];
    }
})

var roleManager = new RoleManager();
