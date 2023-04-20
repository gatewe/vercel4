import Link from '@/components/Link'
import { PageSEO } from '@/components/SEO'
import Tag from '@/components/Tag'
import siteMetadata from '@/data/siteMetadata'
import { getAllFilesFrontMatter } from '@/lib/mdx'
import formatDate from '@/lib/utils/formatDate'
import Hero from '@/components/Hero'
import HomeWrapper from '@/components/HomeWrapper'
import Header from '@/components/Header'
import SectionContainer from '@/components/SectionContainer'

import NewsletterForm from '@/components/NewsletterForm'

const MAX_DISPLAY = 5

export async function getStaticProps() {
  const posts = await getAllFilesFrontMatter('blog')

  return { props: { posts } }
}

export default function Authorposts({ posts }) {
  return (
    <>
      <PageSEO title={siteMetadata.title} description={siteMetadata.description} />
      <div className="divide-y divide-gray-200 dark:divide-gray-700">
        <ul className="divide-y divide-gray-200 dark:divide-gray-700">
          {!posts.length && 'No posts found.'}
          {posts.slice(0, MAX_DISPLAY).map((frontMatter) => {
            const { slug, date, title, summary, tags, author, category } = frontMatter
            if (author == 'Martin Macko') {
              return (
                <li key={slug} className="py-12">
                  <article>
                    <div className="space-y-2 xl:grid xl:grid-cols-4 xl:items-baseline xl:space-y-0">
                      <dl>
                        <dt className="sr-only">Published on</dt>
                        <dd className="flex items-center justify-between text-base font-medium leading-6 text-gray-500 dark:text-gray-400">
                          {/* <span className="text-signature px-2.5 py-0.5 rounded-full dark:text-signature border border-signature mt-2">Azure security</span> 
                          <div className="overflow-hidden p-0.5 rounded-full bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500">
                            <span className="text-signature px-2.5 py-0.5 rounded-full bg-white dark:bg-gray-900">Azure security</span>
                           </div> */}
                          <span className="gradient-border-bg-white dark:gradient-border-bg-dark text-sm font-semibold text-signature">
                            {category}
                          </span>
                        </dd>
                      </dl>
                      <div className="space-y-5 xl:col-span-3">
                        <div className="space-y-6">
                          <div>
                            <h2 className="text-2xl font-bold leading-8 tracking-tight">
                              <Link
                                href={`/blog/${slug}`}
                                className="text-gray-900 dark:text-gray-100"
                              >
                                {title}
                              </Link>
                            </h2>
                            <div className="flex flex-wrap">
                              {tags.map((tag) => (
                                <Tag key={tag} text={tag} />
                              ))}
                            </div>
                          </div>
                          <div className="prose max-w-none text-gray-500 dark:text-gray-400">
                            {summary}
                          </div>
                        </div>
                        <div className="flex items-center text-base font-semibold font-medium leading-6">
                          <Link
                            href={`/blog/${slug}`}
                            className="mr-2 text-gray-900 dark:text-gray-100"
                            aria-label={`Read "${title}"`}
                          >
                            {author}
                          </Link>
                          <time className="text-gray-500 dark:text-gray-400" dateTime={date}>
                            {formatDate(date)}
                          </time>
                        </div>
                      </div>
                    </div>
                  </article>
                </li>
              )
            }
          })}
        </ul>
      </div>
    </>
  )
}
