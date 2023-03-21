import React from 'react'

function Banner() {
    const appliedClassName = `w-100 py-5 position-relative d-flex flex-column justify-content-center align-items-center `;
    return (

        <div class={ appliedClassName }>

           <svg width="380" height="380" viewBox="0 0 380 380" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M126.666 101.333C128.346 101.333 129.957 100.666 131.145 99.4784C132.332 98.2907 133 96.6797 133 95V88.6667C133 86.987 132.332 85.3761 131.145 84.1884C129.957 83.0006 128.346 82.3334 126.666 82.3334C124.987 82.3334 123.376 83.0006 122.188 84.1884C121 85.3761 120.333 86.987 120.333 88.6667V95C120.333 96.6797 121 98.2907 122.188 99.4784C123.376 100.666 124.987 101.333 126.666 101.333Z" fill="white"/>
            <path d="M164.666 101.333C166.346 101.333 167.957 100.666 169.145 99.4784C170.332 98.2907 171 96.6797 171 95V88.6667C171 86.987 170.332 85.3761 169.145 84.1884C167.957 83.0006 166.346 82.3334 164.666 82.3334C162.987 82.3334 161.376 83.0006 160.188 84.1884C159 85.3761 158.333 86.987 158.333 88.6667V95C158.333 96.6797 159 98.2907 160.188 99.4784C161.376 100.666 162.987 101.333 164.666 101.333Z" fill="white"/>
            <path d="M131.144 115.856C129.932 114.792 128.361 114.231 126.75 114.286C125.139 114.341 123.61 115.008 122.474 116.152C121.337 117.295 120.68 118.829 120.635 120.44C120.591 122.051 121.162 123.619 122.233 124.824C128.462 131.041 136.903 134.533 145.704 134.533C154.505 134.533 162.946 131.041 169.175 124.824C170.359 123.63 171.02 122.015 171.012 120.335C171.005 118.654 170.331 117.045 169.137 115.862C168.546 115.276 167.846 114.812 167.076 114.497C166.306 114.182 165.481 114.021 164.649 114.025C162.968 114.032 161.359 114.706 160.176 115.9C156.324 119.742 151.106 121.899 145.666 121.899C140.226 121.899 135.008 119.742 131.156 115.9L131.144 115.856Z" fill="white"/>
            <path d="M361 272.333H275.12C277.424 268.509 278.649 264.132 278.667 259.667C278.647 253.346 276.251 247.265 271.954 242.63C272.177 241.998 272.305 241.336 272.334 240.667V228C272.309 218.66 269.985 209.47 265.567 201.241C261.148 193.012 254.772 185.997 247 180.817V164.667C246.985 159.632 244.979 154.808 241.419 151.248C237.859 147.688 233.035 145.682 228 145.667H185.06C190.948 138.389 194.698 129.618 195.89 120.333H202.667C207.702 120.318 212.525 118.312 216.085 114.752C219.645 111.192 221.652 106.368 221.667 101.333V95C221.658 92.343 221.09 89.7177 219.999 87.2951C218.907 84.8726 217.318 82.7072 215.334 80.94V44.3333C215.334 35.9348 211.997 27.8803 206.059 21.9416C200.12 16.003 192.066 12.6667 183.667 12.6667H177.334C173.566 12.6685 169.883 13.793 166.757 15.8967C163.991 11.0663 159.999 7.05225 155.183 4.26077C150.367 1.4693 144.9 -0.000543536 139.334 1.50775e-07H120.334C108.58 0.0134101 97.3115 4.68854 89.0003 12.9997C80.6891 21.311 76.014 32.5795 76.0006 44.3333V80.94C74.0165 82.7072 72.427 84.8726 71.3358 87.2951C70.2445 89.7177 69.676 92.343 69.6673 95V101.333C69.6823 106.368 71.6889 111.192 75.2489 114.752C78.8088 118.312 83.6328 120.318 88.6673 120.333H95.4439C96.6365 129.618 100.386 138.389 106.274 145.667H63.334C58.2995 145.682 53.4755 147.688 49.9156 151.248C46.3557 154.808 44.3491 159.632 44.334 164.667V180.817C36.5624 185.997 30.1859 193.012 25.7677 201.241C21.3494 209.47 19.0254 218.66 19.0007 228V240.667C19.0292 241.336 19.1573 241.998 19.3807 242.63C15.6581 246.598 13.3438 251.681 12.7944 257.094C12.2451 262.508 13.4912 267.951 16.3407 272.587C12.1341 273.166 8.24468 275.144 5.29798 278.202C2.35128 281.259 0.518566 285.219 0.094588 289.444C-0.32939 293.669 0.68001 297.914 2.96045 301.496C5.24089 305.078 8.65983 307.789 12.6674 309.193V373.667C12.6674 375.346 13.3347 376.957 14.5224 378.145C15.7101 379.333 17.321 380 19.0007 380C20.6804 380 22.2913 379.333 23.4791 378.145C24.6668 376.957 25.3341 375.346 25.3341 373.667V310.333H354.667V373.667C354.667 375.346 355.334 376.957 356.522 378.145C357.709 379.333 359.32 380 361 380C362.68 380 364.291 379.333 365.478 378.145C366.666 376.957 367.333 375.346 367.333 373.667V309.193C371.522 307.673 375.043 304.73 377.282 300.877C379.52 297.024 380.333 292.507 379.578 288.115C378.824 283.724 376.55 279.737 373.154 276.852C369.758 273.967 365.456 272.368 361 272.333V272.333ZM247 197.03C255.101 205.306 259.646 216.42 259.667 228V235.22C257.601 234.664 255.473 234.366 253.334 234.333H247V197.03ZM247 247H253.334C256.693 247 259.915 248.335 262.29 250.71C264.666 253.085 266 256.307 266 259.667C266 263.026 264.666 266.248 262.29 268.623C259.915 270.999 256.693 272.333 253.334 272.333H247V247ZM209 95V101.333C209 103.013 208.333 104.624 207.145 105.812C205.958 106.999 204.347 107.667 202.667 107.667H196.334V88.6667H202.667C204.347 88.6667 205.958 89.3339 207.145 90.5217C208.333 91.7094 209 93.3203 209 95ZM95.0006 107.667H88.6673C86.9876 107.667 85.3767 106.999 84.1889 105.812C83.0012 104.624 82.3339 103.013 82.3339 101.333V95C82.3339 93.3203 83.0012 91.7094 84.1889 90.5217C85.3767 89.3339 86.9876 88.6667 88.6673 88.6667H95.0006V107.667ZM95.0006 69.6667V76H88.6673V44.3333C88.6673 35.9348 92.0036 27.8803 97.9422 21.9416C103.881 16.003 111.935 12.6667 120.334 12.6667H139.334C144.368 12.6817 149.192 14.6883 152.752 18.2482C156.312 21.8082 158.319 26.6322 158.334 31.6667C158.334 33.3464 159.001 34.9573 160.189 36.145C161.376 37.3327 162.987 38 164.667 38C166.347 38 167.958 37.3327 169.145 36.145C170.333 34.9573 171 33.3464 171 31.6667C171 29.987 171.668 28.3761 172.855 27.1883C174.043 26.0006 175.654 25.3333 177.334 25.3333H183.667C188.702 25.3484 193.526 27.355 197.085 30.9149C200.645 34.4749 202.652 39.2988 202.667 44.3333V76H196.334V69.6667C196.319 64.6322 194.312 59.8082 190.752 56.2482C187.192 52.6883 182.368 50.6817 177.334 50.6667H114.001C108.966 50.6817 104.142 52.6883 100.582 56.2482C97.0222 59.8082 95.0156 64.6322 95.0006 69.6667V69.6667ZM183.667 69.6667V114C183.69 120.294 182.131 126.493 179.132 132.026C176.132 137.56 171.79 142.25 166.504 145.667H124.831C119.544 142.25 115.202 137.56 112.203 132.026C109.203 126.493 107.644 120.294 107.667 114V69.6667C107.667 67.987 108.334 66.3761 109.522 65.1883C110.71 64.0006 112.321 63.3333 114.001 63.3333H177.334C179.013 63.3333 180.624 64.0006 181.812 65.1883C183 66.3761 183.667 67.987 183.667 69.6667ZM57.0007 164.667C57.0007 162.987 57.6679 161.376 58.8556 160.188C60.0434 159.001 61.6543 158.333 63.334 158.333H228C229.68 158.333 231.291 159.001 232.479 160.188C233.666 161.376 234.334 162.987 234.334 164.667V272.333H57.0007V164.667ZM31.6674 228C31.6883 216.42 36.2338 205.306 44.334 197.03V234.333H38.0007C35.8611 234.366 33.7338 234.664 31.6674 235.22V228ZM38.0007 247H44.334V272.333H38.0007C34.6413 272.333 31.4195 270.999 29.044 268.623C26.6686 266.248 25.3341 263.026 25.3341 259.667C25.3341 256.307 26.6686 253.085 29.044 250.71C31.4195 248.335 34.6413 247 38.0007 247V247ZM361 297.667H19.0007C17.321 297.667 15.7101 296.999 14.5224 295.812C13.3347 294.624 12.6674 293.013 12.6674 291.333C12.6674 289.654 13.3347 288.043 14.5224 286.855C15.7101 285.667 17.321 285 19.0007 285H361C362.68 285 364.291 285.667 365.478 286.855C366.666 288.043 367.333 289.654 367.333 291.333C367.333 293.013 366.666 294.624 365.478 295.812C364.291 296.999 362.68 297.667 361 297.667Z" fill="white"/>
            <path d="M145.666 240.667C149.761 240.668 153.795 239.677 157.423 237.777C161.051 235.878 164.165 233.128 166.497 229.762C168.829 226.396 170.311 222.515 170.815 218.451C171.319 214.388 170.83 210.262 169.391 206.429C168.778 204.89 167.587 203.653 166.072 202.983C164.558 202.312 162.842 202.261 161.291 202.841C159.739 203.421 158.477 204.585 157.774 206.084C157.071 207.584 156.983 209.299 157.529 210.862C158.482 213.388 158.603 216.152 157.874 218.752C157.145 221.351 155.605 223.65 153.478 225.313C151.352 226.975 148.749 227.915 146.051 227.994C143.352 228.074 140.699 227.289 138.478 225.755C136.256 224.22 134.584 222.016 133.703 219.464C132.823 216.912 132.781 214.145 133.583 211.568C134.386 208.99 135.991 206.736 138.165 205.135C140.338 203.534 142.967 202.669 145.666 202.667C147.346 202.667 148.957 201.999 150.145 200.812C151.332 199.624 152 198.013 152 196.333C152 194.654 151.332 193.043 150.145 191.855C148.957 190.667 147.346 190 145.666 190C138.947 190 132.504 192.669 127.753 197.42C123.002 202.171 120.333 208.615 120.333 215.333C120.333 222.052 123.002 228.496 127.753 233.247C132.504 237.998 138.947 240.667 145.666 240.667Z" fill="white"/>
            <path d="M373.666 0H284.999C276.601 0 268.546 3.3363 262.608 9.27495C256.669 15.2136 253.333 23.2681 253.333 31.6667V126.667C253.333 133.385 256.002 139.829 260.753 144.58C265.504 149.331 271.947 152 278.666 152H373.666C375.346 152 376.956 151.333 378.144 150.145C379.332 148.957 379.999 147.346 379.999 145.667V6.33333C379.999 4.65363 379.332 3.04272 378.144 1.85499C376.956 0.66726 375.346 0 373.666 0V0ZM367.333 139.333H278.666C275.307 139.333 272.085 137.999 269.709 135.623C267.334 133.248 265.999 130.026 265.999 126.667C265.999 123.307 267.334 120.085 269.709 117.71C272.085 115.335 275.307 114 278.666 114H367.333V139.333ZM367.333 101.333H278.666C274.201 101.351 269.824 102.576 265.999 104.88V31.6667C266.014 26.6322 268.021 21.8082 271.581 18.2482C275.141 14.6883 279.965 12.6817 284.999 12.6667H367.333V101.333Z" fill="white"/>
            <path d="M284.999 95C286.679 95 288.29 94.3327 289.478 93.145C290.665 91.9573 291.333 90.3464 291.333 88.6667V25.3333C291.333 23.6536 290.665 22.0427 289.478 20.855C288.29 19.6673 286.679 19 284.999 19C283.32 19 281.709 19.6673 280.521 20.855C279.333 22.0427 278.666 23.6536 278.666 25.3333V88.6667C278.666 90.3464 279.333 91.9573 280.521 93.145C281.709 94.3327 283.32 95 284.999 95Z" fill="white"/>
            <path d="M310.333 63.3334H348.333C350.012 63.3334 351.623 62.6661 352.811 61.4784C353.999 60.2906 354.666 58.6797 354.666 57V31.6667C354.666 29.987 353.999 28.3761 352.811 27.1884C351.623 26.0006 350.012 25.3334 348.333 25.3334H310.333C308.653 25.3334 307.042 26.0006 305.854 27.1884C304.667 28.3761 304 29.987 304 31.6667V57C304 58.6797 304.667 60.2906 305.854 61.4784C307.042 62.6661 308.653 63.3334 310.333 63.3334ZM316.666 38H341.999V50.6667H316.666V38Z" fill="white"/>
            <path d="M342 69.6666H316.666C314.987 69.6666 313.376 70.3339 312.188 71.5216C311 72.7094 310.333 74.3203 310.333 76C310.333 77.6797 311 79.2906 312.188 80.4783C313.376 81.666 314.987 82.3333 316.666 82.3333H342C343.679 82.3333 345.29 81.666 346.478 80.4783C347.666 79.2906 348.333 77.6797 348.333 76C348.333 74.3203 347.666 72.7094 346.478 71.5216C345.29 70.3339 343.679 69.6666 342 69.6666Z" fill="white"/>
            <path d="M272.333 126.667C272.333 128.346 273 129.957 274.188 131.145C275.376 132.333 276.987 133 278.666 133H354.666C356.346 133 357.957 132.333 359.145 131.145C360.332 129.957 360.999 128.346 360.999 126.667C360.999 124.987 360.332 123.376 359.145 122.188C357.957 121.001 356.346 120.333 354.666 120.333H278.666C276.987 120.333 275.376 121.001 274.188 122.188C273 123.376 272.333 124.987 272.333 126.667Z" fill="white"/>
            </svg>


        </div>
    )
}

export default Banner