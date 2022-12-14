import React from 'react'

export default function JokeGenarator() {
    return(
    <>  
    <div class="container">
        <h3>Don't laugh challenge</h3>
        <div id="joke" class="joke">
            // joke goes here
        </div>
        <button id="genarate_joke" class="inline-block rounded-lg bg-indigo-600 px-4 py-1.5 text-base font-semibold leading-7 text-white shadow-sm ring-1 ring-indigo-600 hover:bg-indigo-700 hover:ring-indigo-700">
            Next Joke
        </button>
    </div>
    </>
    )
}