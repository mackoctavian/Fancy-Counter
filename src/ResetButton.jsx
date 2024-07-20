import {ResetIcon} from '@radix-ui/react-icons' 

const ResetButton = ({setCount}) => {
  return (
    <button className="reset-btn" onClick={() => setCount(0)}>
        <ResetIcon></ResetIcon>
    </button>
  )
}

export default ResetButton