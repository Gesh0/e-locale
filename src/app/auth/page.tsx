import GoBack from "../generic/GoBack";
import { AuthForm } from "../generic/AuthForm";
import { authRecord as getAuthRecord } from "@lib/pocketbase";

export default async function Auth() {
  const authRecord = await getAuthRecord()

  return (
    <>
      <section><GoBack /></section>
      <section className="auth">
        <div className="flex col gap-05">
          <h1>Authenticate as Admin</h1>
          <p>
            {authRecord
              ? `Authorized as ${authRecord.name}`
              : `Not authorized`
            }
          </p>
        </div>
        <AuthForm />
      </section>
    </>
  )
}