import React from 'react'

export default function Hero(props) {
    return (
        <div>
            <div class="container-fluid text-center">
                <img className='d-sm-block d-none ' src={require('../images/img33.png')} alt="Your Image" width='1920' height="340" />
                <img className='d-sm-none d-block aboutus_hero_img2' src={require('../images/img90.png')} alt="Your Image" width='576' height="173" />

                <div className="container text-center aboutus_hero">
                    <a>{props.heading1}</a>
                    <p>
                        <img src={require('../images/img32.png')} alt="Your Image" width='18' height="18" />
                        {props.heading2}
                        <img src={require('../images/img32.png')} alt="Your Image" width='18' height="18" />
                    </p>
                </div>
            </div>
        </div>
    )
}
