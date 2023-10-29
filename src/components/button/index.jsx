import { Container } from "./styles";
import {Link} from "react-router-dom"
export function Button({ icon: Icon, title, to, ...rest}){
  return(
    <Link to={to}>
    <Container type="button" {...rest} >
      {Icon && <Icon className={"iconClass"}/>}
    {title}
    </Container>
    </Link>
  )
}