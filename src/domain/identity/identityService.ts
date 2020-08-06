import { Identity } from './model'

export const createIdenity = (): Identity => Object.freeze({
  name: '',
  lastName: '',
  id: null,
  email: '' ,  
})