import React from 'react'
import s from './Searchbar.module.css'

export class Searchbar extends React.Component {
  state = {
    searchValue: '',
  
  }

  handlerSubmit = (e) => {
    e.preventDefault()
    this.props.search(this.state.searchValue)
    this.setState({ searchValue: ''});
  }

  handlerChangeInput = (e) => {
  this.setState({ searchValue: e.target.value });
  
  }

  render() {
    return (
      <header className={s.Searchbar}>
        <form className={s.SearchForm} onSubmit={this.handlerSubmit}>
          <button type="submit" className={s.SearchFormButton}>
            <span className={s.SearchFormButtonLabel}>Search</span>
          </button>

          <input
            className={s.SearchFormInput}
            type="text"
            // autocomplete="off"
            // autofocus
            value={this.state.searchValue}
            placeholder="Search images and photos"
            onChange={this.handlerChangeInput}
          />
        </form>
      </header>
    );

  }
}

