/**
 * Created by Kirito on 5/30/15.
 */
var RoleManager = {

    ChooseRoleIdArray:[],
    RolesArray:[],
    RolesIdArray:[],

    ctor:function(){

    },

    roleChooseTouchEvent:function() {

    },

    roleCreate: function (roleId) {

        var resPath = ""
        switch (roleId) {
            case 1:
                resPath = res.ROLE_1
                break;
            case 2:
                resPath = res.ROLE_2
                break;
            case 3:
                resPath = res.ROLE_3
                break;
            case 4:
                resPath = res.ROLE_4
                break;
            case 5:
                resPath = res.ROLE_5
                break;
            case 6:
                resPath = res.ROLE_6
                break;
            case 7:
                resPath = res.ROLE_7
                break;
            case 8:
                resPath = res.ROLE_8
                break;
            case 9:
                resPath = res.ROLE_9
                break;
            case 10:
                resPath = res.ROLE_10
                break;
            case 11:
                resPath = res.ROLE_11
                break;
            case 12:
                resPath = res.ROLE_12
                break;
            case 13:
                resPath = res.ROLE_13
                break;
            case 14:
                resPath = res.ROLE_14
                break;
            case 15:
                resPath = res.ROLE_15
                break;
            case 16:
                resPath = res.ROLE_16
                break;
            default :
                break;
        }

        var resRect = cc.rect(0,0,48,48);
        var role =  cc.Sprite.create(resPath,resRect);
        role.setScale(2)
        role.roleId = roleId

        var animationFrames = []
        for (var i = 0; i < 4; i++) {
            var frameRect = resRect;
            switch (i){
                case 0:
                    break;
                case 1:
                    frameRect = cc.rect(48,0,48,48);
                    break;
                case 2:
                    frameRect = cc.rect(96,0,48,48)
                    break;
                case 3:
                    frameRect = cc.rect(144,0,48,48)
                    break;
                default :
                    break
            }
            var frame = new cc.SpriteFrame(resPath,frameRect)
            animationFrames[i] = frame
        }
        var animation = new cc.Animation(animationFrames, 0.15 ,true);
        //animation.setDelayPerUnit(2.8 / 14);
        //animation.setRestoreOriginalFrame(true);

        var action = cc.animate(animation);
        role.runAction( new cc.RepeatForever(action));

        return role;
    },

    createRandom16Roles:function(){
        var roles = [];

        for(var i=1;i<=16;i++){
            var role = this.roleCreate(i)
            roles[i-1] = role;
        }

        return roles;
    },

    clearRoleManager:function(){


    }
};
