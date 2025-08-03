import React from 'react'
import Navbar from '../components_lite/Navbar'
import amreshsir from './meenakshi.png'; // Import the local image
import ankit from './Ankit.jpg';
import ritik from './ritik.jpg';
import gaurav from './gaurav.jpg';

const Creator = () => {
  return (
    <div>
      <Navbar />
      <div className="flex flex-col items-center justify-center h-screen max-w-7xl mx-auto p-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center w-full">
          {/* Image Section */}
          <div className="flex justify-center">
            <img src={amreshsir} alt="Amresh Sir" className="h-80 object-cover rounded-lg shadow-md" />
          </div>
          {/* Text Section */}
          <div>
            <h2 className="text-2xl font-bold text-gray-800 mb-4">Meenakshi</h2>
<p className="text-gray-600 mb-2">
  I am currently pursuing my <strong>B.Tech in Computer Science and Engineering (CSE)</strong> and am in my <strong>final year</strong>. Over the past year, I have been actively building expertise in <strong>MERN Stack (MongoDB, Express.js, React.js, Node.js)</strong>.
</p>
<p className="text-gray-600 mb-2">
  I am passionate about <strong>software development</strong> and love creating dynamic and user-friendly web applications. I’ve worked on multiple full-stack projects that have enhanced my frontend and backend capabilities.
</p>
<p className="text-gray-600 mb-2">
  I regularly practice <strong>problem solving</strong> and take part in coding contests to sharpen my logical and analytical skills. My focus is on writing clean, efficient, and maintainable code.
</p>
<p className="text-gray-600">
  Currently, I’m also exploring <strong>Generative AI field</strong> 
</p>

          </div>
        </div>
      </div>
      
      <hr className="w-full border-gray-300 my-6" />
      
      <div className="text-center p-6">
        <h2 className="text-2xl font-bold text-gray-800 mb-6">Developers and Designers</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Developer 1 - Ankit Pathak */}
          <a href="https://ankitpathak.vercel.app/" target="_blank" rel="noopener noreferrer" className="block text-center">
            <img src={ankit} alt="Ankit Pathak" className="mx-auto rounded-lg shadow-md" />
            <h3 className="text-lg font-semibold text-gray-700 mt-2">Ankit Pathak</h3>
            <p className="text-gray-600 text-sm">Registration No: 21110125035</p>
            <p className="text-gray-600 text-sm">Full Stack Developer</p>
          </a>
          {/* Developer 2 - Ritik Shrivastava */}
          <a href="#" className="block text-center">
            <img src={ritik} alt="Ritik Shrivastava" className="mx-auto rounded-lg shadow-md" />
            <h3 className="text-lg font-semibold text-gray-700 mt-2">Ritik Shrivastava</h3>
            <p className="text-gray-600 text-sm">Registration No: 21110125043</p>
            <p className="text-gray-600 text-sm">UI/UX Designer</p>
          </a>
          {/* Developer 3 - Gaurav Kumar */}
          <a href="#" className="block text-center">
            <img src={gaurav} alt="Gaurav Kumar" className="mx-auto rounded-lg shadow-md" />
            <h3 className="text-lg font-semibold text-gray-700 mt-2">Gaurav Kumar</h3>
            <p className="text-gray-600 text-sm">Registration No: 21110125023</p>
            <p className="text-gray-600 text-sm">Research</p>
          </a>
        </div>
      </div>
    </div>
  )
}

export default Creator