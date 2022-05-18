import React from 'react'
import audiophile from './images/client-audiophile.svg'
import databiz from './images/client-databiz.svg'
import maker from './images/client-maker.svg'
import meet from './images/client-meet.svg'
const Text = () => {
  return (
    <div>
        <h1>
            Make remote work
        </h1>
        <p>
        Get your team in sync, no matter your location. Streamline processes, 
        create team rituals, and watch productivity soar.
        </p>
        <button>
            Learn more
        </button>
        <div>
            <ul>
                <li>
                    <img src= {audiophile} alt="" />
                </li>
                <li>
                    <img src={databiz} alt="" />
                </li>
                <li>
                    <img src={maker} alt="" />
                </li>
                <li>
                    <img src={meet} alt="" />
                </li>
            </ul>
        </div>
    </div>
  )
}

export default Text