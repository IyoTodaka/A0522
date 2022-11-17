import React from 'react'
import Input from './Input/Input'

const SearchForm = ({
    searchTerm,
    onSearchInput,
    onSearchSubmit
}) => {
  return (
    <form onSubmit={onSearchSubmit}>
      <Input
        isFocused
        id="search"
        value={searchTerm}
        onInputChange={onSearchInput}
      >
        Search:&nbsp;
      </Input>
      <button type="submit" disabled={!searchTerm}>Submit</button>
    </form>
  )
}

export default SearchForm