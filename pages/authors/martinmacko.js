import { MDXLayoutRenderer } from '@/components/MDXComponents'
import { getAllFilesFrontMatter, getFileBySlug } from '@/lib/mdx'
import Tag from '@/components/Tag'
import Link from '@/components/Link'
import formatDate from '@/lib/utils/formatDate'
import { useEffect } from 'react'
import { useRouter } from 'next/router'
import AuthorsNavLayout from '@/components/AuthorsNavLayout'

const MAX_DISPLAY = 5
const DEFAULT_LAYOUT = 'AuthorLayout'

export async function getStaticProps() {
  const authorDetails = await getFileBySlug('authors', ['default'])
  const posts = await getAllFilesFrontMatter('blog')

  return { props: { authorDetails, posts } }
}

export default function MartinMacko({ authorDetails, posts }) {
  const { mdxSource, frontMatter } = authorDetails

  return (
    <>
      {/* <AuthorsNavLayout> */}
      <div>
        <div>
          <MDXLayoutRenderer
            layout={frontMatter.layout || DEFAULT_LAYOUT}
            mdxSource={mdxSource}
            frontMatter={frontMatter}
          />
          {/* <div className="text-base font-medium leading-6 text-gray-500 dark:text-gray-400 pt-8 pb-4">Posts by Martin</div> */}
          <div className="pt-4 pb-4">
            <fieldset class="border-t border-gray-700">
              <legend class="ml-auto pl-4 text-xl font-bold leading-8 tracking-tight text-gray-900 dark:text-gray-100">
                Posts by Martin
              </legend>
            </fieldset>
          </div>
          <ul>
            {!posts.length && 'No posts found.'}
            {posts.slice(0, MAX_DISPLAY).map((frontMatter) => {
              const { category, slug, date, title, summary, tags } = frontMatter
              if (category == 'Azure security') {
                return (
                  <li key={slug} className="py-4">
                    <article className="space-y-2 xl:grid xl:grid-cols-4 xl:items-baseline xl:space-y-0">
                      <dl>
                        <dt className="sr-only">Published on</dt>
                        <dd className="text-base font-medium leading-6 text-gray-500 dark:text-gray-400">
                          <time dateTime={date}>{formatDate(date)}</time>
                        </dd>
                      </dl>
                      <div className="space-y-3 xl:col-span-3">
                        <div>
                          <h3 className="text-2xl font-bold leading-8 tracking-tight">
                            <Link
                              href={`/blog/${slug}`}
                              className="text-gray-900 dark:text-gray-100"
                            >
                              {title}
                            </Link>
                          </h3>
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
                    </article>
                  </li>
                )
              }
            })}
          </ul>
        </div>
      </div>
      {/* </AuthorsNavLayout> */}
    </>
  )
}
