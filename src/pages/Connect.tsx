// Copyright 2022 The Aquachain Authors. All rights reserved.
// Use of this source code is governed by the MIT license

import { useState } from "react";
import { switchNetwork, watchAsset } from "../utils/wallet"

const aquaChainID = 61717561;
export const ConnectPage = () => {
    const [err, setErr] = useState<string>()
    const [message, setMessage] = useState<string>()
    const [going, setGoing] = useState(false)
    return <div className="container">
        {!!err && <div style={{ color: "red" }} >
            {err}
        </div>}
        {!!message && <div style={{ color: "green" }} >
            {message}
        </div>}
        <p>These buttons connect to your web3 wallet (such as metamask or frame), and don't cost any gas.
            You will be prompted by your wallet after you click the button.
            If the prompt is be hidden, you will need to click the browser extension to reveal the popup.</p>
        {going && <p className="bgcyan">Request is pending, check your wallet!</p>}
        <div style={{ flex: "flexbox" }}>
            <div className="box" style={{ display: "flex", flexDirection: "column" }}>
                <div><button onClick={async () => {
                    setGoing(true)
                    switchNetwork(aquaChainID).catch((e) => {
                        setErr(`${e.reason ?? e.message ?? e}`)
                        setMessage(undefined)
                        setGoing(false)
                    }).then(() => {
                        setErr(undefined)
                        setMessage("successfully added network")
                        setGoing(false)
                    })
                }}>add aquachain network</button> to web3 wallet</div>
                <div><button onClick={async () => {
                    console.log("switch network")
                    setGoing(true)
                    let ok = await switchNetwork(aquaChainID).catch((e) => {
                        setErr(`${e.reason ?? e.message ?? e}`)
                        setMessage(undefined)
                        setGoing(false)
                        return false
                    }).then(() => {
                        console.log("add asset")
                        setErr(undefined)
                        setGoing(false)
                        return true
                    })
                    if (!ok) {
                        console.log("skipping add asset, no network")
                        setGoing(false)
                        return
                    }
                    console.log("add asset")
                    setGoing(true)
                    setErr(undefined)
                    ok = await watchAsset("0xC387a0577a8B15FE5b9e007F48e933E41E95B321", "WAQUA", 18, "https://aquachain.github.io/aqua-icon-200.png", aquaChainID)
                        .catch((e) => {
                            setErr(`${e.reason ?? e.message ?? e}`)
                            setMessage(undefined)
                            setGoing(false)
                            return false
                        })
                    if (ok) {
                        setErr(undefined)
                        setMessage("successfully added WAQUA")
                        setGoing(false)
                    }
                }
                }>add Wrapped Aqua</button> to web3 wallet (Aquachain network)</div>
                <div><button onClick={async () => {
                    console.log("switch network")
                    let ok: boolean = await switchNetwork(56).catch((e) => {
                        setErr(`${e.reason ?? e.message ?? e}`)
                        setMessage(undefined)
                        return false
                    }).then(() => {
                        console.log("add asset")
                        setErr(undefined)
                        return true
                    })
                    if (!ok) {
                        return
                    }
                    ok = await watchAsset("0x38FAB266089AAf3BC2F11B791213840Ea3D587C7", "AQUA", 18, "https://aquachain.github.io/aqua-icon-200.png", 56)
                        .catch((e) => {
                            setErr(`${e.reason ?? e.message ?? e}`)
                            setMessage(undefined)
                            return false
                        })
                    if (ok) {

                        setErr(undefined)
                        setMessage("successfully added WAQUA")
                    }
                }
                }>add BEP20 Aqua</button> to web3 wallet (BSC network)</div>
            </div>
        </div>
    </div >
}