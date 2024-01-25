import styled from 'styled-components';
import { COLORS } from '../../styles/colors';

const StyledHeader = styled.header`
	display: flex;
	align-items: center;
	justify-content: space-between;
	height: 80px;
	padding-inline: 80px;
	background-color: ${COLORS.secondary};
	box-shadow: 0 10px 10px rgb(0 0 0 / 0.05);
`;

const StyledHeaderTitle = styled.h1`
	font-size: 1.5rem;
`;

export { StyledHeader, StyledHeaderTitle };
