import { motion } from 'motion/react';
import { Mail, Linkedin, Github, Twitter, ArrowRight, Send } from 'lucide-react';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Textarea } from './ui/textarea';

export function ContactSection() {
  const socialLinks = [
    {
      icon: Linkedin,
      label: "LinkedIn",
      href: "https://www.linkedin.com/in/manasvi-pawar-127444345",
      color: "from-blue-500 to-blue-600"
    },
    {
      icon: Github,
      label: "GitHub",
      href: "#",
      color: "from-gray-500 to-gray-700"
    },
    {
      icon: Twitter,
      label: "Twitter",
      href: "#",
      color: "from-sky-500 to-blue-500"
    },
    {
      icon: Mail,
      label: "Email",
      href: "mailto:manasvip023@gmail.com",
      color: "from-yellow-500 to-orange-500"
    }
  ];

  return (
    <section className="relative py-32 bg-black overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-gradient-to-b from-yellow-500/10 to-transparent rounded-full blur-[150px]" />
      </div>

      {/* Grid Pattern */}
      <div 
        className="absolute inset-0 opacity-[0.02]"
        style={{
          backgroundImage: `linear-gradient(rgba(255, 255, 255, 0.1) 1px, transparent 1px),
                           linear-gradient(90deg, rgba(255, 255, 255, 0.1) 1px, transparent 1px)`,
          backgroundSize: '50px 50px',
        }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-yellow-500/20 bg-yellow-500/5 backdrop-blur-sm mb-6">
            <span className="text-sm text-yellow-400 font-medium">Get in Touch</span>
          </div>
          <h2 className="text-5xl lg:text-6xl font-bold text-white mb-6">
            Let's Create
            <br />
            <span className="bg-gradient-to-r from-yellow-400 to-orange-400 bg-clip-text text-transparent">
              Something Great
            </span>
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Open to collaboration, opportunities, and meaningful conversations
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Left Side - Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <div
              className="relative p-8 rounded-3xl border border-yellow-500/20 overflow-hidden"
              style={{
                background: 'linear-gradient(135deg, rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.4))',
                backdropFilter: 'blur(10px)',
              }}
            >
              {/* Glow Effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-yellow-500/5 to-transparent" />

              <div className="relative z-10 space-y-6">
                <div>
                  <h3 className="text-2xl font-bold text-white mb-2">Send a Message</h3>
                  <p className="text-gray-400">I'll get back to you as soon as possible</p>
                </div>

                <form className="space-y-4">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">
                      Name
                    </label>
                    <Input
                      id="name"
                      placeholder="Your name"
                      className="bg-black/50 border-yellow-500/20 focus:border-yellow-500/50 text-white placeholder:text-gray-500"
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                      Email
                    </label>
                    <Input
                      id="email"
                      type="email"
                      placeholder="your.email@example.com"
                      className="bg-black/50 border-yellow-500/20 focus:border-yellow-500/50 text-white placeholder:text-gray-500"
                    />
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">
                      Message
                    </label>
                    <Textarea
                      id="message"
                      placeholder="Tell me about your project or idea..."
                      rows={5}
                      className="bg-black/50 border-yellow-500/20 focus:border-yellow-500/50 text-white placeholder:text-gray-500 resize-none"
                    />
                  </div>

                  <Button
                    type="submit"
                    size="lg"
                    className="w-full bg-gradient-to-r from-yellow-500 to-yellow-600 hover:from-yellow-600 hover:to-yellow-700 text-black font-semibold shadow-lg shadow-yellow-500/30 group"
                  >
                    Send Message
                    <Send className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </form>
              </div>

              {/* Corner Decoration */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-yellow-500/10 to-transparent rounded-bl-[100px]" />
            </div>
          </motion.div>

          {/* Right Side - Social Links & Info */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-8"
          >
            {/* Quick Connect Card */}
            <div
              className="relative p-8 rounded-3xl border border-yellow-500/20 overflow-hidden"
              style={{
                background: 'linear-gradient(135deg, rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.4))',
                backdropFilter: 'blur(10px)',
              }}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-yellow-500/5 to-transparent" />
              
              <div className="relative z-10">
                <h3 className="text-2xl font-bold text-white mb-4">Connect Socially</h3>
                <p className="text-gray-400 mb-6">
                  Let's connect and explore opportunities together
                </p>

                {/* Social Links Grid */}
                <div className="grid grid-cols-2 gap-4">
                  {socialLinks.map((social, index) => (
                    <motion.a
                      key={index}
                      href={social.href}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.4 + index * 0.1 }}
                      whileHover={{ y: -5, scale: 1.02 }}
                      className="group relative p-6 rounded-2xl border border-yellow-500/20 overflow-hidden hover:border-yellow-500/40 transition-all duration-300"
                      style={{
                        background: 'linear-gradient(135deg, rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.3))',
                      }}
                    >
                      {/* Hover Glow */}
                      <div className="absolute inset-0 bg-gradient-to-br from-yellow-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                      <div className="relative z-10 space-y-3">
                        <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${social.color} p-[2px] group-hover:scale-110 transition-transform duration-300`}>
                          <div className="w-full h-full bg-black rounded-xl flex items-center justify-center">
                            <social.icon className="w-5 h-5 text-white" />
                          </div>
                        </div>
                        <div className="text-sm font-medium text-gray-300 group-hover:text-yellow-400 transition-colors">
                          {social.label}
                        </div>
                      </div>
                    </motion.a>
                  ))}
                </div>
              </div>
            </div>

            {/* Availability Card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.6 }}
              className="relative p-8 rounded-3xl border border-yellow-500/30 overflow-hidden"
              style={{
                background: 'linear-gradient(135deg, rgba(234, 179, 8, 0.1), rgba(234, 179, 8, 0.05))',
                backdropFilter: 'blur(10px)',
                boxShadow: '0 0 40px rgba(234, 179, 8, 0.2)',
              }}
            >
              <div className="relative z-10 space-y-4">
                <div className="flex items-center gap-3">
                  <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse" />
                  <span className="text-lg font-semibold text-yellow-400">Currently Available</span>
                </div>
                <p className="text-gray-300">
                  Open to freelance projects, collaborations, and full-time opportunities in digital marketing, branding, and creative strategy.
                </p>
                <div className="flex items-center gap-2 text-sm text-gray-400">
                  <ArrowRight className="w-4 h-4 text-yellow-400" />
                  <span>Response time: Within 24 hours</span>
                </div>
              </div>
            </motion.div>

            {/* Location & Contact Info */}
            <div
              className="relative p-6 rounded-2xl border border-yellow-500/20"
              style={{
                background: 'linear-gradient(135deg, rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.3))',
                backdropFilter: 'blur(10px)',
              }}
            >
              <div className="space-y-3 text-gray-400">
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-yellow-400 rounded-full" />
                  <span>Based in India</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-yellow-400 rounded-full" />
                  <span>Open to Remote Opportunities</span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Footer */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.8 }}
        className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 mt-24 pt-12 border-t border-yellow-500/10"
      >
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="text-center md:text-left">
            <h3 className="text-2xl font-bold bg-gradient-to-r from-yellow-400 to-orange-400 bg-clip-text text-transparent mb-2">
              Manasvi Sanjay Pawar
            </h3>
            <p className="text-gray-500 text-sm">
              Digital Marketer | Brand Strategist | Innovation Enthusiast
            </p>
          </div>
          <div className="text-gray-500 text-sm">
            © 2026 All rights reserved
          </div>
        </div>
      </motion.div>
    </section>
  );
}