type DateType = { year: number; month: number; isValidated: boolean }
const CURRENT_DATE = new Date()

export function helperDateValidation(
  date: string | undefined,
  beginYear = 2015,
  endYear = CURRENT_DATE.getFullYear(),
): DateType {
  if (date) {
    const splitDate = date?.split("-")
    if (splitDate.length === 2) {
      const month = Number(splitDate[1])
      const year = Number(splitDate[0])
      if (year >= beginYear && year <= endYear && month >= 1 && month <= 12) {
        return {
          month,
          year,
          isValidated: true,
        }
      }
    }
  } else {
    return {
      year: CURRENT_DATE.getFullYear(),
      month: CURRENT_DATE.getMonth(),
      isValidated: true,
    }
  }
  return {
    year: 0,
    month: 1,
    isValidated: false,
  }
}
