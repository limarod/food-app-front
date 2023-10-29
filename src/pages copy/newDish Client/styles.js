import {styled} from "styled-components"


export const Container = styled.div`



.content{
  padding: 1.6rem;
}

h1{
  font-size: 2.6rem;
  margin: 2.4rem 0;
}

p{
  font-size: 1.2rem;
}

  option{
    font-size: 1.2rem;
    color: white;

    outline: none;
}

.newTagSection{
  background-color: ${({theme}) => theme.COLORS.SecondBackground};
  padding: 0.8rem 0.5rem;
  margin-top: 1.2rem;
  margin-bottom: 2.4rem;
  border-radius: 0.4rem;

  display: flex;
  
  flex-wrap: wrap;
  gap: 1rem;
}

`

