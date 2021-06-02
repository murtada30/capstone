var ERC721MintableComplete = artifacts.require('MyERC721Token');

contract('TestERC721Mintable', accounts => {

    const account_one = accounts[0];
    const account_two = accounts[1];

    describe('match erc721 spec', function () {
        beforeEach(async function () { 
            
            this.contract = await ERC721MintableComplete.new({from: account_one});

            // TODO: mint multiple tokens
            
                await this.contract.mint(accounts[0], 1, {from: account_one});
                await this.contract.mint(accounts[1], 2, {from: account_one});
                await this.contract.mint(accounts[2], 3, {from: account_one});
                await this.contract.mint(accounts[3], 4, {from: account_one});
                await this.contract.mint(accounts[4], 5, {from: account_one});




            
        })

        it('should return total supply', async function () { 

            let totalSupply = await  this.contract.totalSupply();

            assert.equal(totalSupply.toNumber(), 5, " total supply is invalid ");
            
        })

        it('should get token balance', async function () { 
            
            let balanceOfAccountOne = await this.contract.balanceOf(accounts[0]);

            assert.equal(balanceOfAccountOne.toNumber(), 1, "wrong balance of account # 1");
        })

        // token uri should be complete i.e: https://s3-us-west-2.amazonaws.com/udacity-blockchain/capstone/1
        it('should return token uri', async function () { 

            let inputURI='https://s3-us-west-2.amazonaws.com/udacity-blockchain/capstone/1'

            
            let tokenURI = await this.contract.tokenURI(1, { from: account_one });
            assert.equal(tokenURI, inputURI, "token uri does not match");
            
        })

        it('should transfer token from one owner to another', async function () { 

            await this.contract.transferFrom(account_one, account_two, 1, { from: account_one });

            let owner = await this.contract.ownerOf.call(1, {from: account_two});

            assert.equal(owner, account_two, "new owner is not corect - fail transfere ");
            
        })
    });

    describe('have ownership properties', function () {
        beforeEach(async function () { 
            this.contract = await ERC721MintableComplete.new({from: account_one});
        })

        it('should fail when minting when address is not contract owner', async function () { 
            
            let mintFailed = false;

            try {
                await this.contract.mint(account_two, 2, { from: account_two });
            } catch (e) {
                mintFailed = true;
            }
            assert.equal(mintFailed, true, "mint without contract owner");
        })

        it('should return contract owner', async function () { 

            let owner = await this.contract.getOwner({ from: account_one });
            
            assert.equal(owner, account_one, "owner should be account_one");
        })

    });
})