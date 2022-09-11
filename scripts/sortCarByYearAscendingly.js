function sortCarByYearAscendingly(cars) {
  // Sangat dianjurkan untuk console.log semua hal hehe
  console.log(cars);

  // Clone array untuk menghindari side-effect
  // Apa itu side effect?
  const result = [...cars];

  // Tulis code-mu disini
  const total = cars.length;
  var swap;

  do {
    swap = false;
    for (let i = 0; i < total - 1; i++) {
      if (result[i].year > result[i + 1].year) {
        var temp = result[i];
        result[i] = result[i + 1];
        result[i + 1] = temp;
        swap = true;
      }
    }
  } while (swap);

  console.log("sort car by year ascendingly : ");
  console.log(result);

  // Rubah code ini dengan array hasil sorting secara ascending
  return result;
}
