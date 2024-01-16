'use client'
import React, { useContext ,useEffect,useState} from 'react'
import Image from 'next/image'
import { WeatherContext } from '@/Context/WeatherContext'
import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'
import { daySVG,nightSVG } from './data'



export default function ForecastCard() {
  const { Weather,loading,error } = useContext(WeatherContext)
  const [foreCast, setForeCast] = useState([])
const [Obj,setObj] = useState('')
// const [SVG,setSVG] = useState('')

    useEffect(() => {
        const d = new Date()
        const hour = d.getHours()
        if (hour > 6 && hour < 18) {
            setObj(daySVG)
        }
        else {
            setObj(nightSVG)
        }
    }, [foreCast])
  
  useEffect(() => {
    if (Weather.list) {
      let lis = []
      for (let i = 0; i <= Weather.list.length; i++){
        if (Weather.list[i]) {
          let txt = Weather.list[i].dt_txt.split(' ')[1]
          let date = Weather.list[i].dt_txt.split(' ')[0].slice(-2)
          const d = new Date()
          const str = d.toLocaleDateString().slice(0,2)
          if (txt === '00:00:00' && date !== str  ) {
            lis.push(Weather.list[i])
          }
        }
          
      }
      setForeCast(lis)
    }
    
  }, [Weather])
    
    
  

  return (
    <div className='bg-gray-800 p-4 text-white text-sm rounded-md'>
      <h3 className='text-gray-400'>5 day Forecast</h3>
    <div className='flex flex-wrap gap-y-3 items-center justify-center gap-x-4'>
      {error? <p className='text-center'>NA</p> : loading && <Skeleton count={5}/> ||
          foreCast.map((item, key) => {
                      let SVG
                      if (item.weather[0].main === 'Clear') {
                        SVG = Obj.Clear
                      }
                      if (item.weather[0].description === 'overcast clouds') {
                        SVG = Obj.Clouds
                    }
                      if (item.weather[0].description === 'broken clouds') {
                        SVG = Obj.FewClouds
                    }
                      if (item.weather[0].description === 'few clouds') {
                        SVG = Obj.FewClouds
                    }
                      if (item.weather[0].description === 'scattered clouds') {
                        SVG = Obj.FewClouds
                    }
                    
                      if (item.weather[0].main === 'Rain') {
                        SVG = Obj.Rain
                      }
                      if (item.weather[0].main === 'Snow') {
                        SVG = Obj.Snow
                      }
                      if (item.weather[0].main === 'Storm') {
                        SVG = Obj.Storm
                      }
                      
    
          return (
      <div className='flex gap-x-4 justify-center items-center ' key={key}>
      <div className='mt-2 space-y-1 flex flex-col justify-center '>
                      <p className='text-center'>{item.dt_txt.split(' ')[0]}</p>
                      {
                          <Image src={SVG} alt='Sun' height={80} width={80}/>
                          
                      } 
                <p className='text-center'>{item.weather[0].main }</p>
                <p>{Math.round(item.main.temp_max) - 273} °C/<span className='text-gray-400'>{Math.round(item.main.temp_min) - 273 }°C</span></p>
        </div>
     
        </div>
            
          )
        })
        }
        </div>

      
    </div>
  )
}
