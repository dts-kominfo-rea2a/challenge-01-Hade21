// TODO: Buatlah data dari kedua user di sini
// Tentukan tipe data dan struktur data yang menurut kalian tepat
// Kalian bisa membuat variabel lain untuk dimasukkan ke dalam atribut user agar lebih mudah dibaca
const firstUser = {};
firstUser.name = "Monica";
firstUser.gender = "Female";
firstUser.age = 17;
firstUser.email = "monica@dingdong.com";
firstUser.isHavePet = true;

const firstFavoriteColor = new Set();
firstFavoriteColor.add("Yellow");
firstFavoriteColor.add("Pink");
firstFavoriteColor.add("White");
firstFavoriteColor.add("Purple");
firstUser.favoriteColor = Array.from(firstFavoriteColor);

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

const firstRestaurant = new Set();
firstRestaurant.add("Bento");
firstRestaurant.add("Sushi");
firstRestaurant.add("Pancake");
firstRestaurant.add("Eggy");
firstRestaurant.add("Tempura");
firstRestaurant.add("Bento");
firstRestaurant.add("Eggy");
firstRestaurant.add("Padang");
firstRestaurant.add("Tteok");
firstRestaurant.add("Sushi");
firstRestaurant.add("Sushi");
firstUser.favoriteRestaurant = Array.from(firstRestaurant);

const secondUser = {};
secondUser.name = "Wendy";
secondUser.gender = "Male";
secondUser.age = 23;
secondUser.email = "wendy@dingdong.com";
secondUser.isHavePet = false;

const secondFavoriteColor = new Set();
secondFavoriteColor.add("Blue");
secondFavoriteColor.add("Black");
secondFavoriteColor.add("Grey");
secondUser.favoriteColor = Array.from(secondFavoriteColor);

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
secondUser.education = secondEducation;

const secondRestaurant = new Set();
secondRestaurant.add("Tempura");
secondRestaurant.add("Bento");
secondRestaurant.add("Sushi");
secondRestaurant.add("Pancake");
secondRestaurant.add("Padang");
secondRestaurant.add("Katsu");
secondRestaurant.add("Geprek");
secondRestaurant.add("Pancake");
secondRestaurant.add("Eggy");
secondUser.favoriteRestaurant = Array.from(secondRestaurant);

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
