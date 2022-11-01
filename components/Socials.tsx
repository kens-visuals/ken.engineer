import { motion, Variants } from 'framer-motion';

interface SVGTypes {
  link: string;
  svg: JSX.Element;
}

const socials: SVGTypes[] = [
  {
    link: 'https://github.com/kens-visuals',
    svg: (
      <svg
        width="51"
        height="51"
        viewBox="0 0 51 51"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M25.4911 1.27499C19.4751 1.27812 13.6565 3.40884 9.07553 7.28616C4.49457 11.1635 1.45004 16.5346 0.486317 22.439C-0.477403 28.3435 0.702524 34.3963 3.81514 39.5151C6.92775 44.6339 11.7701 48.485 17.4762 50.3797C18.7351 50.6133 19.2093 49.8331 19.2093 49.1697C19.2093 48.5063 19.1841 46.5828 19.1757 44.4799C12.126 46.0028 10.6364 41.505 10.6364 41.505C9.48659 38.5844 7.82487 37.8167 7.82487 37.8167C5.52533 36.2562 7.99694 36.2854 7.99694 36.2854C10.5441 36.4648 11.8827 38.8848 11.8827 38.8848C14.1402 42.7359 17.8119 41.6219 19.2554 40.971C19.482 39.3396 20.1409 38.2297 20.8668 37.5997C15.2354 36.9655 9.31874 34.8042 9.31874 25.1493C9.28383 22.6454 10.2183 20.2239 11.9288 18.3859C11.6686 17.7517 10.8 15.1899 12.1764 11.7101C12.1764 11.7101 14.3039 11.0342 19.1464 14.2928C23.2999 13.1634 27.6822 13.1634 31.8358 14.2928C36.6741 11.0342 38.7973 11.7101 38.7973 11.7101C40.1779 15.1815 39.3093 17.7434 39.0491 18.3859C40.765 20.2242 41.7015 22.6499 41.6634 25.1577C41.6634 34.8334 35.7341 36.9655 30.0943 37.5872C31.0007 38.3716 31.8106 39.9028 31.8106 42.2561C31.8106 45.6273 31.7812 48.3394 31.7812 49.1697C31.7812 49.8414 32.2386 50.6258 33.5227 50.3797C39.2295 48.4848 44.0723 44.633 47.1849 39.5133C50.2974 34.3936 51.4767 28.3399 50.5119 22.4349C49.5471 16.5299 46.501 11.1588 41.9186 7.28212C37.3361 3.40546 31.5161 1.27614 25.4994 1.27499H25.4911Z"
          className="fill-primary-dark dark:fill-primary-light"
        />
        <path
          d="M9.74618 37.4536C9.69163 37.5788 9.49021 37.6164 9.32656 37.5288C9.1629 37.4411 9.04122 37.2784 9.09997 37.1491C9.15872 37.0197 9.35594 36.9863 9.51959 37.074C9.68325 37.1616 9.80912 37.3285 9.74618 37.4536Z"
          className="fill-primary-dark dark:fill-primary-light"
        />
        <path
          d="M10.7743 38.5927C10.6874 38.6362 10.588 38.6484 10.4931 38.6271C10.3982 38.6058 10.3137 38.5523 10.254 38.4759C10.0903 38.3006 10.0568 38.0586 10.1826 37.9501C10.3085 37.8417 10.5351 37.8917 10.6988 38.067C10.8625 38.2422 10.9002 38.4842 10.7743 38.5927Z"
          className="fill-primary-dark dark:fill-primary-light"
        />
        <path
          d="M11.7731 40.0405C11.6178 40.149 11.3534 40.0405 11.2065 39.8235C11.1659 39.7846 11.1336 39.7379 11.1116 39.6863C11.0895 39.6347 11.0781 39.5792 11.0781 39.5231C11.0781 39.467 11.0895 39.4115 11.1116 39.3599C11.1336 39.3083 11.1659 39.2616 11.2065 39.2227C11.3618 39.1184 11.6262 39.2227 11.7731 39.4355C11.9199 39.6483 11.9241 39.932 11.7731 40.0405Z"
          className="fill-primary-dark dark:fill-primary-light"
        />
        <path
          d="M13.1284 41.4424C12.99 41.5968 12.7088 41.5551 12.478 41.3465C12.2472 41.1378 12.1927 40.8541 12.3312 40.7039C12.4696 40.5537 12.7508 40.5954 12.99 40.7999C13.2292 41.0043 13.2753 41.2922 13.1284 41.4424Z"
          className="fill-primary-dark dark:fill-primary-light"
        />
        <path
          d="M15.0292 42.2602C14.9663 42.4563 14.6809 42.5439 14.3956 42.4605C14.1102 42.377 13.9214 42.1434 13.9759 41.9431C14.0305 41.7428 14.32 41.651 14.6096 41.7428C14.8991 41.8346 15.0838 42.0557 15.0292 42.2602Z"
          className="fill-primary-dark dark:fill-primary-light"
        />
        <path
          d="M17.1023 42.4021C17.1023 42.6065 16.8673 42.7818 16.5652 42.7859C16.2631 42.7901 16.0155 42.6232 16.0155 42.4188C16.0155 42.2143 16.2505 42.0391 16.5526 42.0349C16.8547 42.0307 17.1023 42.1935 17.1023 42.4021Z"
          className="fill-primary-dark dark:fill-primary-light"
        />
        <path
          d="M19.0324 42.0808C19.0702 42.2853 18.8604 42.4981 18.5582 42.5481C18.2561 42.5982 17.9917 42.4772 17.954 42.2769C17.9162 42.0767 18.1344 41.8597 18.4281 41.8055C18.7219 41.7512 18.9946 41.8764 19.0324 42.0808Z"
          className="fill-primary-dark dark:fill-primary-light"
        />
      </svg>
    ),
  },
  {
    link: 'https://www.linkedin.com/in/karo-nersisyan-135118129/',
    svg: (
      <svg
        width="51"
        height="51"
        viewBox="0 0 51 51"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <rect
          width="51"
          height="51"
          rx="25.5"
          className="fill-primary-dark dark:fill-primary-light"
        />
        <g clipPath="url(#clip0_16_2509)">
          <path
            d="M10.625 14.5938C10.625 13.6365 10.96 12.8468 11.6301 12.2247C12.3001 11.6025 13.1712 11.2914 14.2432 11.2914C15.2962 11.2914 16.1481 11.5977 16.799 12.2103C17.469 12.8421 17.8041 13.6653 17.8041 14.6799C17.8041 15.5988 17.4786 16.3646 16.8277 16.9772C16.1577 17.609 15.277 17.9248 14.1858 17.9248H14.1571C13.1042 17.9248 12.2523 17.609 11.6014 16.9772C10.9504 16.3454 10.625 15.551 10.625 14.5938ZM10.9983 39.7204V20.538H17.3733V39.7204H10.9983ZM20.9054 39.7204H27.2804V29.0093C27.2804 28.3392 27.357 27.8223 27.5101 27.4586C27.7781 26.8077 28.185 26.2573 28.7306 25.8074C29.2762 25.3575 29.9606 25.1326 30.7838 25.1326C32.9279 25.1326 34 26.578 34 29.4688V39.7204H40.375V28.7221C40.375 25.8888 39.705 23.7399 38.3649 22.2753C37.0248 20.8108 35.2539 20.0786 33.0524 20.0786C30.5828 20.0786 28.6588 21.1411 27.2804 23.2661V23.3235H27.2517L27.2804 23.2661V20.538H20.9054C20.9437 21.1506 20.9628 23.0555 20.9628 26.2525C20.9628 29.4496 20.9437 33.9389 20.9054 39.7204Z"
            className="fill-primary-light dark:fill-primary-dark"
          />
        </g>
        <defs>
          <clipPath id="clip0_16_2509">
            <rect
              x="10.625"
              y="10.625"
              width="29.75"
              height="29.75"
              fill="white"
            />
          </clipPath>
        </defs>
      </svg>
    ),
  },
  {
    link: 'https://medium.com/@kens_visuals',
    svg: (
      <svg
        width="51"
        height="51"
        viewBox="0 0 51 51"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <rect
          width="51"
          height="51"
          rx="25.5"
          className="fill-primary-dark dark:fill-primary-light"
        />
        <path
          d="M27.6048 25.5639C27.6048 30.2935 23.8037 34.1275 19.1151 34.1275C14.4264 34.1275 10.625 30.2926 10.625 25.5639C10.625 20.8352 14.4261 17 19.1151 17C23.804 17 27.6048 20.8343 27.6048 25.5639Z"
          className="fill-primary-light dark:fill-primary-dark"
        />
        <path
          d="M36.9184 25.5639C36.9184 30.0158 35.0179 33.6261 32.6734 33.6261C30.3289 33.6261 28.4283 30.0158 28.4283 25.5639C28.4283 21.112 30.3286 17.5016 32.6731 17.5016C35.0176 17.5016 36.9181 21.1109 36.9181 25.5639"
          className="fill-primary-light dark:fill-primary-dark"
        />
        <path
          d="M40.728 25.5639C40.728 29.5517 40.0597 32.7864 39.235 32.7864C38.4103 32.7864 37.7423 29.5525 37.7423 25.5639C37.7423 21.5752 38.4106 18.3414 39.235 18.3414C40.0594 18.3414 40.728 21.575 40.728 25.5639Z"
          className="fill-primary-light dark:fill-primary-dark"
        />
      </svg>
    ),
  },
  {
    link: 'https://twitter.com/kens_visuals',
    svg: (
      <svg
        width="51"
        height="51"
        viewBox="0 0 51 51"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <rect
          width="51"
          height="51"
          rx="25.5"
          className="fill-primary-dark dark:fill-primary-light"
        />
        <path
          d="M20.8335 38.9513C32.1428 38.9513 38.3265 29.58 38.3265 21.4583C38.3265 21.1905 38.3265 20.9228 38.3138 20.6678C39.5123 19.8008 40.5578 18.717 41.3865 17.4803C40.29 17.9648 39.1043 18.2963 37.8548 18.4493C39.1298 17.6843 40.0988 16.4858 40.5578 15.045C39.372 15.7463 38.0588 16.2563 36.6563 16.5368C35.5343 15.3383 33.9405 14.5988 32.1683 14.5988C28.7768 14.5988 26.0228 17.3528 26.0228 20.7443C26.0228 21.2288 26.0738 21.7005 26.1885 22.1468C21.0758 21.8918 16.5495 19.4438 13.515 15.7208C12.9923 16.626 12.6863 17.6843 12.6863 18.8063C12.6863 20.9355 13.77 22.8225 15.4275 23.919C14.4203 23.8935 13.4768 23.613 12.648 23.154C12.648 23.1795 12.648 23.205 12.648 23.2305C12.648 26.214 14.7645 28.6875 17.5823 29.2613C17.0723 29.4015 16.524 29.478 15.963 29.478C15.5678 29.478 15.1853 29.4398 14.8028 29.3633C15.5805 31.8113 17.85 33.5835 20.5403 33.6345C18.4365 35.2793 15.7845 36.261 12.903 36.261C12.4058 36.261 11.9213 36.2355 11.4368 36.1718C14.127 37.9313 17.3655 38.9513 20.8335 38.9513Z"
          className="fill-primary-light dark:fill-primary-dark"
        />
      </svg>
    ),
  },
  {
    link: 'https://discordapp.com/users/kens_visuals#0900',
    svg: (
      <svg
        width="51"
        height="51"
        viewBox="0 0 51 51"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <rect
          width="51"
          height="51"
          rx="25.5"
          className="fill-primary-dark dark:fill-primary-light"
        />
        <path
          d="M36.2675 14.7229C34.3369 13.8097 32.2666 13.1369 30.1019 12.7516C30.0625 12.7442 30.0231 12.7628 30.0028 12.7999C29.7366 13.2881 29.4416 13.9249 29.2351 14.4255C26.9069 14.0662 24.5906 14.0662 22.3101 14.4255C22.1035 13.9138 21.7979 13.2881 21.5305 12.7999C21.5101 12.764 21.4708 12.7454 21.4313 12.7516C19.2679 13.1357 17.1976 13.8085 15.2657 14.7229C15.249 14.7303 15.2347 14.7427 15.2252 14.7588C11.2982 20.8064 10.2224 26.7054 10.7502 32.5313C10.7526 32.5598 10.7681 32.587 10.7896 32.6044C13.3805 34.5657 15.8902 35.7564 18.3533 36.5457C18.3927 36.5581 18.4345 36.5432 18.4596 36.5097C19.0422 35.6895 19.5616 34.8247 20.0069 33.9152C20.0332 33.862 20.0081 33.7988 19.9544 33.7777C19.1306 33.4556 18.3462 33.0628 17.5916 32.6168C17.5319 32.5808 17.5271 32.4928 17.582 32.4507C17.7408 32.3281 17.8996 32.2004 18.0513 32.0716C18.0787 32.048 18.1169 32.0431 18.1492 32.0579C23.1065 34.391 28.4733 34.391 33.3722 32.0579C33.4044 32.0418 33.4426 32.0468 33.4713 32.0703C33.6229 32.1992 33.7817 32.3281 33.9417 32.4507C33.9966 32.4928 33.993 32.5808 33.9333 32.6168C33.1788 33.0715 32.3943 33.4556 31.5693 33.7765C31.5156 33.7975 31.4917 33.862 31.518 33.9152C31.9728 34.8234 32.4922 35.6883 33.0641 36.5085C33.088 36.5432 33.131 36.5581 33.1704 36.5457C35.6455 35.7564 38.1552 34.5657 40.7461 32.6044C40.7688 32.587 40.7831 32.561 40.7855 32.5325C41.4171 25.7972 39.7276 19.9466 36.3069 14.7601C36.2986 14.7427 36.2843 14.7303 36.2675 14.7229ZM20.7472 28.9839C19.2548 28.9839 18.025 27.5715 18.025 25.8369C18.025 24.1022 19.2309 22.6898 20.7472 22.6898C22.2755 22.6898 23.4933 24.1146 23.4695 25.8369C23.4695 27.5715 22.2635 28.9839 20.7472 28.9839ZM30.8123 28.9839C29.3199 28.9839 28.0901 27.5715 28.0901 25.8369C28.0901 24.1022 29.296 22.6898 30.8123 22.6898C32.3406 22.6898 33.5584 24.1146 33.5346 25.8369C33.5346 27.5715 32.3406 28.9839 30.8123 28.9839Z"
          className="fill-primary-light dark:fill-primary-dark"
        />
      </svg>
    ),
  },
];

export default function Socials() {
  const listVariants: Variants = {
    initial: { opacity: 0 },
    animate: {
      opacity: 1,
      transition: {
        delayChildren: 0.5,
        staggerChildren: 0.2,
      },
    },
  };

  const listItemVariants: Variants = {
    initial: { opacity: 0, x: -50 },
    animate: { opacity: 1, x: 0 },
  };

  const socialIconsDisplay = socials.map(({ link, svg }) => (
    <motion.li variants={listItemVariants} key={link}>
      <a href={link} target="_blank" rel="noopener noreferrer">
        {svg}
      </a>
    </motion.li>
  ));

  return (
    <motion.ul
      initial="initial"
      whileInView="animate"
      variants={listVariants}
      viewport={{ once: true, amount: 'all' }}
      className="my-4 flex items-center justify-between md:basis-1/2 lg:gap-4"
    >
      {socialIconsDisplay}
    </motion.ul>
  );
}
