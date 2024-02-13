// SPDX-License-Identifier: UNLICENSED
pragma solidity 0.8.20;

import "@openzeppelin/contracts/access/Ownable.sol";
import "hardhat/console.sol";

contract ETHVault is Ownable {

    struct UserInfo {
        bool staked;
        bool staking;
        uint256 lastUpdateTime;
        uint256 totalClaimed;
    }

    struct Transaction {
        uint8 transType; // 1: stake, 2: unstake, 3: claim
        address user;
        uint256 timestamp;
        uint256 amount;
    }

    uint64 public index = 0;

    uint256 private constant ONE_YEAR_SECOND = 31536000;
    uint256 public constant APR = 500;
    uint256 private rewardPerSecond;
    uint256 public constant stakeAmount = 0.001 ether;

    mapping(address => UserInfo) public stakeInfo;
    mapping(uint256 => Transaction) public transactions;

    event Stake(
        address indexed user,
        uint256 timestamp    
    );

    event Withdraw(address indexed user);
    event Claim(address indexed user, uint256 timestamp, uint256 indexed amount);

    constructor(address owner) payable Ownable(owner) {
        rewardPerSecond = stakeAmount * APR / 10000 / ONE_YEAR_SECOND;
        console.log(rewardPerSecond);
    }

    receive() external payable {}

    function adminWithdraw(uint256 amount) public payable onlyOwner {
        require(address(this).balance >= amount, "Insufficient balance");
        payable(msg.sender).transfer(amount);
    }

    function stake() public payable {
        UserInfo memory userInfo = stakeInfo[msg.sender];
        require(!userInfo.staked, "Can not stake again");
        require(msg.value >= stakeAmount);

        stakeInfo[msg.sender].staked = true;
        stakeInfo[msg.sender].staking = true;
        stakeInfo[msg.sender].lastUpdateTime = block.timestamp;

        index = index + 1;
        transactions[index].transType = 1;
        transactions[index].user = msg.sender;
        transactions[index].timestamp = block.timestamp;
        transactions[index].amount = msg.value;
        
        emit Stake(msg.sender, block.timestamp);
    }

    function withdraw() public payable {
        UserInfo memory userInfo = stakeInfo[msg.sender];
        require(userInfo.staked && userInfo.staking, "User not in staking");

        uint256 n = block.timestamp;
        uint256 reward = (n - userInfo.lastUpdateTime) * rewardPerSecond;

        payable(msg.sender).transfer(reward + stakeAmount);

        console.log(4, reward, stakeAmount);
        stakeInfo[msg.sender].lastUpdateTime = n;
        stakeInfo[msg.sender].totalClaimed += reward;
        stakeInfo[msg.sender].staking = false;

        index = index + 1;
        transactions[index].transType = 2;
        transactions[index].user = msg.sender;
        transactions[index].timestamp = block.timestamp;
        transactions[index].amount = reward + stakeAmount;

        emit Withdraw(msg.sender);
        emit Claim(msg.sender, n, reward);
    }

    function claim() public payable{
        UserInfo memory userInfo = stakeInfo[msg.sender];
        require(userInfo.staked && userInfo.staking, "User not in staking");

        uint256 n = block.timestamp;
        uint256 reward = (n - userInfo.lastUpdateTime) * rewardPerSecond;

        payable(msg.sender).transfer(reward);
        stakeInfo[msg.sender].lastUpdateTime = n;
        stakeInfo[msg.sender].totalClaimed += reward;

        index = index + 1;
        transactions[index].transType = 3;
        transactions[index].user = msg.sender;
        transactions[index].timestamp = n;
        transactions[index].amount = reward;

        emit Claim(msg.sender, n, reward);
    }

    function pendingReward(address user) public view returns (uint256) {
        UserInfo memory userInfo = stakeInfo[user];
        if (!userInfo.staked || !userInfo.staking) {
            return 0;
        }

        uint256 n = block.timestamp;
        uint256 reward = (n - userInfo.lastUpdateTime) * rewardPerSecond;

        return reward;
    }
}