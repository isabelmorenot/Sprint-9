import styled from "styled-components";

export const ContainerHeader = styled.div`
    width: 100%;
    font-family:-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    padding: 1rem;
    background-color: #EC407A;
    display: grid;
    grid-template-columns: repeat(5,auto);
    grid-gap: 10px;
    align-items: center;
    text-align: center;
    overflow: hidden;
    @media screen and (max-width:800px) {
            height: 65px;
        }

    h2{
        color: white;
        font-weight: 400;
        span{
            font-weight: bold;
        }
        @media screen and (max-width:900px) {
            font-size: 20px;
            padding-left: 35px;

        }
    }
    a{
        font-size: 15px;
        color: black;
        text-decoration: none;
        text-transform: uppercase;
        margin-right: 2rem;
        &:hover{
            color: white;
        }
        @media screen and (max-width:900px) {
            font-size: 18px;
        
        }
    }
    img{
        height: 2rem;
        width: 2rem;
        margin-right: 0.5rem;
    }
    span{
        margin-right: 1rem;
    }
    .bag box-icon{
        width: 50px;
        height: 50px;
        margin-right: -6rem;
    }
    .bag span{
        position: absolute;
        top: -1rem;
        margin-top: 2.5rem;
        margin-right: 2.5rem;
        right: -1rem;
        width: 1.5rem;
        height: 1.5rem;
        border-radius: 50%;
        display: flex;
        align-items: center;
        justify-content: center;
        color: white;
        padding: 0rem;
        font-size: 1rem;
        font-weight: 700;
        background: red;

        @media screen and (max-width:600px) {
            margin-top: -1rem;
        }

    }

    @media screen and (max-width:800px) {
        
        .bag box-icon{
            justify-content: center;
            margin-left: -4.5rem;
        }
        .bag span{
            justify-content: center;
            margin-right:17rem;
        }
        a{
            position: fixed;
            width: 100vw;
            height: calc(100% - 65px);
            background: pink;
            top: -100vh;
            text-align: center;
            transform: all -4s;
            flex-direction: column;
            margin: 30px 0 0 0 ;
            line-height: 30px;

        }
    }
    @media screen and (max-width:800px) {
        .bag box-icon{
            display: none;
        }
        .bag span{
            display: none;
        }
        a{
            display: flex;
            flex-direction: column;
        }
        }
`;
