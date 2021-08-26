import styled from 'styled-components';

export const FooterWrapper = styled.footer`
	display: flex;
  	margin-top: 3rem;
  	padding: 1.6rem 0;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	font-size: 1.2rem;
	background-color: #414141;
  	color: #fff;
`;

export const FooterLink = styled.a`
	margin: .5rem 0;
  	width: 100%;
  	text-align: center;
  	color: #fff;
`;

export const FooterAddress = styled.span`
	margin: .5rem 0;
	width: 100%;
  	text-align: center;
`;

export const FooterCopy = styled.span`
	padding: 1.5rem 2rem 1rem 2rem;
  	font-size: 1rem;
	font-style: italic;
  	text-align: center;
`;
