import {Container} from "./styles"
import { FiPlus, FiX } from "react-icons/fi"

export function TagItem({value, onClick, isnew, ...rest}){
  return(
    <Container data-isnew={isnew}>
      <input 
      value={value}
      type="text"
      readOnly={!isnew}
      {...rest}
      />

      <button 
      className={isnew ? "" : "excluirButton" }
      type="button"
      onClick={onClick}
      >
        {isnew ? <FiPlus/> : <FiX/>}
      </button>
    </Container>
  )
}