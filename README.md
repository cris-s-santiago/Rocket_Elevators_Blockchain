# Rocket_Elevators_Blockchain 🚀
-----------------------------------------------------------------------------------------------

📈 CodeBoxx Odyssey - Week 12

The project was to create a smart contract consisting of 4 nodes using Solidity and Truffle.
The goal of the blockchain node is to ensure transparency and traceability when placing an order from one stage to another during its execution.

-----------------------------------------------------------------------------------------------

# Team:

```ssh
- Eric Turcotte
- Claude St-Laurent
- Cristiane Santiago
- Felix Masse
- Ines Josiane
- Tommy Côté
```
-----------------------------------------------------------------------------------------------

# Nodes:
```ssh
- Project Office:
Take the initial order of the contract and insert the number of Batteries, Columns, Elevators and Floors and convert them
into a list of parts Controllers, Axes, Doors, Buttons, Monitors and Speakers, with the necessary quantity of each one.

- Material Provider:
Recieves the list of parts needed and performs calculations to determine the materials needed to manufacture the order.

- Solution Manufacturing:
Production and assembly of necessary components based on the quantity of raw material and order received.

- Quality, Security and Homologation:
Receives the list of components and marks the elements with a certificate of conformity, permit and functional test.
```
-----------------------------------------------------------------------------------------------

# Client:

CodeBoxx Castle 725 Lebourgneuf, Lévis, QC

Order:

  - 1 elevator battery

  - 2 columns

  - 4 excelium elevators per column to serve 5 ﬂoors

-----------------------------------------------------------------------------------------------

# About:

🎯 Each Node in the Rocket Elevators BlockChain will have to establish a Smart Contract that can be deployed on an ethereum network.

# How to set up the app

- run `npm install` from root folder
- cd to the 'client' folder & run `npm install` again
- ensure you have Ganache open and running on port 7545
- configure Metamask to use the same port, running on localhost
- run `truffle migrate` in the root folder
- run  `cd client && npm run start` - This start the React and should open the application in your browser.
-----------------------------------------------------------------------------------------------

# 📌MySQL:

We created a table in MySQL to keep track of the deployed contract, whit the name and addresses of contracts.

-----------------------------------------------------------------------------------------------

# 📌View:

We use drizzle to assist in the creation of our page.

-----------------------------------------------------------------------------------------------

# 📌Rest API:

News endpoints created to insert and retrieve information in the database.

For the Rocket Elevators Rest API: https://github.com/InesIzere/Rocket_Elevators_Blockchain_API.git

Get
https://rocketblockchain.azurewebsites.net/api/blockchains

Post
https://rocketblockchain.azurewebsites.net/api/blockchains

-----------------------------------------------------------------------------------------------

# References

📚 https://www.trufflesuite.com/
