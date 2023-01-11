// Copyright 2022 The Aquachain Authors. All rights reserved.
// Use of this source code is governed by the MIT license

import { Metalink } from "../components/Metalink"

export const AboutPage = () => {
    window.scrollTo(0, 0)
    return (
        <div className="container">
            <div className="about-product-content">

                <h2>What is Aquachain?</h2>
                <p>Aquachain -
                    <em> A distributed computing platform
                        based on <strong>proof-of-work chain</strong> and <strong>cryptographic signatures</strong>.
                    </em>
                </p>
                <p>
                    A peer-to-peer network, hosting a simple distributed <span title="Virtual Machine">VM</span> that anyone can build programs on.
                    Everyone is welcome to participate, without permission.
                    It limits spam and prevents endless-loop situations by hosting a fully auditable ledger of "coin", who's finite supply is created only by mining blocks using computational power.
                    Every transaction requires additional attached coin, in order to be included by block miners.
                </p>
                <Metalink button to="/learn/mining">Guide: Mining</Metalink>
                <Metalink button to="https://gitlab.com/aquachain/aquachain">Aquachain Source Code</Metalink>
                <Metalink button to="/learn/contracts">Guide: Contracts</Metalink>
                <Metalink button to="/learn/building">Guide: Building</Metalink>
                <Metalink button to="https://safe.trade/trading/aquabtc">Trade AQUA/BTC at SafeTrade</Metalink>
                <h2>Why slow blocks? Why no tokens?</h2>
                <p>TLDR: <em>Slow blocks &rarr; No Swap Router &rarr; Less ERC20 Tokens &rarr; Less Gas Wars</em></p>
                <p>
                    The <Metalink to="https://gitlab.com/aquachain/aquachain">Aquachain Network</Metalink>{" "}
                    was created from Ethereum's <code>go-ethereum</code> codebase as a <u>more experimental</u>, {" "}
                    <u>slower</u>, <u>"fair launch"</u> alternative to other more popular (and more centralized) smart contract platforms.
                    Right before Aquachain, during late 2017, it seemed like everyone was talking about crypto.
                    There were tokens being launched for all sorts of projects, and more people than ever were using the Bitcoin and Ethereum networks.
                    So many people started using crypto at the same time, using all sorts of tokens, that the transaction fees went through the roof and made the network almost unusable.
                    A large contributor to the gas usage on ethereum was and continues to be ERC20 tokens and components related to them.
                </p>
                <p>
                    On one hand, the token projects contributed to Ethereum's growth and "network effect".
                    On the other hand, it is responsible for its biggest barrier to true mass adoption.
                    The more users, the more tokens, the more of an issue the token gas usage will become.
                    A solution to this issue could be to somehow deter tokens from deploying on the main chain, and encouraging tokens on sidechains.
                </p>

                <p>
                    It is for this reason that the decision was made to have a slower block target time, for a network dedicated to non-token usage.
                    The idea that fewer ERC20 tokens would launch if swap platforms were not available, and with fewer ERC20 projects on a network, less gas would be used on these sort-of "sub-ledgers",
                    This makes alot more room in the block space for your non-token project and it's users. Have chains for tokens, and chains for other use-cases.
                </p>
                <div style={{ color: "teal" }}>
                    <p>
                        Aquachain mainnet is a great place to deploy a smart contract that fits the following (restrictive) characteristics,
                    </p>
                    <ul>Your contract:
                        <li>Must NOT require fast block confirmations ("is it okay that the tx could be mined in a few minutes, not a few seconds?")</li>
                        <li>MUST be frontrun-resistant (someone could beat you to the block, getting their tx mined before yours)</li>
                        <li>Must NOT depend on "swap routers" or other contracts that don't meet above criteria. They don't exist here safely.</li>
                    </ul></div>
                <p>
                    Many users of smart contracts are distracted by gambling with ERC20 token projects, while ignoring the rest of what is possible with general purpose distributed systems such as Aquachain.</p>

                <p>It's worth noting that <u>any</u> sort of smart-contract can be deployed on the network and nothing prevents any sort of token from being created.
                    Maybe one day, a number of sub-networks will exist and it will make sense for tokens to occasionally pass through mainnet Aquachain.</p>

                <Metalink button to="/learn/contracts">Start building today!</Metalink>

                <h2>ASIC resistance</h2>
                <p>
                    Aquachain is dedicated to ASIC resistance, and it does so with <Metalink to="https://github.com/aquanetwork/aquachain/pull/19">the ability to change POW algorithm quickly and smoothly if consensus has been reached</Metalink>.
                </p>
                <p>
                    <em>What is ASIC resistance!?</em> Well, it is very likely that no single hash is "ASIC resistant" and that given enough time and money, a machine will be made to compete in any algorithm.
                    But, one thing that <em>can</em> be done is switch mining algorithms easily if consensus is made.
                </p>
                <p>This was realized <em>Sat 28 Apr 2018 03:46:55 AM UTC</em> (block <Metalink to="https://aquachain.github.io/explorer/#/block/22800">22800</Metalink>) when the Aquachain network switched from <code>ethash</code> to <code>argon2id</code> mid-chain.
                    It happened before popular ASIC manufacturer Bitmain was able to ship their E3 units, which were announced Apr 3 and started shipping a few months later.
                    For months following the fork event (named HF5), only CPUs mined Aquachain until the first GPU miner was developed. <Metalink button to="/learn/mining">Download the latest miner</Metalink>
                </p>
                <p>
                    A smooth POW algorithm switch can happen again quickly and easily if a manufacturer creates an "Aquachain ASIC product".
                    As soon as enough support is gathered for the fork,
                    honest mining node operators can eliminate the products from being able to perform as advertised.
                </p>
                <h4>Wait, Aren't GPUs basically the same thing as ASICS?</h4>
                <p>
                    The issue with ASICs is purely a matter of decentralization.
                    If local manufacturers existed, and people could easily form companies that produce and sell specialized AQUA mining equipment,
                    nobody would have an issue with ASICs securing the network.

                    It remains very expensive to mass-produce mining equipment that are well made + energy-efficient + space-efficient + powerful + can deal with the heat + actually ship.
                    Although the number of CPU and GPU manufacturers tend to be 2, they are distributed enough to use for the purpose intended.
                </p>
                <Metalink button to="/learn/mining">Start mining today!</Metalink>

                <h2>Proof of work</h2>
                <em></em>
                <p>
                    Because Aquachain is secured by proof-of-work, mining will always continue indefinitely.
                    There may be some fast blocks, or slow blocks, but nobody can prevent a valid block from being submitted to the network.
                    It seems like every few months we hear of a proof-of-stake system being paused for some reason or another.
                    In proof-of-work systems, anyone can join as a 'block producer' without permission,
                    and the network is unable to be paused.

                </p>
                <p>
                    Depending on the number of miners currently working, the risk of a double spend attack could be quite high.
                    Please take precaution receiving coin from strangers, or building automated systems that record incoming transactions.
                    You may wait any number of blocks to call it "finalized".
                    For reference, there are typically 360 blocks mined per day on the network.

                </p>
                <p>
                    While it may be absurd waiting more than an hour for a Bitcoin or Ethereum "deposit" to be confirmed on online platforms (such as invoicing systems or crypto exchanges),
                    Aquachain users can expect to wait a <u>number of hours</u> for their deposit to be confirmed.
                    Your services you build may require days or weeks to make sure the deposit was legitimately made, in order to protect the integrity of your deposit system.
                    As mining "hashpower" increases, so does the network security.
                </p>

                <p><code>"The system is secure as long as honest nodes collectively control more CPU power than any cooperating group of attacker nodes." - <Metalink to="https://bitcoin.org/bitcoin.pdf">Satoshi Nakamoto, bitcoin whitepaper</Metalink></code></p>


                <Metalink button to="/learn/mining">Start mining today!</Metalink>

                <h2>Building on Aquachain</h2>
                <p>
                    It may be very different from what you are familiar with, but it may be just what you have been looking for.
                    If this sounds like you could use Aquachain for your project, check out the <Metalink to="/learn/readme">README</Metalink> page.

                    Developers and volunteers may improve aquachain by sending pull requests for anything, from documentation/information websites, to the core itself. See the <code>aquachain</code> organizations on <Metalink to="https://gitlab.com/aquachain">gitlab</Metalink> and <Metalink to="https://github.com/aquachain">github</Metalink> for a number of repositories containing libraries and tools.


                </p>

                <h2>Links</h2>
                <p>
                    Check out the following links to learn more.
                </p>
                <div className="buttongroup linktree">
                    <Metalink button to="/learn/readme">Read the README!</Metalink>
                    <Metalink button to="/learn/wallets">Wallets</Metalink>
                    <Metalink button to="/learn/mining">Mine it today</Metalink>
                    <Metalink button to="https://safe.trade/trading/aquabtc?aquawebsite">Trading at SafeTrade</Metalink>
                    <Metalink button to="https://bscscan.com/token/0x38FAB266089AAf3BC2F11B791213840Ea3D587C7">Bridged to BSC</Metalink>
                    <Metalink button to="/learn/building">Guide: Building on Aquachain</Metalink>
                    <Metalink button to="/learn/rpc">Guide: Hosting an RPC server</Metalink>
                    <Metalink button to="/learn/contracts">contracts</Metalink>
                    <Metalink button to="/learn/rpc">rpc</Metalink>
                    <Metalink button to="/learn/mining">mining</Metalink>
                    <Metalink button to="/learn/building">building</Metalink>
                </div>
            </div>
        </div >
    )
}