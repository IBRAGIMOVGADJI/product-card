function logTempCity (cityName, cityTemp)  {
  console.log(`Сейчас в ${cityName} температура — ${cityTemp} градусов по Цельсию`);
}
logTempCity("Дербент", 30);

const SPEEDLIGHT = 299792458;
function checkSpeed(speed) {
 if (speed > SPEEDLIGHT) {
     console.log(`Скорость ${speed} м/с — Сверхсветовая скорость`);
 } else if (speed < SPEEDLIGHT) {
    console.log(`Скорость ${speed} м/с — Субсветовая скорость`);
 } else {
     console.log(`Скорость ${speed} м/с — это Скорость света`);
  }
}
checkSpeed(200000000);

let product = 'RobotCleaner';
let price = 10000;
function buyProduct(budget) {
 if (budget >= price) {
  console.log('Робот-пылесос приобретён. Спасибо за покупку!');
} else {
let shortage = price - budget;
  console.log(`Вам не хватает ${shortage} рублей, пополните баланс`);
  }
}
buyProduct(3000);

function sayHello(name) {
  console.log(`Привет, ${name}!`);
  console.log('Привет ' + name +'!');
}
sayHello('Азиз');

const CITY = "Дербент";
let year = 2026;
let isStudent = true;