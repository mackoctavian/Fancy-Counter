import CountButton from "./CountButton"

export default function ButtonContainer({setCount, lock}) {
    
  return (
    <div className="button-container">
     <CountButton type="minus" setCount={setCount} lock={lock}/>
     <CountButton type="plus" setCount={setCount} lock={lock}/>
    </div>
  )
}

