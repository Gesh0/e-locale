export default function Footer({}) {
  return (
    <footer>
        <h2>Contact</h2>
        <div className="flex col gap-1">
          <div className="flex gap-05">
            <span className="material-symbols-outlined icon-24">
              mail
            </span>
            <h6>example@email.com</h6>
          </div>
          <div className="flex gap-05">
            <span className="material-symbols-outlined icon-24">
              phone
            </span>
            <h6>+389 12 345 678</h6>
          </div>
        </div>
    </footer>
  )
}
