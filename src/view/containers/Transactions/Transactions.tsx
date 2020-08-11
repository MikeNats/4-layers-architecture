import React from 'react';
import { throttle } from 'lodash'
import { connect } from 'react-redux'
import { ResponseIdentity } from '../../../store/state/identity/actions/types'
import { Dispatch } from 'redux'
import { TransactionsProps, StateType, TransactionsLocalState } from './types'
import TransactionSearchForm from '../../presentational/Transactions/TransactionsSearchForm/TransactionsSearchForm'
import TransactionsList from '../../presentational/Transactions/TransactionsList/TransactionsList';
import { TransactionItem } from '../../../domain/transaction/entity'
import { SORTING_METHODS, searchAndSort } from '../../../domain/transaction/transactionServices';
import { Redirect} from "react-router";
import PATHS from '../Routes/PATHS';
import { fetchIdentity, fetchTransactions} from './utils'
   

class Transactions extends React.Component <TransactionsProps, TransactionsLocalState> {
  constructor(props: TransactionsProps) {
    super(props); 
    this.state = {
      short: null , 
      searchTerm: ''   
    };
    
    this.searchAndSort = this.searchAndSort.bind(this)
    this.setSearchTerm = this.setSearchTerm.bind(this)
    this.setSort = this.setSort.bind(this)
  }
 
  componentDidMount() {//component did update active page man mh kanei loading state not sucess not loop i9f error
    const { requestIdentity, requestTransactions } = this.props;
      requestIdentity()
        .then((res:ResponseIdentity) => 
          requestTransactions(res.payload.id))
  }

  private searchAndSort():Array<TransactionItem>{
    return searchAndSort(this.state.short, this.state.searchTerm, this.props.transactions)
  }

  private setSort(short: SORTING_METHODS): void{
    this.setState({short})
  }

  private setSearchTerm = throttle(userInput => 
    this.setState({ searchTerm: userInput }), 500)
 
  private transactions(): JSX.Element{
    return (
      <main className={`base-layout`}>
        <section className="flex-grow-1">
          <TransactionSearchForm 
            shortTransactions={this.setSort}
            searchItems={this.setSearchTerm}/>
        </section>
        <section className="flex-grow-6">
          <TransactionsList 
            transactionsList={this.searchAndSort()}/>
        </section>
      </main>)
  }
  private redirectToErrorPage(): JSX.Element {
    return <Redirect to={{ 
      pathname: PATHS.ERROR,
      state: { errorCode : this.props.errorCode}}}/>
  }
  render() { 
    if (this.props.errorCode) { 
      return  this.redirectToErrorPage()
    } else if (this.props.transactions && this.props.transactions.length > 0) {
      return this.transactions();
    }
    return null; 
  }
}

const mapDispatchToProps = (dispatch: Dispatch) => ({
  requestIdentity: () => fetchIdentity()(dispatch),
  requestTransactions: (userId: number) => fetchTransactions(userId)(dispatch)
})

const mapStateToProps = (state: StateType) => ({//lodash check object
  transactions: state.transactions.payload,
  isFetching: state.transactions.isFetching,
  didInvalidate: state.transactions.didInvalidate,
  errorCode: state.transactions.errorCode,
})

export default connect(mapStateToProps, mapDispatchToProps)(Transactions);