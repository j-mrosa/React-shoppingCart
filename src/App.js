import { Component } from 'react';
import './App.css';
import ShoppingCart from './ShoppingCart';
import Menu from './Menu';
import {getMonitors} from './monitorService';

class App extends Component {
  constructor(){
    super();

    let monitorsArr = getMonitors();

    monitorsArr.map((monitor) =>  monitor.quantity = 0 );

    this.state = { monitorsList : monitorsArr, cartItems : [] } ;
  }

  render(){
    return (
      <>
        <ShoppingCart onDisplayCart={this.handleDisplayCart} totalItems={this.state.monitorsList.reduce((total, monitor) => total + monitor.quantity, 0)}/>
        
        <div className='container'>
          <Menu monitors={this.state.monitorsList} onIncrement={this.handleIncrement}/>
        </div>
      </>
    )
  }

  handleIncrement = monitor => {
    //clone the array of monitors and cart
    const monitorsClone = [...this.state.monitorsList];
    const cartClone = [...this.state.cartItems];

    //get index of the monitor sent in
    const index = monitorsClone.indexOf(monitor);

    //increase quantity of the monitor chosen
    monitorsClone[index].quantity++;

    //add id of the monitor to the cartList
    cartClone.push(monitorsClone[index].id);

    //set state of monitors and cartItems to the cloned ones
    this.setState({monitorsList: monitorsClone, cartItems: cartClone});
  }

  handleDisplayCart = () => {
    //create msg with list of items in the cart
    let msg = 'Items in the cart: ';
    let items = this.state.cartItems;

    for (let i = 0; i < items.length; i++) {
      msg += items[i] + (i === items.length-1 ? '' : ', ');   
    }

    //display a popup with the msg
    alert(msg);
  }
}

export default App;