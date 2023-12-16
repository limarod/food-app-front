import { Container } from "./styles";
import {Link} from "react-router-dom"
import{IoChevronBack} from "react-icons/io5"

export function ButtonText({ icon: Icon, title, onClick, to, ...rest}){
  return(
    <Link to={to}>
    <Container type="button" onClick={onClick} {...rest}>
      {Icon && <Icon className={"iconClass"}/>}
      {title}
    </Container>
    </Link>
  )
}