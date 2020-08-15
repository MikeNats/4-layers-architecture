import React from "react"; 
import { PageProps } from './types'
import { Route, Redirect } from 'react-router-dom'
import { PATHS } from '../../../utils'
import Header from '../Header/Header'

export const pageStructure = (hasHeaderFooter: boolean, Component: React.ComponentType<any>, props:any) => 
  hasHeaderFooter ?
   <React.Fragment>
      <Header/>
      <Component {...props}/>
      <footer></footer>
    </React.Fragment>
  : <Component {...props}/>

const Page = ({
  authenticated = false,
  protectedRoute = false,
  component: Component,
  hasHeaderFooter = false,
  ...rest
  }: PageProps) =>
    <Route { ...rest}
      render={
        (props) =>   protectedRoute && !authenticated ?  
          <Redirect to={PATHS.LOGIN}/> : pageStructure(hasHeaderFooter, Component, props)}/>


export default Page
