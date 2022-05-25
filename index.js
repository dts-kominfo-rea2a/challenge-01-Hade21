// TODO: Buatlah data dari kedua user di sini
// Tentukan tipe data dan struktur data yang menurut kalian tepat
// Kalian bisa membuat variabel lain untuk dimasukkan ke dalam atribut user agar lebih mudah dibaca
const firstUser = {
  name: "Monica",
  gender: "Female",
  age: 17,
  email: "monica@dingdong.com",
  favoriteColor: new Set(),
  isHavePet: true,
  education: [],
  favoriteRestaurant: new Set(),
};
const firstFavouriteColor = "Yellow";
firstUser.favoriteColor.add(firstFavouriteColor);
firstUser.favoriteColor.add("Pink");
firstUser.favoriteColor.add("White");
firstUser.favoriteColor.add("Purple");
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
firstUser.education.push(firstSD, firstSMP, firstSMA);
const firstRestaurant = "Bento";
firstUser.favoriteRestaurant.add(firstRestaurant);
firstUser.favoriteRestaurant.add("Sushi");
firstUser.favoriteRestaurant.add("Pancake");
firstUser.favoriteRestaurant.add("Eggy");
firstUser.favoriteRestaurant.add("Tempura");
firstUser.favoriteRestaurant.add("Bento");
firstUser.favoriteRestaurant.add("Eggy");
firstUser.favoriteRestaurant.add("Padang");
firstUser.favoriteRestaurant.add("Tteok");
firstUser.favoriteRestaurant.add("Sushi");
firstUser.favoriteRestaurant.add("Sushi");

const secondUser = {
  name: "Wendy",
  gender: "Male",
  age: 23,
  email: "wendy@dingdong.com",
  favoriteColor: new Set(),
  isHavePet: false,
  education: [],
  favoriteRestaurant: new Set(),
};
const secondFavoriteColor = "Blue";
secondUser.favoriteColor.add(secondFavouriteColor);
secondUser.favoriteColor.add("Black");
secondUser.favoriteColor.add("Grey");
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
secondUser.education.push(secondSD, secondSMP, secondSMA, secondUniv);
const secondRestaurant = "Tempura";
secondUser.favoriteRestaurant.add(secondRestaurant);
secondUser.favoriteRestaurant.add("Bento");
secondUser.favoriteRestaurant.add("Sushi");
secondUser.favoriteRestaurant.add("Pancake");
secondUser.favoriteRestaurant.add("Padang");
secondUser.favoriteRestaurant.add("Katsu");
secondUser.favoriteRestaurant.add("Geprek");
secondUser.favoriteRestaurant.add("Pancake");
secondUser.favoriteRestaurant.add("Eggy");

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
