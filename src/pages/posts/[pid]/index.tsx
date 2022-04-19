import { GetServerSideProps, NextPageWithLayout } from 'next'
import { useRouter } from 'next/router'

import { Layout } from '@app/components/Layout'
import type { Post } from '@app/types'

type Props = {
  post: Post
}

const PostPage: NextPageWithLayout<Props> = ({ post: { title, content } }) => {
  const { pathname, query } = useRouter()

  return (
    <>
      <h2>{title}</h2>
      <p>pathname: {pathname}</p>
      <p>id: {query.pid}</p>
      <p>{content}</p>
    </>
  )
}

PostPage.getLayout = (page) => <Layout>{page}</Layout>

export const getServerSideProps: GetServerSideProps<Props> = async ({
  query,
}) => {
  const post: Post = await fetch(
    `http://localhost:3000/api/posts/${query.pid}`
  ).then((res) => res.json())

  return {
    props: {
      post,
    },
  }
}

export default PostPage
