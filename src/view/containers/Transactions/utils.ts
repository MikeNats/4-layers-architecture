
import { validateIdenity } from '../../../domain/identity/identityServices'
import fetch from '../../../service/fetch'
import { identityActions } from '../../../store/state/identity/actions/identity'
import { transactionsActions } from '../../../store/state/transactions/actions/transactions'
import { getEnvVar, API } from '../../../utils'

export const fetchIdentity = () => fetch({
  url: process.env[getEnvVar(process.env.NODE_ENV, API.IDENTITY_URL)],
  method: 'GET',
  }, {
    asyncActionNames: identityActions,
    responseValidation: validateIdenity
})

export const fetchTransactions = (userId: number) => fetch({
  url:`${process.env[getEnvVar(process.env.NODE_ENV, API.TRANSACTIONS_URL)]}/${userId}`,
    method: 'GET',
  }, {
    asyncActionNames: transactionsActions
});
