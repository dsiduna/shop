import React from 'react'

export const metadata = {
  title: 'Privacy Policy - Internet Solutions',
}

const Privacy = () => {
  return (
    <div className="container mx-auto py-10 px-4 md:px-6">
      <div className="max-w-xl mx-auto bg-white shadow-lg rounded-lg px-8 py-6">
        <h1 className="text-3xl md:text-4xl font-semibold text-gray-800 mb-6">Privacy Policy</h1>
        <div className="prose">
          <h2 className='font-semibold'>
            Introduction
          </h2>
          <p className='mb-4'>
            At Internet Solutions, we value the privacy of our customers and visitors. This Privacy Policy document outlines how we collect, use, and protect the personal information you provide to us.
          </p>
          <h2>
            <strong>Data Collection and Usage</strong>
          </h2>
          <p className='mb-4'>
            When you visit our website or make a purchase, we may collect personal information such as your name, email address, shipping address, and payment details. We use this information to process your orders, improve our services, and communicate with you regarding your purchases.
          </p>
          <p className='mb-4'>
            We may also collect non-personal information, such as your IP address and browser type, to analyze website traffic and enhance your browsing experience.
          </p>
          <h2>
            <strong>Data Protection and Security</strong>
          </h2>
          <p className='mb-4'>
            We take appropriate measures to protect your personal information from unauthorized access, disclosure, alteration, or destruction. We use industry-standard security protocols and encryption techniques to safeguard your data.
          </p>
          <h2>
            <strong>Third-Party Services</strong>
          </h2>
          <p className='mb-4'>
            We may utilize third-party services, such as payment gateways and shipping providers, to fulfill your orders. These services have their own privacy policies, and we encourage you to review them before providing any personal information.
          </p>
          <h2>
            <strong>Cookies</strong>
          </h2>
          <p className='mb-4'>
            Our website may use cookies to enhance your browsing experience. You have the option to disable cookies in your browser settings, although this may affect certain functionalities of the website.
          </p>
          <h2>
            <strong>Changes to the Privacy Policy</strong>
          </h2>
          <p className='mb-4'>
            We reserve the right to modify this Privacy Policy at any time. Any changes will be posted on this page, and the revised policy will be effective immediately upon posting.
          </p>
          <h2>
            <strong>Contact Us</strong>
          </h2>
          <p className='mb-4'>
            If you have any questions or concerns about our Privacy Policy, please contact us at privacy@internetsolutions.co.zw.
          </p>
        </div>
      </div>
    </div>
  )
}

export default Privacy
