function digitPerkalianMinimum(angka) {
  // you can only write your code here!
  var result = "";
  var array = [];
  for (var i = 0; i <= angka; i++) {
    for (var j = 0; j <= angka; j++) {
      if (i * j === angka) {
        result = i + "" + j;
        array.push(result);
      }
    }
  }
  var maxNumber = angka * 5;
  for (var k = 0; k < array.length; k++) {
    if (array[k].length < maxNumber) {
      maxNumber = array[k].length;
    }
  }
  return maxNumber;
}

// TEST CASES
console.log(digitPerkalianMinimum(24)); // 2
console.log(digitPerkalianMinimum(90)); // 3
console.log(digitPerkalianMinimum(20)); // 2
console.log(digitPerkalianMinimum(179)); // 4
console.log(digitPerkalianMinimum(1)); // 2
