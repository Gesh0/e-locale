import IMG from "../components/IMG"
import GoBack from "../generic/GoBack"

export default function Locations({}) {
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
        <Item />
        <Item />
        <Item />
      </section>
    </>
  )
}

function Item() {
  return (
    <div className='flex col gap-05'>
      <h6>Lorem ipsum dolor sit.</h6>
      <p>- Full address</p>
      <p>- Working hours</p>
    </div>
  )
}
