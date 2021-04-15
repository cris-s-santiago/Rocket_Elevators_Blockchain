import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";

// import drizzle functions and contract artifact
import { Drizzle } from "@drizzle/store";
//import ProjectOfficeRead from "./contracts/ProjectOfficeRead.json";
import MyStringStore from "./contracts/MyStringStore.json";

// let drizzle know what contracts we want and how to access our test blockchain
const options = {
	contracts: [MyStringStore],
	web3: {
		fallback: {
			type: "ws",
			url: "ws://192.168.2.17:7545",
		},
	},
};

// setup drizzle
const drizzle = new Drizzle(options);

ReactDOM.render(<App drizzle={drizzle} />, document.getElementById("root"));

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();