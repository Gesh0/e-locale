import PocketBase from 'pocketbase'

const pb = new PocketBase(process.env.NEXT_PUBLIC_PB_URL)

export async function getFullList<T>(collection: string, params?: any) {
  try {
    return await pb.collection(collection).getFullList<T>(params)
  } catch (error) {
    console.log(error)
  }
}

export function createImageURL(item: Item_I): string {
  return `${pb.baseURL}/api/files/${item.collectionName}/${item.id}/${item.image}`
}

// TYPES
interface Base {
  collectionName: string
  collectionId: string
  id: string
  created: string
  updated: string
}

export interface FAQ_I extends Base {
  question: string
  answer: string
}

export interface Category_I extends Base {
  name: string
  expand: { items: Item_I[] }
  items: string[]
}

export interface Item_I extends Base {
  name: string
  price: number
  desc: string
  image: string
  imageURL: string
}

// interface Error {
//   isAbort: boolean
//   name: string
//   originalError: unknown
//   response: unknown
//   status: number
//   url: string
// }
