// Check to see if a string has the same amount of 'x's and 'o's. The method must return a boolean and be case insensitive.  
// The string can contain any char.

// Examples input/output:

// XO("ooxx") => true
// XO("xooxx") => false
// XO("ooxXm") => true
// XO("zpzpzpp") => true // when no 'x' and 'o' is present should return true
// XO("zzoo") => false

// we need to declare two new variables, one for X and one for O.
// we then want to make a for loop to iterate thru each character in the string
// then we want to make a if statement that converts to lowercase and then adds to xNum if the character is a X.
// we then do the same in a else if statement but with O.
// all other characters are ignored.
// after the loop is done it compares the lengths of xNum and oNum
// if the two are equal(have to same length) then it returns true, if they are not equal it returns false
function XO(str){
    let xNum = '';
    let oNum = '';
    for(let i = 0; i < str.length; i++){
        if(str[i].toLowerCase() === 'x'){
            xNum += str[i];
        }else if(str[i].toLowerCase() === 'o'){
            oNum += str[i];
        }
    }
    return xNum.length === oNum.length;
}

// we could also have done it this way as well
// did the function in the return
// it took the string, made it lowercase, split it and counted how many x's were in it and then compared it to how many o's
// if they were equal then its true, if not equal then its false

function XO(str){
    return str.toLowerCase().split('x').length === str.toLowerCase().split('o').length;
}

// another one that stands out to me and that I understand how it was achieved
// did the for loop to iterate thru the string
// if there was a x then sum went up one
// if there was a o then sum went down one
// in the return if sum equalled 0 then it was true
// but if sum equalled anything other then 0, it was false
function XO(str){
    let sum = 0;
    for(i = 0; i < str.length; i++){
        if(str[i].toLowerCase() == 'x') sum++;
        if(str[i].toLowerCase() == 'o') sum--;
    }
    return sum == 0;
}