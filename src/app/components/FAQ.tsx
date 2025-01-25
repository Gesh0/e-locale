import { getFullList } from '@lib/pocketbase'
import * as Accordion from '@radix-ui/react-accordion'
import Error from './Error'

export default async function FAQ({}) {
  const data = await getFullList('FAQ')
  console.log(data)

  return (
    <Accordion.Root className="FAQ" type="single" collapsible >
      {data &&
        data.length > 0 &&
        data.map((item) => (
          <Item
            val={item.id}
            title={item.question}
            content={item.answer}
          />
        ))}
      {!data && <Error></Error>}
    </Accordion.Root>
  )
}

type ItemProps = {
  val: string
  title: string
  content: string
}

function Item({ val, title, content }: ItemProps) {
  return (
    <Accordion.Item value={val} className="FAQ item">
      <Accordion.Trigger className="FAQ trigger underline">
        <h5>{title}</h5>
        <span className="material-symbols-outlined icon-24">
          expand_circle_down
        </span>
      </Accordion.Trigger>
      <Accordion.Content className="FAQ content">
        <p className="pb-1">{content}</p>
      </Accordion.Content>
    </Accordion.Item>
  )
}
