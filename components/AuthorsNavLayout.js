import Link from 'next/link'
import { useRouter } from 'next/router'

const ActiveLink = ({ children, href, className }) => {
  const router = useRouter()
  return (
    <Link href={href} scroll={false}>
      <a
        className={`${
          router.pathname === href
            ? 'inline-block rounded-t-lg border-b-2 border-primary-500 p-4 text-3xl font-medium leading-6 text-primary-500 hover:text-primary-600 dark:border-primary-300 dark:text-primary-300 dark:hover:text-primary-200'
            : 'inline-block rounded-t-lg border-b-2 border-transparent p-4 text-base font-medium leading-6 hover:border-gray-300 hover:text-gray-600 dark:hover:text-gray-300'
        } ${className} `}
      >
        {children}
      </a>
    </Link>
  )
}

const AuthorsNavLayout = ({ children }) => {
  return (
    <div>
      <div className="text-gray-400">Authors</div>
      <div className="border-b border-gray-300 pt-6 text-center text-sm font-medium text-gray-500 dark:border-gray-700 dark:text-gray-400">
        <ul className="-mb-px flex flex-wrap">
          <ActiveLink href="/authors/martinmacko" className="mr-2">
            Martin Macko
          </ActiveLink>

          <ActiveLink href="/authors/viktorducky">Viktor Ducky</ActiveLink>
        </ul>
      </div>
      <div>{children}</div>
    </div>
  )
}

export default AuthorsNavLayout
