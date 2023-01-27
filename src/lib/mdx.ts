import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import { serialize } from 'next-mdx-remote/serialize'
import { PostsProps } from '@/pages/Home'

const root = process.cwd()

export const getFiles = () => fs.readdirSync(path.join(root, 'src/data'))

export const getFileBySlug = async (slug: string) => {
  const mdxSource = fs.readFileSync(
    path.join(root, 'src/data', `${slug}.mdx`),
    'utf-8',
  )

  const { content, data } = await matter(mdxSource)
  const source = await serialize(content, {})

  return {
    source,
    fromMatter: {
      slug,
      ...data,
    },
  }
}

export const getAllFilesMetadata = () => {
  const files = getFiles()

  // console.log(files, "files");

  return files.reduce((allPost, postSlug): any => {
    const mdxSource = fs.readFileSync(
      path.join(root, 'src/data', postSlug),
      'utf-8',
    )
    const { data } = matter(mdxSource)
    return [
      {
        ...data,
        slug: postSlug.replaceAll('.mdx', ''),
      },
      ...allPost,
    ]
  }, [])
}
