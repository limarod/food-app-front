import { Container } from "./styles";
import {Link} from "react-router-dom"
import{IoChevronBack} from "react-icons/io5"

export function ButtonText({ icon: Icon, title, to, ...rest}){
  return(
    <Link to={to}>
    <Container type="button" {...rest}>
      {Icon && <Icon className={"iconClass"}/>}
      {title}
    </Container>
    </Link>
  )
}