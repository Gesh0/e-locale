'use client'

import Link from 'next/link'
import { useRef } from 'react'

export default function Nav({}) {
  const dailogRef = useRef<HTMLDialogElement>(null)

  const handleOpen = () => {
    dailogRef.current?.showModal()
  }
  function handleClose() {
    dailogRef.current?.close()
  }

  return (
    <>
      <span
        className="material-symbols-outlined icon-40"
        onClick={handleOpen}
      >
        menu
      </span>
      <dialog
        className="nav"
        ref={dailogRef}
        // backdrop close
        onClick={(e) => {
          if (e.target === dailogRef.current) handleClose()
        }}
      >
        <nav className="flex col gap-1">
          <Link onClick={handleClose} href="/">
            <h1>Home</h1>
          </Link>
          <Link onClick={handleClose} href="/menu">
            <h1>Menu</h1>
          </Link>
          <Link onClick={handleClose} href="/locations">
            <h1>Locations</h1>
          </Link>
        </nav>
      </dialog>
    </>
  )
}
