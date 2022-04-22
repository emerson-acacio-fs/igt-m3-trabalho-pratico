export function helperFormatNumber(data: number): string {
  return (Math.round(data * 100) / 100).toLocaleString("PT", {
    maximumFractionDigits: 2,
  })
}
