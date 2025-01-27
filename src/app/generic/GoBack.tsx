'use client'

import { useRouter } from "next/navigation"

export default function GoBack({}) {
  const router = useRouter()

  return (
    <div className='flex gap-05' onClick={() => router.back()}>
      <span className='material-symbols-outlined icon-24'>
        arrow_circle_left
      </span>
      <p>Go Back</p>
    </div>
  )
}
