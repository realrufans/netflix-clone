import styled from "styled-components";
export const Frame = styled.div` 
}`
export const Container = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap:wrap;
  font-size:3rem;
  max-width:1000px;
  margin: 0 auto;
   @media (max-width: 850px) {
    flex-direction: column;
    align-items: center;
  }
`;

export const Input = styled.input`
  width: 500px;
  border: none;
  font-size: 1rem;
  padding: 1.5em;
  box-sizing: border-box;
  @media( max-width:850px){
     
    font-size:1rem;
     
  }


  @media (max-width: 550px) {
    width: 80%;
    padding:1.1em;
  }
`;

export const Button = styled.button`
  
  background: #e50914;
  color: white;
  text-transform: capitalize;
  padding: 0 1.3em;
  font-size: 0.5em;
  border: 0;
  cursor: pointer;
  @media( max-width:850px){
    margin-top:1em;
    padding:0.4em;
    font-size:1.2rem;
  }

  @media( max-width:550px){
    margin-top:1em;
    padding:0.5em;
    font-size:1.2rem;
  }

  img {
    margin-left: 10px;
    filter: brightness(0) invert(1);
    width: 24px;

    
  }

  &:hover {
    background: #f40612;
  }

 
`;

export const Text = styled.p`
  
  font-size: 0.5em;
  width:50%;
  color: white;
  margin: 0 auto;
  margin-top:1em;
  text-align: center;

  @media (max-width: 600px) {
    font-size: 1.3rem;
    line-height: 20px;
    margin:1em;
  }
`;


