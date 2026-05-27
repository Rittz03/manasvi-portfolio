import { motion } from 'motion/react';
import { ExternalLink, Award, Users, Zap } from 'lucide-react';
import { Button } from './ui/button';

export function ProjectsSection() {
  const featuredProject = {
    title: "TIFAN SAE INDIA",
    subtitle: "Multiple Vegetable Transplanter",
    role: "Main & Crucial Contributor",
    description: "Led critical aspects of an innovative agricultural automation project, combining robotics expertise with team collaboration to develop a cutting-edge vegetable transplanting solution.",
    highlights: [
      "Engineering Innovation",
      "Team Leadership",
      "Technical Documentation",
      "Project Coordination"
    ],
    metrics: [
      { label: "Team Size", value: "6+" },
      { label: "Duration", value: "8 Months" },
      { label: "Impact", value: "High" }
    ]
  };

  const otherProjects = [
    {
      title: "Brand Campaign Strategy",
      category: "Digital Marketing",
      description: "Developed comprehensive digital marketing strategy for emerging brand",
      tags: ["Strategy", "Content", "Social Media"]
    },
    {
      title: "Content Marketing Initiative",
      category: "Content Strategy",
      description: "Created and executed multi-channel content marketing campaign",
      tags: ["Copywriting", "SEO", "Analytics"]
    },
    {
      title: "Brand Identity Project",
      category: "Branding",
      description: "Crafted complete brand identity including visual system and messaging",
      tags: ["Design", "Strategy", "Positioning"]
    }
  ];

  return (
    <section className="relative py-32 bg-black overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 right-0 w-[600px] h-[600px] bg-purple-500/10 rounded-full blur-[150px]" />
        <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-violet-500/10 rounded-full blur-[150px]" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-20"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-purple-500/20 bg-purple-500/5 backdrop-blur-sm mb-6">
            <span className="text-sm text-purple-400 font-medium">Featured Work</span>
          </div>
          <h2 className="text-5xl lg:text-6xl font-bold text-white mb-6">
            Projects &
            <br />
            <span className="bg-gradient-to-r from-purple-400 to-violet-400 bg-clip-text text-transparent">
              Achievements
            </span>
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl">
            Showcasing impactful work across marketing, branding, and technical innovation
          </p>
        </motion.div>

        {/* Featured Project - Large Card */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mb-16"
        >
          <div className="relative rounded-[2rem] border border-purple-500/30 overflow-hidden group"
            style={{
              background: 'linear-gradient(135deg, rgba(0, 0, 0, 0.9), rgba(0, 0, 0, 0.6))',
              backdropFilter: 'blur(20px)',
            }}
          >
            {/* Spotlight Effect */}
            <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700"
              style={{
                background: 'radial-gradient(circle at 50% 50%, rgba(234, 179, 8, 0.15), transparent 60%)',
              }}
            />

            {/* Glow Border Effect */}
            <div className="absolute inset-0 rounded-[2rem] opacity-0 group-hover:opacity-100 transition-opacity duration-700"
              style={{
                boxShadow: '0 0 60px rgba(234, 179, 8, 0.4)',
              }}
            />

            <div className="grid lg:grid-cols-2 gap-12 p-12">
              {/* Left Side - Project Visual */}
              <div className="relative">
                {/* Abstract Visual Representation */}
                <div className="relative aspect-square rounded-2xl overflow-hidden bg-gradient-to-br from-gray-900 to-black border border-purple-500/20">
                  {/* Geometric Pattern */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <motion.div
                      animate={{
                        rotate: [0, 360],
                      }}
                      transition={{
                        duration: 20,
                        repeat: Infinity,
                        ease: "linear",
                      }}
                      className="w-64 h-64 border-2 border-purple-500/30 rounded-full"
                    />
                    <motion.div
                      animate={{
                        rotate: [360, 0],
                      }}
                      transition={{
                        duration: 15,
                        repeat: Infinity,
                        ease: "linear",
                      }}
                      className="absolute w-48 h-48 border-2 border-purple-400/20 rounded-full"
                    />
                    
                    {/* Center Icon */}
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="w-32 h-32 rounded-2xl bg-gradient-to-br from-purple-500/20 to-violet-500/20 backdrop-blur-sm flex items-center justify-center border border-purple-500/30">
                        <Award className="w-16 h-16 text-purple-400" />
                      </div>
                    </div>
                  </div>

                  {/* Glow Effect */}
                  <div className="absolute inset-0 bg-gradient-to-t from-purple-500/20 via-transparent to-transparent" />
                </div>

                {/* Floating Metrics */}
                <div className="absolute -bottom-6 left-0 right-0 flex justify-center gap-4">
                  {featuredProject.metrics.map((metric, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.3 + index * 0.1 }}
                      className="px-6 py-3 rounded-full border border-purple-500/30 bg-black/90 backdrop-blur-sm"
                    >
                      <div className="text-2xl font-bold text-purple-400">{metric.value}</div>
                      <div className="text-xs text-gray-400">{metric.label}</div>
                    </motion.div>
                  ))}
                </div>
              </div>

              {/* Right Side - Project Info */}
              <div className="flex flex-col justify-center space-y-6">
                <div>
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-500/10 border border-purple-500/20 mb-4">
                    <Zap className="w-3 h-3 text-purple-400" />
                    <span className="text-xs text-purple-400 font-medium">{featuredProject.role}</span>
                  </div>

                  <h3 className="text-4xl lg:text-5xl font-bold text-white mb-2">
                    {featuredProject.title}
                  </h3>
                  <p className="text-xl text-purple-400 mb-6">
                    {featuredProject.subtitle}
                  </p>
                </div>

                <p className="text-lg text-gray-300 leading-relaxed">
                  {featuredProject.description}
                </p>

                {/* Highlights */}
                <div className="grid grid-cols-2 gap-3">
                  {featuredProject.highlights.map((highlight, index) => (
                    <div
                      key={index}
                      className="flex items-center gap-2 px-4 py-3 rounded-xl bg-purple-500/5 border border-purple-500/20"
                    >
                      <div className="w-1.5 h-1.5 bg-purple-400 rounded-full" />
                      <span className="text-sm text-gray-300">{highlight}</span>
                    </div>
                  ))}
                </div>

                <Button
                  size="lg"
                  className="w-fit bg-gradient-to-r from-purple-500 to-purple-600 hover:from-purple-600 hover:to-purple-700 text-black font-semibold shadow-lg shadow-purple-500/30 group"
                >
                  View Details
                  <ExternalLink className="ml-2 w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                </Button>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Other Projects Grid */}
        <div className="grid md:grid-cols-3 gap-6">
          {otherProjects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -8 }}
              className="group relative"
            >
              <div
                className="relative h-full p-8 rounded-3xl border border-purple-500/20 overflow-hidden transition-all duration-500 group-hover:border-purple-500/40"
                style={{
                  background: 'linear-gradient(135deg, rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.4))',
                  backdropFilter: 'blur(10px)',
                }}
              >
                {/* Hover Glow */}
                <div className="absolute inset-0 bg-gradient-to-br from-purple-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                <div className="relative z-10 space-y-4">
                  <div className="text-sm text-purple-400 font-medium">{project.category}</div>
                  <h3 className="text-2xl font-bold text-white group-hover:text-purple-400 transition-colors duration-300">
                    {project.title}
                  </h3>
                  <p className="text-gray-400 leading-relaxed">
                    {project.description}
                  </p>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2 pt-2">
                    {project.tags.map((tag, tagIndex) => (
                      <span
                        key={tagIndex}
                        className="px-3 py-1 text-xs rounded-full bg-purple-500/10 text-purple-400 border border-purple-500/20"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Corner Accent */}
                <div className="absolute bottom-0 right-0 w-20 h-20 bg-gradient-to-tl from-purple-500/10 to-transparent" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
