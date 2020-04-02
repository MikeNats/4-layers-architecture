
import React from 'react';
import { TransactionPayloadItemType } from '../../services/transactions/actions/types'

const getDate = (date: string) => {
  const dateObj = new Date(date);
  return `${dateObj.getDay()}/${dateObj.getMonth()}/${dateObj.getFullYear()}`
}

interface TransactionsListItem extends TransactionPayloadItemType{
  className?:string
}
const TransactionsListItem = ({
  date,
  amount,
  product,
  image,
  className = '',
}: TransactionsListItem) => (
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