import styled from "styled-components";
import { Link } from 'react-router-dom'


export const Headers = styled.div`
width: 100vw;
padding: 24px 0;
box-sizing: border-box;
height: 82px;
`

export const InnerHeaders = styled.div`
display:flex;
width: 98vw;
margin: 0 auto;
align-items: center;
gap: 70px;
justify-contents: space-between;
`;

export const Image = styled.img`
    width: 100%;

`;

export const LinkText = styled(Link)`
`

export const Grid = styled.div`
    display: flex;
    width: 100%;
    alignItem: center;
    justifyContent: center;

`

export const Navbar = styled.div`
    display: flex;
    justify-content: space-between;
    flex: 1.6;
`;

export const Navs = styled.div`
position: relative;
`;
export const Nav = styled.div`

`;
export const NavItems = styled.div`
background-color: ${(props) => props.theme.white};
padding: 20px;
border-radius: 10px;
width: 600px;
position: absolute;
right:50%;
transform: translateX(55%);
top: 30px;
display: grid;
grid-template-columns: 1fr 1fr;
gap: 30px;
box-shadow: 0 -3px 20px rgb(179, 179, 179);

&::before{
    content: "";
    width: 50px;
    height: 50px:
    background-color: red;
    position: absolute;
    top:-500px;
    z-index: 10;
}

`;
export const Text = styled.p`
font-weight: ${(props) => props.weight && `${props.weight}`};
`;
export const NavIcon = styled.div`
`;
export const NavDescription = styled.div`
`;

export const HeaderCTA = styled.div`
flex: 1;
display: flex;
align-items:center;
justify-content: flex-end;
width: 100%;
gap:50px;
font-size: 18px;
font-weight: 700;
`;