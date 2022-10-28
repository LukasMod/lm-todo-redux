import axios from 'axios'

export const handleAxiosError = (apiErrorName: string, error: unknown) => {
  if (axios.isAxiosError(error)) {
    console.log(apiErrorName, error.message)
    return error.message
  } else {
    console.log(apiErrorName, error)
    return 'An unexpected error occurred'
  }
}

export function assertIsError(error: unknown): asserts error is string {
  if (!(error instanceof Error)) {
    throw error
  }
}
