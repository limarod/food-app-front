import { styled } from "styled-components";


       
export const Container = styled.div`
  
  main{

    padding: 5.6rem 0 0 3.5rem;

    h1{
      font-size: 3.2rem;
      margin-bottom: 1.4rem;
    }

    .orderItems{
      padding: 8px;
      max-width: 25rem;

      border: 1px solid gray;
      border-radius: 0.6rem;
      font-size: 2.8rem;
      margin-bottom: 1.2rem;

      .statusOrder{
      display: flex;
      justify-content: space-between;
    }

    .listOrder{
    }

    }

    svg{
      font-size: 1rem;
      color: red;
    }


  }

  .largerDevice{
    display: none;
  }

  

  table{
    border-collapse: collapse;
    width: 100%;
  }

  th, td{
    border: 1px solid #dddddd;
    text-align: left;
    padding: 0.8rem;

    font-size: 1.5rem;
  }

  td{
    color: ${({theme}) => theme.COLORS.FONT_PLACEHOLDER};
  }


  footer{
    margin-top: 5rem;
  }

  .tableLargerDevice{
    display: none;
  }
`
