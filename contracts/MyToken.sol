//SPDX-License-Identifier:MIT

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";

pragma solidity ^0.8.0;

contract MyToken is ERC20 {
    constructor() ERC20("RijalDeepeshToken", "RDT") {
        _mint(msg.sender, 10000 * 10**18);
    }
}
