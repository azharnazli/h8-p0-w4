function tukarBesarKecil(kalimat) {
  var upper = "";
  var lower = "";
  var result = "";
  for (var i = 0; i < kalimat.length; i++) {
    upper = kalimat[i].toUpperCase();
    lower = kalimat[i].toLowerCase();
    if (kalimat[i] === upper) {
      result += kalimat[i].toLowerCase();
    } else if (kalimat[i] === lower) {
      result += kalimat[i].toUpperCase();
    }
  }
  return result;
}

// TEST CASES
console.log(tukarBesarKecil("Hello World")); // "hELLO wORLD"
console.log(tukarBesarKecil("I aM aLAY")); // "i Am Alay"
console.log(tukarBesarKecil("My Name is Bond!!")); // "mY nAME IS bOND!!"
console.log(tukarBesarKecil("IT sHOULD bE me")); // "it Should Be ME"
console.log(tukarBesarKecil("001-A-3-5TrdYW")); // "001-a-3-5tRDyw"
