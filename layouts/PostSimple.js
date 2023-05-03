import Link from '@/components/Link'
import PageTitle from '@/components/PageTitle'
import SectionContainer from '@/components/SectionContainer'
import { BlogSEO } from '@/components/SEO'
import Image from '@/components/Image'
import Tag from '@/components/Tag'
import siteMetadata from '@/data/siteMetadata'
import formatDate from '@/lib/utils/formatDate'
import Comments from '@/components/comments'
import ScrollTopAndComment from '@/components/ScrollTopAndComment'

const editUrl = (fileName) => `${siteMetadata.siteRepo}/blob/master/data/blog/${fileName}`
const discussUrl = (slug) =>
  `https://mobile.twitter.com/search?q=${encodeURIComponent(
    `${siteMetadata.siteUrl}/blog/${slug}`
  )}`

const postDateTemplate = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' }

export default function PostLayout({ frontMatter, authorDetails, next, prev, children }) {
  const { slug, fileName, date, title, tags } = frontMatter
  // bg-[#41BAEC] dark:bg-[#bc6223]
  // bg-[radial-gradient(ellipse_at_bottom_left,_var(--tw-gradient-stops))] from-cyan-500 to-violet-300
  //bg-[url('/static/rocket.svg')]
  return (
    <SectionContainer>
      <BlogSEO url={`${siteMetadata.siteUrl}/blog/${frontMatter.slug}`} {...frontMatter} />
      <ScrollTopAndComment />
      <article>
        <div>
          <header className="relative">
            <div className="h-60 w-full rounded-lg bg-gradient-to-br from-[#cc6b8e] via-[#f18271] to-[#f3a469]">
              <div className="absolute bottom-0 left-0 space-y-1 p-6 text-left">
                <div>
                  <PageTitle>{title}</PageTitle>
                </div>
                <dl className="space-y-10">
                  <div className="relative">
                    <dt className="sr-only">Published on</dt>
                    <dd className="text-base font-medium leading-6 text-gray-100 dark:text-gray-900">
                      {/* <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="float-left h-6 w-6"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth={2}
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                        />
                      </svg> */}
                      <svg className="float-left" width="24px" height="24px" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg"><path d="M106.666667 810.666667V298.666667h810.666666v512c0 46.933333-38.4 85.333333-85.333333 85.333333H192c-46.933333 0-85.333333-38.4-85.333333-85.333333z" fill="#CFD8DC" /><path d="M917.333333 213.333333v128H106.666667v-128c0-46.933333 38.4-85.333333 85.333333-85.333333h640c46.933333 0 85.333333 38.4 85.333333 85.333333z" fill="#F44336" /><path d="M704 213.333333m-64 0a64 64 0 1 0 128 0 64 64 0 1 0-128 0Z" fill="#B71C1C" /><path d="M320 213.333333m-64 0a64 64 0 1 0 128 0 64 64 0 1 0-128 0Z" fill="#B71C1C" /><path d="M704 64c-23.466667 0-42.666667 19.2-42.666667 42.666667v106.666666c0 23.466667 19.2 42.666667 42.666667 42.666667s42.666667-19.2 42.666667-42.666667V106.666667c0-23.466667-19.2-42.666667-42.666667-42.666667zM320 64c-23.466667 0-42.666667 19.2-42.666667 42.666667v106.666666c0 23.466667 19.2 42.666667 42.666667 42.666667s42.666667-19.2 42.666667-42.666667V106.666667c0-23.466667-19.2-42.666667-42.666667-42.666667z" fill="#B0BEC5" /><path d="M277.333333 426.666667h85.333334v85.333333h-85.333334zM405.333333 426.666667h85.333334v85.333333h-85.333334zM533.333333 426.666667h85.333334v85.333333h-85.333334zM661.333333 426.666667h85.333334v85.333333h-85.333334zM277.333333 554.666667h85.333334v85.333333h-85.333334zM405.333333 554.666667h85.333334v85.333333h-85.333334zM533.333333 554.666667h85.333334v85.333333h-85.333334zM661.333333 554.666667h85.333334v85.333333h-85.333334zM277.333333 682.666667h85.333334v85.333333h-85.333334zM405.333333 682.666667h85.333334v85.333333h-85.333334zM533.333333 682.666667h85.333334v85.333333h-85.333334zM661.333333 682.666667h85.333334v85.333333h-85.333334z" fill="#90A4AE" /></svg>
                      <time className="font-bold" dateTime={date}>&nbsp;{formatDate(date)}</time>
                    </dd>
                  </div>
                </dl>
              </div>
            </div>
          </header>
          <div
            className="divide-y divide-gray-200 pb-8 dark:divide-gray-700 xl:grid xl:grid-cols-4 xl:gap-x-6 xl:divide-y-0"
            style={{ gridTemplateRows: 'auto 1fr' }}
          >
            <dl className="pt-6 pb-10 xl:border-b xl:border-gray-200 xl:pt-11 xl:dark:border-gray-700">
              <dt className="sr-only">Authors</dt>
              <dd>
                <ul className="flex justify-center space-x-8 sm:space-x-12 xl:block xl:space-x-0 xl:space-y-8">
                  {authorDetails.map((author) => (
                    <li className="flex items-center space-x-2" key={author.name}>
                      {author.avatar && (
                        <Image
                          src={author.avatar}
                          width="38px"
                          height="38px"
                          alt="avatar"
                          className="h-10 w-10 rounded-full"
                        />
                      )}
                      <dl className="whitespace-nowrap text-sm font-medium leading-5">
                        <dt className="sr-only">Name</dt>
                        <dd className="text-gray-900 dark:text-gray-100">{author.name}</dd>
                        <dt className="sr-only">Twitter</dt>
                        <dd>
                          {author.twitter && (
                            <Link
                              href={author.twitter}
                              className="text-primary-500 hover:text-primary-600 dark:text-primary-300 dark:hover:text-primary-200"
                            >
                              {author.twitter.replace('https://twitter.com/', '@')}
                            </Link>
                          )}
                        </dd>
                      </dl>
                    </li>
                  ))}
                </ul>
              </dd>
            </dl>
            <div className="divide-y divide-gray-200 dark:divide-gray-700 xl:col-span-3 xl:row-span-2 xl:pb-0">
              <div className="prose max-w-none pt-10 pb-8 dark:prose-dark">{children}</div>
              <div className="pt-6 pb-6 text-sm text-gray-700 dark:text-gray-300">
                <Link href={discussUrl(slug)} rel="nofollow">
                  {'Discuss on Twitter'}
                </Link>
                {` • `}
                <Link href={editUrl(fileName)}>{'View on GitHub'}</Link>
              </div>
              <Comments frontMatter={frontMatter} />
            </div>
            <footer>
              <div className="divide-gray-200 text-sm font-medium leading-5 dark:divide-gray-700 xl:col-start-1 xl:row-start-2 xl:divide-y">
                {tags && (
                  <div className="py-4 xl:py-8">
                    <h2 className="text-xs uppercase tracking-wide text-gray-500 dark:text-gray-400">
                      Tags
                    </h2>
                    <div className="flex flex-wrap">
                      {tags.map((tag) => (
                        <Tag key={tag} text={tag} />
                      ))}
                    </div>
                  </div>
                )}
                {(next || prev) && (
                  <div className="flex justify-between py-4 xl:block xl:space-y-8 xl:py-8">
                    {prev && (
                      <div>
                        <h2 className="text-xs uppercase tracking-wide text-gray-500 dark:text-gray-400">
                          Previous Article
                        </h2>
                        <div className="text-primary-500 hover:text-primary-600 dark:text-primary-300 dark:hover:text-primary-200">
                          <Link href={`/blog/${prev.slug}`}>{prev.title}</Link>
                        </div>
                      </div>
                    )}
                    {next && (
                      <div>
                        <h2 className="text-xs uppercase tracking-wide text-gray-500 dark:text-gray-400">
                          Next Article
                        </h2>
                        <div className="text-primary-500 hover:text-primary-600 dark:text-primary-300 dark:hover:text-primary-200">
                          <Link href={`/blog/${next.slug}`}>{next.title}</Link>
                        </div>
                      </div>
                    )}
                  </div>
                )}
              </div>
              <div className="pt-4 xl:pt-8">
                <Link
                  href="/blog"
                  className="text-primary-500 hover:text-primary-600 dark:text-primary-300 dark:hover:text-primary-200"
                >
                  &larr; Back to the blog
                </Link>
              </div>
            </footer>
          </div>
        </div>
      </article>
    </SectionContainer>
  )
}
