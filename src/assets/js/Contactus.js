import React from 'react'
import img32 from '../images/img32.png'
import img33 from '../images/img33.png'
import img76 from '../images/img76.png'
import img26 from '../images/img26.png'
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import { Link } from 'react-router-dom'

export default function Contactus() {
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
            Get in touch
          </Link>

          <p className='text17 text-center' style={{ marginTop: -200 }}>
            <img src={img32} alt="Your Image" width='' height="" style={{ marginTop: -60 }} />
            Contact Us
            <img src={img32} alt="Your Image" width='' height="" style={{ marginTop: 30, marginLeft: 10 }} />
          </p>
        </div>
      </div>

      {/* address */}
      <div className='container py-5 aboutmain' style={{ marginTop: 100 + 'px' }}>
        <p className='text3 mx-auto d-block'>Get in touch with us today and  <span style={{ color: '#017CC7' }}>take good care of your eye  </span>with us. </p>
        <p className='text4'>A cataract is a clouding of the lens inside </p>
        <svg style={{ color: '#1C2434', margin: 'auto', display: 'block', marginBottom: 50 + 'px' }} xmlns="http://www.w3.org/2000/svg" width="47" height="4" viewBox="0 0 47 4" fill="none">
          <path d="M45.5 2H1.5" stroke="#1C2434" stroke-width="3" stroke-linecap="round" />
        </svg>

        <div class="row">
          <div class="col-lg-6 relatedblog p-3">
            <div class="card p-3">
              <div class="card-body">
                <a class="btn bg-primary text-light rounded-pill py-2 px-3 contactuspill mb-3" href='#' role="button">Parle Point Branch</a>
                <hr />
                <div className="d-flex gap-3">
                  <svg xmlns="http://www.w3.org/2000/svg" width="21" height="27" viewBox="0 0 21 27" fill="none">
                    <path d="M2.19141 26.1406H20.0485" stroke="#017CC7" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                    <path d="M10.5246 14.2366C12.497 14.2366 14.096 12.6376 14.096 10.6652C14.096 8.69273 12.497 7.09375 10.5246 7.09375C8.55211 7.09375 6.95312 8.69273 6.95312 10.6652C6.95312 12.6376 8.55211 14.2366 10.5246 14.2366Z" stroke="#017CC7" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                    <path d="M20.0476 10.756C20.0476 19.4099 10.5238 26.1406 10.5238 26.1406C10.5238 26.1406 1 19.4099 1 10.756C1 8.20585 2.0034 5.76014 3.78946 3.95691C5.57552 2.15367 7.99794 1.14063 10.5238 1.14062C13.0497 1.14063 15.4721 2.15367 17.2582 3.95691C19.0442 5.76014 20.0476 8.20585 20.0476 10.756V10.756Z" stroke="#017CC7" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                  </svg>
                  <h5 class="card-title">Location</h5>
                </div>
                <p class="card-text" style={{ marginLeft: 35 }}>3rd Floor , Union PointNear Kakadia Complex,Parle Point, Ghod Dod Road,Surat.</p>
                <p class="card-text" style={{ marginLeft: 35 }}>Time : 9:30 AM to 6:00 PM</p>
                <div className="d-flex gap-3">
                  <svg xmlns="http://www.w3.org/2000/svg" width="27" height="27" viewBox="0 0 27 27" fill="none">
                    <path d="M8.14619 13.6798C9.26674 15.9938 11.1379 17.8602 13.4548 18.9748C13.6257 19.0557 13.8147 19.0907 14.0033 19.0764C14.1918 19.0621 14.3734 18.9989 14.5301 18.8931L17.9331 16.6199C18.0834 16.518 18.2571 16.4558 18.438 16.4391C18.6189 16.4224 18.8011 16.4519 18.9676 16.5247L25.3379 19.2606C25.5556 19.3513 25.7375 19.5109 25.8555 19.7151C25.9736 19.9192 26.0213 20.1565 25.9912 20.3904C25.7893 21.9663 25.0201 23.4146 23.8276 24.4644C22.635 25.5141 21.1008 26.0934 19.512 26.0938C14.6023 26.0937 9.89373 24.1434 6.42205 20.6717C2.95037 17.2 1 12.4914 1 7.58172C1.00036 5.99295 1.57961 4.45875 2.62937 3.26618C3.67912 2.07362 5.12745 1.30442 6.70334 1.10251C6.93724 1.07247 7.17453 1.12015 7.37868 1.23821C7.58282 1.35627 7.7425 1.53816 7.83311 1.75588L10.5691 8.13981C10.6402 8.30362 10.67 8.48242 10.6558 8.66045C10.6415 8.83848 10.5837 9.01027 10.4874 9.16069L8.21424 12.6181C8.11304 12.7745 8.05364 12.9542 8.04173 13.1401C8.02981 13.326 8.06578 13.5118 8.14619 13.6798V13.6798Z" stroke="#017CC7" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                  </svg>
                  <h5 class="card-title">Phone</h5>
                </div>
                <p class="card-text" style={{ marginLeft: 35 }}>+91 9909905212 / +91 9909905353</p>
              </div>
            </div>
          </div>
          <div class="col-lg-6 relatedblog p-3">
            <div class="card p-3">
              <div class="card-body">
                <a class="btn bg-primary text-light rounded-pill py-2 px-3 contactuspill mb-3" href='#' role="button">Parvat patiya Branch</a>
                <hr />
                <div className="d-flex gap-3">
                  <svg xmlns="http://www.w3.org/2000/svg" width="21" height="27" viewBox="0 0 21 27" fill="none">
                    <path d="M2.19141 26.1406H20.0485" stroke="#017CC7" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                    <path d="M10.5246 14.2366C12.497 14.2366 14.096 12.6376 14.096 10.6652C14.096 8.69273 12.497 7.09375 10.5246 7.09375C8.55211 7.09375 6.95312 8.69273 6.95312 10.6652C6.95312 12.6376 8.55211 14.2366 10.5246 14.2366Z" stroke="#017CC7" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                    <path d="M20.0476 10.756C20.0476 19.4099 10.5238 26.1406 10.5238 26.1406C10.5238 26.1406 1 19.4099 1 10.756C1 8.20585 2.0034 5.76014 3.78946 3.95691C5.57552 2.15367 7.99794 1.14063 10.5238 1.14062C13.0497 1.14063 15.4721 2.15367 17.2582 3.95691C19.0442 5.76014 20.0476 8.20585 20.0476 10.756V10.756Z" stroke="#017CC7" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                  </svg>
                  <h5 class="card-title">Location</h5>
                </div>
                <p class="card-text" style={{ marginLeft: 35 }}>63, Karunesh Nagar Society,Above Ganesh Medical Store,Near, Cross Road Restaurant,Aai Mata Circle, Parvat PatiyaSurat.</p>
                <p class="card-text" style={{ marginLeft: 35 }}>Time : 6:00 PM to 9:00 PM</p>
                <div className="d-flex gap-3">
                  <svg xmlns="http://www.w3.org/2000/svg" width="27" height="27" viewBox="0 0 27 27" fill="none">
                    <path d="M8.14619 13.6798C9.26674 15.9938 11.1379 17.8602 13.4548 18.9748C13.6257 19.0557 13.8147 19.0907 14.0033 19.0764C14.1918 19.0621 14.3734 18.9989 14.5301 18.8931L17.9331 16.6199C18.0834 16.518 18.2571 16.4558 18.438 16.4391C18.6189 16.4224 18.8011 16.4519 18.9676 16.5247L25.3379 19.2606C25.5556 19.3513 25.7375 19.5109 25.8555 19.7151C25.9736 19.9192 26.0213 20.1565 25.9912 20.3904C25.7893 21.9663 25.0201 23.4146 23.8276 24.4644C22.635 25.5141 21.1008 26.0934 19.512 26.0938C14.6023 26.0937 9.89373 24.1434 6.42205 20.6717C2.95037 17.2 1 12.4914 1 7.58172C1.00036 5.99295 1.57961 4.45875 2.62937 3.26618C3.67912 2.07362 5.12745 1.30442 6.70334 1.10251C6.93724 1.07247 7.17453 1.12015 7.37868 1.23821C7.58282 1.35627 7.7425 1.53816 7.83311 1.75588L10.5691 8.13981C10.6402 8.30362 10.67 8.48242 10.6558 8.66045C10.6415 8.83848 10.5837 9.01027 10.4874 9.16069L8.21424 12.6181C8.11304 12.7745 8.05364 12.9542 8.04173 13.1401C8.02981 13.326 8.06578 13.5118 8.14619 13.6798V13.6798Z" stroke="#017CC7" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                  </svg>
                  <h5 class="card-title">Phone</h5>
                </div>
                <p class="card-text" style={{ marginLeft: 35 }}>+91 9879209651</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* form */}
      <div class="container py-5 ps-5 pe-0  w-100" style={{ marginTop: 100, backgroundColor: '#F1F5F9' }}>
        <div class="row">
          <div class="col-lg-7">
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
                <label for="inputSubject" class="form-label">Subject </label>
                <div class="input-group">
                  <span className="input-group-text" id="addon-wrapping">
                    <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32" fill="none">
                      <rect width="6.58487" height="6.66667" rx="1" transform="matrix(1 0 0 -1 19.6133 22.668)" stroke="#64748B" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                      <path d="M4.79688 22.0039H12.7656" stroke="#64748B" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                      <path d="M4.79688 17.0039H12.7656" stroke="#64748B" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                      <path d="M4.79688 12.0039H26.0469" stroke="#64748B" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                      <path d="M4.79688 6.66406H26.0469" stroke="#64748B" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                    </svg>
                  </span>
                  <select id="inputSubject" class="form-select" >
                    <option selected >Subject of your Problem</option>
                    <option>Subject1</option>
                    <option>Subject2</option>
                    <option>Subject3</option>
                  </select>
                </div>
              </div>

              <div class="col-12">
                <label for="inputMessage" class="form-label">Message</label>
                <input type="text" class="form-control message" placeholder='Hello there,I would like to talk about how to...' id='inputMessage' />
              </div>

              <div class="col-12">
                <button type="submit" class="btn btn-primary px-4 py-2">Send Message</button>
              </div>
            </form>
          </div>
          <div class="col-lg-5">
            <img src={img76} alt='' className='img-fluid d-lg-block d-none w-100 h-100' />
          </div>
        </div>
      </div>

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
            <div class="col-lg-6 text-center ">
              <div className="about">
                <p className='text3 ' style={{ textAlign: 'start' }}>Frequently Asked <span style={{ color: '#017CC7' }}> Questions</span></p>
                <p className='text4 mb-5' style={{ textAlign: 'start' }}>A cataract is a clouding of the lens inside </p>
                <svg style={{ color: '#1C2434', display: 'block', marginTop: -25, marginBottom: 10 }} xmlns="http://www.w3.org/2000/svg" width="47" height="4" viewBox="0 0 47 4" fill="none">
                  <path d="M45.5 2H1.5" stroke="#1C2434" stroke-width="3" stroke-linecap="round" />
                </svg>
              </div>
              <div className='faqimg'>
                <img className='img-fluid' src={img26} alt="" />
              </div>
            </div>
            <div class="col-lg-6 my-auto">
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
    </div>
  )
}
