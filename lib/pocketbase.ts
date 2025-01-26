import PocketBase from 'pocketbase'

const pb = new PocketBase(process.env.NEXT_PUBLIC_PB_URL)

export async function getFullList<T>(collection: string, params?: any) {
  try {
    return await pb.collection(collection).getFullList<T>(params)
  } catch (error) {
    console.log(error)
  }
}

// TYPES
interface Base {
  collectionName: string
  collectionId: string
  id: string
  created: string
  updated: string
}

interface Expand<T = unknown> extends Base {
  expand: T
}

export interface FAQ_I extends Base {
  question: string
  answer: string
}

export interface Category_I extends Expand<Item_I[]> {
  name: string
}

export interface Item_I extends Base {
  name: string
  price: number
  desc: string
}

interface Error {
  isAbort: boolean
  name: string
  originalError: unknown
  response: unknown
  status: number
  url: string
}