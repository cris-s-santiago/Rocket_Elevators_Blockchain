import React from "react";

class MaterialProviderRead extends React.Component {
  // state = { dataKeyBattery: null,dataKeyColumns: null, dataKeyElevators: null, dataKeyFloors: null, test: null};
  state = {dataKeyNewOrder: null};
  componentDidMount() {
    const { drizzle, drizzleState } = this.props;
    const contract = drizzle.contracts.MaterialProvider;
    console.log("================================");
    console.log(drizzle);
    console.log("----------------");
    console.log(drizzleState);

    console.log("Transactions",drizzleState.transactions);

    console.log("My string store",drizzle.contracts.MaterialProvider);
    console.log("My contract address",drizzle.contracts.MaterialProvider.address);
    console.log("Contracts",this.props.drizzleState.contracts);

  }

  render() {
    // get the contract state from drizzleState
    const { MaterialProvider } = this.props.drizzleState.contracts;

    // using the saved `dataKey`, get the variable we're interested in
    // const batteries = MaterialProvider.batteries[this.state.dataKeyBattery];
    // const columns = MaterialProvider.columns[this.state.dataKeyColumns];
    // const elevators = MaterialProvider.elevators[this.state.dataKeyElevators];
    // const floors = MaterialProvider.floors[this.state.dataKeyFloors];
    // const test = MaterialProvider.test[this.state.test];

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

export default MaterialProviderRead;
