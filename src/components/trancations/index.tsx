import React from 'react';
import { connect } from 'react-redux'
import { Dispatch } from 'redux'
import { fetchtransactions } from '../../actions'
import { TransactionPayloadItemType } from '../../services/transactions/actions/types'
import TransactionSearchList from '../transactionsSearchList'

type HomePropsType = {
  payload:TransactionPayloadItemType[]
  isFetching: Boolean,
  didInvalidate: Boolean,
  errorCode: Number,
  getTransactionsProps: typeof fetchtransactions
};

type StateType = {
  transactions: {
    payload:TransactionPayloadItemType[]
    isFetching: Boolean,
    didInvalidate: Boolean,
    errorCode: number
  }
}

class Transactions extends React.Component <HomePropsType, {}> {
  componentDidMount() {
    const { getTransactionsProps } = this.props;
    getTransactionsProps()
  }
  
render() { 
  if(this.props.payload && this.props.payload.length >0) {
    return (<TransactionSearchList transactions={this.props.payload}></TransactionSearchList>);
  }
    return null;
}
}
const mapDispatchToProps = (dispatch: Dispatch) => ({
  getTransactionsProps: () => fetchtransactions()(dispatch)
})

const mapStateToProps = (state: StateType) => ({
  payload:state.transactions.payload,
  isFetching: state.transactions.isFetching,
  didInvalidate: state.transactions.didInvalidate,
  errorCode: state.transactions.errorCode,
})

export default connect(mapStateToProps, mapDispatchToProps)(Transactions);