import styled from "styled-components";

export const Container = styled.div`
  text-align: center;
  margin: 0 auto;
  
`;
export const Title = styled.h1`
  color: white;
  font-size: 3rem;
  text-align: center;

  @media (max-width: 550px) {
    font-size: 1.5rem;
  }
`;

export const List = styled.ul`
 display:flex;
 justify-content: space-between;
 list-style: none;

 @media(max-width:600px){
     flex-direction:column
 }

`;

export const Name = styled.p`
  color: white;
  font-size: 2rem;

  @media (max-width: 550px) {
    font-size: 1rem;
  }
`;

export const Picture = styled.img`
  width: 50%;
  margin-bottom: 1em;
  text-overflow: ellipsis;
  cursor:pointer;
  &:hover {
    font-weight: bold;
    color: #e5e5e5;
}

  @media (max-width: 550px) {
    width: 50%;
  }
`;

export const Item = styled.li`

    
&:hover > ${Picture} {
    border: 3px solid white;
}

&:hover ${Name} {
    font-weight: bold;
    color: white;
}

&:last-of-type {
     
}

@media (max-width: 600px) {
  margin-right: 2.5em;
  flex-direction:column;
}`;
