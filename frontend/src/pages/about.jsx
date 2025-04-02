import React from 'react'

export default function About() {
  return (
    // About.jsx
    <div className="flex-1 ml-16">
    <div className="min-h-screen bg-gray-100">
      {/* Hero Section */}
      <section className="bg-blue-600 text-white py-20">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-center">
            About Us
          </h1>
          <p className="text-xl text-center max-w-2xl mx-auto">
            Empowering learners worldwide with accessible, high-quality education
          </p>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6 text-gray-800">
                Our Mission
              </h2>
              <p className="text-gray-600 leading-relaxed">
                At [Your E-Learning Platform], we're dedicated to revolutionizing 
                education through innovative technology. We believe that everyone 
                deserves access to quality learning resources, regardless of their 
                location or background. Our mission is to provide engaging, 
                interactive, and personalized learning experiences that inspire 
                growth and success.
              </p>
            </div>
            <div className="relative">
              <img 
                src="https://images.unsplash.com/photo-1524178232363-1fb2b075b655?ixlib=rb-4.0.3&auto=format&fit=crop&w=1350&q=80" 
                alt="Students learning"
                className="rounded-lg shadow-lg w-full object-cover h-80"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="bg-white py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">
            Our Core Values
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center p-6 hover:shadow-lg transition-shadow">
              <div className="text-blue-600 text-4xl mb-4">📚</div>
              <h3 className="text-xl font-semibold mb-2 text-black">Accessibility</h3>
              <p className="text-gray-600">
                Education available to everyone, everywhere
              </p>
            </div>
            <div className="text-center p-6 hover:shadow-lg transition-shadow">
              <div className="text-blue-600 text-4xl mb-4">🌟</div>
              <h3 className="text-xl font-semibold mb-2 text-black">Excellence</h3>
              <p className="text-gray-600">
                High-quality content from expert instructors
              </p>
            </div>
            <div className="text-center p-6 hover:shadow-lg transition-shadow">
              <div className="text-blue-600 text-4xl mb-4">💡</div>
              <h3 className="text-xl font-semibold mb-2 text-black">Innovation</h3>
              <p className="text-gray-600">
                Cutting-edge learning technology
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      {/* <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">
            Meet Our Team
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { name: "John Doe", role: "Founder & CEO" },
              { name: "Jane Smith", role: "Head of Education" },
              { name: "Mike Johnson", role: "Tech Lead" },
              { name: "Sarah Williams", role: "Content Director" }
            ].map((member, index) => (
              <div key={index} className="text-center">
                <div className="w-32 h-32 mx-auto mb-4 bg-gray-300 rounded-full overflow-hidden">
                  <img 
                    src={`https://i.pravatar.cc/150?img=${index + 1}`} 
                    alt={member.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <h3 className="text-xl font-semibold">{member.name}</h3>
                <p className="text-gray-600">{member.role}</p>
              </div>
            ))}
          </div>
        </div>
      </section> */}
      </div>

      {/* Footer */}
      {/* <footer className="bg-gray-800 text-white py-8">
        <div className="container mx-auto px-4 text-center">
          <p>&copy; 2025 [Your E-Learning Platform]. All rights reserved.</p>
        </div>
      </footer> */}
    </div>
  );
};


