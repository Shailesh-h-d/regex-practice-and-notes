var sentence = "The dog chased the cat";
var regex = /the/;
var result = regex.test(sentence);
console.log(result); // true

var mystr = "Hello, world";
var myregex = /Hello/;
var result = myregex.test(mystr);
console.log(result); //true

//IGNORE CASE
var mystr = 'freeCodeCamp';
var regex = /freecodecamp/;
var result = regex.test(mystr);
console.log(result); //false

var mystr = 'freeCodeCamp';
var regex = /freecodecamp/i; // flag i to ignore case
var result = regex.test(mystr);
console.log(result); //true

// EXTRACT MATCHES (use .match)
var str = 'Extract the word coding from this string';
var codingregex = /coding/;
var result = str.match(codingregex);
console.log(result[0]); //coding

// FIND MORE MATCHES (use .match and g flag)
var str = 'Repeat the code, Repeat, Repeat again';
var regex = /Repeat/g;
var result = str.match(regex);
console.log(result); // ['Repeat', 'Repeat', 'Repeat']

var str = 'Twinkle, twinkle, twinkle, little star';
var starRegex = /twinkle/ig;
var result = str.match(starRegex);
console.log(result); // ['Twinkle', 'twinkle', 'twinkle']

// WILDCARD PERIOD(.)
var str = `I'll hum a song`;
var regex = /hu./;
var result = str.match(regex);
console.log(result[0]); // hum

var str = "let's have fun with regular expressions!";
var regex = /.un/;
var result = str.match(regex);
console.log(result[0]); // fun
console.log(regex.test(str)); // true

// MATCH CHARACTER WITH MULTIPLE POSSIBILITIES
var str = "Beware of Bugs in the code";
var regex = /b[aeiou]g/ig; // a && e && i && o && u
var result = str.match(regex);
console.log(result); // [Bug]

var regex1 = /[aeiou]/ig; // a && e && i && o && u
var result = str.match(regex1);
console.log(result); // ['e', 'a', 'e', 'o', 'u', 'i', 'e', 'o', 'e']

// MATCH LETTERS OF THE ALPHABET(Range of letters)
var str = "The quick brown fox jumps over the lazy dog";
var regex = /[a-z]/ig;
var result = str.match(regex);
console.log(result); // ['T', 'h', 'e', 'q', 'u', 'i', 'c', 'k', 'b', 'r', 'o', 'w', 'n', 'f', 'o', 'x', 'j', 'u', 'm', 'p', 's', 'o', 'v', 'e', 'r', 't', 'h', 'e', 'l', 'a', 'z', 'y', 'd', 'o', 'g']

// MATCH NUMBERS AND LETTERS OF THE ALPAHBET(Range of letters and numbers)
var str = "Blue berry 3.141592653 are delicious.";
var myRegex = /[2-6h-s]/ig; // 2-6 && h-s
var result = str.match(myRegex);
console.log(result); //['l', 'r', 'r', '3', '4', '5', '2', '6', '5', '3', 'r', 'l', 'i', 'i', 'o', 's']

// MATCH CHARACTER NOT SPECIFIED ([^abcd])
var str = "3 blind mice";
var myRegex = /[^0-9aeiou ]/ig; // this set includes space. 0-9 && a && e && i && o && u && space
var result = str.match(myRegex); // negeting the characters.
console.log(result); // ['b', 'l', 'n', 'd', 'm', 'c']

// MATCH CHARACTERS THAT OCCUR ONE OR MORE TIMES (+)
var word = "Mississippi";
var regex = /s+/ig; // use + infront of the letter to match more than one time
var result = word.match(regex);
console.log(result); // ['ss', 'ss']

var str = "P1P2P3P4P5P6CCCP7P8P9P10";
var regex = /C+/;
var result = str.match(regex);
console.log(result[0]); // CCC

// MATCH CHARACTERS THAT OCCUR ZERO OR MORE TIMES (*)
var word = "goooooooooo";
var regex = /go*/; // use * infront of the letter to match zero or more time
var result = word.match(regex);
console.log(result[0]); // goooooooooo

var word2 = "gut feeling";
var result = word2.match(regex);
console.log(result[0]); // g

var word3 = "over the top";
var result = word3.match(regex); // go* => g did not match. so null
console.log(result); // null

var quote = "Aaaaaaaaaaaaaaarrrrrrrrghh!";
var regex = /Aa*/;
var result = quote.match(regex); 
console.log(result[0]);

// FIND CHARACTERS WITH LAZY MATCHING
var str = "titanic";
var regex = /t[a-z]*i/; // t[a-z]* upto i
var result = str.match(regex);
console.log(result[0]); // titani
 
var text = "<h1>Winter is coming</h1>";
var regex = /<.*?>/; 
var result = text.match(regex);
console.log(result[0]); // <h1>

// MATCH BEGINNING STRING PATTERN (^)
var str = "Cal and Ricky both like racing.";
var str1 = "Ricky and Cal both like racing";
var regex = /^cal/i;
var result = regex.test(str);
console.log(str.match(regex)[0]);
console.log(result); // true;
var result = regex.test(str1);
console.log(result); // false;

// MATCH ENGING STRING PATTERN ($)
var str = "the last car on the train is the best";
var lastRegex = /best$/;
var result = lastRegex.test(str);
console.log(result); // true

