function filterCarByAvailability(cars) {
  // Sangat dianjurkan untuk console.log semua hal hehe
  console.log(cars);

  // Tempat penampungan hasil
  const result = [];

  // Tulis code-mu disini
  const total = cars.length;

  for (let i = 0; i < total - 1; i++) {
    if (cars[i].available === true) {
      result.push(cars[i]);
    }
  }

  console.log("filter car by availability : ");
  console.log(result);

  // Rubah code ini dengan array hasil filter berdasarkan availablity
  return result;
}
