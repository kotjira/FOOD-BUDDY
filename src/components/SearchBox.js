import React, {useEffect, useState} from 'react';
import './SearchBox.css'
import Restaurant from './Restaurant';


function SearchBox() {

	const [restaurant, setRest] = useState([]);
	const [id, setId] = useState();	
	const [search, setSearch] = useState("");
	const [query, setQuery] = useState([0, ""]);
	
	useEffect(() => {
		getRestaurants();
	}, [query]);
	
	const getRestaurants = async () => {
		if(!(query[0] === 0 && query[1] === "")){
			const response = await fetch(
				`https://developers.zomato.com/api/v2.1/search?entity_id=${query[0]}&entity_type=city&q=${query[1]}&count=100`, 
				{
					method: 'GET',
					headers: {
						Accept: 'application/json',
						'user-key': '2ad63f94902019632381f2df301a60cc'
					}
				}
			);
			const data = await response.json();
			setRest(data.restaurants);
		}
	};
	
	const updateID = e => {
		setId(e.target.value);
	}
	
	const updateSearch = e => {
		setSearch(e.target.value);
	}
	
	const getSearch = e => {
		e.preventDefault();
		setQuery([id, search])
	}
	
	return (
	    <div className="App">
			<nav className='SearchBox-bg'>
				<div className="'container'">
					<h1 className='header'>Complete booking in one place</h1>
					<form className="searchBar"  onSubmit={getSearch}>
						<label className='search-label'>
							<input id="getText" type="text" className="restaurant" placeholder="Search for Restaurant" onChange={updateSearch}/>
							<i className='fa fa-search search-icon' aria-hidden='true'/>
						</label>
					</form>
				</div>
			</nav>
			
			<div className='search-results'>
			{restaurant.map(rest =>  (
				<Restaurant
					key = {rest.restaurant.id}
					name = {rest.restaurant.name}
					thumb = {rest.restaurant.thumb}
					locality = {rest.restaurant.location.locality}
					address = {rest.restaurant.location.address}
					cuisines = {rest.restaurant.cuisines}
					cost = {rest.restaurant.average_cost_for_two}
					rating = {rest.restaurant.user_rating.aggregate_rating}
					votes = {rest.restaurant.user_rating.votes}
					rating_color = {rest.restaurant.user_rating.rating_obj.bg_color.type}
				/>	
			))}
			

			</div>
	    </div>

  );
}

export default SearchBox