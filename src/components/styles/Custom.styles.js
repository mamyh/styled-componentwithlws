import Styled from 'styled-components';

export const Tag = Styled.span`
    display: inline-block;
    color:#fff;
    background:${(props)=>props.color};
    margin-bottom:10px;
    padding: 5px 10px ;
    border-radius:50px;
    font-size:0.7em;
`;
