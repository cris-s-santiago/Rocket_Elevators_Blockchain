import React from "react";

class SolutionManufacturingRead extends React.Component {
  // state = { dataKeyBattery: null,dataKeyColumns: null, dataKeyElevators: null, dataKeyFloors: null, test: null};
  state = { dataKey: null };
  componentDidMount() {
    const { drizzle, drizzleState } = this.props;
    const contract = drizzle.contracts.SolutionManufacturing;
    console.log("================================");
    console.log(drizzle);
    console.log("----------------");
    console.log(drizzleState);

    console.log("Transactions",drizzleState.transactions);

    console.log("Solution Manu--",drizzle.contracts.SolutionManufacturing);
    console.log("My contract address",drizzle.contracts.SolutionManufacturing.address);
    console.log("Contracts",this.props.drizzleState.contracts);
    // const dataKey = contract.methods["getCommand"].cacheCall();
    // this.setState({ dataKey });
    // console.log("Datakey:",this.state.dataKey);
  }

  render() {
    // get the contract state from drizzleState
    const { SolutionManufacturing } = this.props.drizzleState.contracts;
    // const newCommand = SolutionManufacturing.getCommand[this.state.dataKey];

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
              <th scope="col">New command -- </th>
            </tr>
          </thead>
          <tbody>
            <tr>
              {/* <td>{batteries && batteries.value}</td>
              <td>{columns && columns.value}</td>
              <td>{elevators && elevators.value}</td>
              <td>{floors && floors.value}</td> */}
              {/* <td>{newCommand && newCommand.value}</td> */}
            </tr>
          </tbody>
        </table>
      </div>
		);
  }
}

export default SolutionManufacturingRead;
