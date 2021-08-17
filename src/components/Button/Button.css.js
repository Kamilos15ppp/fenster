import styled from 'styled-components';

export const BasicButton = styled.button`
    position: absolute;
    bottom: 1.5rem;
    right: ${props => props.position === 'right' ? '8rem' : null};
    left: ${props => props.position === 'left' ? '8rem' : null};
    padding: .5rem 1rem;
    background-color: #ED184F;
    color: #fff;
    border: none;
    border-radius: 20px;
    font-size: 1rem;
    text-transform: uppercase;
    box-shadow: 2px 2px 10px 0 rgba(0,0,0,0.75);
`;
