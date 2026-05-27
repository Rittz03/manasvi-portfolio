import { motion } from 'motion/react';
import { Lightbulb, Target, Zap, Users } from 'lucide-react';

export function AboutSection() {
  const highlights = [
    {
      icon: Lightbulb,
      title: "Creative Innovation",
      description: "Bringing fresh perspectives to digital marketing and brand storytelling"
    },
    {
      icon: Target,
      title: "Strategic Mindset",
      description: "Data-driven approach to content marketing and brand positioning"
    },
    {
      icon: Zap,
      title: "Technical Edge",
      description: "Automation & Robotics background powering creative efficiency"
    },
    {
      icon: Users,
      title: "Collaborative Spirit",
      description: "Team player with excellent communication and leadership skills"
    }
  ];

  return (
    <section className="relative py-32 bg-black overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute top-1/3 left-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-[100px]" />
        <div className="absolute bottom-1/3 right-1/4 w-96 h-96 bg-violet-500/10 rounded-full blur-[100px]" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-purple-500/20 bg-purple-500/5 backdrop-blur-sm mb-6">
            <span className="text-sm text-purple-400 font-medium">About Me</span>
          </div>
          <h2 className="text-5xl lg:text-6xl font-bold text-white mb-6">
            Crafting Digital
            <br />
            <span className="bg-gradient-to-r from-purple-400 to-violet-400 bg-clip-text text-transparent">
              Experiences
            </span>
          </h2>
        </motion.div>

        {/* Asymmetric Layout */}
        <div className="grid lg:grid-cols-5 gap-8 items-start">
          {/* Left Column - Main Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-3 space-y-6"
          >
            <div className="relative p-8 rounded-3xl border border-purple-500/20 overflow-hidden group hover:border-purple-500/40 transition-all duration-500"
              style={{
                background: 'linear-gradient(135deg, rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.3))',
                backdropFilter: 'blur(10px)',
              }}
            >
              {/* Card Glow Effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              
              <div className="relative z-10 space-y-4">
                <p className="text-lg text-gray-300 leading-relaxed">
                  I'm a <span className="text-purple-400 font-semibold">Digital Marketer</span> and{' '}
                  <span className="text-purple-400 font-semibold">Branding Enthusiast</span> with a unique 
                  background in Automation & Robotics. This technical foundation gives me a distinctive 
                  edge in understanding data-driven marketing and creative automation.
                </p>
                
                <p className="text-lg text-gray-300 leading-relaxed">
                  My passion lies in creating <span className="text-purple-400 font-semibold">impactful brand 
                  narratives</span>, developing innovative content strategies, and building meaningful connections 
                  through thoughtful communication. I believe in the power of storytelling to transform brands 
                  and create lasting impressions.
                </p>

                <p className="text-lg text-gray-300 leading-relaxed">
                  Whether it's crafting compelling campaigns, strategizing brand positioning, or collaborating 
                  with creative teams, I bring a blend of <span className="text-purple-400 font-semibold">
                  analytical thinking and creative vision</span> to every project.
                </p>
              </div>

              {/* Decorative Corner Element */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-purple-500/10 to-transparent rounded-bl-[100px]" />
            </div>
          </motion.div>

          {/* Right Column - Stats/Highlights */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="lg:col-span-2 space-y-6"
          >
            {/* Stat Cards */}
            <div className="p-6 rounded-2xl border border-purple-500/20 bg-gradient-to-br from-purple-500/5 to-transparent backdrop-blur-sm hover:border-purple-500/40 transition-all duration-300 group">
              <div className="text-5xl font-bold bg-gradient-to-r from-purple-400 to-violet-400 bg-clip-text text-transparent mb-2">
                5+
              </div>
              <div className="text-gray-300 font-medium">Projects Delivered</div>
              <div className="text-sm text-gray-500 mt-1">With Impact & Innovation</div>
              <div className="h-1 w-16 bg-gradient-to-r from-purple-500 to-transparent rounded-full mt-3 group-hover:w-24 transition-all duration-300" />
            </div>

            <div className="p-6 rounded-2xl border border-purple-500/20 bg-gradient-to-br from-violet-500/5 to-transparent backdrop-blur-sm hover:border-purple-500/40 transition-all duration-300 group">
              <div className="text-5xl font-bold bg-gradient-to-r from-purple-400 to-violet-400 bg-clip-text text-transparent mb-2">
                100%
              </div>
              <div className="text-gray-300 font-medium">Dedication</div>
              <div className="text-sm text-gray-500 mt-1">To Every Challenge</div>
              <div className="h-1 w-16 bg-gradient-to-r from-purple-500 to-transparent rounded-full mt-3 group-hover:w-24 transition-all duration-300" />
            </div>
          </motion.div>
        </div>

        {/* Highlight Cards Grid */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mt-12"
        >
          {highlights.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.5 + index * 0.1 }}
              className="relative p-6 rounded-2xl border border-purple-500/20 overflow-hidden group hover:border-purple-500/40 transition-all duration-500"
              style={{
                background: 'linear-gradient(135deg, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.2))',
                backdropFilter: 'blur(10px)',
              }}
            >
              {/* Hover Glow */}
              <div className="absolute inset-0 bg-gradient-to-br from-purple-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              
              <div className="relative z-10">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-purple-500/20 to-purple-500/5 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                  <item.icon className="w-6 h-6 text-purple-400" />
                </div>
                <h3 className="text-white font-semibold mb-2">{item.title}</h3>
                <p className="text-sm text-gray-400 leading-relaxed">{item.description}</p>
              </div>

              {/* Corner Accent */}
              <div className="absolute bottom-0 right-0 w-16 h-16 bg-gradient-to-tl from-purple-500/5 to-transparent" />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
