'use client'

import { Oauth2Auth, Oauth2URL } from "@lib/pocketbase"
import Image from "next/image"
import { useSearchParams } from "next/navigation"
import { useEffect } from "react"



export default function Oauth2btn() {
  const searchParams = useSearchParams()
  const code = searchParams.get('code')

  useEffect(() => {
    if (!code) return
    async function auth(code: string) { await Oauth2Auth(code) }
    auth(code)

  }, [])


  async function handleClick() {
    window.location.assign(await Oauth2URL())
  }

  return (
    <button onClick={handleClick}>
      <Image src={'/google-logo.png'} alt="google logo" width={20} height={20}></Image>
      Conitnue with Google
    </button>
  )
}