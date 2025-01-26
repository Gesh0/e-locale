import {
  Category_I,
  createImageURL,
  getFullList,
  Item_I,
} from '@lib/pocketbase'
import * as Accordion from '@radix-ui/react-accordion'
import Error from './Error'
import Image from 'next/image'

export default async function Categories({}) {
  const data = await getFullList<Category_I>('categories', {
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

function Category({ category }: { category: Category_I }) {
  if (!category.expand?.items) return <Error />

  return (
    <div className="category">
      <h1>{category.name}</h1>
      <div className="items">
        {category.expand.items.map((item) => (
          <Item item={item}></Item>
        ))}
      </div>
    </div>
  )
}

function Item({ item }: { item: Item_I }) {
  return (
    <Accordion.Item value={item.id} className="item">
      <Accordion.Trigger>
        {item.image ? (
          <Image
            src={createImageURL(item)}
            alt={item.name}
            width="256"
            height="256"
          ></Image>
        ) : (
          <div className="IMG"></div>
        )}
        <h6>{item.name}</h6>
        <p>{item.price} mkd</p>
      </Accordion.Trigger>
      <Accordion.Content>
        <p>{item.desc}</p>
      </Accordion.Content>
    </Accordion.Item>
  )
}
