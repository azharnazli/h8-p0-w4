function changeMe(arr) {
    // you can only write your code here!
    var result;
    var umur;
    var tahun = 2019
    for (var i = 0; i < arr.length; i++) {
        if (arr[i][3] === undefined) {
            umur = 'Invalid Birth Year'
        } else {
            umur = tahun - arr[i][3]
        }
        result = {
            firstname: arr[i][0],
            lastName: arr[i][1],
            gender: arr[i][2],
            age: umur
        }
        console.log(result)
    }
}

// TEST CASES
console.log(changeMe([
    ['Christ', 'Evans', 'Male', 1982],
    ['Robert', 'Downey', 'Male']
])); // 1. Christ Evans:
// { firstName: 'Christ',
//   lastName: 'Evans',
//   gender: 'Male',
//   age: 36 }
// 2. Robert Downey:
// { firstName: 'Robert',
//   lastName: 'Downey',
//   gender: 'Male',
//   age: 'Invalid Birth Year' }
changeMe([]); // ""