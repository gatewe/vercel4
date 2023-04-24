export default function Hero() {
  //  bg-white shadow dark:border-gray-700 dark:bg-gray-800 bg-gray-700 
  return (
    <div className="max-w overflow-hidden rounded-lg border border-gray-200 hover:shadow-[0_0_12px_rgba(0,0,0,0.6)] hover:shadow-fuchsia-400/20 dark:border-gray-700 bg-[url('/static/hackers-resized-min.svg')] bg-bottom bg-opacity-50 h-[500px]">
      <div className="bg-gray-700 pt-2 pb-2">
        <div className="position-absolute ml-4">
          <div className="mr-2 inline-block h-3 w-3 rounded-full bg-red-500"></div>
          <div className="mr-2 inline-block h-3 w-3 rounded-full bg-orange-500"></div>
          <div className="mr-2 inline-block h-3 w-3 rounded-full bg-green-500"></div>
        </div>
      </div>
      <div className="min-w-screen m-4 grid basis-full items-center justify-center">
        <div className="flex flex-col items-start justify-between xl:flex-row">
          <div className="flex flex-col text-5xl sm:text-6xl md:text-6xl">
            <span className="font-semibold uppercase text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">Welcome to Compaas!</span>
            <p className="type-writer font-semibold uppercase">Scroll down to see latest cloud security blog posts</p>
          </div>
          {/* <img
            width="450"
            height="800"
            className="ml-1 flex justify-self-end pt-4 xl:pt-0"
            src="/static/to_the_moon.svg"
            alt=""
          ></img> */}
        </div>
      </div>
    </div>
  )
}
