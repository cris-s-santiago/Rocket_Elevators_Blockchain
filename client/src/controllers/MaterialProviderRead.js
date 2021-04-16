import React from "react";

class MaterialProviderRead extends React.Component {
  // state = { dataKeyBattery: null,dataKeyColumns: null, dataKeyElevators: null, dataKeyFloors: null, test: null};
  state = {dataKeyNewOrder: null};
  componentDidMount() {

    console.log("Contracts",this.props.drizzleState.contracts);

  }

  render() {

    // if it exists, then we display its value
    return (
      <div>ay</div>
		);
  }
}

export default MaterialProviderRead;
