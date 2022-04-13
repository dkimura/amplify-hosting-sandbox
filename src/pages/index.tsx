import type { NextPageWithLayout } from 'next'
import Link from 'next/link'

import { Layout } from '@app/components/Layout'
import styles from '@app/styles/Home.module.css'

const Home: NextPageWithLayout = () => {
  return (
    <>
      <h1 className={styles.title}>Welcome to Example App</h1>

      <div className={styles.grid}>
        <Link href="/todos">
          <a className={styles.card}>
            <h2>Todos &rarr;</h2>
            <p>Show todo items.</p>
          </a>
        </Link>
      </div>
    </>
  )
}

Home.getLayout = (page) => {
  return <Layout>{page}</Layout>
}

export default Home
