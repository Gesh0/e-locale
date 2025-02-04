'use server'
import { cookies } from 'next/headers'
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
      message: 'Success',
    }
  } catch (error: any) {
    return {
      success: false,
      message: 'Login Failed',
    }
  }
}

export async function Oauth2URL() {
  const authMethods = await pb.collection('users').listAuthMethods()
  const provider = authMethods.oauth2.providers.find((p) => p.name === 'google')

  if (!provider) throw new Error('Google is only configured provider')

  const URL = `${provider.authURL}${encodeURI(
    'http://127.0.0.1:8090/api/oauth2-redirect'
  )}`

  // const URL = `${provider.authURL}${encodeURI(
  //   'http://127.0.0.1:8090/api/oauth2-redirect'
  // )}`

  return URL
}

export async function Oauth2Auth(code: string, state: string) {
  try {
    await pb
      .collection('users')
      .authWithOAuth2Code(
        'google',
        code,
        state,
        'http://127.0.0.1:8090/api/oauth2-redirect'
      )
  } catch (error: any) {
    console.log(error.message)
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
