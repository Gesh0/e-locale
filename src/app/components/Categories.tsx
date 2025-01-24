import * as Accordion from '@radix-ui/react-accordion'

export default function Categories({}) {
  return (
    <Accordion.Root type="single">
      <Category ></Category>
    </Accordion.Root>
  )
}

function Category() {
  return (
    <>
      <h1>Category</h1>
      <Item></Item>
      <Item></Item>
      <Item></Item>
    </>
  )
}

function Item() {
  return (
    <Accordion.Item value="TEMP">
      <Accordion.Trigger>
        {/* IMG TITLE PRICE*/}
      </Accordion.Trigger>
      <Accordion.Content>
        {/* DESCRIPTION */}
      </Accordion.Content>
    </Accordion.Item>
  )
}

// function Item() {
//   return (
//     <div style={{ flexShrink: 0 }} className="flex col gap-05">
//       <div
//         style={{
//           width: '256px',
//           height: '256px',
//           backgroundColor: 'gray',
//         }}
//       ></div>
//       <h6>Item title</h6>
//       <p>Price</p>
//     </div>
//   )
// }
