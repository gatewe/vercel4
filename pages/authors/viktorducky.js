import { MDXLayoutRenderer } from '@/components/MDXComponents'
import { getAllFilesFrontMatter, getFileBySlug } from '@/lib/mdx'
import Tag from '@/components/Tag'
import Link from '@/components/Link'
import formatDate from '@/lib/utils/formatDate'
import AuthorsNavLayout from '@/components/AuthorsNavLayout'

const MAX_DISPLAY = 5
const DEFAULT_LAYOUT = 'AuthorLayout'

export async function getStaticProps() {
  const authorDetails = await getFileBySlug('authors', ['sparrowhawk'])
  const posts = await getAllFilesFrontMatter('blog')

  return { props: { authorDetails, posts } }
}

export default function About({ authorDetails, posts }) {
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
            <div className="ml-auto pb-4 xl:pt-8 text-base font-medium leading-6 text-gray-500 dark:text-gray-400">Posts by Viktor</div>
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
