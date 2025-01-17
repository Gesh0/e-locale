'use client'

import { useState } from "react"

export default function Accordion({}) {
  return (
    <div className='flex col gap-1'>
      <Item></Item>
      <Item></Item>
      <Item></Item>
    </div>
  )
}

function Item({}) {
  return (
    <div className='underline flex sb'>
      <h5 className='pb-025'>Lorem, ipsum dolor.</h5>
      <span className='material-symbols-outlined icon-24'>
        expand_circle_down
      </span>
    </div>
  )
}
