import PocketBase from 'pocketbase'

const pb = new PocketBase(process.env.NEXT_PUBLIC_PB_URL)

export default pb

export async function get(collection: string) {
  try {
    return await pb.collection(collection).getFullList()
  } catch (error) {
    console.log(error)
  }
}

export async function update(collection:string, id: string, data: any) {
  try {
    return await pb.collection(collection).update(id, data)
  } catch (error) {
    console.error(error)
  }
}
