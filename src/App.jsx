import React from 'react'
import styled from 'styled-components'
import Input from './component/Input'
import Icons from './component/Icon'
import Button from './component/Button'
import { FaFacebookF, FaInstagram, FaTwitter } from 'react-icons/fa'
function App() {
    const FaceBookBackground = "linear-gradient(to right, #0546A0 0%, #663FB6 100%)"
    const TwitterBackground = "linear-gradient(to right, #56C1E1 0%, #35A9cE   50%)"
    const InstagramBackground = "linear-gradient(to right, #A12A24 0%, #ED586C 40%, #F0A853 100%)"
    return <MainContainer className="main">
        <WelcomText> Login for free 🐧🐧</WelcomText>
        <InputContainer>
            <Input type="text" placeholder="Email" />
            <Input type="Password" placeholder="Password" />
        </InputContainer>
        <ButtonContainer>
            < Button content={"sign up"}/>
        </ButtonContainer>
        <LoginWith>OR LOGIN WITH</LoginWith>
        <HorizontalRule/>
        <IconsContainer>
           <Icons color={FaceBookBackground}>
            <FaFacebookF/>
           </Icons>
           <Icons color={InstagramBackground}>
            <FaInstagram/>
           </Icons>
           <Icons color={TwitterBackground}>
            <FaTwitter/>
           </Icons>
        </IconsContainer>
         <ForgetPassword>Forgot Password ?</ForgetPassword>
    </MainContainer>

} 

const MainContainer = styled.div`
    display: flex;
    align-items: center;
    flex-direction: column;
    height: 90vh;
    width: 35vw ;
    background: rgba(255, 255, 255, 0.15);
    box-shadow: 0px 8px 32px 0 rgba(31, 38, 135 0.37);
    backdrop-filter: blur(8.5px);
    border-radius:10px;
    color:white;
    text-tranform:uppercase;
    letter-spacing:0.4rem;
    @media only screen and (max-width:320px;){
        width:80vw;
        height:90vh;
        hr{
            margin-bottom:0.3rem;
        }
        h4{
            
        }
    }
`;


const WelcomText = styled.h2`
    margin:3rem 0 2rem 0;
`;

const InputContainer = styled.div`
    display: flex;
    align-items: center;
    flex-direction: column;
    justify-content:space-around;
    height:20%;
    width:100%
`;
const ButtonContainer = styled.div`
    color:black;
    margin: 1rem 0 2rem 0 ;
    width: 100%;
    justify-content: center;
    align-items: center;
    display: flex;


`;

const LoginWith = styled.h5`
    cursor:pointer; 
`;

const HorizontalRule = styled.hr`
    width:90%;
    height:0.3rem;
    border-redius:0.8rem;
    border:n one;
    margin:1.5rem 0 1rem 0;
    background: linear-gradient(to top right, yellow 0%, white 79%);
    backdrop-filter: blur{ 25px };
`;

const IconsContainer = styled.div`
    display:flex;
    justify-content: space-evenly;
    margin:2rem 0 3rem 0;
    width:80%;
`;

const ForgetPassword = styled.div`
    cursor:pointer;
`;



export default App
