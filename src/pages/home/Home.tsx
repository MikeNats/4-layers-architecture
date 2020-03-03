import React from 'react';
import { connect } from 'react-redux'
import { Dispatch } from 'redux'
import { fetchtransactions } from '../../actions'
import { TransactionPayLoadItemType } from '../../actions/transactions/types'

type HomePropsType = {
  payload: TransactionPayLoadItemType[]
  isFetching: Boolean,
  didInvalidate: Boolean,
  dispatch: Dispatch<any>
};

type HomeStateType = {
  transactions: {
    payload: TransactionPayLoadItemType[]
    isFetching: Boolean,
    didInvalidate: Boolean,
    errorCode: number
  }
}

class Home extends React.Component <HomePropsType, HomeStateType> {
  componentDidMount() {
    const { dispatch } = this.props;
    fetchtransactions(1)(dispatch);
  }
 
  render() {
    return (<section>
    <h1>{this.props.isFetching}</h1>
      <section>
      </section>
      <aside>
      </aside>
    </section>);
  }
}

const mapStateToProps = (state: HomeStateType) => ({
  payload: state.transactions.payload,
  isFetching: state.transactions.isFetching,
  didInvalidate: state.transactions.didInvalidate,
  errorCode: state.transactions.errorCode,
})

export default connect(mapStateToProps)(Home);