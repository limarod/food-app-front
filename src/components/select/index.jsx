import { Container , StyledSelect, StyledIcon} from "./styles";
import {AiOutlineDown} from "react-icons/ai"
import React, { useRef } from 'react';



export function Select({icon: Icon, value, ...rest}){

  const selectRef = useRef();
  const iconRef = useRef()

  const handleIconClick = () => {
    if (selectRef.current) {
      selectRef.current.click();
    }
  }
  return(
    <Container {...rest}>
      
      <StyledSelect ref={selectRef} value={value} >
        <option value ="Null">  Escolha uma opção</option>
        <option value ="Entrada">  Entrada</option>
        <option value ="Refeição" >Refeição</option>
        <option value ="Bebida">Bebida</option>
        <option value ="Sobremesa">Sobremesa</option>
      </StyledSelect>

      <StyledIcon onClick={handleIconClick} ref={iconRef}>
        
      < AiOutlineDown/>
      </StyledIcon>

    </Container>
  )
}