import React, { useRef, useEffect } from 'react'

export default function Useref() {

    const inputelem = useRef("");

    const changestyle = () => {
        // inputelem.current.style.backgroundColor = "red"
        inputelem.current.focus()
    }
    useEffect(() => {
        inputelem.current.focus()

    })

    return (
        <>
            <input ref={inputelem} type="text" name="" id="" /> <br />
            <button onClick={changestyle}>Submit</button>
        </>
    )
}
