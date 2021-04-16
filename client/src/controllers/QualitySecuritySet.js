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
    // this.getTxStatus();
    alert(`
      ____Your Details____\n
      Door : ${door}
    `)
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
    console.log("New order SetValue");

    // let drizzle know we want to call the `set` method with `value`
    const stackId = contract.methods["createQuality"].cacheSend(door, cable, brake, battery, column, { from: drizzleState.accounts[0] });

    // save the `stackId` for later reference
    console.log("StackId", stackId);
    console.log(drizzleState);
    this.setState({ stackId });
  }

  

  saveTransactionAddress (transactionAddress){
    axios.post('https://rocketblockchain.azurewebsites.net/api/blockchains',{ nodeName: 'QualitySecurity', address: transactionAddress })
      .then(res => {
        console.log("Response", res);
        console.log("Response Data", res.data);
      })
      .catch(function(error){
          console.log("ERROR",error);
      });
    console.log("End of saveTransactionAddress");
  }

  getTxStatus = () => {
    // get the transaction states from the drizzle state
    const { transactions, transactionStack } = this.props.drizzleState;

    // get the transaction hash using our saved `stackId`
    const txHash = transactionStack[this.state.stackId];

    // if (!txHash) console.log("NULL");
    // if transaction hash does not exist, don't display anything
    if (!txHash) return null;
    if (transactions[txHash] == null) return null;
    console.log(txHash.length);
    this.setState({stackId: null});
    // if(this.props.drizzle)
    if (txHash.length > 32){
      this.saveTransactionAddress(txHash);
    }
    console.log("prop",this.props.drizzle.web3.eth.getTransactionReceipt(txHash));
    console.log(transactions[txHash][0]);
    console.log("txHash", txHash);
    console.log("transactions[txHash]", transactions[txHash]);
    // console.log(transactions[txHash]['status']);
    // this.saveTransactionAddress(txHash);

    // setTimeout(() => { console.log("World!"); }, 2000);
    // otherwise, return the transaction status
    return `Transaction Address: ${txHash}`
  };

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
                  <input type="text" name="door"  value = {this.state.door} onChange={this.handleChange}/>
                </div>
            </li>
            <li className="list-group-item">
                <div className="row">
                  <div className="col-6">Cable: </div>{" "}
                  <input type="text" name="cable"  value = {this.state.cable} onChange={this.handleChange}/>
                </div>
            </li>
            <li className="list-group-item">
                <div className="row">
                  <div className="col-6">Brake: </div>{" "}
                  <input type="text" name="brake"  value = {this.state.brake} onChange={this.handleChange}/>
                </div>
            </li>
            <li className="list-group-item">
                <div className="row">
                  <div className="col-6">Battery: </div>{" "}
                  <input type="text" name="battery"  value = {this.state.battery} onChange={this.handleChange}/>
                </div>
            </li>
            <li className="list-group-item">
                <div className="row">
                  <div className="col-6">Column: </div>{" "}
                  <input type="text" name="column"  value = {this.state.column} onChange={this.handleChange}/>
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

export default QualitySecuritySet;
