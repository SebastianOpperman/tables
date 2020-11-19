import React from 'react';
import ReactDOM from 'react-dom';
import './css/app.css';
import Table from './Table';

const data_1 = [
	{
		name: "John",
		age: 29,
		movie_rating: 4,
		city: "Vancouver",
		region: "British Columbia",
		country: "Canada",
	},
	{
		name: "Sarah",
		age: 32,
		movie_rating: 5,
		city: "Frankfurt",
		region: "Hesse",
		country: "Germany",
	},
	{
		name: "Dave",
		age: 44,
		movie_rating: 4,
		city: "San Diego",
		region: "California",
		country: "United States",
	},
];

const data_2 = [
	{
		item: "apple",
		inventory: 12,
		size: "medium",
	},
	{
		item: "blueberry",
		inventory: 103,
		size: "small",
	},
	{
		item: "grapefruit",
		inventory: 4,
		size: "large",
	},
	{
		item: "strawberry",
		inventory: 14,
		size: "small",
	},
];

const App = () => (
	<>
		<Table data={data_1} columns={{
			name: 'Name',
			movie_rating: 'Rating',
			age: 'Age',
			city: 'City',
			region: 'State/Province',
			country: 'Country'
		}} sortable={['Name', 'Age']} />
		<Table data={data_2} columns={{
			item: 'Food Product',
			size: 'Size',
			inventory: 'Inventory'
		}} />
	</>
);

ReactDOM.render(<App />, document.getElementById('app'));