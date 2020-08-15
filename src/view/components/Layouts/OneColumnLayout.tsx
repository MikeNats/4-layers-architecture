import React from "react"; 
import { OneColumnLayoutProps } from './types'

const OneColumnLayout = ({
    className = '',
    children
  }: OneColumnLayoutProps) =>
  <main className={`base-layout ${className}`}>
    { children }
  </main>

export default OneColumnLayout
