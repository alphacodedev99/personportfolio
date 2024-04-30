import React from 'react'

function Footer() {
  const [isVisible, setIsVisible] = React.useState(false);

  function toggleVisibility() {
    const visibleBtn = window.scrollY;
    visibleBtn > 100 ? setIsVisible(() => true) : setIsVisible(() => false);
  }

  React.useEffect(() => {
    window.addEventListener('scroll', toggleVisibility);
    return () => {
      window.removeEventListener("scroll", toggleVisibility);
    };
  }, []);

  const handleClick = (event) => {
    const anchor = (event.target.ownerDocument || document).querySelector(
      '#back-to-top-anchor',
    );
console.log('go to top');
    if (anchor) {
      anchor.scrollIntoView({
        block: 'center',
      });
    }
  };

  return (
    <div className='footer'>
        <p>Made By AlphaCode</p>
        <div
        onClick={handleClick}
        className={isVisible ? "scroll-to-top-btn" : "scroll-to-top-btn--show-btn"}
        >
          <svg fill="#000000" height="25px" width="20px" version="1.1" id="Layer_1" viewBox="0 0 511.735 511.735">
          <g>
            <g>
              <path d="M508.788,371.087L263.455,125.753c-4.16-4.16-10.88-4.16-15.04,0L2.975,371.087c-4.053,4.267-3.947,10.987,0.213,15.04
                c4.16,3.947,10.667,3.947,14.827,0l237.867-237.76l237.76,237.76c4.267,4.053,10.987,3.947,15.04-0.213
                C512.734,381.753,512.734,375.247,508.788,371.087z"/>
            </g>
          </g>
          </svg>
        </div>
    </div>
  )
}

export default Footer