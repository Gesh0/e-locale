import PocketBase from 'pocketbase'

const pb = new PocketBase(process.env.NEXT_PUBLIC_PB_URL)

export async function getFullList<T>(collection: string, params?: any) {
  try {
    return await pb.collection(collection).getFullList<T>(params)
  } catch (error) {
    console.log(error)
  }
}

export function appendImgURL<T>(data: T): T {
  if (Array.isArray(data)) {
    return data.map(appendImgURL) as T
  }

  if (data && typeof data === 'object') {
    return Object.entries(data).reduce(
      (acc, [key, value]) => ({
        ...acc,
        [key]: typeof value === 'object' ? appendImgURL(value) : value,
        ...(key === 'image' && 'id' in data && data['image']
          ? {
              imageURL: `${process.env.NEXT_PUBLIC_PB_URL}/api/files/items/${data['id']}/${data['image']}`,
            }
          : {}),
      }),
      {} as T
    )
  }

  return data
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
