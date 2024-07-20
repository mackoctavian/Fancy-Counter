function Title({lock}) {
  return (
    <>
    {
      lock ? <h1 className="title">LIMIT! BUY <br /> <b>PRO</b> FOR &gt;5</h1> : <h1 className="title">Fancy Counter</h1>
    }
    </>
  )
}

export default Title