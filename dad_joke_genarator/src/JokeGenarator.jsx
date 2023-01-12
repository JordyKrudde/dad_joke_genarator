import React from "react";

export default function JokeGenarator({ joke, nextJoke }) {
  return (
    <>
      <div className="bg-teal-700 grid h-screen place-items-center">
        <div className="text-center drop-shadow-lg bg-white py-12 px-6 md:py-24 mx-2 rounded-xl">
          <h3 className="text-xl text-neutral-500">Joke genarator</h3>
          <div id="joke" className="text-2xl md:text-3xl my-4">
            <p>{joke}</p>
          </div>
          <button
            onClick={nextJoke}
            className="drop-shadow-md inline-block rounded-lg bg-indigo-600 px-4 py-1.5 mt-4 text-base font-semibold leading-7 text-white shadow-sm ring-1 ring-indigo-600 hover:bg-indigo-700 hover:ring-indigo-700"
          >
            Next Joke
          </button>
        </div>
      </div>
    </>
  );
}
