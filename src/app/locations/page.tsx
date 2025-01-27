import { getFullList, Location_I } from "@lib/pocketbase"
import IMG from "../components/IMG"
import GoBack from "../generic/GoBack"
import Error from "../components/Error"

export default async function Locations({}) {

  const data = await getFullList<Location_I>('locations')
  console.log(data)

  return (
    <>
      <section>
        <GoBack />
      </section>
      <IMG></IMG>
      <section>
        <h1 className='underline pb-05'>
          Locations
        </h1>
        {data && data.map((location:Location_I) =>
          <Item location={location} key={location.id!}></Item>
        )}
        {!data && <Error/>}
      </section>
    </>
  )
}

function Item({location} : {location:Location_I}) {
  return (
    <div className='flex col gap-05'>
      <h6>{location.name}</h6>
      <p>- {location.address}</p>
      <p>- {location.hours}</p>
    </div>
  )
}
