import NextLink from '@/components/NextLink'
import NextImage from '@/components/NextImage'
import SvgGithub from '@/components/Icons/Github'

const Icons = {
  Github: SvgGithub,
}

const MDXCard = ({ title, url, icon, desc }) => (
  <a key={title} href={url} target="_blank" rel="noopener noreferrer">
    <div className="flex items-center p-2 my-8 border border-gray-400 rounded md:p-4 dark:border-gray-700">
      <div className="w-12 h-12 ml-0 mr-4">
        <span className="sr-only">{title}</span>
        {Icons[icon]({
          className: 'w-12 h-12  min-w-sm fill-svg',
        })}
      </div>
      <div>
        <h3 className="!mt-2 !mb-1 !text-lg md:!text-xl !leading-normal">
          {title}
        </h3>
        <p className="!mt-1 !mb-2  !font-normal md:!text-lg !leading-normal text-secondary clamp-5">
          {desc}
        </p>
      </div>
    </div>
  </a>
)
const MDXComponents = {
  Image: NextImage,
  a: NextLink,
  Card: MDXCard,
}

export default MDXComponents
