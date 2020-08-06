export type AuthResponse = {
  data: {
    csrfToken: string
    userId:number
  }
}

export type LogInState = {
  email: string,
  password: string,
  authFailed: boolean
  errorEmail: boolean,
  errorPassword: boolean, 
  isFormValid:boolean,
}
  