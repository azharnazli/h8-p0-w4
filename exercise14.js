function naikAngkot(arrPenumpang) {
  rute = ["A", "B", "C", "D", "E", "F"];
  //your code here
  var awal = 0;
  var akhir = 0;
  var total = 0;
  var penumpang = [];

  for (var i = 0; i < arrPenumpang.length; i++) {
    for (j = 0; j < rute.length; j++) {
      if (arrPenumpang[i][1] === rute[j]) {
        awal = j;
      } else if (arrPenumpang[i][2] === rute[j]) {
        akhir = j;
      }
    }
    total = Math.abs(akhir - awal) * 2000;
    penumpang.push({
      penumpang: arrPenumpang[i][0],
      naikDari: arrPenumpang[i][1],
      tujuan: arrPenumpang[i][2],
      bayar: total
    });
  }
  return penumpang;
}

//TEST CASE
console.log(naikAngkot([["Dimitri", "B", "F"], ["Icha", "A", "B"]]));
// [ { penumpang: 'Dimitri', naikDari: 'B', tujuan: 'F', bayar: 8000 },
//   { penumpang: 'Icha', naikDari: 'A', tujuan: 'B', bayar: 2000 } ]

console.log(naikAngkot([])); //[]
