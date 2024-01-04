import React from 'react'
import img31 from '../images/img31.png'
import img32 from '../images/img32.png'
import img33 from '../images/img33.png'
import img34 from '../images/img34.png'
import img35 from '../images/img35.png'
import img36 from '../images/img36.png'
import img37 from '../images/img37.png'
import img38 from '../images/img38.png'
import img39 from '../images/img39.png'
import img40 from '../images/img40.png'
import img41 from '../images/img41.png'
import img42 from '../images/img42.png'
import img43 from '../images/img43.png'
import img44 from '../images/img44.png'
import img45 from '../images/img45.png'
import img20 from '../images/img20.png'
import img21 from '../images/img21.png'
import img22 from '../images/img22.png'
import img23 from '../images/img23.png'
import img83 from '../images/img83.png'
import img84 from '../images/img84.png'
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import Slider from "react-slick";

import { Link } from 'react-router-dom'

export default function Aboutus() {
  const settings = {
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    speed: 2000,
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

  var settings4 = {
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    initialSlide: 0,
    nextArrow: <div><ArrowForwardIosIcon className='carousel-control-next3' sx={{ fontSize: 30 }} /></div>,
    prevArrow: <div><ArrowBackIosIcon className='carousel-control-prev3' sx={{ fontSize: 30 }} /></div>,
    responsive: [
      {
        breakpoint:992,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
        }
      }
    ]
  };

  return (
    <div>
      {/* hero section */}
      <div class="container-fluid text-center">
        <svg xmlns="http://www.w3.org/2000/svg" width="1920" height="340" viewBox="0 0 1920 340" fill="none">
          <path d="M0 0H1920V260.132L0 340V0Z" fill="#F1F5F9" />

          <foreignObject width="100%" height="100%">
            <div>
              <img src={img33} alt="Your Image" width='' height="" />
            </div>
          </foreignObject>
        </svg>

        <div className="container text-center">
          <Link type="button" style={{ marginTop: -450, borderRadius: 30 }} class="px-4 py-2 btn btn-primary ms-auto" to='/about'>
            Know who we are
          </Link>

          <p className='text17' style={{ marginTop: -200 }}>
            <img src={img32} alt="Your Image" width='' height="" style={{ marginTop: -50 }} />
            About Us
            <img src={img32} alt="Your Image" width='' height="" style={{ marginTop: 30, marginLeft: 10 }} />
          </p>
        </div>
      </div>

      <img className='img-fluid position-absolute d-lg-block d-none' src={img83} alt="" width={100} height={100} style={{marginTop:0,right:0}}/>

      {/* welcome to hospital */}
      <div className='container py-5' style={{ marginTop: 100 + 'px' }}>
        <div className='aboutus'>
          <p className='text3 mx-auto d-block'><span style={{ color: '#017CC7' }}>Welcome </span> to the Hospital</p>
          <p className='text4 mb-5 '>Lorem Ipsum is simply dummy text of the printing and typLorem   </p>
          <svg style={{ color: '#1C2434', margin: 'auto', display: 'block', marginTop: -40, marginBottom: 50 }} xmlns="http://www.w3.org/2000/svg" width="47" height="4" viewBox="0 0 47 4" fill="none">
            <path d="M45.5 2H1.5" stroke="#1C2434" stroke-width="3" stroke-linecap="round" />
          </svg>
        </div>
        <div className="container welcome">
          <div className='row' >
            <div className='col-lg-6 d-flex justify-content-center'>
              <img src={img34} alt="Your Image" className='my-auto img-fluid' style={{width: 100+'%',height:100+'%',maxHeight:100+'%'}} />
            </div>

            <div class="jumbotron col-lg-6 mx-auto">
              <div className="about">
                <p className='text3 me-auto text-start'><span style={{ color: '#017CC7' }}>Welcome </span> to the Hospital</p>
                <p className='text4 mb-5 text-start'>Lorem Ipsum is simply dummy text of the printing and typLorem   </p>
                <svg style={{ color: '#1C2434', display: 'block', marginTop: -40, marginBottom: 50 }} xmlns="http://www.w3.org/2000/svg" width="47" height="4" viewBox="0 0 47 4" fill="none">
                  <path d="M45.5 2H1.5" stroke="#1C2434" stroke-width="3" stroke-linecap="round" />
                </svg>
              </div>
              <p className='text7'>Lorem Ipsum has been the industry's standard   </p>
              <p className='text6'>Lorem Ipsum has been the industry's standard dummy Lorem Ipsum is simply dummy text of the printing and tyLorem Ipsum is simply dummy text of the printing and therefore typesetting industry. Lorem Ipsum has been the industry's standarrem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the reality quick industry's stad dummy text. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Ipsum has been the industry's standard dummy text ever since the 1500s, </p>
              <p className='text6'>When an unknown printer took a galley of type and scrambled it to make a type it has as a specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.</p>
              <Link class="lead2 btn btn-primary btn-lg" to="/services" role="button">Our Services</Link>
            </div>
          </div>
        </div>
      </div>

      {/* work process */}
      <div className="container-fluid glimpse py-5" style={{ marginTop: 100 + 'px', backgroundColor: '#F1F5F9' }}>
        <p className='text3 mx-auto d-block'>Our <span style={{ color: '#017CC7' }}>Work </span>Process</p>
        <p className='text4'>Lorem Ipsum is simply dummy text of the printing and typLorem  </p>
        <svg style={{ color: '#1C2434', margin: 'auto', display: 'block', marginBottom: 50 + 'px' }} xmlns="http://www.w3.org/2000/svg" width="47" height="4" viewBox="0 0 47 4" fill="none">
          <path d="M45.5 2H1.5" stroke="#1C2434" stroke-width="3" stroke-linecap="round" />
        </svg>

        <div className="container text-center">
          <div className="row">
            <div className="col-lg">
              <img src={img43} alt="Your Image" width={102} height={95} />
              <div className='d-flex justify-content-center'>
                <img className='mt-4' src={img32} width='20' height='20' alt="Your Image" />
                <p className='ms-3 text7 my-3'>Take Appointment</p>
              </div>
              <p className='text6'>A cataract is a clouding of lens inside the eye cataract is the printing and ty Lorem cataract is a clouding ofa clouding of lens inside the eyecatar</p>
            </div>

            <div className="col-lg">
              <img src={img44} alt="Your Image" width={102} height={95} />
              <div className='d-flex justify-content-center'>
                <img className='mt-4' src={img32} width='20' height='20' alt="Your Image" />
                <p className='ms-3 text7 my-3'>Eye Check Up</p>
              </div>
              <p className='text6'>A cataract is a clouding of lens inside the eye cataract is the printing and ty Lorem cataract is a clouding ofa clouding of lens inside the eyecatar</p>
            </div>

            <div className="col-lg">
              <img src={img45} alt="Your Image" width={102} height={95} />
              <div className='d-flex justify-content-center'>
                <img className='mt-4' src={img32} width='20' height='20' alt="Your Image" />
                <p className='ms-3 text7 my-3'>Start Treatments</p>
              </div>
              <p className='text6'>A cataract is a clouding of lens inside the eye cataract is the printing and ty Lorem cataract is a clouding ofa clouding of lens inside the eyecatar</p>
            </div>
          </div>
        </div>
      </div>
      <img className='img-fluid position-absolute d-lg-block d-none' src={img31} alt="" width={300} height={273} style={{marginTop:-100,right:0}}/>

      {/* glimpse */}
      <div className="container glimpse" style={{ marginTop: 100 + 'px' }}>
        <p className='text3 mx-auto d-block'><span style={{ color: '#017CC7' }}>Glimpse </span>of our Hospital</p>
        <p className='text4'>A cataract is a clouding of the lens inside </p>
        <svg style={{ color: '#1C2434', margin: 'auto', display: 'block', marginBottom: 50 + 'px' }} xmlns="http://www.w3.org/2000/svg" width="47" height="4" viewBox="0 0 47 4" fill="none">
          <path d="M45.5 2H1.5" stroke="#1C2434" stroke-width="3" stroke-linecap="round" />
        </svg>
        <div>
          <Slider {...settings}>
            <div class="image-container">
              <img src={img35} alt="Your Image" />
            </div>
            <div class="image-container">
              <img src={img36} alt="Your Image" />
            </div>
            <div class="image-container">
              <img src={img37} alt="Your Image" />
            </div>
            <div class="image-container">
              <img src={img38} alt="Your Image" />
            </div>
            <div class="image-container">
              <img src={img39} alt="Your Image" />
            </div>
          </Slider>
        </div>
      </div>

      {/* medical approach */}
      <div className='container-fluid py-5' style={{ marginTop: 100 + 'px', backgroundColor: '#F1F5F9' }}>
        <div className='aboutus'>
          <p className='text3 mx-auto d-block'>Our Medical <span style={{ color: '#017CC7' }}> Approach</span></p>
          <p className='text4'>A cataract is a clouding of the lens inside  </p>
          <svg style={{ color: '#1C2434', margin: 'auto', display: 'block', marginBottom: 50 + 'px' }} xmlns="http://www.w3.org/2000/svg" width="47" height="4" viewBox="0 0 47 4" fill="none">
            <path d="M45.5 2H1.5" stroke="#1C2434" stroke-width="3" stroke-linecap="round" />
          </svg>
        </div>
        <div className="container">
          <div className='row' >
            <div class="jumbotron col-lg-7 order-1 order-lg-0 medical ">
              <div className="about">
                <p className='text3 me-auto text-start'>Our Medical <span style={{ color: '#017CC7' }}>Approach </span> </p>
                <p className='text4 mb-5 text-start'>Lorem Ipsum is simply dummy text of the printing and typLorem   </p>
                <svg style={{ color: '#1C2434', display: 'block', marginTop: -40 }} xmlns="http://www.w3.org/2000/svg" width="47" height="4" viewBox="0 0 47 4" fill="none">
                  <path d="M45.5 2H1.5" stroke="#1C2434" stroke-width="3" stroke-linecap="round" />
                </svg>
              </div>
              <p className='text31 mt-4' style={{ color: '#1C2434' }}>Lorem Ipsum has been the industry's standard</p>
              <p className='text18'>Our support services inclide:</p>
              <p className='text6'>When an unknown printer took a galley of type and scrambled it to make a type it has as a specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially When an unknown printer took a galley of type and scrambled it to make a type it has as a specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. </p>
              <p className='text18'>Professional Experience:</p>
              <p className='text6'>When an unknown printer took a galley of type and scrambled it to make a type it has as a specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.When an unknown printer.</p>
              <Link class="text30 lead2 btn btn-primary btn-lg mt-3" to="/services" role="button">Our Services</Link>
            </div>

            <div className='col-lg-5 order-0 order-lg-1 medicalimg ' >
              <div className='rec5 '>
                <p className='text9 mt-3'>Happy Patients</p>
              </div>
              <div class="position-relative" style={{ marginTop: -80, marginLeft: 20 }}>
                <img src={img41} alt="Your Image position-absolute" style={{ width: 173, height: 56 }} />
                <p className='position-absolute ' style={{ top: 20, left: 128, color: 'white' }}>250+</p>
              </div>
              <div className='position-relative'>
                <img src={img40} alt="Your Image" className='welcome1 img-fluid' style={{ top: 0, left: 0, position: 'absolute', zIndex: 2, width: 100 + '%', height: 480 }} />
                <img src={img42} alt="Your Image" className='welcome2 img-fluid' style={{ top: 30, left: 0, position: 'absolute', zIndex: 1, width: 100 + '%', height: 450 }} />
              </div>
            </div>
          </div>
        </div>
      </div>
      <img className='img-fluid position-absolute d-lg-block d-none' src={img84} alt="" width={259} height={198} style={{marginTop:-100,right:0}}/>

      {/* team of doctors */}
      <div className='container team' style={{ marginTop: 100 + 'px' }}>
        <p className='text28 mx-auto d-block'>Our<span style={{ color: '#017CC7' }}> team</span> of Doctors</p>
        <p className='text29 mx-auto d-block'>A cataract is a clouding of the lens inside </p>
        <div className="teammain">
          <svg style={{ color: '#1C2434', margin: 'auto', display: 'block', marginBottom: 50 + 'px' }} xmlns="http://www.w3.org/2000/svg" width="47" height="4" viewBox="0 0 47 4" fill="none">
            <path d="M45.5 2H1.5" stroke="#1C2434" stroke-width="3" stroke-linecap="round" />
          </svg>

          <Slider {...settings4}>
            <div>
              <div class="" id='col'>
                <img className='rounded-circle mx-auto ' src={img20} alt="" width="150" height="150" />
                <div className='rec4'>
                  <p className='text10'>Dr. Shailesh Agrawal</p>
                  <p className='text8'>M.S (Ophthalmology) Gold Medalist</p>
                </div>
              </div>
            </div>
            <div>
              <div class="" id='coldiff'>
                <svg xmlns="http://www.w3.org/2000/svg" width="70" height="65" viewBox="0 0 61 55" fill="none" style={{ marginLeft: -5, marginTop: -5, borderRadius: 15 }}>
                  <g opacity="0.2">
                    <circle cx="20.5" cy="14.5" r="32.5" fill="#017CC7" />
                    <circle cx="19.5" cy="13.5" r="40" stroke="#017CC7" stroke-width="3" />
                  </g>
                </svg>
                <img className='rounded-circle mx-auto' src={img21} alt="" width="150" height="150" style={{ marginTop: -60 }} />
                <div className='rec4'>
                  <p className='text9'>Dr. Khushboo Patel</p>
                  <p className='text8'>Vitreo Retina Surgeon & ROP Consultant</p>
                </div>
              </div>
            </div>
            <div>
              <div class="" id='col'>
                <img className='rounded-circle mx-auto' src={img22} alt="" width="150" height="150" />
                <div className='rec4'>
                  <p className='text10'>Dr. Nitin Jain</p>
                  <p className='text8'>MS,FAEH (Opthalmology)</p>
                </div>
              </div>
            </div>
            <div>
              <div class="" id='col'>
                <img className='rounded-circle mx-auto ' src={img23} alt="" width="150" height="150" />
                <div className='rec4'>
                  <p className='text10'>Dr. Saurin Gandhi</p>
                  <p className='text8'>DNB - Ophthalmology, MNAMS</p>
                </div>
              </div>
            </div>
          </Slider>
        </div>
      </div>
      <img className='img-fluid position-absolute d-lg-block d-none z-0' src={img31} alt="" width={300} height={273} style={{marginTop:-50,right:0}}/>
    </div>
  )
}
