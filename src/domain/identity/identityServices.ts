import { Identity } from './entity'
import { isString, isNumber } from 'lodash'

export const createIdenity = (): Identity => Object.freeze({
  name: '',
  lastName: '',
  id: null,
  email: '' ,  
})

const isValidIdentity = (name: string, 
    lastName: string,
    id: number | null,
    email: string): Boolean => 
  !!name && isString(name) &&
  !!lastName && isString(lastName) &&
  !!email && isString(email) && (/\S+@\S+\.\S+/).test(email) &&
  !!id && isNumber(id);

export const validateIdenity = (payload: {name: string, 
  lastName: string,
  id: number | null,
  email: string}) => 
isValidIdentity(payload.name, payload.lastName, payload.id, payload.email);
