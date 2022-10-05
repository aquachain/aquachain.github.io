// Copyright 2022 The Aquachain Authors. All rights reserved.
// Use of this source code is governed by the MIT license

import { useEffect, useState } from "react"
import ReactMarkdown from 'react-markdown'
import remarkGfm from 'remark-gfm' // gfm
export const MarkdownRunner: React.FC<{ src: string, text?: string, urlPrefix?: string }> = ({ src, urlPrefix = "", text }) => {
    const [data, setData] = useState<string | undefined>()
    const [err, setErr] = useState<string>()

    useEffect(() => {
        if (!!text) {
            setData(text)
        }
        if (!!!text && src && src.startsWith("http")) {
            fetch(src)
                .then((resp) => resp.text().then((txt) => {
                    setData(txt)
                }))
                .catch((e) => {
                    console.error("[markdown] fetch error", e)
                    setErr(`${e.reason ?? e.message ?? e}`)
                })
        }
    }, [src, text])
    if (err) {
        return <p>markdown error: {err}</p>
    }
    if (!data) {
        return <p>loading markdown</p>
    }
    if (!data) {
        return <p>loading markdown</p>
    }
    window.scrollTo(0, 0)
    return <ReactMarkdown className="markdown" transformLinkUri={(
        href: string,
        children: any,
        title: string | null
    ): string => {
        return href.startsWith("http") ? href : urlPrefix + href
    }} children={data} remarkPlugins={[remarkGfm]} />
}