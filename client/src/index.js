import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";

import { Drizzle } from "@drizzle/store";

import ProjectOffice from "./contracts/ProjectOffice.json";
import MaterialProvider from "./contracts/MaterialProvider.json";
import SolutionManufacturing from "./contracts/SolutionManufacturing.json";
import QualitySecurity from "./contracts/QualitySecurity.json";

// let drizzle know what contracts we want and how to access our test blockchain
const options = {
	contracts: [ProjectOffice, MaterialProvider, SolutionManufacturing, QualitySecurity],
	web3: {
		fallback: {
			type: "ws",
			url: "ws://192.168.2.17:7545",
		},
	},
};

// setup drizzle
const drizzle = new Drizzle(options);

// const Web3Eth = require('web3-eth');

// const eth = new Web3Eth('ws://192.168.2.17:7545');

ReactDOM.render(<App drizzle={drizzle} />, document.getElementById("root"));
