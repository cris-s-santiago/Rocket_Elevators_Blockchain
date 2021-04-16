import React from "react";

class QualitySecurityRead extends React.Component {
  // state = { dataKeyBattery: null,dataKeyColumns: null, dataKeyElevators: null, dataKeyFloors: null, test: null};
  state = {dataKeyNewOrder: null};
  componentDidMount() {
    const { drizzle, drizzleState } = this.props;
    const contract = drizzle.contracts.QualitySecurity;
    console.log("================================");
    console.log(drizzle);
    console.log("----------------");
    console.log(drizzleState);

    console.log("Transactions",drizzleState.transactions);

    console.log("My string store",drizzle.contracts.QualitySecurity);
    console.log("My contract address",drizzle.contracts.QualitySecurity.address);
    console.log("Contracts",this.props.drizzleState.contracts);

  }

  render() {
    // get the contract state from drizzleState
    const { QualitySecurity } = this.props.drizzleState.contracts;

    // using the saved `dataKey`, get the variable we're interested in
    // const batteries = QualitySecurity.batteries[this.state.dataKeyBattery];
    // const columns = QualitySecurity.columns[this.state.dataKeyColumns];
    // const elevators = QualitySecurity.elevators[this.state.dataKeyElevators];
    // const floors = QualitySecurity.floors[this.state.dataKeyFloors];
    // const test = QualitySecurity.test[this.state.test];

    // if it exists, then we display its value
    return (
      <div className="container">
        <table className="table">
          <thead>
            <tr>
              <th scope="col">Controllers</th>
              <th scope="col">Shafts</th>
              <th scope="col">Doors</th>
              <th scope="col">Buttons</th>
              <th scope="col">Displays</th>
              <th scope="col">Speakers</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              {/* <td>{batteries && batteries.value}</td>
              <td>{columns && columns.value}</td>
              <td>{elevators && elevators.value}</td>
              <td>{floors && floors.value}</td> */}
              {/* <td>{test && test.value}</td> */}
            </tr>
          </tbody>
        </table>
      </div>
		);
  }
}

export default QualitySecurityRead;
