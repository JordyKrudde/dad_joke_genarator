import React from 'react'

export default function JokeGenarator() {
    return(
    <>  
    <div className='bg-slate-500 grid h-screen place-items-center'>
        <div className='text-center bg-white py-12 px-24 rounded-xl'>
            <h3 className='text-3xl'>Dad joke JokeGenarator</h3>
            <div id="joke" class="text-3xl my-4">
                // joke goes here
            </div>
            <button id="genarate_joke" class="inline-block rounded-lg bg-indigo-600 px-4 py-1.5 mt-4 text-base font-semibold leading-7 text-white shadow-sm ring-1 ring-indigo-600 hover:bg-indigo-700 hover:ring-indigo-700">
                Next Joke
            </button>
        </div>
    </div>
    </>
    )
}