import PocketBase from 'pocketbase'

const pb = new PocketBase(process.env.NEXT_PUBLIC_PB_URL)

export async function getFullList(collection: string, params?: any) {
  try {
    return await pb.collection(collection).getFullList(params)
  } catch (error) {
    console.log(error)
  }
}

// TYPES
