import React, { Component } from 'react';
import ErrorBoundary from '../components/ErrorBoundary'
import SearchBox from '../components/SearchBox';
import CardList from '../components/CardList';
import './App.css';

class App extends Component {			/*Class is created for making a constructor*/
	constructor() {
		super()
		this.state = {					/*Initial State*/
			robots: [],
			searchfield: ''
		}
	}

	componentDidMount() {
		fetch('https://jsonplaceholder.typicode.com/users')
		.then(response=> { return response.json() })
		.then(users => { this.setState({robots: users}) });
	}
	/*Fetching user_robots from database & then updating the state*/

	updateSearchField = (event) => {
		this.setState({searchfield: event.target.value})
	}
	/*this keyword in function definition will pass updated search value into updateSearchField
	   function and, event is taken as parameter.
	   this.setState is used to update the searchfield, which was firstly initialized in constructor.*/

	render() {
		const { robots, searchfield} = this.state
		/*v3 addition: this.state.robots replaced with just robots and 
		  globally initialized with this.state (similar for searchfield)*/
		const filterRobots = robots.filter((robot) => {
			return robot.name.toLowerCase().includes(searchfield.toLowerCase())
		})
		/*The filterRobots function will compare robots with and updated value of searchfield and will 
		   filter robots. However by-default, all robots will be displayed as present in constructor*/
		
		if(!robots.length) /*If robots.length is 0, the not operator will make it true and if statement executes*/
		{
			return <h1 className="tc pt2">Loding</h1>
		}
		else
		{	
			return (
				<div className="tc pb4">
					<h1 className="f2 pt3">RoboFriends</h1>
					<SearchBox searchChangeEvent = {this.updateSearchField} />	
					{/*A searchChangeEvent function gets executed by SearchBox.js 
					   using onChange method i.e. whenever searchfield is changed (Goto updateSearchField)*/}
					<ErrorBoundary>
						<CardList robots={filterRobots}/>
					</ErrorBoundary>
				</div>
			);	
		}
	}
	
}

export default App;