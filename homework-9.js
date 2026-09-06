import { comments } from './comments.js';

const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const filteredArray = array.filter(num => num >= 5);
console.log(filteredArray);

const array2 = ["Ложки", "Вилки", "Ножи", "Тарелки"];
const hasKnives = array2.includes("Ножи");
console.log(hasKnives);

function reverseArray(arr) {
  return arr.reverse();
}

const reversedNumbers = reverseArray(filteredArray);
const reversedKitchen = reverseArray(array2);

console.log(reversedNumbers);
console.log(reversedKitchen);

function hasDotCom(comment) {
  return comment.email.includes(".com");
}

const filteredComments = comments.filter(hasDotCom);
console.log(filteredComments);

comments.forEach(comment => {
  if (comment.id <= 5) {
    comment.postId = 2;
  } else {
    comment.postId = 1;
  }
});

console.log(comments);

const idNames = comments.map(comment => {
  return {
    id: comment.id,
    name: comment.name
  };
});

console.log(idNames);

comments.forEach(comment => {
  comment.isInvalid = comment.body.length > 180;
});

console.log(comments);

const emailsReduce = comments.reduce((acc, comment) => {
  acc.push(comment.email);
  return acc;
}, []);
console.log(emailsReduce);

const emailsMap = comments.map(comment => comment.email);
console.log(emailsMap);

const emailsString1 = emailsMap.toString();
const emailsString2 = emailsMap.join("// ");
console.log(emailsString1);
console.log(emailsString2);
