import React from "react"
import { motion } from "framer-motion"

const DiamondShapes: React.FC = () => {
  return (
    <>
      {/* Left side diamonds */}
      <motion.div
        className="absolute left-10 top-1/2 transform -translate-y-1/2 z-10 hidden md:block"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.3 }}
      >
        <svg xmlns="http://www.w3.org/2000/svg" width="167" height="159" viewBox="0 0 167 159" fill="none">
          <g clipPath="url(#clip0_306_1336)">
            <path d="M82.8383 125.981L66.3239 141.73L82.8384 157.478L99.3528 141.73L82.8383 125.981Z" fill="#FFE29D" />
            <path
              d="M82.8383 94.4834L66.3239 110.232L82.8384 125.981L99.3528 110.232L82.8383 94.4834Z"
              fill="#FDFAF8"
            />
            <path
              d="M82.8338 62.9893L66.3193 78.7379L82.8338 94.4865L99.3483 78.7379L82.8338 62.9893Z"
              fill="#FDFAF8"
            />
            <path
              d="M82.8339 61.6097L67.7668 47.2413L82.8339 32.873L97.901 47.2413L82.8339 61.6097Z"
              stroke="#FDFAF8"
              strokeWidth="2"
            />
            <path
              d="M82.8339 -0.000375713L66.3194 15.7482L82.8339 31.4968L99.3484 15.7482L82.8339 -0.000375713Z"
              fill="#FDFAF8"
            />
            <path d="M82.837 121.754L80.6203 123.868L82.837 125.982L85.0538 123.868L82.837 121.754Z" fill="#FFE29D" />
            <path d="M82.8417 117.523L80.625 119.637L82.8417 121.751L85.0585 119.637L82.8417 117.523Z" fill="#FFE29D" />
            <path
              d="M78.4064 117.524L76.1897 119.638L78.4064 121.752L80.6232 119.638L78.4064 117.524Z"
              fill="#FFE29D"
            />
            <path d="M82.8417 113.295L80.625 115.409L82.8417 117.523L85.0585 115.409L82.8417 113.295Z" fill="#FFE29D" />
            <path
              d="M87.2769 113.294L85.0601 115.408L87.2769 117.522L89.4936 115.408L87.2769 113.294Z"
              fill="#FFE29D"
            />
            <path d="M82.8417 109.065L80.625 111.179L82.8417 113.293L85.0585 111.179L82.8417 109.065Z" fill="#FFE29D" />
          </g>
          <defs>
            <clipPath id="clip0_306_1336">
              <rect width="166.733" height="159" fill="white" transform="translate(0.267456)" />
            </clipPath>
          </defs>
        </svg>
      </motion.div>

      {/* Right side diamonds */}
      <motion.div
        className="absolute right-10 bottom-1/4 z-10 hidden md:block"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.5 }}
      >
        <svg xmlns="http://www.w3.org/2000/svg" width="120" height="120" viewBox="0 0 167 159" fill="none">
          <g clipPath="url(#clip0_306_1336)">
            <path d="M82.8383 125.981L66.3239 141.73L82.8384 157.478L99.3528 141.73L82.8383 125.981Z" fill="#FFE29D" />
            <path
              d="M82.8383 94.4834L66.3239 110.232L82.8384 125.981L99.3528 110.232L82.8383 94.4834Z"
              fill="#FDFAF8"
            />
            <path
              d="M82.8338 62.9893L66.3193 78.7379L82.8338 94.4865L99.3483 78.7379L82.8338 62.9893Z"
              fill="#FDFAF8"
            />
            <path
              d="M82.8339 61.6097L67.7668 47.2413L82.8339 32.873L97.901 47.2413L82.8339 61.6097Z"
              stroke="#FDFAF8"
              strokeWidth="2"
            />
            <path d="M82.837 121.754L80.6203 123.868L82.837 125.982L85.0538 123.868L82.837 121.754Z" fill="#FFE29D" />
            <path d="M82.8417 117.523L80.625 119.637L82.8417 121.751L85.0585 119.637L82.8417 117.523Z" fill="#FFE29D" />
            <path
              d="M78.4064 117.524L76.1897 119.638L78.4064 121.752L80.6232 119.638L78.4064 117.524Z"
              fill="#FFE29D"
            />
          </g>
          <defs>
            <clipPath id="clip0_306_1336">
              <rect width="166.733" height="159" fill="white" transform="translate(0.267456)" />
            </clipPath>
          </defs>
        </svg>
      </motion.div>
    </>
  )
}

export default DiamondShapes

