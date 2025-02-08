'use client'

import { passwordAuth } from "@lib/pocketbase";
import AuthButton from "./AuthButton";

export function AuthForm() {

  async function handleLogIn(formData: FormData) {
    await passwordAuth(formData)
  }

  return (
    <form className="flex col gap-1" action={handleLogIn}>

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

      <AuthButton />
      <button type="submit">Log In</button>
    </form>
  )
}