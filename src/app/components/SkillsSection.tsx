import { motion } from 'motion/react';
import { 
  TrendingUp, 
  Palette, 
  FileText, 
  MessageSquare, 
  Settings, 
  Cpu, 
  Lightbulb, 
  Users 
} from 'lucide-react';

export function SkillsSection() {
  const skills = [
    {
      icon: TrendingUp,
      title: "Digital Marketing",
      description: "SEO, SEM, Social Media Strategy, Analytics",
      gradient: "from-purple-500 to-violet-500",
      delay: 0
    },
    {
      icon: Palette,
      title: "Branding",
      description: "Brand Identity, Visual Design, Brand Strategy",
      gradient: "from-violet-500 to-purple-600",
      delay: 0.1
    },
    {
      icon: FileText,
      title: "Content Strategy",
      description: "Content Planning, Copywriting, Storytelling",
      gradient: "from-purple-400 to-purple-500",
      delay: 0.2
    },
    {
      icon: MessageSquare,
      title: "Communication",
      description: "Stakeholder Management, Presentations, Collaboration",
      gradient: "from-purple-500 to-violet-400",
      delay: 0.3
    },
    {
      icon: Settings,
      title: "Automation",
      description: "Process Optimization, Marketing Automation",
      gradient: "from-violet-400 to-purple-500",
      delay: 0.4
    },
    {
      icon: Cpu,
      title: "Robotics",
      description: "Technical Understanding, Innovation Mindset",
      gradient: "from-purple-600 to-violet-500",
      delay: 0.5
    },
    {
      icon: Lightbulb,
      title: "Creative Thinking",
      description: "Problem Solving, Ideation, Innovation",
      gradient: "from-purple-400 to-violet-400",
      delay: 0.6
    },
    {
      icon: Users,
      title: "Team Collaboration",
      description: "Leadership, Teamwork, Cross-functional Projects",
      gradient: "from-violet-500 to-purple-400",
      delay: 0.7
    }
  ];

  return (
    <section className="relative py-32 bg-gradient-to-b from-black via-gray-950 to-black overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/3 w-[500px] h-[500px] bg-purple-500/10 rounded-full blur-[120px]" />
        <div className="absolute bottom-0 right-1/3 w-[500px] h-[500px] bg-violet-500/10 rounded-full blur-[120px]" />
      </div>

      {/* Grid Pattern */}
      <div 
        className="absolute inset-0 opacity-[0.02]"
        style={{
          backgroundImage: `linear-gradient(rgba(255, 255, 255, 0.1) 1px, transparent 1px),
                           linear-gradient(90deg, rgba(255, 255, 255, 0.1) 1px, transparent 1px)`,
          backgroundSize: '60px 60px',
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
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-purple-500/20 bg-purple-500/5 backdrop-blur-sm mb-6">
            <span className="text-sm text-purple-400 font-medium">Expertise</span>
          </div>
          <h2 className="text-5xl lg:text-6xl font-bold text-white mb-6">
            Skills &
            <br />
            <span className="bg-gradient-to-r from-purple-400 to-violet-400 bg-clip-text text-transparent">
              Capabilities
            </span>
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            A diverse skill set combining marketing expertise with technical innovation
          </p>
        </motion.div>

        {/* Skills Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {skills.map((skill, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: skill.delay }}
              whileHover={{ y: -8 }}
              className="group relative"
            >
              {/* Card Container */}
              <div
                className="relative h-full p-8 rounded-3xl border border-purple-500/20 overflow-hidden transition-all duration-500 group-hover:border-purple-500/50"
                style={{
                  background: 'linear-gradient(135deg, rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.4))',
                  backdropFilter: 'blur(10px)',
                }}
              >
                {/* Glow Effect on Hover */}
                <div className="absolute inset-0 bg-gradient-to-br from-purple-500/0 via-purple-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                
                {/* Border Glow */}
                <div className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                  style={{
                    boxShadow: '0 0 30px rgba(234, 179, 8, 0.3)',
                  }}
                />

                <div className="relative z-10 space-y-4">
                  {/* Icon Container */}
                  <div className="relative inline-block">
                    <div 
                      className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${skill.gradient} p-[2px] group-hover:scale-110 transition-transform duration-500`}
                    >
                      <div className="w-full h-full bg-black rounded-2xl flex items-center justify-center">
                        <skill.icon className="w-7 h-7 text-purple-400" />
                      </div>
                    </div>
                    
                    {/* Floating Glow */}
                    <div className={`absolute inset-0 bg-gradient-to-br ${skill.gradient} rounded-2xl blur-xl opacity-0 group-hover:opacity-50 transition-opacity duration-500`} />
                  </div>

                  {/* Content */}
                  <div>
                    <h3 className="text-xl font-bold text-white mb-2 group-hover:text-purple-400 transition-colors duration-300">
                      {skill.title}
                    </h3>
                    <p className="text-sm text-gray-400 leading-relaxed">
                      {skill.description}
                    </p>
                  </div>

                  {/* Progress Bar */}
                  <div className="pt-2">
                    <div className="h-1 bg-gray-800 rounded-full overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: "90%" }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, delay: skill.delay + 0.5 }}
                        className={`h-full bg-gradient-to-r ${skill.gradient} rounded-full`}
                      />
                    </div>
                  </div>
                </div>

                {/* 3D Tilt Corner Effect */}
                <div className="absolute bottom-0 right-0 w-24 h-24 bg-gradient-to-tl from-purple-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                
                {/* Top Corner Accent */}
                <div className="absolute top-0 left-0 w-20 h-20 bg-gradient-to-br from-purple-500/5 to-transparent rounded-tl-3xl" />
              </div>

              {/* Floating Shadow */}
              <div className="absolute inset-0 bg-gradient-to-b from-transparent to-purple-500/20 blur-2xl opacity-0 group-hover:opacity-50 -z-10 transition-opacity duration-500" />
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="mt-16 text-center"
        >
          <p className="text-lg text-gray-400 mb-6">
            Ready to bring these skills to your next project
          </p>
          <div className="inline-flex items-center gap-3 px-6 py-3 rounded-full border border-purple-500/30 bg-gradient-to-r from-purple-500/10 to-violet-500/10 backdrop-blur-sm">
            <div className="w-2 h-2 bg-purple-400 rounded-full animate-pulse" />
            <span className="text-purple-400 font-medium">Open to Collaboration</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
