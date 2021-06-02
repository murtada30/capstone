# Udacity Blockchain Capstone

The capstone will build upon the knowledge you have gained in the course in order to build a decentralized housing product. 

# Install Dependancies:
npm install
npm install --save truffle-hdwallet-provider

# run ganache
ganache-cli -m "adforward kiwi famous mistake soldier predict undo deal canyon craft crew" -a 40

# contracts compilation:
cd eth-contracts
truffle compile

# running tests:
cd eth-contracts
truffle test test/TestERC721Mintable.js
truffle test test/TestSquareVerifier.js
truffle test test/TestSolnSquareVerifier.js 

# migration to test network:
truffle migrate --reset --network rinkeby

Compiling your contracts...
===========================
> Everything is up to date, there is nothing to compile.



Migrations dry-run (simulation)
===============================
> Network name:    'rinkeby-fork'
> Network id:      4
> Block gas limit: 10000000 (0x989680)


1_initial_migration.js
======================

   Replacing 'Migrations'
   ----------------------
   > block number:        8689621
   > block timestamp:     1622580171
   > account:             0xD7B982F760AD5516b0e60Ff2ABBbC76B6e20Ce98
   > balance:             37.41940395
   > gas used:            210237 (0x3353d)
   > gas price:           10 gwei
   > value sent:          0 ETH
   > total cost:          0.00210237 ETH

   -------------------------------------
   > Total cost:          0.00210237 ETH


2_deploy_contracts.js
=====================

   Replacing 'Verifier'
   --------------------
   > block number:        8689623
   > block timestamp:     1622580184
   > account:             0xD7B982F760AD5516b0e60Ff2ABBbC76B6e20Ce98
   > balance:             37.40945197
   > gas used:            967835 (0xec49b)
   > gas price:           10 gwei
   > value sent:          0 ETH
   > total cost:          0.00967835 ETH


   Replacing 'SolnSquareVerifier'
   ------------------------------
   > block number:        8689624
   > block timestamp:     1622580254
   > account:             0xD7B982F760AD5516b0e60Ff2ABBbC76B6e20Ce98
   > balance:             37.37835954
   > gas used:            3109243 (0x2f717b)
   > gas price:           10 gwei
   > value sent:          0 ETH
   > total cost:          0.03109243 ETH

   -------------------------------------
   > Total cost:          0.04077078 ETH


Summary
=======
> Total deployments:   3
> Final cost:          0.04287315 ETH





Starting migrations...
======================
> Network name:    'rinkeby'
> Network id:      4
> Block gas limit: 10000000 (0x989680)


1_initial_migration.js
======================

   Replacing 'Migrations'
   ----------------------
   > transaction hash:    0x08a699b1e3903481617c2894faeedf0ebb04e8bb2fc6781929be71eeca06c602
   > Blocks: 1            Seconds: 9
   > contract address:    0x1fA36dCAB98a97Ad2CAbCa88e5b7e0cd80c7F5f0
   > block number:        8689630
   > block timestamp:     1622580305
   > account:             0xD7B982F760AD5516b0e60Ff2ABBbC76B6e20Ce98
   > balance:             37.41924095
   > gas used:            226537 (0x374e9)
   > gas price:           10 gwei
   > value sent:          0 ETH
   > total cost:          0.00226537 ETH


   > Saving migration to chain.
   > Saving artifacts
   -------------------------------------
   > Total cost:          0.00226537 ETH


2_deploy_contracts.js
=====================

   Replacing 'Verifier'
   --------------------
   > transaction hash:    0x111c7ae901b7c1d2d603c130712f37732f81d29a11bf333bfb3aea56a61bf37c
   > Blocks: 1            Seconds: 9
   > contract address:    0x7B031a10511e050C5c990cA0f72C527c4f80Af5b
   > block number:        8689632
   > block timestamp:     1622580335
   > account:             0xD7B982F760AD5516b0e60Ff2ABBbC76B6e20Ce98
   > balance:             37.40910497
   > gas used:            967835 (0xec49b)
   > gas price:           10 gwei
   > value sent:          0 ETH
   > total cost:          0.00967835 ETH


   Replacing 'SolnSquareVerifier'
   ------------------------------
   > transaction hash:    0xe69e3145c69f9ef026f0b4fd189f79f3da9920a62914930bbb9fb5ea9c7b71c1
   > Blocks: 1            Seconds: 9
   > contract address:    0x02Adea5aF015FD01454C916F94EA9b895e5F50ad
   > block number:        8689633
   > block timestamp:     1622580350
   > account:             0xD7B982F760AD5516b0e60Ff2ABBbC76B6e20Ce98
   > balance:             37.37621754
   > gas used:            3288743 (0x322ea7)
   > gas price:           10 gwei
   > value sent:          0 ETH
   > total cost:          0.03288743 ETH


   > Saving migration to chain.
   > Saving artifacts
   -------------------------------------
   > Total cost:          0.04256578 ETH


Summary
=======
> Total deployments:   3
> Final cost:          0.04483115 ETH



# contracts addresses 
SolnSquareVerifier: 0x02Adea5aF015FD01454C916F94EA9b895e5F50ad
Verifier:0x7B031a10511e050C5c990cA0f72C527c4f80Af5b

# token Tracker:
https://rinkeby.etherscan.io/token/0x02adea5af015fd01454c916f94ea9b895e5f50ad

token 11 to tken 20 were minted
token 11 to token 15 were sold 
token 16 to token 20 remained 

minting through : https://www.myetherwallet.com/interface/interact-with-contract 

# OpenSea Market Place:
https://testnets.opensea.io/collection/my-real-state
token 11 to tken 20 were minted
token 11 to token 15 were sold 
token 16 to token 20 remained 

# contract ABIs
contract ABIs can be found in build/contracts folder as part of the json file ("abi": )
in this case the file is SolnSquareVerifier.json




# Project Resources

* [Remix - Solidity IDE](https://remix.ethereum.org/)
* [Visual Studio Code](https://code.visualstudio.com/)
* [Truffle Framework](https://truffleframework.com/)
* [Ganache - One Click Blockchain](https://truffleframework.com/ganache)
* [Open Zeppelin ](https://openzeppelin.org/)
* [Interactive zero knowledge 3-colorability demonstration](http://web.mit.edu/~ezyang/Public/graph/svg.html)
* [Docker](https://docs.docker.com/install/)
* [ZoKrates](https://github.com/Zokrates/ZoKrates)
