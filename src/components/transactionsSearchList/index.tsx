
import React from 'react';
import Input from '../common/input'
import Select from '../common/select'
import TransactionsListItem from '../../components/transactionsListItem'
import { throttle } from 'lodash'
import { TransactionPayloadItemType } from '../../services/transactions/actions/types'

type LocalState = {
  activeListItems: Array<TransactionPayloadItemType>
  short: sortingType | null
}
type PropsTypes = {
  transactions: Array<TransactionPayloadItemType>
  className?: string
}
enum sortingType{
  "A-Z" = "A-Z",
  "Z-A" = "Z-A",
  "none" = "none"
}

class TransactionSearchList extends React.Component<PropsTypes, LocalState> {

  constructor(props: PropsTypes) {
    super(props);
    this.state = {
      activeListItems: this.props.transactions,
      short: null    
    };
  }

  private searchItems = throttle(term => { 
     this.shortTransactions(this.state.short, term ? this.props.transactions.filter(item => 
        item.product.toLowerCase().includes(term)) : this.props.transactions)
  }, 500)


  private shortTransactions = (value: sortingType | null, transactionPayload: Array<TransactionPayloadItemType>) => {
    const sortingType = {
      "Z-A": (a:TransactionPayloadItemType, b: TransactionPayloadItemType) =>  a.product < b.product ? -1 : 1,
      "A-Z": (a:TransactionPayloadItemType, b: TransactionPayloadItemType) =>  a.product < b.product ? 1 : -1,
      "none": () =>  0
    } 
    return this.setState({
      short: value,
      activeListItems: (transactionPayload || this.state.activeListItems).sort((a, b) => sortingType[value || "none"](a,b))
    }); 
}

  public render = () => ( 
    <React.Fragment>
      <section className="flex-grow-1">
        <form 
          className={`comp-transactionSearchList ${this.props.className}`}>
          <fieldset>
            <Input  
              type="text" 
              name="search" 
              id="search"
              label="search"
              errorMessage=""
              placeholder="search"
              onChangeHandler={this.searchItems}/>
          </fieldset>
          <fieldset> 
            <Select 
              id="sort" 
              options={
                [{name:'a-z', value:"A-Z"}, 
                {name:'z-a', value:"Z-A"}]}
              onChangeHandler={this.shortTransactions}>
            </Select>
          </fieldset>
        </form>
      </section>
      <section className="flex-grow-6">
        { this.state.activeListItems.map(item =>
          <TransactionsListItem 
            key={item.product} 
            className="flex-direction-row" {...item}></TransactionsListItem>) 
        }    
    </section>
  </React.Fragment>)
}

export default TransactionSearchList

