import React from 'react'
import TransactionSearchList from '.'
import { shallow, mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Enzyme from 'enzyme';

jest.mock('../../services');

Enzyme.configure({ adapter: new Adapter() })
const transactions = [{ 
    date: '2020-04-23T14:40:55.275Z',
    amount: 1,
    product: 'aaproduct1',
    image: 'string'},
    { 
      date: '2020-04-23T14:40:55.275Z',
      amount: 2,
      product: 'zzproduct2',
      image: 'string'}
  ];
  const tick = () => new Promise(resolve =>
    setTimeout(resolve, 600))

describe("TransactionSearchList", () => {
    let component
    it('renders as expected', () => {

      component = shallow(<TransactionSearchList transactions= {transactions}/> );
      expect(component).toMatchSnapshot();
   });
   it('should render a form ', () => {
    component = mount(<TransactionSearchList transactions= {transactions}/> );
    expect(component.find('form').length).toEqual(1);
    expect(component.find('input').length).toEqual(1);
    expect(component.find('Select').length).toEqual(1);
    expect(component.find('TransactionsListItem').length).toEqual(2);
  });
  it('should be able to searchItems by product name ', async() => {
    component = mount(<TransactionSearchList transactions= {transactions}/> );
    component.find('input').prop('onChange')({ currentTarget: { value: 'product1' },persist: ()=>{} })

    await tick(); 
    component.update(); 
    expect(component.find('TransactionsListItem').length).toEqual(1);
  });
  it('should be able to searchItems by product name ', async() => {
    component = mount(<TransactionSearchList transactions= {transactions}/> ); 
    component.find('select').prop('onChange')({ target: { value: 'A-Z' }, currentTarget: { value: 'A-Z' }, persist: ()=>{} })

    await tick(); 
    component.update(); 
    expect(component.find('TransactionsListItem').length).toEqual(2);
    expect(component.find('TransactionsListItem').at(1).find('h3').text()).toEqual('aaproduct1');  
  });

  it('should be able to searchItems by product name ', async() => {
    component = mount(<TransactionSearchList transactions= {transactions}/> ); 
    component.find('select').prop('onChange')({ target: { value: 'Z-A' }, currentTarget: { value: 'Z-A' }, persist: ()=>{} })

    await tick(); 
    component.update(); 
    expect(component.find('TransactionsListItem').length).toEqual(2);
    expect(component.find('TransactionsListItem').at(1).find('h3').text()).toEqual('zzproduct2');  
  });
});
 
