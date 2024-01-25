import React from 'react'
import Slider from "react-slick";

export default function Team_of_doctors() {
    var settings6 = {
        infinite: false,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1,
        initialSlide: 0,
        prevArrow: <div><svg className='carousel-control-prev6' xmlns="http://www.w3.org/2000/svg" width="132" height="132" viewBox="0 0 132 132" fill="none">
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
        nextArrow: <div><svg className='carousel-control-next6' xmlns="http://www.w3.org/2000/svg" width="132" height="132" viewBox="0 0 132 132" fill="none">
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
            <div className='container team'>
                <div className='position-relative'>
                    <p className='text3 mx-auto d-block'>Our <span>team</span> of Doctors</p>
                    <svg className='team_sign d-lg-block d-none' xmlns="http://www.w3.org/2000/svg" width="168" height="168" viewBox="0 0 168 168" fill="none">
                        <g clip-path="url(#clip0_250_821)">
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M71.9881 83.4918C72.5532 83.3936 73.1557 83.3975 73.7572 83.4018C76.9352 83.2423 80.6225 83.0059 83.7527 83.9112C87.8724 85.1386 90.1457 87.4155 91.1558 90.1721C92.5744 94.0529 91.2285 99.0987 88.2531 103.019C85.3131 106.926 80.8612 109.779 76.3892 109.732C73.3351 109.728 70.2116 108.355 67.5094 104.962C64.4243 101.132 64.0208 96.5171 65.1632 91.8969C65.573 90.1132 66.2526 88.46 67.0477 86.7627C65.2794 87.0849 63.4947 87.413 61.6869 87.7503C55.8379 89.0399 49.9363 91.047 44.4653 93.4724C37.1911 96.5821 30.699 100.791 24.9456 106.231C24.3913 106.674 23.5534 106.643 23.0631 106.131C22.5738 105.619 22.6053 104.794 23.1212 104.249C29.1051 98.6054 35.8368 94.1888 43.4011 90.9689C49.0729 88.5836 55.1048 86.4115 61.1535 85.1623C63.6696 84.6725 66.1419 84.1991 68.6264 83.8376C70.7503 80.3567 73.4001 77.2575 75.8188 75.0602C92.1363 60.7264 121.228 60.267 141.91 62.8838C142.628 62.9602 143.126 63.5857 143.038 64.3169C142.949 65.0485 142.278 65.5357 141.56 65.4594C121.547 62.9378 93.3587 63.1695 77.5752 77.0681C75.7191 78.703 73.7356 80.9678 71.9881 83.4918ZM70.2586 86.3583C71.4212 86.1496 72.615 86.0447 73.8443 86.0433C76.7859 85.9735 80.1435 85.6292 82.9918 86.4089C86.0976 87.3234 87.8984 88.9667 88.6466 91.0086C89.8428 94.276 88.5499 98.2551 86.1271 101.384C83.7083 104.628 80.1209 107.153 76.4056 107.051C74.0281 107.023 71.6669 105.942 69.5895 103.358C67.026 100.144 66.767 96.2893 67.7339 92.5498C68.2385 90.3813 69.1376 88.2956 70.2586 86.3583Z" fill="#1C2434" />
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M142.559 64.0323C142.009 63.6597 141.281 63.3545 140.552 63.0497C139.135 62.4243 137.696 61.9239 136.812 61.329C131.418 57.7942 124.993 53.4878 120.942 48.3967C120.501 47.8661 120.588 47.019 121.161 46.569C121.733 46.1195 122.545 46.1599 123.024 46.7921C126.885 51.6066 133.063 55.6587 138.275 59.1461C139.206 59.7233 140.947 60.3409 142.389 60.9566C143.632 61.5316 144.693 62.1756 145.299 62.9924C145.673 63.4316 145.816 64.4241 144.904 65.468C143.592 66.8964 139.364 69.3159 138.967 69.5828C134.941 72.2738 131.445 74.7635 130.121 79.6853C129.912 80.346 129.176 80.7414 128.51 80.6454C127.805 80.4477 127.376 79.68 127.586 79.019C129.107 73.4407 132.916 70.3674 137.52 67.3405C137.841 67.2188 140.375 65.7917 142.013 64.4724C142.176 64.2941 142.398 64.2095 142.559 64.0323Z" fill="#1C2434" />
                        </g>
                        <defs>
                            <clipPath id="clip0_250_821">
                                <rect width="130.263" height="130.038" fill="white" transform="matrix(-0.353417 -0.935466 -0.934924 0.354847 167.612 121.855)" />
                            </clipPath>
                        </defs>
                    </svg>
                    <p className='text4 '>A cataract is a clouding of the lens inside </p>
                    <div className="text-center">
                        <svg className='commonheading_svg' xmlns="http://www.w3.org/2000/svg" width="47" height="4" viewBox="0 0 47 4" fill="none">
                            <path d="M45.5 2H1.5" stroke="#1C2434" stroke-width="3" stroke-linecap="round" />
                        </svg>
                    </div>
                </div>

                <div className='team_slider'>
                    <Slider {...settings6}>
                        <div className='team_card'>
                            <div class="card">
                                <img src={require('../images/img20.png')} alt="..." width={222} height={222} />
                            </div>
                            <div className='card'>
                                <h5>Dr. Shailesh Agrawal</h5>
                                <p>M.S (Ophthalmology) Gold Medalist</p>
                            </div>
                        </div>

                        <div className='team_card'>
                            <div class="card ">
                                <img src={require('../images/img21.png')} alt="..." width={222} height={222} />
                            </div>
                            <div className='card'>
                                <h5>Dr. Khushboo Patel</h5>
                                <p>Vitreo Retina Surgeon & ROP Consultant</p>
                            </div>
                        </div>

                        <div className='team_card'>
                            <div class="card">
                                <img src={require('../images/img22.png')} alt="..." width={222} height={222} />
                            </div>
                            <div className='card'>
                                <h5>Dr. Nitin Jain</h5>
                                <p>MS,FAEH (Opthalmology)</p>
                            </div>
                        </div>

                        <div className='team_card'>
                            <div class="card">
                                <img src={require('../images/img23.png')} alt="..." width={222} height={222} />
                            </div>
                            <div className='card'>
                                <h5>Dr. Saurin Gandhi</h5>
                                <p>DNB - Ophthalmology, MNAMS</p>
                            </div>
                        </div>
                    </Slider>
                </div>
            </div>
        </div>
    )
}
