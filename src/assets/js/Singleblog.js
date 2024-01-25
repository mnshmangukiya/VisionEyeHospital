import React from 'react'
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import Hero from './Hero'

export default function Singleblog() {
  return (
    <div>
      {/* hero section */}
      <Hero heading1='Our Blogs' heading2='Blog Details' />

      <img className='img-fluid position-absolute d-lg-block d-none outerimg16' src={require('../images/img83.png')} alt="" width={130} height={150} />

      {/* blog image */}
      <div className="container single_blog">
        <div className="row">
          <div class=" col-12">
            <img src={require('../images/img70.png')} alt="..." />
            <a role="button">Cataracy Surgery</a>
          </div>
        </div>
      </div>

      {/* blog details */}
      <div className="container single_blog_details" >
        <div className="row">
          <div class=" col-12">
            <div className="d-inline">
              <p>The Best Cataract Surgery That Clears the Cloudy Vision</p>
              <span>September 1, 2022 | 3 min read</span>
            </div>
            <p>Are you tired of struggling with cloudy vision caused by cataracts? Cataracts can significantly affect your quality of life, making it difficult to perform everyday tasks like reading, driving, and even recognizing familiar faces. Fortunately, modern medicine has advanced significantly in the field of cataract surgery, offering highly effective treatments that can restore your clear vision and improve your overall well-being.In this blog post, we will explore the best cataract surgery options available today and how they can help you regain the clarity you deserve.</p>
          </div>
        </div>
      </div>

      {/* blog options */}
      <div class="container single_blog_options_main">
        <div class="row">
          <div class="col-lg-6 single_blog_options">
            <div>
              The Best Cataract Surgery Options:
            </div>

            <p>
              1. Phacoemulsification:
            </p>
            <p>Phacoemulsification, often referred to as phaco surgery, is the most common and advanced cataract surgery technique. Using ultrasound energy breaks up the cloudy lens and then gently suctions it out of the eye. Surgeons implant an artificial intraocular lens (IOL) in place of the removed cataract to provide clear vision.</p>
            <p>
              2. Femtosecond Laser-Assisted Cataract Surgery (FLACS):
            </p>

            <p>FLACS is a cutting-edge cataract surgery technique that uses a femtosecond laser to create precise incisions in the eye, softening the cataract and making its removal easier. This technology allows for greater accuracy and customization in cataract surgery. FLACS offers benefits such as reduced risk of complications and faster healing.</p>

            <p>
              3. Lifestyle Lenses:
            </p>
            <p>During cataract surgery, patients have the opportunity to choose an IOL that can not only correct cataracts but also address other vision issues like nearsightedness, farsightedness, and astigmatism. Surgeons often refer to these specialized IOLs as “lifestyle lenses,” and they can reduce or eliminate the need for glasses or contact lenses after surgery.</p>

            <p>
              4. Monovision Correction:
            </p>
            <p>Monovision correction is an option for individuals who want to reduce their dependence on glasses for both distance and near vision. This technique involves implanting different IOLs in each eye, one optimized for distance and the other for near vision. While it may take some time to adjust to this approach, many patients find it a convenient solution for their vision needs.</p>
          </div>

          <div class="col-lg-6 card single_blog_related_main h-100">
            <p>Related Blogs</p>

            <div className="gap-3 d-grid single_blog_related_row">
              <div class="card d-flex flex-row single_blog_related">
                <img src={require('../images/img73.png')} alt="..." />
                <div className='d-grid'>
                  <a className='single_blog_related_btn' role="button">Cataracy Surgery</a>
                  <a href='#'>Eye Floaters: Causes, Symptoms and Treatment</a>
                  <p>September 1, 2022 | 3 min read</p>
                  <div className='single_blog_related_details'>
                    <a href="#">Read More <ArrowForwardIcon /></a>
                  </div>
                </div>
              </div>

              <div class="card d-flex flex-row single_blog_related">
                <img src={require('../images/img72.png')} alt="..." />
                <div className='d-grid'>
                  <a className='single_blog_related_btn' role="button">Personal Care</a>
                  <a href='#'>Eye Care for Professionals: Navigating Digital Challenges</a>
                  <p>September 1, 2022 | 3 min read</p>
                  <div className='single_blog_related_details'>
                    <a href="#">Read More <ArrowForwardIcon /></a>
                  </div>
                </div>
              </div>

              <div class="card d-flex flex-row single_blog_related">
                <img src={require('../images/img69.png')} alt="..." />
                <div className='d-grid'>
                  <a className='single_blog_related_btn' role="button">Cataracy Surgery</a>
                  <a href='#'>Can i Change the colour of my lances? is it safe?</a>
                  <p>September 1, 2022 | 3 min read</p>
                  <div className='single_blog_related_details'>
                    <a href="#">Read More <ArrowForwardIcon /></a>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>

      <img className='img-fluid position-absolute d-lg-block d-none outerimg16' src={require('../images/img31.png')} alt="" width={290} height={263} />

      {/* latest blog */}
      <div className='container blogs'>
        <div className='text-center'>
          <p className='aboutus_text3 mx-auto d-block'>Our Latest <span>Blogs</span></p>
          <p className='aboutus_text4 '>A cataract is a clouding of the lens inside </p>
          <svg className='commonheading_svg ' xmlns="http://www.w3.org/2000/svg" width="47" height="4" viewBox="0 0 47 4" fill="none">
            <path d="M45.5 2H1.5" stroke="#1C2434" stroke-width="3" stroke-linecap="round" />
          </svg>
        </div>
        <div class="row row-cols-3 row-gap-4 blogs_row">

          <div class="col-lg-4 col-12 order-2 order-lg-0">
            <div className='card blogs_card single_blog_latest'>
              <img src={require('../images/img72.png')} alt="..." className='img-fluid' />
              <a>Cataracy Surgery</a>
              <p>September 1, 2022 | 3min read</p>
              <a href='#'>Eye Care for Professionals: Navigating Digital Challenges</a>
              <p>Introduction: Are you tired of struggling with cloudy vision caused by cataracts? Cataracts can  perform everyday tasks like reading, driving, treatments that can restore your[...]</p>
              <div className="blogs_card_details">
                <a href="#">Read More <ArrowForwardIcon /></a>
              </div>
              <svg className='position-absolute' xmlns="http://www.w3.org/2000/svg" width="120" height="71" viewBox="0 0 120 71" fill="none">
                <circle opacity="0.4" cx="113" cy="113" r="113" fill="#E2E8F0" />
              </svg>
            </div>
          </div>

          <div class="col-lg-4 col-12 order-0 order-lg-1">
            <div className='card blogs_card single_blog_latest'>
              <img src={require('../images/img69.png')} alt="..." className='img-fluid' />
              <a>Cataracy Surgery</a>
              <p>September 1, 2022 | 3min read</p>
              <a href='#'>Can change the Colors of  the eyes ever in your life or not? </a>
              <p>Introduction: Are you tired of struggling with cloudy vision caused by cataracts? Cataracts can  perform everyday tasks like reading, driving, treatments that can restore your[...]</p>
              <div className="blogs_card_details">
                <a href="#">Read More <ArrowForwardIcon /></a>
              </div>
              <svg className='position-absolute' xmlns="http://www.w3.org/2000/svg" width="120" height="71" viewBox="0 0 120 71" fill="none">
                <circle opacity="0.4" cx="113" cy="113" r="113" fill="#E2E8F0" />
              </svg>
            </div>
          </div>

          <div class="col-lg-4 col-12 order-3 order-lg-2">
            <div className='card blogs_card single_blog_latest'>
              <img src={require('../images/img73.png')} alt="..." className='img-fluid' />
              <a>Cataracy Surgery</a>
              <p>September 1, 2022 | 3min read</p>
              <a href='#'>Eye Care for Professionals: Navigating Digital Challenges</a>
              <p>Introduction: Are you tired of struggling with cloudy vision caused by cataracts? Cataracts can  perform everyday tasks like reading, driving, treatments that can restore your[...]</p>
              <div className="blogs_card_details">
                <a href="#">Read More <ArrowForwardIcon /></a>
              </div>
              <svg className='position-absolute' xmlns="http://www.w3.org/2000/svg" width="120" height="71" viewBox="0 0 120 71" fill="none">
                <circle opacity="0.4" cx="113" cy="113" r="113" fill="#E2E8F0" />
              </svg>
            </div>
          </div>

          <div class="col-lg-4 col-12 order-1 order-lg-3">
            <div className='card blogs_card single_blog_latest'>
              <img src={require('../images/img71.png')} alt="..." className='img-fluid' />
              <a>Cataracy Surgery</a>
              <p>September 1, 2022 | 3min read</p>
              <a href='#'>Can change the Colors of  the eyes ever in your life or not? </a>
              <p>Introduction: Are you tired of struggling with cloudy vision caused by cataracts? Cataracts can  perform everyday tasks like reading, driving, treatments that can restore your[...]</p>
              <div className="blogs_card_details">
                <a href="#">Read More <ArrowForwardIcon /></a>
              </div>
              <svg className='position-absolute' xmlns="http://www.w3.org/2000/svg" width="120" height="71" viewBox="0 0 120 71" fill="none">
                <circle opacity="0.4" cx="113" cy="113" r="113" fill="#E2E8F0" />
              </svg>
            </div>
          </div>

          <div class="col-lg-4 col-12 d-none d-lg-block order-lg-4">
            <div className='card blogs_card single_blog_latest'>
              <img src={require('../images/img73.png')} alt="..." className='img-fluid' />
              <a>Cataracy Surgery</a>
              <p>September 1, 2022 | 3min read</p>
              <a href='#'>Eye Care for Professionals: Navigating Digital Challenges</a>
              <p>Introduction: Are you tired of struggling with cloudy vision caused by cataracts? Cataracts can  perform everyday tasks like reading, driving, treatments that can restore your[...]</p>
              <div className="blogs_card_details">
                <a href="#">Read More <ArrowForwardIcon /></a>
              </div>
              <svg className='position-absolute' xmlns="http://www.w3.org/2000/svg" width="120" height="71" viewBox="0 0 120 71" fill="none">
                <circle opacity="0.4" cx="113" cy="113" r="113" fill="#E2E8F0" />
              </svg>
            </div>
          </div>

          <div class="col-lg-4 col-12 d-none d-lg-block order-lg-4">
            <div className='card blogs_card single_blog_latest'>
              <img src={require('../images/img72.png')} alt="..." className='img-fluid' />
              <a>Cataracy Surgery</a>
              <p>September 1, 2022 | 3min read</p>
              <a href='#'>Eye Care for Professionals: Navigating Digital Challenges</a>
              <p>Introduction: Are you tired of struggling with cloudy vision caused by cataracts? Cataracts can  perform everyday tasks like reading, driving, treatments that can restore your[...]</p>
              <div className="blogs_card_details">
                <a href="#">Read More <ArrowForwardIcon /></a>
              </div>
              <svg className='position-absolute' xmlns="http://www.w3.org/2000/svg" width="120" height="71" viewBox="0 0 120 71" fill="none">
                <circle opacity="0.4" cx="113" cy="113" r="113" fill="#E2E8F0" />
              </svg>
            </div>
          </div>

        </div>
      </div>
      <img className='img-fluid position-absolute d-lg-block d-none outerimg17' src={require('../images/img30.png')} alt="" width={250} height={250} />
    </div>
  )
}
