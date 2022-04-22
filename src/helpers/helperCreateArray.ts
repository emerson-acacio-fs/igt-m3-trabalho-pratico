export function helperCreateArray(
  beginYear: number,
  endYear: number,
): number[] {
  return [...Array(endYear - beginYear + 1).keys()].map((x) => x + beginYear)
}
