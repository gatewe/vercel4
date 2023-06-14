import Link from '@/components/Link'
import { getAllFilesFrontMatter } from '@/lib/mdx'

export async function getStaticProps() {
  const authors = await getAllFilesFrontMatter('authors')
  return { props: { authors } }
}

export default function Authors({ authors }) {
  return (
    <div className="flex flex-col items-start justify-start divide-y divide-gray-200 dark:divide-gray-700 md:mt-24 md:flex-row md:items-center md:justify-center md:space-x-6 md:divide-y-0">
      <div className="space-x-2 pb-8 pt-6 md:space-y-5">
        <h1 className="text-3xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl sm:leading-10 md:border-r-2 md:px-6 md:text-6xl md:leading-14">
          Authors
        </h1>
      </div>
      <div className="flex max-w-lg flex-wrap">
        <div className="mb-2 mr-5 mt-2">
          {authors.map((author) => (
            <Link
              key={author.slug}
              href={`/authors/${author.slug}`}
              className="mr-3 text-base font-medium text-primary-500 hover:text-primary-600 dark:text-primary-300 dark:hover:text-primary-200"
            >
              {author.name}
            </Link>
          ))}
        </div>
      </div>
    </div>
  )
}
