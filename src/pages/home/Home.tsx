import React from 'react';
import { connect } from 'react-redux'
import { Dispatch } from 'redux'
import { fetchtransactions } from '../../actions'
import { TransactionPayLoadType } from '../../actions/transactions/types'
import { StateType } from '../../store/types'

type Props = {
  payload: TransactionPayLoadType
  isFetching: Boolean,
  didInvalidate: Boolean,
  errorCode: Number,
  dispatch: Dispatch,
};

class Home extends React.Component <Props, StateType> {
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

const mapStateToProps = (state: StateType) => ({
  payload: state.transactions.payload,
  isFetching: state.transactions.isFetching,
  didInvalidate: state.transactions.didInvalidate,
  errorCode: state.transactions.errorCode
})

export default connect(mapStateToProps)(Home);