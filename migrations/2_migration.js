var OverUnderFlow = artifacts.require("./OverUnderFlow.sol");
var OverUnderFlowFixed = artifacts.require("./OverUnderFlowFixed.sol");
var ReentrancyVulnerable = artifacts.require("./ReentrancyVulnerable.sol");
var ReentrancyVulnerableFixed = artifacts.require("./ReentrancyVulnerableFixed.sol");
var ReentrancyAttacker = artifacts.require("./ReentrancyAttacker.sol");
var WalletLibrary = artifacts.require("./WalletLibrary.sol");
var WalletLibraryFixed = artifacts.require("./WalletLibraryFixed.sol");
var Wallet = artifacts.require("./Wallet.sol");
var Auction = artifacts.require("./Auction.sol");
var AuctionFixed = artifacts.require("./AuctionFixed.sol");
var AuctionAttacker = artifacts.require("./AuctionAttacker.sol");
var ForceEtherVictim = artifacts.require("./ForceEtherVictim.sol");
var ForceEtherAttacker = artifacts.require("./ForceEtherAttacker.sol");
var TxOriginVictim = artifacts.require("./TxOriginVictim.sol");
var TxOriginAttacker = artifacts.require("./TxOriginAttacker.sol");
var TxOriginVictimFixed = artifacts.require("./TxOriginVictimFixed.sol");
var UnboundArray = artifacts.require("./UnboundArray.sol");
var UnboundArrayFixed = artifacts.require("./UnboundArrayFixed.sol");
var WalletSendBug = artifacts.require("./WalletSendBug.sol");
var WalletSendBugFixed = artifacts.require("./WalletSendBugFixed.sol");

module.exports = function(deployer) {

  deployer.deploy(OverUnderFlow);
  deployer.deploy(OverUnderFlowFixed);
  deployer.deploy(ReentrancyVulnerable);
  deployer.deploy(ReentrancyVulnerableFixed);
  deployer.deploy(ReentrancyAttacker);
  deployer.deploy(Wallet);
  deployer.deploy(WalletLibrary);
  deployer.deploy(WalletLibraryFixed);
  deployer.deploy(Auction);
  deployer.deploy(AuctionFixed);
  deployer.deploy(AuctionAttacker);
  deployer.deploy(ForceEtherVictim);
  deployer.deploy(ForceEtherAttacker);
  deployer.deploy(TxOriginVictim);
  deployer.deploy(TxOriginAttacker);
  deployer.deploy(TxOriginVictimFixed);
  deployer.deploy(UnboundArray);
  deployer.deploy(UnboundArrayFixed);
  deployer.deploy(WalletSendBug);
  deployer.deploy(WalletSendBugFixed);

};
