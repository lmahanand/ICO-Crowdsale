pragma solidity ^0.4.18;

import 'zeppelin-solidity/contracts/token/MintableToken.sol';

contract ScratchToken is MintableToken{
    string public name = "Scratch Token";
    string public symbol = "ITCH";
    uint8 public decimals = 18;
}
