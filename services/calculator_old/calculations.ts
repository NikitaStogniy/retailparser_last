export function calculatePrice(
  property_m2: number,
  property_area: number,
  first_mult: number,
  second_mult: number,
  repair_price: number,
  clusterPrice: number,
  difference: number
) {
  const calculatedPrice =
    property_m2 * first_mult * property_area * second_mult -
    repair_price * property_area;
  const differenceInitial = (
    ((property_m2 * property_area - calculatedPrice) /
      (property_m2 * property_area)) *
    100
  ).toFixed(2);
  const differenceCluster = (
    ((clusterPrice - property_m2) / clusterPrice) *
    100
  ).toFixed(2);

  return {
    formula: `(Цена кв метра ${property_m2} * Первый мультипликатор ${first_mult}) * Площадь ${property_area} * Второй мультипликатор ${second_mult} - (Цена ремонта ${repair_price} * Площадь ${property_area}) = ${calculatedPrice.toFixed(
      2
    )}₽`,
    calculatedPrice: `${calculatedPrice.toFixed(2)}₽`,
    differenceInitial: `${differenceInitial}%`,
    differenceInitialResult: parseFloat(differenceInitial) <= difference,
    clusterPrice: `${clusterPrice}₽`,
    differenceCluster: `${differenceCluster}%`,
    differenceClusterResult: parseFloat(differenceCluster) <= difference,
  };
}
