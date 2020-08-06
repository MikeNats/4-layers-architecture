import React from 'react';
import { throttle } from 'lodash'
import { connect } from 'react-redux'
import { transactionsActions } from '../../../store/transactions/actions/transactions'
import { Dispatch } from 'redux'
import fetch from '../../../service/fetch'
import { TransactionsProps, StateType, TransactionsLocalState } from './types'
import TransactionSearchForm from '../../components/Transactions/TransactionsSearchForm/TransactionsSearchForm'
import TransactionsList from '../../components/Transactions/TransactionsList/TransactionsList';
import { TransactionItem } from '../../../domain/transaction/model'
import { shortTransactions, SortingType } from '../../../domain/transaction/transactionService';
import { Redirect} from "react-router";
import PATHS from '../../../routes/PATHS';
   

class Transactions extends React.Component <TransactionsProps, TransactionsLocalState> {
  constructor(props: TransactionsProps) {
    super(props);//componemt did update 
    this.state = {
      short: null , 
      searchTerm: ''   
    };

    this.sortAndFilter = this.sortAndFilter.bind(this)
    this.setSearchTerm = this.setSearchTerm.bind(this)
    this.setSort = this.setSort.bind(this)
  }

  componentDidMount() {//component did update active page man mh kanei loading state not sucess not loop i9f error
    const { fetchTransactions } = this.props;
    if (!this.props.errorCode) {
      fetchTransactions('/mock/transactions', this.props.context.userId)
    }  
  }

  private sortAndFilter():TransactionItem[] {
    return shortTransactions(this.state.short, this.state.searchTerm ? this.props.transactions.filter(item => 
      item.product.toLowerCase().includes(this.state.searchTerm)) : this.props.transactions)
  }

  private setSort(short: SortingType){
    this.setState({short})
  }

  private setSearchTerm = throttle(term => 
    this.setState({searchTerm: term}), 500)
 
  private transactions(){
    return (
      <main className={`base-layout`}>
        <section className="flex-grow-1">
          <TransactionSearchForm 
            shortTransactions={this.setSort}
            searchItems={this.setSearchTerm}/>
        </section>
        <section className="flex-grow-6">
          <TransactionsList 
            transactionsList={this.sortAndFilter()}/>
        </section>
      </main>)
  }
  private redirectToErrorPage() {
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
  fetchTransactions: (url: string, userId: number) => fetch({
    url: `${url}/${userId}`,
    method: 'GET',
  }, {
    asyncActionName: transactionsActions
  })(dispatch)
})

const mapStateToProps = (state: StateType) => ({//lodash check object
  transactions: state.transactions.payload,
  isFetching: state.transactions.isFetching,
  didInvalidate: state.transactions.didInvalidate,
  errorCode: state.transactions.errorCode,
})

export default connect(mapStateToProps, mapDispatchToProps)(Transactions);