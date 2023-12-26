import React from 'react'
import img2 from '../images/img2.png'
import img4 from '../images/img4.png'
import img5 from '../images/img5.png'
import img6 from '../images/img6.png'
import img7 from '../images/img7.png'
import img8 from '../images/img8.png'
import img11 from '../images/img11.png'
import img12 from '../images/img12.png'
import img13 from '../images/img13.png'
import img14 from '../images/img14.png'
import img15 from '../images/img15.png'
import img16 from '../images/img16.png'
import img17 from '../images/img17.png'
import img18 from '../images/img18.png'
import img19 from '../images/img19.png'
import img20 from '../images/img20.png'
import img21 from '../images/img21.png'
import img22 from '../images/img22.png'
import img23 from '../images/img23.png'
import img24 from '../images/img24.png'
import img25 from '../images/img25.png'
import img26 from '../images/img26.png'
import img27 from '../images/img27.png'
import img28 from '../images/img28.png'
import CheckIcon from '@mui/icons-material/Check';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import { Rating } from '@mui/material'
import Slider from "react-slick";
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import { Link } from 'react-router-dom'

export default function Home() {
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

    var settings2 = {
        infinite: false,
        speed: 500,
        slidesToShow: 3,
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

    var settings3 = {
        infinite: false,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1,
        initialSlide: 0,
        nextArrow: <div><ArrowForwardIosIcon className='carousel-control-next2' sx={{ fontSize: 30 }} /></div>,
        prevArrow: <div><ArrowBackIosIcon className='carousel-control-prev2' sx={{ fontSize: 30 }} /></div>,
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
            {/* Hero section */}
            <div class="hero container-fluid p-5" style={{ backgroundColor: '#F1F5F9', marginTop: 50 + 'px' }}>
                <div className="container">
                    <div class="row d-flex mx-auto" >
                        <div class="col-lg-6 jumbotron mx-auto" style={{ paddingTop: 20, marginTop: 20 + 'px' }} >
                            <h1 class="display-4"><span style={{ color: '#017CC7' }}>Contract</span> Consultation is just a <span style={{ color: '#017CC7' }}>‘Hi’</span><img className='img2' src={img2} alt="" /> away.</h1>
                            <p class="lead1 mt-5">Contact us now and reach out your doctor. LoremLorem Ipsum has been the industry's standard dummy text ever</p>
                            <Link class="lead2 btn btn-primary btn-lg mt-5" to="/contact" role="button">Contact Now</Link>
                        </div>
                        <div class="col-lg-6">
                            <img className='mx-auto d-block' src={img28} alt="" id='img28' />
                        </div>
                        <div className='d-flex justify-content-center'>
                            <div className='arrowdown p-2'>
                                <div className=''>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="45" height="45" viewBox="0 0 45 45" fill="none">
                                        <path d="M35.625 26.25L22.5 39.375M22.5 39.375L9.375 26.25M22.5 39.375L22.5 5.625" stroke="#1C2434" stroke-width="4" stroke-linecap="round" stroke-linejoin="round" />
                                    </svg>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Services */}

            <div class="container services" style={{ marginTop: 150 + 'px' }}>
                <p className='text3'><span style={{ color: '#017CC7' }}>Services</span>  We Provide</p>
                <p className='text4 '>A cataract is a clouding of the lens inside </p>
                <svg style={{ color: '#1C2434', margin: 'auto', display: 'block', marginBottom: 50 + 'px' }} xmlns="http://www.w3.org/2000/svg" width="47" height="4" viewBox="0 0 47 4" fill="none">
                    <path d="M45.5 2H1.5" stroke="#1C2434" stroke-width="3" stroke-linecap="round" />
                </svg>
                <div>
                    <Slider {...settings3}>
                        <div className='cone'>
                            <div  >
                                <img src={img4} alt="" />
                            </div>
                            <p className='text1'>Pediatric</p>
                            <p className='text14'>A cataract is a clouding of lens inside the eye cataract is the printing and ty Lorem cataract is a clouding ofa clouding of lens inside the eyecatar</p>
                        </div>
                        <div className='cone'>
                            <div >
                                <img src={img5} alt="" />
                            </div>
                            <p className='text1'>Oculoplasty</p>
                            <p className='text14'>A cataract is a clouding of lens inside the eye cataract is the printing and ty Lorem cataract is a clouding ofa clouding of lens inside the eyecatar</p>
                        </div>
                        <div className='cone'>
                            <div >
                                <img src={img6} alt="" />
                            </div>
                            <p className='text1'>Glaucoma</p>
                            <p className='text14'>A cataract is a clouding of lens inside the eye cataract is the printing and ty Lorem cataract is a clouding ofa clouding of lens inside the eyecatar</p>
                        </div>
                        <div className='cone'>
                            <div >
                                <img src={img7} alt="" />
                            </div>
                            <p className='text1'>Retina</p>
                            <p className='text14'>A cataract is a clouding of lens inside the eye cataract is the printing and ty Lorem cataract is a clouding ofa clouding of lens inside the eyecatar</p>
                        </div>
                        <div className='cone'>
                            <div >
                                <img src={img4} alt="" />
                            </div>
                            <p className='text1'>Cornea</p>
                            <p className='text14'>A cataract is a clouding of lens inside the eye cataract is the printing and ty Lorem cataract is a clouding ofa clouding of lens inside the eyecatar</p>
                        </div>
                    </Slider>
                </div>
            </div>

            {/* about us */}
            <div className='container-fluid py-5 aboutmain' style={{ marginTop: 100 + 'px', backgroundColor: '#F1F5F9' }}>
                <div className='aboutus'>
                    <p className='text3'><span style={{ color: '#017CC7' }}>About</span> us</p>
                    <p className='text4'>A cataract is a clouding of the lens inside  </p>
                    <svg style={{ color: '#1C2434', margin: 'auto', display: 'block', marginBottom: 50 + 'px' }} xmlns="http://www.w3.org/2000/svg" width="47" height="4" viewBox="0 0 47 4" fill="none">
                        <path d="M45.5 2H1.5" stroke="#1C2434" stroke-width="3" stroke-linecap="round" />
                    </svg>
                </div>
                <div className="container">
                    <div className='row' >
                        <div className='col-lg-6 d-flex justify-content-center my-auto'>
                            <img src={img8} alt="Your Image" width='480' height='480' />
                        </div>

                        <div class="jumbotron col-lg-6 mx-auto">
                            <div className="about">
                                <p className='text3 me-auto text-start'><span style={{ color: '#017CC7' }}>About</span> us</p>
                                <p className='text4 mb-5 text-start'>A cataract is a clouding of the lens inside  </p>
                                <svg style={{ color: '#1C2434', display: 'block', marginTop: -40, marginBottom: 50 }} xmlns="http://www.w3.org/2000/svg" width="47" height="4" viewBox="0 0 47 4" fill="none">
                                    <path d="M45.5 2H1.5" stroke="#1C2434" stroke-width="3" stroke-linecap="round" />
                                </svg>
                            </div>
                            <p className='text7'>Lorem Ipsum has been the industry's standard   </p>
                            <p className='text6'>Lorem Ipsum has been the industry's standard dummy Lorem Ipsum is simply dummy text of the printing and tyLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standarrem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's stad dummy text.  </p>
                            <p className='text6'>Lorem Ipsum has been the industry's standard dummy Lorem Ipsum is simply dummy text of the printing and tyLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standarrem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's stad dummy text.  </p>
                            <a class="lead2 btn btn-primary btn-lg" href="#" role="button">Learn More</a>
                        </div>
                    </div>
                </div>
            </div>

            {/* facility-trust */}
            <div className='facility container' style={{ marginTop: 100 + 'px' }}>
                <p className='text3 mx-auto d-block'>Why you should  <span style={{ color: '#017CC7' }}>trust </span>us?</p>
                <p className='text4 mx-auto d-block'>A cataract is a clouding of the lens inside </p>
                <svg style={{ color: '#1C2434', margin: 'auto', display: 'block' }} xmlns="http://www.w3.org/2000/svg" width="47" height="4" viewBox="0 0 47 4" fill="none">
                    <path d="M45.5 2H1.5" stroke="#1C2434" stroke-width="3" stroke-linecap="round" />
                </svg>

                <div className='row d-flex'>
                    <div className='col-lg-6 order-2 order-lg-1 lorem'>
                        <div style={{ paddingTop: 50 + 'px' }}>
                            <p className='text7' style={{ marginLeft: 60 }}>Lorem Ipsum has been the industry's standard   </p>
                            <p className='text6' style={{ marginLeft: 60 }}>Lorem Ipsum has been the industry's standard dummy Lorem Ipsum is simply dummy text of the printing and tyLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standarrem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's stad dummy text.  </p>
                            <div className='d-flex truegroup ' style={{ marginLeft: 60 }}>
                                <div className='true'>
                                    <CheckIcon color="primary" />
                                </div>
                                <div className='truetext'>
                                    <span className='text2' >Lorem Ipsum has been the industry's standard dummy</span>
                                </div>
                            </div>
                            <div className='d-flex truegroup' style={{ marginLeft: 60 }}>
                                <div className='true'>
                                    <CheckIcon color="primary" />
                                </div>
                                <div className='truetext'>
                                    <span className='text2' >Lorem Ipsum has been the industry's standard dummy</span>
                                </div>
                            </div>
                            <div className='d-flex truegroup' style={{ marginLeft: 60 }}>
                                <div className='true'>
                                    <CheckIcon color="primary" />
                                </div>
                                <div className='truetext'>
                                    <span className='text2' >Lorem Ipsum has been the industry's standard dummy</span>
                                </div>
                            </div>
                            <Link class="lead2 btn btn-primary btn-lg" to="/appoinment" role="button" style={{ marginTop: 50 + 'px', marginLeft: 60 }}>Book Appoinment</Link>
                        </div>
                    </div>
                    <div className='col-lg-6 trust  order-1 order-lg-2 my-auto'>
                        <svg className='svgshrink' xmlns="http://www.w3.org/2000/svg" width="260" height="82" viewBox="0 0 392 82" fill="none">
                            <path d="M2 82V26C2 12.7452 12.7452 2 26 2H392" stroke="#1C2434" stroke-width="3" />
                            <text fill="#017CC7" font-size="24" fontWeight='600' font-family="Roboto" x="30" y="60">Your </text>
                            <text fill="#1C2434" font-size="24" fontWeight='600' font-family="Roboto" x="90" y="60"> Personalised</text>
                            <text fill="#017CC7" font-size="24" fontWeight='600' font-family="Roboto" x="240" y="60">Eye Care</text>

                            <foreignObject width="100%" height="100%">
                                <div>
                                    <img src={img11} alt="Your Image" width='50' height="50" style={{ float: 'right', marginTop: 20 + 'px' }} />
                                </div>
                            </foreignObject>
                        </svg>
                        <svg className='svgshrink' xmlns="http://www.w3.org/2000/svg" width="340" height="82" viewBox="0 0 505 82" fill="none">
                            <path d="M2 82V26C2 12.7452 12.7452 2 26 2H505" stroke="#1C2434" stroke-width="3" />
                            <foreignObject width="100%" height="100%">
                                <div>
                                    <img src={img12} alt="Your Image" width='50' height="50" style={{ float: 'left', marginTop: 20 + 'px', marginLeft: 20 + 'px' }} />
                                </div>
                            </foreignObject>
                            <text fill="#017CC7" font-size="24" fontWeight='600' font-family="Roboto" x="80" y="60">World class</text>
                            <text fill="#1C2434" font-size="24" fontWeight='600' font-family="Roboto" x="220" y="60">Technology</text>
                            <text fill="#017CC7" font-size="24" fontWeight='600' font-family="Roboto" x="350" y="60">& Technicians</text>
                        </svg>
                        <svg className='svgshrink' xmlns="http://www.w3.org/2000/svg" width="420" height="82" viewBox="0 0 603 82" fill="none">
                            <path d="M2 82V26C2 12.7452 12.7452 2 26 2H603" stroke="#1C2434" stroke-width="3" />
                            <text fill="#017CC7" font-size="24" fontWeight='600' font-family="Roboto" x="20" y="60">World class</text>
                            <foreignObject width="100%" height="100%">
                                <div>
                                    <img src={img13} alt="Your Image" width='30' height="30" style={{ marginTop: 40 + 'px', marginLeft: 160 + 'px' }} />
                                </div>
                            </foreignObject>
                            <text fill="#1C2434" font-size="24" fontWeight='600' font-family="Roboto" x="220" y="60">Experienced Doctors</text>
                            <foreignObject width="100%" height="100%">
                                <div>
                                    <img className='rounded-circle' src={img14} alt="Your Image" width='50' height="50" style={{ marginTop: 20 + 'px', marginLeft: 450 + 'px' }} />
                                </div>
                            </foreignObject>
                            <foreignObject width="100%" height="100%">
                                <div>
                                    <img className='rounded-circle' src={img15} alt="Your Image" width='50' height="50" style={{ marginTop: 20 + 'px', marginLeft: 480 + 'px' }} />
                                </div>
                            </foreignObject>
                            <foreignObject width="100%" height="100%">
                                <div>
                                    <img className='rounded-circle' src={img16} alt="Your Image" width='50' height="50" style={{ marginTop: 20 + 'px', marginLeft: 510 + 'px' }} />
                                </div>
                            </foreignObject>
                            <foreignObject width="100%" height="100%">
                                <div>
                                    <img className='rounded-circle' src={img17} alt="Your Image" width='50' height="50" style={{ marginTop: 20 + 'px', marginLeft: 540 + 'px' }} />
                                </div>
                            </foreignObject>
                        </svg>
                        <svg xmlns="http://www.w3.org/2000/svg" width="502" height="82" viewBox="0 0 702 82" fill="none">
                            <path d="M2 82V26C2 12.7452 12.7452 2 26 2H702" stroke="#1C2434" stroke-width="3" />

                            <foreignObject width="100%" height="100%">
                                <div>
                                    <img src={img18} alt="Your Image" width='50' height="50" style={{ float: 'left', marginTop: 20 + 'px', marginLeft: 20 + 'px' }} />
                                    <img src={img19} alt="Your Image" width='50' height="50" style={{ float: 'left', marginTop: 20 + 'px', marginLeft: 10 + 'px' }} />
                                </div>
                            </foreignObject>
                            <text fill="#1C2434" font-size="24" fontWeight='600' font-family="Roboto" x="140" y="60">Affordable</text>
                            <text fill="#017CC7" font-size="24" fontWeight='600' font-family="Roboto" x="270" y="60">Price for all the patients with</text>
                            <text fill="#1C2434" font-size="24" fontWeight='600' font-family="Roboto" x="600" y="60">Benefits</text>
                        </svg>
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

            {/* number section */}
            <div class="container-fluid mainnumber" style={{ marginTop: 100, backgroundColor: '#1C2434' }}>
                <div class="container text-center">
                    <svg className='mx-auto d-block' xmlns="http://www.w3.org/2000/svg" width="993" height="496" viewBox="0 0 993 496" fill="none">
                        <path d="M97.3538 0.34375L92.4287 488.416M544.659 4.47513L539.734 492.547M324.446 2.44125L319.521 490.513M769.457 6.55115L764.532 494.623M207.458 1.36069L202.533 489.433M657.058 5.513L652.133 493.585M434.551 3.45819L429.626 491.53M881.856 7.58929L876.931 495.661M0.424183 401.13L989.079 410.261M2.53018 192.377L991.185 201.507M1.4597 298.224L990.114 307.354M3.59629 86.5298L992.251 95.6607" stroke="url(#paint0_radial_250_695)" />
                        <defs>
                            <radialGradient id="paint0_radial_250_695" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(496.338 248.003) rotate(90.0823) scale(247.659 495.693)">
                                <stop stop-color="white" stop-opacity="0.22" />
                                <stop offset="1" stop-color="white" stop-opacity="0" />
                            </radialGradient>
                        </defs>
                    </svg>
                    <div class="row">
                        <div class="col-lg-auto">
                            <svg className='numberone' x="314" y="29" style={{ position: 'relative', top: -450 }} xmlns="http://www.w3.org/2000/svg" width="111" height="110" viewBox="0 0 111 110" fill="none">
                                <path opacity="0.15" d="M60.6936 76.6299L42.3487 108.404L16.1032 93.2515L34.4482 61.4771L34.9482 60.6111L34.0821 60.1111L2.30778 41.7661L17.4606 15.5207L49.2349 33.8657L50.101 34.3657L50.601 33.4996L68.9459 1.72527L95.1913 16.8781L76.8464 48.6524L76.3464 49.5185L77.2124 50.0185L108.987 68.3634L93.834 94.6088L62.0596 76.2639L61.1936 75.7639L60.6936 76.6299Z" stroke="white" stroke-width="2" />
                            </svg>
                        </div>
                        <div class="col-lg-4">
                            <div style={{ marginBottom: 90, marginTop: -350 }}>
                                <span className='text15' style={{ color: '#FFFFFF' }}>100</span>
                                <span className='text15' style={{ color: '#5956E8' }}>+</span>
                                <span className='text16' style={{ color: '#E2E8F0', marginLeft: 20 }}>HAPPY CLIENTS</span>
                            </div>
                            <div >
                                <span className='text15' style={{ color: '#FFFFFF' }}>15</span>
                                <span className='text15' style={{ color: '#38E55E' }}>+</span>
                                <span className='text16' style={{ color: '#E2E8F0', marginLeft: 20 }}>YEARS OF EXPERIENCE</span>
                            </div>
                        </div>
                        <div class="col-lg-4 number">
                            <div style={{ marginBottom: 90, marginTop: -350 }}>
                                <span className='text15' style={{ color: '#FFFFFF' }}>500</span>
                                <span className='text15' style={{ color: '#FF1850' }}>+</span>
                                <span className='text16' style={{ color: '#E2E8F0', marginLeft: 20 }}>PATIENT EVERYDAY</span>
                            </div>
                            <div >
                                <span className='text15' style={{ color: '#FFFFFF' }}>25000</span>
                                <span className='text15' style={{ color: '#FFB545' }}>+</span>
                                <span className='text16' style={{ color: '#E2E8F0', marginLeft: 20 }}>DAILY CONVERSIONS</span>
                            </div>
                        </div>
                        <div class="col-lg-2">
                            <svg className='numbertwo' x="1554" y="325" style={{ position: 'relative', top: -150 }} xmlns="http://www.w3.org/2000/svg" width="93" height="93" viewBox="0 0 93 93" fill="none">
                                <g opacity="0.3">
                                    <path fill-rule="evenodd" clip-rule="evenodd" d="M24.1667 7.82276C2.81506 20.1501 -4.50056 47.4524 7.82683 68.8041C20.1542 90.1557 47.4565 97.4714 68.8081 85.144C90.1598 72.8166 97.4754 45.5143 85.148 24.1627C72.8207 2.81098 45.5184 -4.50463 24.1667 7.82276ZM23.5198 6.70216C1.5492 19.3869 -5.97847 47.4805 6.70624 69.451C19.3909 91.4216 47.4846 98.9493 69.4551 86.2646C91.4257 73.5799 98.9533 45.4862 86.2686 23.5157C73.5839 1.54512 45.4903 -5.98254 23.5198 6.70216Z" fill="#E2E8F0" />
                                    <path fill-rule="evenodd" clip-rule="evenodd" d="M30.6365 19.0287C15.4737 27.783 10.2786 47.1715 19.0328 62.3343C27.787 77.4971 47.1756 82.6922 62.3384 73.938C77.5012 65.1838 82.6963 45.7952 73.9421 30.6324C65.1878 15.4696 45.7993 10.2745 30.6365 19.0287ZM29.9895 17.9081C14.2079 27.0197 8.80066 47.1996 17.9122 62.9813C27.0238 78.7629 47.2037 84.1701 62.9854 75.0586C78.767 65.947 84.1742 45.7671 75.0627 29.9854C65.9511 14.2038 45.7712 8.79659 29.9895 17.9081Z" fill="#E2E8F0" />
                                    <path fill-rule="evenodd" clip-rule="evenodd" d="M37.1063 30.2347C28.1324 35.4158 25.0577 46.8906 30.2388 55.8645C35.4199 64.8384 46.8947 67.9131 55.8686 62.732C64.8425 57.5509 67.9172 46.0761 62.7361 37.1022C57.555 28.1283 46.0802 25.0536 37.1063 30.2347ZM36.4593 29.1141C26.8665 34.6525 23.5798 46.9187 29.1182 56.5115C34.6566 66.1043 46.9228 69.391 56.5156 63.8526C66.1084 58.3142 69.3951 46.048 63.8567 36.4552C58.3183 26.8624 46.0521 23.5757 36.4593 29.1141Z" fill="#E2E8F0" />
                                </g>
                            </svg>
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
            {/* blogs */}
            <div class="container blogsmain" style={{ marginTop: 100 }}>
                <p className='text3'>Our latest<span style={{ color: '#017CC7' }}> Blogs</span></p>
                <p className='text4'>A cataract is a clouding of the lens inside </p>

                <div>
                    <Slider {...settings2}>
                        <div>
                            <div class="card p-3 rounded-4 m-3 blogs" >
                                <img src={img27} className='rounded-4' alt="..." />
                                <div class="card-body">
                                    <h5 class="card-title">The sleep Doctor, Your Guide to Sleep</h5>
                                    <p class="card-text">Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, unknown printer</p>
                                    <a href="#" class="card-link">Read More </a>
                                    <ArrowForwardIcon />
                                </div>
                            </div>
                        </div>
                        <div>
                            <div class="card p-3 rounded-4 m-3 blogs" >
                                <img src={img27} className='rounded-4' alt="..." />
                                <div class="card-body">
                                    <h5 class="card-title">The sleep Doctor, Your Guide to Sleep Lorem more</h5>
                                    <p class="card-text">Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, unknown printer</p>
                                    <a href="#" class="card-link">Read More </a>
                                    <ArrowForwardIcon />
                                </div>
                            </div>
                        </div>
                        <div>
                            <div class="card p-3 rounded-4 m-3 blogs" >
                                <img src={img27} className='rounded-4' alt="..." />
                                <div class="card-body">
                                    <h5 class="card-title">The sleep Doctor, Your Guide to Sleep</h5>
                                    <p class="card-text">Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, unknown printer</p>
                                    <a href="#" class="card-link">Read More </a>
                                    <ArrowForwardIcon />
                                </div>
                            </div>
                        </div>
                        <div>
                            <div class="card p-3 rounded-4 m-3 blogs" >
                                <img src={img27} className='rounded-4' alt="..." />
                                <div class="card-body">
                                    <h5 class="card-title">The sleep Doctor, Your Guide to Sleep</h5>
                                    <p class="card-text">Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, unknown printer</p>
                                    <a href="#" class="card-link">Read More </a>
                                    <ArrowForwardIcon />
                                </div>
                            </div>
                        </div>
                    </Slider>
                </div>
            </div>
        </div >
    )
}



