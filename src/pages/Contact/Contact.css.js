import styled from 'styled-components';

export const ContactWrapper = styled.section`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  	font-size: 1.2rem;
`;

export const ContactHeader = styled.h1`
    font-size: 2rem;
    margin-bottom: 3rem;
    text-align: center;
`;

export const ContactLink = styled.a`
	display: flex;
	padding-left: 3rem;
	margin: .6rem 0;
	width: 100%;
	justify-content: start;
	align-items: center;
	color: #000;
`;

export const ContactAddress = styled.span`
	display: flex;
  	padding-left: 3.3rem;
	margin: .6rem 0;
	width: 100%;
	justify-content: start;
	align-items: center;
`;

export const ContactMap = styled.div`
	margin-top: 4rem;
  	width: 18rem;
  	height: 16rem;
  	border-radius: 15px;
  	z-index: 100;
`;

export const Icon = styled.span`
	margin-right: 2rem;
  	font-size: 2rem;
`;

export const Map = styled.iframe`
	width: 100%;
	height: 100%;
	border: 0;
	border-radius: 15px;
`;
