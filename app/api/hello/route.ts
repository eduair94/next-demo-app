import { type NextApiResponse } from 'next'
import { type NextRequest, NextResponse } from 'next/server'

interface Data {
  message: string
}

export async function GET (req: NextRequest, res: NextApiResponse): Promise<NextResponse<Data>> {
  const resp: Data = { message: 'Hello from Next.js!' }
  return NextResponse.json(resp, { status: 200 })
}
