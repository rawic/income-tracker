export interface IncomeI {
  id: string,
  description: string,
  date: {
    date: string,
    formatted: string
  },
  amount: number
}

export interface IncomesI {
  [index: number]: IncomeI
}