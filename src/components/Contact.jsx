import React from 'react';

const Contact = () => {
  return (
    <div id='contact' className='max-w-[1040px] m-auto md:pl-20 p-4 py-16'>
        <h1 className='py-4 text-4xl font-bold text-center text-[#001b5e]'>Contact</h1>
        <form action="https://getform.io/f/fba2832a-0c8f-4f63-9af6-f786701ad200" method='POST' encType='multipart/form-data'>
            <div className='grid md:grid-cols-2 gap-4 w-full py-2'>
                <div className='flex flex-col'>
                    <label className='uppercase text-sm py-2' htmlFor="name">Name</label>
                    <input className='border-2 rounded-lg p-3 flex border-gray-300 ' type="text" name='name' />
                </div>
                <div className='flex flex-col'>
                    <label className='uppercase text-sm py-2' htmlFor="phone">Phone</label>
                    <input className='border-2 rounded-lg p-3 flex border-gray-300 ' type="text" name='phone' />
                </div>
            </div>
            <div className='flex flex-col py-2'>
                <label className='uppercase text-sm py-2' htmlFor="email">Email</label>
                <input className='border-2 rounded-lg p-3 flex border-gray-300' type="email" name='email' />
            </div>
            <div className='flex flex-col py-2'>
                <label className='uppercase text-sm py-2' htmlFor="subject">Subject</label>
                <input className='border-2 rounded-lg p-3 flex border-gray-300' type="text" name='subject' />
            </div>
            <div className='flex flex-col py-2'>
                <label className='uppercase text-sm py-2' htmlFor="name">Message</label>
                <textarea className='border-2 rounded-lg p-3 border-gray-300' rows='10' name='message'></textarea>
            </div>
            <button className='bg-[#001b5e] text-gray-100 mt-4 w-full p-4 rounded-lg' type="submit">Send Message</button>
        </form>
    </div>
  );
};
export default Contact;