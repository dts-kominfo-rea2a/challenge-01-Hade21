// TODO: Buatlah data dari kedua user di sini
// Tentukan tipe data dan struktur data yang menurut kalian tepat
// Kalian bisa membuat variabel lain untuk dimasukkan ke dalam atribut user agar lebih mudah dibaca
const firstUser = {};
firstUser.name = "Monica";
firstUser.gender = "Female";
firstUser.age = 17;
firstUser.email = "monica@dingdong.com";
firstUser.isHavePet = true;

const firstFavoriteColor = [];
firstFavoriteColor.push("Yellow");
firstFavoriteColor.push("Pink");
firstFavoriteColor.push("White");
firstFavoriteColor.push("Purple");
firstUser.favoriteColor = firstFavoriteColor;

const firstEducation = [];
const firstSD = {
  name: "SD 01",
  city: "Jakarta",
  graduate: 2016,
};
const firstSMP = {
  name: "SMP 02",
  city: "Jakarta",
  graduate: 2016,
};
const firstSMA = {
  name: "SMA 03",
  city: "Tangerang",
};
firstEducation.push(firstSD, firstSMP, firstSMA);
firstUser.education = firstEducation;

const firstRestaurant = [];
firstRestaurant.push("Bento");
firstRestaurant.push("Sushi");
firstRestaurant.push("Pancake");
firstRestaurant.push("Eggy");
firstRestaurant.push("Tempura");
firstRestaurant.push("Bento");
firstRestaurant.push("Eggy");
firstRestaurant.push("Padang");
firstRestaurant.push("Tteok");
firstRestaurant.push("Sushi");
firstRestaurant.push("Sushi");
firstUser.favoriteRestaurant = firstRestaurant;

const secondUser = {};
secondUser.name = "Wendy";
secondUser.gender = "Male";
secondUser.age = 23;
secondUser.email = "wendy@dingdong.com";
secondUser.isHavePet = true;

const secondFavoriteColor = [];
secondFavoriteColor.push("Blue");
secondFavoriteColor.push("Black");
secondFavoriteColor.push("Grey");
secondUser.favoriteColor = secondFavoriteColor;

const secondEducation = [];
const secondSD = {
  name: "SD 02",
  city: "Jakarta",
  graduate: 2010,
};
const secondSMP = {
  name: "SMP 03",
  city: "Bogor",
  graduate: 2013,
};
const secondSMA = {
  name: "SMA 01",
  city: "Surabaya",
  graduate: 2016,
};
const secondUniv = {
  name: "Universitas Maju",
  city: "Tangerang",
};
secondEducation.push(secondSD, secondSMP, secondSMA, secondUniv);

const secondRestaurant = [];
secondRestaurant.push("Tempura");
secondRestaurant.push("Bento");
secondRestaurant.push("Sushi");
secondRestaurant.push("Pancake");
secondRestaurant.push("Padang");
secondRestaurant.push("Katsu");
secondRestaurant.push("Geprek");
secondRestaurant.push("Pancake");
secondRestaurant.push("Eggy");
secondUser.favoriteRestaurant = secondRestaurant;

// TODO: Masukkan hasil akhir dari kedua user di sini
const users = [];
users.push(firstUser);
users.push(secondUser);

// ! JANGAN MODIFIKASI LINE DI BAWAH
function main() {
  console.log(users.length || users.size);
  console.log(users);
}

main();

module.exports = {
  users,
};
