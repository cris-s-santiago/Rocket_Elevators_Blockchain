import React from "react";
import axios from "axios";

class ProjectOfficeSet extends React.Component {
  constructor(props){
    super(props)
    this.state = { batteries:'', columns:'', elevators:'', floors:''}
    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  state = { stackId: null };

  handleSubmit(event){
    const { batteries, columns, elevators, floors} = this.state
    event.preventDefault()
    this.setValue(batteries, columns, elevators, floors);
  }

  handleChange(event){
    this.setState({
      // Computed property names
      // keys of the objects are computed dynamically
      [event.target.name] : event.target.value
    })
  }


  setValue (batteries, columns, elevators, floors) {
    const { drizzle, drizzleState } = this.props;
    const contract = drizzle.contracts.ProjectOffice;
    
    // let drizzle know we want to call the `set` method with `value`
    const stackId = contract.methods["newOrder"].cacheSend(batteries, columns, elevators, floors, { from: drizzleState.accounts[0] });

    // save the `stackId` for later reference
    this.setState({ stackId });
  }

  saveTransactionAddress (transactionAddress){
    axios.post('https://rocketblockchain.azurewebsites.net/api/blockchains',{ nodeName: 'ProjectOffice', address: transactionAddress })
      .then(res => {
        console.log("Response", res);
        console.log("Response Data", res.data);
        this.refreshPage();
      })
      .catch(function(error){
          console.log("ERROR",error);
      });
    console.log("End of saveTransactionAddress");
  }

  refreshPage(){
    window.location.reload();
  }

  getTxStatus = () => {
    // get the transaction states from the drizzle state
    const { transactions, transactionStack } = this.props.drizzleState;

    // get the transaction hash using our saved `stackId`
    const txHash = transactionStack[this.state.stackId];

    // if transaction hash does not exist, don't display anything
    if (!txHash) return null;
    if (transactions[txHash] == null) return null;

    this.setState({stackId: null});
    
    if (txHash.length > 32){
      this.saveTransactionAddress(txHash);
    }
    // otherwise, return the transaction status
    return `Transaction Address: ${txHash}`
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <div className="container">
          <div className="card" >
          <div className="card-header">
            Project Office
          </div>
          <div>{this.getTxStatus()}</div>
          <ul className="list-group list-group-flush">
            <li className="list-group-item">
                <div className="row">
                  <div className="col-6">Batteries: </div>{" "}
                  <input type="number" min="0" name="batteries"  value = {this.state.batteries} onChange={this.handleChange}/>
                </div>
            </li>
            <li className="list-group-item">
                <div className="row">
                  <div className="col-6">Columns: </div>{" "}
                  <input type="number" min="0" name="columns"  value = {this.state.columns} onChange={this.handleChange}/>
                </div>
            </li>
            <li className="list-group-item">
                <div className="row">
                  <div className="col-6">Elevators: </div>{" "}
                  <input type="number" min="0" name="elevators"  value = {this.state.elevators} onChange={this.handleChange}/>
                </div>
            </li>
            <li className="list-group-item">
                <div className="row">
                  <div className="col-6">Floors: </div>{" "}
                  <input type="number" min="0" name="floors"  value = {this.state.floors} onChange={this.handleChange}/>
                </div>
            </li>
          </ul>
          <button className="btn btn-primary" type="submit">Submit</button>
          </div>
        </div>
      </form>
    )
  }
}

export default ProjectOfficeSet;