// MATCH ALL LETTERS AND NUMBERS (\w)
var str = "The fire boxing wizards jump quickly?.";
var regex = /\w/g; // matches all letters and numbers and underscore
var result = str.match(regex);
console.log(regex.test(str));
console.log(result); // ['T', 'h', 'e', 'f', 'i', 'r', 'e', 'b', 'o', 'x', 'i', 'n', 'g', 'w', 'i', 'z', 'a', 'r', 'd', 's', 'j', 'u', 'm', 'p', 'q', 'u', 'i', 'c', 'k', 'l', 'y']

// MATCH EVERYTHING BUT LETTERS AND NUMBERS (\W)
var str = "The fire boxing wizards jump quickly?.";
var regex = /\W/g; // matches everything except letters and numbers and underscore
var result = str.match(regex);
console.log(result); // [' ', ' ', ' ', ' ', ' ', '?', '.']

// MATCH ALL ONLY NUMBERS (\d)
var str = "Your sandwich will be $5.00";
var regex = /\d/g; // matches all numbers
var result = str.match(regex);
console.log(result); // ['5', '0', '0']

// MATCH ALL ONLY NON NUMBERS (\D) 
var str = "Your sandwich will be $5.00";
var regex = /\D/g; // matches all non numbers
var result = str.match(regex);
console.log(result.join(''));  // Your sandwich will be $.

// RESTRICT POSSIBLE USERNAMES
var userName = "Shailesh1999";
var regex = /^[A-za-z]{2,}\d*$/;  
// ^[A-Za-z] => beginning of the string should be non numbers
// {2,} => at least 2 characters
// \d*$ => end of the string should be numbers
var result = regex.test(userName);
console.log(result); // true
console.log(userName.match(regex)[0]); // Shailesh1999

// MATCH WHITE SPACES (\s)
var str = "shailesh H D";
var whiteSpace = /\s/g;
var result = str.match(whiteSpace);
console.log(result); // [' ', ' ']
console.log(result.length); // 2

// MATCH NON WHITE SPACES (\S)
var str = "shailesh H D";
var nonWhiteSpace = /\S/g;
var result = str.match(nonWhiteSpace);
console.log(result.join('')); // shaileshHD

// SPECIFY UPPER AND LOWER NUMBER OF MATCHES (quantity specifier) 
var str = "ohhhh yeah";
var regex = /oh{2, 6} no/;
// 3 => minimum of (atleast)
// 4 => maximum of (atmost)
var result = regex.test(str);
console.log(result); // false

// SPECIFY ONLY LOWER NUMBER OF MATCHES (quantity specifier)
var str = "Hazzzzah";
var regex = /z{4,}/; 
// 4 => minimum of (atleast)
var result = regex.test(str);
console.log(result); // true

// SPECIFY EXACT NUMBER OF MATCHES (quantity specifier)
var str = "Timmmmber";
var regex = /tim{4}ber/i;
// 4 => exact number of matches
var result = regex.test(str);
console.log(result); // true

// CHECK FOR ALL OR NONE
var str = 'favorite';
var regex = /favou?rite/; // u? => either or neither u.
var result = regex.test(str);
console.log(result); // true
console.log(str.match(regex)[0]); // favorite

// POSITIVE OR NEGATIVE LOOKAHEAD
var str = "qu";
var str1 = "q+";
var regex = /q(?=u)/; // positive lookahead // if u present, then return q
var regex1 = /q(?!u)/; // negative lookahead// if u not present, then return q

var result = str.match(regex);
var result1 = str1.match(regex1);

console.log(result[0]); // q
console.log(result1[0]); // q

var str = "astronaut";
var regex = /as(?=\w{5,})/;
var result = str.match(regex);
console.log(result[0]); // as

// REUSE PATTERNS USING CAPTURE GROUP
var str = "regex regex";
var regex = /(\w+)\s\1/; // \1 will repeat the pattern
var result = str.match(regex);
console.log(result); // ['regex regex', 'regex']

var str = "42 42 42";
var regex = /^(\d+)\s\1\s\1$/;
var result = str.match(regex);
console.log(result); // ['42 42 42', '42',]
                          //match   //capture group

// CAPTURE GROUPS TO SEARCH AND REPLACE
var str = "The sky is silver";
var regex = /silver/;
var result = str.replace(regex, "blue");
console.log(result); // The sky is blue

var str = "code camp";
var regex = /(\w+)\s(\w+)/;
var result = str.replace(regex, "$2$1");
console.log(result); // campcode

// REMOVE WHITE SPACES FROM START TO END
var str = "   Hello, world!   ";
var regex = /^\s+ | \s+$/;
var result = str.replace(regex, "");
console.log(result.split("")); // Hello, world!

// CONVERT STRING TO REGEX
var str = "Hello";
var regex = new RegExp(str);
var regexflag_i = new RegExp(str, "i"); // i => case insensitive
var regexfalg_g = new RegExp(str, "g"); // g => global

var email = "shaileshhd.com@gmail.com";
var regexemail = /^([\w\-\.]+)@[\w]+\.(\w{2,3})$/;
// var regexpassword = /^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]{2,5})$/;
var result = regexemail.test(email);
console.log("email",result);

var password = "sdj@DH@23158@15";
var regexpassword = /^(?=.*[\d]+)(?=.*[\W]+)(?=.*[A-Z]+)(?=.*[a-z]+)[\S]{8,18}$/;
var regexpassword1 = /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{6,16}$/;
var result = regexpassword.test(password);
console.log("password",result);

var name = "test_1999";
var regexname = /^(?=.*[^\W])[\w]{3,20}$/;
var result= regexname.test(name);
console.log("name",result);

var phone = "9980637529";
var regexphone = /^[0-9]{10}$/;
var result = regexphone.test(phone);
console.log("phone",result);
