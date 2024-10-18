import React from 'react';
import Form from './Form';
import Footer from '../footer/Footer';

const Contact = () => {
  const contacts = [
    {
      id: 1,
      title: 'Head Office',
      description: 'Jln Cempaka Wangi No 22\nJakarta - Indonesia',
      icon: '🏢', // Replace this with an appropriate SVG icon if needed
    },
    {
      id: 2,
      title: 'Email Support',
      description: 'support@yourdomain.tld\nhello@yourdomain.tld',
      icon: '✉️', // Replace this with an appropriate SVG icon if needed
    },
    {
      id: 3,
      title: 'Call Us',
      description: 'Phone : (+6221) 2002 2012\nFax : (+6221) 2002 2013',
      icon: '📞', // Replace this with an appropriate SVG icon if needed
    },
  ];

  return (
    <>
    <div className="bg-gray-700 text-gray-200 py-16 px-6">
      <div className="text-center mb-12">
        <h3 className="text-xs font-medium uppercase tracking-widest text-gray-400 mb-2">
          Get in Touch
        </h3>
        <h2 className="text-xl md:text-4xl font-semibold md:font-semibold text-gray-300">
          Seamless Communication,<br />Global Impact.
        </h2>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto md:px-24 opacity-65">
        {contacts.map((contact) => (
          <div
            key={contact.id}
            className="flex flex-col items-center bg-gray-800 p-6 rounded-lg shadow-lg"
          >
            <div className="w-16 h-16 flex items-center justify-center bg-yellow-50 rounded-full mb-4 text-3xl">
              {contact.icon}
            </div>
            <h4 className="text-lg font-semibold text-white mb-2">
              {contact.title}
            </h4>
            <p className="text-center text-gray-300 whitespace-pre-line">
              {contact.description}
            </p>
          </div>
        ))}
      </div>
    </div>
    <div>
        <Form/>
    </div>
    <div>
        <Footer/>
    </div>
    </>
  );
};

export default Contact;
