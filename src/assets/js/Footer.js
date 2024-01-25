import React from 'react'

export default function Footer() {
    return (
        <div className='footer_section'>
            <div className="container flyer z-2 d-flex">
                <div className="row">
                    <div class="col-lg-7">
                        <h5>Want to make appointment easily?</h5>
                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem
                            Ipsum has been the industry's standard dummy text ever since the 1500s.</p>
                    </div>
                    <div class="col-lg-5 my-auto d-block">
                        <a  href="/appointment" role="button">Book Appointment</a>
                    </div>
                </div>
            </div>

            <div class="container-fluid d-flex footer z-1 position-relative" id='footer'>
                <svg className='footer_svg1 d-lg-block d-none' xmlns="http://www.w3.org/2000/svg" width="108" height="108" viewBox="0 0 108 108" fill="none" >
                    <path x="100" y="100" opacity="0.15" d="M69.1485 70.2192L69.1485 106.909L38.8429 106.909L38.8429 70.2192V69.2192H37.8429L1.15307 69.2192V38.9136L37.8429 38.9136H38.8429V37.9136L38.8429 1.22374L69.1485 1.22373L69.1485 37.9136L69.1485 38.9136L70.1485 38.9136L106.838 38.9136L106.838 69.2192L70.1485 69.2192L69.1485 69.2192L69.1485 70.2192Z" stroke="white" stroke-width="2" />
                </svg>
                <svg className='footer_svg2 d-lg-block d-none' xmlns="http://www.w3.org/2000/svg" width="91" height="65" viewBox="0 0 91 65" fill="none" >
                    <g opacity="0.3" >
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M25.6473 8.00741C2.59558 21.3163 -5.30251 50.7924 8.0064 73.8441C21.3153 96.8958 50.7914 104.794 73.8431 91.485C96.8948 78.1761 104.793 48.7 91.484 25.6483C78.1751 2.59659 48.699 -5.3015 25.6473 8.00741ZM24.9488 6.79758C1.22893 20.4923 -6.8981 50.8227 6.79658 74.5426C20.4913 98.2625 50.8217 106.39 74.5416 92.6948C98.2615 79.0002 106.389 48.6697 92.6938 24.9498C78.9992 1.22994 48.6687 -6.89709 24.9488 6.79758Z" fill="#E2E8F0" />
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M32.6322 20.1056C16.2621 29.5569 10.6533 50.4892 20.1046 66.8592C29.5559 83.2293 50.4882 88.8381 66.8582 79.3868C83.2283 69.9356 88.8371 49.0033 79.3858 32.6332C69.9346 16.2631 49.0022 10.6544 32.6322 20.1056ZM31.9337 18.8958C14.8955 28.7328 9.05776 50.5195 18.8948 67.5577C28.7318 84.5959 50.5185 90.4337 67.5567 80.5966C84.5949 70.7596 90.4326 48.9729 80.5956 31.9347C70.7586 14.8965 48.9719 9.05877 31.9337 18.8958Z" fill="#E2E8F0" />
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M39.6171 32.2038C29.9287 37.7974 26.6092 50.1859 32.2028 59.8743C37.7964 69.5627 50.1849 72.8822 59.8733 67.2886C69.5617 61.695 72.8812 49.3065 67.2876 39.6181C61.694 29.9297 49.3055 26.6102 39.6171 32.2038ZM38.9186 30.994C28.562 36.9734 25.0136 50.2162 30.993 60.5728C36.9724 70.9294 50.2152 74.4778 60.5718 68.4984C70.9284 62.5191 74.4768 49.2762 68.4974 38.9196C62.5181 28.5631 49.2752 25.0146 38.9186 30.994Z" fill="#E2E8F0" />
                    </g>
                </svg>

                <div className="container">
                    <div className="row footer_row" >

                        <div className="col-lg-2 footer_col1">
                            <h5>About Us</h5>
                            <svg className='footer_svg3' xmlns="http://www.w3.org/2000/svg" width="46" height="2" viewBox="0 0 46 2" fill="none" >
                                <path d="M45 1H1" stroke="#E2E8F0" stroke-width="2" stroke-linecap="round" />
                            </svg>
                            <img src={require('../images/img1.png')} alt="" width="122" height="60" className='me-auto d-block' />
                            <p>​Vision Eye Hospital was established pecialized tertiary eye care services at affordable prices the city.Read More…</p>
                        </div>

                        <div class="col-lg-2 footer_col2">
                            <h5>Pages</h5>
                            <svg className='footer_svg3' xmlns="http://www.w3.org/2000/svg" width="46" height="2" viewBox="0 0 46 2" fill="none" >
                                <path d="M45 1H1" stroke="#E2E8F0" stroke-width="2" stroke-linecap="round" />
                            </svg>

                            <div className='footer_col2_data'>
                                <div class="d-flex">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
                                        <path d="M8 2V14" stroke="#017CC7" stroke-width="3" stroke-linecap="round" />
                                        <path d="M14 8L2 8" stroke="#017CC7" stroke-width="3" stroke-linecap="round" />
                                    </svg>
                                    <a href="/about">About Us</a>
                                </div>

                                <div class="d-flex">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
                                        <path d="M8 2V14" stroke="#017CC7" stroke-width="3" stroke-linecap="round" />
                                        <path d="M14 8L2 8" stroke="#017CC7" stroke-width="3" stroke-linecap="round" />
                                    </svg>
                                    <a href="/services">Services</a>
                                </div>

                                <div class="d-flex">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
                                        <path d="M8 2V14" stroke="#017CC7" stroke-width="3" stroke-linecap="round" />
                                        <path d="M14 8L2 8" stroke="#017CC7" stroke-width="3" stroke-linecap="round" />
                                    </svg>
                                    <a href="/contact">Contact Us</a>
                                </div>

                                <div class="d-flex">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
                                        <path d="M8 2V14" stroke="#017CC7" stroke-width="3" stroke-linecap="round" />
                                        <path d="M14 8L2 8" stroke="#017CC7" stroke-width="3" stroke-linecap="round" />
                                    </svg>
                                    <a href="/blogs">Blogs</a>
                                </div>
                            </div>
                        </div>

                        <div class="col-lg footer_col3">
                            <h5>Parle Point Branch</h5>
                            <svg className='footer_svg3' xmlns="http://www.w3.org/2000/svg" width="46" height="2" viewBox="0 0 46 2" fill="none">
                                <path d="M45 1H1" stroke="#E2E8F0" stroke-width="2" stroke-linecap="round" />
                            </svg>

                            <p>Time : 9:30 AM to 6:00 PM</p>
                            <div className='d-flex'>
                                <a href='/contact'>Get the Direction<svg xmlns="http://www.w3.org/2000/svg" width="20" height="21" viewBox="0 0 20 21" fill="none">
                                    <path d="M17.308 10.0231L11.1417 3.76748C10.8736 3.49938 10.4566 3.49938 10.1885 3.76748C9.92039 4.03558 9.92039 4.45262 10.1885 4.72072L15.193 9.81459H2.53279C2.17533 9.81459 1.87744 10.1125 1.87744 10.4699C1.87744 10.8274 2.17533 11.1551 2.53279 11.1551H15.2526L10.1885 16.3085C9.92039 16.5766 9.92039 16.9937 10.1885 17.2618C10.3076 17.3809 10.4864 17.4405 10.6651 17.4405C10.8438 17.4405 11.0226 17.3809 11.1417 17.232L17.308 10.9763C17.5761 10.7082 17.5761 10.2912 17.308 10.0231Z" fill="white" stroke="white" stroke-width="0.595774" />
                                </svg></a>
                            </div>
                        </div>

                        <div class="col-lg footer_col3">
                            <h5>Parvat Patiya Branch</h5>
                            <svg className='footer_svg3' xmlns="http://www.w3.org/2000/svg" width="46" height="2" viewBox="0 0 46 2" fill="none">
                                <path d="M45 1H1" stroke="#E2E8F0" stroke-width="2" stroke-linecap="round" />
                            </svg>

                            <p>Time : 6:00 PM to 9:00 PM</p>
                            <div className='d-flex'>
                                <a href='/contact'>Get the Direction<svg xmlns="http://www.w3.org/2000/svg" width="20" height="21" viewBox="0 0 20 21" fill="none">
                                    <path d="M17.308 10.0231L11.1417 3.76748C10.8736 3.49938 10.4566 3.49938 10.1885 3.76748C9.92039 4.03558 9.92039 4.45262 10.1885 4.72072L15.193 9.81459H2.53279C2.17533 9.81459 1.87744 10.1125 1.87744 10.4699C1.87744 10.8274 2.17533 11.1551 2.53279 11.1551H15.2526L10.1885 16.3085C9.92039 16.5766 9.92039 16.9937 10.1885 17.2618C10.3076 17.3809 10.4864 17.4405 10.6651 17.4405C10.8438 17.4405 11.0226 17.3809 11.1417 17.232L17.308 10.9763C17.5761 10.7082 17.5761 10.2912 17.308 10.0231Z" fill="white" stroke="white" stroke-width="0.595774" />
                                </svg></a>
                            </div>
                        </div>

                        <div class="col-lg-3 footer_col4">
                            <h5>Contact Us</h5>
                            <svg className='footer_svg3' xmlns="http://www.w3.org/2000/svg" width="46" height="2" viewBox="0 0 46 2" fill="none">
                                <path d="M45 1H1" stroke="#E2E8F0" stroke-width="2" stroke-linecap="round" />
                            </svg>

                            <div className='rounded-3 d-flex justify-content-center align-items-center'>+919909905215</div>
                            <p>info@visioneyehospital.net</p>
                        </div>
                    </div>

                    <div class="container border-top disclaimer d-flex flex-column flex-sm-row">
                        <p className='text-start'>Copyright © 2017 Vision Eye Hospital. Developed and Maintained by Sanskruti Technologies</p>

                        <div class="ms-auto d-flex ">
                            <a href="#">
                                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32" fill="none">
                                    <g clip-path="url(#clip0_273_1169)">
                                        <path d="M29.75 0.5H2.25C1.25 0.5 0.5 1.3 0.5 2.25V29.75C0.5 30.75 1.3 31.5 2.25 31.5H17.05V19.45H13.05V14.8H17.05V11.35C17.05 7.35 19.45 5.15 23.05 5.15C24.25 5.15 25.45 5.2 26.65 5.35V9.5H24.25C22.35 9.5 21.95 10.4 21.95 11.75V14.7H26.5L25.85 19.4H21.85V31.3H29.75C30.75 31.3 31.5 30.55 31.5 29.55V2.25C31.45 1.25 30.65 0.5 29.75 0.5Z" fill="white" />
                                    </g>
                                    <defs>
                                        <clipPath id="clip0_273_1169">
                                            <rect width="32" height="32" fill="white" />
                                        </clipPath>
                                    </defs>
                                </svg>
                            </a>
                            <a href="#">
                                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32" fill="none">
                                    <path d="M28.05 7.65L29.95 5.25C30.5 4.6 30.65 4.1 30.7 3.85C29.2 4.75 27.8 5.05 26.9 5.05H26.55L26.35 4.85C25.15 3.8 23.65 3.25 22.05 3.25C18.55 3.25 15.8 6.15 15.8 9.5C15.8 9.7 15.8 10 15.85 10.2L16 11.2L14.95 11.15C8.55 10.95 3.3 5.45 2.45 4.5C1.05 7 1.85 9.4 2.7 10.9L4.4 13.7L1.7 12.2C1.75 14.3 2.55 15.95 4.1 17.15L5.45 18.15L4.1 18.7C4.95 21.25 6.85 22.3 8.25 22.7L10.1 23.2L8.35 24.4C5.55 26.4 2.05 26.25 0.5 26.1C3.65 28.3 7.4 28.8 10 28.8C11.95 28.8 13.4 28.6 13.75 28.45C27.75 25.15 28.4 12.65 28.4 10.15V9.8L28.7 9.6C30.4 8 31.1 7.15 31.5 6.65C31.35 6.7 31.15 6.8 30.95 6.85L28.05 7.65Z" fill="white" />
                                </svg>
                            </a>
                            <a href="#">
                                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32" fill="none">
                                    <path d="M16.0002 20.7992C18.6512 20.7992 20.8002 18.6502 20.8002 15.9992C20.8002 13.3483 18.6512 11.1992 16.0002 11.1992C13.3492 11.1992 11.2002 13.3483 11.2002 15.9992C11.2002 18.6502 13.3492 20.7992 16.0002 20.7992Z" fill="white" />
                                    <path d="M22.3505 0.5H9.65049C4.60049 0.5 0.500488 4.6 0.500488 9.65V22.25C0.500488 27.4 4.60049 31.5 9.65049 31.5H22.2505C27.4005 31.5 31.5005 27.4 31.5005 22.35V9.65C31.5005 4.6 27.4005 0.5 22.3505 0.5ZM16.0505 23.6C11.8005 23.6 8.45049 20.15 8.45049 16C8.45049 11.85 11.8505 8.4 16.0505 8.4C20.2005 8.4 23.6005 11.85 23.6005 16C23.6005 20.15 20.2505 23.6 16.0505 23.6ZM26.5505 9.1C26.0505 9.65 25.3005 9.95 24.4505 9.95C23.7005 9.95 22.9505 9.65 22.3505 9.1C21.8005 8.55 21.5005 7.85 21.5005 7C21.5005 6.15 21.8005 5.5 22.3505 4.9C22.9005 4.3 23.6005 4 24.4505 4C25.2005 4 26.0005 4.3 26.5505 4.85C27.0505 5.5 27.4005 6.25 27.4005 7.05C27.3505 7.85 27.0505 8.55 26.5505 9.1Z" fill="white" />
                                    <path d="M24.5008 5.80078C23.8508 5.80078 23.3008 6.35078 23.3008 7.00078C23.3008 7.65078 23.8508 8.20078 24.5008 8.20078C25.1508 8.20078 25.7008 7.65078 25.7008 7.00078C25.7008 6.35078 25.2008 5.80078 24.5008 5.80078Z" fill="white" />
                                </svg>
                            </a>
                            <a href="#">
                                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32" fill="none">
                                    <g clip-path="url(#clip0_273_1172)">
                                        <path d="M1.5506 16.1501C1.6006 15.4501 1.6006 14.8001 1.7506 14.2001C1.8006 13.9001 1.7506 13.7001 1.6006 13.4001C0.450601 11.4501 0.250601 9.30008 0.750601 7.15008C1.3006 4.70008 2.7006 2.80008 5.0006 1.65008C7.8006 0.150077 10.6506 0.150077 13.4506 1.70008C13.6506 1.75008 13.8506 1.85008 14.1506 1.75008C17.7506 1.35008 21.0506 2.05008 24.1006 4.10008C27.2506 6.20008 29.2506 9.15008 30.1006 12.9001C30.5006 14.5001 30.5006 16.2001 30.3006 17.8501C30.2506 18.0501 30.2506 18.2501 30.3506 18.5001C31.5006 20.4501 31.8506 22.6001 31.2006 24.8501C30.5506 27.3001 29.1506 29.2001 26.9006 30.4001C24.1006 31.9001 21.2006 31.9001 18.4506 30.3501C18.2506 30.3001 18.0506 30.2001 17.8006 30.3001C15.5506 30.6001 13.3506 30.3501 11.2006 29.6001C8.4006 28.7001 6.0506 26.9001 4.3006 24.5501C2.9506 22.6001 2.0006 20.6001 1.7506 18.3501C1.6006 17.5501 1.6006 16.8501 1.5506 16.1501ZM16.0506 25.3501C16.9006 25.3001 17.6506 25.1501 18.5006 25.0501C19.7006 24.8501 20.7506 24.3501 21.6506 23.7001C23.2006 22.4501 23.8506 20.8001 23.6006 18.8501C23.4506 17.5001 22.8506 16.4501 21.7006 15.7001C21.1506 15.3001 20.4506 15.0001 19.8006 14.8001C18.3006 14.3001 16.7506 13.9501 15.2006 13.5501C14.4506 13.4001 13.7006 13.1501 13.0006 12.7001C12.2006 12.2001 12.0006 11.3501 12.4506 10.6501C12.7506 10.1501 13.2506 9.85008 13.7006 9.65008C14.5506 9.30008 15.4006 9.30008 16.2506 9.35008C17.3006 9.40008 18.1506 9.90008 18.6506 10.8501C18.8506 11.2501 19.0506 11.6501 19.3506 12.0001C19.5506 12.3001 19.7506 12.5501 20.1006 12.7001C21.0006 13.1001 22.2006 12.6501 22.5006 11.7001C22.8006 10.9501 22.5506 10.2001 22.1506 9.60008C21.4506 8.45008 20.4506 7.75008 19.2506 7.35008C18.1006 6.95008 17.0006 6.80008 15.7506 6.80008C14.1506 6.80008 12.6006 7.00008 11.0506 7.65008C9.4506 8.45008 8.4506 9.60008 8.2506 11.4501C8.1006 13.1501 8.8006 14.5001 10.1506 15.4001C11.0006 16.0501 12.0006 16.4001 13.0506 16.6501C14.1006 16.9501 15.1506 17.2001 16.3006 17.4001C17.0006 17.6001 17.8006 17.8001 18.4006 18.1501C19.6506 18.9001 19.7506 20.5501 18.6006 21.4501C18.0506 21.9501 17.3506 22.2001 16.5506 22.3001C15.7006 22.4501 14.8006 22.4501 13.8506 22.2501C12.8506 21.9501 12.2506 21.2501 11.7506 20.4001C11.5506 19.8501 11.2506 19.4001 10.9006 18.9001C10.5006 18.2501 9.8506 18.1501 9.1506 18.2501C8.4506 18.4001 7.9506 18.8001 7.8006 19.5001C7.7506 20.0501 7.8006 20.6501 8.0006 21.1001C8.5506 22.6001 9.6006 23.5501 10.9506 24.2501C12.8006 25.2501 14.4006 25.3501 16.0506 25.3501Z" fill="white" />
                                    </g>
                                    <defs>
                                        <clipPath id="clip0_273_1172">
                                            <rect width="32" height="32" fill="white" />
                                        </clipPath>
                                    </defs>
                                </svg>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div >
    )
}
