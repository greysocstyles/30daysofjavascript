// 1 Declare Variable String 
let challenged = '30 Days of Javascript';

// 2 Display variable challenged value
console.log(challenged);

// 3 Display length of String
console.log(challenged.length);

// 4 Convert toUpperCase
console.log(challenged.toUpperCase());

// 5 Convert toLowerCase
console.log(challenged.toLowerCase());

// 6 Substring start with index[0] to index [1]
console.log(challenged.substr(0, 1));

// 7 Substring start with index[3] to ...
console.log(challenged.substr(3));

// 8 Return true or false if Script is in the variable challenged
console.log(challenged.includes('Script'));

// 9 Split into 1 index String into an Array
console.log(challenged.split());

// 10 Split each characters with '' into an Array 
console.log(challenged.split(''));

// 11 Split String into an Array by comma
console.log('Facebook, Google, Microsoft, Apple, IBM, Oracle, Amazon'.split(','));

// 12 Replace all Javscript with Python
console.log(challenged.replace('Javascript', 'Python'));

// 13 return the character inside the index[15]
console.log(challenged.charAt(15));

// 14 return the ascii code value of character J
console.log(challenged.charCodeAt('J'));

// 15 return the first index of character a
console.log(challenged.indexOf('a'));

// 16 return the last index of character a
console.log(challenged.lastIndexOf('a'));

// 17 return the first index of word because
console.log('You cannot end a sentence with because because because is a conjunction'.indexOf('because'));

// 18 return the last index of word because
console.log('You cannot end a sentence with because because because is a conjunction'.lastIndexOf('because'));

// 19 return the first index of word because
console.log('You cannot end a sentence with because because because is a conjunction'.search('because'));

// 20 remove all white space characters.. left and right
console.log('   Socrates    '.trim());

// 21 return true of string starts with 3
console.log(challenged.startsWith('3'));

// 22 return true of string ends with t
console.log(challenged.endsWith('t'));

// 23 return all string matched 
console.log(challenged.match(/a/gi)); // g-means to search in the whole text, i - case insensitive

// 24 merge string with another string
console.log(challenged.concat(' asd'));

// 25 repeat the string 3 times
console.log(challenged.repeat(3));

/****       Exercise #2         ****/

// use parseFloat if you want to convert String to Floating number
// use parseInt if you want to convert String to Integer Number
// use Number() if you want to convert String to Number
// use toString to convert Number to a String

let x = 5.5;
let y = '5.3';

// 		Parse Float to Int    Convert Number to String
console.log(typeof parseInt(x), typeof x.toString());


//Generate Random number form 0 - 100
console.log(Math.floor(Math.random() * 100));

// Generate Random number from 50 - 100
console.log(Math.floor(Math.random() * 51) + 50);

/***        Exercise #3         ***/

let sentence = '%I $am@% a %tea@cher%, &and& I lo%#ve %te@a@ching%;. The@re $is no@th@ing; &as& mo@re rewarding as educa@ting &and& @emp%o@weri@ng peo@ple. ;I found tea@ching m%o@re interesting tha@n any ot#her %jo@bs. %Do@es thi%s mo@tiv#ate yo@u to be a tea@cher!? %Th#is 30#Days&OfJavaScript &is al@so $the $resu@lt of &love& of tea&ching'

console.log(new_sentence);



