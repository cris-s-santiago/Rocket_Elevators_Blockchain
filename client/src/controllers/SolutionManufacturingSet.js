import React from "react";
import axios from "axios";

class SolutionManufacturingSet extends React.Component {
  constructor(props){
    super(props)
    this.state = {aluminiumBars:'', stainlessSteelSheets:'', bumperRubberBands:'', displayLeds:'', springs:'', speakers:''}
    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  
  state = { stackId: null };

  handleSubmit(event){
    const {aluminiumBars, stainlessSteelSheets, bumperRubberBands, displayLeds, springs, speakers} = this.state
    event.preventDefault()
    this.setValue(aluminiumBars, stainlessSteelSheets, bumperRubberBands, displayLeds, springs, speakers);
   
  }

  handleChange(event){
    this.setState({
      // Computed property names
      // keys of the objects are computed dynamically
      [event.target.name] : event.target.value
    })
  }


  setValue (aluminiumBars, stainlessSteelSheets, bumperRubberBands, displayLeds, springs, speakers) {
    const { drizzle, drizzleState } = this.props;
    const contract = drizzle.contracts.SolutionManufacturing;

    // let drizzle know we want to call the `set` method with `value`
    const stackId = contract.methods["getCommand"].cacheSend(aluminiumBars, stainlessSteelSheets, bumperRubberBands, displayLeds, springs, speakers, { from: drizzleState.accounts[0] });

    // save the `stackId` for later reference
    this.setState({ stackId });
  }

  saveTransactionAddress (transactionAddress){
    axios.post('https://rocketblockchain.azurewebsites.net/api/blockchains',{ nodeName: 'SolutionManufacturing', address: transactionAddress })
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
            Solution Manufacturing
          </div>
          <div>{this.getTxStatus()}</div>
          <ul className="list-group list-group-flush">
            <li className="list-group-item">
                <div className="row">
                  <div className="col-6">Aluminium Bars: </div>{" "}
                  <input type="number" min="0" name="aluminiumBars"  value = {this.state.aluminiumBars} onChange={this.handleChange}/>
                </div>
            </li>
            <li className="list-group-item">
                <div className="row">
                  <div className="col-6">Stainless Steel Sheets: </div>{" "}
                  <input type="number" min="0" name="stainlessSteelSheets"  value = {this.state.stainlessSteelSheets} onChange={this.handleChange}/>
                </div>
            </li>
            <li className="list-group-item">
                <div className="row">
                  <div className="col-6">Bumper Rubber Bands: </div>{" "}
                  <input type="number" min="0" name="bumperRubberBands"  value = {this.state.bumperRubberBands} onChange={this.handleChange}/>
                </div>
            </li>
            <li className="list-group-item">
                <div className="row">
                  <div className="col-6">Display Leds: </div>{" "}
                  <input type="number" min="0" name="displayLeds"  value = {this.state.displayLeds} onChange={this.handleChange}/>
                </div>
            </li>
            <li className="list-group-item">
                <div className="row">
                  <div className="col-6">Springs: </div>{" "}
                  <input type="number" min="0" name="springs"  value = {this.state.springs} onChange={this.handleChange}/>
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
    )
  }
}

export default SolutionManufacturingSet;
