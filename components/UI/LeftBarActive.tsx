import React from 'react'

const LeftBarActive = () => {
    return (
        <svg width="21" height="56" viewBox="0 0 21 56" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g filter="url(#filter0_d_760_1117)">
                <path d="M8 8H9C11.2091 8 13 9.79086 13 12V44C13 46.2091 11.2091 48 9 48H8V8Z" fill="#FFB422" />
            </g>
            <defs>
                <filter id="filter0_d_760_1117" x="0" y="0" width="21" height="56" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                    <feFlood floodOpacity="0" result="BackgroundImageFix" />
                    <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                    <feOffset />
                    <feGaussianBlur stdDeviation="4" />
                    <feComposite in2="hardAlpha" operator="out" />
                    <feColorMatrix type="matrix" values="0 0 0 0 1 0 0 0 0 0.793203 0 0 0 0 0.113725 0 0 0 0.5 0" />
                    <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_760_1117" />
                    <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_760_1117" result="shape" />
                </filter>
            </defs>
        </svg>

    )
}

export default LeftBarActive