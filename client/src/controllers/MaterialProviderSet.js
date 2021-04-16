import React from "react";
import axios from "axios";

class MaterialProviderSet extends React.Component {
  constructor(props){
    super(props)
    this.state = { controllers:'', shafts:'', doors:'', buttons:'', displays:'', speakers:''}
    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  state = { stackId: null };

  handleSubmit(event){
    const { controllers, shafts, doors, buttons, displays, speakers} = this.state
    event.preventDefault()
    this.setValue(controllers, shafts, doors, buttons, displays, speakers);
    // this.getTxStatus();
    alert(`
      ____Your Details____\n
      Controllers : ${controllers}
    `)
  }

  handleChange(event){
    this.setState({
      // Computed property names
      // keys of the objects are computed dynamically
      [event.target.name] : event.target.value
    })
  }


  setValue (controllers, shafts, doors, buttons, displays, speakers) {
    const { drizzle, drizzleState } = this.props;
    const contract = drizzle.contracts.MaterialProvider;
    console.log("New order SetValue");

    // let drizzle know we want to call the `set` method with `value`
    const stackId = contract.methods["createMaterials"].cacheSend(controllers, shafts, doors, buttons, displays, speakers, { from: drizzleState.accounts[0] });

    // const stackId = drizzle.contracts.MaterialProvider.methods.newOrder(controllers, shafts, doors, buttons).send({from: drizzleState.accounts[0]})
    // save the `stackId` for later reference
    console.log("StackId", stackId);
    console.log(drizzleState);
    this.setState({ stackId });
  }

  saveTransactionAddress (transactionAddress){
    axios.post('https://rocketblockchain.azurewebsites.net/api/blockchains',{ nodeName: 'MaterialProvider', address: transactionAddress })
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
            Material Provider
          </div>
          <div>{this.getTxStatus()}</div>
          <ul className="list-group list-group-flush">
            <li className="list-group-item">
                <div className="row">
                  <div className="col-6">Controllers: </div>{" "}
                  <input type="number" min="0" name="controllers"  value = {this.state.controllers} onChange={this.handleChange}/>
                </div>
            </li>
            <li className="list-group-item">
                <div className="row">
                  <div className="col-6">Shafts: </div>{" "}
                  <input type="number" min="0" name="shafts"  value = {this.state.shafts} onChange={this.handleChange}/>
                </div>
            </li>
            <li className="list-group-item">
                <div className="row">
                  <div className="col-6">Doors: </div>{" "}
                  <input type="number" min="0" name="doors"  value = {this.state.doors} onChange={this.handleChange}/>
                </div>
            </li>
            <li className="list-group-item">
                <div className="row">
                  <div className="col-6">Buttons: </div>{" "}
                  <input type="number" min="0" name="buttons"  value = {this.state.buttons} onChange={this.handleChange}/>
                </div>
            </li>
            <li className="list-group-item">
                <div className="row">
                  <div className="col-6">Displays: </div>{" "}
                  <input type="number" min="0" name="displays"  value = {this.state.displays} onChange={this.handleChange}/>
                </div>
            </li>
            <li className="list-group-item">
                <div className="row">
                  <div className="col-6">Speakers: </div>{" "}
                  <input type="number" min="0" name="speakers"  value = {this.state.speakers} onChange={this.handleChange}/>
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

export default MaterialProviderSet;
