import React from "react";

class QualitySecurityRead extends React.Component {
  // state = { dataKeyBattery: null,dataKeyColumns: null, dataKeyElevators: null, dataKeyFloors: null, test: null};
  state = {dataKeyNewOrder: null};
  componentDidMount() {
    console.log("Contracts",this.props.drizzleState.contracts);

  }

  render() {

    return (
      <div className="container">ay</div>
		);
  }
}

export default QualitySecurityRead;
