// Copyright 2022 The Aquachain Authors. All rights reserved.
// Use of this source code is governed by the MIT license

import { useEffect, useState } from "react"
import toast from "react-hot-toast"
import { Link } from "react-router-dom"
import { Metalink } from "../components/Metalink"
// fetches supply and latest release tag
export const HomePage = () => {
    const [supply, setSupply] = useState<string>()
    const [versionStr, setVersion] = useState<string>()
    useEffect(() => {
        let stale = false
        fetch("https://c.onical.org/supply", { cache: "no-cache", credentials: "omit" })
            .then(r => r.text()).then((supplyText) => {
                if (!stale) {
                    setSupply(`${parseInt(supplyText)} coin`)
                }
            })
            .catch((e) => {
                if (!stale) {
                    console.error({ fetchingSupply: e })
                    toast.error(`fetching supply: ${e.reason ?? e.message ?? e}`)
                }
            })

        fetch("https://api.github.com/repos/aquachain/aquachain/releases/latest", { credentials: "omit" }).then(r => r.json())
            .then((x) => {
                if (!stale) {
                    setVersion(x.tag_name)
                }
            })
            .catch((e) => {
                if (!stale) {
                    console.error({ fetchingSupply: e })
                    toast.error(`fetching latest release: ${e.reason ?? e.message ?? e}`)
                }
            })
    }, [])
    return <div className="container flex">
        <div className="center_sm">
            <img
                src={process.env.PUBLIC_URL + "/img/aqua-icon.svg"}
                className="logo"
                alt="aquachain icon, the 'A' symbol"
            /></div>
        <h2>Decentralized Processing</h2>
        <p>There are more to smart contracts than just tokens. Aquachain is a distributed computing platform
            based on <strong>proof-of-work</strong> chain technology. Its not a company to invest in. There was no ICO,
            no pre-mine, no dev fund, no pre-sale, etc.
        </p><p>
            All {supply ?? "coin"} in circulation were created by mining,
            and the supply continues to grow by 1 coin per "block".
            Blocks are containers, able to be filled with transactions.
            Mining difficulty increases or decreases to maintain target block timing of 240 seconds.
            Transactions, once placed in a block, are <strong>irreversible and uncensorable</strong>.
            Aquachain is the blockchain, AQUA is the fuel.
            You need AQUA to create and interact with <Metalink to="/learn/contracts">
                executable distributed code contracts
            </Metalink>,
            and to send transactions on the network.
        </p>
        <p>
            To learn more, see the <Metalink to="/about">about</Metalink> page.
            For the technical details, see the live <Link to="/learn/">documentation</Link> section.
            To see a block explorer, see <Metalink to="https://aquachain.github.io/explorer/#/">aquachain.github.io/explorer</Metalink>
        </p>
        <p>
            The best way to get AQUA is to <Metalink to="/learn/mining">mine</Metalink> it yourself, using your GPU.
            You can join a <Metalink to="/learn/mining">mining pool</Metalink> right now to start earning a stream with no permission required.
        </p>

        <p>
            If your project is using Aquachain, check out the <Metalink to="/learn/contracts">contracts</Metalink> and <Metalink to="/learn/building">building</Metalink> pages for tips.
        </p>
        <pre style={{

            color: "#2fa4fb",
            textOverflow: "ellipsis",
            wordWrap: "break-word",
            display: "block",
        }}>
            {`
Symbol: Ⱥ or AQUA

Target Block Time: 240 seconds (4 minutes)

Current Hashing Algorithm: argon2id

Block reward: 1 AQUA

Max Supply: 42 million

ChainID: 61717561

Explorer: https://aquachain.github.io/explorer/#/

`}
        </pre>
        <div className="buttongroup ">
            <Metalink className="big" button to="/about">Learn More</Metalink>
            <Metalink className="big" style={navstyle} button to="https://github.com/aquachain/aquachain/releases">Latest Release {versionStr}</Metalink>
            <Metalink className="big" button to="/connect">Add network to Web3 Wallet</Metalink>
            <Metalink className="big" button to="/learn/mining">Guide: Mining (CPU or GPU)</Metalink>
            <Metalink className="big" button to="https://aquachain.github.io/explorer/#/">Block Explorer</Metalink>
            <Metalink className="big" button to="https://safe.trade/trading/aquabtc?aquawebsite">Trading at SafeTrade</Metalink>
            <Metalink className="big" button to="/learn/rpc">Guide: RPC</Metalink>
            <Metalink className="big" button to="/learn/contracts">Guide: Deploying Contracts</Metalink>

        </div >

        <div className="buttongroup narrow center" style={{ padding: "2rem" }}>
            <a target={"_blank"} rel={"noreferrer noorigin"} href="https://safe.trade/trading/aquabtc">
                <div style={{ textAlign: "center", margin: "2rem", border: "1px solid white" }}>
                    <img style={{}} src={process.env.PUBLIC_URL + "/icons/safetrade.svg"} alt=" " />
                </div>
                SafeTrade is the #1 place to trade AQUA/BTC
            </a>
            <a target={"_blank"} rel={"noreferrer noorigin"} href="https://www.coingecko.com/en/coins/aquachain">
                <div style={{ textAlign: "center", margin: "2rem", border: "1px solid white" }}>
                    <img style={{}} src={process.env.PUBLIC_URL + "/icons/coingecko-logo-white-ea42ded10e4d106e14227d48ea6140dc32214230aa82ef63d0499f9c1e109656.png"} alt=" " />
                </div>
                Add Aquachain to your CoinGecko watchlist
            </a>
        </div >
    </div >
}

const navstyle = { fontSize: "xx-large" }