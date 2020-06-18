import { loadCountries, saveToStorage, loadFromStorage } from './services'
import { useState, useEffect } from 'react'

export default function useCountryData() {
  const [countryData, setCountryData] = useState(
    loadFromStorage('countryData') || []
  )
  const lastSavedDate = loadFromStorage('lastSavedDate')

  useEffect(() => {
    lastSavedDate !== getCurrentDate() &&
      loadCountries()
        .then((data) => setCountryData(data.reverse()))
        .catch((error) => console.log(error))
  }, [lastSavedDate])

  useEffect(() => {
    saveToStorage('countryData', countryData)
    saveToStorage('lastSavedDate', getCurrentDate())
  }, [countryData])

  function getCurrentDate() {
    return new Date().toLocaleDateString('de-DE')
  }
  return { countryData }
}

// hier geht auch const currentDate = new Date().toLocaleDateString('de-DE')
