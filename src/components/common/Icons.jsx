import React from "react";

const Icons = ({ icon, className, pathName }) => {
  const Icons = {
    arrowRight: (
      <svg
        className={className}
        width="17"
        height="8"
        viewBox="0 0 17 8"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          className={pathName}
          d="M16.1122 4.03568C16.3075 3.84042 16.3075 3.52384 16.1122 3.32857L12.9302 0.146594C12.735 -0.0486683 12.4184 -0.0486683 12.2231 0.146594C12.0279 0.341856 12.0279 0.658439 12.2231 0.853701L15.0516 3.68213L12.2231 6.51055C12.0279 6.70582 12.0279 7.0224 12.2231 7.21766C12.4184 7.41292 12.735 7.41292 12.9302 7.21766L16.1122 4.03568ZM4.37114e-08 4.18213L15.7587 4.18213L15.7587 3.18213L-4.37114e-08 3.18213L4.37114e-08 4.18213Z"
          fill="white"
        />
      </svg>
    ),
    plus: (
      <svg
        className={className}
        width="20"
        height="20"
        viewBox="0 0 20 20"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g clip-path="url(#clip0_273_2483)">
          <path
            className={pathName}
            d="M15.082 9.16658H10.082V4.16659C10.082 3.94557 9.99423 3.73361 9.83795 3.57733C9.68167 3.42105 9.46971 3.33325 9.2487 3.33325C9.02768 3.33325 8.81572 3.42105 8.65944 3.57733C8.50316 3.73361 8.41536 3.94557 8.41536 4.16659V9.16658H3.41536C3.19435 9.16658 2.98239 9.25438 2.82611 9.41066C2.66983 9.56694 2.58203 9.7789 2.58203 9.99992C2.58203 10.2209 2.66983 10.4329 2.82611 10.5892C2.98239 10.7455 3.19435 10.8333 3.41536 10.8333H8.41536V15.8333C8.41536 16.0543 8.50316 16.2662 8.65944 16.4225C8.81572 16.5788 9.02768 16.6666 9.2487 16.6666C9.46971 16.6666 9.68167 16.5788 9.83795 16.4225C9.99423 16.2662 10.082 16.0543 10.082 15.8333V10.8333H15.082C15.303 10.8333 15.515 10.7455 15.6713 10.5892C15.8276 10.4329 15.9154 10.2209 15.9154 9.99992C15.9154 9.7789 15.8276 9.56694 15.6713 9.41066C15.515 9.25438 15.303 9.16658 15.082 9.16658Z"
            fill="black"
          />
        </g>
        <defs>
          <clipPath id="clip0_273_2483">
            <rect width="20" height="20" fill="white" />
          </clipPath>
        </defs>
      </svg>
    ),
    minus: (
      <svg
      className={className}
        width="20"
        height="20"
        viewBox="0 0 20 20"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
        className={pathName}
          d="M4.9974 8.33341C4.77638 8.33341 4.56442 8.24562 4.40814 8.08934C4.25186 7.93306 4.16406 7.7211 4.16406 7.50008C4.16406 7.27907 4.25186 7.06711 4.40814 6.91083C4.56442 6.75455 4.77638 6.66675 4.9974 6.66675H14.9974C15.2184 6.66675 15.4304 6.75455 15.5867 6.91083C15.7429 7.06711 15.8307 7.27907 15.8307 7.50008C15.8307 7.7211 15.7429 7.93306 15.5867 8.08934C15.4304 8.24562 15.2184 8.33341 14.9974 8.33341H4.9974Z"
          fill="#2ABAE9"
        />
      </svg>
    ),

    arrowRight: (
            <svg className={className} width="17" height="8" viewBox="0 0 17 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path className={pathName} d="M16.1122 4.03568C16.3075 3.84042 16.3075 3.52384 16.1122 3.32857L12.9302 0.146594C12.735 -0.0486683 12.4184 -0.0486683 12.2231 0.146594C12.0279 0.341856 12.0279 0.658439 12.2231 0.853701L15.0516 3.68213L12.2231 6.51055C12.0279 6.70582 12.0279 7.0224 12.2231 7.21766C12.4184 7.41292 12.735 7.41292 12.9302 7.21766L16.1122 4.03568ZM4.37114e-08 4.18213L15.7587 4.18213L15.7587 3.18213L-4.37114e-08 3.18213L4.37114e-08 4.18213Z" fill="white" />
            </svg>

        ),

        autoRules: (
            <svg className={className} width="40" height="44" viewBox="0 0 40 44" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g clip-path="url(#clip0_273_4067)">
                    <path d="M31.4297 28.2858L37.144 26.7144L38.5725 33.0001" stroke="url(#paint0_linear_273_4067)" stroke-width="4" stroke-linecap="round" stroke-linejoin="round" />
                    <path d="M37.144 26.7143C35.8749 30.6699 33.5698 34.1238 30.5191 36.6407C27.4684 39.1575 23.8086 40.6246 20.0011 40.8571C16.4814 40.8578 13.0469 39.6668 10.1639 37.4458C7.28098 35.2248 5.08939 32.0815 3.88683 28.4429M8.57254 15.7143L2.85826 17.2857L1.42969 11" stroke="url(#paint1_linear_273_4067)" stroke-width="4" stroke-linecap="round" stroke-linejoin="round" />
                    <path d="M2.85938 17.2857C5.25937 10.0571 12.6308 3.14282 20.0022 3.14282C23.5391 3.15376 26.9862 4.36777 29.8712 6.61843C32.7561 8.8691 34.9376 12.0462 36.1165 15.7143" stroke="url(#paint2_linear_273_4067)" stroke-width="4" stroke-linecap="round" stroke-linejoin="round" />
                </g>
                <defs>
                    <linearGradient id="paint0_linear_273_4067" x1="40.2871" y1="23.8634" x2="33.7221" y2="31.7759" gradientUnits="userSpaceOnUse">
                        <stop stop-color="#FBC524" />
                        <stop offset="0.52" stop-color="#E939D9" />
                        <stop offset="1" stop-color="#2ABAE9" />
                    </linearGradient>
                    <linearGradient id="paint1_linear_273_4067" x1="45.7169" y1="-2.54223" x2="14.8658" y2="36.5982" gradientUnits="userSpaceOnUse">
                        <stop stop-color="#FBC524" />
                        <stop offset="0.52" stop-color="#E939D9" />
                        <stop offset="1" stop-color="#2ABAE9" />
                    </linearGradient>
                    <linearGradient id="paint2_linear_273_4067" x1="44.0996" y1="-3.27192" x2="33.7167" y2="22.624" gradientUnits="userSpaceOnUse">
                        <stop stop-color="#FBC524" />
                        <stop offset="0.52" stop-color="#E939D9" />
                        <stop offset="1" stop-color="#2ABAE9" />
                    </linearGradient>
                    <clipPath id="clip0_273_4067">
                        <rect width="40" height="44" fill="white" />
                    </clipPath>
                </defs>
            </svg>

        ),

        linkedAccounts: (
            <svg className={className} width="40" height="41" viewBox="0 0 40 41" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M17.3398 21.863C19.9195 25.5893 25.3474 24.9351 28.0068 21.863L33.2964 16.4112C36.2856 13.0637 36.392 8.74044 33.2964 5.5075C30.2753 2.35362 25.6798 2.35362 22.6587 5.5075L17.3398 10.9593" stroke="url(#paint0_linear_273_4078)" stroke-width="4" stroke-linecap="round" stroke-linejoin="round" />
                <path d="M22.6604 19.328C20.0808 15.6016 14.6821 16.0651 12.0227 19.1372L6.70384 24.5208C3.71464 27.8683 3.60826 32.2597 6.70384 35.4927C9.72496 38.6465 14.3205 38.6465 17.3416 35.4927L22.6604 30.0408" stroke="url(#paint1_linear_273_4078)" stroke-width="4" stroke-linecap="round" stroke-linejoin="round" />
                <defs>
                    <linearGradient id="paint0_linear_273_4078" x1="39.9564" y1="-6.50811" x2="17.4485" y2="13.9561" gradientUnits="userSpaceOnUse">
                        <stop stop-color="#FBC524" />
                        <stop offset="0.52" stop-color="#E939D9" />
                        <stop offset="1" stop-color="#2ABAE9" />
                    </linearGradient>
                    <linearGradient id="paint1_linear_273_4078" x1="27.0384" y1="7.07741" x2="4.62677" y2="27.5505" gradientUnits="userSpaceOnUse">
                        <stop stop-color="#FBC524" />
                        <stop offset="0.52" stop-color="#E939D9" />
                        <stop offset="1" stop-color="#2ABAE9" />
                    </linearGradient>
                </defs>
            </svg>

        ),

        lockedAccounts: (
            <svg className={className} width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M19.9974 28.3334C19.1133 28.3334 18.2655 27.9822 17.6404 27.3571C17.0153 26.732 16.6641 25.8841 16.6641 25.0001C16.6641 23.1501 18.1474 21.6667 19.9974 21.6667C20.8815 21.6667 21.7293 22.0179 22.3544 22.6431C22.9795 23.2682 23.3307 24.116 23.3307 25.0001C23.3307 25.8841 22.9795 26.732 22.3544 27.3571C21.7293 27.9822 20.8815 28.3334 19.9974 28.3334ZM29.9974 33.3334V16.6667H9.9974V33.3334H29.9974ZM29.9974 13.3334C30.8815 13.3334 31.7293 13.6846 32.3544 14.3097C32.9795 14.9348 33.3307 15.7827 33.3307 16.6667V33.3334C33.3307 34.2175 32.9795 35.0653 32.3544 35.6904C31.7293 36.3156 30.8815 36.6667 29.9974 36.6667H9.9974C9.11334 36.6667 8.26549 36.3156 7.64037 35.6904C7.01525 35.0653 6.66406 34.2175 6.66406 33.3334V16.6667C6.66406 14.8167 8.1474 13.3334 9.9974 13.3334H11.6641V10.0001C11.6641 7.78994 12.542 5.67033 14.1048 4.10752C15.6676 2.54472 17.7873 1.66675 19.9974 1.66675C21.0917 1.66675 22.1754 1.8823 23.1864 2.30109C24.1975 2.71987 25.1161 3.3337 25.89 4.10752C26.6638 4.88135 27.2776 5.80001 27.6964 6.81105C28.1152 7.8221 28.3307 8.90573 28.3307 10.0001V13.3334H29.9974ZM19.9974 5.00008C18.6713 5.00008 17.3995 5.52687 16.4619 6.46455C15.5242 7.40223 14.9974 8.674 14.9974 10.0001V13.3334H24.9974V10.0001C24.9974 8.674 24.4706 7.40223 23.5329 6.46455C22.5952 5.52687 21.3235 5.00008 19.9974 5.00008Z" fill="url(#paint0_linear_273_4087)" />
                <defs>
                    <linearGradient id="paint0_linear_273_4087" x1="39.7318" y1="-14.2081" x2="3.36635" y2="15.1787" gradientUnits="userSpaceOnUse">
                        <stop stop-color="#FBC524" />
                        <stop offset="0.52" stop-color="#E939D9" />
                        <stop offset="1" stop-color="#2ABAE9" />
                    </linearGradient>
                </defs>
            </svg>

        ),

        transactionAccounts: (
            <svg className={className} width="40" height="39" viewBox="0 0 40 39" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g clip-path="url(#clip0_273_4094)">
                    <path d="M33.3315 22.75C33.7563 22.7505 34.1649 22.9091 34.4738 23.1934C34.7827 23.4777 34.9685 23.8663 34.9934 24.2798C35.0183 24.6933 34.8804 25.1004 34.6077 25.418C34.3351 25.7356 33.9483 25.9397 33.5265 25.9886L33.3315 26H10.6882L14.5098 29.7261C14.8087 30.0186 14.9823 30.411 14.9952 30.8236C15.0081 31.2363 14.8595 31.6383 14.5794 31.948C14.2994 32.2576 13.9089 32.4518 13.4874 32.4909C13.0658 32.5301 12.6448 32.4113 12.3098 32.1588L12.1532 32.0239L5.76982 25.8001C4.66149 24.7211 5.37149 22.9028 6.87482 22.7598L7.06649 22.75H33.3315ZM25.4865 6.97614C25.7735 6.69636 26.1553 6.52828 26.5604 6.50345C26.9654 6.47862 27.3658 6.59874 27.6865 6.84127L27.8432 6.97614L34.2265 13.1999C35.3348 14.2789 34.6248 16.0973 33.1215 16.2403L32.9298 16.25H6.66482C6.24002 16.2496 5.83143 16.091 5.52254 15.8066C5.21365 15.5223 5.02776 15.1337 5.00287 14.7203C4.97797 14.3068 5.11594 13.8997 5.3886 13.582C5.66125 13.2644 6.04799 13.0603 6.46982 13.0114L6.66482 13H29.3082L25.4865 9.27389C25.174 8.96916 24.9985 8.55591 24.9985 8.12502C24.9985 7.69413 25.174 7.28088 25.4865 6.97614Z" fill="url(#paint0_linear_273_4094)" />
                </g>
                <defs>
                    <linearGradient id="paint0_linear_273_4094" x1="42.1967" y1="-5.29161" x2="15.1226" y2="27.84" gradientUnits="userSpaceOnUse">
                        <stop stop-color="#FBC524" />
                        <stop offset="0.52" stop-color="#E939D9" />
                        <stop offset="1" stop-color="#2ABAE9" />
                    </linearGradient>
                    <clipPath id="clip0_273_4094">
                        <rect width="40" height="39" fill="white" />
                    </clipPath>
                </defs>
            </svg>

        ),

        prev: (
            <svg className={className} width="9" height="15" viewBox="0 0 9 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M1 1L7.25 7.25L1 13.5" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className=' group-hover:stroke-white duration-500' />
            </svg>

        ),

        next: (
            <svg className={className} width="9" height="15" viewBox="0 0 9 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M7.25 1L1 7.25L7.25 13.5" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className=' group-hover:stroke-white duration-500' />
            </svg>

        ),

        normalTick: (
            <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M11.9961 2C6.48209 2 1.99609 6.486 1.99609 12C1.99609 17.514 6.48209 22 11.9961 22C17.5101 22 21.9961 17.514 21.9961 12C21.9961 6.486 17.5101 2 11.9961 2ZM9.99709 16.413L6.28409 12.708L7.69609 11.292L9.99509 13.587L15.2891 8.293L16.7031 9.707L9.99709 16.413Z" fill="url(#paint0_linear_273_2213)" />
                <defs>
                    <linearGradient id="paint0_linear_273_2213" x1="1.99609" y1="5.95603" x2="21.9229" y2="6.22964" gradientUnits="userSpaceOnUse">
                        <stop stop-color="#994FFF" />
                        <stop offset="1" stop-color="#4AB6FE" />
                    </linearGradient>
                </defs>
            </svg>

        ),

        hoverTick: (
            <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M11.9961 2.41309C6.48209 2.41309 1.99609 6.89909 1.99609 12.4131C1.99609 17.9271 6.48209 22.4131 11.9961 22.4131C17.5101 22.4131 21.9961 17.9271 21.9961 12.4131C21.9961 6.89909 17.5101 2.41309 11.9961 2.41309ZM9.99709 16.8261L6.28409 13.1211L7.69609 11.7051L9.99509 14.0001L15.2891 8.70609L16.7031 10.1201L9.99709 16.8261Z" fill="#FAFAFA" />
            </svg>

        ),

        facebook: (
            <svg className={className} width="62" height="62" viewBox="0 0 62 62" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g filter="url(#filter0_d_273_2398)">
                    <circle cx="31" cy="27" r="17" fill="#FAFAFA" />
                </g>
                <g clip-path="url(#clip0_273_2398)">
                    <path d="M32.9987 22.9925H34.0942V21.0845C33.9052 21.0585 33.2552 21 32.4982 21C30.9187 21 29.8367 21.9935 29.8367 23.8195V25.5H28.0938V27.633H29.8367V33H31.9737V27.6335H33.6462L33.9117 25.5005H31.9732V24.031C31.9737 23.4145 32.1397 22.9925 32.9987 22.9925Z" fill="#1A202C" />
                </g>
                <defs>
                    <filter id="filter0_d_273_2398" x="0" y="0" width="62" height="62" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                        <feFlood flood-opacity="0" result="BackgroundImageFix" />
                        <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                        <feOffset dy="4" />
                        <feGaussianBlur stdDeviation="7" />
                        <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.15 0" />
                        <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_273_2398" />
                        <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_273_2398" result="shape" />
                    </filter>
                    <clipPath id="clip0_273_2398">
                        <rect width="12" height="12" fill="white" transform="translate(25 21)" />
                    </clipPath>
                </defs>
            </svg>

        ),

        instagram: (
            <svg className={className} width="62" height="62" viewBox="0 0 62 62" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g filter="url(#filter0_d_273_2402)">
                    <circle cx="31" cy="27" r="17" fill="#FAFAFA" />
                </g>
                <g clip-path="url(#clip0_273_2402)">
                    <path d="M34.481 20H28.519C26.5786 20 25 21.5786 25 23.519V29.4811C25 31.4214 26.5786 33 28.519 33H34.4811C36.4214 33 38 31.4214 38 29.4811V23.519C38 21.5786 36.4214 20 34.481 20V20ZM37.2379 29.4811C37.2379 31.0012 36.0012 32.2379 34.481 32.2379H28.519C26.9988 32.2379 25.7621 31.0012 25.7621 29.4811V23.519C25.7621 21.9988 26.9988 20.7621 28.519 20.7621H34.4811C36.0012 20.7621 37.2379 21.9988 37.2379 23.519V29.4811Z" fill="#1A202C" />
                    <path d="M31.4999 22.9453C29.5399 22.9453 27.9453 24.5399 27.9453 26.4999C27.9453 28.4599 29.5399 30.0545 31.4999 30.0545C33.4599 30.0545 35.0545 28.4599 35.0545 26.4999C35.0545 24.5399 33.4599 22.9453 31.4999 22.9453ZM31.4999 29.2924C29.9602 29.2924 28.7074 28.0397 28.7074 26.4999C28.7074 24.9602 29.9602 23.7074 31.4999 23.7074C33.0397 23.7074 34.2924 24.9602 34.2924 26.4999C34.2924 28.0397 33.0397 29.2924 31.4999 29.2924Z" fill="#1A202C" />
                    <path d="M35.1402 21.6831C34.561 21.6831 34.0898 22.1543 34.0898 22.7334C34.0898 23.3127 34.561 23.7839 35.1402 23.7839C35.7194 23.7839 36.1906 23.3127 36.1906 22.7334C36.1906 22.1542 35.7194 21.6831 35.1402 21.6831ZM35.1402 23.0217C34.9813 23.0217 34.852 22.8923 34.852 22.7334C34.852 22.5745 34.9813 22.4452 35.1402 22.4452C35.2992 22.4452 35.4285 22.5745 35.4285 22.7334C35.4285 22.8923 35.2992 23.0217 35.1402 23.0217Z" fill="#1A202C" />
                </g>
                <defs>
                    <filter id="filter0_d_273_2402" x="0" y="0" width="62" height="62" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                        <feFlood flood-opacity="0" result="BackgroundImageFix" />
                        <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                        <feOffset dy="4" />
                        <feGaussianBlur stdDeviation="7" />
                        <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.15 0" />
                        <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_273_2402" />
                        <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_273_2402" result="shape" />
                    </filter>
                    <clipPath id="clip0_273_2402">
                        <rect width="13" height="13" fill="white" transform="translate(25 20)" />
                    </clipPath>
                </defs>
            </svg>

        ),

        twiter: (
            <svg className={className} width="62" height="62" viewBox="0 0 62 62" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g filter="url(#filter0_d_273_2409)">
                    <circle cx="31" cy="27" r="17" fill="#FAFAFA" />
                </g>
                <g clip-path="url(#clip0_273_2409)">
                    <path d="M37 23.4692C36.5166 23.6812 36.0014 23.8218 35.4644 23.8901C36.0169 23.5602 36.4386 23.0418 36.6368 22.417C36.1217 22.7241 35.5529 22.9411 34.9468 23.0621C34.4577 22.5413 33.7606 22.2188 33.0001 22.2188C31.5246 22.2188 30.3367 23.4164 30.3367 24.8846C30.3367 25.0958 30.3546 25.2989 30.3984 25.4923C28.1828 25.3842 26.2222 24.3223 24.9051 22.7046C24.6752 23.1036 24.5403 23.5602 24.5403 24.0518C24.5403 24.9748 25.0156 25.7929 25.7241 26.2666C25.2959 26.2585 24.8759 26.1342 24.52 25.9384C24.52 25.9465 24.52 25.9571 24.52 25.9676C24.52 27.2627 25.4438 28.3385 26.6552 28.5863C26.4383 28.6456 26.2019 28.6741 25.9565 28.6741C25.7859 28.6741 25.6136 28.6643 25.4519 28.6286C25.7972 29.684 26.7771 30.4599 27.9423 30.4851C27.0355 31.1944 25.8842 31.6218 24.6378 31.6218C24.4193 31.6218 24.2096 31.6121 24 31.5852C25.1806 32.3466 26.5797 32.7812 28.0885 32.7812C32.9928 32.7812 35.674 28.7188 35.674 25.1974C35.674 25.0796 35.6699 24.9658 35.6643 24.8529C36.1932 24.4775 36.6376 24.0087 37 23.4692Z" fill="#1A202C" />
                </g>
                <defs>
                    <filter id="filter0_d_273_2409" x="0" y="0" width="62" height="62" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                        <feFlood flood-opacity="0" result="BackgroundImageFix" />
                        <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                        <feOffset dy="4" />
                        <feGaussianBlur stdDeviation="7" />
                        <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.15 0" />
                        <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_273_2409" />
                        <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_273_2409" result="shape" />
                    </filter>
                    <clipPath id="clip0_273_2409">
                        <rect width="13" height="13" fill="white" transform="translate(24 21)" />
                    </clipPath>
                </defs>
            </svg>

        ),

        inLink: (
            <svg className={className} width="62" height="62" viewBox="0 0 62 62" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g filter="url(#filter0_d_273_2416)">
                    <circle cx="31" cy="27" r="17" fill="#FAFAFA" />
                </g>
                <g clip-path="url(#clip0_273_2416)">
                    <path d="M35.9971 32V31.9996H35.9998V27.9653C35.9998 25.9917 35.575 24.4714 33.2677 24.4714C32.1585 24.4714 31.4142 25.0801 31.1103 25.6571H31.0783V24.6557H28.8906V31.9996H31.1685V28.3631C31.1685 27.4057 31.35 26.4799 32.5358 26.4799C33.704 26.4799 33.7215 27.5725 33.7215 28.4246V32H35.9971Z" fill="#1A202C" />
                    <path d="M25.1797 24.6562H27.4604V32.0001H25.1797V24.6562Z" fill="#1A202C" />
                    <path d="M26.3209 21C25.5917 21 25 21.5917 25 22.3209C25 23.0501 25.5917 23.6542 26.3209 23.6542C27.0501 23.6542 27.6418 23.0501 27.6418 22.3209C27.6414 21.5917 27.0497 21 26.3209 21V21Z" fill="#1A202C" />
                </g>
                <defs>
                    <filter id="filter0_d_273_2416" x="0" y="0" width="62" height="62" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                        <feFlood flood-opacity="0" result="BackgroundImageFix" />
                        <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                        <feOffset dy="4" />
                        <feGaussianBlur stdDeviation="7" />
                        <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.15 0" />
                        <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_273_2416" />
                        <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_273_2416" result="shape" />
                    </filter>
                    <clipPath id="clip0_273_2416">
                        <rect width="11" height="11" fill="white" transform="translate(25 21)" />
                    </clipPath>
                </defs>
            </svg>

        ),


    }
    return Icons[icon]
}

export default Icons;
