import React from 'react';
import { connect } from 'react-redux'
import { Dispatch } from 'redux'
import { fetchtransactions } from '../../actions'
import { TransactionPayloadItemType } from '../../services/transactions/actions/types'

type HomePropsType = {
  payload:TransactionPayloadItemType[]
  isFetching: Boolean,
  didInvalidate: Boolean,
  errorCode: Number,
  dispatch: Dispatch,
  getTransactionsProps: typeof fetchtransactions
};

type HomeStateType = {
    payload:TransactionPayloadItemType[]
    isFetching: Boolean,
    didInvalidate: Boolean,
    errorCode: number
}

class Home extends React.Component <HomePropsType, HomeStateType> {
  componentDidMount() {
    const { getTransactionsProps } = this.props;
    getTransactionsProps(1)
  }
 
  render() { 
    return (<section>
      <h1>HOME</h1>
        <section>
        </section>
        <aside>
        </aside>
      </section>);
  }
}
const mapDispatchToProps = (dispatch: Dispatch) => ({
    getTransactionsProps: (n:number) => fetchtransactions(n)(dispatch)
})

const mapStateToProps = (state: HomeStateType) => ({
  payload:state.payload,
  isFetching: state.isFetching,
  didInvalidate: state.didInvalidate,
  errorCode: state.errorCode,
})

export default connect(mapStateToProps, mapDispatchToProps)(Home);