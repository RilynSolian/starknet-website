### TL;DR

* StarkNet Alpha 0.8.0 presents the initial version of the fee mechanism (optional until StarkNet Alpha 0.9.0.)
* New API calls for estimating the transaction fee for obtaining the transaction trace, allowing better visibility and debugging capabilities
* Performance improvements to the StarkNet sequencer
* L1→L2 message cancellation

### Intro

As shared in our [roadmap](https://www.notion.so/starkware/StarkNet-Alpha-Features-Tentative-Roadmap-f2b8f5f25a2d4d1cb3265fb82a098c51), following the latest addition to StarkNet’s functionality and features, our attention shifts towards performance enhancements and protocol design (including fees, account abstraction, decentralization, etc.). StarkNet Alpha 0.8.0 starts the process of adding transaction fees and improving the sequencer’s performance.

The roadmap for StarkNet includes a fee mechanism, and by progressing with this version we are taking an important step closer to full performance for the platform.

Adding the fee mechanism is an essential part of StarkNet’s performance design. Without a minimal fee, we risk facing infinite transactions: which would make it impossible for the system to be performant, regardless of sequencer optimizations.

### Features

#### Fee Support

StarkNet Alpha now supports the first version of the fee mechanism. This mechanism is essential even at this early stage, and even on Testnet, for two main reasons:

1. It allows developers to start optimizing their contracts according to StarkNet’s cost model.
2. It is a crucial counterpart to improving the system’s performance, as it prevents spamming by sending countless transactions.

This version introduces the components necessary for developers to incorporate fee payments into their tools and applications. Developers can now estimate the transaction fee by calling the \`estimate_fee\` endpoint and make the fee payment as part of the transaction execution.

Since this feature is not backward compatible, we will not enforce the fee payment at this point, but only from version 0.9.0, which is due to be released in a few weeks. This gradual transition will allow users and developers to adjust to the new model.

#### Fee Structure on 0.8.0

On 0.8.0, fees will be collected according to the computational complexity alone, while StarkWare will still subsidize L1 communication cost. We will update the fee mechanism to include these L1 operation and communication costs over the next few weeks. The payment will be collected atomically with the transaction execution on StarkNet L2. See the [fees documentation](https://starknet.io/documentation/fee-mechanism/) for an in-depth description.

It’s important to note that we will work closely with the developer community to tweak and develop the fee mechanism as StarkNet evolves.

#### L2 Goerli ETH Faucet

We launched the [L2 Goerli ETH Faucet](https://faucet.goerli.starknet.io/) to enable users to pay fees on Testnet. This Faucet sends small amounts of L2 Goerli ETH to your account address on StarkNet Goerli which you can use for paying the transaction fee.

#### Trace API

We added the ability to retrieve a transaction’s execution trace to StarkNet’s API. Inside the transaction’s trace, all the internal calls are visible, accompanied by information such as execution resources consumed, return value, emitted events, and messages sent. This new call simplifies understanding a contract’s behavior or debugging transactions. Additionally, tools such as [Voyager](https://voyager.online/) or [StarkTx](https://starktx.info/) could incorporate this data; providing the users with more detailed analysis, in particular for account contract interaction.

To obtain the trace, you may use \`get_transaction_trace\` in StarkNet’s CLI. To see an example of how to use it, check the [tutorial](https://www.cairo-lang.org/docs/hello_starknet/cli.html?#get-transaction-trace).

#### Message Cancellation

An additional feature of this version is the ability to cancel L1→L2 messages. Why is this useful? Imagine a scenario where a user transfers an asset from L1 to L2. The flow starts with the user sending the asset to a StarkNet bridge and the corresponding L1→L2 message generation. Now, imagine that the L2 message consumption doesn’t function (this might happen due to a bug in the dApps’s Cairo contract). This could result in the user losing custody over their asset forever.

To mitigate this risk, we allow the contract that initiated the L1→L2 message to cancel it — after declaring the intent to do so and waiting a suitable amount of time (see the [documentation](https://starknet.io/l1-l2-messaging/#cancellation)).

### Performance Improvements

This version significantly decreases the time a sequencer needs to execute a stream of incoming Cairo transactions.

This is only the first step! Our next major performance milestone, to be introduced soon (0.9.0), is parallel execution of the sequencer, and many more optimizations are expected down the road.

### What now?

Read the technical documentation [here](https://starknet.io/documentation/fee-mechanism/).

Go to [starknet.io](https://starknet.io/), for all StarkNet information, documentation, tutorials, and updates.

Join [StarkNet Discord](https://discord.gg/uJ9HZTUk2Y) for dev support, ecosystem announcements, and becoming a part of the community.

Visit [StarkNet Shamans](https://community.starknet.io/) to stay updated and participate in all StarkNet research discussions.