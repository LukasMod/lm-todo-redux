export const delay = (ms = 1000) =>
  new Promise((resolve: any) => {
    setTimeout(resolve, ms)
  })
