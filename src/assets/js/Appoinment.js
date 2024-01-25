import React from 'react'
import img56 from '../images/img56.png'
import Team_of_doctors from './Team_of_doctors';
import Hero from './Hero'
import Faq from './Faq'
import Feedback from './Feedback'

export default function Appoinment() {
  return (
    <div>
      {/* hero section */}
      <Hero heading1='Book Your Appointment now' heading2='Book Appointment' />

      <img className='img-fluid position-absolute d-lg-block d-none outerimg20' src={require('../images/img83.png')} alt="" width={130} height={150} />

      {/* form */}
      <div class="container appointment_form position-relative">
        <div class="row">
          <div class="col-lg-5 text-center text-lg-start">
            <div className='appointment_form_img'>
              <p>Book  your Appointment Now</p>
              <p>For more Query call on:</p>
              <svg className='d-lg-block d-none appointment_form_sign' xmlns="http://www.w3.org/2000/svg" width="122" height="122" viewBox="0 0 122 122" fill="none">
                <g clip-path="url(#clip0_520_3403)">
                  <path fill-rule="evenodd" clip-rule="evenodd" d="M61.7682 91.611C74.9076 98.2746 89.4309 102.443 102.803 99.3334C107.715 98.1901 112.059 95.6889 116.524 93.1794C116.917 92.9586 117.057 92.4598 116.836 92.0683C116.616 91.6766 116.117 91.5355 115.726 91.7559C111.396 94.1898 107.194 96.6362 102.435 97.7428C89.2647 100.807 74.9689 96.5583 62.0597 89.9299C62.0824 89.8047 62.1068 89.6793 62.1312 89.5539C62.6681 86.797 61.5541 83.0438 59.5063 79.2235C56.5353 73.6771 51.6457 67.9561 47.5552 64.9914C45.6688 63.6229 43.9189 62.8429 42.5757 62.816C41.4565 62.7925 40.5591 63.2236 39.9531 64.1735C39.455 64.9579 39.2394 65.8987 39.2859 66.9595C39.3488 68.3752 39.887 70.029 40.7776 71.7858C44.0726 78.2864 52.1964 86.3084 56.3214 88.6692C57.6135 89.409 58.9231 90.1289 60.2513 90.8266C60.117 91.6165 59.9861 92.3712 59.7946 93.0777C59.5135 94.1148 59.1039 95.0392 58.2968 95.7778C56.8079 97.1415 54.8589 97.6115 52.7969 97.6007C49.4958 97.5854 45.9101 96.3468 43.237 95.2282C28.2022 88.9378 19.3414 75.6001 13.6399 61.7704C7.87278 47.7845 5.33642 33.277 3.02558 24.8345C2.90575 24.4005 2.4562 24.1434 2.02263 24.2632C1.58875 24.3808 1.33267 24.8307 1.45084 25.2649C3.77488 33.7535 6.33493 48.3339 12.1307 62.3921C17.9921 76.6065 27.1539 90.2679 42.6084 96.7346C45.4526 97.9228 49.2761 99.2151 52.7894 99.2332C55.2731 99.2435 57.6045 98.624 59.3972 96.9824C60.4425 96.0252 61.0058 94.8438 61.369 93.5055C61.5317 92.9054 61.6541 92.2696 61.7682 91.611ZM60.5488 89.1402C60.982 86.6746 59.8816 83.3768 58.0684 79.9941C55.2136 74.6645 50.5277 69.1609 46.5978 66.3109C45.2806 65.3568 44.0643 64.7022 43.0431 64.5038C42.3052 64.3592 41.6947 64.4755 41.33 65.0495C40.9102 65.7097 40.8338 66.5416 40.9742 67.4802C41.1346 68.562 41.5855 69.7729 42.2338 71.0497C45.3939 77.2839 53.1758 84.9902 57.1307 87.2529C58.2564 87.8963 59.397 88.5267 60.5488 89.1402Z" fill="black" />
                  <path fill-rule="evenodd" clip-rule="evenodd" d="M117.497 90.5029C117.494 90.8801 117.376 91.3759 117.232 91.8992C116.91 93.0837 116.395 94.3715 116.173 94.9909C116.022 95.415 116.243 95.8828 116.667 96.0344C117.092 96.186 117.558 95.9637 117.71 95.5393C117.98 94.7826 118.661 93.075 118.962 91.6975C119.116 90.9897 119.163 90.3515 119.073 89.9088C118.984 89.4748 118.764 89.2051 118.481 89.0314C118.183 88.8489 117.751 88.7768 117.202 88.8715C116.598 88.9759 115.76 89.2898 114.819 89.4939C114.029 89.6658 113.154 89.7627 112.305 89.4768C111.878 89.3321 111.415 89.5606 111.271 89.9881C111.128 90.4134 111.356 90.8779 111.783 91.0205C113.375 91.5592 115.039 91.1597 116.346 90.7801C116.735 90.6666 117.222 90.5589 117.497 90.5029Z" fill="black" />
                </g>
                <defs>
                  <clipPath id="clip0_520_3403">
                    <rect width="107.654" height="107.654" fill="white" transform="translate(0 14.9844) rotate(-8)" />
                  </clipPath>
                </defs>
              </svg>
              <svg className='d-lg-none d-block appointment_form_sign2' xmlns="http://www.w3.org/2000/svg" width="67" height="67" viewBox="0 0 67 67" fill="none">
                <g clip-path="url(#clip0_641_3823)">
                  <path fill-rule="evenodd" clip-rule="evenodd" d="M40.7231 45.2346C37.4024 51.165 32.9102 56.4953 26.9878 58.7413C24.8123 59.5658 22.5052 59.7243 20.1493 59.9108C19.9422 59.9271 19.7603 59.772 19.7445 59.5651C19.728 59.3586 19.8828 59.1763 20.0892 59.1603C22.3737 58.9796 24.6124 58.8366 26.7199 58.0373C32.5532 55.8257 36.9377 50.5232 40.1793 44.6655C40.1385 44.6234 40.0969 44.5816 40.0553 44.5398C39.141 43.6217 38.6029 41.8975 38.4054 39.9075C38.1179 37.019 38.5205 33.5704 39.3254 31.3832C39.6963 30.374 40.1662 29.6253 40.6739 29.2698C41.0966 28.973 41.5512 28.9075 42.0275 29.1157C42.42 29.2881 42.7444 29.5931 42.9993 30.0115C43.3391 30.57 43.558 31.3419 43.6684 32.2439C44.0771 35.5812 43.027 40.7427 42.0536 42.7075C41.7488 43.323 41.4321 43.9354 41.1026 44.5442C41.3572 44.8123 41.6013 45.0677 41.8562 45.2891C42.2305 45.6142 42.6251 45.8631 43.1241 45.9386C44.0451 46.0783 44.9126 45.7573 45.6997 45.2231C46.9605 44.3687 48.0157 42.9725 48.7523 41.8568C52.8951 35.5822 52.8611 28.1948 51.4903 21.4311C50.1046 14.5907 47.347 8.38086 46.0621 4.55255C45.9964 4.35547 46.1026 4.14145 46.2995 4.07587C46.4959 4.0094 46.7097 4.11591 46.776 4.31266C48.0677 8.162 50.8349 14.4058 52.2283 21.2813C53.6367 28.2336 53.6386 35.8223 49.3803 42.2723C48.5961 43.4586 47.4635 44.9365 46.1222 45.8466C45.1734 46.489 44.121 46.851 43.0122 46.6829C42.3657 46.5849 41.8462 46.2771 41.3631 45.8577C41.1465 45.6697 40.9362 45.4576 40.7231 45.2346ZM40.5552 43.9746C39.7554 43.1414 39.3293 41.5951 39.1543 39.8331C38.878 37.0575 39.2585 33.7446 40.0314 31.6425C40.2907 30.9384 40.5885 30.375 40.9286 30.0365C41.1742 29.7914 41.438 29.679 41.7252 29.8052C42.0558 29.9502 42.2988 30.2493 42.4864 30.6449C42.703 31.1006 42.8415 31.6804 42.9214 32.3362C43.3133 35.5368 42.3129 40.4894 41.3795 42.3729C41.1136 42.9088 40.8387 43.4435 40.5552 43.9746Z" fill="#1C2434" />
                  <path fill-rule="evenodd" clip-rule="evenodd" d="M19.0911 59.1344C19.189 59.2783 19.3619 59.4377 19.5513 59.6014C19.9794 59.9723 20.5076 60.3333 20.7519 60.5134C20.9186 60.6372 20.9544 60.8731 20.8307 61.0403C20.707 61.2076 20.4713 61.2422 20.3039 61.1188C20.0059 60.8983 19.3061 60.4192 18.8369 59.9687C18.5958 59.7372 18.414 59.5047 18.3343 59.3122C18.2571 59.1229 18.2718 58.9632 18.3356 58.8238C18.4029 58.6773 18.5498 58.5386 18.7847 58.4336C19.0429 58.3184 19.4447 58.2232 19.8577 58.0595C20.2042 57.9225 20.5645 57.7346 20.8161 57.4069C20.9425 57.2417 21.1789 57.2101 21.3436 57.337C21.508 57.463 21.5399 57.6997 21.4131 57.864C20.9418 58.4795 20.2013 58.7544 19.6033 58.9447C19.4251 59.0013 19.2107 59.0853 19.0911 59.1344Z" fill="#1C2434" />
                </g>
                <defs>
                  <clipPath id="clip0_641_3823">
                    <rect width="49.6658" height="49.6658" fill="white" transform="matrix(-0.899853 0.436193 0.436193 0.899853 44.6914 0)" />
                  </clipPath>
                </defs>
              </svg>

              <div className='appointment_form_data1'>
                <svg xmlns="http://www.w3.org/2000/svg" width="19" height="24" viewBox="0 0 19 24" fill="none">
                  <path d="M2.06445 23H18.0008" stroke="#1C2434" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                  <path d="M9.49781 12.524C11.2581 12.524 12.6851 11.1169 12.6851 9.38114C12.6851 7.64539 11.2581 6.23828 9.49781 6.23828C7.73753 6.23828 6.31055 7.64539 6.31055 9.38114C6.31055 11.1169 7.73753 12.524 9.49781 12.524Z" stroke="#1C2434" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                  <path d="M17.9987 9.46154C17.9987 17.0769 9.49937 23 9.49937 23C9.49937 23 1 17.0769 1 9.46154C1 7.2174 1.89547 5.06517 3.48941 3.47833C5.08335 1.89148 7.2452 1 9.49937 1C11.7535 1 13.9154 1.89148 15.5093 3.47833C17.1033 5.06517 17.9987 7.2174 17.9987 9.46154V9.46154Z" stroke="#1C2434" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                </svg>
                <span>Parle Point: <span>+91 9909905212 / +91 9909905353</span></span>
              </div>

              <div className='appointment_form_data2'>
                <svg xmlns="http://www.w3.org/2000/svg" width="19" height="24" viewBox="0 0 19 24" fill="none">
                  <path d="M2.06445 23H18.0008" stroke="#1C2434" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                  <path d="M9.49781 12.524C11.2581 12.524 12.6851 11.1169 12.6851 9.38114C12.6851 7.64539 11.2581 6.23828 9.49781 6.23828C7.73753 6.23828 6.31055 7.64539 6.31055 9.38114C6.31055 11.1169 7.73753 12.524 9.49781 12.524Z" stroke="#1C2434" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                  <path d="M17.9987 9.46154C17.9987 17.0769 9.49937 23 9.49937 23C9.49937 23 1 17.0769 1 9.46154C1 7.2174 1.89547 5.06517 3.48941 3.47833C5.08335 1.89148 7.2452 1 9.49937 1C11.7535 1 13.9154 1.89148 15.5093 3.47833C17.1033 5.06517 17.9987 7.2174 17.9987 9.46154V9.46154Z" stroke="#1C2434" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                </svg>
                <span>Parvat Patiya:<span>+91 9879209651</span></span>
              </div>
            </div>

            <img src={require('../images/img77.png')} alt='' className='img-fluid d-lg-block d-none' />

          </div>
          <div class="col-lg-7 mx-auto d-block">
            <form class="row gy-4">

              <div class="col-lg-6">
                <label for="inputName" class="form-label">Full name *</label>
                <div class="input-group appointment_form_input-group">
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
                <div class="input-group appointment_form_input-group">
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
                <div class="input-group appointment_form_input-group">
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
                <div class="input-group appointment_form_input-group">
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
                  </select>
                </div>
              </div>

              <div class="col-lg-6">
                <label for="inputDate" class="form-label">Preferred Date for Appointment</label>
                <div class="input-group appointment_form_input-group">
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
                <div class="input-group appointment_form_input-group">
                  <span className="input-group-text" id="addon-wrapping">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                      <path d="M12 22.75C6.07 22.75 1.25 17.93 1.25 12C1.25 6.07 6.07 1.25 12 1.25C17.93 1.25 22.75 6.07 22.75 12C22.75 17.93 17.93 22.75 12 22.75ZM12 2.75C6.9 2.75 2.75 6.9 2.75 12C2.75 17.1 6.9 21.25 12 21.25C17.1 21.25 21.25 17.1 21.25 12C21.25 6.9 17.1 2.75 12 2.75Z" fill="#64748B" />
                      <path d="M15.7106 15.9317C15.5806 15.9317 15.4506 15.9017 15.3306 15.8217L12.2306 13.9717C11.4606 13.5117 10.8906 12.5017 10.8906 11.6117V7.51172C10.8906 7.10172 11.2306 6.76172 11.6406 6.76172C12.0506 6.76172 12.3906 7.10172 12.3906 7.51172V11.6117C12.3906 11.9717 12.6906 12.5017 13.0006 12.6817L16.1006 14.5317C16.4606 14.7417 16.5706 15.2017 16.3606 15.5617C16.2106 15.8017 15.9606 15.9317 15.7106 15.9317Z" fill="#64748B" />
                    </svg>
                  </span>
                  <select id="inputTime" class="form-select" >
                    <option selected >Select Time</option>
                  </select>
                </div>
              </div>

              <div class="col-12">
                <label for="appointment_inputMessage" class="form-label">Message</label>
                <input type="text" class="form-control" placeholder='Hello there,I would like to talk about how to...' id='appointment_inputMessage' />
              </div>

              <div class="col-12">
                <div class="form-check">
                  <input class="form-check-input" type="checkbox" id="gridCheck" required/>
                  <label class="form-check-label" for="gridCheck">
                    I authorize ASG Eye Hospitals and its representatives to Call, SMS, Email or WhatsApp me about its products and offers. This consent overrides any registration for DNC / NDNC.
                  </label>
                </div>
              </div>

              <div class="col-12">
                <button type="submit">Send Message</button>
              </div>
            </form>
          </div>
        </div>
      </div>

      <img className='img-fluid position-absolute d-lg-block d-none outerimg21' src={require('../images/img31.png')} alt="" width={290} height={263}/>

      {/* team of doctors */}
      <Team_of_doctors/>

      {/* faq */}
      <Faq image={img56} />
      
      <img className='img-fluid position-absolute d-lg-block d-none outerimg22' src={require('../images/img30.png')} alt="" width={259} height={2198}/>

      {/* rating and feedback */}
      <Feedback/>
    </div>
  )
}
