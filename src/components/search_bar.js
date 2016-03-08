import React, { Component } from 'react';

// Functional component.
// const SearchBar = () => {
//   return <input />;
// };

// Let's use a class-based component instead.
// Define a new class named SearchBar, and give it access
// to all of the functionality that React.Component has.
// onChange property on elements is part of React. Look at React docs.
class SearchBar extends Component {
  constructor(props) {
    super(props);

    this.state = { term: '' };
  }

  render() {
    return (
      <div className="search-bar">
        <input
          placeholder="Search for videos"
          value={this.state.term}
          onChange={event => this.onInputChange(event.target.value)} />
      </div>
    );
  }

  onInputChange(term) {
    this.setState({term});
    this.props.onSearchTermChange(term);
  }

}

// State is a plain JS Object that is used to record
// and react to user events.

// All JavaScript classes have a special function called constructor.
// The function constructor is the *only* function that is called
// automatically whenever a new instance of the class is created.
// Good for initializing variables and state.

export default SearchBar;
