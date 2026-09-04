"use client"
import React from "react"

export default function Error({error,reset}){
    return(
        <div>

            <p>Error Of About Route
                {error.message}
            </p>
            <button onClick={reset}>Try again</button>
        </div>
    )
}