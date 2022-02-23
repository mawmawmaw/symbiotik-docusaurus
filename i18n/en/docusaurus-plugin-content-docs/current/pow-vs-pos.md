---
sidebar_position: 5
---

# Proof-of-work (PoW) vs Proof-of-stake (PoS)

Blockchains are essentially distributed databases, running on a network of computers, known as nodes. Nodes can verify blocks and transaction data, and they do this by reaching an agreement on the network&#39;s current state. The agreement is achieved using consensus mechanisms. Consensus means that a general agreement has been reached. In a blockchain, the process of reaching consensus is formalized, and reaching consensus means that at least 51% of the nodes on the network agree on the next global state of the network.

Consensus Mechanisms, also known as consensus protocols or consensus algorithms, allow distributed systems (network of computers) to work together and stay secure. A consensus mechanism. in a cryptoeconomic system also helps prevent certain kinds of economic attacks. In theory, an attacker can compromise consensus by controlling 51% of the network. Consensus mechanisms are designed to make this &quot;51% attack&quot; unfeasible. Different mechanisms are engineered to solve this security problem in different ways.

Types of Consensus Mechanisms:

1. **Proof-of-work**

**Introduction**

Proof-of-work is the underlying algorithm that sets the difficulty and rules for the work miners do. Mining is the &quot;work&quot; itself. It&#39;s the act of adding valid blocks to the chain. This is important because the chain&#39;s length helps the network follow the correct blockchain chain and understand the blockchain&#39;s current state. The more &quot;work&quot; done, the longer the chain, and the higher the block number, the more certain the network can be of the current state of things.

**Basics**

Blockchain transactions are processed into blocks. Each block has a:

- block difficulty – for example: 3,324,092,183,262,715

- mixHash – for example: 0x44bca881b07a6a09f83b130798072441705d9a665c5ac8bdf2f39a3cdf3bee29

- nonce – for example: 0xd3ee432b4fb3d26b

This block data is directly related to proof-of-work.

**What is the &quot;work&quot; in PoW?**

The PoW protocol requires miners to go through an intense race of trial and error to find the nonce for a block. Only blocks with a valid nonce can be added to the chain.

When racing to create a block, a miner will repeatedly put a dataset, that you can only get from downloading and running the full chain (as a miner does), through a mathematical function. The dataset gets used to generate a mixHash below a target nonce, as dictated by the block difficulty. The best way to do this is through trial and error.

The difficulty determines the target for the hash. The lower the target, the smaller the set of valid hashes. Once generated, this is incredibly easy for other miners and clients to verify. Even if one transaction were to change, the hash would be completely different, signaling fraud.

Hashing makes fraud easy to spot. But proof-of-work as a process is also a big deterrent to attacking the chain.

**Security**

The objective of proof-of-work is to extend the chain. The longest chain is most believable as the valid one because it&#39;s had the most computational work done. Within Ethereum&#39;s PoW system, it&#39;s nearly impossible to create new blocks that erase transactions, create fake ones, or maintain a second chain. That&#39;s because a malicious miner would need to always solve the block nonce faster than everyone else.

To consistently create malicious yet valid blocks, you&#39;d need over 51% of the network mining power to beat everyone else. You&#39;d need a lot of computing power to be able to do this amount of &quot;work&quot;. And the energy spent might even outweigh the gains you&#39;d make in an attack.

**Economics**

Proof-of-work is also responsible for issuing new currency into the system and incentivizing miners to do the work.

Miners who successfully create a block get rewarded with freshly minted cryptocurrency, and all the transaction fees within the block. A miner may also get money for an uncle block. Uncle blocks are valid blocks created by a miner practically at the same time as another miner mined the successful block. Uncle blocks usually happen due to network latency.

**Finality**

A transaction has &quot;finality&quot; on Ethereum when it&#39;s part of a block that can&#39;t change.

Due to the fact that miners work in a decentralized way, two valid blocks can get mined at the same time. This creates a temporary fork. Eventually, one of these chains will become the accepted chain after a subsequent block has been mined and added, making it longer.

But to complicate things further, transactions rejected on the temporary fork may have been included in the accepted chain. This means it could get reversed. So finality refers to the time you should wait before considering a transaction irreversible. For Ethereum, the recommended time is six blocks or just over 1 minute. After six blocks, you can say with relative confidence that the transaction was successful. You can wait longer for even greater assurances.

**Energy Usage**

A major criticism of proof-of-work is the amount of energy output required to keep the network safe. For example, to maintain security and decentralization, Ethereum on proof-of-work consumes 73.2 TWh annually, the energy equivalent of a medium-sized country like Austria (Ethereum, 2022).

1. **Proof-of-stake**

**Introduction**

Proof-of-stake is done by validators who have staked cryptocurrency to participate in the system. A validator is chosen at random to create new blocks, share them with the network and earn rewards. Instead of needing to do intense computational work, you simply need to have staked your cryptocurrency in the network. This is what incentivises healthy network behaviour.

