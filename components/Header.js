import siteMetadata from '@/data/siteMetadata'
import headerNavLinks from '@/data/headerNavLinks'
import Logo from '@/data/logo.svg'
import Link from './Link'
import MobileNav from './MobileNav'
import ThemeSwitch from './ThemeSwitch'
import { useTheme } from 'next-themes'
import { useEffect, useState } from 'react'

export default function Header() {
  // const [mounted, setMounted] = useState(false)
  const { theme, resolvedTheme } = useTheme()
  const [logoColor, setLogoColor] = useState()

  // useEffect(() => setMounted(true), [])

  useEffect(() => {
    if (theme === 'dark' || resolvedTheme === 'dark') setLogoColor('fill-white')
    else setLogoColor('fill-black')
  }, [theme, resolvedTheme])

  return (
    <div className="flex flex-col justify-between">
      <header className="flex items-center justify-between py-10">
        <div>
          <Link href="/" aria-label={siteMetadata.headerTitle}>
            <div className="flex items-center justify-between">
              <div className="mr-3">
                {/* {mounted && (theme === 'dark' || resolvedTheme === 'dark') ? (
                <Logo className="fill-white" />
              ) : (
                <Logo className="fill-black" />
              )} */}
                <Logo className={logoColor} />
              </div>
              {typeof siteMetadata.headerTitle === 'string' ? (
                <div className="hidden h-6 text-2xl font-semibold sm:block">
                  {siteMetadata.headerTitle}
                </div>
              ) : (
                siteMetadata.headerTitle
              )}
            </div>
          </Link>
        </div>
        <div className="flex items-center text-base leading-5">
          <div className="hidden sm:block">
            {headerNavLinks.map((link) => (
              <Link
                key={link.title}
                href={link.href}
                className="p-1 font-medium text-gray-900 dark:text-gray-100 sm:p-4"
              >
                {link.title}
              </Link>
            ))}
          </div>
          <ThemeSwitch />
          <MobileNav />
        </div>
      </header>
    </div>
  )
}
