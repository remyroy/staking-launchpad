export const numberWithCommas = function(
  n: number | string | undefined
): string {
  if (n === undefined) {
    return '';
  }
  return n.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
};
