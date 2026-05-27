import { motion } from 'motion/react';
import { Briefcase, GraduationCap, Trophy, Users } from 'lucide-react';

export function ExperienceSection() {
  const experiences = [
    {
      type: "project",
      icon: Trophy,
      title: "TIFAN SAE INDIA Project",
      organization: "Academic Project",
      period: "2023 - 2024",
      description: "Main contributor in developing Multiple Vegetable Transplanter, combining automation and robotics expertise with team leadership.",
      achievements: [
        "Led technical documentation and project coordination",
        "Collaborated with cross-functional engineering team",
        "Implemented innovative automation solutions"
      ]
    },
    {
      type: "education",
      icon: GraduationCap,
      title: "Automation & Robotics",
      organization: "Engineering Studies",
      period: "2020 - 2024",
      description: "Specialized in automation systems and robotics, building strong foundation in technical innovation and problem-solving.",
      achievements: [
        "Technical excellence in automation systems",
        "Hands-on robotics project experience",
        "Strong analytical and engineering mindset"
      ]
    },
    {
      type: "activity",
      icon: Users,
      title: "Digital Marketing & Branding",
      organization: "Professional Development",
      period: "2022 - Present",
      description: "Pursuing passion in digital marketing, content strategy, and brand development through continuous learning and practical application.",
      achievements: [
        "Self-driven marketing skill development",
        "Content creation and brand strategy projects",
        "Building expertise in digital channels"
      ]
    },
    {
      type: "leadership",
      icon: Briefcase,
      title: "Team Collaboration Projects",
      organization: "Various Initiatives",
      period: "2021 - Present",
      description: "Active participation in collaborative projects, demonstrating strong communication and team leadership capabilities.",
      achievements: [
        "Effective cross-team communication",
        "Project management and coordination",
        "Stakeholder engagement and presentations"
      ]
    }
  ];

  return (
    <section className="relative py-32 bg-gradient-to-b from-black via-gray-950 to-black overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute top-1/3 left-0 w-96 h-96 bg-yellow-500/10 rounded-full blur-[100px]" />
        <div className="absolute bottom-1/3 right-0 w-96 h-96 bg-orange-500/10 rounded-full blur-[100px]" />
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
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-yellow-500/20 bg-yellow-500/5 backdrop-blur-sm mb-6">
            <span className="text-sm text-yellow-400 font-medium">Journey</span>
          </div>
          <h2 className="text-5xl lg:text-6xl font-bold text-white mb-6">
            Experience &
            <br />
            <span className="bg-gradient-to-r from-yellow-400 to-orange-400 bg-clip-text text-transparent">
              Activities
            </span>
          </h2>
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical Line */}
          <div className="absolute left-8 lg:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-yellow-500/30 to-transparent hidden md:block" />

          {/* Experience Items */}
          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.15 }}
                className={`relative grid lg:grid-cols-2 gap-8 items-center ${
                  index % 2 === 0 ? 'lg:text-right' : 'lg:flex-row-reverse'
                }`}
              >
                {/* Content Card */}
                <div className={`${index % 2 === 0 ? 'lg:col-start-1' : 'lg:col-start-2'}`}>
                  <div
                    className="group relative p-8 rounded-3xl border border-yellow-500/20 overflow-hidden hover:border-yellow-500/40 transition-all duration-500"
                    style={{
                      background: 'linear-gradient(135deg, rgba(0, 0, 0, 0.9), rgba(0, 0, 0, 0.6))',
                      backdropFilter: 'blur(10px)',
                    }}
                  >
                    {/* Hover Glow */}
                    <div className="absolute inset-0 bg-gradient-to-br from-yellow-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                    <div className={`relative z-10 space-y-4 ${index % 2 === 0 ? 'lg:text-right' : 'lg:text-left'}`}>
                      {/* Icon and Period */}
                      <div className={`flex items-center gap-4 ${index % 2 === 0 ? 'lg:justify-end' : 'lg:justify-start'}`}>
                        <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-yellow-500/20 to-yellow-500/5 flex items-center justify-center border border-yellow-500/30 group-hover:scale-110 transition-transform duration-300">
                          <exp.icon className="w-6 h-6 text-yellow-400" />
                        </div>
                        <span className="text-sm text-yellow-400 font-medium px-3 py-1 rounded-full bg-yellow-500/10 border border-yellow-500/20">
                          {exp.period}
                        </span>
                      </div>

                      {/* Title and Organization */}
                      <div>
                        <h3 className="text-2xl font-bold text-white mb-1 group-hover:text-yellow-400 transition-colors duration-300">
                          {exp.title}
                        </h3>
                        <p className="text-lg text-yellow-400/80">{exp.organization}</p>
                      </div>

                      {/* Description */}
                      <p className="text-gray-300 leading-relaxed">
                        {exp.description}
                      </p>

                      {/* Achievements */}
                      <div className={`space-y-2 pt-2 ${index % 2 === 0 ? 'lg:items-end' : 'lg:items-start'} flex flex-col`}>
                        {exp.achievements.map((achievement, achIndex) => (
                          <div
                            key={achIndex}
                            className={`flex items-center gap-2 ${index % 2 === 0 ? 'lg:flex-row-reverse' : ''}`}
                          >
                            <div className="w-1.5 h-1.5 bg-yellow-400 rounded-full" />
                            <span className="text-sm text-gray-400">{achievement}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Decorative Corner */}
                    <div className={`absolute ${index % 2 === 0 ? 'bottom-0 left-0' : 'bottom-0 right-0'} w-24 h-24 bg-gradient-to-${index % 2 === 0 ? 'tr' : 'tl'} from-yellow-500/10 to-transparent`} />
                  </div>
                </div>

                {/* Timeline Node */}
                <div className="hidden lg:block absolute left-1/2 -translate-x-1/2">
                  <motion.div
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.15 + 0.3 }}
                    className="relative"
                  >
                    {/* Outer Ring */}
                    <div className="w-16 h-16 rounded-full border-2 border-yellow-500/30 bg-black flex items-center justify-center">
                      {/* Inner Glow */}
                      <div className="w-8 h-8 rounded-full bg-gradient-to-br from-yellow-500 to-orange-500" />
                    </div>
                    {/* Pulse Effect */}
                    <div className="absolute inset-0 rounded-full border-2 border-yellow-500/50 animate-ping" />
                  </motion.div>
                </div>

                {/* Empty space for alternating layout */}
                <div className={`hidden lg:block ${index % 2 === 0 ? 'lg:col-start-2' : 'lg:col-start-1'}`} />
              </motion.div>
            ))}
          </div>
        </div>

        {/* Bottom Statement */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="mt-20 text-center"
        >
          <div className="inline-flex flex-col items-center gap-4 px-8 py-6 rounded-2xl border border-yellow-500/20 bg-gradient-to-br from-yellow-500/5 to-transparent backdrop-blur-sm">
            <p className="text-lg text-gray-300">
              Building a unique blend of <span className="text-yellow-400 font-semibold">technical expertise</span> and{' '}
              <span className="text-yellow-400 font-semibold">creative vision</span>
            </p>
            <div className="h-1 w-24 bg-gradient-to-r from-transparent via-yellow-500 to-transparent rounded-full" />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
