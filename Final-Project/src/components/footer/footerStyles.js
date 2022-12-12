import styled from "styled-components";

export const ContainerFooter = styled.div`

.footer-container {
    background: #EC407A;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-top: -1rem;
    margin-bottom: -5rem;
    padding: 2rem;
    font-family: 'Open Sans', system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Helvetica Neue', sans-serif;
    color: white;
  }
  
  .footer-nav-container {
    width: 10%;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    align-items: center;
    padding-bottom: 1rem;
  }
  
  .footer-nav-links-container {
    display: flex;
    flex-direction: row;
    margin-left: 2rem;
    margin-right: 2rem;
  
  }
  
  .footer-nav-links-list-container {
    padding-left: 10rem;
  }
  
  .footer-nav-links-list-container:first-child {
    padding-left: 0;
  }
  
  .footer-nav-title {
    font-weight: bold;
    font-size: 1.25rem;
    padding-bottom: 0.5rem;
    color: white;
  }
  
  .footer-nav-link-item {
    padding-top: 0.25rem;
  }
  
  .footer-copyright {
    width: 100%;
    padding-top: 1rem;
    display: flex;
    justify-content: space-between;
  }
  
  @media (max-width: 800px) {
    .footer-nav-container {
      justify-content: center;
    }
  }
  
  @media (max-width: 600px) {
    .footer-nav-links-container {
      font-size: 6px;
    }
    .footer-container{
      font-size: 10px;
    }
    .footer-container{
      justify-content: center;
      align-items: center;
      
    }
  }
`