import {
	StyledCountry,
	StyledCountryFlag,
	StyledCountryFlagContainer,
	StyledCountryInfo,
	StyledCountryInfoText,
	StyledCountryName
} from './styles';

const CountriesList = ({ countries }) => {
	return countries.map(country => {
		return (
			<StyledCountry key={country.flag}>
				<StyledCountryFlagContainer>
					<StyledCountryFlag src={country.flags.svg} alt={country.flags.alt} />
				</StyledCountryFlagContainer>
				<StyledCountryInfo>
					<StyledCountryName>{country.name.common}</StyledCountryName>
					<StyledCountryInfoText>
						Population: {country.population}
					</StyledCountryInfoText>
					<StyledCountryInfoText>
						Region: {country.region}
					</StyledCountryInfoText>
					<StyledCountryInfoText>
						Capital: {country.capital}
					</StyledCountryInfoText>
				</StyledCountryInfo>
			</StyledCountry>
		);
	});
};

export default CountriesList;
