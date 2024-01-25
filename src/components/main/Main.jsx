import { useEffect, useState } from 'react';
import CountriesList from '../countries-list/CountriesList';
import { StyledMain } from './styles';

const Main = () => {
	const [countries, setCountries] = useState([]);

	useEffect(() => {
		getAllCountries(setCountries);
	}, []);

	return (
		<StyledMain>
			<CountriesList countries={countries} />
		</StyledMain>
	);
};

const getAllCountries = async setCountries => {
	const response = await fetch('https://restcountries.com/v3.1/all');
	const countriesData = await response.json();
	console.log(countriesData);
	setCountries(countriesData);
};

export default Main;
