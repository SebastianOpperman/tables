import React, {useState} from 'react';
import _ from './style.module.css';

interface Props {
	data: Object[],
	columns: Object,
	sortable?: string[]
}

export default ({data, columns, sortable}: Props) => {
	const columnKeys = Object.keys(columns);

	const structuredData = [];
	data.map(item => {
		const row = {}
		columnKeys.map(key => {
			row[key] = item[key]
		});
		structuredData.push(row);
	});

	const [sorted, setSorted] = useState(structuredData),
				sort = (column:string) => setSorted([...(sorted.sort((a:any,b:any) => (a[column] > b[column]) ? 1 : -1))]);
	
	const renderRating = rating => {
		switch(rating) {
			case 1: return '⭐';
			case 2: return '⭐⭐';
			case 3: return '⭐⭐⭐';
			case 4: return '⭐⭐⭐⭐';
			case 5: return '⭐⭐⭐⭐⭐';
		}
	}

	const renderCountry = country => {
		switch(country) {
			case 'Canada': return '🇨🇦';
			case 'Germany': return '🇩🇪';
			case 'United States': return '🇺🇸';
		}
	}

	const renderCell = (cell, k) => {
		switch(columnKeys[k]) {
			case 'country':
				return <td key={k}>{renderCountry(cell)}</td>
			case 'movie_rating':
				return <td key={k}>{renderRating(cell)}</td>
			case 'inventory':
				return <td key={k} className={_.green}>{cell}</td>
			case 'item':
				return <td key={k} className={_.blue}>{cell}</td>
			default:
				return <td key={k}>{cell}</td>
		}
	}

	return (
		<table className={`${_.table} ${columnKeys.length > 3  ? _.large : ''}`}>
			<thead>
				<tr>
					{Object.values(columns).map((column,k) => (
						<th key={k}
								onClick={() => (sortable && sortable.includes(column) && sort(column))}
								className={sortable && sortable.includes(column) ? _.sortable : ''}>{column}<span /></th>
					))}
				</tr>
			</thead>
			<tbody>
				{sorted.map((row,k) => (
					<tr key={k}>
						{Object.values(row).map((cell,k) => renderCell(cell,k))}
					</tr>
				))}
			</tbody>
		</table>
	);
}