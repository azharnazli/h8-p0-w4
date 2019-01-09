function fpb(angka1, angka2) {
    var num1 = 0
    var num2 = 0
    if (angka1 > angka2) {
        var num = angka2
    } else {
        var num = angka1
    }
    for (var i = 0; i < num; i++) {
        if (angka1) {
            num1 = i
            console.log(i)
        }
    }
    console.log(num1)
}

// TEST CASES
console.log(fpb(12, 16)); // 4
console.log(fpb(50, 40)); // 10
console.log(fpb(22, 99)); // 11
console.log(fpb(24, 36)); // 12
console.log(fpb(17, 23)); // 1