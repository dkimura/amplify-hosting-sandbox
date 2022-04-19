import { GetServerSideProps, NextPageWithLayout } from 'next'
import Link from 'next/link'
import { useRouter } from 'next/router'

import { Layout } from '@app/components/Layout'
import type { Post } from '@app/types'

type Props = {
  posts: Post[]
}

const PostsPage: NextPageWithLayout<Props> = ({ posts }) => {
  const { pathname } = useRouter()

  return (
    <>
      <h2>Todos</h2>
      <p>pathname: {pathname}</p>

      <ul>
        {posts.map(({ id, title }) => (
          <li key={id}>
            <Link href={`/posts/${id}`} passHref>
              <a>{title}</a>
            </Link>
          </li>
        ))}
      </ul>
    </>
  )
}

PostsPage.getLayout = (page) => <Layout>{page}</Layout>

export const getServerSideProps: GetServerSideProps<Props> = async ({}) => {
  const posts: Post[] = await fetch(`http://localhost:3000/api/posts`).then(
    (res) => res.json()
  )

  return {
    props: {
      posts,
    },
  }
}

export default PostsPage
