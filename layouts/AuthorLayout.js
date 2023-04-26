import SocialIcon from '@/components/social-icons'
import Image from '@/components/Image'
import { PageSEO } from '@/components/SEO'

export default function AuthorLayout({ children, frontMatter }) {
  const { name, avatar, occupation, company, email, twitter, linkedin, github } = frontMatter

  return (
    <>
      <PageSEO title={`About - ${name}`} description={`About me - ${name}`} />
      <div className="divide-y">
        <div className="flex-start space-y-2 xl:grid xl:grid-cols-5 xl:gap-x-8 xl:space-y-0 pt-8 pb-8">
          <div className="flex flex-col xl:col-span-2 mr-auto items-center">
            <Image
              src={avatar}
              alt="avatar"
              width="192px"
              height="192px"
              className="h-48 w-48 rounded-full"
            />
            <h3 className="pt-4 pb-2 text-2xl font-bold leading-8 tracking-tight">{name}</h3>
            <div className="text-gray-500 dark:text-gray-400">{occupation}</div>
            <div className="text-gray-500 dark:text-gray-400">{company}</div>
            <div className="flex space-x-3 pt-6">
              <SocialIcon kind="mail" href={`mailto:${email}`} />
              <SocialIcon kind="github" href={github} />
              <SocialIcon kind="linkedin" href={linkedin} />
              <SocialIcon kind="twitter" href={twitter} />
            </div>
          </div>
          {/* <div className="prose max-w-none pt-8 pb-8 dark:prose-dark xl:col-span-2">{children}</div> */}
          <div className="ml-5 pt-12 xl:ml-0 xl:mr-0 xl:pt-0 xl:translate-y-1/4 xl:-translate-x-1/3 xl:col-span-2">
            <blockquote className="relative">
              <svg
                class="absolute top-0 left-0 h-16 w-16 -translate-x-6 -translate-y-8 transform text-gray-100 dark:text-gray-700"
                width="24"
                height="27"
                viewBox="0 0 24 27"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                aria-hidden="true"
              >
                <path
                  d="M14.017 18L14.017 10.609C14.017 4.905 17.748 1.039 23 0L23.995 2.151C21.563 3.068 20 5.789 20 8H24V18H14.017ZM0 18V10.609C0 4.905 3.748 1.038 9 0L9.996 2.151C7.563 3.068 6 5.789 6 8H9.983L9.983 18L0 18Z"
                  fill="currentColor"
                />
              </svg>

              <div className="relative z-10">
                <span className="text-3xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl sm:leading-10 md:text-6xl md:leading-14">
                  I do research so you don't have to.
                </span>
              </div>
            </blockquote>
          </div>
        </div>
      </div>
    </>
  )
}
