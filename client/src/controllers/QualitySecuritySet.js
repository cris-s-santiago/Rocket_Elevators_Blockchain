import React from "react";
import axios from "axios";

class QualitySecuritySet extends React.Component {
  constructor(props){
    super(props)
    this.state = { door:'', cable:'', brake:'', battery:'', column:''}
    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  state = { stackId: null };

  handleSubmit(event){
    const {door, cable, brake, battery, column} = this.state
    event.preventDefault()
    this.setValue(door, cable, brake, battery, column);
  }

  handleChange(event){
    this.setState({
      // Computed property names
      // keys of the objects are computed dynamically
      [event.target.name] : event.target.value
    })
  }


  setValue (door, cable, brake, battery, column) {
    const { drizzle, drizzleState } = this.props;
    const contract = drizzle.contracts.QualitySecurity;

    // let drizzle know we want to call the `set` method with `value`
    const stackId = contract.methods["createQuality"].cacheSend(door, cable, brake, battery, column, { from: drizzleState.accounts[0] });

    // save the `stackId` for later reference
    this.setState({ stackId });
  }

  saveTransactionAddress (transactionAddress){
    axios.post('https://rocketblockchain.azurewebsites.net/api/blockchains',{ nodeName: 'QualitySecurity', address: transactionAddress })
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
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <div className="container">
          <div className="card" >
          <div className="card-header">
            Quality, Security and Homologation
          </div>
          <div>{this.getTxStatus()}</div>
          <ul className="list-group list-group-flush">
            <li className="list-group-item">
                <div className="row">
                  <div className="col-6">Doors: </div>{" "}
                  <input type="number" min="0" name="door"  value = {this.state.door} onChange={this.handleChange}/>
                </div>
            </li>
            <li className="list-group-item">
                <div className="row">
                  <div className="col-6">Cable: </div>{" "}
                  <input type="number" min="0" name="cable"  value = {this.state.cable} onChange={this.handleChange}/>
                </div>
            </li>
            <li className="list-group-item">
                <div className="row">
                  <div className="col-6">Brake: </div>{" "}
                  <input type="number" min="0" name="brake"  value = {this.state.brake} onChange={this.handleChange}/>
                </div>
            </li>
            <li className="list-group-item">
                <div className="row">
                  <div className="col-6">Battery: </div>{" "}
                  <input type="number" min="0" name="battery"  value = {this.state.battery} onChange={this.handleChange}/>
                </div>
            </li>
            <li className="list-group-item">
                <div className="row">
                  <div className="col-6">Column: </div>{" "}
                  <input type="number" min="0" name="column"  value = {this.state.column} onChange={this.handleChange}/>
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

export default QualitySecuritySet;
