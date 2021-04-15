pragma solidity >=0.5.0;

contract MyStringStore {
  uint256 public batteries = 30;
  uint256 public columns = 25;
  uint256 public elevators = 0;
  uint256 public floors = 0;
  
  function setData(uint256 a, uint256 b, uint256 c, uint256 d) public {
    batteries = a;
    columns = b;
    elevators = c;
    floors = d;
  }

  function setBatteries(uint256 x, uint256 y) public {
    batteries = x;
    columns = y;
  }

  // function setColumns(int x) public {
  //   columns = x;
  // }

  // function setElevators(int x) public {
  //   elevators = x;
  // }

  // function setFloors(int x) public {
  //   floors = x;
  // }
}