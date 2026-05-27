import { motion } from 'motion/react';
import { ArrowRight, Sparkles } from 'lucide-react';
import { Button } from './ui/button';

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-black">
      {/* Ambient Glow Background */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 -left-1/4 w-96 h-96 bg-purple-500/20 rounded-full blur-[120px] animate-pulse" />
        <div className="absolute bottom-1/4 -right-1/4 w-96 h-96 bg-purple-400/10 rounded-full blur-[120px] animate-pulse delay-1000" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-r from-purple-500/5 to-violet-500/5 rounded-full blur-[100px]" />
      </div>

      {/* Floating 3D Shapes */}
      <motion.div
        className="absolute top-20 left-20 w-32 h-32 border border-purple-500/30 rounded-3xl backdrop-blur-sm"
        animate={{
          y: [0, -20, 0],
          rotate: [0, 5, 0],
        }}
        transition={{
          duration: 5,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        style={{
          background: 'linear-gradient(135deg, rgba(234, 179, 8, 0.1), rgba(234, 179, 8, 0.05))',
          boxShadow: '0 0 40px rgba(234, 179, 8, 0.2)',
        }}
      />

      <motion.div
        className="absolute bottom-32 right-32 w-24 h-24 border border-purple-400/20 rounded-2xl backdrop-blur-sm"
        animate={{
          y: [0, 20, 0],
          rotate: [0, -5, 0],
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 0.5,
        }}
        style={{
          background: 'linear-gradient(135deg, rgba(250, 204, 21, 0.08), rgba(250, 204, 21, 0.03))',
          boxShadow: '0 0 30px rgba(250, 204, 21, 0.15)',
        }}
      />

      {/* Grid Pattern Overlay */}
      <div 
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `linear-gradient(rgba(255, 255, 255, 0.1) 1px, transparent 1px),
                           linear-gradient(90deg, rgba(255, 255, 255, 0.1) 1px, transparent 1px)`,
          backgroundSize: '50px 50px',
        }}
      />

      {/* Main Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 w-full">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Side - Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            {/* Floating Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-purple-500/30 bg-purple-500/5 backdrop-blur-sm"
            >
              <Sparkles className="w-4 h-4 text-purple-400" />
              <span className="text-sm text-purple-400 font-medium"></span>
            </motion.div>

            {/* Main Headline */}
            <div className="space-y-4">
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="text-6xl lg:text-7xl xl:text-8xl font-bold text-white leading-[1.1] tracking-tight"
              >
                Manasvi
                <br />
                <span className="bg-gradient-to-r from-purple-400 via-purple-500 to-violet-400 bg-clip-text text-transparent">
                  Sanjay Pawar
                </span>
              </motion.h1>

              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5 }}
                className="h-1 w-32 bg-gradient-to-r from-purple-500 to-transparent rounded-full"
              />
            </div>

            {/* Subtitle */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="text-xl lg:text-2xl text-gray-300 leading-relaxed max-w-xl"
            >
              Digital Marketer | Branding & Content Marketing Enthusiast | 
              Innovation & Creative Strategy
            </motion.p>

            {/* Description */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7 }}
              className="text-base lg:text-lg text-gray-400 leading-relaxed max-w-lg"
            >
              Automation & Robotics enthusiast passionate about branding, 
              creativity, innovation, communication, and impactful digital experiences.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8 }}
              className="flex flex-wrap gap-4 pt-4"
            >
              <Button
                size="lg"
                className="group bg-gradient-to-r from-purple-500 to-purple-600 hover:from-purple-600 hover:to-yellow-700 text-black font-semibold px-8 py-6 text-lg shadow-lg shadow-purple-500/50 hover:shadow-purple-500/70 transition-all duration-300"
              >
                View My Work
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Button>
              
              <Button
                size="lg"
                variant="outline"
                className="border-purple-500/30 bg-purple-500/5 hover:bg-purple-500/10 text-white backdrop-blur-sm px-8 py-6 text-lg transition-all duration-300"
              >
                Get in Touch
              </Button>
            </motion.div>
          </motion.div>

          {/* Right Side - 3D Visual Element */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative hidden lg:block"
          >
            {/* Glowing Orb */}
            <div className="relative w-full aspect-square max-w-md mx-auto">
              <motion.div
                className="absolute inset-0 rounded-full"
                animate={{
                  scale: [1, 1.1, 1],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                style={{
                  background: 'radial-gradient(circle, rgba(234, 179, 8, 0.3) 0%, rgba(234, 179, 8, 0) 70%)',
                  filter: 'blur(40px)',
                }}
              />

              {/* Rotating Rings */}
              <motion.div
                className="absolute inset-0 border-2 border-purple-500/30 rounded-full"
                animate={{ rotate: 360 }}
                transition={{
                  duration: 20,
                  repeat: Infinity,
                  ease: "linear",
                }}
              />
              
              <motion.div
                className="absolute inset-8 border-2 border-purple-400/20 rounded-full"
                animate={{ rotate: -360 }}
                transition={{
                  duration: 15,
                  repeat: Infinity,
                  ease: "linear",
                }}
              />

              {/* Center Glow */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-32 h-32 bg-gradient-to-br from-purple-400 to-violet-500 rounded-full blur-2xl opacity-60" />
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
        className="absolute bottom-12 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="flex flex-col items-center gap-2"
        >
          <div className="w-6 h-10 border-2 border-purple-500/30 rounded-full flex items-start justify-center p-2">
            <motion.div
              animate={{ y: [0, 12, 0] }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="w-1.5 h-1.5 bg-purple-400 rounded-full"
            />
          </div>
          <span className="text-xs text-gray-500 uppercase tracking-wider">Scroll</span>
        </motion.div>
      </motion.div>
    </section>
  );
}
