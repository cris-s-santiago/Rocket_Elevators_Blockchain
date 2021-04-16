import React from "react";

class ProjectOfficeRead extends React.Component {
  // state = { dataKeyBattery: null,dataKeyColumns: null, dataKeyElevators: null, dataKeyFloors: null, test: null};
  state = {amountOfButtons: null};
  componentDidMount() {
    const { drizzle, drizzleState } = this.props;
    const contract = drizzle.contracts.ProjectOffice;
    // console.log(contract);
    console.log(drizzleState);

    // console.log("Contracts",this.props.drizzleState.contracts);

    const amountOfButtons = contract.methods.amountOfButtons.cacheCall();
    const amountOfShafts = contract.methods.amountOfShafts.cacheCall();
    const amountOfControllers = contract.methods.amountOfControllers.cacheCall();
    const amountOfDoors = contract.methods.amountOfDoors.cacheCall();
    const amountOfDisplays = contract.methods.amountOfDisplays.cacheCall();
    const amountOfSpeakers = contract.methods.amountOfSpeakers.cacheCall();

    this.setState({ amountOfButtons,amountOfShafts,amountOfControllers,amountOfDoors,amountOfDisplays,amountOfSpeakers });
  }

  render() {
    // // get the contract state from drizzleState
    const { ProjectOffice } = this.props.drizzleState.contracts;

    const amountOfButtons = ProjectOffice.amountOfButtons[this.state.amountOfButtons];
    const amountOfShafts = ProjectOffice.amountOfShafts[this.state.amountOfShafts];
    const amountOfControllers = ProjectOffice.amountOfControllers[this.state.amountOfControllers];
    const amountOfDoors = ProjectOffice.amountOfDoors[this.state.amountOfDoors];
    const amountOfDisplays = ProjectOffice.amountOfDisplays[this.state.amountOfDisplays];
    const amountOfSpeakers = ProjectOffice.amountOfSpeakers[this.state.amountOfSpeakers];


    // if it exists, then we display its value
    return (
      <div className="container">
        {/* <p>amountOfButtons: {amountOfButtons && amountOfButtons.value}</p> */}
        <table className="table">
          <thead>
            <tr>
              <th scope="col">Shafts</th>
              <th scope="col">Controllers</th>
              <th scope="col">Doors</th>
              <th scope="col">Buttons</th>
              <th scope="col">Displays</th>
              <th scope="col">Speakers</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>{amountOfShafts && amountOfShafts.value}</td>
              <td>{amountOfControllers && amountOfControllers.value}</td>
              <td>{amountOfDoors && amountOfDoors.value}</td>
              <td>{amountOfButtons && amountOfButtons.value}</td>
              <td>{amountOfDisplays && amountOfDisplays.value}</td>
              <td>{amountOfSpeakers && amountOfSpeakers.value}</td>
            </tr>
          </tbody>
        </table>
      </div>
		);
  }
}

export default ProjectOfficeRead;
