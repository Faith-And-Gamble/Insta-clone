import styled from 'styled-components';

export const Conatiner = styled.div`
display: flex;

justify-content: center;
align-items: center;
flex-wrap: wrap;
max-width: 100%;
`;

export const Card = styled.div`
position: relative;
min-width: 300px;
height: 440px;
box-shadow: 0px 5px rgb(164, 159, 159) ;
border-radius: 5px;
margin: 30px;
transition: 0.5s;
`;

export const Box = styled.div`
  position: absolute;
  top: 20px;
  left: 20px;
  right: 20px;
  bottom: 20px;
  background: #ebffa2;
  border-radius: 15px;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  transition: 0.5s; 
  :hover {
    transform: translateY(-15px);
  }
`;

export const Content = styled.div`
  padding: 20px;
  text-align: center;    
`;

export const H2 = styled.h2`
  position: absolute;
  bottom: 0px;
  left: 7px;
  font-size: 2rem;
  color: rgba(0, 0, 0, 0.492);    
`;

export const H3 = styled.h3`
  font-size: 20px;
  position: absolute;
  top: 5px;
  text-align: left;
  left: 7px;
  color: rgb(0, 0, 0);
  z-index: 1;
  transition: 0.1s;
  margin-bottom: 15px;
`;

export const P = styled.p`
  font-size: 1rem;
  text-align: left;
  max-height: 50px;
  font-weight: 900;
  color: rgb(255, 0, 0);
  z-index: 1;
  transition: 0.5s;
`;

export const A = styled.a`
  position: relative;
  display: inline-block;
  border-radius: 3px;
  top: 105px;
  left: 65px;
  text-decoration: none;
  color: rgb(255, 0, 0);
  margin-top: 20px;
  transition: 0.1s; 
  :hover {
    background-color: #00f7b1;
  color: #000000;
} 
`;

export const FlexWarraper = styled.div`
display: flex;
`;
