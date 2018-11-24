/*
 * Media queries
 *
 * Apply conditional styles based on device width, e.g.:
 * [mq.phone]: {
 *   color: 'red',
 * },
 *
 */

const mq = {
  phone: '@media only screen and (max-width: 599px)',
  tablet: '@media only screen and (min-width: 600px) and (max-width: 899px)',
  laptop: '@media only screen and (min-width: 900px) and (max-width: 1199px)',
  desktop: '@media only screen and (min-width: 1200px) and (max-width: 1799px)',
  bigDesktop: '@media only screen and (min-width: 1800px)',
}

export default mq
