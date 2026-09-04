"use client"
import React from "react"

export default function Error({error,reset})
{
    return(

        <>
        <h1> Global ErrorSomething went wrong!</h1>
        <p>{error.message}</p>
        <button onClick={()=> result()}>Try Again</button>
        </>
    )
}