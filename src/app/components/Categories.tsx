import { Category_I, getFullList } from '@lib/pocketbase'
import * as Accordion from '@radix-ui/react-accordion'
import Error from './Error'

export default async function Categories({}) {
  const data = await getFullList<Category_I[]>('categories', {
    expand: 'items',
  })

  if (!data) return <Error />
  return (
    <Accordion.Root type="single" className="categories" collapsible>
      {data.map((category) => (
        <Category category={category}></Category>
      ))}
    </Accordion.Root>
  )
}

function Category({ category }: any) {
  if (!category.expand?.items) return <Error />

  return (
    <div className="category">
      <h1>{category.name}</h1>
      <div className="items">
        {category.expand.items.map((item: any) => (
          <Item item={item}></Item>
        ))}
      </div>
    </div>
  )
}

function Item({ item }: any) {
  return (
    <Accordion.Item value={item.id} className="item">
      <Accordion.Trigger>
        <div className="IMG"></div>
        <h6>{item.name}</h6>
        <p>{item.price} mkd</p>
      </Accordion.Trigger>
      <Accordion.Content>
        <p>{item.desc}</p>
      </Accordion.Content>
    </Accordion.Item>
  )
}
