import { FiPlus, FiX} from "react-icons/fi";
import { Container } from "./styles";

export function NoteItem({ isNew = false, value, onClick, ...rest }){
  return (
    <Container $isNew={isNew.toString()} >
      <div className={isNew ? "add" : "delete"}>
        <input type="text" value={value} readOnly={!isNew} {...rest}/>
        <button className={isNew ? "button-add" : "button-delete"} type="button" onClick={onClick}>{isNew ? <FiPlus /> : <FiX />}</button>
      </div>
    </Container>
  )
}