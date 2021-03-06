const ProjectOffice = artifacts.require("./ProjectOffice.sol");

contract("ProjectOffice", accounts => {
  it("should store the string 'Hey there!'", async () => {
    const myStringStore = await ProjectOffice.deployed();

    // Set myString to "Hey there!"
    await myStringStore.set("Hey there!", { from: accounts[0] });

    // Get myString from public variable getter
    const storedString = await myStringStore.myString.call();

    assert.equal(storedString, "Hey there!", "The string was not stored");
  });
});