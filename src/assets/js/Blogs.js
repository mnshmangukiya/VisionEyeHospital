import React from 'react'
import img32 from '../images/img32.png'
import img33 from '../images/img33.png'
import img69 from '../images/img69.png'
import img70 from '../images/img70.png'
import img71 from '../images/img71.png'
import img72 from '../images/img72.png'
import img73 from '../images/img73.png'
import img57 from '../images/img57.png'
import img58 from '../images/img58.png'
import img59 from '../images/img59.png'
import img60 from '../images/img60.png'
import img61 from '../images/img61.png'
import img62 from '../images/img62.png'
import img63 from '../images/img63.png'
import { Link } from 'react-router-dom'
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';


export default function Blogs() {
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
          <Link type="button" style={{ marginTop: -500, borderRadius: 30 }} class="px-4 py-2 btn btn-primary ms-auto" to='/blogs'>
            Our Blogs
          </Link>

          <p className='text17 text-center' style={{ marginTop: -200 }}>
            <img src={img32} alt="Your Image" width='' height="" style={{ marginTop: -60 }} />
            Blog
            <img src={img32} alt="Your Image" width='' height="" style={{ marginTop: 30, marginLeft: 10 }} />
          </p>
        </div>
      </div>

      {/* blogs */}
      <div className='container team' style={{ marginTop: 100 + 'px' }}>
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
            </div>
          </div>

          <nav aria-label="Page navigation example ">
            <ul class="pagination pagination-lg gap-4" style={{ position: 'absolute', left: '38%' }}>
              <svg xmlns="http://www.w3.org/2000/svg" width="44" height="45" viewBox="0 0 44 45" fill="none">
                <path d="M4.4002 21.0571L18.6314 6.54838C19.2502 5.92658 20.2127 5.92658 20.8314 6.54838C21.4502 7.17019 21.4502 8.13744 20.8314 8.75924L9.28144 20.5735H38.5002C39.3252 20.5735 40.0127 21.2644 40.0127 22.0935C40.0127 22.9225 39.3252 23.6825 38.5002 23.6825H9.14394L20.8314 35.635C21.4502 36.2568 21.4502 37.224 20.8314 37.8458C20.5564 38.1222 20.1439 38.2603 19.7314 38.2603C19.3189 38.2603 18.9064 38.1222 18.6314 37.7767L4.4002 23.268C3.78144 22.6462 3.78144 21.6789 4.4002 21.0571Z" fill="#017CC7" stroke="#017CC7" stroke-width="0.5" />
              </svg>
              <li class="page-item active"><a class="page-link" href="#">1</a></li>
              <li class="page-item"><a class="page-link" href="#">2</a></li>
              <li class="page-item"><a class="page-link" href="#">3</a></li>
              <svg xmlns="http://www.w3.org/2000/svg" width="44" height="45" viewBox="0 0 44 45" fill="none">
                <path d="M39.5998 21.0571L25.3686 6.54838C24.7498 5.92658 23.7873 5.92658 23.1686 6.54838C22.5498 7.17019 22.5498 8.13744 23.1686 8.75924L34.7186 20.5735H5.4998C4.6748 20.5735 3.9873 21.2644 3.9873 22.0935C3.9873 22.9225 4.6748 23.6825 5.4998 23.6825H34.8561L23.1686 35.635C22.5498 36.2568 22.5498 37.224 23.1686 37.8458C23.4436 38.1222 23.8561 38.2603 24.2686 38.2603C24.6811 38.2603 25.0936 38.1222 25.3686 37.7767L39.5998 23.268C40.2186 22.6462 40.2186 21.6789 39.5998 21.0571Z" fill="#017CC7" stroke="#017CC7" stroke-width="0.5" />
              </svg>
            </ul>
          </nav>
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

            <div className='col-lg-6 order-0 order-lg-1 mx-auto d-block touch ' style={{ width: 430 }} >
              <div>
                <img src={img58} alt="Your Image" style={{ width: 250, height: 510, position: 'absolute', zIndex: 3, marginLeft: 250, marginTop: -30 }} />
                <img src={img57} alt="Your Image" style={{ width: 480, height: 480, position: 'absolute', zIndex: 1 }} />
                <img src={img59} alt="Your Image" style={{ marginLeft: 410, marginTop: -20, width: 88, height: 88 }} />
                <img src={img32} alt="Your Image" style={{ marginTop: -70, width: 15, height: 15 }} />
                <img src={img60} alt="Your Image" style={{ marginLeft: 200, marginTop: 380, width: 15, height: 15, zIndex: '3', position: 'absolute' }} />

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
