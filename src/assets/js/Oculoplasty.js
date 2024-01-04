import React from 'react'
import img30 from '../images/img30.png'
import img31 from '../images/img31.png'
import img32 from '../images/img32.png'
import img33 from '../images/img33.png'
import img64 from '../images/img64.png'
import img65 from '../images/img65.png'
import img66 from '../images/img66.png'
import img49 from '../images/img49.png'
import img50 from '../images/img50.png'
import img51 from '../images/img51.png'
import img52 from '../images/img52.png'
import img53 from '../images/img53.png'
import img54 from '../images/img54.png'
import img55 from '../images/img55.png'
import img83 from '../images/img83.png'
import { Link } from 'react-router-dom'

export default function Oculoplasty() {
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
          <Link type="button" style={{ marginTop: -450, borderRadius: 30 }} class="px-4 py-2 btn btn-primary ms-auto" to='/services/oculoplasty'>
            About Service Details
          </Link>

          <p className='text17 text-center' style={{ marginTop: -200 }}>
            <img src={img32} alt="Your Image" width='' height="" style={{ marginTop: -50 }} />
            Oculoplasty
            <img src={img32} alt="Your Image" width='' height="" style={{ marginTop: 30, marginLeft: 10 }} />
          </p>
        </div>
      </div>

      <img className='img-fluid position-absolute d-lg-block d-none' src={img83} alt="" width={130} height={150} style={{marginTop:0,right:0}}/>

      {/* what is and symptom */}
      <div className='container aboutmain ' style={{ marginTop: 100 + 'px' }}>
        <div className='row' >
          <div className='col-lg-6 '>
            <img src={img64} alt="Your Image" className='img-fluid symptom' width='100%' />
          </div>

          <div class="jumbotron col-lg-6 mx-auto d-block">
            <p className='text7'>What is  Oculoplasty?   </p>
            <p className='text6'>Oculoplasty, also known as oculoplastic surgery or ophthalmic plastic surgery, is a branch of ophthalmology that focuses on the diagnosis and treatment of disorders affecting the structures around the eyes, including the eyelids, tear ducts, orbit (eye socket), and the surrounding facial tissues. this surgeons are ophthalmologists who have Lorem hello additional training in plastic and reconstructive surgery specifically related to the eyes and its adjacent structures.</p>
            <p className='text7'>Symptoms of Oculoplasty Disease</p>
            <p className='text6'>
              <div class="container text-center">
                <div class="row oculoplasty">
                  <div class="col-lg-6">
                    <div className="d-flex">
                      <img className='mt-1 me-2' src={img32} alt="Your Image" width='15' height='15' />
                      <p >Drooping eyelids</p>
                    </div>
                    <div className="d-flex">
                      <img className='mt-1 me-2' src={img32} alt="Your Image" width='15' height='15' />
                      <p >Eye irritation and redness</p>
                    </div>
                    <div className="d-flex">
                      <img className='mt-1 me-2' src={img32} alt="Your Image" width='15' height='15' />
                      <p >Tearing</p>
                    </div>
                  </div>
                  <div class="col-lg-6">
                    <div className="d-flex">
                      <img className='mt-1 me-2' src={img32} alt="Your Image" width='15' height='15' />
                      <p >Bulging eyes</p>
                    </div>
                    <div className="d-flex">
                      <img className='mt-1 me-2' src={img32} alt="Your Image" width='15' height='15' />
                      <p >Double vision</p>
                    </div>
                    <div className="d-flex">
                      <img className='mt-1 me-2' src={img32} alt="Your Image" width='15' height='15' />
                      <p >Changes in vision</p>
                    </div>
                  </div>
                </div>
              </div>
            </p>
          </div>
        </div>
      </div>

      {/* know more about and types of */}
      <div class="container mt-5" >
        <div class="row">
          <div class="col order-2 order-lg-1">
            <p className='text7'>Know More about Diagnosing Oculoplasty?</p>
            <p className='text6'>Oculoplasty, also known as oculoplastic surgery or ophthalmic plastic surgery, is a branch of ophthalmology that focuses on the diagnosis and treatment of disorders affecting the structures around the eyes, including the eyelids, tear ducts, orbit (eye socket), and the surrounding facial tissues. this surgeons are ophthalmologists who have Lorem hello additional training in plastic and reconstructive surgery specifically related to the eyes and its adjacent structures.</p>
          </div>
        </div>
        <div class="row mt-5">
          <div class="col-lg-4 order-3 order-lg-2 types">
            <p className='text7 mb-4'>Types of Oculoplasty Disease</p>
            <div className="text6 oculo">
              <div className="d-flex">
                <img className='mt-1 me-2' src={img32} alt="Your Image" width='15' height='15' />
                <p >Ptosis</p>
              </div>
              <div className="d-flex">
                <img className='mt-1 me-2' src={img32} alt="Your Image" width='15' height='15' />
                <p >Entropion </p>
              </div>
              <div className="d-flex">
                <img className='mt-1 me-2' src={img32} alt="Your Image" width='15' height='15' />
                <p >Ectropion </p>
              </div>
              <div className="d-flex">
                <img className='mt-1 me-2' src={img32} alt="Your Image" width='15' height='15' />
                <p >Blocked Tear Ducts </p>
              </div>
              <div className="d-flex">
                <img className='mt-1 me-2' src={img32} alt="Your Image" width='15' height='15' />
                <p >Thyroid Eye Disease </p>
              </div>
              <div className="d-flex">
                <img className='mt-1 me-2' src={img32} alt="Your Image" width='15' height='15' />
                <p >Orbital Tumors </p>
              </div>
              <div className="d-flex">
                <img className='mt-1 me-2' src={img32} alt="Your Image" width='15' height='15' />
                <p >Orbital Fractures</p>
              </div>
            </div>
          </div>
          <div class="col-lg-8 order-lg-3 order-1">
            <img src={img65} alt="Your Image" className='img-fluid' width={800} height={400} />
          </div>
        </div>
      </div>

      {/* treatment */}
      <div className="container mt-5">
        <p className='text1 mb-4'>Treatments</p>
        <p className='text6'>Restore your vision & restore your life with the most modern POculoplasty management options available today. Oculoplasty, also known as oculoplastic surgery or ophthalmic plastic surgery, is a specialized branch of ophthalmology.</p>

        <a class="btn bg-light rounded-pill border border-dark ms-3 px-4 py-1 treatment" href="#" role="button">Eyelid</a>
        <a class="btn bg-light  rounded-pill border border-dark ms-3 px-4 py-1 treatment" href="#" role="button">Brow Lift</a>


        <p className='text6 mt-3'>Restore your vision & restore your life with the most modern POculoplasty management options available today. Oculoplasty, also known as oculoplastic surgery or ophthalmic plastic surgery, is a specialized branch of ophthalmology.Restore your vision & restore your life with the most modern POculoplasty management options available today. Oculoplasty, also known as oculoplastic surgery or ophthalmic plastic surgery, is a specialized branch of ophthalmology.</p>

        <p className='treatmentmain mt-4'>Upper Eyelids</p>
        <div className="text6">
          <div className="d-flex">
            <img className='mt-1 me-2' src={img32} alt="Your Image" width='15' height='15' />
            <p >Loose skin that hangs down from the upper eyelids</p>
          </div>
          <div className="d-flex">
            <img className='mt-1 me-2' src={img32} alt="Your Image" width='15' height='15' />
            <p >Excess skin that hides the natural fold of the upper eyelids</p>
          </div>
          <div className="d-flex">
            <img className='mt-1 me-2' src={img32} alt="Your Image" width='15' height='15' />
            <p >Puffiness in the upper eyelids that creates a tired look</p>
          </div>
        </div>

        <p className='treatmentmain mt-3'>Lower Eyelids
          <div className="text6">
            <div className="d-flex mt-3">
              <img className='mt-1 me-2' src={img32} alt="Your Image" width='15' height='15' />
              <p >Loose skin that hangs down from the upper eyelids</p>
            </div>
            <div className="d-flex">
              <img className='mt-1 me-2' src={img32} alt="Your Image" width='15' height='15' />
              <p >Excess skin that hides the natural fold of the upper eyelids</p>
            </div>
            <div className="d-flex">
              <img className='mt-1 me-2' src={img32} alt="Your Image" width='15' height='15' />
              <p >Puffiness in the upper eyelids that creates a tired look</p>
            </div>
          </div>
        </p>
        <p className='treatmentmain'>The Eyelid Surgery Procedure
          <p className='text6 mt-3'> Cosmetic eyelid surgery can be performed on either the upper, lower or both lids. The goal for the upper lids is usually to lift it by removing excess skin. For the lower lids, a combination of excess skin and fatty deposits are removed to eliminate the bag under the eyes. The result of either or both is a smoother, more youthful and well-rested appearance. Patients can expect the results to last for many years. Over time a small amount of excess skin or fat may be noticed. If this does occur, the skin or fat can easily and safely be removed.</p>
        </p>
      </div>

      <img className='img-fluid position-absolute d-lg-block d-none' src={img31} alt="" width={290} height={263} style={{marginTop:-550,right:0}}/>

      {/* book appoinment */}
      <div className='container-fluid py-5' style={{ marginTop: 100 + 'px', backgroundColor: '#F1F5F9' }}>
        <div className='aboutus'>
          <p className='text3 mx-auto d-block'>Book Your  <span style={{ color: '#017CC7' }}>Appointment </span> </p>
          <p className='text4'>Check the time and Book your appointment  </p>
          <svg style={{ color: '#1C2434', margin: 'auto', display: 'block', marginBottom: 50 + 'px' }} xmlns="http://www.w3.org/2000/svg" width="47" height="4" viewBox="0 0 47 4" fill="none">
            <path d="M45.5 2H1.5" stroke="#1C2434" stroke-width="3" stroke-linecap="round" />
          </svg>
        </div>

        <div className="container welcome p-5">
          <div className='row d-flex' >
            <div class=" col-lg-6 order-1 order-lg-0 ocule">
              <div className="about">
                <p className='text3 me-auto text-start'>Get in <span style={{ color: '#017CC7' }}> touch </span>now</p>
                <p className='text4 mb-5 text-start'>With 3 easy steps get your treatment done   </p>
                <svg style={{ color: '#1C2434', display: 'block', marginTop: -40, marginBottom: 50 }} xmlns="http://www.w3.org/2000/svg" width="47" height="4" viewBox="0 0 47 4" fill="none">
                  <path d="M45.5 2H1.5" stroke="#1C2434" stroke-width="3" stroke-linecap="round" />
                </svg>
              </div>
                  <div class="appointime">
                    <p className='text21'>Monday:<span className='text22 ms-3'>10:00am to 05:00pm</span> <span className='text23'>(Dr.Shailesh Agrawal)</span></p>
                    <p className='text21'>Tuesday:<spa className='text22 ms-3'>10:00am to 05:00pm</spa> <span className='text23'>(Dr. Khushboo Patel)</span></p>
                    <p className='text21'>Wednesday:<span className='text22 ms-3'>10:00am to 05:00pm </span></p>
                    <p className='text21'>Thursday:<span className='text22 ms-3'>10:00am to 05:00pm </span><span className='text23'>(Dr. Khushboo Patel)</span></p>
                    <p className='text21'>Friday:<span className='text22 ms-3'>10:00am to 05:00pm </span><span className='text23'>(Dr. Khushboo Patel)</span></p>
                    <p className='text21'>Saturday:<span className='text22 ms-3'>10:00am to 05:00pm </span><span className='text23'>(Dr. Khushboo Patel)</span></p>
                    <p className='text21'>Sunday:<span className='text22 ms-3'>10:00am to 05:00pm </span></p>
                  </div>
              <Link class="lead2 btn btn-primary btn-lg mt-4" to="/appoinment" role="button">Book Appointment</Link>
            </div>

            <div className='col-lg-6 order-0 order-lg-1 mx-auto d-block bookingimg' >
              <img src={img66} alt="Your Image"  width={100 + '%'} height={450} />
            </div>
          </div>
        </div>
      </div>

      {/* other services */}
      <div className='container' style={{ marginTop: 100 + 'px' }}>
        <p className='text3 mx-auto d-block'><span style={{ color: '#017CC7' }}> Services </span> we provide</p>
        <p className='text4'>A cataract is a clouding of the lens inside </p>
        <svg style={{ color: '#1C2434', margin: 'auto', display: 'block', marginBottom: 50 + 'px' }} xmlns="http://www.w3.org/2000/svg" width="47" height="4" viewBox="0 0 47 4" fill="none">
          <path d="M45.5 2H1.5" stroke="#1C2434" stroke-width="3" stroke-linecap="round" />
        </svg>
        <div class="container text-center">
          <div class="row row-cols-3 row-gap-4">

          <div class="col-lg-4 col-6 ">
              <div class="card rounded-4 cardservices">
                <img src={img50} className='ms-auto img-fluid mt-3' alt="..." width={30 + '%'} />
                <div class="card-body">
                  <h5 class="text32 text-start">Refractive Procedures</h5>
                  <p class="text34 text-start">Lorem Ipsum has been the industry's standardeds dummy text ever since the 1500s, Lorem hellooes unknown printer</p>
                </div>
              </div>
            </div>

            <div class="col-lg-4 col-6">
              <div class="card rounded-4 cardservices">
                <img src={img49} className='ms-auto img-fluid mt-3' alt="..." width={30 + '%'} />
                <div class="card-body">
                  <h5 class="text32 text-start">Cataract</h5>
                  <p class="text34 text-start">Lorem Ipsum has been the industry's standardeds dummy text ever since the 1500s, Lorem hellooes unknown printer</p>
                </div>
              </div>
            </div>   

              <div class="col-lg-4 col-6">
              <div class="card rounded-4 cardservices">
                <img src={img55} className='ms-auto img-fluid mt-3' alt="..." width={30 + '%'} />
                <div class="card-body">
                  <h5 class="text32 text-start">Cornea</h5>
                  <p class="text34 text-start">Lorem Ipsum has been the industry's standardeds dummy text ever since the 1500s, Lorem hellooes unknown printer</p>
                </div>
              </div>
            </div>         

            <div class="col-lg-4 col-6">
              <div class="card rounded-4 cardservices">
                <img src={img51} className='ms-auto img-fluid mt-3' alt="..." width={30 + '%'} />
                <div class="card-body">
                  <h5 class="text32 text-start">Glaucoma</h5>
                  <p class="text34 text-start">Lorem Ipsum has been the industry's standardeds dummy text ever since the 1500s, Lorem hellooes unknown printer</p>
                </div>
              </div>
            </div>

            <div class="col-lg-4 col-6">
              <div class="card rounded-4 cardservices">
                <img src={img52} className='ms-auto img-fluid mt-3' alt="..." width={30 + '%'} />
                <div class="card-body">
                  <h5 class="text32 text-start">Retina</h5>
                  <p class="text34 text-start">Lorem Ipsum has been the industry's standardeds dummy text ever since the 1500s, Lorem hellooes unknown printer</p>
                </div>
              </div>
            </div>

            <div class="col-lg-4 col-6">
              <div class="card rounded-4 cardservices">
                <img src={img53} className='ms-auto img-fluid mt-3' alt="..." width={30 + '%'} />
                <div class="card-body">
                  <h5 class="text32 text-start">Pediatric</h5>
                  <p class="text34 text-start">Lorem Ipsum has been the industry's standardeds dummy text ever since the 1500s, Lorem hellooes unknown printer</p>
                </div>
              </div>
            </div>
            
            <div class="col-lg-4 col-6">
              <div class="card rounded-4 cardservices">
                <img src={img54} className='ms-auto img-fluid mt-3' alt="..." width={30 + '%'} />
                <div class="card-body">
                  <h5 class="text32 text-start">Implantable Contact Lens (ICL)</h5>
                  <p class="text34 text-start">Lorem Ipsum has been the industry's standardeds dummy text ever since the 1500s, Lorem hellooes unknown printer</p>
                </div>
              </div>
            </div>
          
          </div>
        </div>
      </div>

      <img className='img-fluid position-absolute d-lg-block d-none' src={img30} alt="" width={198} height={198} style={{marginTop:-180,left:0}}/>
    </div>
  )
}
