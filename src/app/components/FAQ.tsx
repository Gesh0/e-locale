'use client'

import * as Accordion from '@radix-ui/react-accordion'

export default function FAQ({}) {
  return (
    <Accordion.Root className="FAQ" type="single">
      <Item
        val="1"
        title="What is the meaning of life?"
        content="The meaning of life is to give life meaning. It's about finding purpose and joy in everyday moments."
      />
      <Item
        val="2"
        title="What is the airspeed velocity of an unladen swallow?"
        content="What do you mean? An African or European swallow? The airspeed velocity varies depending on the species."
      />
      <Item
        val="3"
        title="How do you make a perfect cup of coffee?"
        content="To make a perfect cup of coffee, use fresh beans, grind them just before brewing, and use the right water temperature."
      />
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
      <Accordion.Trigger className="FAQ trigger">
        <h5>{title}</h5>
        <span className="material-symbols-outlined icon-24">
          expand_circle_down
        </span>
      </Accordion.Trigger>
      <Accordion.Content className="FAQ content">
        <p>{content}</p>
      </Accordion.Content>
    </Accordion.Item>
  )
}
