import styled from "styled-components";


export const Container = styled.div`
        text-align: center;
        justify-content: center;
        display: flex;
        width: 60%;
        margin-left: 20%;
        border-radius: 20%;
        margin-top: 3rem;
        background-color: #FCE4EC;
        box-shadow: 0 5px 20px #E91E63;
        margin-bottom: 2rem;
    .sub-main{
        display: flex;
        justify-content: center;
        margin-left: 18%;
        width: 70%;
        padding-top: 30px;
    }
    .box{
        padding-top:20px;
        margin-left: -1rem;
        justify-content: center;
        display: block;
        align-items: center;
        padding: 20px 0 20px 0;
        width: 100%;
        @media screen and (max-width:858px) {
            justify-content: center;
            align-items: center;
        }
    }
    img{
        border-bottom: solid 0.2rem #EC407A;
        width: 100%;
    }
    @media only screen and (max-width:1000px){
        img{
            width: 100%;
        }
    }
`;

export const DetailsContainer = styled.div`
    opacity: 90%;
    border-radius: 10px;
    padding:1rem;
    margin-left:6.5rem;
    margin-right:6.5rem;
    margin-bottom: 2rem;
    color: black;
    justify-content: center;
    @media screen and (max-width:858px) {
        justify-content: center;
        align-items: center;
    }
`;
export const FeaturesContainer = styled.div`
    display: grid;
    grid-template-columns: 80fr 40fr;
    text-align:left;
    @media screen and (max-width:858px) {
        margin-left: -1.5rem;
        justify-content: center;
        align-items: center;
        font-size: 10px;
    }
    
`;
export const Left = styled.div`
       
`;
export const Right = styled.div`
`;