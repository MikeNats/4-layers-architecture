
export type OneColumnLayoutProps = {
  className: string,
  children: JSX.Element
} 

export type TowColumnsLayoutProps = {
  className: string
  col_1: string
  children_col_1: Array<JSX.Element>
  col_2: string
  children_col_2: Array<JSX.Element>
}