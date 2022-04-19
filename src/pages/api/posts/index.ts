import type { NextApiRequest, NextApiResponse } from 'next'
import { v4 as uuid } from 'uuid'

import type { Post } from '@app/types'

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Post[]>
) {
  const posts = Array.from({ length: 30 }).map((_, index) => {
    const id = uuid()

    return {
      id,
      title: `Post ${id}`,
    }
  })

  res.status(200).json(posts)
}
