import dayjs from 'dayjs'
import Link from 'next/link'

export default function PostsList({ posts, href }) {
  if (!posts || posts.length === 0)
    return (
      <p className="flex flex-col mt-4 space-y-6 text-xl">
        There seems to be no posts at the moment. But let's not kid each other.
        I probably pushed something buggy.
      </p>
    )

  return (
    <div className="flex flex-col space-y-6">
      {posts.map((frontMatter) => (
        <div
          className="flex flex-col px-4 py-6 space-y-4 bg-white rounded-md shadow-cardHover dark:bg-gray-950"
          key={frontMatter.slug}
        >
          <p className="p-small">
            {`${dayjs(new Date(frontMatter.publishedAt)).format(
              'MMMM DD, YYYY'
            )}`}
          </p>
          <Link href={`${href}/${frontMatter.slug}`} passHref>
            <a>
              <h2 className="hover:underline text-heading-2">
                {frontMatter.title}
              </h2>
            </a>
          </Link>
          <div className="col-span-12 lg:col-span-8">
            <a
              href="#"
              className="inline-block px-2 py-1 mb-2 mr-1 text-xs font-bold text-white duration-300 bg-blue-500 rounded-full md:mr-2 md:px-4 "
            >
              Caching
            </a>
            <a
              href="#"
              className="inline-block px-2 py-1 mb-2 mr-1 text-xs font-bold text-white duration-300 bg-yellow-500 rounded-full md:mr-2 md:px-4 "
            >
              RabbitMQ
            </a>
            <a
              href="#"
              className="inline-block px-2 py-1 mb-2 mr-1 text-xs font-bold text-white duration-300 bg-red-500 rounded-full md:mr-2 md:px-4 "
            >
              Memcached
            </a>
            <a
              href="#"
              className="inline-block px-2 py-1 mb-2 mr-1 text-xs font-bold text-white duration-300 bg-blue-500 rounded-full md:mr-2 md:px-4"
            >
              Redis
            </a>
          </div>

          {frontMatter.description && (
            <p className="text-p-3">{frontMatter.description}</p>
          )}
          <Link href={`${href}/${frontMatter.slug}`} passHref>
            <a>
              <p className="text-base text-blue-500 dark:text-blue-400">
                Read more &rarr;
              </p>
            </a>
          </Link>
        </div>
      ))}
    </div>
  )
}
