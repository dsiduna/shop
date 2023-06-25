import React from 'react'
import Image from 'next/image'
import Banner from './Banner'
import AboutComponent from './About'

const About = () => {
  return (
    <div>
      <Banner />
      <AboutComponent />
      <main>
        <div
          className="relative h-screen pt-16 pb-32 flex content-center items-center justify-center"
        >

          <div
            className="top-auto bottom-0 left-0 right-0 w-full absolute pointer-events-none overflow-hidden"
            style={{ height: '70px' }}
          >
            <svg
              className="absolute bottom-0 overflow-hidden"
              xmlns="http://www.w3.org/2000/svg"
              preserveAspectRatio="none"
              version="1.1"
              viewBox="0 0 2560 100"
              x="0"
              y="0"
            >
              <polygon
                className="text-gray-300 fill-current"
                points="2560 0 2560 100 0 100"
              ></polygon>
            </svg>
          </div>
        </div>

        <section id="about" className="relative py-20">
          <div
            className="bottom-auto top-0 left-0 right-0 w-full absolute pointer-events-none overflow-hidden -mt-20"
            style={{ height: '80px' }}
          >
            <svg
              className="absolute bottom-0 overflow-hidden"
              xmlns="http://www.w3.org/2000/svg"
              preserveAspectRatio="none"
              version="1.1"
              viewBox="0 0 2560 100"
              x="0"
              y="0"
            >
              <polygon
                className="text-white fill-current"
                points="2560 0 2560 100 0 100"
              ></polygon>
            </svg>
          </div>
          <div className="container mx-auto px-4">
            <div className="items-center flex flex-wrap">
              <div className="w-full md:w-4/12 ml-auto mr-auto px-4" data-aos="fade-right">
                <img
                  alt="..."
                  className="max-w-full rounded-lg shadow-lg"
                  src="https://source.unsplash.com/450x700/?gym"
                />
              </div>
              <div className="w-full md:w-5/12 px-4" data-aos="fade-left">
                <h3 className="mt-2 text-4xl font-bold"><span className="text-orange-500">Safe</span> Body Building</h3>
                <p className="mt-4 text-lg leading-relaxed">
                  The extension comes with three pre-built pages to help you get
                  started faster. You can change the text and images and you're
                  good to go.
                </p>
                <ul className="list-none mt-6">
                  <li className="py-2 text-gray-600">
                    <div className="flex items-center">
                      <div>
                        <span
                          className="font-semibold inline-block py-1 mr-3 text-orange-500"
                        ><i className="fas fa-dumbbell fa-2x"></i>
                        </span>
                      </div>
                      <div>
                        <h4 className="text-xl">
                          The latest & greatest gym equipment
                        </h4>
                      </div>
                    </div>
                  </li>
                  <li className="ml-1 py-2 text-gray-600">
                    <div className="flex items-center">
                      <div>
                        <span
                          className="font-semibold inline-block py-1 mr-3 text-orange-500"
                        ><i className="fas fa-hard-hat fa-2x"></i>
                        </span>
                      </div>
                      <div>
                        <h4 className="ml-2 text-xl">
                          5-inch, quality foam floor padding
                        </h4>
                      </div>
                    </div>
                  </li><li className="py-2 text-gray-600">
                    <div className="flex items-center">
                      <div>
                        <span
                          className="font-semibold inline-block py-1 mr-3 text-orange-500"
                        ><i className="fas fa-users fa-2x"></i>
                        </span>
                      </div>
                      <div>
                        <h4 className="ml-1 text-xl">
                          3 professional trainers
                        </h4>
                      </div>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        <section className="pb-20 relative block bg-gray-900">
          <div
            className="bottom-auto top-0 left-0 right-0 w-full absolute pointer-events-none overflow-hidden -mt-20"
            style={{ height: '80px' }}
          >
            <svg
              className="absolute bottom-0 overflow-hidden"
              xmlns="http://www.w3.org/2000/svg"
              preserveAspectRatio="none"
              version="1.1"
              viewBox="0 0 2560 100"
              x="0"
              y="0"
            >
              <polygon
                className="text-gray-900 fill-current"
                points="2560 0 2560 100 0 100"
              ></polygon>
            </svg>
          </div>
          <div className="container mx-auto px-4 pt-24 pb-40 lg:pb-64">
            <div className="flex flex-wrap text-center justify-center">
              <div className="w-full lg:w-6/12 px-4">
                <h2 className="text-4xl font-bold text-orange-500">Contact Us</h2>
                <p className="text-lg leading-relaxed mt-4 mb-4 text-gray-300">
                  Contact us to ask any questions, aquire a membership, or talk to our trainers
                </p>
              </div>
            </div>
          </div>

          <div className="container mx-auto px-4">
            <div className="flex flex-wrap justify-center lg:-mt-64 -mt-48">
              <div className="w-full lg:w-6/12 px-4">
                <div
                  className="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded-lg" data-aos="fade-up-right"
                >
                  <div className="flex-auto p-5 lg:p-10 text-gray-300">
                    <div className="relative w-full mb-6 mt-8">
                      <label
                        className="block uppercase text-xs font-bold mb-2"
                        htmlFor="full-name"
                      >Full Name</label>
                      <input
                        type="text"
                        className="border-0 px-3 py-3 placeholder-gray-400 text-gray-700 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full"
                        placeholder="Full Name"
                        style={{ transition: 'all 0.15s ease 0s' }}
                      />
                    </div>
                    <div className="relative w-full mb-6">
                      <label
                        className="block uppercase text-xs font-bold mb-2"
                        htmlFor="email"
                      >
                        Email
                      </label>
                      <input
                        type="email"
                        className="border-0 px-3 py-3 placeholder-gray-400 text-gray-700 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full"
                        placeholder="Email"
                        style={{ transition: 'all 0.15s ease 0s' }}
                      />
                    </div>
                    <div className="relative w-full mb-6">
                      <label
                        htmlFor="message"
                        className="block uppercase text-xs font-bold mb-2"
                      >
                        Message
                      </label>
                      <textarea
                        rows={4}
                        cols={80}
                        className="border-0 px-3 py-3 placeholder-gray-400 text-gray-700 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full"
                        placeholder="Type a message..."
                        id="message"
                      ></textarea>
                    </div>
                    <div className="text-center mt-6">
                      <button
                        className="bg-orange-500 text-white active:bg-gray-700 text-sm font-bold uppercase px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1"
                        type="button"
                        style={{ transition: 'all 0.15s ease 0s' }}
                      >
                        Send Message
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}

export default About



