import React from 'react';
import { connect } from 'react-redux'
import { asyncActions } from '../../actions'
import { Dispatch } from 'redux'
import fetch from '../../services'
import { AsyncActionNames } from '../../actions/types'
import { HomePropsType, StateType } from './types'
import TransactionSearchList from '../transactionsSearchList'
import {  Redirect} from "react-router";
import PATHS from '../../routes/PATHS'


class Transactions extends React.Component <HomePropsType, {}> {
  componentDidMount() {
    const { getTransactions } = this.props;
    if (!this.props.errorCode) {
      getTransactions(this.props.context.config.TRANSACTIONS_API_URI, this.props.context.userId)
    } 
  }

render() { 
  if(this.props.errorCode){
    return   <Redirect to={{
      pathname: PATHS.ERROR,
      state: { errorCode : this.props.errorCode}}}/>
  }else if(this.props.payload && this.props.payload.length >0) {
      return (
      <TransactionSearchList transactions={this.props.payload}></TransactionSearchList>);
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

const mapStateToProps = (state: StateType) => ({
  payload:state.transactions.payload,
  isFetching: state.transactions.isFetching,
  didInvalidate: state.transactions.didInvalidate,
  errorCode: state.transactions.errorCode,
})

export default connect(mapStateToProps, mapDispatchToProps)(Transactions);