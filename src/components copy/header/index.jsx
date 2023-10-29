import { Container } from "./styles";
import {HiOutlineMenu} from "react-icons/hi"
import {BiFoodMenu} from "react-icons/bi"
import {PiReceipt} from "react-icons/pi"

export function Header(){
  return (
    <Container>
          <div className="firstDiv">
          <HiOutlineMenu />
          </div>
          <div className="secondDiv">
            <BiFoodMenu />
            <h1>Food explorer</h1>
          </div>
            <div className="thirdDiv">
              <PiReceipt/>
              <span>0</span>
            </div>
      
    </Container>
  )
}