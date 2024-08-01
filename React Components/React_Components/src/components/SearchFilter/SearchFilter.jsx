// Functional Requirements
// Real-time Suggestions
// Dynamic and Static data support
// Debouncing
// Keyboard Navigation
// Highlighted Match
// Customizable 
// Loading Indicator

import axios from 'axios'
import React, { useEffect } from 'react'



function SearchFilter() {

  const fetchSuggestions = async () => {
    try {
      const response = await axios.get('https://dummyjson.com/products')
      console.log(response.data)
    }
    catch (err) {
      console.log(err)
    }
  }

  useEffect(() => {
    fetchSuggestions()
  }, [])

  return (
    <>
      <div>SearchFilter</div>
      <input type="text" name="" id="" placeholder='Enter Category' />
    </>

  )
}

export default SearchFilter