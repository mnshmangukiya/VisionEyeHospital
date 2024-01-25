import React from 'react'

export default function Navbar() {
    return (
        <div className="container header">
            <nav class="navbar navbar-expand-lg d-flex">
                <div class="col-lg-2 col-auto">
                    <a class="navbar-brand" href="/">
                        <img src={require('../images/img1.png')} className='img-fluid' alt="" width="122" height="60" />
                    </a>
                </div>
                <div class="col-lg-7 col-auto">
                    <div>
                        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
                            <svg xmlns="http://www.w3.org/2000/svg" width="31" height="31" viewBox="0 0 31 31" fill="none">
                                <path d="M5.16602 7.75H25.8327M5.16602 15.5H25.8327M16.791 23.25H25.8327" stroke="#1C2434" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" />
                            </svg>
                        </button>
                    </div>
                    <div class="collapse navbar-collapse" id="navbarTogglerDemo02">
                        <ul class="navbar-nav mx-auto">
                            <li class="nav-item ">
                                <a class="nav-link active" aria-current="page" href="/">Home</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="/about">About Us</a>
                            </li>
                            <li class="nav-item d-flex">
                                <a class="nav-link" href="/services">Services
                                <svg  className='dropdownarrow' xmlns="http://www.w3.org/2000/svg" width="10" height="7" viewBox="0 0 10 7" fill="none">
                                    <path fill-rule="evenodd" clip-rule="evenodd" d="M0.209209 0.71967C0.488155 0.426777 0.940416 0.426777 1.21936 0.71967L5 4.68934L8.78064 0.71967C9.05958 0.426777 9.51184 0.426777 9.79079 0.71967C10.0697 1.01256 10.0697 1.48744 9.79079 1.78033L5.50508 6.28033C5.22613 6.57322 4.77387 6.57322 4.49492 6.28033L0.209209 1.78033C-0.0697365 1.48744 -0.0697365 1.01256 0.209209 0.71967Z" fill="#1C2434" />
                                </svg></a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="/blogs">Blogs</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="/contact">Contact Us</a>
                            </li>
                        </ul>
                    </div>
                </div>
                <div class="col-lg-3 col-auto">
                    <div className='d-flex justify-content-end'>
                        <a type="button" class="bookappointment_btn" href='/appointment'>Book Appointment
                        </a>
                    </div>
                </div>
            </nav>
        </div>
    )
}