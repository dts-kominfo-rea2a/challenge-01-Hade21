// TODO: Buatlah data dari kedua user di sini
// Tentukan tipe data dan struktur data yang menurut kalian tepat
// Kalian bisa membuat variabel lain untuk dimasukkan ke dalam atribut user agar lebih mudah dibaca
const firstUser = {
  name: "Monica",
  gender: "Female",
  age: 17,
  email: "monica@dingdong.com",
  favouriteColor: new Set(),
  isHavePet: true,
  education: [],
  favouriteRestaurant: new Set(),
};
const firstFavouriteColor = "Yellow";
firstUser.favouriteColor.add(firstFavouriteColor);
firstUser.favouriteColor.add("Pink");
firstUser.favouriteColor.add("White");
firstUser.favouriteColor.add("Purple");
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
firstUser.favouriteRestaurant.add(firstRestaurant);
firstUser.favouriteRestaurant.add("Sushi");
firstUser.favouriteRestaurant.add("Pancake");
firstUser.favouriteRestaurant.add("Eggy");
firstUser.favouriteRestaurant.add("Tempura");
firstUser.favouriteRestaurant.add("Bento");
firstUser.favouriteRestaurant.add("Eggy");
firstUser.favouriteRestaurant.add("Padang");
firstUser.favouriteRestaurant.add("Tteok");
firstUser.favouriteRestaurant.add("Sushi");
firstUser.favouriteRestaurant.add("Sushi");

const secondUser = {
  name: "Wendy",
  gender: "Male",
  age: 23,
  email: "wendy@dingdong.com",
  favouriteColor: new Set(),
  isHavePet: false,
  education: [],
  favouriteRestaurant: new Set(),
};
const secondFavouriteColor = "Blue";
secondUser.favouriteColor.add(secondFavouriteColor);
secondUser.favouriteColor.add("Black");
secondUser.favouriteColor.add("Grey");
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
secondUser.favouriteRestaurant.add(secondRestaurant);
secondUser.favouriteRestaurant.add("Bento");
secondUser.favouriteRestaurant.add("Pancake");
secondUser.favouriteRestaurant.add("Padang");
secondUser.favouriteRestaurant.add("Katsu");
secondUser.favouriteRestaurant.add("Geprek");
secondUser.favouriteRestaurant.add("Pancake");
secondUser.favouriteRestaurant.add("Eggy");

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
