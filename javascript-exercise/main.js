var name = "Malini";
console.log(name);
var numberValue = 3;
console.log(numberValue);
var numberString = "3";
console.log(numberString);
var javascriptSucks = true;
console.log(javascriptSucks);
var array = ["M","a","l","i","n","i"];
console.log(array);
var array2 = ["puppies", 3, false, "13"];
console.log(array2);
var addStrings = "cat"+"dog";
console.log(addStrings);
console.log(10+90);
console.log(array[0]);
console.log(array[5]);
console.log(array.length);
var anotherString = "supercalifragilisticexpialidocious";
console.log(anotherString.length);
var lastName = "Chandra";
console.log(name.length == lastName.length);

var students = [
  'Vee',
  'Sophia',
  'Malini',
  'Ethan',
  'Nicole',
  'Ani',
  'Sarah',
  'Ivy',
  'Hunter',
  'Emily',
  'Daniela',
  'Carly',
  'Sophie',
  'Allison',
  'Germaine'
];

if (students.length=15) {
  console.log("all students are here");
}
else {
  console.log("not everyone is here");
}

for (i = 0; i < 6; i++ ) {
  console.log(array[i]);
}

var date = new Date;
var hour = date.getHours();
console.log(hour);
if (hour>=19 && hour<=22) {
  console.log(true);
}
else {
  console.log(false);
}

var day = date.getDay();

if (day==0) {
  console.log("It's Sunday");
}
else if (day==1) {
  console.log("It's Monday");
}
else if (day==2) {
  console.log("It's Tuesday");
}
else if (day==3) {
  console.log("It's Wednesday");
}
else if (day==4) {
  console.log("It's Thursday");
}
else if (day==5) {
  console.log("It's Friday");
}
else if (day==6) {
  console.log("It's Saturday");
}

var restaurants = ["Misoya Ramen", "Cava", "Shake Shack"];
var animals = ["dog", "elephant", "monkey"];
var places = ["Hudson Yards", "Washington Square Park", "East Village"];
var pokemon = ["pikachu", "charizar", "jigglypuff"];

var allFavArrays = [restaurants, animals, places, pokemon];


for (i = 0; i < allFavArrays.length; i++ ) {
  console.log(allFavArrays[i]);
  for (x = 0; x < allFavArrays[i].length; x++) {
    var thisFavArray = allFavArrays[i];
    console.log('x is', x);
    console.log('thisFavArray', thisFavArray);
  }
}









