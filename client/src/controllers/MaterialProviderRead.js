import React from "react";

class MaterialProviderRead extends React.Component {
  state = {dataKeyalumBars: null, dataKeysteelSheets: null, dataKeyrubberBands: null, dataKeylightBulbs: null, dataKeyleds: null, dataKeyspringsProvider: null, dataKeyspeakersProvider: null};
  
  componentDidMount() {
		const { drizzle } = this.props;
		const contract = drizzle.contracts.MaterialProvider;

		// let drizzle know we want to watch the `myString` method
		const dataKeyalumBars = contract.methods["alumBars"].cacheCall();
    const dataKeysteelSheets = contract.methods["steelSheets"].cacheCall();
    const dataKeyrubberBands = contract.methods["rubberBands"].cacheCall();
    const dataKeylightBulbs = contract.methods["lightBulbs"].cacheCall();
    const dataKeyleds = contract.methods["leds"].cacheCall();
    const dataKeyspringsProvider = contract.methods["springsProvider"].cacheCall();
    const dataKeyspeakersProvider = contract.methods["speakersProvider"].cacheCall();

		// save the `dataKey` to local component state for later reference
		this.setState({ dataKeyalumBars, dataKeysteelSheets, dataKeyrubberBands, dataKeylightBulbs, dataKeyleds, dataKeyspringsProvider, dataKeyspeakersProvider });
	}

	render() {
		// get the contract state from drizzleState
		const { MaterialProvider } = this.props.drizzleState.contracts;

		// using the saved `dataKey`, get the variable we're interested in
		const alumBars = MaterialProvider.alumBars[this.state.dataKeyalumBars];
    const steelSheets = MaterialProvider.steelSheets[this.state.dataKeysteelSheets];
    const rubberBands = MaterialProvider.rubberBands[this.state.dataKeyrubberBands];
    const lightBulbs = MaterialProvider.lightBulbs[this.state.dataKeylightBulbs];
    const leds = MaterialProvider.leds[this.state.dataKeyleds];
    const springsProvider = MaterialProvider.springsProvider[this.state.dataKeyspringsProvider];
    const speakersProvider = MaterialProvider.speakersProvider[this.state.dataKeyspeakersProvider];

		// if it exists, then we display its value
		return (
			<div className="container">
        <table className="table">
          <thead>
            <tr>
              <th scope="col">Aluminum bars</th>
              <th scope="col">Stainless steel sheets</th>
              <th scope="col">Springs </th>
              <th scope="col">Bumper rubber bands</th>
              <th scope="col">Interior light bulbs</th>
              <th scope="col">Display LEDs</th>
              <th scope="col">Speakers</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>{alumBars && alumBars.value}</td>
              <td>{steelSheets && steelSheets.value}</td>
              <td>{rubberBands && rubberBands.value}</td>
              <td>{lightBulbs && lightBulbs.value}</td>
              <td>{leds && leds.value}</td>
              <td>{springsProvider && springsProvider.value}</td>
              <td>{speakersProvider && speakersProvider.value}</td>
            </tr>
          </tbody>
        </table>
      </div>
		)
	}
}

export default MaterialProviderRead;
