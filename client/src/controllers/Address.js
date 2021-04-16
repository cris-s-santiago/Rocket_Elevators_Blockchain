import React from "react";
import axios from "axios";

class Address extends React.Component {

  state = {addresses: []}
  componentDidMount(){

    axios
        .get('https://rocketblockchain.azurewebsites.net/api/blockchains')
        .then(response => {
            console.log(response)
            this.setState({
                addresses: response.data
            });
        })
        .catch(error => {console.log(error.response)});
  }

  render() {
      const addresses = this.state.addresses;
    return (
      <div>
          <select>
              <option value="">Choose an address</option>
              {addresses.map((address) => (<option value={address.id} key={address.id}>
                  {address.id} {address.nodeName} {address.address}
                </option>))}
          </select>
      </div>
    );
  }
}

export default Address;
