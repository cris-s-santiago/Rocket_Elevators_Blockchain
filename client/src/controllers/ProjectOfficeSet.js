import React from "react";

class ProjectOfficeSet extends React.Component {
  constructor(props){
    super(props)
    this.state = { batteries:'', columns:'', elevators:'', floors:''}
    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleSubmit(event){
    const { batteries, columns, elevators, floors} = this.state
    event.preventDefault()
    this.setValue(batteries, columns, elevators, floors, "setData");
    alert(`
      ____Your Details____\n
      Email : ${batteries}
    `)
  }
  
  handleChange(event){
    this.setState({
      // Computed property names
      // keys of the objects are computed dynamically
      [event.target.name] : event.target.value
    })
  }
  state = { stackId: null };

  setValue (batteries, columns, elevators, floors, methodName) {
    const { drizzle, drizzleState } = this.props;
    const contract = drizzle.contracts.MyStringStore;

    // let drizzle know we want to call the `set` method with `value`
    const stackId = contract.methods[methodName].cacheSend(batteries, columns, elevators, floors, { from: drizzleState.accounts[0] });

    // save the `stackId` for later reference
    this.setState({ stackId });
  };

  getTxStatus = () => {
    // get the transaction states from the drizzle state
    const { transactions, transactionStack } = this.props.drizzleState;

    // get the transaction hash using our saved `stackId`
    const txHash = transactionStack[this.state.stackId];

    // if transaction hash does not exist, don't display anything
    if (!txHash) return null;

    // otherwise, return the transaction status
    return `Transaction status: ${transactions[txHash] && transactions[txHash].status}`;
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <div className="container">
          <div className="card" >
          <div className="card-header">
            Input your project data
          </div>
          <ul className="list-group list-group-flush">
            <li className="list-group-item">
                <div className="row">
                  <div className="col-6">Batteries: </div>{" "}
                  <input type="text" name="batteries"  value = {this.state.batteries} onChange={this.handleChange}/>              
                </div>
            </li>
            <li className="list-group-item">
                <div className="row">
                  <div className="col-6">Columns: </div>{" "}
                  <input type="text" name="columns"  value = {this.state.columns} onChange={this.handleChange}/>
                </div>
            </li>
            <li className="list-group-item">
                <div className="row">
                  <div className="col-6">Elevators: </div>{" "}
                  <input type="text" name="elevators"  value = {this.state.elevators} onChange={this.handleChange}/>
                </div>
            </li>
            <li className="list-group-item">
                <div className="row">
                  <div className="col-6">Floors: </div>{" "}
                  <input type="text" name="floors"  value = {this.state.floors} onChange={this.handleChange}/>
                </div>
            </li>
          </ul>
          <button className="btn btn-primary" type="submit">Submit</button>
          </div>
        </div>
      </form>
    );
  }
}

export default ProjectOfficeSet;