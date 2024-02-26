import {Container} from "./styles"

export function Input({icon: Icon, label, ...rest}){
  return(
    <Container >
      {Icon && <Icon/>}
      <input {...rest} />
      {label && <span>{label}</span>}
    </Container>
  )
}