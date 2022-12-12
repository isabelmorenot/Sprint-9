import styled from "styled-components";

export const Container = styled.div`

    width: 100%;
    height: 100%;
    position: relative;
    display: inline-block;
    text-align: center;
    @media screen and (max-width:652px) {
        width: 100%;
    }

    img{
        width: 100%;
    }

    h1{
        font-size: 60px;
        position: absolute;
        top: 30%;
        left: 45%;
        transform: translate(-30%, -45%);
        &:hover{
            color: white;

        }
    }
    p{
        position: absolute;
        top: 40%;
        left: 45%;
        transform: translate(-40%, -45%);
    }
    a{
        text-decoration: none;
        color: black;
    }

    @media screen and (max-width:652px) {
            h1{
                font-size: 30px;
            }
            p{
                margin-top: 1rem;
                font-size: 10px;
            }
        }
        @media screen and (max-width:300px) {
            h1 {
                margin-bottom: 2rem;
            }
        }
`