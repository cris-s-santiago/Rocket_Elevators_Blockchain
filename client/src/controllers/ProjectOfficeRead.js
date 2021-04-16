import React from "react";

class ProjectOfficeRead extends React.Component {
	state = { dataKeyControllers: null, dataKeyShafts: null, dataKeyDoors: null, dataKeyButtons: null, dataKeyDisplays: null, dataKeySpeakers: null };

	componentDidMount() {
		const { drizzle } = this.props;
		const contract = drizzle.contracts.ProjectOffice;

		// let drizzle know we want to watch the `myString` method
		const dataKeyControllers = contract.methods["Controllers"].cacheCall();
    const dataKeyShafts = contract.methods["Shafts"].cacheCall();
    const dataKeyDoors = contract.methods["Doors"].cacheCall();
    const dataKeyButtons = contract.methods["Buttons"].cacheCall();
    const dataKeyDisplays = contract.methods["Displays"].cacheCall();
    const dataKeySpeakers = contract.methods["Speakers"].cacheCall();

		// save the `dataKey` to local component state for later reference
		this.setState({ dataKeyControllers, dataKeyShafts, dataKeyDoors, dataKeyButtons, dataKeyDisplays, dataKeySpeakers });
	}

	render() {
		// get the contract state from drizzleState
		const { ProjectOffice } = this.props.drizzleState.contracts;

		// using the saved `dataKey`, get the variable we're interested in
		const controllers = ProjectOffice.Controllers[this.state.dataKeyControllers];
    const shafts = ProjectOffice.Shafts[this.state.dataKeyShafts];
    const doors = ProjectOffice.Doors[this.state.dataKeyDoors];
    const buttons = ProjectOffice.Buttons[this.state.dataKeyButtons];
    const displays = ProjectOffice.Displays[this.state.dataKeyDisplays];
    const speakers = ProjectOffice.Speakers[this.state.dataKeySpeakers];

		// if it exists, then we display its value
		return (
			<div className="container">
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
              <td>{controllers && controllers.value}</td>
              <td>{shafts && shafts.value}</td>
              <td>{doors && doors.value}</td>
              <td>{buttons && buttons.value}</td>
              <td>{displays && displays.value}</td>
              <td>{speakers && speakers.value}</td>
            </tr>
          </tbody>
        </table>
      </div>
		);
	}
}

export default ProjectOfficeRead;
