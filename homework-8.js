const myProfile = {
  firstName: "Гаджи",
  lastName: "Ибрагимов",
  email: "ddeerrbbeenntt@gmail.com",
  job: "Робоклуб",
  position: "Учитель",
  age: "47",
  country: "Россия",
  city: "Дербент"
}

const myCar = {
  brand: "Chery",
  model: "Bonus A13",
  year: "2011",
  color: "Черный",
  transmission: "Механика",
}
myCar.owner = myProfile;

function addMaxSpeed(car) {
  if (!("maxSpeed" in car)) {
    car["maxSpeed"] = 160;
  }
}
addMaxSpeed(myCar);

function showProperty(obj, key) {
  console.log(obj[key]);
}
showProperty(myCar, "brand");

const  products = [
  "Мигалка на Ардуино", "Светящийся спинер", "Радио КИТ", "LED-куб 4х4х4", "Робот-пылесос"
];

const movies = [
  {
    title: "Задача трех тел",
    director: "Китайцы", 
    year: 2023,
    genre: "Фантастика"
  },
  {
    title: "Миллионер из трущоб",
    director: "Дэнни Бойл",
    year: 2008,
    genre: "драма"
  },
  {
    title: "Железный человек",
    director: "Джон Фавро",
    year: 2008,
    genre: "фантастика"
  }
];
movies.push({
  title: "Интерстеллар",
  director: "Кристофер Нолан",
  year: 2014,
  genre: "фантастика"
});

const marvelMovies = [
  {
    title: "Мстители: Финал",
    director: "Братья Руссо",
    year: 2019,
    genre: "Фантастика"
  },
  {
    title: "Стражи Галактики",
    director: "Джеймс Ганн",
    year: 2014,
    genre: "Фантастика"
  }
];
const allMovies = [...movies, ...marvelMovies];

console.log(allMovies);

function markRareMovies(moviesArray) {
  const updatedMovies = moviesArray.map((movie) => {
    return {
      ...movie,
      isRare: movie.year > 2000
    };
  });
  return updatedMovies;
}

const rareMovies = markRareMovies(allMovies);
console.log(rareMovies);