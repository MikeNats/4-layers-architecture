
import React from 'react';
import { TransactionsListItemType } from './types'

const getDate = (date: string) => {
  const dateObj = new Date(date);
  return `${dateObj.getDay()}/${dateObj.getMonth()}/${dateObj.getFullYear()}`
}

const TransactionsListItem = ({
  date,
  amount,
  product,
  image,
  className = '',
}: TransactionsListItemType) => (
    <article className={`comp-transactionItem ${className}`}>
      <img alt={product} src={image}/>
      <div>
        <h3>{product}</h3>
        <p><strong>Date:</strong>{getDate(date)}</p>
        <p><strong>Amount:</strong>${amount}</p>
      </div>
    </article>
)
  
export default TransactionsListItem