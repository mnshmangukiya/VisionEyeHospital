import React from 'react'
import Slider from "react-slick";
import Team_of_doctors from './Team_of_doctors'
import Hero from './Hero'

export default function Aboutus() {
  const settings9 = {
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    speed: 3000,
    autoplaySpeed: 2000,
    cssEase: "linear",
    responsive: [
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
        }
      }
    ]
  };

  return (
    <div>
      {/* hero section */}
      <Hero heading1='Know who we are' heading2='About Us'/>

      <img className='outerimg4 img-fluid position-absolute d-lg-block d-none' src={require('../images/img83.png')} alt="" width={100} height={100} />

      {/* welcome to hospital */}
      <div className='container aboutus_welcome'>
        <div className=' d-block d-lg-none'>
          <p className='aboutus_text3 mx-auto d-block'><span>Welcome </span> to the Hospital</p>
          <p className='aboutus_text4'>A cataract is a clouding of the lens inside  </p>
          <div className="text-center">
            <svg className='commonheading_svg' xmlns="http://www.w3.org/2000/svg" width="47" height="4" viewBox="0 0 47 4" fill="none">
              <path d="M45.5 2H1.5" stroke="#1C2434" stroke-width="3" stroke-linecap="round" />
            </svg>
          </div>
        </div>

        <div className="container">
          <div className='row' >
            <div className='col-lg-6 aboutus_welcome_img'>
              <img src={require('../images/img34.png')} className='img-fluid mx-auto d-block' alt="Your Image" />
            </div>

            <div class=" col-lg-6 mx-auto">
              <div className=" d-none d-lg-block">
                <p className='aboutus_text3 text-start'><span>Welcome </span> to the Hospital</p>
                <p className='aboutus_text4 text-start'>Lorem Ipsum is simply dummy text of the printing and typLorem </p>
                <svg className='commonheading_svg' xmlns="http://www.w3.org/2000/svg" width="47" height="4" viewBox="0 0 47 4" fill="none">
                  <path d="M45.5 2H1.5" stroke="#1C2434" stroke-width="3" stroke-linecap="round" />
                </svg>
              </div>

              <div className="aboutus_welcome_lorem">
                <p>Lorem Ipsum has been the industry's standard   </p>
                <p>Lorem Ipsum has been the industry's standard dummy Lorem Ipsum is simply dummy text of the printing and tyLorem Ipsum is simply dummy text of the printing and therefore typesetting industry. Lorem Ipsum has been the industry's standarrem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the reality quick industry's stad dummy text. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Ipsum has been the industry's standard dummy text ever since the 1500s, </p>
                <p>When an unknown printer took a galley of type and scrambled it to make a type it has as a specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.</p>
                <a href="/services" role="button">Our Services</a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* work process */}
      <div className="container-fluid aboutus_workprocess">
        <div className='text-center'>
          <p className='aboutus_text3 mx-auto d-block'>Our <span>Work </span>Process</p>
          <p className='aboutus_text4 d-lg-block d-none'>Lorem Ipsum is simply dummy text of the printing and typLorem  </p>
          <p className='text4 d-lg-none d-block'>A cataract is a clouding of the lens inside</p>
          <svg className='commonheading_svg ' xmlns="http://www.w3.org/2000/svg" width="47" height="4" viewBox="0 0 47 4" fill="none">
            <path d="M45.5 2H1.5" stroke="#1C2434" stroke-width="3" stroke-linecap="round" />
          </svg>
        </div>

        <div className="container text-center">
          <div className="row aboutus_workprocess_lorem">
            <div className="col-lg">
              <img src={require('../images/img43.png')} alt="Your Image" width={112} height={101.996} />
              <div className='d-flex justify-content-center aboutus_workprocess_lorem2'>
                <img src={require('../images/img32.png')} className='mt-1' width='18' height='17.926' alt="Your Image" />
                <p>Take Appointment</p>
              </div>
              <p>A cataract is a clouding of lens inside the eye cataract is the printing and ty Lorem cataract is a clouding ofa clouding of lens inside the eyecatar</p>
            </div>

            <div className="col-lg">
              <img src={require('../images/img44.png')} alt="Your Image" width={112} height={101.996} />
              <div className='d-flex justify-content-center aboutus_workprocess_lorem2'>
                <img src={require('../images/img32.png')} className='mt-1' width='18' height='17.926' alt="Your Image" />
                <p>Eye Check Up</p>
              </div>
              <p>A cataract is a clouding of lens inside the eye cataract is the printing and ty Lorem cataract is a clouding ofa clouding of lens inside the eyecatar</p>
            </div>

            <div className="col-lg">
              <img src={require('../images/img45.png')} alt="Your Image" width={112} height={101.996} />
              <div className='d-flex justify-content-center aboutus_workprocess_lorem2'>
                <img src={require('../images/img32.png')} className='mt-1' width='18' height='17.926' alt="Your Image" />
                <p>Start Treatments</p>
              </div>
              <p>A cataract is a clouding of lens inside the eye cataract is the printing and ty Lorem cataract is a clouding ofa clouding of lens inside the eyecatar</p>
            </div>

          </div>
        </div>
      </div>
      <img className='img-fluid position-absolute d-lg-block d-none outerimg5' src={require('../images/img31.png')} alt="" width={300} height={273} />

      {/* glimpse */}
      <div className="container aboutus_glimpse">
        <div className='position-relative text-center'>
          <p className='aboutus_text3 mx-auto d-block'><span>Glimpse </span>of our Hospital</p>
          <svg className='aboutus_glmipse_sign position-absolute d-lg-block d-none' xmlns="http://www.w3.org/2000/svg" width="115" height="114" viewBox="0 0 115 114" fill="none">
            <g clip-path="url(#clip0_373_594)">
              <path fill-rule="evenodd" clip-rule="evenodd" d="M48.2945 47.1997C46.8269 45.3255 44.742 44.0523 41.932 43.7025C33.2391 42.6207 27.5003 47.2921 23.9755 54.2452C18.829 64.398 18.4797 79.4762 20.3806 87.8658C20.4702 88.2633 20.8668 88.5116 21.264 88.4216C21.6629 88.3324 21.9137 87.9379 21.8242 87.5405C19.9787 79.3977 20.3021 64.7625 25.2962 54.9087C28.5329 48.5245 33.7649 44.1714 41.749 45.1661C44.1255 45.4604 45.8813 46.5408 47.1262 48.1222C46.1014 48.9487 45.1136 49.7931 44.1651 50.6545C41.5477 53.0331 35.9883 60.3746 34.1085 66.7264C32.7612 71.2832 33.3036 75.3262 37.5867 77.0417C39.9675 77.9947 42.3054 77.269 44.3578 75.3944C47.181 72.8188 49.4708 67.994 50.5018 62.8689C51.3608 58.602 51.3503 54.136 50.1138 50.6082C49.8405 49.8334 49.5118 49.1016 49.1201 48.4257C63.551 37.2324 84.4721 29.9724 102.345 30.8182C102.753 30.8359 103.1 30.5237 103.119 30.1162C103.139 29.7094 102.823 29.3643 102.417 29.3448C84.2516 28.4867 62.9954 35.8392 48.2945 47.1997ZM47.9432 49.3588C46.9819 50.1376 46.0541 50.933 45.1623 51.7438C42.6548 54.024 37.3292 61.0569 35.5284 67.1429C34.4227 70.8776 34.6284 74.2684 38.1386 75.6746C39.9826 76.412 41.7684 75.7581 43.3592 74.3085C45.1075 72.712 46.6128 70.1775 47.7139 67.2577C49.3857 62.8248 50.1199 57.5027 49.2657 53.1427C48.9958 51.7613 48.5632 50.4779 47.9432 49.3588Z" fill="#1C2434" />
              <path fill-rule="evenodd" clip-rule="evenodd" d="M80.5824 47.712C85.4082 40.3498 94.3087 34.1347 102.482 30.6991C102.858 30.5411 103.034 30.1083 102.876 29.7338C102.717 29.3593 102.284 29.1822 101.908 29.3401C93.4782 32.8822 84.3197 39.3163 79.3442 46.9058C79.1212 47.2453 79.2174 47.7024 79.5599 47.9253C79.9007 48.1474 80.3594 48.0516 80.5824 47.712Z" fill="#1C2434" />
              <path fill-rule="evenodd" clip-rule="evenodd" d="M101.883 29.1609C94.5794 29.9642 85.3987 26.5475 79.5864 22.0332C79.2641 21.7826 78.7981 21.8388 78.5483 22.1607C78.2967 22.4818 78.3539 22.9443 78.6762 23.1949C84.7653 27.924 94.3936 31.4671 102.045 30.6256C102.451 30.5818 102.744 30.216 102.7 29.8119C102.655 29.407 102.289 29.1154 101.883 29.1609Z" fill="#1C2434" />
            </g>
            <defs>
              <clipPath id="clip0_373_594">
                <rect width="86.9495" height="86.7309" fill="white" transform="matrix(0.918077 0.396403 -0.398868 0.917008 34.5928 0)" />
              </clipPath>
            </defs>
          </svg>
          <p className='aboutus_text4 '>A cataract is a clouding of the lens inside </p>
          <svg className='commonheading_svg ' xmlns="http://www.w3.org/2000/svg" width="47" height="4" viewBox="0 0 47 4" fill="none">
            <path d="M45.5 2H1.5" stroke="#1C2434" stroke-width="3" stroke-linecap="round" />
          </svg>
        </div>

        <div className='aboutus_glimpse_slider'>
          <Slider {...settings9}>
            <div>
              <div class="card aboutus_container">
                <img src={require('../images/img35.png')} alt="Your Image" className='img-fluid'/>
              </div>
            </div>
            <div>
              <div class="card aboutus_container">
                <img src={require('../images/img36.png')} alt="Your Image" className='img-fluid'/>
              </div>
            </div>
            <div>
              <div class="card aboutus_container">
                <img src={require('../images/img37.png')} alt="Your Image" className='img-fluid'/>
              </div>
            </div>
            <div>
              <div class="card aboutus_container">
                <img src={require('../images/img38.png')} alt="Your Image" className='img-fluid'/>
              </div>
            </div>
            <div>
              <div class="card aboutus_container">
                <img src={require('../images/img39.png')} alt="Your Image" className='img-fluid'/>
              </div>
            </div>
          </Slider>
        </div>
      </div>

      {/* medical approach */}
      <div className='container-fluid aboutus_approach'>
        <div className=' d-block d-lg-none'>
          <p className='aboutus_text3 mx-auto d-block'>Our Medical <span>Approach</span></p>
          <p className='text4'>A cataract is a clouding of the lens inside  </p>
          <div className="text-center">
            <svg className='commonheading_svg' xmlns="http://www.w3.org/2000/svg" width="47" height="4" viewBox="0 0 47 4" fill="none">
              <path d="M45.5 2H1.5" stroke="#1C2434" stroke-width="3" stroke-linecap="round" />
            </svg>
          </div>
        </div>

        <div className="container">
          <div className='row' >
            <div class="col-lg-6 order-1 order-lg-0  ">
              <div className=" d-none d-lg-block">
                <p className='aboutus_text3 text-start'>Our Medical <span>Approach</span></p>
                <p className='text4 text-start'>Lorem Ipsum is simply dummy text of the printing and typLorem </p>
                <svg className='commonheading_svg' xmlns="http://www.w3.org/2000/svg" width="47" height="4" viewBox="0 0 47 4" fill="none">
                  <path d="M45.5 2H1.5" stroke="#1C2434" stroke-width="3" stroke-linecap="round" />
                </svg>
              </div>

              <div className="aboutus_approach_lorem">
                <p>Lorem Ipsum has been the industry's standard</p>
                <p>Our support services inclide:</p>
                <p>When an unknown printer took a galley of type and scrambled it to make a type it has as a specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially When an unknown printer took a galley of type and scrambled it to make a type it has as a specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. </p>
                <p>Professional Experience:</p>
                <p>When an unknown printer took a galley of type and scrambled it to make a type it has as a specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.When an unknown printer.</p>
                <a href="/services" role="button">Our Services</a>
              </div>
            </div>

            <div className='col-lg-6 order-0 order-lg-1 d-block my-auto' >
              <div className='aboutus_approach_img1'>
                <p>Happy Patients</p>
              </div>
              <div class="position-relative aboutus_approach_img2">
                <img src={require('../images/img41.png')} alt="Your Image" />
                <p className='position-absolute '>250+</p>
              </div>
              <div className='aboutus_approach_img3'>
                <img src={require('../images/img40.png')} alt="Your Image" />
              </div>
            </div>
          </div>
        </div>
      </div>

      <img className='img-fluid position-absolute d-lg-block d-none outerimg6' src={require('../images/img84.png')} alt="" width={259} height={198} />

      {/* team of doctors */}
      <Team_of_doctors />

      <img className='img-fluid position-absolute d-lg-block d-none z-0 outerimg7' src={require('../images/img31.png')} alt="" width={300} height={273} />
    </div>
  )
}
