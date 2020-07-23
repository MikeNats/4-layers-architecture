export type AuthResponse = {
  data: {
    csrfToken: string
    userId:number
  }
}
export type ValidationErros = {
  email: boolean,
  password: boolean, 
  isFormValid:boolean,
}
export type LogInState = {
  email: string,
  password: string,
  authStatus: boolean
  error: ValidationErros
}
  