
export type Submit = (event: React.FormEvent<HTMLFormElement>) => void

export type Props = {
  submitForm: Submit,
  authFailed: Boolean
  errorEmail: boolean,
  errorPassword: boolean, 
  isFormValid:boolean,
  updateEmail: Function,
  updatePassword: Function,
}
 