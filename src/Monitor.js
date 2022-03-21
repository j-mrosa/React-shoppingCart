import { Component } from "react";

class Monitor extends Component{
  render(){
    return(
      <>  
        <td>{this.props.monitor.id}</td>
        <td>{this.props.monitor.description}</td>
        <td>{this.props.monitor.resolution}</td>
        <td>{this.props.monitor.size}</td>
        <td>{this.props.monitor.refreshRate}</td>
        <td>{this.props.monitor.ips ? 'Yes' : 'No'}</td>
        <td>{this.props.monitor.price}</td>

        <td><div onClick={() => this.props.onIncrement(this.props.monitor)} className='btn btn-secondary'>Add to Cart</div></td>
      </>
    )
  }
}

export default Monitor;