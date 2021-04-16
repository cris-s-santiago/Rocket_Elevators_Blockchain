import React from "react";

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
    // this.getTxStatus();
    alert(`
      ____Your Details____\n
      Batteries : ${batteries}
    `)
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
    console.log("New order SetValue");

    // let drizzle know we want to call the `set` method with `value`
    const stackId = contract.methods["newOrder"].cacheSend(batteries, columns, elevators, floors, { from: drizzleState.accounts[0] });

    // const stackId = contract.methods["newOrder"].cacheSend(batteries, columns, elevators, floors, { from: drizzleState.accounts[0] });
    // const stackId = drizzle.contracts.ProjectOffice.methods.newOrder(batteries, columns, elevators, floors).send({from: drizzleState.accounts[0]})
    // save the `stackId` for later reference
    console.log("StackId", stackId);
    console.log(drizzleState);
    this.setState({ stackId });
  }

  getTxStatus = () => {
    console.log("getTxStatus");
    // get the transaction states from the drizzle state
    const { transactions, transactionStack } = this.props.drizzleState;

    // get the transaction hash using our saved `stackId`
    const txHash = transactionStack[this.state.stackId];

    // if (!txHash) console.log("NULL");
    // if transaction hash does not exist, don't display anything
    if (!txHash) return null;

    console.log("txHash", txHash);
    console.log("transactions[txHash]", transactions[txHash]);
    
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
        <div>{this.getTxStatus()}</div>
      </form>
    );
  }
}

export default ProjectOfficeSet;
