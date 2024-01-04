import React from 'react'
import img30 from '../images/img30.png'
import img31 from '../images/img31.png'
import img32 from '../images/img32.png'
import img33 from '../images/img33.png'
import img69 from '../images/img69.png'
import img70 from '../images/img70.png'
import img71 from '../images/img71.png'
import img72 from '../images/img72.png'
import img73 from '../images/img73.png'
import img58 from '../images/img58.png'
import img60 from '../images/img60.png'
import img74 from '../images/img74.png'
import img75 from '../images/img75.png'
import img83 from '../images/img83.png'
import img85 from '../images/img85.png'
import { Link } from 'react-router-dom'
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';


export default function Blogs() {
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
          <Link type="button" style={{ marginTop: -500, borderRadius: 30 }} class="px-4 py-2 btn btn-primary ms-auto" to='/blogs'>
            Our Blogs
          </Link>

          <p className='text17 text-center' style={{ marginTop: -200 }}>
            <img src={img32} alt="Your Image" width='' height="" style={{ marginTop: -50 }} />
            Blog
            <img src={img32} alt="Your Image" width='' height="" style={{ marginTop: 30, marginLeft: 10 }} />
          </p>
        </div>
      </div>
      <img className='img-fluid position-absolute d-lg-block d-none' src={img83} alt="" width={130} height={150} style={{ marginTop: -50, right: 0 }} />

      {/* blogs */}
      <div className='container' style={{ marginTop: 100 + 'px' }}>
        <div class="row row-cols-3 row-gap-4">

          <div class="col-lg-4 col-12">
            <div class="card rounded-4 p-4 blogcard">
              <img src={img69} alt="..." className='rounded-4' />
              <a class="btn bg-light rounded-pill py-2 blogpill ms-3" href="#" role="button">Cataracy Surgery</a>
              <div class="card-body">
                <p class="card-text">September 1, 2022 | 3min read</p>
                <Link class="text1 mb-3 me-auto d-block blogtitle text-start" to='#'>Can change the Colors of  the eyes ever in your life or not? </Link>
                <p class="card-text">Introduction: Are you tired of struggling with cloudy vision caused by cataracts? Cataracts can  perform everyday tasks like reading, driving, treatments that can restore your[...]</p>
                <div className="text-start blogmore">
                  <a href="#" class="card-link">Read More <ArrowForwardIcon /></a>
                </div>
              </div>
              <img src={img85} alt="..." className='rounded-bottom-3 position-absolute' width={110} height={80} style={{ bottom: 0, right: 0 }} />
            </div>
          </div>
          <div class="col-lg-4 col-12">
            <div class="card rounded-4 p-4 blogcard">
              <img src={img70} alt="..." className='rounded-4' />
              <Link class="btn bg-light rounded-pill py-2 blogpill ms-3" to="/singleblog" role="button">Cataracy Surgery</Link>
              <div class="card-body">
                <p class="card-text">September 1, 2022 | 3min read</p>
                <Link class="text1 mb-3 me-auto d-block blogtitle text-start" to='/singleblog'>The Best Cataract Surgery That Clears the Cloudy Vision </Link>
                <p class="card-text">Introduction: Are you tired of struggling with cloudy vision caused by cataracts? Cataracts can  perform everyday tasks like reading, driving, treatments that can restore your[...]</p>
                <div className="text-start blogmore">
                  <Link to="/singleblog" class="card-link">Read More <ArrowForwardIcon /></Link>
                </div>
              </div>
              <img src={img85} alt="..." className='rounded-bottom-3 position-absolute' width={110} height={80} style={{ bottom: 0, right: 0 }} />
            </div>
          </div>
          <div class="col-lg-4 col-12">
            <div class="card rounded-4 p-4 blogcard">
              <img src={img71} alt="..." className='rounded-4' />
              <a class="btn bg-light rounded-pill py-2 blogpill ms-3" href="#" role="button">Cataracy Surgery</a>
              <div class="card-body">
                <p class="card-text">September 1, 2022 | 3min read</p>
                <Link class="text1 mb-3 me-auto d-block blogtitle text-start" to='#'>Can change the Colors of  the eyes ever in your life or not? </Link>
                <p class="card-text">Introduction: Are you tired of struggling with cloudy vision caused by cataracts? Cataracts can  perform everyday tasks like reading, driving, treatments that can restore your[...]</p>
                <div className="text-start blogmore">
                  <a href="#" class="card-link">Read More <ArrowForwardIcon /></a>
                </div>
              </div>
              <img src={img85} alt="..." className='rounded-bottom-3 position-absolute' width={110} height={80} style={{ bottom: 0, right: 0 }} />
            </div>
          </div>

          <div class="col-lg-4 col-12">
            <div class="card rounded-4 p-4 blogcard">
              <img src={img72} alt="..." className='rounded-4' />
              <a class="btn bg-light rounded-pill py-2 blogpill ms-3" href="#" role="button">Cataracy Surgery</a>
              <div class="card-body">
                <p class="card-text">September 1, 2022 | 3min read</p>
                <Link class="text1 mb-3 me-auto d-block blogtitle text-start" to='#'>Eye Care for Professionals: Navigating Digital Challenges</Link>
                <p class="card-text">Introduction: Are you tired of struggling with cloudy vision caused by cataracts? Cataracts can  perform everyday tasks like reading, driving, treatments that can restore your[...]</p>
                <div className="text-start blogmore">
                  <a href="#" class="card-link">Read More <ArrowForwardIcon /></a>
                </div>
              </div>
              <img src={img85} alt="..." className='rounded-bottom-3 position-absolute' width={110} height={80} style={{ bottom: 0, right: 0 }} />
            </div>
          </div>
          <div class="col-lg-4 col-12 ">
            <div class="card rounded-4 p-4 blogcard">
              <img src={img73} alt="..." className='rounded-4' />
              <a class="btn bg-light rounded-pill py-2 blogpill ms-3" href="#" role="button">Cataracy Surgery</a>
              <div class="card-body">
                <p class="card-text">September 1, 2022 | 3min read</p>
                <Link class="text1 mb-3 me-auto d-block blogtitle text-start" to='#'>Eye Care for Professionals: Navigating Digital Challenges</Link>
                <p class="card-text">Introduction: Are you tired of struggling with cloudy vision caused by cataracts? Cataracts can  perform everyday tasks like reading, driving, treatments that can restore your[...]</p>
                <div className="text-start blogmore">
                  <a href="#" class="card-link">Read More <ArrowForwardIcon /></a>
                </div>
              </div>
              <img src={img85} alt="..." className='rounded-bottom-3 position-absolute' width={110} height={80} style={{ bottom: 0, right: 0 }} />
            </div>
          </div>
          <div class="col-lg-4 d-none d-lg-block">
            <div class="card rounded-4 p-4 blogcard">
              <img src={img70} alt="..." className='rounded-4' />
              <Link class="btn bg-light rounded-pill py-2 blogpill ms-3" to="/singleblog" role="button">Cataracy Surgery</Link>
              <div class="card-body">
                <p class="card-text">September 1, 2022 | 3min read</p>
                <Link class="text1 mb-3 me-auto d-block blogtitle text-start" to='/singleblog'>The Best Cataract Surgery That Clears the Cloudy Vision</Link>
                <p class="card-text">Introduction: Are you tired of struggling with cloudy vision caused by cataracts? Cataracts can  perform everyday tasks like reading, driving, treatments that can restore your[...]</p>
                <div className="text-start blogmore">
                  <Link to="/singleblog" class="card-link">Read More <ArrowForwardIcon /></Link>
                </div>
              </div>
              <img src={img85} alt="..." className='rounded-bottom-3 position-absolute' width={110} height={80} style={{ bottom: 0, right: 0 }} />
            </div>
          </div>

          <div class="col-lg-4 d-none d-lg-block ">
            <div class="card rounded-4 p-4 blogcard">
              <img src={img70} alt="..." className='rounded-4' />
              <Link class="btn bg-light rounded-pill py-2 blogpill ms-3" to="/singleblog" role="button">Cataracy Surgery</Link>
              <div class="card-body">
                <p class="card-text">September 1, 2022 | 3min read</p>
                <Link class="text1 mb-3 me-auto d-block blogtitle text-start" to='/singleblog'>The Best Cataract Surgery That Clears the Cloudy Vision</Link>
                <p class="card-text">Introduction: Are you tired of struggling with cloudy vision caused by cataracts? Cataracts can  perform everyday tasks like reading, driving, treatments that can restore your[...]</p>
                <div className="text-start blogmore">
                  <Link to="/singleblog" class="card-link">Read More <ArrowForwardIcon /></Link>
                </div>
              </div>
              <img src={img85} alt="..." className='rounded-bottom-3 position-absolute' width={110} height={80} style={{ bottom: 0, right: 0 }} />
            </div>
          </div>
          <div class="col-lg-4  d-none d-lg-block">
            <div class="card rounded-4 p-4 blogcard">
              <img src={img71} alt="..." className='rounded-4' />
              <a class="btn bg-light rounded-pill py-2 blogpill ms-3" href="#" role="button">Cataracy Surgery</a>
              <div class="card-body">
                <p class="card-text">September 1, 2022 | 3min read</p>
                <Link class="text1 mb-3 me-auto d-block blogtitle text-start" to='#'>Can change the Colors of  the eyes ever in your life or not? </Link>
                <p class="card-text">Introduction: Are you tired of struggling with cloudy vision caused by cataracts? Cataracts can  perform everyday tasks like reading, driving, treatments that can restore your[...]</p>
                <div className="text-start blogmore">
                  <a href="#" class="card-link">Read More <ArrowForwardIcon /></a>
                </div>
              </div>
              <img src={img85} alt="..." className='rounded-bottom-3 position-absolute' width={110} height={80} style={{ bottom: 0, right: 0 }} />
            </div>
          </div>
          <div class="col-lg-4 d-none d-lg-block">
            <div class="card rounded-4 p-4 blogcard">
              <img src={img69} alt="..." className='rounded-4' />
              <a class="btn bg-light rounded-pill py-2 blogpill ms-3" href="#" role="button">Cataracy Surgery</a>
              <div class="card-body">
                <p class="card-text">September 1, 2022 | 3min read</p>
                <Link class="text1 mb-3 me-auto d-block blogtitle text-start" to='#'>Can change the Colors of  the eyes ever in your life or not? </Link>
                <p class="card-text">Introduction: Are you tired of struggling with cloudy vision caused by cataracts? Cataracts can  perform everyday tasks like reading, driving, treatments that can restore your[...]</p>
                <div className="text-start blogmore">
                  <a href="#" class="card-link">Read More <ArrowForwardIcon /></a>
                </div>
              </div>
              <img src={img85} alt="..." className='rounded-bottom-3 position-absolute' width={110} height={80} style={{ bottom: 0, right: 0 }} />
            </div>
          </div>

          <nav aria-label="Page navigation example ">
            <ul class="pagination pagination-lg pagimain " style={{ position: 'absolute', left: 40 + '%' }}>
              <img src={img74} alt="..." className='rounded-4 me-4' />
              <li class="page-item active"><a class="page-link" href="#">1</a></li>
              <li class="page-item"><a class="page-link" href="#">2</a></li>
              <li class="page-item"><a class="page-link" href="#">3</a></li>
              <img src={img75} alt="..." className='rounded-4' />
            </ul>
          </nav>
        </div>
      </div>
      <img className='img-fluid position-absolute d-lg-block d-none' src={img31} alt="" width={290} height={263} style={{ marginTop: -180, right: 0 }} />

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
              <img src={img58} alt="Your Image" className='img-fluid' style={{ position: 'relative', zIndex: 3, width: 100 + '%', height: 100 + '%' }} />
              <img src={img32} alt="Your Image" className='d-lg-block d-none' style={{ position: 'absolute', top: 60, left: 60 }} />
              <img src={img60} alt="Your Image" className='d-lg-block d-none' style={{ zIndex: '3', position: 'relative', marginLeft: 200, marginTop: -50 }} />
            </div>
          </div>
        </div>
      </div>

      <img className='img-fluid position-absolute d-lg-block d-none' src={img30} alt="" width={250} height={250} style={{ marginTop: -200, left: 0 }} />
    </div>
  )
}
