import { Component } from 'react';
import Monitor from './Monitor';

class Menu extends Component {
  render() { 
    return (
      <>
        <table className='table'>
          <thead>
            <tr>
            <th>ID</th>
            <th>Description</th>
            <th>Resolution</th>
            <th>Size</th>
            <th>Refresh Rate</th>
            <th>IPS</th>
            <th>Price</th>
            <th></th>
          </tr>          
          </thead>

          <tbody>
            {this.props.monitors.map(monitor => 
            <tr key={monitor.id} >
              <Monitor                 
                monitor={monitor}
                onIncrement={this.props.onIncrement}
              />
            </tr>            
          )}          
          </tbody>
        </table>
      </>
    );
  }
}               

export default Menu; 