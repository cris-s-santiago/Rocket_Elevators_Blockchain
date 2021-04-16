import React from "react";

class SolutionManufacturingRead extends React.Component {
    state = {dataKeyElevatorCab: null, dataKeyDoors: null, dataKeyController: null, dataKeyControlPanel: null, dataKeyDisplay: null, dataKeyMusicSystem: null};
  
    componentDidMount() {
      const { drizzle } = this.props;
      const contract = drizzle.contracts.SolutionManufacturing;
  
      // let drizzle know we want to watch the `myString` method
      const dataKeyElevatorCab = contract.methods["ElevatorCab"].cacheCall();
      const dataKeyDoors = contract.methods["Doors"].cacheCall();
      const dataKeyController = contract.methods["Controller"].cacheCall();
      const dataKeyControlPanel = contract.methods["ControlPanel"].cacheCall();
      const dataKeyDisplay = contract.methods["Display"].cacheCall();
      const dataKeyMusicSystem = contract.methods["MusicSystem"].cacheCall();
  
      // save the `dataKey` to local component state for later reference
      this.setState({ dataKeyElevatorCab, dataKeyDoors, dataKeyController, dataKeyControlPanel, dataKeyDisplay, dataKeyMusicSystem });
    }
  
    render() {
      // get the contract state from drizzleState
      const { SolutionManufacturing } = this.props.drizzleState.contracts;
  
      // using the saved `dataKey`, get the variable we're interested in
      const elevatorCab = SolutionManufacturing.ElevatorCab[this.state.dataKeyElevatorCab];
      const doors = SolutionManufacturing.Doors[this.state.dataKeyDoors];
      const controller = SolutionManufacturing.Controller[this.state.dataKeyController];
      const controlPanel = SolutionManufacturing.ControlPanel[this.state.dataKeyControlPanel];
      const display = SolutionManufacturing.Display[this.state.dataKeyDisplay];
      const musicSystem = SolutionManufacturing.MusicSystem[this.state.dataKeyMusicSystem];
  
      // if it exists, then we display its value
      return (
        <div className="container">
          <table className="table">
            <thead>
              <tr>
                <th scope="col">Elevator Cabe</th>
                <th scope="col">Doors</th>
                <th scope="col">Controller</th>
                <th scope="col">Control Panel</th>
                <th scope="col">Display</th>
                <th scope="col">MusicSystem</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>{elevatorCab && elevatorCab.value}</td>
                <td>{doors && doors.value}</td>
                <td>{controller && controller.value}</td>
                <td>{controlPanel && controlPanel.value}</td>
                <td>{display && display.value}</td>
                <td>{musicSystem && musicSystem.value}</td>
              </tr>
            </tbody>
          </table>
        </div>
      )
    }
  }

export default SolutionManufacturingRead;
