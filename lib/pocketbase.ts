'use server'
import { cookies } from 'next/headers'
import PocketBase, { AuthProviderInfo } from 'pocketbase'

const pb = new PocketBase(process.env.NEXT_PUBLIC_PB_URL)
let temp: AuthProviderInfo

// USER

export async function getFullList<T>(collection: string, params?: any) {
  try {
    await getAuthCookies()
    return await pb.collection(collection).getFullList<T>(params)
  } catch (error) {
    console.log(error)
  }
}

export async function createImageURL(item: Item_I): Promise<string> {
  return `${pb.baseURL}/api/files/${item.collectionName}/${item.id}/${item.image}`
}

// ADMIN

export async function passwordAuth(formData: FormData) {
  const email = formData.get('email') as string
  const password = formData.get('password') as string

  try {
    await pb.collection('users').authWithPassword(email, password)
    await setAuthCookies()
  } catch (error: any) {
    console.log(error)
  }
}

export async function Oauth2URL() {
  const authMethods = await pb.collection('users').listAuthMethods()
  const provider = authMethods.oauth2.providers.find((p) => p.name === 'google')

  if (!provider) throw new Error('Google is only configured provider')
  temp = provider

  return provider.authURL + encodeURIComponent('http://localhost:3000/auth')
}

export async function Oauth2Auth(code: string) {
  try {
    await pb
      .collection('users')
      .authWithOAuth2Code(
        temp.name,
        code,
        temp.codeVerifier,
        'http://localhost:3000/auth'
      )
    await setAuthCookies()
  } catch (error: any) {
    console.log(error)
  }
}

export async function authRecord() {
  return pb.authStore.record
}

export async function getAuthCookies() {
  console.log('get cookies')
  const cookieStore = await cookies()
  const token = cookieStore.get('pb-token')?.value

  if (!token) return

  pb.authStore.loadFromCookie(token)
}

export async function setAuthCookies() {
  console.log('set cookies')
  const cookieStore = await cookies()
  cookieStore.set({
    name: 'pb-token',
    value: pb.authStore.exportToCookie(),
  })
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
