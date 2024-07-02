
/// May 20th, 2024 (Practice Questions) /////

// 1.

// Write a JavaScript function that reverse a number.
// Sample Data and output:
// Example x = 15243; // reverseNumber(15234)
// Expected Output: 34251
// Hint: reverse( ) reverses what is given to it.

function reverseNUm(n){
    n = n + "";
    return n.split("").reverse().join("");
}

console.log(number(reverseNUm(221431)))



// 2.

// Write a JavaScript function that returns a passed string with letters in alphabetical order.
// Example string : 'keyincollege'
// Expected Output : 'ceeegikllnoy'
// Sort() …

function alphabetOrder(str)
  {
return str.split('').sort().join('');
  }
console.log(alphabetOrder("keyincollege"));



// 4. 

// Write a JavaScript function to get the current date.
// Expected Output:
// mm-dd-yyyy, mm/dd/yyyy or dd-mm-yyyy, dd/mm/yyy

var curDay = function(sp){
    today = new Date();
    var dd = today.getDate();
    var mm = today.getMonth()+1;
    var yyyy = today.getFullYear();
    
    if(dd<10) dd='0'+dd;
    if(mm<10) mm='0'+mm;
    return (mm+sp+dd+sp+yyyy);
    };

    console.log(curDay('/'));



// 5.

// Write a function in JavaScript “captalize(str)” that returns the string “str” with
// its first letter converted to capital (if that is small letter – if it is already capital,
// returns the string as is)

function upperCase(str)
{
  var array1 = str.split(' ');
  var newarray1 = [];
    
  for(var x = 0; x < array1.length; x++){
      newarray1.push(array1[x].charAt(0).toUpperCase()+array1[x].slice(1));
  }
  return newarray1.join(' ');
}
console.log(upperCase("logan oram"));



// 6.

// Write a function in JavaScript “checkPeriod(str)” that returns “contain period” if str contains
// a period “.”, otherwise it returns “no period”.

function checkPeriod(str) {
    if (str.includes(".")) {
        return "contain period";
    } else {
        return "no period";
    }
}

console.log(checkPeriod("logan. oram"));
console.log(checkPeriod("logan oram"));




// 7.

// Write a function in JavaScript “putSuffix(num)” that takes a number “num” as parameter and puts a suffix
// with it. For example, if num is 22 then the function returns 22nd, if num is 23 then function returns 23rd
// and so on. If user does not provide a parameter, then it should return without anything.

function putSuffix(num) {
    if (num % 100 >= 11 && num % 100 <= 13) {
        return num + "th";
    }

    switch (num % 10) {
        case 1:
            return num + "st";
        case 2:
            return num + "nd";
        case 3:
            return num + "rd";
        default:
            return num + "th";
    }
}

console.log(putSuffix(22));
console.log(putSuffix(79)); 
console.log(putSuffix(13)); 

