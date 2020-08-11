
import { validateIdenity } from '../../../domain/identity/identityServices'
import fetch from '../../../service/fetch'
import { identityActions } from '../../../store/identity/actions/identity'
import { transactionsActions } from '../../../store/transactions/actions/transactions'


export const fetchIdentity = () => fetch({
  url: `mock/identity`,
  method: 'GET',
  }, {
    asyncActionNames: identityActions,
    responseValidation: validateIdenity
})

export const fetchTransactions = (userId: number) => fetch({
  url: `/mock/transactions/${userId}`,
    method: 'GET',
  }, {
    asyncActionNames: transactionsActions
});


