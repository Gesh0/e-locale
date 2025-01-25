import Image from 'next/image'
import Review from './components/Review'
import IMG from './components/IMG'
import Accordion from './components/FAQ'

export default function Home() {
  return (
    <>
      <IMG></IMG>
      {/* <Image src='/main.avif' alt='' fill className='ar-1' /> */}
      <section>
        <h1>
          Lorem ipsum dolor sit amet consectetur adipiscing elit Ut et massa mi.
        </h1>
      </section>
      <section>
        <div className='flex col gap-05'>
          <h2>Reviews & Ratings</h2>
          <p>More than 2000 reviews</p>
        </div>
        <Review></Review>
        <Review></Review>
        <Review></Review>
      </section>
      <section>
        <h2>Photo Gallery</h2>
        <IMG></IMG>
        <IMG></IMG>
        <IMG></IMG>
      </section>
      <section>
        <h2>Frequently asked questions</h2>
        <Accordion />
      </section>
    </>
  )
}
