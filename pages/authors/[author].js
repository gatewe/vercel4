import { MDXLayoutRenderer } from '@/components/MDXComponents'
import { getAllFilesFrontMatter, getFileBySlug, getFiles, formatSlug } from '@/lib/mdx'
import Tag from '@/components/Tag'
import Link from '@/components/Link'
import formatDate from '@/lib/utils/formatDate'

const MAX_DISPLAY = 5
const DEFAULT_LAYOUT = 'AuthorLayout'

export async function getStaticProps(context) {
  const { params } = context
  const authorDetails = await getFileBySlug('authors', params.author)
  const posts = await getAllFilesFrontMatter('blog')

  return { props: { posts: { posts, authorDetails } } }
}

export async function getStaticPaths() {
  const authors = getFiles('authors')
  return {
    paths: authors.map((author) => ({
      params: {
        author: formatSlug(author),
      },
    })),
    fallback: false,
  }
}

export default function Authors({ posts }) {
  const { mdxSource, frontMatter } = posts.authorDetails
  const { name } = frontMatter

  return (
    <>
      <div>
        <div>
          <MDXLayoutRenderer
            layout={frontMatter.layout || DEFAULT_LAYOUT}
            mdxSource={mdxSource}
            frontMatter={frontMatter}
          />
          <div className="pt-4 pb-4">
            <fieldset className="border-t border-gray-700">
              <legend className="ml-auto pl-4 text-xl font-bold leading-8 tracking-tight text-gray-900 dark:text-gray-100">
                Posts by {name.split(' ')[0]}
              </legend>
            </fieldset>
          </div>
          <ul>
            {!posts.posts.length && 'No posts found.'}
            {posts.posts.slice(0, MAX_DISPLAY).map((frontMatter) => {
              const { slug, date, title, summary, tags, authors } = frontMatter
              {
                if (authors?.includes(posts.authorDetails.frontMatter.slug) || false)
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
    </>
  )
}
