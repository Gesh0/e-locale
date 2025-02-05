import { FAQ_I, getFullList } from '@lib/pocketbase'
import * as Accordion from '@radix-ui/react-accordion'
import Error from './Error'

export default async function FAQ({ }) {
  const data = await getFullList<FAQ_I>('FAQ')

  if (!data || data?.length === 0) return <Error />

  return (
    <Accordion.Root className="FAQ" type="single" collapsible>
      {data.map((item) => (
        <Item item={item} />
      ))}
    </Accordion.Root>
  )
}

type ItemProps = {
  val: string
  title: string
  content: string
}

function Item({ item }: { item: FAQ_I }) {
  return (
    <Accordion.Item value={item.id} className="FAQ item">
      <Accordion.Trigger className="FAQ trigger underline">
        <h6>{item.question}</h6>
        <span className="material-symbols-outlined icon-24">
          expand_circle_down
        </span>
      </Accordion.Trigger>
      <Accordion.Content className="FAQ content">
        <p className="pb-1">{item.answer}</p>
      </Accordion.Content>
    </Accordion.Item>
  )
}
