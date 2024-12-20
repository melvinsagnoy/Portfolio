import React from 'react';
import { Mail, Github, Linkedin, Facebook } from 'lucide-react';

const Contact = () => {
  return (
    <section
      id="contact"
      className="py-12 bg-gradient-to-br from-indigo-100 to-purple-100"
    >
      <div className="container mx-auto px-4 max-w-4xl">
        <div className="flex flex-col sm:flex-row items-center mb-8">
          <Mail className="w-10 h-10 text-purple-600 mb-4 sm:mb-0 sm:mr-4" />
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-800 text-center sm:text-left">
            Get In Touch
          </h2>
        </div>

        <div className="bg-white p-6 sm:p-8 rounded-xl shadow-2xl">
          <p className="text-gray-700 text-base sm:text-lg mb-6 text-center sm:text-justify leading-relaxed">
            I’m available for any queries, collaborations, or just to connect.
            You can reach me through the platforms below!
          </p>

          {/* Contact Information */}
          <div className="flex flex-col space-y-6">
            {/* Email */}
            <div className="flex flex-col sm:flex-row justify-between items-center">
              <div className="flex items-center space-x-4">
                <Mail className="w-6 h-6 text-purple-600" />
                <span className="font-semibold text-gray-700">Email</span>
              </div>
              <a
                href="mailto:melvinpadayo8@gmail.com"
                className="text-blue-600 hover:underline text-center sm:text-right mt-2 sm:mt-0"
              >
                melvinpadayo8@gmail.com
              </a>
            </div>

            {/* GitHub */}
            <div className="flex flex-col sm:flex-row justify-between items-center">
              <div className="flex items-center space-x-4">
                <Github className="w-6 h-6 text-gray-800" />
                <span className="font-semibold text-gray-700">GitHub</span>
              </div>
              <a
                href="https://github.com/melvinsagnoy"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 hover:underline text-center sm:text-right mt-2 sm:mt-0"
              >
                github.com/melvinsagnoy
              </a>
            </div>

            {/* LinkedIn */}
            <div className="flex flex-col sm:flex-row justify-between items-center">
              <div className="flex items-center space-x-4">
                <Linkedin className="w-6 h-6 text-blue-600" />
                <span className="font-semibold text-gray-700">LinkedIn</span>
              </div>
              <a
                href="https://www.linkedin.com/in/melvin-sagnoy-567b682b2/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 hover:underline text-center sm:text-right mt-2 sm:mt-0"
              >
                linkedin.com/in/melvin-sagnoy
              </a>
            </div>

            {/* Facebook */}
            <div className="flex flex-col sm:flex-row justify-between items-center">
              <div className="flex items-center space-x-4">
                <Facebook className="w-6 h-6 text-blue-700" />
                <span className="font-semibold text-gray-700">Facebook</span>
              </div>
              <a
                href="https://www.facebook.com/sagnoy.melvin"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 hover:underline text-center sm:text-right mt-2 sm:mt-0"
              >
                facebook.com/sagnoy.melvin
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
