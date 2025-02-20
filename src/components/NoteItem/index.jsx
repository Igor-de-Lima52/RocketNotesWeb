import { FiPlus, FiX} from "react-icons/fi";
import { Container } from "./styles";

export function NoteItem({ isNew, value, onClick, ...rest }){
  return (
    <Container $isnew={isNew} >
      {/* <div className={isNew ? "add" : "delete"}> */}
        <input type="text" value={value} readOnly={!isNew} {...rest}/>
        <button className={isNew ? "button-add" : "button-delete"} type="button" onClick={onClick}>{isNew ? <FiPlus /> : <FiX />}</button>
      {/* </div> */}
    </Container>
  )
}