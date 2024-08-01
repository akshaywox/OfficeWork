import React from 'react';
import Arrow from './Arrow';

function Header() {
  return (
    <>

      <header className='flex w-full h-24 bg-white-500 px-10 items-center'>
        <nav className='w-full'>
          <div className='flex justify-between'>
            <div className="link link--size-none pointer-events-auto">
              <a target="-self" aria-label="Welcome" href="/">
                <svg width="3.75rem" height="3.75rem" viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <circle cx="30" cy="30" r="30" fill="#0C0C0C"></circle>
                  <path d="M46.4007 39.0122L47.1352 38.2778L51.5549 38.2785L51.5542 42.692L50.8178 43.4284L50.0827 44.1667H45.666L45.6662 39.7467L46.4007 39.0122Z" fill="white"></path>
                  <path d="M23.4372 44.1666H15.9827L8.44531 15.8333H15.8998L19.7099 35.0524H19.7927L24.3897 15.8333H31.4301L36.027 35.0524H36.1099L38.6471 22.1912H45.6675L39.8371 44.1666H32.3826L27.9513 26.4929H27.8685L23.4372 44.1666Z" fill="white"></path>
                </svg>
              </a>
            </div>
            <div className='flex'>
              <div className="relative flex h-[50px] w-40 items-center justify-center overflow-hidden bg-white-800 text-white shadow-2xl rounded-2xl transition-all before:absolute before:left-0 before:h-full before:w-full before:bg-black before:transition-transform before:transition-border-radius before:duration-500 before:ease-out before:origin-bottom before:scale-y-0 before:rounded-t-full hover:before:scale-y-100 hover:before:h-400p hover:shadow-black-600">
                <span className="relative z-10 text-black transition-all duration-500 w-full h-full flex items-center justify-center hover:text-white">Welcome</span>
              </div>
              <div className="relative flex h-[50px] w-40 items-center justify-center overflow-hidden bg-white-800 text-white shadow-2xl rounded-2xl transition-all before:absolute before:left-0 before:h-full before:w-full before:bg-orange-600 before:transition-transform before:transition-border-radius before:duration-500 before:ease-out before:origin-bottom before:scale-y-0 before:rounded-t-full hover:before:scale-y-100 hover:before:h-400p hover:shadow-orange-600">
                <span className="relative z-10 text-black transition-all duration-500 hover:text-white ">Circle hover</span>
              </div>
              <div className="relative flex h-[50px] w-40 items-center justify-center overflow-hidden bg-white-800 text-white shadow-2xl rounded-2xl transition-all before:absolute before:left-0 before:h-full before:w-full before:bg-orange-600 before:transition-transform before:transition-border-radius before:duration-500 before:ease-out before:origin-bottom before:scale-y-0 before:rounded-t-full hover:before:scale-y-100 hover:before:h-400p hover:shadow-orange-600">
                <span className="relative z-10 text-black transition-all duration-500 hover:text-white">Circle hover</span>
              </div>
              <div className='bg-black flex '>
                {/* <Arrow/> */}
                <span className='text-white'>let's talk about it</span>
                <div className=" w-fit bg-white text-gray-800 rounded-full hover:bg-gray-200">
                  <div className=" transition-all duration-500 hover:animate-rotateAnimation">
                    <svg xmlns="http://www.w3.org/2000/svg" width="10%" height="10%" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1" stroke-linecap="round" >
                      <path d="M7 7h10v10"></path>
                      <path d="M7 16 16 7"></path>
                    </svg>
                  </div>
                </div>

              </div>
              {/* <Arrow/> */}





            </div>
          </div>
        </nav>
      </header>































      <div
        className="flex items-center w-full h-6rem pos-fixed left-0 top-0 z-99 bg-white transition-ease-0.4s"
        style={{ transform: 'translate(0px, 0px)' }}
      >
        <div className="flex items-center justify-center w-full bg-transparent rounded-b-none rounded-t-none">
          <div className="grid grid-cols-12 md:grid-cols-6 xl:grid-cols-12 gap-y-6 px-2 md:px-5 xl:px-10 w-full max-w-1920px">
            <div>

            </div>
            <div className="col-start-2 col-end--1 flex justify-flex-end">
              <div className="flex items-center gap-8 flex-row text-primary mr-4">
                <div className="flex items-center gap-8 flex-row text-primary show-xl">
                  <div className="link link--size-sm link--variant-navbarActive pointer-events-auto">
                    <a target="-self" aria-label="home" href="/">
                      <span>Welcome</span>
                    </a>
                  </div>
                  <div className="link link--size-sm link--variant-navbar pointer-events-auto">
                    <a target="-self" aria-label="projects" href="/projects">
                      <span>Projects</span>
                    </a>
                  </div>
                  <div className="link link--size-sm link--variant-navbar pointer-events-auto">
                    <a target="-self" aria-label="services" href="/services">
                      <span>Services</span>
                    </a>
                  </div>
                  <div className="link link--size-sm link--variant-navbar pointer-events-auto">
                    <a target="-self" aria-label="about" href="/about">
                      <span>About</span>
                    </a>
                  </div>
                  <div className="link link--size-sm link--variant-navbar pointer-events-auto">
                    <a target="-self" aria-label="news" href="/news">
                      <span>News</span>
                    </a>
                  </div>
                </div>
                <button
                  aria-label="Menu"
                  className="button button--variant-primary button--size-md z-5 border-primary border-w-1 rounded-full p-2 hide-xl"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="lucide lucide-menu"
                  >
                    <line x1="4" x2="20" y1="12" y2="12"></line>
                    <line x1="4" x2="20" y1="6" y2="6"></line>
                    <line x1="4" x2="20" y1="18" y2="18"></line>
                  </svg>
                </button>
                <div
                  className="hide-xl pos-fixed bg-primary h-0 w-0 top-0 right-0 left-100dvw rounded-bl-full z-99"
                  style={{ borderBottomLeftRadius: '9999px', left: '100dvw', width: '0rem', height: '0rem' }}
                >
                  <div style={{ opacity: 0 }}>
                    <div className="flex items-center justify-center w-full bg-transparent rounded-b-none rounded-t-none">
                      <div className="flex grid-cols-repeat(1,-minmax(0,-1fr)) md:grid-cols-repeat(6,-minmax(0,-1fr)) xl:grid-cols-repeat(12,-minmax(0,-1fr)) gap-y-6 px-2 md:px-5 xl:px-10 w-full max-w-1920px h-100dvh flex-column flex-1">
                        <div className="col-start-1 col-end--1">
                          <div className="vertical-spacer vertical-spacer--size-sm"></div>
                          <div className="flex items-center justify-space-between gap-10px flex-row">
                            <svg width="3.75rem" height="3.75rem" viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg">
                              <circle cx="30" cy="30" r="30" fill="white"></circle>
                              <path d="M46.4007 39.0122L47.1352 38.2778L51.5549 38.2785L51.5542 42.692L50.8178 43.4284L50.0827 44.1667H45.666L45.6662 39.7467L46.4007 39.0122Z" fill="#0C0C0C"></path>
                              <path d="M23.4372 44.1666H15.9827L8.44531 15.8333H15.8998L19.7099 35.0524H19.7927L24.3897 15.8333H31.4301L36.027 35.0524H36.1099L38.6471 22.1912H45.6675L39.8371 44.1666H32.3826L27.9513 26.4929H27.8685L23.4372 44.1666Z" fill="#0C0C0C"></path>
                            </svg>
                            <button
                              aria-label="Close"
                              className="button button--variant-close button--size-none text-white"
                            >
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="24"
                                height="24"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                className="lucide lucide-x"
                                style={{ height: '100%', width: '100%' }}
                              >
                                <path d="M18 6 6 18"></path>
                                <path d="m6 6 12 12"></path>
                              </svg>
                            </button>
                          </div>
                        </div>
                        <div className="col-start-1 col-end--1">
                          <div className="vertical-spacer vertical-spacer--size-lg"></div>
                        </div>
                        <div className="col-start-1 col-end--1 flex flex-1">
                          <div className="flex items-flex-start justify-flex-start gap-var(--spacing-gap-sm) flex-column">
                            <div className="link link--size-none pointer-events-auto text-decor-underline text-decor-white">
                              <a target="-self" aria-label="Welcome" href="/">
                                <p className="text-white textStyle-h1">Accueil</p>
                              </a>
                            </div>
                            <div className="link link--size-none pointer-events-auto text-decor-none text-decor-white">
                              <a target="-self" aria-label="Projects" href="/projects">
                                <p className="text-white textStyle-h1">Projects</p>
                              </a>
                            </div>
                            <div className="link link--size-none pointer-events-auto text-decor-none text-decor-white">
                              <a target="-self" aria-label="Services" href="/services">
                                <p className="text-white textStyle-h1">Services</p>
                              </a>
                            </div>
                            <div className="link link--size-none pointer-events-auto text-decor-none text-decor-white">
                              <a target="-self" aria-label="About" href="/about">
                                <p className="text-white textStyle-h1">About</p>
                              </a>
                            </div>
                            <div className="link link--size-none pointer-events-auto text-decor-none text-decor-white">
                              <a target="-self" aria-label="News" href="/news">
                                <p className="text-white textStyle-h1">News</p>
                              </a>
                            </div>
                          </div>
                        </div>
                        <div className="col-start-1 col-end--1">
                          <div className="vertical-spacer vertical-spacer--size-lg"></div>
                          <div className="vertical-spacer vertical-spacer--size-sm"></div>
                        </div>
                        <div className="col-start-1 col-end--1">
                          <div className="flex items-flex-start justify-flex-start flex-column gap-var(--spacing-gap-md)">
                            <div className="button button--variant-primary button--size-md w-full text-primary pointer-events-auto text-center">
                              <a aria-label="Get in touch" href="/contact">
                                <span>Get in touch</span>
                              </a>
                            </div>
                          </div>
                        </div>
                        <div className="col-start-1 col-end--1">
                          <div className="vertical-spacer vertical-spacer--size-sm"></div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="link link--size-sm link--variant-primary pointer-events-auto">
                  <a aria-label="Get in touch" href="/contact">
                    <span>Get in touch</span>
                  </a>
                </div>
              </div>
              <button class="relative flex h-[50px] w-40 items-center justify-center overflow-hidden bg-white-800 text-white shadow-2xl rounded-2xl transition-all before:absolute before:left-0 before:h-full before:w-full before:bg-orange-600 before:transition-transform before:transition-border-radius before:duration-500 before:ease-out before:origin-bottom before:scale-y-0 before:rounded-t-full hover:before:scale-y-100 hover:before:h-400p hover:shadow-orange-600">
                <span class="relative z-10">Circle hover</span>
              </button>

            </div>
          </div>
        </div>
      </div>
    </>

  );
}

export default Header;

// //
// .btn{
//   border:1px solid #3498db;
//   background:none;
//   padding:10px 20px;
//   transition:0.8s
//   position relative
// }
// .btn:hover{
//   color: #FFFFFF;
// }
// .btn:before{
//   content:""
//   position:absoplute
// }








