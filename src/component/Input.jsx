import React from 'react'
import styled from 'styled-components'


export default function Input({ type, placeholder }) {
  return <StyledInput type={type} placeholder={placeholder} />



}

const StyledInput = styled.input`
  background: rgba(255, 255, 255, 0.15);
  box-shadow: 0px 8px 32px 0 rgba(31, 38, 135 0.37);
  border-radius: 2rem;
  border:none;
  width:80%;
  margin-top:10px;
  outline:none;
  height:3rem;
  padding:1rem;
  color:  white; 
  font-size:1rem;
  font-weight: bold;
  &:focus {
    display:inline-block;
    box-shadow: 0 0 0 0.2rem white;
    backdrop-filter: blur(12rem);
    border-radius:2rem;
  }
  &::placeholder{
    colo:white;
    font-weight: 100;
    font-size:1rem;
  }
 
`;
