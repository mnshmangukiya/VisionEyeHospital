import React from 'react'
import img32 from '../images/img32.png'
import img33 from '../images/img33.png'
import img48 from '../images/img48.png'
import img49 from '../images/img49.png'
import img50 from '../images/img50.png'
import img51 from '../images/img51.png'
import img52 from '../images/img52.png'
import img53 from '../images/img53.png'
import img54 from '../images/img54.png'
import img55 from '../images/img55.png'
import img56 from '../images/img56.png'
import img57 from '../images/img57.png'
import img58 from '../images/img58.png'
import img59 from '../images/img59.png'
import img60 from '../images/img60.png'
import img61 from '../images/img61.png'
import img62 from '../images/img62.png'
import img63 from '../images/img63.png'
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import { Link } from 'react-router-dom'

export default function Services() {
  return (
    <div>
      {/* hero section */}
      <div class="container-fluid text-center" style={{ marginTop: 50 + 'px' }}>
        <svg xmlns="http://www.w3.org/2000/svg" width="1920" height="340" viewBox="0 0 1920 340" fill="none">
          <path d="M0 0H1920V260.132L0 340V0Z" fill="#F1F5F9" />

          <foreignObject width="100%" height="100%">
            <div>
              <img src={img33} alt="Your Image" width='' height="" />
            </div>
          </foreignObject>
        </svg>

        <div className="container text-center">
          <Link type="button" style={{ marginTop: -450, borderRadius: 30 }} class="px-4 py-2 btn btn-primary ms-auto" to='/services'>
            Services we Provide
          </Link>

          <p className='text17 ' style={{ marginTop: -200 }}>
            <img src={img32} alt="Your Image" width='' height="" style={{ marginTop: -60 }} />
            Our Services
            <img src={img32} alt="Your Image" width='' height="" style={{ marginTop: 30, marginLeft: 10 }} />
          </p>
        </div>
      </div>

      {/* services */}
      <div className='container team' style={{ marginTop: 100 + 'px' }}>
        <p className='text3 mx-auto d-block'><span style={{ color: '#017CC7' }}> Services </span> we provide</p>
        <p className='text4'>A cataract is a clouding of the lens inside </p>
        <svg style={{ color: '#1C2434', margin: 'auto', display: 'block', marginBottom: 50 + 'px' }} xmlns="http://www.w3.org/2000/svg" width="47" height="4" viewBox="0 0 47 4" fill="none">
          <path d="M45.5 2H1.5" stroke="#1C2434" stroke-width="3" stroke-linecap="round" />
        </svg>
        <div class="container text-center">
          <div class="row row-cols-3 row-gap-4">
            <div class="col-lg-4 col-6">
              <div class="card rounded-4 cardservices" >
                <img src={img48} className='ms-auto' alt="..." width={141} height={141} />
                <div class="card-body">
                  <h5 class="text7 text-start">Oculoplasty</h5>
                  <p class="card-text">Lorem Ipsum has been the industry's standardeds dummy text ever since the 1500s, Lorem hellooes unknown printer</p>
                </div>
              </div>
            </div>
            <div class="col-lg-4 col-6">
              <div class="card rounded-4 cardservices">
                <img src={img49} className='ms-auto' alt="..." width={141} height={141} />
                <div class="card-body">
                  <h5 class="text7 text-start">Cataract</h5>
                  <p class="card-text">Lorem Ipsum has been the industry's standardeds dummy text ever since the 1500s, Lorem hellooes unknown printer</p>
                </div>
              </div>
            </div>
            <div class="col-lg-4 col-6 ">
              <div class="card rounded-4 cardservices">
                <img src={img50} className='ms-auto' alt="..." width={141} height={141} />
                <div class="card-body">
                  <h5 class="text7 text-start">Refractive Procedures</h5>
                  <p class="card-text">Lorem Ipsum has been the industry's standardeds dummy text ever since the 1500s, Lorem hellooes unknown printer</p>
                </div>
              </div>
            </div>
            <div class="col-lg-4 col-6">
              <div class="card rounded-4 cardservices">
                <img src={img51} className='ms-auto' alt="..." width={141} height={141} />
                <div class="card-body">
                  <h5 class="text7 text-start">Glaucoma</h5>
                  <p class="card-text">Lorem Ipsum has been the industry's standardeds dummy text ever since the 1500s, Lorem hellooes unknown printer</p>
                </div>
              </div>
            </div>
            <div class="col-lg-4 col-6">
              <div class="card rounded-4 cardservices">
                <img src={img52} className='ms-auto' alt="..." width={141} height={141} />
                <div class="card-body">
                  <h5 class="text7 text-start">Retina</h5>
                  <p class="card-text">Lorem Ipsum has been the industry's standardeds dummy text ever since the 1500s, Lorem hellooes unknown printer</p>
                </div>
              </div>
            </div>
            <div class="col-lg-4 col-6">
              <div class="card rounded-4 cardservices">
                <img src={img53} className='ms-auto' alt="..." width={141} height={141} />
                <div class="card-body">
                  <h5 class="text7 text-start">Pediatric</h5>
                  <p class="card-text">Lorem Ipsum has been the industry's standardeds dummy text ever since the 1500s, Lorem hellooes unknown printer</p>
                </div>
              </div>
            </div>
            <div class="col-lg-4 col-6">
              <div class="card rounded-4 cardservices">
                <img src={img54} className='ms-auto' alt="..." width={141} height={141} />
                <div class="card-body">
                  <h5 class="text7 text-start">Implantable Contact Lens (ICL)</h5>
                  <p class="card-text">Lorem Ipsum has been the industry's standardeds dummy text ever since the 1500s, Lorem hellooes unknown printer</p>
                </div>
              </div>
            </div>
            <div class="col-lg-4 col-6">
              <div class="card rounded-4 cardservices">
                <img src={img55} className='ms-auto' alt="..." width={141} height={141} />
                <div class="card-body">
                  <h5 class="text7 text-start">Cornea</h5>
                  <p class="card-text">Lorem Ipsum has been the industry's standardeds dummy text ever since the 1500s, Lorem hellooes unknown printer</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* faq */}
      <div class="container-fluid faqsec" style={{ marginTop: 100, backgroundColor: '#F1F5F9' }}>
        <div className="container">
          <div class="row">
            <div class="col-lg-6 ">
              <p className='text3 mx-auto d-block' style={{ textAlign: 'start' }}>Frequently Asked<span style={{ color: '#017CC7' }}> Questions</span></p>
              <p className='text4 mb-5' style={{ textAlign: 'start' }}>A cataract is a clouding of the lens inside </p>
              <svg style={{ color: '#1C2434', display: 'block', marginTop: -25, marginBottom: 10 }} xmlns="http://www.w3.org/2000/svg" width="47" height="4" viewBox="0 0 47 4" fill="none">
                <path d="M45.5 2H1.5" stroke="#1C2434" stroke-width="3" stroke-linecap="round" />
              </svg>
              <div className='faqimg'>
                <img className='' src={img56} alt="" width="550" height="450" style={{}} />
              </div>
            </div>
            <div class="col-lg-6">
              <div class="accordion accordion-flush" id="accordionFlushExample">
                <div class="accordion-item mx-auto">
                  <h2 class="accordion-header">
                    <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseOne" aria-expanded="true" aria-controls="flush-collapseOne">
                      What Facilities you providing?
                      <KeyboardArrowUpIcon sx={{ fontSize: 30 }} className='accordionarrow' />
                    </button>
                  </h2>
                  <div id="flush-collapseOne" class="accordion-collapse collapse show" data-bs-parent="#accordionFlushExample">
                    <div class="accordion-body">Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, unknown printer  Lorem Ipsum has been team at Vision brings to me. Consistently deliver great results.</div>
                  </div>
                </div>
                <div class="accordion-item mx-auto">
                  <h2 class="accordion-header">
                    <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapsetwo" aria-expanded="false" aria-controls="flush-collapsetwo">
                      How can i book appointment?
                      <KeyboardArrowUpIcon sx={{ fontSize: 30 }} className='accordionarrow' />
                    </button>
                  </h2>
                  <div id="flush-collapsetwo" class="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
                    <div class="accordion-body">Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, unknown printer  Lorem Ipsum has been team at Vision brings to me. Consistently deliver great results.</div>
                  </div>
                </div>
                <div class="accordion-item mx-auto">
                  <h2 class="accordion-header">
                    <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapsethree" aria-expanded="false" aria-controls="flush-collapseOne">
                      How can i consult doctor online?
                      <KeyboardArrowUpIcon sx={{ fontSize: 30 }} className='accordionarrow' />
                    </button>
                  </h2>
                  <div id="flush-collapsethree" class="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
                    <div class="accordion-body">Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, unknown printer  Lorem Ipsum has been team at Vision brings to me. Consistently deliver great results.</div>
                  </div>
                </div>
                <div class="accordion-item mx-auto">
                  <h2 class="accordion-header">
                    <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapsefour" aria-expanded="false" aria-controls="flush-collapsefour">
                      How much will cost for test?
                      <KeyboardArrowUpIcon sx={{ fontSize: 30 }} className='accordionarrow' />
                    </button>
                  </h2>
                  <div id="flush-collapsefour" class="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
                    <div class="accordion-body">Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, unknown printer  Lorem Ipsum has been team at Vision brings to me. Consistently deliver great results.</div>
                  </div>
                </div>
                <div class="accordion-item mx-auto">
                  <h2 class="accordion-header">
                    <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapsefive" aria-expanded="false" aria-controls="flush-collapsefive">
                      How much will cost for test?
                      <KeyboardArrowUpIcon sx={{ fontSize: 30 }} className='accordionarrow' />
                    </button>
                  </h2>
                  <div id="flush-collapsefive" class="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
                    <div class="accordion-body">Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, unknown printer  Lorem Ipsum has been team at Vision brings to me. Consistently deliver great results.</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* get in touch */}
      <div className='container-fluid py-5 aboutmain' style={{ marginTop: 100 + 'px' }}>
        <div className='aboutus'>
          <p className='text3 mx-auto d-block'>Get in <span style={{ color: '#017CC7' }}>touch </span> now</p>
          <p className='text4'>With 3 easy steps get your treatment done  </p>
          <svg style={{ color: '#1C2434', margin: 'auto', display: 'block', marginBottom: 50 + 'px' }} xmlns="http://www.w3.org/2000/svg" width="47" height="4" viewBox="0 0 47 4" fill="none">
            <path d="M45.5 2H1.5" stroke="#1C2434" stroke-width="3" stroke-linecap="round" />
          </svg>
        </div>
        <div className="container welcome">
          <div className='row d-flex' >
            <div class=" col-lg-6 order-1 order-lg-0  touchlorem" >
              <div className="about">
                <p className='text3 me-auto text-start'>Get in <span style={{ color: '#017CC7' }}> touch </span>now</p>
                <p className='text4 mb-5 text-start'>With 3 easy steps get your treatment done   </p>
                <svg style={{ color: '#1C2434', display: 'block', marginTop: -40, marginBottom: 50 }} xmlns="http://www.w3.org/2000/svg" width="47" height="4" viewBox="0 0 47 4" fill="none">
                  <path d="M45.5 2H1.5" stroke="#1C2434" stroke-width="3" stroke-linecap="round" />
                </svg>
              </div>

              <p className='text6'>Lorem Ipsum has been the industry's standard dummy Lorem Ipsum is simply dummy text of the printing and tyLorem Ipsum is simply dummy text of the printing and therefore typesetting industry. Lorem Ipsum has been the industry's standarrem Ipsum.</p>
              <p className='text6'>Lorem Ipsum has been the industry's standard dummy Lorem Ipsum is simply dummy text of the printing and tyLorem Ipsum is simply dummy text of the printing and therefore typesetting industry.</p>
              <Link class="lead2 btn btn-primary btn-lg" to="/appoinment" role="button">Book Appointment</Link>
            </div>

            <div className='col-lg-6 order-0 order-lg-1 mx-auto d-block touch ' style={{width:430}} >
              <div>
                <img src={img58} alt="Your Image" style={{ width: 250, height: 510, position: 'absolute', zIndex: 3, marginLeft: 250,marginTop:-30 }} />
                <img src={img57} alt="Your Image" style={{ width: 480, height: 480, position: 'absolute', zIndex: 1 }} />
                <img src={img59} alt="Your Image" style={{marginLeft: 410,marginTop:-20,width:88,height:88}} />
                <img src={img32} alt="Your Image" style={{marginTop:-70,width:15,height:15}} />
                <img src={img60} alt="Your Image" style={{marginLeft: 200,marginTop:380,width:15,height:15,zIndex:'3',position:'absolute'}} />

                <div className="rec6 d-flex">
                  <div className="rec7 m-3 d-flex justify-content-center align-content-center">
                    <img src={img61} alt="Your Image" style={{ margin: 'auto auto' }} />
                  </div>
                  <div className='mt-3 ms-3'>
                    <p className='text7'>Take Appointment</p>
                    <p className='card-text'>Book with easy steps</p>
                  </div>
                </div>

                <div className="rec8 d-flex" style={{ marginTop: 120 }}>
                  <div className="rec9 m-3 d-flex justify-content-center align-content-center">
                    <img src={img62} alt="Your Image" style={{ margin: 'auto auto' }} />
                  </div>
                  <div className='mt-3 ms-3'>
                    <p className='text20'>Eye Check Up</p>
                    <p className='text19'>Need to check the problem</p>
                  </div>
                </div>

                <div className="rec8 d-flex" id='rec8' style={{ marginTop: 240 }}>
                  <div className="rec9 m-3 d-flex justify-content-center align-content-center">
                    <img src={img63} alt="Your Image" style={{ margin: 'auto auto' }} />
                  </div>
                  <div className='mt-3 ms-3'>
                    <p className='text20'>Start Treatments</p>
                    <p className='text19'>Get the best solution</p>
                  </div>
                </div>

              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
