import styled from 'styled-components'

export default function Icon({color, children}) {
    return (
        <StyledIcon background={color}>{children}</StyledIcon>
    )
}

const StyledIcon = styled.div`
    justify-content: center;
    align-items: center;
    display:flex;
    width: 3.5rem;
    height: 3.5rem;
    border: none;
    color: white; 
    border-radius: 4rem;
    cursor:pointer;
    background: ${(props) => props.background };
    svg{
       width:1.5rem; 
       height:1.5rem; 

    }
`;
