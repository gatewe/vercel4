export default function Hero() {
  return (
    <div className="hero-bg max-w relative h-[500px] overflow-hidden rounded-lg border border-gray-200 shadow-[0_0_12px_rgba(0,0,0,0.6)] shadow-fuchsia-600/40 dark:border-gray-700 dark:shadow-fuchsia-400/20">
      <div className="relative bg-gray-600 pb-2 pt-2 dark:bg-gray-700">
        <div className="position-absolute ml-4">
          <div className="mr-2 inline-block h-3 w-3 rounded-full bg-red-500"></div>
          <div className="mr-2 inline-block h-3 w-3 rounded-full bg-orange-500"></div>
          <div className="mr-2 inline-block h-3 w-3 rounded-full bg-green-500"></div>
        </div>
      </div>
      <div className="relative">
        <div className="min-w-screen m-4 grid basis-full items-center justify-center">
          <div className="flex flex-col items-start justify-between xl:flex-row">
            <div className="flex flex-col text-4xl sm:text-5xl md:text-6xl">
              <span className="bg-gradient-to-r from-purple-400 to-pink-600  bg-clip-text font-semibold uppercase text-transparent dark:from-purple-400 dark:to-pink-600">
                Welcome to Compaas!
              </span>
              <p className="type-writer font-semibold uppercase text-white">
                Scroll down to see latest cloud security blog posts
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
