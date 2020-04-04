import React from 'react';
import Trancations from '../../components/trancations'

export default ({
  className='',
  ...props}) => (
    <main className={`base-layout ${className}`}>
        <Trancations context={props.context}></Trancations>
    </main> 
  ); 