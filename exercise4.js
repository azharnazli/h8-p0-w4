function cariModus(arr) {
    var hasil = 0
    for (var i = 0; i < arr.length; i++) {
        var tmp = 0
        for (var j = 0; j < arr.length; j++) {
            if (arr[i] === arr[j] && i !== j) {
                hasil = arr[i];
                tmp++
                if (tmp >= 2) {
                    hasil = -1
                }
            }
        }
    }
    if (hasil === 0) {
        return -1
    } else {
        return hasil
    }
}

// TEST CASES
console.log(cariModus([10, 4, 5, 2, 4])); // 4
console.log(cariModus([5, 10, 10, 6, 5])); // 5
console.log(cariModus([10, 3, 1, 2, 5])); // -1
console.log(cariModus([1, 2, 3, 3, 4, 5])); // 3
console.log(cariModus([7, 7, 7, 7, 7])); // -1