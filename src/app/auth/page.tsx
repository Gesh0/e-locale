import Image from "next/image";
import GoBack from "../generic/GoBack";

export default function Auth(){
  return(
    <>
    <section><GoBack/></section>
    <section className="auth">
      <h1>Authenticate as Admin</h1>
      <form className="flex col gap-1">
        <div className="flex col gap-05">
        <label htmlFor="name">
          <h6>Username</h6>
        </label>
        <input type="text" name="name" />
        </div >

        <div className="flex col gap-05">
        <label htmlFor="password">
          <h6>Password</h6>
        </label>
        <input type="password" name="password" />
        </div>
      </form>
      <button>
        <Image src={'/google-logo.png'} alt="google logo" width={16} height={16}></Image>
        Continue with Google
        </button>
      <button>Log In</button>
    </section>
    </>
  )
}