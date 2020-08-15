import React from "react"; 
import { Props } from './types'

const Layout = ({
    className = '',
    children
  }: Props) =>
  <section className={`layout ${className}`}>
    { children }
  </section>

export default Layout


//  switch(template) {
//   case 'two-row':
//     return (
//     <header>
      
//     </header>
//     <main>

//     </main> )
//  }