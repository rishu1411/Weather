'use client'
import React, { createContext, useEffect, useState } from 'react'

export const WeatherContext = createContext()

export default function WeatherProvider({ children }) {
    const [location, setLocation] = useState('')
    const [City, setCity] = useState('mumbai')
    const [loading, setLoading] = useState(true)
    const [Weather, setWeather] = useState('')
    const [error,setError] = useState('')
    
    useEffect(() => {
        const fetchWeather = async () => {
            const url = `https://api.openweathermap.org/data/2.5/forecast?q=${City}&appid=6f5f8a9e99bf717d73456226a225a66e`
            try {
                fetch(url)
                    .then((res) => res.json())
                    .then((users) => {
                        setWeather(users)
                        setLoading(false)
                })
            }
            catch (err) {
                console.log(`Error ${err}`)
                setError('Invalid city name')
            }
        }
        fetchWeather()
    }, [City])
    
    

    onkeydown = (ev) => {
        if (ev.key === 'Enter') {
            let regex = /^[a-zA-Z]+$/;
            if (regex.test(location)) {
                setCity(location)
                setLocation('')
                setError('')
            }
            else {
                setError('Invalid City Name')
            }
        }
    }

  return (
      <WeatherContext.Provider value={{location,setLocation,City,Weather,loading,setCity,setError,error}}>{ children}</WeatherContext.Provider>
  )
}

// Solve the error in the terminal?