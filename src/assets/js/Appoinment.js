import React from 'react'
import img32 from '../images/img32.png'
import img33 from '../images/img33.png'
import img77 from '../images/img77.png'
import img20 from '../images/img20.png'
import img21 from '../images/img21.png'
import img22 from '../images/img22.png'
import img23 from '../images/img23.png'
import img56 from '../images/img56.png'
import img25 from '../images/img25.png'
import img24 from '../images/img24.png'
import img15 from '../images/img15.png'
import { Rating } from '@mui/material'
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import Slider from "react-slick";
import { Link } from 'react-router-dom'

export default function Appoinment() {
  var settings = {
    infinite: false,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
    initialSlide: 0,
    nextArrow: <div><ArrowForwardIosIcon className='carousel-control-next' sx={{ fontSize: 30 }} /></div>,
    prevArrow: <div><ArrowBackIosIcon className='carousel-control-prev' sx={{ fontSize: 30 }} /></div>,
    responsive: [
        {
            breakpoint: 1024,
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
            breakpoint: 1024,
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
          <Link type="button" style={{ marginTop: -500, borderRadius: 30 }} class="px-4 py-2 btn btn-primary ms-auto" to='/contact'>
            Book Your Appointment now
          </Link>

          <p className='text17 text-center' style={{ marginTop: -200 }}>
            <img src={img32} alt="Your Image" width='' height="" style={{ marginTop: -60 }} />
            Book Appointment
            <img src={img32} alt="Your Image" width='' height="" style={{ marginTop: 30, marginLeft: 10 }} />
          </p>
        </div>
      </div>

      {/* form */}
      <div class="container py-5 pe-5 position-relative" style={{ marginTop: 100, backgroundColor: '#F1F5F9' }}>
        <div class="row">
          <div class="col-lg-5 mx-auto d-block">
            <div className="ps-5">
              <p className='text24'>Book  your Appointment Now</p>
              <p className='treatment'>For more Query call on:</p>

              <svg xmlns="http://www.w3.org/2000/svg" width="19" height="24" viewBox="0 0 19 24" fill="none">
                <path d="M2.06445 23H18.0008" stroke="#1C2434" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                <path d="M9.49781 12.524C11.2581 12.524 12.6851 11.1169 12.6851 9.38114C12.6851 7.64539 11.2581 6.23828 9.49781 6.23828C7.73753 6.23828 6.31055 7.64539 6.31055 9.38114C6.31055 11.1169 7.73753 12.524 9.49781 12.524Z" stroke="#1C2434" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                <path d="M17.9987 9.46154C17.9987 17.0769 9.49937 23 9.49937 23C9.49937 23 1 17.0769 1 9.46154C1 7.2174 1.89547 5.06517 3.48941 3.47833C5.08335 1.89148 7.2452 1 9.49937 1C11.7535 1 13.9154 1.89148 15.5093 3.47833C17.1033 5.06517 17.9987 7.2174 17.9987 9.46154V9.46154Z" stroke="#1C2434" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
              </svg>
              <span className='text25 ms-3' >Parle Point: <span className='card-text'>+91 9909905212 / +91 9909905353</span></span>

              <div className='mt-3'>
                <svg xmlns="http://www.w3.org/2000/svg" width="19" height="24" viewBox="0 0 19 24" fill="none">
                  <path d="M2.06445 23H18.0008" stroke="#1C2434" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                  <path d="M9.49781 12.524C11.2581 12.524 12.6851 11.1169 12.6851 9.38114C12.6851 7.64539 11.2581 6.23828 9.49781 6.23828C7.73753 6.23828 6.31055 7.64539 6.31055 9.38114C6.31055 11.1169 7.73753 12.524 9.49781 12.524Z" stroke="#1C2434" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                  <path d="M17.9987 9.46154C17.9987 17.0769 9.49937 23 9.49937 23C9.49937 23 1 17.0769 1 9.46154C1 7.2174 1.89547 5.06517 3.48941 3.47833C5.08335 1.89148 7.2452 1 9.49937 1C11.7535 1 13.9154 1.89148 15.5093 3.47833C17.1033 5.06517 17.9987 7.2174 17.9987 9.46154V9.46154Z" stroke="#1C2434" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                </svg>
                <span className='text25 ms-3' >Parvat Patiya:<span className='card-text'>+91 9879209651</span></span>
              </div>
            </div>

            <img src={img77} alt='' className='img-fluid d-lg-block d-none mt-5 appoinimg' />
          </div>
          <div class="col-lg-7 appointform mx-auto d-block">
            <form class="row g-5">
              <div class="col-lg-6">
                <label for="inputName" class="form-label">Full name *</label>
                <div class="input-group">
                  <span className="input-group-text" id="addon-wrapping">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                      <path d="M12.1605 10.87C12.0605 10.86 11.9405 10.86 11.8305 10.87C9.45055 10.79 7.56055 8.84 7.56055 6.44C7.56055 3.99 9.54055 2 12.0005 2C14.4505 2 16.4405 3.99 16.4405 6.44C16.4305 8.84 14.5405 10.79 12.1605 10.87Z" stroke="#64748B" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                      <path d="M7.1607 14.56C4.7407 16.18 4.7407 18.82 7.1607 20.43C9.9107 22.27 14.4207 22.27 17.1707 20.43C19.5907 18.81 19.5907 16.17 17.1707 14.56C14.4307 12.73 9.9207 12.73 7.1607 14.56Z" stroke="#64748B" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                    </svg>
                  </span>
                  <input type="text" class="form-control" placeholder="Your Name here" id="inputName" required />
                </div>
              </div>

              <div class="col-lg-6">
                <label for="inputEmail" class="form-label">Your email *</label>
                <div class="input-group">
                  <span className="input-group-text" id="addon-wrapping">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                      <path d="M17 21.25H7C3.35 21.25 1.25 19.15 1.25 15.5V8.5C1.25 4.85 3.35 2.75 7 2.75H17C20.65 2.75 22.75 4.85 22.75 8.5V15.5C22.75 19.15 20.65 21.25 17 21.25ZM7 4.25C4.14 4.25 2.75 5.64 2.75 8.5V15.5C2.75 18.36 4.14 19.75 7 19.75H17C19.86 19.75 21.25 18.36 21.25 15.5V8.5C21.25 5.64 19.86 4.25 17 4.25H7Z" fill="#64748B" />
                      <path d="M11.9988 12.868C11.1588 12.868 10.3088 12.608 9.6588 12.078L6.5288 9.57802C6.2088 9.31802 6.14881 8.84802 6.4088 8.52802C6.66881 8.20802 7.13881 8.14802 7.45881 8.40802L10.5888 10.908C11.3488 11.518 12.6388 11.518 13.3988 10.908L16.5288 8.40802C16.8488 8.14802 17.3288 8.19802 17.5788 8.52802C17.8388 8.84802 17.7888 9.32802 17.4588 9.57802L14.3288 12.078C13.6888 12.608 12.8388 12.868 11.9988 12.868Z" fill="#64748B" />
                    </svg>
                  </span>
                  <input type="email" class="form-control" placeholder="example@yourmail.com" id="inputEmail" required />
                </div>
              </div>

              <div class="col-lg-6">
                <label for="inputPhone" class="form-label">Phone *</label>
                <div class="input-group">
                  <span className="input-group-text" id="addon-wrapping">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                      <path d="M17.45 22.75C16.32 22.75 15.13 22.48 13.9 21.96C12.7 21.45 11.49 20.75 10.31 19.9C9.14 19.04 8.01 18.08 6.94 17.03C5.88 15.96 4.92 14.83 4.07 13.67C3.21 12.47 2.52 11.27 2.03 10.11C1.51 8.87 1.25 7.67 1.25 6.54C1.25 5.76 1.39 5.02 1.66 4.33C1.94 3.62 2.39 2.96 3 2.39C3.77 1.63 4.65 1.25 5.59 1.25C5.98 1.25 6.38 1.34 6.72 1.5C7.11 1.68 7.44 1.95 7.68 2.31L10 5.58C10.21 5.87 10.37 6.15 10.48 6.43C10.61 6.73 10.68 7.03 10.68 7.32C10.68 7.7 10.57 8.07 10.36 8.42C10.21 8.69 9.98 8.98 9.69 9.27L9.01 9.98C9.02 10.01 9.03 10.03 9.04 10.05C9.16 10.26 9.4 10.62 9.86 11.16C10.35 11.72 10.81 12.23 11.27 12.7C11.86 13.28 12.35 13.74 12.81 14.12C13.38 14.6 13.75 14.84 13.97 14.95L13.95 15L14.68 14.28C14.99 13.97 15.29 13.74 15.58 13.59C16.13 13.25 16.83 13.19 17.53 13.48C17.79 13.59 18.07 13.74 18.37 13.95L21.69 16.31C22.06 16.56 22.33 16.88 22.49 17.26C22.64 17.64 22.71 17.99 22.71 18.34C22.71 18.82 22.6 19.3 22.39 19.75C22.18 20.2 21.92 20.59 21.59 20.95C21.02 21.58 20.4 22.03 19.68 22.32C18.99 22.6 18.24 22.75 17.45 22.75ZM5.59 2.75C5.04 2.75 4.53 2.99 4.04 3.47C3.58 3.9 3.26 4.37 3.06 4.88C2.85 5.4 2.75 5.95 2.75 6.54C2.75 7.47 2.97 8.48 3.41 9.52C3.86 10.58 4.49 11.68 5.29 12.78C6.09 13.88 7 14.95 8 15.96C9 16.95 10.08 17.87 11.19 18.68C12.27 19.47 13.38 20.11 14.48 20.57C16.19 21.3 17.79 21.47 19.11 20.92C19.62 20.71 20.07 20.39 20.48 19.93C20.71 19.68 20.89 19.41 21.04 19.09C21.16 18.84 21.22 18.58 21.22 18.32C21.22 18.16 21.19 18 21.11 17.82C21.08 17.76 21.02 17.65 20.83 17.52L17.51 15.16C17.31 15.02 17.13 14.92 16.96 14.85C16.74 14.76 16.65 14.67 16.31 14.88C16.11 14.98 15.93 15.13 15.73 15.33L14.97 16.08C14.58 16.46 13.98 16.55 13.52 16.38L13.25 16.26C12.84 16.04 12.36 15.7 11.83 15.25C11.35 14.84 10.83 14.36 10.2 13.74C9.71 13.24 9.22 12.71 8.71 12.12C8.24 11.57 7.9 11.1 7.69 10.71L7.57 10.41C7.51 10.18 7.49 10.05 7.49 9.91C7.49 9.55 7.62 9.23 7.87 8.98L8.62 8.2C8.82 8 8.97 7.81 9.07 7.64C9.15 7.51 9.18 7.4 9.18 7.3C9.18 7.22 9.15 7.1 9.1 6.98C9.03 6.82 8.92 6.64 8.78 6.45L6.46 3.17C6.36 3.03 6.24 2.93 6.09 2.86C5.93 2.79 5.76 2.75 5.59 2.75ZM13.95 15.01L13.79 15.69L14.06 14.99C14.01 14.98 13.97 14.99 13.95 15.01Z" fill="#64748B" />
                    </svg>
                  </span>
                  <input type="text" class="form-control" placeholder="Your Number here" id='inputPhone' required />
                </div>
              </div>

              <div class="col-lg-6">
                <label for="inputHospital" class="form-label">Hospital * </label>
                <div class="input-group">
                  <span className="input-group-text" id="addon-wrapping">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                      <path d="M3 21H21" stroke="#64748B" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                      <path d="M5 21V5C5 3.89543 5.89543 3 7 3H17C18.1046 3 19 3.89543 19 5V21" stroke="#64748B" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                      <path d="M9 21V17C9 15.8954 9.89543 15 11 15H13C14.1046 15 15 15.8954 15 17V21" stroke="#64748B" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                      <path d="M10 9H14" stroke="#64748B" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                      <path d="M12 7V11" stroke="#64748B" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                    </svg>
                  </span>
                  <select id="inputHospital" class="form-select" required >
                    <option selected >Select Hospital Location</option>
                    <option>Parle Point</option>
                    <option>Parvat Patiya</option>
                  </select>
                </div>
              </div>

              <div class="col-lg-6">
                <label for="inputDate" class="form-label">Preferred Date for Appointment</label>
                <div class="input-group">
                  <span className="input-group-text" id="addon-wrapping">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                      <path d="M8 5.75C7.59 5.75 7.25 5.41 7.25 5V2C7.25 1.59 7.59 1.25 8 1.25C8.41 1.25 8.75 1.59 8.75 2V5C8.75 5.41 8.41 5.75 8 5.75Z" fill="#64748B" />
                      <path d="M16 5.75C15.59 5.75 15.25 5.41 15.25 5V2C15.25 1.59 15.59 1.25 16 1.25C16.41 1.25 16.75 1.59 16.75 2V5C16.75 5.41 16.41 5.75 16 5.75Z" fill="#64748B" />
                      <path d="M15 22.75H9C3.38 22.75 2.25 20.1 2.25 15.82V9.65C2.25 4.91 3.85 2.98 7.96 2.75H16C16.01 2.75 16.03 2.75 16.04 2.75C20.15 2.98 21.75 4.91 21.75 9.65V15.82C21.75 20.1 20.62 22.75 15 22.75ZM8 4.25C5.2 4.41 3.75 5.29 3.75 9.65V15.82C3.75 19.65 4.48 21.25 9 21.25H15C19.52 21.25 20.25 19.65 20.25 15.82V9.65C20.25 5.3 18.81 4.41 15.98 4.25H8Z" fill="#64748B" />
                      <path d="M20.75 18.3516H3.25C2.84 18.3516 2.5 18.0116 2.5 17.6016C2.5 17.1916 2.84 16.8516 3.25 16.8516H20.75C21.16 16.8516 21.5 17.1916 21.5 17.6016C21.5 18.0116 21.16 18.3516 20.75 18.3516Z" fill="#64748B" />
                      <path d="M12 8.25C10.77 8.25 9.73 8.92 9.73 10.22C9.73 10.84 10.02 11.31 10.46 11.61C9.85 11.97 9.5 12.55 9.5 13.23C9.5 14.47 10.45 15.24 12 15.24C13.54 15.24 14.5 14.47 14.5 13.23C14.5 12.55 14.15 11.96 13.53 11.61C13.98 11.3 14.26 10.84 14.26 10.22C14.26 8.92 13.23 8.25 12 8.25ZM12 11.09C11.48 11.09 11.1 10.78 11.1 10.29C11.1 9.79 11.48 9.5 12 9.5C12.52 9.5 12.9 9.79 12.9 10.29C12.9 10.78 12.52 11.09 12 11.09ZM12 14C11.34 14 10.86 13.67 10.86 13.07C10.86 12.47 11.34 12.15 12 12.15C12.66 12.15 13.14 12.48 13.14 13.07C13.14 13.67 12.66 14 12 14Z" fill="#64748B" />
                    </svg>
                  </span>
                  <input type="date" class="form-control" placeholder="Select Date" id='inputDate' />
                </div>
              </div>

              <div class="col-lg-6">
                <label for="inputTime" class="form-label">Preferred Time for Appointment</label>
                <div class="input-group">
                  <span className="input-group-text" id="addon-wrapping">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                      <path d="M12 22.75C6.07 22.75 1.25 17.93 1.25 12C1.25 6.07 6.07 1.25 12 1.25C17.93 1.25 22.75 6.07 22.75 12C22.75 17.93 17.93 22.75 12 22.75ZM12 2.75C6.9 2.75 2.75 6.9 2.75 12C2.75 17.1 6.9 21.25 12 21.25C17.1 21.25 21.25 17.1 21.25 12C21.25 6.9 17.1 2.75 12 2.75Z" fill="#64748B" />
                      <path d="M15.7106 15.9317C15.5806 15.9317 15.4506 15.9017 15.3306 15.8217L12.2306 13.9717C11.4606 13.5117 10.8906 12.5017 10.8906 11.6117V7.51172C10.8906 7.10172 11.2306 6.76172 11.6406 6.76172C12.0506 6.76172 12.3906 7.10172 12.3906 7.51172V11.6117C12.3906 11.9717 12.6906 12.5017 13.0006 12.6817L16.1006 14.5317C16.4606 14.7417 16.5706 15.2017 16.3606 15.5617C16.2106 15.8017 15.9606 15.9317 15.7106 15.9317Z" fill="#64748B" />
                    </svg>
                  </span>
                  <select id="inputTime" class="form-select" >
                    <option selected >Select Time</option>
                    <option>01</option>
                    <option>02</option>
                  </select>
                </div>
              </div>

              <div class="col-12">
                <label for="inputMessageappint" class="form-label">Message</label>
                <input type="text" class="form-control message" placeholder='Hello there,I would like to talk about how to...' id='inputMessageappoint' />
              </div>

              <div class="col-12">
                <div class="form-check">
                  <input class="form-check-input" type="checkbox" id="gridCheck" />
                  <label class="form-check-label" for="gridCheck">
                    I authorize ASG Eye Hospitals and its representatives to Call, SMS, Email or WhatsApp me about its products and offers. This consent overrides any registration for DNC / NDNC.
                  </label>
                </div>
              </div>

              <div class="col-12">
                <button type="submit" class="btn btn-primary px-4 py-2">Send Message</button>
              </div>
            </form>
          </div>
        </div>
      </div>

      {/* team of doctors */}
      <div className='container team' style={{ marginTop: 100 + 'px' }}>
        <p className='text3 mx-auto d-block'>Our<span style={{ color: '#017CC7' }}> team</span> of Doctors</p>
        <p className='text4'>A cataract is a clouding of the lens inside </p>
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

      {/* rating and feedback */}
      <div className="container rating" style={{ marginTop: 100 }}>
        <p className='text3 mx-auto d-block'>What Our<span style={{ color: '#017CC7' }}> Patient says</span> about us</p>
        <p className='text4'>A cataract is a clouding of the lens inside </p>
        <svg style={{ color: '#1C2434', margin: 'auto', display: 'block', marginBottom: 50 + 'px' }} xmlns="http://www.w3.org/2000/svg" width="47" height="4" viewBox="0 0 47 4" fill="none">
          <path d="M45.5 2H1.5" stroke="#1C2434" stroke-width="3" stroke-linecap="round" />
        </svg>
        <div>
          <Slider {...settings}>
            <div>
              <div class="card cardclass mx-5">
                <div className='d-flex p-5'>
                  <img className='rounded-circle' src={img24} alt="" width="70" height="70" style={{}} />
                  <span className='lead3 ms-3'>John Carter</span>
                  <span className='ms-auto mt-1'><Rating name="read-only" size="large" value={5} readOnly /></span>
                </div>
                <div class="card-body text11 ms-4">
                  <p class="card-text">Working with Vision has been a game-changer for our business. Their strategies have led to significant growth and a boost in revenue.</p>
                </div>
              </div>
            </div>
            <div>
              <div class="card cardclass mx-5">
                <div className='d-flex p-5'>
                  <img className='rounded-circle' src={img25} alt="" width="70" height="70" style={{}} />
                  <span className='lead3 ms-3'>Peeter pawl</span>
                  <span className='ms-auto mt-1'><Rating name="read-only" size="large" value={5} readOnly /></span>
                </div>
                <div class="card-body text11 ms-4">
                  <p class="card-text">I'm extremely impressed with the level of expertise and dedication that the team at Vision brings to me. They consistently deliver great results.</p>
                </div>
              </div>
            </div>
            <div>
              <div class="card cardclass mx-5">
                <div className='d-flex p-5'>
                  <img className='rounded-circle' src={img15} alt="No Image" width="70" height="70" style={{}} />
                  <span className='lead3 ms-3'>Elis Perry</span>
                  <span className='ms-auto mt-1'><Rating name="read-only" size="large" value={5} readOnly /></span>
                </div>
                <div class="card-body text11 ms-4">
                  <p class="card-text">I'm extremely impressed with the level of expertise and dedication that the team at Vision brings to me. They consistently deliver great results.</p>
                </div>
              </div>
            </div>
          </Slider>
        </div>
      </div>
    </div>
  )
}
