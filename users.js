var users = [
{
    "id": 1,
    "username": "karizo",
    "name": "Boatto Karizo",
    "gender" : "male",
    "email" : "karizo502@gmail.com",
    "status": "use",
    "avatar": {
        "skin" : 1,
        "hair" : 1,
        "beard" : 1,
        "eyebrow" : 1,
        "eye" : 1,
        "nose" : 1,
        "mouth" : 1,
        "tattoo_face" : 1,
        "tattoo_body" : 1
    },
    "costume": {
        "head" : 1,
        "face" : 1,
        "upperbody1" : 1,
        "upperbody2" : 1,
        "lowerbody" : 1,
        "accessory1" : 1,
        "accessory2" : 1
    },
    "stat": {
        "str" : 10,
        "agi" : 10,
        "int" : 10,
        "lck" : 10
    },
    "money": "",
    "items": {
        "slot1" : 1,
        "slot2" : 2,
        "slot3" : 3,
        "slot4" : 4,
        "slot5" : 5
    }

},
{

    "id": 2,
    "username": "iarkaros",
    "name": "Banky Jupjup",
    "gender" : "male",
    "email" : "sorakrai@gmail.com",
    "status": "use",
    "avatar": {
        "skin" : 2,
        "hair" : 2,
        "beard" : 2,
        "eyebrow" : 2,
        "eye" : 2,
        "nose" : 2,
        "mouth" : 2,
        "tattoo_face" : 2,
        "tattoo_body" : 2
    },
    "costume": {
        "head" : 2,
        "face" : 2,
        "upperbody1" : 2,
        "upperbody2" : 2,
        "lowerbody" : 2,
        "accessory1" : 2,
        "accessory2" : 2
    },
    "stat": {
        "str" : 10,
        "agi" : 10,
        "int" : 10,
        "lck" : 10
    },
    "money": "",
    "items": {
        "slot1" : 1,
        "slot2" : 2,
        "slot3" : 3,
        "slot4" : 4,
        "slot5" : 5
    }
},
{
    "id": 3,
    "username": "drbullforg",
    "name": "Bonk Brighty",
    "gender" : "male",
    "email" : "sorakrai@gmail.com",
    "status": "use",
    "avatar": {
        "skin" : 3,
        "hair" : 3,
        "beard" : 3,
        "eyebrow" : 3,
        "eye" : 3,
        "nose" : 3,
        "mouth" : 3,
        "tattoo_face" : 3,
        "tattoo_body" : 3
    },
    "costume": {
        "head" : 3,
        "face" : 3,
        "upperbody1" : 3,
        "upperbody2" : 3,
        "lowerbody" : 3,
        "accessory1" : 3,
        "accessory2" : 3
    },
    "stat": {
        "str" : 10,
        "agi" : 10,
        "int" : 10,
        "lck" : 10
    },
    "money": "",
    "items": {
        "slot1" : 1,
        "slot2" : 2,
        "slot3" : 3,
        "slot4" : 4,
        "slot5" : 5
    }
}
];
 
/* ฟังก์ชันสำหรับหา user ทั้งหมดในระบบ ในส่วนนี้ผมจะให้ส่งค่า users ทั้งหมดกลับไปเลย */
exports.findAll = function() {
    return users;
};
 
/* ฟังก์ชันสำหรับหา user จาก id ในส่วนนี้เราจะวน loop หา users ที่มี id ตามที่ระบุแล้วส่งกลับไป */
exports.findById = function (id) {
    for (var i = 0; i < users.length; i++) {
        if (users[i].id == id) return users[i];
    }
};

exports.findAvatarById = function (id) {
    for (var i = 0; i < users.length; i++) {
        if (users[i].id == id) return users[i].avatar;
    }
};