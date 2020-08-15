import React from "react"; 
import { HeaderProps } from './types'
import ThemeToggler from '../ThemeToggler/ThemeToggler';

const Header = ({
    className = '',
  }: HeaderProps) =>
  <header className={`layout ${className}`}>
    <ThemeToggler/>
  </header>

export default Header
