import React from 'react'

const Icons = ({ icon, className, pathName }) => {

    const Icons = {

        arrowRight: (
            <svg className={className} width="17" height="8" viewBox="0 0 17 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path className={pathName} d="M16.1122 4.03568C16.3075 3.84042 16.3075 3.52384 16.1122 3.32857L12.9302 0.146594C12.735 -0.0486683 12.4184 -0.0486683 12.2231 0.146594C12.0279 0.341856 12.0279 0.658439 12.2231 0.853701L15.0516 3.68213L12.2231 6.51055C12.0279 6.70582 12.0279 7.0224 12.2231 7.21766C12.4184 7.41292 12.735 7.41292 12.9302 7.21766L16.1122 4.03568ZM4.37114e-08 4.18213L15.7587 4.18213L15.7587 3.18213L-4.37114e-08 3.18213L4.37114e-08 4.18213Z" fill="white" />
            </svg>

        ),


    }
    return Icons[icon]
}

export default Icons