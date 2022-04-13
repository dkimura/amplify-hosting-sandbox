import { NextPageWithLayout } from 'next'
import Link from 'next/link'
import { useRouter } from 'next/router'

import { Layout } from '@app/components/Layout'

const items = Array.from({ length: 20 }, (_, index) => index)

const Todos: NextPageWithLayout = () => {
  const { pathname } = useRouter()

  return (
    <>
      <h2>Todos</h2>
      <p>pathname: {pathname}</p>
      <p>
        <ul>
          {items.map((item) => (
            <li key={item}>
              <Link href={`todos/${item}`}>
                <a>{item}</a>
              </Link>
            </li>
          ))}
        </ul>
      </p>
    </>
  )
}

Todos.getLayout = (page) => <Layout>{page}</Layout>

export default Todos
