export default function Hero() {
  return (
    <div className="max-w h-[500px] overflow-hidden rounded-lg border border-gray-200 bg-opacity-0 bg-[url('/static/hackers-resized-min-light2.svg')] bg-bottom shadow-[0_0_12px_rgba(0,0,0,0.6)] shadow-fuchsia-400/20 dark:border-gray-700 dark:bg-[url('/static/hackers-resized-min-dark.svg')]">
      <div className="dark:bg-gray-700 bg-gray-600 pt-2 pb-2">
        <div className="position-absolute ml-4">
          <div className="mr-2 inline-block h-3 w-3 rounded-full bg-red-500"></div>
          <div className="mr-2 inline-block h-3 w-3 rounded-full bg-orange-500"></div>
          <div className="mr-2 inline-block h-3 w-3 rounded-full bg-green-500"></div>
        </div>
      </div>
      <div className="min-w-screen m-4 grid basis-full items-center justify-center">
        <div className="flex flex-col items-start justify-between xl:flex-row">
          <div className="flex flex-col text-4xl sm:text-5xl md:text-6xl">
            <span className="bg-gradient-to-r dark:from-purple-400 dark:to-pink-600  from-purple-300 to-pink-500 bg-clip-text font-semibold uppercase text-transparent">
              Welcome to Compaas!
            </span>
            <p className="text-white type-writer font-semibold uppercase">
              Scroll down to see latest cloud security blog posts
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
