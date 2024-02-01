const repeatString = function(stringToRepeat, num) {
 let st = stringToRepeat; 
for (let i = 1; i<  num ; i++){
st+=stringToRepeat; 
}
return st ; 
};

// Do not edit below this line
module.exports = repeatString;
