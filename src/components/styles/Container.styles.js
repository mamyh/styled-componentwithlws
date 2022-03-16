import Styled from 'styled-components'

export const Container = Styled.div`
     display:flex;
     justify-content:center;
     align-items:center;
     width:100%;
     height:100vh;
     font-family:sans-serif;
     background:#262626;
`;

export const CardContainer = Styled.div`
     position:relative;
     background: #1e1e1e;
     height: 350px;
     width: 550px;
     overflow: hidden;
     display: flex;
     align-items: center;
`;

export const ContentContainer =Styled.div`
    width:215px;
    position: absolute;
    left:20px;
    z-index:3;
`;


