import {styled} from "styled-components"

export const Container = styled.div`

  border-radius: 0.4rem;
  display: flex;
  
  background-color: ${(props) => (props['data-isnew'] ? 'transparent' : 'gray')};
  border: ${(props) => (props['data-isnew'] ? '1px dashed gray' : 'none')};;


  input{
    padding: 0.4rem;
    background-color: transparent;
    border: none;
    color: white;

    font-size: 1.2rem;
    width: 11rem;

    text-align: center;
  }

  button{
    background-color: transparent;
    color: white;
    border: none;
    margin-right: 0.2rem;


    font-size: 1.6rem;
  }

  .excluirButton{
    color: red;
  }  

`