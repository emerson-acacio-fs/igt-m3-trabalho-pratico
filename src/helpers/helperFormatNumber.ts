export function helperFormatNumber(data: number): string {
  return data.toLocaleString("PT", { maximumFractionDigits: 2 })
}
