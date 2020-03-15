
export default async (userName: string, password: string): Promise<{userId: string}> =>
  new Promise((resolve, reject) => {
    console.log('mock loging', userName, password)
    setTimeout(() => {
      resolve({
        userId: '123',
      })
    }, 1500)
})
