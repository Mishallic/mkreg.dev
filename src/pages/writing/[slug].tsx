import FullscreenLoading from '@/components/FullscreenLoading'
import Page from '@/components/Page'
import PostContainer from '@/components/Writing/Post'
import { Environment } from '@/environment'
import {
  getAllPosts,
  getPostBySlug,
  GhostPostOrPage,
  GhostPostsOrPages,
} from '@/ghost/api'
import { collections } from '@/ghost/collections'
import { resolveUrl } from '@/ghost/resolve-url'
import { useRouter } from 'next/router'
import React from 'react'

/**
 *
 * Renders a single post and loads all content.
 *
 */

interface PostProps {
  data: GhostPostOrPage
}

export default function Post({ data }: PostProps) {
  const router = useRouter()
  if (router.isFallback) return <FullscreenLoading />
  return (
    <Page>
      <PostContainer post={data} />
    </Page>
  )
}

export async function getStaticProps({ params: { slug } }) {
  const post = await getPostBySlug(slug)
  if (!post) {
    return {
      notFound: true,
    }
  }
  const { revalidate } = Environment.isr
  return {
    props: {
      data: post,
    },
    revalidate: revalidate,
  }
}

export async function getStaticPaths() {
  const { enable } = Environment.isr
  const posts = await getAllPosts()
  if (!posts.length) return { paths: [], fallback: enable }
  const apiUrl = Environment.ghostAPIUrl

  const postRoutes = (posts as GhostPostsOrPages).map((post) => {
    const collectionPath = collections.getCollectionByNode(post)
    const { slug, url } = post
    return resolveUrl({ apiUrl, collectionPath, slug, url })
  })

  const paths = [...postRoutes]
  return {
    paths,
    fallback: enable,
  }
}
