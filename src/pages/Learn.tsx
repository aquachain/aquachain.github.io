// Copyright 2022 The Aquachain Authors. All rights reserved.
// Use of this source code is governed by the MIT license

import { useEffect } from "react";
import { useParams } from "react-router-dom"
import { MarkdownRunner } from "../components/MarkdownRunner"
import { Metalink } from "../components/Metalink";

const Docbuttons = () => {
    return (
        <div>
            {[
                ["docs home", "/learn/readme"],
                ["mining aqua", "/learn/mining"],
                ["working with contracts", "/learn/contracts"],
                ["compiling aquachain", "/learn/compile"],
                ["user guide", "/learn/user-guide"],
                ["node operator guide", "/learn/rpc"],
                ["pool guide", "/learn/pool"],
            ].map((x, i) =>
                <div style={{ display: "inline" }} key={`${x}.${i}`} className="docnav"><Metalink button to={x[1]}>{x[0]}</Metalink></div>
            )
            }
        </div>
    )
}
const aliases: { [key: string]: string | undefined } = {
    "mining": "user-mining-guide/Mining",
    "contracts": "user-guide/Smart-Contracts",
    "compile": "user-guide/Compiling",
    "index": "readme",
    "README": "readme",
    "README.md": "readme",
    "rpc": "node-operator-guide"
}
const learnPages: { [key: string]: string | undefined } = {
    "wallets": `

## Wallets

https://frame.sh (Desktop)

https://metamask.io/ (Browser Extension)

https://download.mycrypto.com (Desktop, creates mnemonic phrases)

https://walleth.org (Android, burner accounts etc)
`,

    "node-operator-guide": `
  * [Console Cheatsheet](/node-operator-guide/ConsoleCheatcheat) 
  * [Full Node](/node-operator-guide/FullNode)
  * [How to Public RPC](/node-operator-guide/how-to-public-rpc)
  * [Aquachain Node Basics](/node-operator-guide/Node-Basics)
    `,
    "user-mining-guide": `
[Mining](/user-mining-guide/Mining) 

    `,
    "building": `

## Building

under construction, check back later

see [contracts](contracts)
`,
    "user-guide": `
  * [Compiling](/user-guide/Compiling.md)
  * [Metamask](/user-guide/Metamask.md)
  * [Smart-Contracts](/user-guide/Smart-Contracts.md)
  * [Storage](/user-guide/Storage.md)
  * [Wallet](/user-guide/Wallet.md)
  * [Ways-Acquiring](/user-guide/Ways-Acquiring.md)
  * [Whitepaper](/user-guide/Whitepaper.md)
  * [code-of-conduct](/user-guide/code-of-conduct.md)
    
`
}
const getSourceURL = (spl: string) => {
    switch (spl) {
        case "readme":
            return "https://raw.githubusercontent.com/aquachain/aquachain/master/README.md";
        case "pool":
            return "https://raw.githubusercontent.com/aquachain/open-aquachain-pool/master/docs/TUTORIAL.md";
        default:
            return "https://raw.githubusercontent.com/aquachain/aquachain/master/Documentation/" + spl + ".md"
    }
}
const getEditURL = (spl: string) => {
    if (!spl) {
        return "https://github.com/aquachain/aquachain.github.io"
    }
    if (spl == "pool") {
        return "https://github.com/aquachain/open-aquachain-pool/blob/master/docs/TUTORIAL.md"
    }
    return "https://gitlab.com/aquachain/aquachain/blob/master/" + (spl == "readme" ? "README.md" : "Documentation/" + spl + ".md")
}
const platformName = (s: string) => {
    if (s.includes("github")) {
        return "github"
    }

    if (s.includes("gitlab")) {
        return "gitlab"
    }
    return "unknown platform"

}
export const DocumentationPage = () => {
    const params = useParams();
    let spl = params["*"] ?? "index";
    useEffect(() => {

    }, [spl, window.location.hash])
    if (spl?.endsWith('.md')) {
        spl = spl.slice(0, -3)
    }
    if (spl?.endsWith('/')) {
        spl = spl.slice(0, -1)
    }
    spl = spl.replaceAll("../", "")
    spl = aliases[spl] ?? spl
    const raw = learnPages[spl]
    const src = !!raw ? "" : getSourceURL(spl) // == "readme"
    const editLink = getEditURL(!!raw ? "" : spl)
    const ac = (!!raw || spl == "readme" || spl == "pool") ? undefined : "https://aquachain.github.io/docs/" + spl + "/"
    return (
        <div className="container">
            <Docbuttons />
            <div className="container">
                <div id="breadcrumb">

                    <span>learn://</span>
                    <b>
                        {spl.split("/").map((x, i, a) => {
                            const link = (process.env.PUBLIC_URL + '/learn/' + (a.slice(0, i + 1).join("/"))).replace("//", "/")
                            return (<span key={x}><Metalink to={link}>{x}</Metalink>{(i != a.length - 1 ? "/" : "")}</span>)
                        })}
                    </b>
                    {" "}
                    {(!raw || spl == "readme") && <span>
                        [edit/view&nbsp;on&nbsp;<Metalink to={editLink}>{platformName(editLink)}]</Metalink>
                    </span>}
                    {(!ac) ? null : (<span className=""> [view&nbsp;on&nbsp;<Metalink to={ac}>docs&nbsp;page]</Metalink></span>)}{" "}
                    {!!editLink && (

                        <span className="" style={{ display: "inline", wordBreak: "keep-all", fontSize: "small", color: "#00FFDD" }}>
                            <br /> You&nbsp;are&nbsp;invited to&nbsp;help&nbsp;improve&nbsp;Aquachain&nbsp;documentation! <Metalink to={editLink}>Send&nbsp;a&nbsp;pull&nbsp;request.</Metalink>
                        </span>
                    )}
                </div>
                <hr />
                <MarkdownRunner src={src} text={raw} urlPrefix={process.env.PUBLIC_URL + "#/learn/"} />
                {!!raw && ac && <span className="small">
                    <p>this page was generated on-the-fly (in your browser) using the <Metalink to={editLink}>latest documentation</Metalink>,
                        but may be easier to browse on the actual documentation website:<br />
                        Check it out: <Metalink to={ac}>{ac}</Metalink></p>
                </span>}
                <div className="buttongroup linktree">
                    <Metalink button to="/learn/contracts">guide: contracts</Metalink>
                    <Metalink button to="/learn/rpc">guides: rpc</Metalink>
                    <Metalink button to="/learn/mining">guide: mining</Metalink>
                    <Metalink button to="/learn/building">building on aquachain</Metalink>
                    <Metalink button to="/learn/compile">compiling from source</Metalink>
                </div>
            </div >
        </div >
    )
}