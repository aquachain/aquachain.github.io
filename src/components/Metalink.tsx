// Copyright 2022 The Aquachain Authors. All rights reserved.
// Use of this source code is governed by the MIT license

import { CSSProperties } from "react"
import { Link, NavLink } from "react-router-dom"

// metalink-react v0.0.1
//
// uses a, Link, or NavLink
//
// with optional button, className, style, ref
//
// usage examples:
// <Metalink button to="/foo" text="go to foo" />
// <Metalink button to="https://example.com" text="cool link" /> 
// <Metalink to="/foo" style={{color: "red"}} />
// <Metalink to="https://example.com"><MyCustomInnerElement /></Metalink>
//
export const Metalink: (props: {
    to: string, // this is the only required field if <Metalink>text here</Metalink>
    text?: string | JSX.Element, // required if no child components
    children?: any, // replaces text, ignored if button
    button?: boolean, // put a button in the link element
    nav?: boolean, // local links are nav button by default
    className?: string, // if button, only applied to button
    style?: CSSProperties, // if button, only applied to button
    ref?: any, // if button, only applied to button
    onClick?: () => void | undefined | null, // if button, only applied to button
}) => JSX.Element = ({ to, text = "<missing link text>", button: isBtn, children, style, className = "", ref, nav, onClick }) => {
    const isExternal = to.startsWith('http')
    if (isExternal) {
        className += " " + className + "-external-link external-link" // "big" -> "big big-external-link"
    }
    className += " metalink"
    const btn = !isBtn ? undefined : (
        <button
            ref={ref}
            onClick={onClick}
            className={className + " metalink-button"}
            style={style}
        >
            {children ?? text}
        </button>
    )
    if (isExternal) {
        return (
            <a
                href={to}
                style={isBtn ? undefined : style}
                className={isBtn ? "metalink metalink-buttonlink" : className}
                ref={isBtn ? undefined : ref}
                target="_blank"
                rel="noreferrer"
                onClick={isBtn ? undefined : onClick}
            >
                {btn ?? children ?? text}
            </a >
        )
    }
    // is not external.. lets scroll
    // use null to disable
    if (onClick === undefined) {
        onClick = () => { window.scrollTo(0, 0) }
    }
    if (nav !== false) {
        return (
            <NavLink
                to={to}
                style={isBtn ? undefined : style}
                className={isBtn ? undefined : className}
                ref={isBtn ? undefined : ref}
                onClick={isBtn ? undefined : onClick}
            >
                {btn ?? children ?? text}
            </NavLink >
        )
    }
    return (
        <Link
            to={to}
            style={isBtn ? undefined : style}
            className={isBtn ? undefined : className}
            ref={isBtn ? undefined : ref}
            onClick={isBtn ? undefined : onClick}
        >
            {btn ?? children ?? text}
        </Link >
    )
}