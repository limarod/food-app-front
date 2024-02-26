import {Container, Input} from "./styles"

export function InputImage({icon: Icon, label, ...rest}){
  return(
    <Container >
      {Icon && <Icon/>}
      <Input  {...rest} />
    </Container>
  )
}