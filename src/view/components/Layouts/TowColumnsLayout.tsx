import React from "react"; 
import { TowColumnsLayoutProps } from './types'

const TowColumnsLayout = ({
    className = '',
    col_1 = '',
    col_2 = '',
    children_col_1,
    children_col_2
  }: TowColumnsLayoutProps) =>
  <main className={`base-layout ${className}`}>
    <section className={col_1}> { children_col_1 }</section>
    <section className={col_2}> { children_col_2} </section>
  </main>

export default TowColumnsLayout
