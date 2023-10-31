import React from 'react'

export const metadata = {
  title: 'Terms & Conditions - Internet Solutions',
}

const Terms = () => {
  return (
    <div className="container mx-auto py-10 px-4 md:px-6">
      <div className="max-w-xl mx-auto bg-white shadow-lg rounded-lg px-8 py-6">
        <h1 className="text-3xl md:text-4xl font-semibold text-gray-800 mb-6">Terms and Conditions</h1>
        <div className="prose">
          <h2 className='font-semibold text-xl pb-2'>Disclaimer of Liability</h2>
          <p className="mb-4">
            The information provided by Internet Solutions on this website is for general informational purposes only. While we strive to keep the information up to date and accurate, we make no representations or warranties of any kind, express or implied, about the completeness, accuracy, reliability, suitability, or availability with respect to the website or the information, products, services, or related graphics contained on the website for any purpose.
          </p>
          <p className="mb-4">
            In no event will Internet Solutions be liable for any loss or damage, including without limitation, indirect or consequential loss or damage, or any loss or damage arising from loss of data or profits arising out of, or in connection with, the use of this website.
          </p>
          <p className="mb-4">
            Through this website, you can link to other websites that are not under the control of Internet Solutions. We have no control over the nature, content, and availability of those sites. The inclusion of any links does not necessarily imply a recommendation or endorse the views expressed within them.
          </p>
          <p className="mb-4">
            Every effort is made to keep the website up and running smoothly. However, Internet Solutions takes no responsibility for, and will not be liable for, the website being temporarily unavailable due to technical issues beyond our control.
          </p>
          <h2 className='font-semibold text-xl pb-2'>Acceptance of Terms</h2>
          <p className="mb-4">
            By accessing this website, you agree to be bound by these Terms and Conditions. If you do not agree with any part of these terms, please do not use our website.
          </p>
        </div>
      </div>
    </div>
  )
}

export default Terms
