import type { NextApiRequest, NextApiResponse } from 'next'

import type { Post } from '@app/types'

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Post>
) {
  const post: Post = {
    id: req.query.pid as string,
    title: `Post ${req.query.pid}`,
    content: 'Ex exercitation eu occaecat deserunt sit aliquip elit.',
  }

  res.status(200).json(post)
}
