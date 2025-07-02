"use client"

import { useState, useEffect } from "react"
import { motion, useScroll, useTransform } from "framer-motion"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import {
  Github,
  Linkedin,
  Mail,
  Phone,
  MapPin,
  ExternalLink,
  Download,
  Code,
  Palette,
  Database,
  Globe,
  GraduationCap,
  Calendar,
  User,
  Briefcase,
  MessageCircle,
} from "lucide-react"

export default function Portfolio() {
  const [activeSection, setActiveSection] = useState("home")
  const { scrollYProgress } = useScroll()
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"])

  useEffect(() => {
    const handleScroll = () => {
      const sections = ["home", "about", "education", "projects", "contact"]
      const scrollPosition = window.scrollY + 100

      for (const section of sections) {
        const element = document.getElementById(section)
        if (element) {
          const { offsetTop, offsetHeight } = element
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section)
            break
          }
        }
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      {/* Navigation */}
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        className="fixed top-0 w-full z-50 bg-black/20 backdrop-blur-md border-b border-purple-500/20"
      >
        <div className="container mx-auto px-6 py-4">
          <div className="flex justify-between items-center">
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="text-2xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent"
            >
              Mi Portafolio
            </motion.div>
            <div className="hidden md:flex space-x-8">
              {[
                { id: "home", label: "Inicio" },
                { id: "about", label: "Sobre mí" },
                { id: "education", label: "Educación" },
                { id: "projects", label: "Proyectos" },
                { id: "contact", label: "Contacto" },
              ].map((item) => (
                <motion.button
                  key={item.id}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => scrollToSection(item.id)}
                  className={`text-sm font-medium transition-colors ${
                    activeSection === item.id ? "text-purple-400" : "text-gray-300 hover:text-purple-300"
                  }`}
                >
                  {item.label}
                </motion.button>
              ))}
            </div>
          </div>
        </div>
      </motion.nav>

      {/* Hero Section */}
      <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
        <motion.div style={{ y }} className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-r from-purple-600/20 to-pink-600/20" />
        </motion.div>

        <div className="container mx-auto px-6 z-10">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div initial={{ opacity: 0, x: -50 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.8 }}>
              <h1 className="text-5xl md:text-7xl font-bold mb-6">
                <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-purple-600 bg-clip-text text-transparent">
                  Hola, soy
                </span>
                <br />
                <span className="text-white">Tu Nombre</span>
              </h1>
              <p className="text-xl text-gray-300 mb-8 leading-relaxed">
                Desarrollador Full Stack apasionado por crear experiencias digitales increíbles y soluciones
                innovadoras.
              </p>
              <div className="flex flex-wrap gap-4">
                <Button
                  size="lg"
                  className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700"
                  onClick={() => scrollToSection("projects")}
                >
                  <Briefcase className="mr-2 h-4 w-4" />
                  Ver Proyectos
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="border-purple-400 text-purple-400 hover:bg-purple-400 hover:text-black bg-transparent"
                >
                  <Download className="mr-2 h-4 w-4" />
                  Descargar CV
                </Button>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="flex justify-center"
            >
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full blur-2xl opacity-30 animate-pulse" />
                <img
                  src="/placeholder.svg?height=400&width=400"
                  alt="Tu foto de perfil"
                  className="relative z-10 w-80 h-80 rounded-full object-cover border-4 border-purple-400/50 shadow-2xl"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 relative">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-4">
              <User className="inline mr-3 h-8 w-8 text-purple-400" />
              Sobre Mí
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-purple-400 to-pink-400 mx-auto" />
          </motion.div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <Card className="bg-black/40 border-purple-500/30 backdrop-blur-sm">
                <CardContent className="p-8">
                  <p className="text-gray-300 text-lg leading-relaxed mb-6">
                    Soy un desarrollador apasionado con más de X años de experiencia creando aplicaciones web modernas y
                    escalables. Me especializo en tecnologías como React, Next.js, Node.js y bases de datos.
                  </p>
                  <p className="text-gray-300 text-lg leading-relaxed">
                    Mi objetivo es crear soluciones que no solo funcionen perfectamente, sino que también brinden una
                    experiencia excepcional al usuario.
                  </p>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              className="grid grid-cols-2 gap-6"
            >
              {[
                { icon: Code, title: "Frontend", desc: "React, Next.js, TypeScript" },
                { icon: Database, title: "Backend", desc: "Node.js, Python, PostgreSQL" },
                { icon: Palette, title: "Diseño", desc: "Figma, Tailwind CSS" },
                { icon: Globe, title: "Deploy", desc: "Vercel, AWS, Docker" },
              ].map((skill, index) => (
                <motion.div
                  key={skill.title}
                  whileHover={{ scale: 1.05, y: -5 }}
                  className="bg-black/40 border border-purple-500/30 rounded-lg p-6 text-center backdrop-blur-sm"
                >
                  <skill.icon className="h-8 w-8 text-purple-400 mx-auto mb-3" />
                  <h3 className="text-white font-semibold mb-2">{skill.title}</h3>
                  <p className="text-gray-400 text-sm">{skill.desc}</p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* Education Section */}
      <section id="education" className="py-20 bg-black/20">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-4">
              <GraduationCap className="inline mr-3 h-8 w-8 text-purple-400" />
              Educación y Certificados
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-purple-400 to-pink-400 mx-auto" />
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                type: "Educación",
                title: "Ingeniería en Sistemas",
                institution: "Universidad Ejemplo",
                period: "2018 - 2022",
                description: "Especialización en desarrollo de software y bases de datos",
              },
              {
                type: "Certificado",
                title: "AWS Certified Developer",
                institution: "Amazon Web Services",
                period: "2023",
                description: "Certificación en desarrollo y deployment en AWS",
              },
              {
                type: "Certificado",
                title: "React Developer Certification",
                institution: "Meta",
                period: "2023",
                description: "Certificación avanzada en React y desarrollo frontend",
              },
              {
                type: "Curso",
                title: "Full Stack Development",
                institution: "Platzi",
                period: "2022",
                description: "Curso completo de desarrollo web moderno",
              },
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.02 }}
              >
                <Card className="bg-black/40 border-purple-500/30 backdrop-blur-sm h-full">
                  <CardHeader>
                    <div className="flex items-center justify-between mb-2">
                      <Badge variant="secondary" className="bg-purple-600/20 text-purple-300">
                        {item.type}
                      </Badge>
                      <div className="flex items-center text-gray-400 text-sm">
                        <Calendar className="h-4 w-4 mr-1" />
                        {item.period}
                      </div>
                    </div>
                    <CardTitle className="text-white">{item.title}</CardTitle>
                    <CardDescription className="text-purple-300">{item.institution}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-300">{item.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-4">
              <Briefcase className="inline mr-3 h-8 w-8 text-purple-400" />
              Mis Proyectos
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-purple-400 to-pink-400 mx-auto" />
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "E-commerce Platform",
                description: "Plataforma completa de comercio electrónico con React, Node.js y PostgreSQL",
                image: "/placeholder.svg?height=200&width=300",
                technologies: ["React", "Node.js", "PostgreSQL", "Stripe"],
                github: "#",
                demo: "#",
              },
              {
                title: "Task Management App",
                description:
                  "Aplicación de gestión de tareas con funcionalidades avanzadas y colaboración en tiempo real",
                image: "/placeholder.svg?height=200&width=300",
                technologies: ["Next.js", "TypeScript", "Prisma", "Socket.io"],
                github: "#",
                demo: "#",
              },
              {
                title: "Weather Dashboard",
                description: "Dashboard del clima con visualizaciones interactivas y pronósticos detallados",
                image: "/placeholder.svg?height=200&width=300",
                technologies: ["Vue.js", "Chart.js", "OpenWeather API"],
                github: "#",
                demo: "#",
              },
              {
                title: "Social Media App",
                description: "Red social con chat en tiempo real, posts multimedia y sistema de notificaciones",
                image: "/placeholder.svg?height=200&width=300",
                technologies: ["React Native", "Firebase", "Redux"],
                github: "#",
                demo: "#",
              },
              {
                title: "Portfolio Website",
                description: "Sitio web de portafolio personal con animaciones y diseño responsive",
                image: "/placeholder.svg?height=200&width=300",
                technologies: ["Next.js", "Framer Motion", "Tailwind"],
                github: "#",
                demo: "#",
              },
              {
                title: "AI Chat Bot",
                description: "Chatbot inteligente con procesamiento de lenguaje natural y respuestas contextuales",
                image: "/placeholder.svg?height=200&width=300",
                technologies: ["Python", "OpenAI", "FastAPI", "React"],
                github: "#",
                demo: "#",
              },
            ].map((project, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.05, y: -10 }}
                className="group"
              >
                <Card className="bg-black/40 border-purple-500/30 backdrop-blur-sm overflow-hidden h-full">
                  <div className="relative overflow-hidden">
                    <img
                      src={project.image || "/placeholder.svg"}
                      alt={project.title}
                      className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    <div className="absolute top-4 right-4 flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <Button size="sm" variant="secondary" className="bg-black/60 hover:bg-black/80">
                        <Github className="h-4 w-4" />
                      </Button>
                      <Button size="sm" variant="secondary" className="bg-black/60 hover:bg-black/80">
                        <ExternalLink className="h-4 w-4" />
                      </Button>
                    </div>
                  </div>
                  <CardHeader>
                    <CardTitle className="text-white">{project.title}</CardTitle>
                    <CardDescription className="text-gray-300">{project.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech) => (
                        <Badge key={tech} variant="secondary" className="bg-purple-600/20 text-purple-300 text-xs">
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-black/20">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-4">
              <MessageCircle className="inline mr-3 h-8 w-8 text-purple-400" />
              Contacto
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-purple-400 to-pink-400 mx-auto mb-8" />
            <p className="text-gray-300 text-lg max-w-2xl mx-auto">
              ¿Tienes un proyecto en mente? ¡Me encantaría escuchar sobre él! Contáctame y trabajemos juntos.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-12 max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="space-y-8"
            >
              {[
                {
                  icon: Mail,
                  title: "Email",
                  value: "tu.email@ejemplo.com",
                  href: "mailto:tu.email@ejemplo.com",
                },
                {
                  icon: Phone,
                  title: "Teléfono",
                  value: "+1 (555) 123-4567",
                  href: "tel:+15551234567",
                },
                {
                  icon: MapPin,
                  title: "Ubicación",
                  value: "Ciudad, País",
                  href: "#",
                },
              ].map((contact, index) => (
                <motion.a
                  key={index}
                  href={contact.href}
                  whileHover={{ scale: 1.05, x: 10 }}
                  className="flex items-center space-x-4 p-6 bg-black/40 border border-purple-500/30 rounded-lg backdrop-blur-sm hover:border-purple-400/50 transition-colors"
                >
                  <div className="bg-gradient-to-r from-purple-600 to-pink-600 p-3 rounded-full">
                    <contact.icon className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-white font-semibold">{contact.title}</h3>
                    <p className="text-gray-300">{contact.value}</p>
                  </div>
                </motion.a>
              ))}
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <Card className="bg-black/40 border-purple-500/30 backdrop-blur-sm">
                <CardHeader>
                  <CardTitle className="text-white">Sígueme en redes</CardTitle>
                  <CardDescription className="text-gray-300">Conecta conmigo en mis redes sociales</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  {[
                    { icon: Github, name: "GitHub", username: "@tuusuario", href: "#" },
                    { icon: Linkedin, name: "LinkedIn", username: "Tu Nombre", href: "#" },
                    { icon: Mail, name: "Email", username: "tu.email@ejemplo.com", href: "#" },
                  ].map((social, index) => (
                    <motion.a
                      key={index}
                      href={social.href}
                      whileHover={{ scale: 1.02, x: 5 }}
                      className="flex items-center space-x-3 p-3 rounded-lg hover:bg-purple-600/10 transition-colors"
                    >
                      <social.icon className="h-5 w-5 text-purple-400" />
                      <div>
                        <p className="text-white font-medium">{social.name}</p>
                        <p className="text-gray-400 text-sm">{social.username}</p>
                      </div>
                    </motion.a>
                  ))}
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 border-t border-purple-500/20">
        <div className="container mx-auto px-6 text-center">
          <p className="text-gray-400">© 2024 Tu Nombre. Hecho con ❤️ usando Next.js y Tailwind CSS</p>
        </div>
      </footer>
    </div>
  )
}
