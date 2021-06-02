pragma solidity >=0.4.21 <0.6.0;

import "./ERC721Mintable.sol";
import "./verifier.sol";
// TODO define a contract call to the zokrates generated solidity contract <Verifier> or <renamedVerifier>


contract SquareVerifier is Verifier {

}


// TODO define another contract named SolnSquareVerifier that inherits from your ERC721Mintable class

contract SolnSquareVerifier is MyERC721Token {


SquareVerifier public squareContract;
    constructor(address addr) MyERC721Token() public{

        squareContract = SquareVerifier(addr);
    }

// TODO define a solutions struct that can hold an index & an address
struct Solutions {
        uint256 index;
        address addr;
    }



// TODO define an array of the above struct
Solutions[] solutionsList;


// TODO define a mapping to store unique solutions submitted
mapping(bytes32 => Solutions) private submittedSolutions;



// TODO Create an event to emit when a solution is added
event SolutionAdded(address to, uint256 index);




// TODO Create a function to add the solutions to the array and emit the event
function addSolution(address _to, uint256 _index, bytes32 _key) internal {
        Solutions memory _solution = Solutions({index : _index, addr : _to});

        solutionsList.push(_solution);

        submittedSolutions[_key] = _solution;

        emit SolutionAdded(_to, _index);
    }


// TODO Create a function to mint new NFT only after the solution has been verified
//  - make sure the solution is unique (has not been used before)
//  - make sure you handle metadata as well as tokenSuplly

function mintToken(
        address _to,
        uint256 _tokenId,
        uint[2] memory a,
        uint[2][2] memory b,
        uint[2] memory c,
        uint[2] memory input
    ) public {

        bytes32 key = keccak256(abi.encodePacked(a, b, c, input));

        require(submittedSolutions[key].addr == address(0), "Solution is already used and not uniqe.");

        require(squareContract.verifyTx(a, b, c, input), "could not verify solution");

        addSolution(_to, _tokenId, key);
        
        super.mint(_to, _tokenId);
  
    }

}
























