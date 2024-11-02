import {styled} from 'styled-components';

export const StyledButton = styled.button `
width: 100px;
height: 60px;

&:hover{
    background-color: green;
}
`;

export const RedButton = styled.button `
width: 100px;
height: 60px;
background-color: red;
&:hover{
    background-color: green;
}
`;

export const Card = styled.div `
background-color: ${(props) =>(props.active ? "yellow" :"purple")};
border: 1px solid black;
border-radius:10px;
padding:20px;

`;