import React from 'react'

type Props = {
    onSearch: (criteria: string) => void
}
const SearchBox = ({ onSearch } : Props) => {
    const [criteria, setCriteria] = React.useState("")

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setCriteria(e.currentTarget.value)
        if(onSearch){
            onSearch(e.currentTarget.value)
        }
    }

  return (
    <div>
        <input 
            type="text" 
            value={criteria}
            onChange={handleChange}
        />
    </div>
  )
}

export default SearchBox