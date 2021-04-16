import React, { Component } from "react";
import ProjectOfficeRead from "./controllers/ProjectOfficeRead";
import ProjectOfficeSet from "./controllers/ProjectOfficeSet";
import MaterialProviderSet from "./controllers/MaterialProviderSet";
import MaterialProviderRead from "./controllers/MaterialProviderRead";
import SolutionManufacturingRead from "./controllers/SolutionManufacturingRead";
import SolutionManufacturingSet from "./controllers/SolutionManufacturingSet";
import QualitySecuritySet from "./controllers/QualitySecuritySet";
import QualitySecurityRead from "./controllers/QualitySecurityRead";
import Address from "./controllers/Address";
import "./App.css";

class App extends Component {
  state = { loading: true, drizzleState: null };

  componentDidMount() {
    const { drizzle } = this.props;

    // subscribe to changes in the store
    this.unsubscribe = drizzle.store.subscribe(() => {

      // every time the store updates, grab the state from drizzle
      const drizzleState = drizzle.store.getState();

      // check to see if it's ready, if so, update local component state
      if (drizzleState.drizzleStatus.initialized) {
        this.setState({ loading: false, drizzleState });
      }
    });

    console.log("Drizzle web3", drizzle);

		// adding scripts
		const script1 = document.createElement("script");
		const script2 = document.createElement("script");
		const script3 = document.createElement("script");		
		const link = document.createElement("link");

		link.rel="stylesheet"
		link.href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css"

		script1.src = "https://code.jquery.com/jquery-3.3.1.slim.min.js";
		script1.async = true;

		script2.src = "https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.7/umd/popper.min.js";
		script2.async = true;

		script3.src = "https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/js/bootstrap.min.js";
		script3.type = "application/json"

		document.head.appendChild(link);
		document.head.appendChild(script1);
		document.head.appendChild(script2);
		document.head.appendChild(script3);		
  }

  componentWillUnmount() {
    this.unsubscribe();
  }

  render() {
    if (this.state.loading) return "Loading Drizzle...";
    return (			
    <div>
      <nav className="navbar navbar-expand-sm">
        <h1 className ="display-3">ROCKET ELEVATORS BLOCKCHAIN</h1>
      </nav>
      <div className="App">
        <Address 
          drizzle={this.props.drizzle}
          drizzleState={this.state.drizzleState}
        />
        <ProjectOfficeSet drizzle={this.props.drizzle}
          drizzleState={this.state.drizzleState}
        />
        <ProjectOfficeRead
          drizzle={this.props.drizzle}
          drizzleState={this.state.drizzleState}
        />
        <MaterialProviderSet
          drizzle={this.props.drizzle}
          drizzleState={this.state.drizzleState}
        />
        <MaterialProviderRead
          drizzle={this.props.drizzle}
          drizzleState={this.state.drizzleState}
        />
        <SolutionManufacturingSet
          drizzle={this.props.drizzle}
          drizzleState={this.state.drizzleState}
        />
        <SolutionManufacturingRead
          drizzle={this.props.drizzle}
          drizzleState={this.state.drizzleState}
        />
        <QualitySecuritySet
          drizzle={this.props.drizzle}
          drizzleState={this.state.drizzleState}
        />
        <QualitySecurityRead
          drizzle={this.props.drizzle}
          drizzleState={this.state.drizzleState}
        />
      </div>
    </div> 
    );
  }
}

export default App;