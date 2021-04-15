import React from "react";

class ProjectOfficeRead extends React.Component {
  state = { dataKeyBattery: null,dataKeyColumns: null, dataKeyElevators: null, dataKeyFloors: null};

  componentDidMount() {
    const { drizzle, drizzleState } = this.props;
    const contract = drizzle.contracts.MyStringStore;

    console.log(drizzle);
    console.log(drizzleState);

    // let drizzle know we want to watch the `myString` method
    const dataKeyBattery = contract.methods["batteries"].cacheCall();
    const dataKeyColumns = contract.methods["columns"].cacheCall();
    const dataKeyElevators = contract.methods["elevators"].cacheCall();
    const dataKeyFloors = contract.methods["floors"].cacheCall();

    // save the `dataKey` to local component state for later reference
    this.setState({ dataKeyBattery, dataKeyColumns, dataKeyElevators,dataKeyFloors});
  }

  render() {
    // get the contract state from drizzleState
    const { MyStringStore } = this.props.drizzleState.contracts;
 
    // using the saved `dataKey`, get the variable we're interested in
    const batteries = MyStringStore.batteries[this.state.dataKeyBattery];
    const columns = MyStringStore.columns[this.state.dataKeyColumns];
    const elevators = MyStringStore.elevators[this.state.dataKeyElevators];
    const floors = MyStringStore.floors[this.state.dataKeyFloors];
    
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
              <td>{batteries && batteries.value}</td>
              <td>{columns && columns.value}</td>
              <td>{elevators && elevators.value}</td>
              <td>{floors && floors.value}</td>
            </tr>
          </tbody>
        </table>
      </div>
		);
  }
}

export default ProjectOfficeRead;