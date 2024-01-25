import styled from 'styled-components';
import { COLORS } from '../../styles/colors';

const StyledCountry = styled.div`
	width: 264px;
	background-color: ${COLORS.secondary};
`;

const StyledCountryFlagContainer = styled.div`
	width: 264px;
	height: 160px;
`;

const StyledCountryFlag = styled.img`
	width: 100%;
	height: 160px;
	object-fit: cover;
`;

const StyledCountryInfo = styled.div`
	padding: 1.5rem;
	font-size: 0.875rem;
`;

const StyledCountryName = styled.h3`
	font-weight: 'extra-bold';
	font-size: 1.125rem;
	margin: 0;
	margin-bottom: 1rem;
	white-space: nowrap;
	overflow: hidden;
	text-overflow: ellipsis;
`;

const StyledCountryInfoText = styled.span`
	display: block;
	margin-bottom: 0.5rem;
`;

export {
	StyledCountry,
	StyledCountryFlag,
	StyledCountryFlagContainer,
	StyledCountryInfo,
	StyledCountryInfoText,
	StyledCountryName
};
