import styled from "styled-components";

export const ProductsContainer = styled.div`
    width: 100%;
    min-height: 100vh;
    padding:  5rem calc((100vw- 1300px) /2);
    background: lightpink;
    color: black;
`

export const ProductWrapper = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    margin: 0 auto;
`

export const ProductCard = styled.div`
    padding-top: 4rem;
    margin: 0 2rem;
    line-height: 2;
    width: 200px;
    padding-bottom: 3rem;
`

export const ProductImg = styled.img`
    height: 200px;
    min-width: 170px;
    max-width: 100%;
    box-shadow: 8px 8px lightcoral;
`

export const ProductHeading = styled.h1`
    font-size: camp(2rem, 2.5vw, 3rem);
    text-align: center;
    margin-bottom: 5rem;
`

export const ProductTitle = styled.h2`
    font-weight: 500;
    font-size: 1rem;
    text-transform: capitalize;
    a{
        text-decoration: none;
        color: black;
    }
`
export const ProductName = styled.h4`
    font-weight: 100;
    font-size: 0.8rem;
`

export const ProductDetails = styled.h5`
    font-weight: 200;
    font-size: 1rem;
`


export const ProductInfo = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
`

export const ProductDesc = styled.p`
    margin-bottom: 1rem;
`

export const ProductPrice = styled.p`
    margin-bottom: 1rem;
    font-size: 1rem;
`

export const ProductButtom = styled.button`
    font-size: 1rem;
    padding: 0.4rem 3rem;
    border-radius:60px;
    background: #e31837;
    color: #fff;
    transition: 0.2 ease-in-out;

    &:hover{
        background: #ffc500;
        transition: 0.2s ease-out;
        cursor: pointer;
        color: #000;
    }
`


