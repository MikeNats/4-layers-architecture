
export type Submit = (event: React.FormEvent<HTMLFormElement>) => void

export type ValidationErros = {
  email: boolean,
  password: boolean, 
  isFormValid:boolean,
}

export type Props = {
  submitForm: Submit,
  authStatus: Boolean
  validationErrors: ValidationErros,
  updateEmail: Function,
  updatePassword: Function,
}
