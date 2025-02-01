'use server'

import { cookies } from 'next/headers'
import path from 'path'
import PocketBase from 'pocketbase'

const pb = new PocketBase(process.env.NEXT_PUBLIC_PB_URL)

// USER

export async function getFullList<T>(collection: string, params?: any) {
  try {
    return await pb.collection(collection).getFullList<T>(params)
  } catch (error) {
    console.log(error)
  }
}

export async function createImageURL(item: Item_I): Promise<string> {
  return `${pb.baseURL}/api/files/${item.collectionName}/${item.id}/${item.image}`
}

// ADMIN
export async function formTest(formData: FormData) {
  'use server'

  const email = formData.get('email') as string
  const password = formData.get('password') as string

  try {
    await pb.collection('users').authWithPassword(email, password)

    const cookieStore = await cookies()
    cookieStore.set({
      name: 'pb-token',
      value: pb.authStore.token,
      path: '/',
    })

    return {
      success: true,
      message:'Success'
    }

  } catch (error: any) {
    return {
      success: false,
      message: 'Login Failed'
    }
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

export interface Location_I extends Base {
  name: string
  address: string
  hours: string
}

// interface Error {
//   isAbort: boolean
//   name: string
//   originalError: unknown
//   response: unknown
//   status: number
//   url: string
// }
