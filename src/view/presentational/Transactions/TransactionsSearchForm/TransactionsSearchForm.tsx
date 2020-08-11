
import React from 'react';
import Input from '../../common/Input/Input'
import Select from '../../common/Select/Select'
import { TransactionSearchFormProps } from './types'
  
const TransactionSearchForm = ({
  searchItems,
  shortTransactions
}: TransactionSearchFormProps) => ( 
  <form 
    className={`comp-TransactionSearchForm`}>
    <fieldset>
      <Input  
        type="text" 
        name="search" 
        id="search"
        label="search"
        errorMessage=""
        placeholder="search"
        error={false}
        onChangeHandler={searchItems}/>
    </fieldset>
    <fieldset> 
      <Select 
        id="sort" 
        options={
          [{name:'a-z', value:"A-Z"}, 
          {name:'z-a', value:"Z-A"}]}
        onChangeHandler={shortTransactions}>
      </Select>
    </fieldset>
  </form>
)

export default TransactionSearchForm

