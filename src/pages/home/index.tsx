import React from 'react';
import Trancations from '../../components/trancations'

export default ({
  className=''}) => {
  return (
    <main className={`base-layout ${className}`}>
        <Trancations></Trancations>
    </main> 
  );
}