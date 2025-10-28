import React, { useState } from 'react'

const SearchBar = ({ fetchWeather }) => {
    const [city, setCity] = useState("");
    const handleSubmit = (e) => {
      e.preventDefault();
      if (city.trim()) {
        fetchWeather(city)
        setCity('');
      }
    }
  return (
    <form className='flex' onSubmit={handleSubmit}>
        <input className='flex-1 p-2 border-1 border-gray-300 rounded-l-lg outline-none  border-r-0' type="text" placeholder='Wpisz nazwę miasta' value={city} onChange={(e) => {
            setCity(e.target.value)
        }
        }/>
        <button className='bg-blue-500 border cursor-pointer p-2 hover:bg-blue-600 border-l-0 rounded-r-lg' type='submit'>
            Szukaj
        </button>
    </form>
  )
}

export default SearchBar