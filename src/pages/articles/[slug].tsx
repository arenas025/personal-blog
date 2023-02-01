import { getFileBySlug, getFiles } from '@/lib/mdx'
import { MDXRemote } from 'next-mdx-remote'
import MDXComponents from '@/components/MDXComponents'
import { useRouter } from 'next/router'

const Post = ({ source, frontmatter }: any) => {
  return <MDXRemote {...source} components={MDXComponents} />
}

export default Post

export const getStaticProps = async ({ params }: any) => {
  const { fromMatter, source } = await getFileBySlug(params.slug)
  return {
    props: { source, fromMatter },
  }
}

export const getStaticPaths = async () => {
  const post = await getFiles()
  const paths = post.map((post) => ({
    params: {
      slug: post.replace(/\.mdx/, ''),
    },
  }))

  return {
    paths,
    fallback: false,
  }
}
