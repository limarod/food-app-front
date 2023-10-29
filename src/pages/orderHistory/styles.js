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


  footer{
    margin-top: 5rem;
  }
`
