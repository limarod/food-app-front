import { styled } from "styled-components";

       
export const Container = styled.div`
  
  main{
    padding:0 0 0 3.5rem;

    .paymentBox{
      border: 1px solid gray;
      border-top: none;
      border-radius: 0 0 6px 6px;
      max-width: 25rem;

      text-align: center;
    }


    h1{
      font-size: 3.2rem;
      margin: 5.6rem 0 2.7rem 0;
    }

    .PaymentModel{
      display: flex;
      max-width: 25rem;
      border: 1px solid gray;
      border-radius: 6px 6px 0 0;

      .buttonPayment, .buttonPaymentPix{
        background-color: transparent;
        height: 6rem;
        border-radius: 0 3px 0 0 ;
      }
  
      .buttonPaymentPix{
        border-right: 1px solid gray;
      }

    }

    .pixBox{
      // display: none;
      max-width: 25rem;
      padding: 4.7rem 2.0rem;
      text-align: center;

      border-top: none;
      border-radius: 0 0 4px 4px;

      svg{
        font-size: 15rem;
      }
    }

    
    .creditCardBox{

        display: none;
        text-align: center;
        max-width: 25rem;

        padding: 4.7rem 2.0rem;
        // border: 1px solid gray;
        // border-top: none;

        p{
          font-size: 1.2rem;
        }

        .textArea{
          height: 4rem;
          border: 1px solid white;
        }

        .creditCardBoxOther{
          display: flex;
          gap: 6px;
        }
    
        .button{
          background-color: ${({theme}) => theme.COLORS.BUTTON_COLOR};
        }

        .creditCardBoxAfter{
          display: none;
        }

        .loadingPayment{
          display: none;
          p{
            margin-top: 2rem;
            color: gray;
            font-weight: bolder;
            font-size: 1.4rem;
          }
          
          svg{
          font-size: 10rem;
          color: gray;
          }
        }

        .aprovedPayment{
          display: none;
          p{
            margin-top: 2rem;
            color: gray;
            font-weight: bolder;
            font-size: 1.4rem;
          }
          
          svg{
          font-size: 10rem;
          color: gray;
          }
        }
        

    }

    .orderDelivered{
      display: none;

      padding: 4.7rem 2.0rem;
      p{
        margin-top: 2rem;
        color: gray;
        font-weight: bolder;
        font-size: 1.4rem;
      }
      
      svg{
      font-size: 10rem;
      color: gray;
      }
    }

  }


  footer{
    margin-top: 5rem;
  }
`
