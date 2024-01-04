import React from 'react'
import img30 from '../images/img30.png'
import img31 from '../images/img31.png'
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
import img58 from '../images/img58.png'
import img60 from '../images/img60.png'
import img83 from '../images/img83.png'
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import { Link } from 'react-router-dom'

export default function Services() {
  return (
    <div>
      {/* hero section */}
      <div class="container-fluid text-center" >
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
            <img src={img32} alt="Your Image" width='' height="" style={{ marginTop: -50 }} />
            Our Services
            <img src={img32} alt="Your Image" width='' height="" style={{ marginTop: 30, marginLeft: 10 }} />
          </p>
        </div>
      </div>

      <img className='img-fluid position-absolute d-lg-block d-none' src={img83} alt="" width={100} height={100} style={{marginTop:0,right:0}}/>

      {/* services */}
      <div className='container' style={{ marginTop: 100 + 'px' }}>
        <p className='text3 mx-auto d-block'><span style={{ color: '#017CC7' }}> Services </span> we provide</p>
        <p className='text4'>A cataract is a clouding of the lens inside </p>
        <svg style={{ color: '#1C2434', margin: 'auto', display: 'block', marginBottom: 50 + 'px' }} xmlns="http://www.w3.org/2000/svg" width="47" height="4" viewBox="0 0 47 4" fill="none">
          <path d="M45.5 2H1.5" stroke="#1C2434" stroke-width="3" stroke-linecap="round" />
        </svg>
        <div class="container">
          <div class="row row-cols-3 row-gap-3">
            <div class="col-lg-4 col-6">
              <div class="card rounded-4 cardservices" >
                <img src={img48} className='ms-auto img-fluid mt-3' alt="..." width={30 + '%'} />
                <div class="card-body">
                  <h5 class="text32 text-start">Oculoplasty</h5>
                  <p class="text34 text-start">Lorem Ipsum has been the industry's standardeds dummy text ever since the 1500s, Lorem hellooes unknown printer</p>
                </div>
              </div>
            </div>
            <div class="col-lg-4 col-6">
              <div class="card rounded-4 cardservices">
                <img src={img49} className='ms-auto img-fluid mt-3' alt="..." width={30 + '%'} />
                <div class="card-body">
                  <h5 class="text32 text-start">Cataract</h5>
                  <p class="text34">Lorem Ipsum has been the industry's standardeds dummy text ever since the 1500s, Lorem hellooes unknown printer</p>
                </div>
              </div>
            </div>
            <div class="col-lg-4 col-6 ">
              <div class="card rounded-4 cardservices">
                <img src={img50} className='ms-auto img-fluid mt-3' alt="..." width={30 + '%'} />
                <div class="card-body">
                  <h5 class="text32 text-start mt-3">Refractive Procedures</h5>
                  <p class="text34">Lorem Ipsum has been the industry's standardeds dummy text ever since the 1500s, Lorem hellooes unknown printer</p>
                </div>
              </div>
            </div>
            <div class="col-lg-4 col-6">
              <div class="card rounded-4 cardservices">
                <img src={img51} className='ms-auto img-fluid mt-3' alt="..." width={30 + '%'} />
                <div class="card-body">
                  <h5 class="text32 text-start mt-3 mt-sm-0">Glaucoma</h5>
                  <p class="text34">Lorem Ipsum has been the industry's standardeds dummy text ever since the 1500s, Lorem hellooes unknown printer</p>
                </div>
              </div>
            </div>
            <div class="col-lg-4 col-6">
              <div class="card rounded-4 cardservices">
                <img src={img52} className='ms-auto img-fluid mt-3' alt="..." width={30 + '%'} />
                <div class="card-body">
                  <h5 class="text32 text-start">Retina</h5>
                  <p class="text34">Lorem Ipsum has been the industry's standardeds dummy text ever since the 1500s, Lorem hellooes unknown printer</p>
                </div>
              </div>
            </div>
            <div class="col-lg-4 col-6">
              <div class="card rounded-4 cardservices">
                <img src={img53} className='ms-auto img-fluid mt-3' alt="..." width={30 + '%'} />
                <div class="card-body">
                  <h5 class="text32 text-start">Pediatric</h5>
                  <p class="text34">Lorem Ipsum has been the industry's standardeds dummy text ever since the 1500s, Lorem hellooes unknown printer</p>
                </div>
              </div>
            </div>
            <div class="col-lg-4 col-6">
              <div class="card rounded-4 cardservices">
                <img src={img54} className='ms-auto img-fluid mt-3' alt="..." width={30 + '%'} />
                <div class="card-body">
                  <h5 class="text32 text-start">Implantable Contact Lens (ICL)</h5>
                  <p class="text34">Lorem Ipsum has been the industry's standardeds dummy text ever since the 1500s, Lorem hellooes unknown printer</p>
                </div>
              </div>
            </div>
            <div class="col-lg-4 col-6">
              <div class="card rounded-4 cardservices">
                <img src={img55} className='ms-auto img-fluid mt-3' alt="..." width={30 + '%'} />
                <div class="card-body">
                  <h5 class="text32 text-start">Cornea</h5>
                  <p class="text34">Lorem Ipsum has been the industry's standardeds dummy text ever since the 1500s, Lorem hellooes unknown printer</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <img className='img-fluid position-absolute d-lg-block d-none' src={img31} alt="" width={300} height={273} style={{marginTop:-250,right:0}}/>

      {/* faq */}
      <div class="container-fluid faqsec" style={{ marginTop: 100, backgroundColor: '#F1F5F9' }}>
        <div className="container">
          <div className="aboutus ">
            <p className='text3 mx-auto d-block text-center' style={{ textAlign: 'start' }}>Frequently Asked <span style={{ color: '#017CC7' }}> Questions</span></p>
            <p className='text4 mb-5' style={{ textAlign: 'start' }}>A cataract is a clouding of the lens inside </p>
            <svg style={{ color: '#1C2434', display: 'block', marginTop: -25, marginBottom: 10 }} xmlns="http://www.w3.org/2000/svg" width="47" height="4" viewBox="0 0 47 4" fill="none">
              <path d="M45.5 2H1.5" stroke="#1C2434" stroke-width="3" stroke-linecap="round" />
            </svg>
          </div>
          <div class="row">
            <div class="col-lg-6 ">
              <div className="about">
                <p className='text3 ' style={{ textAlign: 'start' }}>Frequently Asked <span style={{ color: '#017CC7' }}> Questions</span></p>
                <p className='text4 mb-5' style={{ textAlign: 'start' }}>A cataract is a clouding of the lens inside </p>
                <svg style={{ color: '#1C2434', display: 'block', marginTop: -25, marginBottom: 10 }} xmlns="http://www.w3.org/2000/svg" width="47" height="4" viewBox="0 0 47 4" fill="none">
                  <path d="M45.5 2H1.5" stroke="#1C2434" stroke-width="3" stroke-linecap="round" />
                </svg>
              </div>
              <div className='faqimg'>
                <img className='img-fluid' src={img56} alt="" style={{ width: 100 + '%', height: 500 }} />
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
        <div className="container">
          <div className='row d-flex g-5' >
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
              <Link class="lead2 btn btn-primary btn-lg mt-4" to="/appoinment" role="button">Book Appointment</Link>
            </div>
            <div className='col-lg-6 order-0 order-lg-1 touch position-relative' >
              <img src={img58} alt="Your Image" className='img-fluid' style={{ position: 'relative', zIndex: 3,width: 100 + '%', height: 100 + '%' }} />
              <img src={img32} alt="Your Image"  className='d-lg-block d-none' style={{ position: 'absolute',top:60,left:60}} />
              <img src={img60} alt="Your Image" className='d-lg-block d-none' style={{zIndex: '3',position: 'relative',marginLeft:200,marginTop:-50}} />
            </div>
          </div>
        </div>
      </div>

      <img className='img-fluid position-absolute d-lg-block d-none' src={img30} alt="" width={259} height={198} style={{marginTop:-150,left:0}}/>
    </div>
  )
}
