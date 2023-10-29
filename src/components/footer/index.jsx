import {Container} from "./styles"
import {BiFoodMenu} from "react-icons/bi"

export function Footer(){
  return(
    <Container>
      <div className="footer">
        <div className="footer1">
          <BiFoodMenu/>
          <p>Food explorer</p>
        </div>
        <div>
          <p>© 2023 - Todos os direitos reservados.</p>
        </div>
      </div>
    </Container>
  )
}