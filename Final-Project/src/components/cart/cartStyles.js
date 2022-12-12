import styled from "styled-components";

export const Container = styled.div`
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    transition: all 300ms ease-in-out;
    background-color: black(0,0,0,.6);
    z-index: 2;
    padding-bottom: 5rem;
    visibility: hidden;

.carrito{
    position: fixed;
    top: 20%;
    left: 21%;
    transform: (-50%, -50%)
    scale(.5);
    width: 60%;
    height: 70%;
    border-radius: 50px;
    overflow-x: scroll;
    transition: all 300ms ease-in-out;
    background-color: white;
    box-shadow: 0 1px 10px red;
    opacity: 0;
    visibility: hidden;
    @media only screen and (max-width:700px){
        justify-content: center;
        left: 10%;
        top: 10%;
    }

}
h2{
    text-align: center;
    font-size: 1.5rem;

}
.show{
    visibility: visible;
}
.carrito.show{
    transform: (-50%, -50%)
    scale(1.1);
    opacity: 1;
    visibility: visible;

}
.carrito__close box-icon{
    display: inline-block;
    width: 50px;
    height: 50px;
    cursor: pointer;
    transform: all 300ms ease-in-out;
    margin: 3rem 0 0 2rem;
}
.carrito__close box-icon:hover{
    fill: crimson;

}
.carrito__center{
    width: 90%;
    margin: 0 auto;
}
.carrito__item{
    display: grid;
    grid-template-columns: 1fr 2fr 1fr 1fr;
    width: 80%;
    margin: 2rem auto;
    box-shadow: 0 1px 10px red;
    border-radius: 5px;

}
img{
    width: 7rem;
}
.carrito__item h3{
    margin-top: 1.5rem;
    margin-left: 1rem;
    font-weight: 600;
    font-size:1rem;
}
.carrito__item .price{
    font-size: 1rem;
    font-weight: bold;
    text-align: start;
    margin-left: 1rem;
}
.carrito__item box-icon{
    fill: #EC407A;
    width: 30px;
    height: 30px;
    cursor: pointer;
    margin-top: .5rem;
}
.carrito__item .cantidad{
    font-size: 1rem;
    font-weight: bold;

}
.carrito__item .remove__item box-icon{
    width: 40px;
    height: 60px;
    fill: #EC407A;
    margin-top: 2rem;
}
.carrito__footer{
    margin-top: 3rem;
    text-align: center;
    margin-bottom: 3rem;
}
.carrito__footer h3{
    font-size: 1.5rem;
    font-weight: 700;
    letter-spacing: 1px;
}
.carrito__footer .btn{
    display: inline-block;
    padding: .3rem 1rem;
    font-size: 1.2rem;
    background-color: #EC407A;
    border: 0;
    outline: 0;
    cursor: pointer;
}
.btn{
    margin-top: 3rem;
}
.carrito__footer .btn:hover{
    background-color: #D81B60;
    color: white;

}
@media only screen and (max-width:1000px){
    .carrito__item{    
        width: 100%;
    }
    .carrito__item h3{
        font-size: 1rem;
    }
}
@media only screen and (max-width:700px){
    .carrito{
        width: 80%;
        height: 100%;
        padding: 1rem;
    }
}
@media only screen and (max-width:450px){
    .carrito__item h3{
        display: .5rem;
        font-size: 0.5rem;
    }
    .carrito__item .remove__item box-icon{
        width: 30px;
        height: 60px;

    }
}
`