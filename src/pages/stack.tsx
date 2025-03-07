import MDXComponents from '@/components/MDXComponents'
import Post from '@/components/Posts/Post'
import { Environment } from '@/lib/environment'
import { getFileBySlug } from '@/lib/mdx'
import { GetStaticProps } from 'next'
import { MDXRemote } from 'next-mdx-remote'

function Stack({ mdxSource, frontMatter }) {
  return (
    <Post frontMatter={frontMatter}>
      <MDXRemote {...mdxSource} components={MDXComponents} />
    </Post>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  const post = await getFileBySlug('stack')
  const { revalidate } = Environment.isr
  return { props: post, revalidate: revalidate }
}

export default Stack
