import { MDXLayoutRenderer } from '@/components/MDXComponents'
import { getAllFilesFrontMatter, getFileBySlug, getFiles, formatSlug } from '@/lib/mdx'
import Tag from '@/components/Tag'
import Link from '@/components/Link'
import formatDate from '@/lib/utils/formatDate'
import React, { useState } from 'react'

const MAX_DISPLAY = 4
const DEFAULT_LAYOUT = 'AuthorLayout'

export async function getStaticProps(context) {
  const { params } = context

  const authorDetails = await getFileBySlug('authors', params.author)
  const allPosts = await getAllFilesFrontMatter('blog')

  const posts = allPosts.filter((post) => post.authors?.includes(params.author))

  return { props: { posts, authorDetails } }
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

export default function Authors({ posts, authorDetails }) {
  const { mdxSource, frontMatter } = authorDetails
  const { name } = frontMatter
  const [pages, setPages] = useState({
    totalPages: Math.ceil(posts.length / MAX_DISPLAY),
    pageNumber: 0,
    count: 0,
  })

  return (
    <>
      <div>
        <div>
          <MDXLayoutRenderer
            layout={frontMatter.layout || DEFAULT_LAYOUT}
            mdxSource={mdxSource}
            frontMatter={frontMatter}
          />
          <div className="pb-4 pt-4">
            <fieldset className="border-t border-gray-700">
              <legend className="ml-auto pl-4 text-xl font-bold leading-8 tracking-tight text-gray-900 dark:text-gray-100">
                Posts by {name.split(' ')[0]}
              </legend>
            </fieldset>
          </div>
          <ul>
            {!posts.length && 'No posts found.'}
            {posts.slice(pages.count, pages.count + MAX_DISPLAY).map((frontMatter) => {
              const { slug, date, title, summary, tags } = frontMatter

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
                          <Link href={`/blog/${slug}`} className="text-gray-900 dark:text-gray-100">
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
            })}
            {posts.length > 0 && (
              <div className="space-y-2 pb-8 pt-6 md:space-y-5">
                <nav className="flex justify-between">
                  {
                    <button
                      className="disabled:cursor-auto disabled:opacity-50"
                      disabled={pages.pageNumber === 0}
                      onClick={() =>
                        setPages({
                          ...pages,
                          pageNumber: pages.pageNumber - 1,
                          count: pages.count - MAX_DISPLAY,
                        })
                      }
                    >
                      Previous
                    </button>
                  }
                  <span>
                    {pages.pageNumber + 1} of {pages.totalPages}
                  </span>
                  {
                    <button
                      className="disabled:cursor-auto disabled:opacity-50"
                      disabled={pages.pageNumber === pages.totalPages - 1}
                      onClick={() =>
                        setPages({
                          ...pages,
                          pageNumber: pages.pageNumber + 1,
                          count: pages.count + MAX_DISPLAY,
                        })
                      }
                    >
                      Next
                    </button>
                  }
                </nav>
              </div>
            )}
          </ul>
        </div>
      </div>
    </>
  )
}
