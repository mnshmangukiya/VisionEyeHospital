import React from 'react'
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';

export default function Faq(props) {
    return (
        <div>
            <div class="container-fluid faq">
                <div className="container">

                    <div className=' d-block d-lg-none'>
                        <p className='text3 mx-auto d-block'>Frequently Asked <span>Questions</span></p>
                        <p className='text4'>A cataract is a clouding of the lens inside  </p>
                        <div className="text-center">
                            <svg className='commonheading_svg' xmlns="http://www.w3.org/2000/svg" width="47" height="4" viewBox="0 0 47 4" fill="none">
                                <path d="M45.5 2H1.5" stroke="#1C2434" stroke-width="3" stroke-linecap="round" />
                            </svg>
                        </div>
                    </div>

                    <div class="row">
                        <div class="col-lg-6 ">
                            <div className=" d-none d-lg-block text-start">
                                <p className='text3 text-start'>Frequently Asked <span>Questions</span></p>
                                <p className='text4 text-start'>A cataract is a clouding of the lens inside  </p>
                                <svg className='commonheading_svg' xmlns="http://www.w3.org/2000/svg" width="47" height="4" viewBox="0 0 47 4" fill="none">
                                    <path d="M45.5 2H1.5" stroke="#1C2434" stroke-width="3" stroke-linecap="round" />
                                </svg>
                            </div>

                            <img className='img-fluid d-lg-block d-none' src={props.image} alt="" />
                        </div>

                        <div class="col-lg-6">
                            <div class="accordion accordion-flush" id="accordionFlushExample">

                                <div class="card accordion-item">
                                    <h2 class="accordion-header">
                                        <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseOne" aria-expanded="true" aria-controls="flush-collapseOne">
                                            What Facilities you providing?
                                            <KeyboardArrowUpIcon className='accordionarrow' />
                                        </button>
                                    </h2>
                                    <div id="flush-collapseOne" class="accordion-collapse collapse show" data-bs-parent="#accordionFlushExample">
                                        <div class="accordion-body">Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, unknown printer  Lorem Ipsum has been team at Vision brings to me. Consistently deliver great results.</div>
                                    </div>
                                </div>

                                <div class="card accordion-item mx-auto">
                                    <h2 class="accordion-header">
                                        <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapsetwo" aria-expanded="false" aria-controls="flush-collapsetwo">
                                            How can i book appointment?
                                            <KeyboardArrowUpIcon className='accordionarrow' />
                                        </button>
                                    </h2>
                                    <div id="flush-collapsetwo" class="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
                                        <div class="accordion-body">Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, unknown printer  Lorem Ipsum has been team at Vision brings to me. Consistently deliver great results.</div>
                                    </div>
                                </div>
                                <div class="card accordion-item mx-auto">
                                    <h2 class="accordion-header">
                                        <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapsethree" aria-expanded="false" aria-controls="flush-collapseOne">
                                            How can i consult doctor online?
                                            <KeyboardArrowUpIcon className='accordionarrow' />
                                        </button>
                                    </h2>
                                    <div id="flush-collapsethree" class="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
                                        <div class="accordion-body">Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, unknown printer  Lorem Ipsum has been team at Vision brings to me. Consistently deliver great results.</div>
                                    </div>
                                </div>
                                <div class="card accordion-item mx-auto">
                                    <h2 class="accordion-header">
                                        <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapsefour" aria-expanded="false" aria-controls="flush-collapsefour">
                                            How much will cost for test?
                                            <KeyboardArrowUpIcon className='accordionarrow' />
                                        </button>
                                    </h2>
                                    <div id="flush-collapsefour" class="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
                                        <div class="accordion-body">Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, unknown printer  Lorem Ipsum has been team at Vision brings to me. Consistently deliver great results.</div>
                                    </div>
                                </div>
                                <div class="card accordion-item mx-auto">
                                    <h2 class="accordion-header">
                                        <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapsefive" aria-expanded="false" aria-controls="flush-collapsefive">
                                            How much will cost for test?
                                            <KeyboardArrowUpIcon className='accordionarrow' />
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
