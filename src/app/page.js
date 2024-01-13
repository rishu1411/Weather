import DetailsCard from '@/Components/DetailsCard'
import ForecastCard from '@/Components/ForecastCard'
import InfoCard from '@/Components/InfoCard'
import SearchBar from '@/Components/SearchBar'
import React from 'react'
import { SkeletonTheme } from 'react-loading-skeleton'

export default function page() {
  return (
    <SkeletonTheme baseColor='#22222f' highlightColor='#3b3b53'>
    <div className='m-4 flex flex-col lg:flex-row'>
      <div className='flex-1'>
        <SearchBar />
        <InfoCard />
      </div>
      <div className='flex-1 mx-4 space-y-4'>
        <DetailsCard />
        <ForecastCard/>
      </div>
      </div>
      </SkeletonTheme>
  )
}
