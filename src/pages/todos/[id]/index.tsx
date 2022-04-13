import { NextPageWithLayout } from 'next'
import { useRouter } from 'next/router'

import { Layout } from '@app/components/Layout'

const Todo: NextPageWithLayout = () => {
  const { pathname, query } = useRouter()

  return (
    <>
      <h2>Todo</h2>
      <p>pathname: {pathname}</p>
      <p>id: {query.id}</p>
    </>
  )
}

Todo.getLayout = (page) => <Layout>{page}</Layout>

export default Todo
