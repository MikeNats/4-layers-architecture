 
import React from 'react';
import { TransactionsListItemProps } from './types'
import { getDate } from './utils'
 
const TransactionsListItem = ({
  date,
  amount,
  product,  
  image,
  className = '',
}: TransactionsListItemProps) => (
    <article className={`comp-transactionItem ${className}`}>
      <img alt={product} src={image}/>
      <div>
        <h3>{product}</h3>
        <p><strong>Date:</strong>{getDate(date)}</p>
        <p><strong>Amount:</strong>${amount}</p>
      </div>
    </article>)
  
export default TransactionsListItem 