Validators are responsible for the same thing as miners in proof-of-work: ordering transactions and creating new blocks so that all nodes can agree on the state of the network.

**Staking and validators**

Proof-of-stake is the underlying mechanism that activates validators upon receipt of enough stake. For Ethereum blockchain, for example, users will need to stake 32 ETH to become a validator. Validators are chosen at random to create blocks and are responsible for checking and confirming blocks they don&#39;t create. A user&#39;s stake is also used as a way to incentivise good validator behavior. For example, a user can lose a portion of their stake for things like going offline (failing to validate) or their entire stake for deliberate collusion.

**How does it work?**

**Unlike proof-of-work, validators don&#39;t need to use significant amounts of computational power because they&#39;re selected at random and aren&#39;t competing.** They don&#39;t need to mine blocks; they just need to create blocks when chosen and validate proposed blocks when they&#39;re not. This validation is known as attesting. You can think of attesting as saying &quot;this block looks good to me.&quot; Validators get rewards for proposing new blocks and for attesting to ones they&#39;ve seen.

If you attest to malicious blocks, you lose your stake.

**Sharding**

Sharding is the process of splitting a database horizontally to spread the load. In a blockchain, sharding will reduce network congestion and increase transactions per second by creating new chains, known as &quot;shards&quot;.

- Scalability

Sharding is a good way to scale if you want to keep things decentralized as the alternative is to scale by increasing the size of the existing database. This would make a blockchain less accessible for network validators because they&#39;d need powerful and expensive computers. With shard chains, validators only need to store/run data for the shard they&#39;re validating, not the entire network (like what happens today). This speeds things up and drastically reduces hardware requirements.

- More network participation

Sharding will eventually let you run a blockchain on a personal laptop or phone. This will allow a higher number of people to participate, thus increasing security, because the more decentralized the network, the smaller the attack surface area.

**The beacon chain**

The beacon chain receives state information from shards and makes it available for other shards, allowing the network to stay in sync. The beacon chain will also manage the validators from registering their stake deposits to issuing their rewards and penalties.

Here&#39;s how that process works:

**Validations, a.k.a Attestation**

When you submit a transaction on a shard, a validator will be responsible for adding your transaction to a shard block. Validators are algorithmically chosen by the beacon chain to propose new blocks. If a validator isn&#39;t chosen to propose a new shard block, they&#39;ll have to attest to another validator&#39;s proposal and confirm that everything looks as it should. **It&#39;s the attestation that is recorded in the beacon chain rather than the transaction itself.**

At least 128 validators are required to attest to each shard block – this is known as a &quot;committee.&quot; The committee has a time-frame in which to propose and validate a shard block. This is known as a &quot;slot.&quot; Only one valid block is created per slot, and there are 32 slots in an &quot;epoch.&quot; After each epoch, the committee is disbanded and reformed with different, random participants. This helps keep shards safe from committees of bad actors.

Once a new shard block proposal has enough attestations, a &quot; **crosslink**&quot; is created which confirms the inclusion of the block and your transaction in the beacon chain. Once there&#39;s a crosslink, the validator who proposed the block gets their reward.

In distributed networks, a transaction has &quot; **finality**&quot; when it&#39;s part of a block that can&#39;t change. To do this in proof-of-stake, Casper, a finality protocol, gets validators to agree on the state of a block at certain checkpoints. So long as 2/3 of the validators agree, the block is finalized. Validators will lose their entire stake if they try to revert this later on via a 51% attack.

**Security**

The threat of a 51% attack still exists in proof-of-stake, but it&#39;s even more risky for the attackers. To do so, you&#39;d need to control 51% of the total staked cryptocurrency. Not only is this a lot of money, but it would probably cause ETH&#39;s value to drop. There&#39;s very little incentive to destroy the value of a currency you have a majority stake in. There are stronger incentives to keep the network secure and healthy.

Stake slashings, ejections, and other penalties, coordinated by the beacon chain, will exist to prevent other acts of bad behavior. Validators will also be responsible for flagging these incidents.

## Energy Usage

One key advantage of proof-of-stake is its low energy consumption compared to proof-of-work. A study done on the carbon footprint of proof-of-stake network showed the difference in energy usage between the two consensus mechanisms: (reference)

| **Blockchain** | **Consensus Mechanism** | **Total energy consumption (kWh)** | **Equivalent / year** |
| --- | --- | --- | --- |
| Bitcoin | Proof-of-Work | 89,780,000,000 | 8.5 million U.S. households |
| Ethereum | Proof-of-Work | 17,300,000,000 | 1.6 million U.S. households. |
| Avalanche | Proof-of-Stake | 489,311 | 46 US households |

_Energy consumption per Blockchain. (Avalanche, 2022)._
