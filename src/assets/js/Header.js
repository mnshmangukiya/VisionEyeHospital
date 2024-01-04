import React from 'react'
import { Link } from 'react-router-dom'

export default function Navbar() {
    return (
        <div className="container header">
            <nav class="navbar navbar-expand-md">
                <div class="col-lg-2 col-auto">
                    <Link class="navbar-brand" to="/">
                        <img src={require('../images/img1.png')} alt="" width="122" height="60" />
                    </Link>
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
                        <ul class="navbar-nav gap-3 mx-auto">
                            <li class="nav-item ">
                                <Link class="nav-link" to="/">Home</Link>
                            </li>
                            <li class="nav-item">
                                <Link class="nav-link" to="/about">About Us</Link>
                            </li>
                            <li class="nav-item dropdown mobilemenu">
                                <Link class="nav-link dropdown-toggle" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    Services
                                </Link>
                                <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
                                    <li><Link class="dropdown-item" to="/services">All Services</Link></li>
                                    <li><Link class="dropdown-item" to="/services/oculoplasty">Oculoplasty</Link></li>
                                    <li><Link class="dropdown-item" to="/services/cataract">Cataract</Link></li>
                                    <li><Link class="dropdown-item" to="/services/refractive">Refractive Procedures</Link></li>
                                    <li><Link class="dropdown-item" to="/services/glaucoma">Glaucoma</Link></li>
                                    <li><Link class="dropdown-item" to="/services/retina">Retina</Link></li>
                                    <li><Link class="dropdown-item" to="/services/pediatric">Pediatric</Link></li>
                                    <li><Link class="dropdown-item" to="/services/icl">Implantable Contact Lens</Link></li>
                                    <li><Link class="dropdown-item" to="/services/cornea">Cornea</Link></li>
                                </ul>
                            </li>
                            <li class="nav-item">
                                <Link class="nav-link" to="/blogs">Blogs</Link>
                            </li>
                            <li class="nav-item">
                                <Link class="nav-link" to="/contact">Contact Us</Link>
                            </li>
                        </ul>
                    </div>
                </div>
                <div class="col-lg-3 col-auto">
                    <div className='d-flex justify-content-end'>
                        <Link type="button" class="contactuspill btn btn-primary px-4" to='/appoinment'>Book Appointment
                        </Link>
                    </div>
                </div>
            </nav>
        </div>
    )
}
