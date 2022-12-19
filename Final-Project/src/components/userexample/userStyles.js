import styled from "styled-components";

export const Container = styled.div`
        text-align: center;
        justify-content: center;
        display: flex;
        padding: 90px 0 90px 0;
        font-family: 'Courier New', Courier, monospace;
    
    .sub-main{
        display: flex;
        justify-content: center;
        height: 400px;
        width: 35%;
        padding-top: 30px;
        border-radius: 60px;
        background-color: #EC407A;
        @media only screen and (max-width:500px){
            height: 500px;
            width: 70%;
        }
    }
    .box{
        padding-top:20px;
        justify-content: center;
        display: block;
        align-items: center;
        margin: 1rem;
    }
    .firstInput{
        margin-top: 20px;
    }
    input{
        margin-top: 20px;
        width: 155px;
        height: 30px;
        border-radius: 60px;
        opacity: 20%;
        border: none;
        color: black;
        
    }
    button{
        width: 100px;
        height: 30px;
        border-radius:60px;
        background-color: #F06292 ;
        color: black;
        font-size: 10px;
        font-family: 'Courier New', Courier, monospace;
        &:hover{
            color: white;
        }

    }
    h3{
        color: white;
        font-weight:lighter;
    }
`;