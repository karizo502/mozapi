var users = [
{
    "id": 1,
    "username": "karizo",
    "name": "Boatto Karizo",
    "position": "Pirate King"
},
{
    "id": 2,
    "username": "iarkaros",
    "name": "Banky Jupjup",
    "position": "Former-Shichibukai"
},
{
    "id": 3,
    "username": "drbullforg",
    "name": "Bonk Brighty",
    "position": "Captain"
},
{
    "id": 4,
    "username": "kuzan",
    "name": "Aokiji",
    "position": "Former Marine Admiral"
},
{
    "id": 5,
    "username": "shanks",
    "name": "'Red-Haired' Shanks 222",
    "position": "The 4 Emperors"
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