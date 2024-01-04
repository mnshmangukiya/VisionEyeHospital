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
import img83 from '../images/img83.png'
import img85 from '../images/img85.png'
import { Link } from 'react-router-dom'
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

export default function Singleblog() {
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
          <Link type="button" style={{ marginTop: -500, borderRadius: 30 }} class="px-4 py-2 btn btn-primary ms-auto" to='/singleblog'>
            Our Blogs
          </Link>

          <p className='text17 text-center' style={{ marginTop: -200 }}>
            <img src={img32} alt="Your Image" width='' height="" style={{ marginTop: -50 }} />
            Blog Details
            <img src={img32} alt="Your Image" width='' height="" style={{ marginTop: 30, marginLeft: 10 }} />
          </p>
        </div>
      </div>
      <img className='img-fluid position-absolute d-lg-block d-none' src={img83} alt="" width={130} height={150} style={{ marginTop: -50, right: 0 }} />

      {/* blog details */}
      <div className="container" style={{ marginTop: 100 + 'px' }}>
        <div className="row">
          <div class=" col-12">
            <img src={img70} alt="..." className='rounded-4' width={100 + '%'} height={'auto'} />
            <a class="btn bg-primary text-light rounded-pill py-2 px-3 singleblockpill ms-5" href='#' role="button">Cataracy Surgery</a>
          </div>
        </div>
      </div>

      <div className="container" >
        <div className="row">
          <div class=" col-12">
            <p className='text7 mt-5'>The Best Cataract Surgery That Clears the Cloudy Vision</p>
            <p className='text6'>Are you tired of struggling with cloudy vision caused by cataracts? Cataracts can significantly affect your quality of life, making it difficult to perform everyday tasks like reading, driving, and even recognizing familiar faces. Fortunately, modern medicine has advanced significantly in the field of cataract surgery, offering highly effective treatments that can restore your clear vision and improve your overall well-being.In this blog post, we will explore the best cataract surgery options available today and how they can help you regain the clarity you deserve.</p>
          </div>
        </div>
      </div>

      <div class="container text-center mt-5">
        <div class="row gx-5">
          <div class="col-lg-6">
            <div className="card-title text-start">
              The Best Cataract Surgery Options:
            </div>

            <p className='treatment mt-5 text-start'>
              1. Phacoemulsification:
            </p>
            <p className='text6 text-start'>Phacoemulsification, often referred to as phaco surgery, is the most common and advanced cataract surgery technique. Using ultrasound energy breaks up the cloudy lens and then gently suctions it out of the eye. Surgeons implant an artificial intraocular lens (IOL) in place of the removed cataract to provide clear vision.</p>
            <p className='treatment mt-5 text-start'>
              2. Femtosecond Laser-Assisted Cataract Surgery (FLACS):
            </p>

            <p className='text6 text-start'>FLACS is a cutting-edge cataract surgery technique that uses a femtosecond laser to create precise incisions in the eye, softening the cataract and making its removal easier. This technology allows for greater accuracy and customization in cataract surgery. FLACS offers benefits such as reduced risk of complications and faster healing.</p>

            <p className='treatment mt-5 text-start'>
              3. Lifestyle Lenses:
            </p>
            <p className='text6 text-start'>During cataract surgery, patients have the opportunity to choose an IOL that can not only correct cataracts but also address other vision issues like nearsightedness, farsightedness, and astigmatism. Surgeons often refer to these specialized IOLs as “lifestyle lenses,” and they can reduce or eliminate the need for glasses or contact lenses after surgery.</p>

            <p className='treatment mt-5 text-start'>
              4. Monovision Correction:
            </p>
            <p className='text6 text-start'>Monovision correction is an option for individuals who want to reduce their dependence on glasses for both distance and near vision. This technique involves implanting different IOLs in each eye, one optimized for distance and the other for near vision. While it may take some time to adjust to this approach, many patients find it a convenient solution for their vision needs.</p>
          </div>

          <div class="col-lg-6 relatedblog p-3 my-auto">
            <p className='text1 mb-3 text-start'>Related Blogs</p>

            <div class="card mb-3 p-3">
              <div class="row g-0">
                <div class="col-4">
                  <img src={img73} class="rounded" alt="..." width={100 + '%'} height={80 + '%'} />
                </div>
                <div class="col-8">
                  <div class="card-body">
                    <a class="btn rounded-pill py-1 relatedblogpill me-auto d-block" href="#" role="button">Cataracy Surgery</a>
                    <Link class="text7 mb-2 mt-2 me-auto d-block blogtitle text-start text-decoration-none" to='#'>Eye Floaters: Causes, Symptoms and Treatment</Link>
                    <p class="card-text mb-2">September 1, 2022 | 3 min read</p>
                    <div className="text-start blogmore">
                      <a href="#" class="card-link">Read More <ArrowForwardIcon /></a>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div class="card mb-3 p-3">
              <div class="row g-0">
                <div class="col-4">
                  <img src={img72} class="rounded" alt="..." width={100 + '%'} height={80 + '%'} />
                </div>
                <div class="col-8">
                  <div class="card-body">
                    <a class="btn rounded-pill py-1 relatedblogpill me-auto d-block" href="#" role="button">Personal Care</a>
                    <Link class="text7 mb-2 mt-2 me-auto d-block blogtitle text-start text-decoration-none" to='#'>Eye Care for Professionals: Navigating Digital Challenges</Link>
                    <p class="card-text mb-2">September 1, 2022 | 3 min read</p>
                    <div className="text-start blogmore">
                      <a href="#" class="card-link">Read More <ArrowForwardIcon /></a>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div class="card mb-3 p-3">
              <div class="row g-0">
                <div class="col-4">
                  <img src={img69} class="rounded" alt="..." width={100 + '%'} height={80 + '%'} />
                </div>
                <div class="col-8">
                  <div class="card-body">
                    <a class="btn rounded-pill py-1 relatedblogpill me-auto d-block" href="#" role="button">Cataracy Surgery</a>
                    <Link class="text7 mb-2 mt-2 me-auto d-block blogtitle text-start text-decoration-none" to='#'>Can I Change the colour of my lances? is it safe?</Link>
                    <p class="card-text mb-2">September 1, 2022 | 3 min read</p>
                    <div className="text-start blogmore">
                      <a href="#" class="card-link">Read More <ArrowForwardIcon /></a>
                    </div>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>

      <img className='img-fluid position-absolute d-lg-block d-none' src={img31} alt="" width={290} height={263} style={{ marginTop: -180, right: 0 }} />

      {/* latest blog */}
      <div className='container py-5 aboutmain' style={{ marginTop: 50 + 'px' }}>
        <p className='text3 mx-auto d-block'>Our Latest <span style={{ color: '#017CC7' }}>Blogs </span> </p>
        <p className='text4'>A cataract is a clouding of the lens inside </p>
        <svg style={{ color: '#1C2434', margin: 'auto', display: 'block', marginBottom: 50 + 'px' }} xmlns="http://www.w3.org/2000/svg" width="47" height="4" viewBox="0 0 47 4" fill="none">
          <path d="M45.5 2H1.5" stroke="#1C2434" stroke-width="3" stroke-linecap="round" />
        </svg>

        <div class="row row-cols-3 row-gap-4">
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
          <div class="col-lg-4 col-12 d-none d-lg-block">
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
          <div class="col-lg-4 col-12 d-none d-lg-block">
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
        </div>
      </div>
      <img className='img-fluid position-absolute d-lg-block d-none' src={img30} alt="" width={250} height={250} style={{ marginTop: -200, left: 0 }} />
    </div>
  )
}
