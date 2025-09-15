var user = {
  id: "user01",
  password: "user-password",
  grade: "begginer",
  authorization: ["article-list", "article-read", "reply-write"],
  address: {
    city: "인천",
    street: "~~~로",
    apt: "~~동 ~~호",
  },
  email: "codemakers.kr@gmail.com",
  name: "회원01",
  printUserInfo: function () {
    console.log("이름: " + name);
    console.log("이메일: " + email);
    console.log("주소: " + address.city + address.street);
  },
};

user.nickname = "관리자입니다";
console.log(user);

console.log(user.name);
console.log(user.address.city);
console.log(user.authorization[0]);
