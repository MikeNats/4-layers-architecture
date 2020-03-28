
export const auth =  async (userName: string, password: string): Promise<{userId: string}> =>
  await new Promise((resolve, reject) => {
    console.log('mock loging service', userName, password)
    setTimeout(() => {
      resolve({
        userId: '123',
      })
    }, 1500)
})
