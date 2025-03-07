import { Container } from '@/components/Container'
import PostsContainer from '@/components/Posts/Container'
import Seo from '@/components/Seo'
import { Environment } from '@/lib/environment'
import { getAllFilesFrontMatter, getAllTags } from '@/lib/mdx'
import { slugify } from '@/lib/utils'
import { GetStaticPaths, GetStaticProps } from 'next'
import Link from 'next/link'
import * as React from 'react'

/**
 *
 * Renders a single post by tag and loads all content.
 *
 */

export default function Tag({ posts, tag }) {
  const meta = {
    title: `${Environment.ogTitle} - ${tag}`,
    description: `Topics, Discussions and Thoughts about ${tag}`,
  }

  return (
    <React.Fragment>
      <Seo data={meta} />
      <Container>
        <section className="mb-20 space-y-8">
          <h1>{tag}</h1>
          <p className="text-lg !leading-normal md:text-xl md:!leading-relaxed">
            Topics, guides and thoughts I wrote about <strong>{tag}</strong> or
            related to it.
          </p>
          <p className="text-right">
            <Link href="/writing" passHref>
              <a className="link-unstyled">Browse all Writing &rarr;</a>
            </Link>
          </p>
        </section>
        <PostsContainer href="/writing" posts={posts} />
      </Container>
    </React.Fragment>
  )
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const { revalidate } = Environment.isr
  let tag: string

  const allPosts = await getAllFilesFrontMatter('writing')

  const filteredPosts = allPosts.filter((post) =>
    post.tags.map((t: string) => slugify(t)).includes(params.tag)
  )

  if (filteredPosts.length) {
    tag = filteredPosts[0].tags.find((t: string) =>
      slugify(t).includes(params.tag as string)
    )
  }

  return {
    props: { posts: filteredPosts, tag: tag },
    revalidate: revalidate,
  }
}

export const getStaticPaths: GetStaticPaths = async () => {
  const { enable } = Environment.isr
  const { tagCount } = await getAllTags('writing')
  if (!Object.keys(tagCount).length) return { paths: [], fallback: enable }
  return {
    paths: Object.keys(tagCount).map((tag) => ({
      params: {
        tag,
      },
    })),
    fallback: 'blocking',
  }
}
