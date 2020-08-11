
import React from 'react'

import { TransactionsListPros } from './types';
import TransactionsListItem from  '../TransactionsListItem/TransactionsListItem';

const TransactionsList = ({
  transactionsList = []
} : TransactionsListPros) =>
  <ul>{ 
    transactionsList.map(transactionsListItem => 
      <li key={ transactionsListItem.product }>
        <TransactionsListItem 
        {...transactionsListItem}/></li>)}
  </ul>

export default TransactionsList; 