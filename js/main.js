// нема різниці між одинарними і подвійними лапками, але треба дотримуватись якогось одного для себе методу в коді
var text = 'my text string';
var anotherText = "my another text string";

var str1 = "I'm a JavaScript \"programmer\" ";
console.log(str1); // I'm a JavaScript "programmer"

var str2 = "symbol \\";
console.log(str2); // symbol \

var str3 = "some text";
console.log(str3.length); //довжина стрічки

var str4 = "My\n"; // 3 символи, третім буде перехід на новий рядок
console.log( str4.length ); // 3

// доступатися до елементів стрічки можна:
var str5 = "I like code";
console.log(str5.charAt(0)); // "I" (ніхто цей метод не використовує :))
console.log(str5[0]); // "I"
// різниця тут в тому, що
console.log("".charAt(0)); // повертає порожній рядок
console.log("" [0] ); // повертає undefined

var str6 = "string";
str6 = str6[3] + str6[4] + str6[5];
console.log(str6); // ing

// toLowerCase() та toUpperCase()
console.log("Ukraine".toUpperCase()); //UKRAINE
console.log("Flower"[0].toLowerCase()); //flower

// indexOf(str[, first position])
var str7 = "I study programming at GoIteens";
console.log( str7.indexOf("study") ); // 2, починається з позиції 2
console.log( str7.indexOf("programming") ); // 8
console.log( str7.indexOf("goIteens") ); // -1, так як не найдено повної відповідності
var str8 = "I thought a thought. But the thought I thought wasn't the thought";
console.log(str8.indexOf("thought", 10)); // 12 починаючи з 10 позиції

// перевіряється умова, тоді виконується
// while (condition) {
//     code block to be executed
// }

var str9 = "I say go-go";
var target = "go";
var pos = -1;
while ((pos = str9.indexOf(target, pos + 1)) != -1) {
  console.log(pos);
}

// спочатку виконується - потім перевіряється умова
// do {
//     code block to be executed
// }
// while (condition);
var text2 = "";
var i = 0;
do {
  text2 += "The number is " + i + "\n";
  i++;
}
while (i < 10);
console.log(text2);

// substring(start [, end])
var str10 = "stringify";
console.log(str10.substring(1, 6)); // tring - символи з другої розиції до кінця

// substr(start [, length])
var str11 = "stringify";
console.log(str11.substr(2,4)); // ring - починаючи з другого виводимо 4 символи

// slice - насправді єдиний потрібний метод, який використовується )))))
console.log( "testme".slice(-2) ); // "me" - з другої позиції з кінця
console.log( "testme".slice(1, -1) ); // "estm" - з першої позиції до першої з кінця
