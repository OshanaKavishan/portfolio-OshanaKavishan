import React, { useState } from 'react';
import { Mail, Github, Linkedin, Send, ChevronLeft, ChevronRight, User, MessageCircle, ExternalLink, MapPin, Calendar, CheckCircle, X } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const Contact = () => {
  const navigate = useNavigate();
  const [currentPage, setCurrentPage] = useState('contact');
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);
  const [focusedField, setFocusedField] = useState<null | 'name' | 'email' | 'message'>(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 2000));

    setFormData({ name: '', email: '', message: '' });
    setIsSubmitting(false);
    setShowSuccess(true);

    // Auto-hide success message after 5 seconds
    setTimeout(() => {
      setShowSuccess(false);
    }, 5000);
  };



  const socialLinks = [
    {
      name: 'LinkedIn',
      icon: <Linkedin size={24} />,
      url: 'https://www.linkedin.com/in/oshana-kavishan-9ab10b23b',
      color: 'from-blue-600 to-blue-700',
      description: 'Connect professionally'
    },
    {
      name: 'GitHub',
      icon: <Github size={24} />,
      url: 'https://github.com/OshanaKavishan',
      color: 'from-gray-700 to-gray-800',
      description: 'View my code'
    },
    {
      name: 'Email',
      icon: <Mail size={24} />,
      url: 'mailto:oshanakavishansilva@gmail.com',
      color: 'from-purple-600 to-pink-600',
      description: 'Send me an email'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 text-white">
      {/* Success Message Modal */}
      {showSuccess && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50 p-4">
          <div className="bg-gradient-to-br from-green-500/20 to-emerald-500/20 backdrop-blur-lg rounded-2xl border border-green-500/30 p-8 max-w-md w-full mx-4 shadow-2xl shadow-green-500/25 animate-in fade-in-0 zoom-in-95 duration-300">
            <div className="flex items-center justify-between mb-6">
              <div className="flex items-center space-x-3">
                <div className="p-2 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full">
                  <CheckCircle size={24} className="text-white" />
                </div>
                <h3 className="text-xl font-bold bg-gradient-to-r from-green-400 to-emerald-400 bg-clip-text text-transparent">
                  Message Sent Successfully!
                </h3>
              </div>
              <button
                onClick={() => setShowSuccess(false)}
                className="p-1 hover:bg-white/10 rounded-full transition-colors"
              >
                <X size={20} className="text-gray-300 hover:text-white" />
              </button>
            </div>

            <div className="space-y-4">
              <p className="text-gray-200 leading-relaxed">
                Thank you for reaching out! Your message has been delivered successfully.
              </p>
              <div className="bg-gradient-to-r from-green-500/10 to-emerald-500/10 rounded-lg p-4 border border-green-500/20">
                <p className="text-sm text-gray-300 flex items-center space-x-2">
                  <Calendar size={16} className="text-green-400" />
                  <span>I'll get back to you within 24 hours</span>
                </p>
              </div>
            </div>

            <div className="mt-6 flex space-x-3">
              <button
                onClick={() => setShowSuccess(false)}
                className="flex-1 px-4 py-2 bg-gradient-to-r from-green-600 to-emerald-600 rounded-lg font-semibold hover:from-green-700 hover:to-emerald-700 transition-all duration-300 hover:scale-105"
              >
                Continue
              </button>

            </div>
          </div>
        </div>
      )}

      {/* Floating Navigation */}
      <div className="fixed left-6 top-1/2 transform -translate-y-1/2 z-40">
        <button
          onClick={() => navigate('/projects')}
          className="group p-4 bg-gradient-to-r from-purple-600/20 to-pink-600/20 backdrop-blur-lg rounded-full border border-white/20 hover:from-purple-600/40 hover:to-pink-600/40 transition-all duration-300 shadow-lg hover:shadow-purple-500/25 hover:scale-110"
        >
          <ChevronLeft size={28} className="text-purple-300 group-hover:text-white transition-colors" />
        </button>
      </div>

      <div className="fixed right-6 top-1/2 transform -translate-y-1/2 z-40">
        <button
          onClick={() => navigate('/')}
          className="group p-4 bg-gradient-to-r from-purple-600/20 to-pink-600/20 backdrop-blur-lg rounded-full border border-white/20 hover:from-purple-600/40 hover:to-pink-600/40 transition-all duration-300 shadow-lg hover:shadow-purple-500/25 hover:scale-110"
        >
          <ChevronRight size={28} className="text-purple-300 group-hover:text-white transition-colors" />
        </button>
      </div>

      {/* Success Toast Notification */}
      {showSuccess && (
        <div className="fixed top-6 right-6 z-50 animate-in slide-in-from-right-full duration-300">
          <div className="bg-gradient-to-r from-green-500/90 to-emerald-500/90 backdrop-blur-lg rounded-xl border border-green-400/30 p-4 shadow-2xl shadow-green-500/25 max-w-sm">
            <div className="flex items-center space-x-3">
              <CheckCircle size={20} className="text-white flex-shrink-0" />
              <div>
                <p className="font-semibold text-white">Message sent successfully!</p>
                <p className="text-sm text-green-100">I'll respond within 24 hours</p>
              </div>
            </div>
          </div>
        </div>
      )}

      <div className="relative pt-24 px-6 max-w-5xl mx-auto">
        {/* Hero Section */}
        <div className="text-center mb-20">
          <div className="inline-block">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400 text-lg font-semibold tracking-wide uppercase">
              Let's Connect
            </span>
          </div>
          <h1 className="text-6xl md:text-7xl font-bold mt-4 mb-6 bg-gradient-to-r from-white via-purple-200 to-pink-200 bg-clip-text text-transparent">
            Get In Touch
          </h1>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto leading-relaxed">
            Have a project in mind? Let's discuss how we can bring your ideas to life
          </p>
        </div>

        {/* Main Contact Section */}
        <div className="bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-lg rounded-3xl border border-white/20 p-8 shadow-2xl">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div className="space-y-6">
              <div className="mb-8">
                <h2 className="text-3xl font-bold mb-2 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                  Send me a message
                </h2>
                <p className="text-gray-300">
                  I'd love to hear about your project and how I can help bring it to life.
                </p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Name Field */}
                <div className="relative">
                  <label
                    htmlFor="name"
                    className={`absolute -top-2 left-4 px-2 text-sm font-medium transition-all duration-300 ${focusedField === 'name' || formData.name ? 'text-purple-400 bg-slate-900' : 'text-gray-400'
                      }`}
                  >
                    {/* Your Name */}
                  </label>
                  <div className="relative">
                    <User size={20} className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" />
                    <input
                      id="name"
                      type="text"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      onFocus={() => setFocusedField('name')}
                      onBlur={() => setFocusedField(null)}
                      className="w-full pl-12 pr-4 py-4 bg-white/10 border border-white/20 rounded-xl focus:outline-none focus:border-purple-500 focus:ring-2 focus:ring-purple-500/20 transition-all duration-300 text-white placeholder-gray-400"
                      placeholder="Enter your full name"
                      required
                    />
                  </div>
                </div>

                {/* Email Field */}
                <div className="relative">
                  <label
                    htmlFor="email"
                    className={`absolute -top-2 left-4 px-2 text-sm font-medium transition-all duration-300 ${focusedField === 'email' || formData.email ? 'text-purple-400 bg-slate-900' : 'text-gray-400'
                      }`}
                  >
                    {/* Your Email */}
                  </label>
                  <div className="relative">
                    <Mail size={20} className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" />
                    <input
                      id="email"
                      type="email"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      onFocus={() => setFocusedField('email')}
                      onBlur={() => setFocusedField(null)}
                      className="w-full pl-12 pr-4 py-4 bg-white/10 border border-white/20 rounded-xl focus:outline-none focus:border-purple-500 focus:ring-2 focus:ring-purple-500/20 transition-all duration-300 text-white placeholder-gray-400"
                      placeholder="Enter your email address"
                      required
                    />
                  </div>
                </div>

                {/* Message Field */}
                <div className="relative">
                  <label
                    htmlFor="message"
                    className={`absolute -top-2 left-4 px-2 text-sm font-medium transition-all duration-300 ${focusedField === 'message' || formData.message ? 'text-purple-400 bg-slate-900' : 'text-gray-400'
                      }`}
                  >
                    {/* Your Message */}
                  </label>
                  <div className="relative">
                    <MessageCircle size={20} className="absolute left-4 top-4 text-gray-400" />
                    <textarea
                      id="message"
                      rows={5}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      onFocus={() => setFocusedField('message')}
                      onBlur={() => setFocusedField(null)}
                      className="w-full pl-12 pr-4 py-4 bg-white/10 border border-white/20 rounded-xl focus:outline-none focus:border-purple-500 focus:ring-2 focus:ring-purple-500/20 transition-all duration-300 text-white placeholder-gray-400 resize-none"
                      placeholder="Tell me about your project..."
                      required
                    />
                  </div>
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="group relative w-full flex items-center justify-center space-x-2 px-8 py-4 bg-gradient-to-r from-purple-600 to-pink-600 rounded-xl font-semibold text-lg transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-purple-500/25 disabled:opacity-50 disabled:cursor-not-allowed overflow-hidden"
                >
                  <span className="relative z-10 flex items-center space-x-2">
                    {isSubmitting ? (
                      <>
                        <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white"></div>
                        <span>Sending...</span>
                      </>
                    ) : (
                      <>
                        <Send size={20} />
                        <span>Send Message</span>
                      </>
                    )}
                  </span>
                  <div className="absolute inset-0 bg-gradient-to-r from-pink-600 to-purple-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </button>
              </form>
            </div>

            {/* Contact Info & Social Links */}
            <div className="space-y-8">
              <div>
                <h3 className="text-2xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                  Let's connect on social media
                </h3>
                <p className="text-gray-300 mb-8">
                  Follow me on social platforms to stay updated with my latest projects and insights.
                </p>
              </div>

              {/* Social Links */}
              <div className="space-y-4">
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group flex items-center space-x-4 p-4 bg-white/5 hover:bg-white/10 rounded-xl border border-white/10 hover:border-white/20 transition-all duration-300 hover:scale-105"
                  >
                    <div className={`p-3 rounded-lg bg-gradient-to-r ${social.color} group-hover:scale-110 transition-transform duration-300`}>
                      {social.icon}
                    </div>
                    <div>
                      <h4 className="font-semibold text-lg">{social.name}</h4>
                      <p className="text-gray-400 text-sm">{social.description}</p>
                    </div>
                    <ExternalLink size={16} className="ml-auto text-gray-400 group-hover:text-white transition-colors" />
                  </a>
                ))}
              </div>

              {/* Additional Info */}
              <div className="bg-gradient-to-r from-purple-500/10 to-pink-500/10 rounded-xl p-6 border border-purple-500/20">
                <h4 className="font-semibold text-lg mb-3 flex items-center space-x-2">
                  <MapPin size={20} className="text-purple-400" />
                  <span>Location</span>
                </h4>
                <p className="text-gray-300 mb-4">Based in Sri Lanka, available for remote work worldwide</p>

                <h4 className="font-semibold text-lg mb-3 flex items-center space-x-2">
                  <Calendar size={20} className="text-purple-400" />
                  <span>Response Time</span>
                </h4>
                <p className="text-gray-300">Usually responds within 24 hours</p>
              </div>
            </div>
          </div>
        </div>

        {/* Back to Top */}
        <div className="text-center mt-12">
          <button
            onClick={() => navigate('/')} // ✅ Home route
            className="group relative px-8 py-4 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full font-semibold text-lg transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-purple-500/25 overflow-hidden"
          >
            <span className="relative z-10 flex items-center space-x-2">
              <span>Back to Portfolio</span>
              <ChevronLeft size={20} className="group-hover:-translate-x-1 transition-transform" />
            </span>
            <div className="absolute inset-0 bg-gradient-to-r from-pink-600 to-purple-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Contact;