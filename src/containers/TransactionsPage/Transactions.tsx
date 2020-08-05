import React from 'react';
import { throttle } from 'lodash'
import { connect } from 'react-redux'
import { asyncActions } from '../../store/actions'
import { Dispatch } from 'redux'
import fetch from '../../service/fetch'
import { AsyncActionNames } from '../../store/actions/types'
import { TransactionsProps, StateType, TransactionsLocalState, SortingType } from './types'
import TransactionSearchForm from '../../components/Transactions/TransactionsSearchForm/TransactionsSearchForm'
import TransactionsList from '../../components/Transactions/TransactionsList/TransactionsList';
import { TransactionItemType } from '../../models/transactions'
import { Redirect} from "react-router";
import PATHS from '../../routes/PATHS';
import { shortTransactions } from './utils'
  

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
    const { getTransactions } = this.props;
    if (!this.props.errorCode) {
      getTransactions(this.props.context.config.TRANSACTIONS_API_URI, this.props.context.userId)
    }  
  }

  private sortAndFilter():TransactionItemType[] {
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
  }else if (this.props.transactions && this.props.transactions.length > 0) {
    return this.transactions();
    }
      return null;
    }
}
const mapDispatchToProps = (dispatch: Dispatch) => ({
  getTransactions: (url: string, userId: number) => fetch({
    url: `${url}/${userId}`,
    method: 'get',
  }, {
    asyncActionName: asyncActions[AsyncActionNames.TRANSACTIONS]
  })(dispatch)
})

const mapStateToProps = (state: StateType) => ({//lodash check object
  transactions: state.transactions.payload,
  isFetching: state.transactions.isFetching,
  didInvalidate: state.transactions.didInvalidate,
  errorCode: state.transactions.errorCode,
})

export default connect(mapStateToProps, mapDispatchToProps)(Transactions);