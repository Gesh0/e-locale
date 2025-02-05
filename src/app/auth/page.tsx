'use client'

import GoBack from "../generic/GoBack";
import { passwordAuth } from "@lib/pocketbase";
import { useState } from "react";
import Oauth2btn from "../generic/Oauth2btn";
import FAQ from "../components/FAQ";

export default function Auth() {
  const [resp, setResp] = useState<any>()

  async function handleSubmit(formData: FormData) {
    const response = await passwordAuth(formData)
    setResp(response)
  }

  return (
    <>
      <section><GoBack /></section>
      <section className="auth">
        <h1>Authenticate as Admin</h1>
        {resp && <p>{resp.message}</p>}
        <form className="flex col gap-1" action={handleSubmit}>
          <div className="flex col gap-05">
            <label htmlFor="email">
              <h6>Email</h6>
            </label>
            <input type="text" name="email" />
          </div >

          <div className="flex col gap-05">
            <label htmlFor="password">
              <h6>Password</h6>
            </label>
            <input type="password" name="password" />
          </div>

          <Oauth2btn />

          <button type="submit">Log In
          </button>
        </form>
      </section>
    </>
  )
}