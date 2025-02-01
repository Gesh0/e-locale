'use client'

import Image from "next/image";
import GoBack from "../generic/GoBack";
import { formTest } from "@lib/pocketbase";
import { useState } from "react";

export default function Auth(){
  const [resp,setResp] = useState<any>() 

  async function handleSubmit(formData:FormData){
    const response = await formTest(formData)
    console.log(response)
    setResp(response)
  }



  return(
    <>
    <section><GoBack/></section>
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

      <button type='button'>
        <Image src={'/google-logo.png'} alt="google logo" width={20} height={20}></Image>
        Continue with Google
        </button>
        
      <button type="submit">Log In
      </button>
      </form>
    </section>
    </>
  )
}