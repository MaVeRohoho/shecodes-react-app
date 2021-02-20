import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core'
import { fal } from '@fortawesome/pro-light-svg-icons'

library.add(fal)

export default function Icons {
const Showcase = () => (
  <div>
    <FontAwesomeIcon icon={['fal', 'sun']} />
    <FontAwesomeIcon icon={['fal', 'moon-stars']} />
    <FontAwesomeIcon icon={['fal', 'cloud-sun']} />
    <FontAwesomeIcon icon={['fal', 'moon-cloud']} />
    <FontAwesomeIcon icon={['fal', 'cloud']} />
    <FontAwesomeIcon icon={['fal', 'clouds-sun']} />
    <FontAwesomeIcon icon={['fal', 'clouds-moon']} />
    <FontAwesomeIcon icon={['fal', 'cloud-moon-rain']} />
    <FontAwesomeIcon icon={['fal', 'cloud-showers-heavy']} />
    <FontAwesomeIcon icon={['fal', 'cloud-sun-rain']} />
    <FontAwesomeIcon icon={['fal', 'cloud-moon-rain']} />
    <FontAwesomeIcon icon={['fal', 'thunderstorm-sun']} />
    <FontAwesomeIcon icon={['fal', 'thunderstorm-moon']} />
    <FontAwesomeIcon icon={['fal', 'snowflake']} />
    <FontAwesomeIcon icon={['fal', 'snowflakes']} />
    <FontAwesomeIcon icon={['fal', 'fog']} />
</div>
);
}
