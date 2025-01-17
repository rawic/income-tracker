export interface isEmptyObjectI {
  [k: string]: string | number | boolean | object,
}

export interface ValidateI {
  description: string,
  amount: string,
  date: {
    date: string,
    formatted: string
  }
}

export interface ErrorsI {
  description?: string
  amount?: string,
  date?: string
}