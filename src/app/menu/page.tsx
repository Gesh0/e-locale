import Categories from '../components/Categories'
import Category from '../components/Categories'
import GoBack from '../generic/GoBack'

export default function Home() {
  return (
    <>
      <section>
        <GoBack></GoBack>
      </section>
      <section>
        <Categories />
      </section>
    </>
  )
}
