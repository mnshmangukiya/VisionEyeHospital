import React from 'react'
import img56 from '../images/img56.png'
import Faq from './Faq'
import Get_in_touch from './Get_in_touch'
import Hero from './Hero'

export default function Services() {
  return (
    <div>
      {/* hero section */}
      <Hero heading1='Services we Provide' heading2='Our Services'/>

      <img className='img-fluid position-absolute d-lg-block d-none outerimg8' src={require('../images/img83.png')} alt="" width={100} height={100} />

      {/* services */}
      <div className='container services_weoffer'>
        <div className='text-center'>
          <p className='aboutus_text3 mx-auto d-block'><span>Services </span>we provide</p>
          <p className='aboutus_text4 '>A cataract is a clouding of the lens inside </p>
          <svg className='commonheading_svg ' xmlns="http://www.w3.org/2000/svg" width="47" height="4" viewBox="0 0 47 4" fill="none">
            <path d="M45.5 2H1.5" stroke="#1C2434" stroke-width="3" stroke-linecap="round" />
          </svg>
        </div>

        <div class="container">
          <div class="row row-cols-3 col services_weoffer_row">

            <div class="col-lg-4 col-6">
              <a class="card services_weoffer_card" href='/services/oculoplasty'>
                <img src={require('../images/img48.png')} className='ms-auto img-fluid' alt="..." />
                <h5>Oculoplasty</h5>
                <p>Lorem Ipsum has been the industry's standardeds dummy text ever since the 1500s, Lorem hellooes unknown printer</p>
              </a>
            </div>

            <div class="col-lg-4 col-6">
              <a class="card services_weoffer_card" href='#'>
                <img src={require('../images/img49.png')} className='ms-auto img-fluid' alt="..." />
                <h5>Cataract</h5>
                <p>Lorem Ipsum has been the industry's standardeds dummy text ever since the 1500s, Lorem hellooes unknown printer</p>
              </a>
            </div>

            <div class="col-lg-4 col-6">
              <a class="card services_weoffer_card" href='#'>
                <img src={require('../images/img50.png')} className='ms-auto' alt="..." />
                <h5>Refractive Procedures</h5>
                <p>Lorem Ipsum has been the industry's standardeds dummy text ever since the 1500s, Lorem hellooes unknown printer</p>
              </a>
            </div>

            <div class="col-lg-4 col-6">
              <a class="card services_weoffer_card" href='#'>
                <img src={require('../images/img51.png')} className='ms-auto' alt="..." />
                <h5>Glaucoma</h5>
                <p>Lorem Ipsum has been the industry's standardeds dummy text ever since the 1500s, Lorem hellooes unknown printer</p>
              </a>
            </div>

            <div class="col-lg-4 col-6">
              <a class="card services_weoffer_card" href='#'>
                <img src={require('../images/img52.png')} className='ms-auto' alt="..." />
                <h5>Retina</h5>
                <p>Lorem Ipsum has been the industry's standardeds dummy text ever since the 1500s, Lorem hellooes unknown printer</p>
              </a>
            </div>

            <div class="col-lg-4 col-6">
              <a class="card services_weoffer_card" href='#'>
                <img src={require('../images/img53.png')} className='ms-auto' alt="..." />
                <h5>Pediatric</h5>
                <p>Lorem Ipsum has been the industry's standardeds dummy text ever since the 1500s, Lorem hellooes unknown printer</p>
              </a>
            </div>

            <div class="col-lg-4 col-6">
              <a class="card services_weoffer_card" href='#'>
                <img src={require('../images/img54.png')} className='ms-auto' alt="..." />
                <h5>Implantable Contact Lens (ICL)</h5>
                <p>Lorem Ipsum has been the industry's standardeds dummy text ever since the 1500s, Lorem hellooes unknown printer</p>
              </a>
            </div>

            <div class="col-lg-4 col-6">
              <a class="card services_weoffer_card" href='#'>
                <img src={require('../images/img55.png')} className='ms-auto' alt="..." />
                <h5>Cornea</h5>
                <p>Lorem Ipsum has been the industry's standardeds dummy text ever since the 1500s, Lorem hellooes unknown printer</p>
              </a>
            </div>

          </div>
        </div>
      </div>

      <img className='img-fluid position-absolute d-lg-block d-none outerimg9' src={require('../images/img31.png')} alt="" width={300} height={273} />

      {/* faq */}
      <Faq image={img56} />

      {/* get in touch */}
      <Get_in_touch/>

      <img className='img-fluid position-absolute d-lg-block d-none outerimg10' src={require('../images/img30.png')} alt="" width={259} height={198}/>
    </div>
  )
}
