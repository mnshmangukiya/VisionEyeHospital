import React from 'react'
import Slider from "react-slick";
import Team_of_doctors from './Team_of_doctors';
import Faq from './Faq';
import img26 from '../images/img26.png'
import Feedback from './Feedback';

export default function Home() {
    var settings8 = {
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        initialSlide: 0,
        prevArrow: <div><svg className='carousel-control-prev8' xmlns="http://www.w3.org/2000/svg" width="70" height="70" viewBox="0 0 70 70" fill="none">
            <circle cx="35" cy="35" r="34.75" transform="matrix(-1 0 0 1 70 0)" fill="white" stroke="#017CC7" stroke-width="0.5" />
            <path d="M38 24L28 35L38 46" stroke="#017CC7" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" />
        </svg></div>,
        nextArrow: <div><svg className='carousel-control-next8' xmlns="http://www.w3.org/2000/svg" width="94" height="94" viewBox="0 0 94 94" fill="none">
            <g filter="url(#filter0_d_250_484)">
                <circle cx="35" cy="35" r="35" transform="matrix(1 -8.74228e-08 -8.74228e-08 -1 12 72)" fill="#017CC7" />
                <circle cx="35" cy="35" r="34.75" transform="matrix(1 -8.74228e-08 -8.74228e-08 -1 12 72)" stroke="#017CC7" stroke-width="0.5" />
            </g>
            <path d="M44 47.7578L54 36.7663L44 25.7748" stroke="white" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" />
            <defs>
                <filter id="filter0_d_250_484" x="0" y="0" width="94" height="94" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                    <feFlood flood-opacity="0" result="BackgroundImageFix" />
                    <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                    <feOffset dy="10" />
                    <feGaussianBlur stdDeviation="6" />
                    <feComposite in2="hardAlpha" operator="out" />
                    <feColorMatrix type="matrix" values="0 0 0 0 0.775 0 0 0 0 0.775 0 0 0 0 0.775 0 0 0 0.25 0" />
                    <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_250_484" />
                    <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_250_484" result="shape" />
                </filter>
            </defs>
        </svg></div>,

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

    var settings5 = {
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1,
        initialSlide: 0,
        prevArrow: <div><svg className='carousel-control-prev5' xmlns="http://www.w3.org/2000/svg" width="132" height="132" viewBox="0 0 132 132" fill="none">
            <g filter="url(#filter0_d_250_684)">
                <circle cx="35" cy="35" r="35" transform="matrix(-1 0 0 1 101 25)" fill="white" />
                <path d="M69 49L59 60L69 71" stroke="#017CC7" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" />
            </g>
            <defs>
                <filter id="filter0_d_250_684" x="0" y="0" width="132" height="132" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                    <feFlood flood-opacity="0" result="BackgroundImageFix" />
                    <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                    <feOffset dy="6" />
                    <feGaussianBlur stdDeviation="15.5" />
                    <feComposite in2="hardAlpha" operator="out" />
                    <feColorMatrix type="matrix" values="0 0 0 0 0.05983 0 0 0 0 0.225393 0 0 0 0 0.326346 0 0 0 0.05 0" />
                    <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_250_684" />
                    <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_250_684" result="shape" />
                </filter>
            </defs>
        </svg></div>,
        nextArrow: <div><svg className='carousel-control-next5' xmlns="http://www.w3.org/2000/svg" width="132" height="132" viewBox="0 0 132 132" fill="none">
            <g filter="url(#filter0_d_250_680)">
                <circle cx="35" cy="35" r="35" transform="matrix(1 -8.74228e-08 -8.74228e-08 -1 31 95)" fill="#017CC7" />
                <circle cx="35" cy="35" r="34.75" transform="matrix(1 -8.74228e-08 -8.74228e-08 -1 31 95)" stroke="#017CC7" stroke-width="0.5" />
            </g>
            <path d="M63 71L73 60L63 49" stroke="white" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" />
            <defs>
                <filter id="filter0_d_250_680" x="0" y="0" width="132" height="132" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                    <feFlood flood-opacity="0" result="BackgroundImageFix" />
                    <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                    <feOffset dy="6" />
                    <feGaussianBlur stdDeviation="15.5" />
                    <feComposite in2="hardAlpha" operator="out" />
                    <feColorMatrix type="matrix" values="0 0 0 0 0.05983 0 0 0 0 0.225393 0 0 0 0 0.326346 0 0 0 0.05 0" />
                    <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_250_680" />
                    <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_250_680" result="shape" />
                </filter>
            </defs>
        </svg></div>,
        responsive: [
            {
                breakpoint: 992,
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
            <div class="container-fluid homehero">
                <div className="container">
                    <div class="row gx-5" >
                        <div class="col-lg-6 mx-auto homeherolorem position-relative" >
                            <svg className='homehero_img6 d-block d-lg-none' xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 9 9" fill="none">
                                <path d="M4.5 1V8" stroke="#017CC7" stroke-width="2" stroke-linecap="round" />
                                <path d="M8 4.5L1 4.5" stroke="#017CC7" stroke-width="2" stroke-linecap="round" />
                            </svg>
                            <h1 class="d-block mx-auto"><span>Contract
                            </span> Consultation is just a <span>‘Hi’</span>
                                <img className='img-fluid' width={48} height={48} src={require('../images/img2.png')} alt="" /> away.
                            </h1>
                            <svg className='homehero_img7 d-block d-lg-none' xmlns="http://www.w3.org/2000/svg" width="10" height="10" viewBox="0 0 7 7" fill="none">
                                <circle cx="3.5" cy="3.5" r="2.5" stroke="#017CC7" stroke-width="2" stroke-linecap="round" />
                            </svg>
                            <p>Contact us now and reach out your doctor. LoremLorem Ipsum has been the industry's standard dummy text ever</p>
                            <a class=" contact_us_btn" href="/contact" role="button">Contact Now</a>
                        </div>

                        <div class="col-lg-6 d-flex justify-content-end position-relative">
                            <img src={require('../images/img3.png')} className='img-fluid d-none d-lg-block homehero_img1 w-100 h-100' alt="" />
                            <img src={require('../images/img86.png')} className='img-fluid d-block d-lg-none  homehero_img2' alt="" width={500} height={580} />

                            <svg className='homehero_img3 d-block d-lg-none' xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 9 10" fill="none">
                                <path d="M4.5 1.55469V8.55469" stroke="#017CC7" stroke-width="2" stroke-linecap="round" />
                                <path d="M8 5.05469L1 5.05469" stroke="#017CC7" stroke-width="2" stroke-linecap="round" />
                            </svg>

                            <svg className='homehero_img4 d-block d-lg-none' xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 9 9" fill="none">
                                <circle cx="4.5" cy="4.5" r="3.5" stroke="#017CC7" stroke-width="2" stroke-linecap="round" />
                            </svg>

                            <img src={require('../images/img87.png')} className='d-block d-lg-none homehero_img5' alt="" width={56} height={56} />
                        </div>
                    </div>
                </div>
            </div>

            <a href='#footer' className='d-flex justify-content-center'>
                <div className='arrowdown d-flex justify-content-center align-items-center'>
                    <div className='d-flex justify-content-center align-items-center'>
                        <svg className='homehero_svgone' xmlns="http://www.w3.org/2000/svg" width="45" height="45" viewBox="0 0 45 45" fill="none">
                            <path d="M35.625 26.25L22.5 39.375M22.5 39.375L9.375 26.25M22.5 39.375L22.5 5.625" stroke="#1C2434" stroke-width="4" stroke-linecap="round" stroke-linejoin="round" />
                        </svg>
                    </div>
                </div>
            </a>

            <img className='img-fluid position-absolute d-lg-block d-none outerimg1' src={require('../images/img83.png')} alt="" width={140} height={140} />

            {/* Services */}
            <div class="container homeservices">
                <div>
                    <p className='text3 mx-auto d-block'><span>Services</span>  We Provide</p>
                    <p className='text4 '>A cataract is a clouding of the lens inside </p>
                    <div className="text-center">
                        <svg className='commonheading_svg' xmlns="http://www.w3.org/2000/svg" width="47" height="4" viewBox="0 0 47 4" fill="none">
                            <path d="M45.5 2H1.5" stroke="#1C2434" stroke-width="3" stroke-linecap="round" />
                        </svg>
                    </div>
                </div>

                <div className='homeservices_slider'>
                    <Slider {...settings5}>
                        <div class="card homeservice_card " >
                            <img src={require('../images/img4.png')} className='' alt="..." width={72} height={72} />
                            <h5>Pediatric</h5>
                            <p>A cataract is a clouding of lens inside the eye cataract is the printing and ty Lorem cataract is a clouding ofa clouding of lens inside the eyecatar</p>
                        </div>
                        <div class="card homeservice_card" >
                            <img src={require('../images/img5.png')} className='' alt="..." width={72} height={72} />
                            <h5>Oculoplasty</h5>
                            <p>A cataract is a clouding of lens inside the eye cataract is the printing and ty Lorem cataract is a clouding ofa clouding of lens inside the eyecatar</p>
                        </div>
                        <div class="card homeservice_card" >
                            <img src={require('../images/img6.png')} className='' alt="..." width={72} height={72} />
                            <h5>Glaucoma</h5>
                            <p>A cataract is a clouding of lens inside the eye cataract is the printing and ty Lorem cataract is a clouding ofa clouding of lens inside the eyecatar</p>
                        </div>
                        <div class="card homeservice_card" >
                            <img src={require('../images/img7.png')} className='' alt="..." width={72} height={72} />
                            <h5>Retina</h5>
                            <p>A cataract is a clouding of lens inside the eye cataract is the printing and ty Lorem cataract is a clouding ofa clouding of lens inside the eyecatar</p>
                        </div>
                        <div class="card homeservice_card" >
                            <img src={require('../images/img6.png')} className='' alt="..." width={72} height={72} />
                            <h5>Cataract</h5>
                            <p>A cataract is a clouding of lens inside the eye cataract is the printing and ty Lorem cataract is a clouding ofa clouding of lens inside the eyecatar</p>
                        </div>
                    </Slider>
                </div>
            </div>

            {/* about us */}
            <div className='container-fluid home_aboutus_section'>
                <div className=' d-block d-lg-none'>
                    <p className='text3 mx-auto d-block'><span>About</span> us</p>
                    <p className='text4'>A cataract is a clouding of the lens inside  </p>
                    <div className="text-center">
                        <svg className='commonheading_svg' xmlns="http://www.w3.org/2000/svg" width="47" height="4" viewBox="0 0 47 4" fill="none">
                            <path d="M45.5 2H1.5" stroke="#1C2434" stroke-width="3" stroke-linecap="round" />
                        </svg>
                    </div>
                </div>

                <div className="container ">
                    <div className='row' >
                        <div className='col-lg-6 home_aboutus_img d-flex justify-content-center'>
                            <img src={require('../images/img8.png')} alt="Your Image" className='img-fluid ' width='651' height='618' />
                        </div>

                        <div class="home_aboutus_lorem col-lg-6 ">
                            <div className=" d-none d-lg-block">
                                <p className='text3 text-start'><span>About</span> us</p>
                                <p className='text4 text-start'>A cataract is a clouding of the lens inside  </p>
                                <svg className='commonheading_svg' xmlns="http://www.w3.org/2000/svg" width="47" height="4" viewBox="0 0 47 4" fill="none">
                                    <path d="M45.5 2H1.5" stroke="#1C2434" stroke-width="3" stroke-linecap="round" />
                                </svg>
                            </div>

                            <div className='home_aboutus_lorem_data'>
                                <p>Lorem Ipsum has been the industry's standard</p>
                                <p>Lorem Ipsum has been the industry's standard dummy Lorem Ipsum is simply dummy text of the printing and tyLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standarrem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's stad dummy text.  </p>
                                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.</p>

                                <a class="learnmore_btn d-lg-block d-none" href="/about" role="button">Learn More</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* trust us */}
            <div className='trust_us container'>

                <div className="text-center position-relative">
                    <p className='text3 mx-auto d-block'>Why you should  <span>trust </span>us?</p>
                    <svg className='trust_us_sign d-lg-block d-none' xmlns="http://www.w3.org/2000/svg" width="151" height="13" viewBox="0 0 151 13" fill="none">
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M55.8595 5.05313C54.9412 5.24988 54.0283 5.45876 53.1207 5.68065C52.7904 5.76131 52.5884 6.09458 52.6687 6.42461L52.673 6.43759C47.7577 6.52265 42.8435 6.65464 37.9317 6.83481C30.8361 7.09532 23.6956 7.52425 16.6244 8.19078C9.63628 8.8494 7.70566 9.01879 1.69346 10.1204C1.52152 10.1519 1.18984 10.1499 1.01139 10.1999C0.8417 10.2473 0.720227 10.3299 0.64222 10.4108C0.5423 10.5133 0.484831 10.6314 0.460487 10.7606C0.43473 10.9014 0.442402 11.0735 0.563186 11.2657C0.903934 11.8051 1.45479 11.9532 2.12665 11.8395C2.70473 11.7415 3.4036 11.3944 3.9512 11.3547C13.0672 10.6953 22.1769 9.96402 31.2938 9.31779C45.2508 8.32857 59.1655 7.86194 73.0823 7.58273C87.7133 7.71046 102.337 8.23928 116.936 9.13832C126.443 9.72344 135.931 10.5924 145.427 11.3526C145.42 11.3944 145.418 11.438 145.42 11.4825C145.441 11.8216 145.734 12.08 146.073 12.0593C146.416 12.0384 149.482 11.9509 150.047 11.8115C150.37 11.7316 150.497 11.5318 150.539 11.4462C150.653 11.2115 150.659 10.9564 150.405 10.7132C150.355 10.6665 150.262 10.5894 150.09 10.5402C149.942 10.497 149.578 10.4424 148.916 10.3922C138.281 9.57648 127.659 8.56562 117.012 7.90932C112.258 7.61728 107.502 7.3634 102.742 7.15109C109.203 7.06661 115.666 6.97078 122.139 6.83068C122.418 6.82546 122.553 6.78016 122.578 6.76946C122.933 6.61592 122.958 6.33506 122.951 6.17589C122.949 6.11908 122.902 5.65019 122.38 5.5844C122.075 5.54573 119.87 5.47071 119.022 5.42582C114.946 5.20641 115.041 5.24098 110.871 5.05166C101.701 4.63654 92.5449 4.36081 83.3642 4.13816C79.7038 4.04953 76.0436 3.97831 72.3824 3.92624C82.9339 3.02662 93.7033 3.06211 103.967 2.95033C109.261 2.89278 114.557 2.8682 119.852 2.93592C122.223 2.96633 124.593 3.03651 126.964 3.07877C127.701 3.09182 128.436 3.12211 129.171 3.13956C129.259 3.14154 130.4 3.15081 130.588 3.1467C131.078 3.13598 131.191 2.69916 131.196 2.68165C131.217 2.59945 131.298 2.0117 130.688 1.92108C121.885 0.611641 112.656 0.919711 103.764 0.707313C88.2016 0.335504 72.5973 0.417681 57.035 0.902937C50.1517 1.1175 43.2904 1.56429 36.4167 2.00884C32.9837 2.23089 29.5416 2.4662 26.1413 3.0077C25.8002 3.0621 25.0271 3.11806 24.6521 3.18257C24.4612 3.21551 24.3254 3.26744 24.2631 3.30289C23.9904 3.45672 23.9361 3.68296 23.9317 3.84159C23.929 3.96046 23.9541 4.37902 24.5158 4.50683C32.5419 6.33551 41.4491 5.1564 49.5998 5.08623C51.6862 5.06825 53.7721 5.05734 55.8595 5.05313ZM62.656 5.0632C60.2383 5.43298 57.8445 5.87196 55.4845 6.3943C61.3524 6.31414 67.2206 6.30072 73.0911 6.35212C82.7759 6.15782 92.4604 6.05396 102.157 5.92784C95.8873 5.69804 89.6159 5.52084 83.3341 5.3686C76.4439 5.2015 69.5502 5.09672 62.656 5.0632ZM96.2137 1.79328C83.1691 1.60325 70.1065 1.72654 57.074 2.13295C50.203 2.3472 43.3562 2.7933 36.4958 3.23701C33.7963 3.4116 31.0895 3.59352 28.4037 3.93025C35.3426 4.78398 42.7366 3.91453 49.5897 3.85562C53.9177 3.81838 58.2479 3.81114 62.5767 3.83202C73.5838 2.16083 85.0819 1.90726 96.2137 1.79328Z" fill="#017CC7" />
                    </svg>
                    <p className='text4 mx-auto d-block'>A cataract is a clouding of the lens inside </p>
                    <svg className='commonheading_svg' xmlns="http://www.w3.org/2000/svg" width="47" height="4" viewBox="0 0 47 4" fill="none">
                        <path d="M45.5 2H1.5" stroke="#1C2434" stroke-width="3" stroke-linecap="round" />
                    </svg>
                </div>

                <div className='row'>
                    <div className='col-lg-6 order-2 order-lg-1 trust_us_lorem'>
                        <p>Lorem Ipsum has been the industry's standard   </p>
                        <p>Lorem Ipsum has been the industry's standard dummy Lorem Ipsum is simply printing dummy text of the printing and tyLorem Ipsum is simply dummy text of the printing  text  and typesetting industry. Lorem ndarrem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's stad dummy text.</p>

                        <div className='trust_us_check'>
                            <div>
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="12" viewBox="0 0 16 12" fill="none">
                                    <path d="M12.754 0.97955L5.40635 7.52095L3.31895 5.55065C2.56749 4.84134 1.39855 4.84134 0.647092 5.55065C-0.104369 6.25996 -0.104369 7.36333 0.647092 8.07264L3.65294 10.9099C4.07042 11.3039 4.65489 11.5404 5.32285 11.5404C5.82383 11.5404 6.4083 11.3827 6.82577 11.0675C6.90927 11.0675 6.90927 10.9887 6.99277 10.9887L15.3423 3.58035C16.0938 2.87104 16.0938 1.76767 15.4258 1.05836C14.6744 0.270242 13.5054 0.270242 12.754 0.97955Z" fill="#017CC7" />
                                </svg>
                            </div>
                            <span>Lorem Ipsum has been the industry's standard dummy</span>
                        </div>

                        <div className='trust_us_check'>
                            <div>
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="12" viewBox="0 0 16 12" fill="none">
                                    <path d="M12.754 0.97955L5.40635 7.52095L3.31895 5.55065C2.56749 4.84134 1.39855 4.84134 0.647092 5.55065C-0.104369 6.25996 -0.104369 7.36333 0.647092 8.07264L3.65294 10.9099C4.07042 11.3039 4.65489 11.5404 5.32285 11.5404C5.82383 11.5404 6.4083 11.3827 6.82577 11.0675C6.90927 11.0675 6.90927 10.9887 6.99277 10.9887L15.3423 3.58035C16.0938 2.87104 16.0938 1.76767 15.4258 1.05836C14.6744 0.270242 13.5054 0.270242 12.754 0.97955Z" fill="#017CC7" />
                                </svg>
                            </div>
                            <span>Lorem Ipsum has been the industry's standard dummy</span>
                        </div>

                        <div className='trust_us_check'>
                            <div>
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="12" viewBox="0 0 16 12" fill="none">
                                    <path d="M12.754 0.97955L5.40635 7.52095L3.31895 5.55065C2.56749 4.84134 1.39855 4.84134 0.647092 5.55065C-0.104369 6.25996 -0.104369 7.36333 0.647092 8.07264L3.65294 10.9099C4.07042 11.3039 4.65489 11.5404 5.32285 11.5404C5.82383 11.5404 6.4083 11.3827 6.82577 11.0675C6.90927 11.0675 6.90927 10.9887 6.99277 10.9887L15.3423 3.58035C16.0938 2.87104 16.0938 1.76767 15.4258 1.05836C14.6744 0.270242 13.5054 0.270242 12.754 0.97955Z" fill="#017CC7" />
                                </svg>
                            </div>
                            <span>Lorem Ipsum has been the industry's standard dummy</span>
                        </div>

                        <a class="bookappointment_btntwo" href="/appointment" role="button">Book Appointment</a>
                    </div>

                    <div className='col-lg-6 trust_us_main order-1 order-lg-2'>
                        <div className="position-relative">
                            <img src={require('../images/img78.png')} alt="" className='trust_us_mainimg1' width={390} height={80} />
                            <div className='position-absolute trust_us_inside1'>
                                <span className='text1'>Your</span> <span className='text2'>Personalised</span> <span className='text1'>Eye Care</span>
                                <img src={require('../images/img11.png')} alt="" className='img-fluid' />
                            </div>
                        </div>

                        <div className="position-relative">
                            <img src={require('../images/img79.png')} alt="" className='trust_us_mainimg2' width={503} height={80} />
                            <div className='position-absolute trust_us_inside2'>
                                <img src={require('../images/img12.png')} alt="" className='img-fluid' width={48} height={48} />
                                <span className='text1'>World class</span> <span className='text2'>Technology</span> <span className='text1'>& Technicians </span>
                            </div>
                        </div>

                        <div className="position-relative">
                            <img src={require('../images/img80.png')} alt="" className=' trust_us_mainimg3' width={601} height={80} />
                            <div className='position-absolute trust_us_inside3' >
                                <span className='text1'>World Class</span>
                                <img src={require('../images/img13.png')} alt="" className='img-fluid trust_us_inside3_img1' width={25} height={25} />
                                <span className='text1'>Experienced</span> <span className='text2'>Doctors</span>
                                <img src={require('../images/img82.png')} alt="" className='img-fluid trust_us_inside3_img2' width={158} height={56} />
                            </div>
                        </div>

                        <div className="position-relative">
                            <img src={require('../images/img81.png')} alt="" className='trust_us_mainimg4' width={700} height={80} />
                            <div className='position-absolute trust_us_inside4'>
                                <img src={require('../images/img18.png')} alt="" className='img-fluid trust_us_inside4_img1' />
                                <img src={require('../images/img19.png')} alt="" className='img-fluid trust_us_inside4_img2' />
                                <span className='text2'>Affordable</span> <span className='text1 '>Price for all the patients with</span> <span className='text2'>Benefits </span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* team of doctors */}
            <Team_of_doctors />

            <img className='img-fluid position-absolute d-lg-block d-none outerimg2 z-0' src={require('../images/img31.png')} alt="" width={190} height={163} style={{ marginTop: -100, right: 0 }} />

            {/* number section */}
            <div class="container-fluid number position-relative z-1">
                <div class="container text-center">
                    <svg className='number_svgmain' xmlns="http://www.w3.org/2000/svg" width="993" height="496" viewBox="0 0 993 496" fill="none">
                        <path d="M97.3538 0.34375L92.4287 488.416M544.659 4.47513L539.734 492.547M324.446 2.44125L319.521 490.513M769.457 6.55115L764.532 494.623M207.458 1.36069L202.533 489.433M657.058 5.513L652.133 493.585M434.551 3.45819L429.626 491.53M881.856 7.58929L876.931 495.661M0.424183 401.13L989.079 410.261M2.53018 192.377L991.185 201.507M1.4597 298.224L990.114 307.354M3.59629 86.5298L992.251 95.6607" stroke="url(#paint0_radial_250_695)" />
                        <defs>
                            <radialGradient id="paint0_radial_250_695" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(496.338 248.003) rotate(90.0823) scale(247.659 495.693)">
                                <stop stop-color="white" stop-opacity="0.22" />
                                <stop offset="1" stop-color="white" stop-opacity="0" />
                            </radialGradient>
                        </defs>
                    </svg>

                    <div class="row" >
                        <div class="col-lg-1">
                            <svg className='number_svgone' x="314" y="29" xmlns="http://www.w3.org/2000/svg" width="111" height="110" viewBox="0 0 111 110" fill="none">
                                <path opacity="0.15" d="M60.6936 76.6299L42.3487 108.404L16.1032 93.2515L34.4482 61.4771L34.9482 60.6111L34.0821 60.1111L2.30778 41.7661L17.4606 15.5207L49.2349 33.8657L50.101 34.3657L50.601 33.4996L68.9459 1.72527L95.1913 16.8781L76.8464 48.6524L76.3464 49.5185L77.2124 50.0185L108.987 68.3634L93.834 94.6088L62.0596 76.2639L61.1936 75.7639L60.6936 76.6299Z" stroke="white" stroke-width="2" />
                            </svg>
                        </div>
                        <div class="col-lg-5 ">
                            <div className='number_data1'>
                                <span className='text6'>100</span>
                                <span className='text8' >+</span>
                                <span className='text7'>HAPPY CLIENTS</span>
                            </div>
                            <div className='number_data2'>
                                <span className='text6' >15</span>
                                <span className='text9' >+</span>
                                <span className='text7' >YEARS OF EXPERIENCE</span>
                            </div>
                        </div>
                        <div class="col-lg-5">
                            <div className='number_data3'>
                                <span className='text6'>500</span>
                                <span className='text10'>+</span>
                                <span className='text7'>PATIENT EVERYDAY</span>
                            </div>
                            <div className='number_data4'>
                                <span className='text6' >25000</span>
                                <span className='text11'>+</span>
                                <span className='text7'>DAILY CONVERSIONS</span>
                            </div>
                        </div>
                        <div class="col-lg-1">
                            <svg className='number_svgtwo' x="1554" y="325" xmlns="http://www.w3.org/2000/svg" width="93" height="93" viewBox="0 0 93 93" fill="none">
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

            {/* feedback */}
            <Feedback />

            <img className='img-fluid position-absolute d-lg-block d-none outerimg3' src={require('../images/img30.png')} alt="" width={200} height={150} />

            {/* faq */}
            <Faq image={img26} />

            {/* blogs */}
            <div class="container homeblogs">
                <div>
                    <p className='text3 mx-auto d-block'>Our latest<span> Blogs</span></p>
                    <p className='text4 '>A cataract is a clouding of the lens inside </p>
                    <svg className='commonheading_svg mx-auto d-block' xmlns="http://www.w3.org/2000/svg" width="47" height="4" viewBox="0 0 47 4" fill="none">
                        <path d="M45.5 2H1.5" stroke="#1C2434" stroke-width="3" stroke-linecap="round" />
                    </svg>
                </div>

                <div className='homeblogs_slider'>
                    <Slider {...settings8}>
                        <div>
                            <div class="card homeblogs_card" >
                                <img src={require('../images/img27.png')} className='img-fluid' alt="..." />
                                <h5 className='w-75'>The sleep Doctor, Your Guide to Sleep</h5>
                                <p >Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, unknown printer</p>

                                <div className="d-flex">
                                    <a href="#" className='d-inline'>Read More
                                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="17" viewBox="0 0 16 17" fill="none">
                                            <path d="M14.4002 8.09844L9.2252 2.84844C9.0002 2.62344 8.6502 2.62344 8.4252 2.84844C8.2002 3.07344 8.2002 3.42344 8.4252 3.64844L12.6252 7.92344H2.0002C1.7002 7.92344 1.4502 8.17344 1.4502 8.47344C1.4502 8.77344 1.7002 9.04844 2.0002 9.04844H12.6752L8.4252 13.3734C8.2002 13.5984 8.2002 13.9484 8.4252 14.1734C8.5252 14.2734 8.67519 14.3234 8.82519 14.3234C8.97519 14.3234 9.1252 14.2734 9.2252 14.1484L14.4002 8.89844C14.6252 8.67344 14.6252 8.32344 14.4002 8.09844Z" fill="#1C2434" stroke="#1C2434" stroke-width="0.5" />
                                        </svg> </a>
                                </div>
                            </div>
                        </div>

                        <div>
                            <div class="card homeblogs_card" >
                                <img src={require('../images/img27.png')} className='img-fluid' alt="..." />
                                <h5>The sleep Doctor, Your Guide to Sleep Lorem more</h5>
                                <p>Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, unknown printer</p>

                                <div className="d-flex">
                                    <a href="#" className='d-inline'>Read More
                                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="17" viewBox="0 0 16 17" fill="none">
                                            <path d="M14.4002 8.09844L9.2252 2.84844C9.0002 2.62344 8.6502 2.62344 8.4252 2.84844C8.2002 3.07344 8.2002 3.42344 8.4252 3.64844L12.6252 7.92344H2.0002C1.7002 7.92344 1.4502 8.17344 1.4502 8.47344C1.4502 8.77344 1.7002 9.04844 2.0002 9.04844H12.6752L8.4252 13.3734C8.2002 13.5984 8.2002 13.9484 8.4252 14.1734C8.5252 14.2734 8.67519 14.3234 8.82519 14.3234C8.97519 14.3234 9.1252 14.2734 9.2252 14.1484L14.4002 8.89844C14.6252 8.67344 14.6252 8.32344 14.4002 8.09844Z" fill="#1C2434" stroke="#1C2434" stroke-width="0.5" />
                                        </svg> </a>
                                </div>
                            </div>
                        </div>

                        <div>
                            <div class="card homeblogs_card" >
                                <img src={require('../images/img27.png')} className='img-fluid' alt="..." />
                                <h5 className='w-75'>The sleep Doctor, Your Guide to Sleep</h5>
                                <p>Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, unknown printer</p>

                                <div className="d-flex">
                                    <a href="#" className='d-inline'>Read More
                                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="17" viewBox="0 0 16 17" fill="none">
                                            <path d="M14.4002 8.09844L9.2252 2.84844C9.0002 2.62344 8.6502 2.62344 8.4252 2.84844C8.2002 3.07344 8.2002 3.42344 8.4252 3.64844L12.6252 7.92344H2.0002C1.7002 7.92344 1.4502 8.17344 1.4502 8.47344C1.4502 8.77344 1.7002 9.04844 2.0002 9.04844H12.6752L8.4252 13.3734C8.2002 13.5984 8.2002 13.9484 8.4252 14.1734C8.5252 14.2734 8.67519 14.3234 8.82519 14.3234C8.97519 14.3234 9.1252 14.2734 9.2252 14.1484L14.4002 8.89844C14.6252 8.67344 14.6252 8.32344 14.4002 8.09844Z" fill="#1C2434" stroke="#1C2434" stroke-width="0.5" />
                                        </svg> </a>
                                </div>
                            </div>
                        </div>

                        <div>
                            <div class="card homeblogs_card" >
                                <img src={require('../images/img27.png')} className='img-fluid' alt="..." />
                                <h5 className='w-75'>The sleep Doctor, Your Guide to Sleep</h5>
                                <p>Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, unknown printer</p>

                                <div className="d-flex">
                                    <a href="#" className='d-inline'>Read More
                                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="17" viewBox="0 0 16 17" fill="none">
                                            <path d="M14.4002 8.09844L9.2252 2.84844C9.0002 2.62344 8.6502 2.62344 8.4252 2.84844C8.2002 3.07344 8.2002 3.42344 8.4252 3.64844L12.6252 7.92344H2.0002C1.7002 7.92344 1.4502 8.17344 1.4502 8.47344C1.4502 8.77344 1.7002 9.04844 2.0002 9.04844H12.6752L8.4252 13.3734C8.2002 13.5984 8.2002 13.9484 8.4252 14.1734C8.5252 14.2734 8.67519 14.3234 8.82519 14.3234C8.97519 14.3234 9.1252 14.2734 9.2252 14.1484L14.4002 8.89844C14.6252 8.67344 14.6252 8.32344 14.4002 8.09844Z" fill="#1C2434" stroke="#1C2434" stroke-width="0.5" />
                                        </svg> </a>
                                </div>
                            </div>
                        </div>
                    </Slider>
                </div>
            </div>
        </div >
    )
}



