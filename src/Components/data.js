

import Clear from '../Icon/Dark Icons SVG/Weather=Clear, Moment=Day.svg'
import ClearN from '../Icon/Dark Icons SVG/Weather=Clear, Moment=Night.svg'
import Cloudy from '../Icon/Dark Icons SVG/Weather=Cloudy, Moment=Day.svg'
import CloudyN from '../Icon/Dark Icons SVG/Weather=Cloudy, Moment=Night.svg'
import FewClouds from '../Icon/Dark Icons SVG/Weather=Few clouds, Moment=Day.svg'
import FewCloudsN from '../Icon/Dark Icons SVG/Weather=Few clouds, Moment=Night.svg'
import Rain from '../Icon/Dark Icons SVG/Weather=Rain, Moment=Day.svg'
import RainN from '../Icon/Dark Icons SVG/Weather=Rain, Moment=Night.svg'
import Snow from '../Icon/Dark Icons SVG/Weather=Snow, Moment=Day.svg'
import SnowN from '../Icon/Dark Icons SVG/Weather=Snow, Moment=Night.svg'
import Storm from '../Icon/Dark Icons SVG/Weather=Storm, Moment=Day.svg'
import StormN from '../Icon/Dark Icons SVG/Weather=Storm, Moment=Night.svg'

export const daySVG = {
    Clear: Clear,
    Clouds: Cloudy,
    FewClouds: FewClouds,
    Rain: Rain,
    Snow: Snow,
    Storm:Storm

}
export const nightSVG = {
    Clear: ClearN,
    Clouds: CloudyN,
    FewClouds: FewCloudsN,
    Rain: RainN,
    Snow: SnowN,
    Storm:StormN
}

export const dayBG = {
    Clear: 'bg-[url(../CardBg/clearWeather.png)]',
    Clouds: 'bg-[url(../CardBg/Cloudy.png)]',
    FewClouds: 'bg-[url(../CardBg/FewClouds.png)]',
    Rain: 'bg-[url(../CardBg/Rain.png)]',
    Snow: 'bg-[url(../CardBg/Snow.png)]',
    Storm: 'bg-[url(../CardBg/Storm.png)]',
}
export const nightBG = {
    Clear: 'bg-[url(../CardBg/Night.png)]',
    Clouds: 'bg-[url(../CardBg/CloudyNight.png)]',
    FewClouds: 'bg-[url(../CardBg/FewCloudsNight.png)]',
    Rain: 'bg-[url(../CardBg/RainNight.png)]',
    Snow: 'bg-[url(../CardBg/SnowNight.png)]',
    Storm: 'bg-[url(../CardBg/StormNight.png)]'
}