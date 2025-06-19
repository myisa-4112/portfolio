import { ArrowDown, Github, Linkedin, Mail, ExternalLink, Code, Palette, Smartphone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const Index = () => {
  const projects = [
    {
      title: "Z-Bot",
      description: "This React project provides a form interface for users to select auction-related filters (like state, district, provider, and date range) and download corresponding real estate data as an Excel file. It uses dynamic dropdowns based on Indian state/district data and includes authentication and server response handling.",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      technologies: ["React", "Bootstrap", "Node.js", "MongoDB"],
      github: "https://github.com/myisa-4112/Zbot-frontend",
      live: "https://zbot-sandy.vercel.app"
    },
    {
      title: "Poster Creation Tool",
      description: "This project is a dynamic poster builder that lets users customize real estate templates by filling in property details and uploading images. It provides a live preview and allows downloading the final design as a high-resolution image.",
      image: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      technologies: ["React", "Typescript", "Tailwindcss"],
      github: "https://github.com/myisa-4112/poster_creation_tool",
      live: "https://poster-creation-tool.vercel.app"
    },
    {
      title: "StudyBud - Student Collaboration Platform",
      description: "StudyBud is a full-stack student collaboration platform built with Django, featuring user auth, real-time messaging, and room management. It uses Django ORM for database models, template inheritance for UI consistency, and SQLite for efficient data storage.",
      image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      technologies: ["Django", "SQLite"],
      github: "https://github.com/myisa-4112/discord-app",
      live: "#"
    }
  ];

  const skills = [
    { name: "Frontend Development", icon: Code, description: "React, TypeScript, Tailwind CSS" },
    { name: "Backend Development", icon: Palette, description: "Django, Mysql" },
    { name: "Mobile Development", icon: Smartphone, description: "React Native" }
  ];

  const scrollToSection = (sectionId: string) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
  };

  const handleProjectLinkClick = (url: string) => {
    if (url === "#") return;
    window.open(url, "_blank");
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-black/20 backdrop-blur-lg z-50 border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="text-2xl font-bold text-white">Myisa's Portfolio</div>
            <div className="hidden md:flex space-x-8">
              <button onClick={() => scrollToSection('home')} className="text-white hover:text-purple-300 transition-colors">Home</button>
              <button onClick={() => scrollToSection('projects')} className="text-white hover:text-purple-300 transition-colors">Projects</button>
              <button onClick={() => scrollToSection('about')} className="text-white hover:text-purple-300 transition-colors">About</button>
              <button onClick={() => scrollToSection('contact')} className="text-white hover:text-purple-300 transition-colors">Contact</button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-purple-600/20"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <div className="animate-fade-in">
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
              Hi, I'm <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">Myisa Beiucy</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto">
              A passionate full-stack developer crafting beautiful, functional web experiences that bring ideas to life.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button 
                onClick={() => scrollToSection('projects')}
                size="lg" 
                className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white px-8 py-3 rounded-full transition-all duration-300 hover:scale-105"
              >
                View My Work
              </Button>
              <Button 
                onClick={() => scrollToSection('contact')}
                variant="outline" 
                size="lg" 
                className="border-white/20 text-white hover:bg-white/10 px-8 py-3 rounded-full transition-all duration-300"
              >
                Get In Touch
              </Button>
            </div>
          </div>
        </div>
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <ArrowDown className="text-white/60 w-6 h-6" />
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">Featured Projects</h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Here are some of my recent projects that showcase my skills and passion for creating innovative solutions.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <Card key={index} className="bg-white/5 backdrop-blur-lg border-white/10 hover:border-white/20 transition-all duration-300 hover:scale-105 group">
                <div className="relative overflow-hidden rounded-t-lg">
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
                <CardHeader>
                  <CardTitle className="text-white">{project.title}</CardTitle>
                  <CardDescription className="text-gray-300">{project.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.map((tech, techIndex) => (
                      <Badge key={techIndex} variant="secondary" className="bg-purple-500/20 text-purple-300 border-purple-500/30">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                  <div className="flex gap-4">
                    <Button 
                      variant="outline" 
                      size="sm" 
                      className="flex-1 bg-white/10 border-white/20 text-white hover:bg-white/20 hover:border-white/30"
                      onClick={() => handleProjectLinkClick(project.github)}
                      disabled={project.github === "#"}
                    >
                      <Github className="w-4 h-4 mr-2" />
                      Code
                    </Button>
                    <Button 
                      variant="outline" 
                      size="sm" 
                      className="flex-1 bg-white/10 border-white/20 text-white hover:bg-white/20 hover:border-white/30"
                      onClick={() => handleProjectLinkClick(project.live)}
                      disabled={project.live === "#"}
                    >
                      <ExternalLink className="w-4 h-4 mr-2" />
                      Live Demo
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-4 sm:px-6 lg:px-8 bg-black/20">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">About Me</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              I'm a dedicated developer with a passion for creating digital experiences that make a difference. 
              With expertise in modern web technologies, I love turning complex problems into simple, elegant solutions.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {skills.map((skill, index) => (
              <Card key={index} className="bg-white/5 backdrop-blur-lg border-white/10 text-center hover:border-white/20 transition-all duration-300 hover:scale-105">
                <CardHeader>
                  <div className="mx-auto w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center mb-4">
                    <skill.icon className="w-8 h-8 text-white" />
                  </div>
                  <CardTitle className="text-white">{skill.name}</CardTitle>
                  <CardDescription className="text-gray-300">{skill.description}</CardDescription>
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">Let's Work Together</h2>
          <p className="text-xl text-gray-300 mb-12 max-w-2xl mx-auto">
            I'm always excited to take on new challenges and collaborate on interesting projects. 
            Let's discuss how we can bring your ideas to life.
          </p>
          
          {/* Contact Form */}
          <div className="max-w-2xl mx-auto mb-12">
            <form
              className="space-y-6 text-left"
              onSubmit={async (e) => {
                e.preventDefault();

                const scriptURL = "https://script.google.com/macros/s/AKfycbzI_XZ5HGj0t93AiqzckgFxU6Zhn0_zzf5dR1FJoio3MFyLrEDqbmrJFUgiJzWtjtGXig/exec";

                const form = e.currentTarget;
                const formData = new FormData(form);

                const jsonData = Object.fromEntries(formData.entries());

                try {
                  await fetch(scriptURL, {
                    method: "POST",
                    mode: "no-cors",
                    headers: {
                      "Content-Type": "application/json",
                    },
                    body: JSON.stringify(jsonData),
                  });

                  alert("Form submitted!");
                  form.reset(); // optional: resets form after submit
                } catch (error) {
                  console.error("Error submitting form", error);
                  alert("Failed to submit.");
                }
              }}
            >
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                    placeholder="your.email@example.com"
                  />
                </div>
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={6}
                  required
                  className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent resize-none"
                  placeholder="Tell me about your project..."
                ></textarea>
              </div>
              <div className="text-center">
                <Button 
                  type="submit"
                  size="lg" 
                  className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white px-8 py-3 rounded-full transition-all duration-300 hover:scale-105 border-none"
                >
                  <Mail className="w-5 h-5 mr-2" />
                  Send Message
                </Button>
              </div>
            </form>

          </div>

          <div className="flex justify-center gap-8">
            <a href="https://github.com/myisa-4112" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors duration-300 hover:scale-110 transform">
              <Github className="w-8 h-8" />
            </a>
            <a href="https://www.linkedin.com/in/myisa-beiucy/" className="text-gray-400 hover:text-white transition-colors duration-300 hover:scale-110 transform">
              <Linkedin className="w-8 h-8" />
            </a>
            <a href="mailto:myisabeiucy2002@gmail.com" className="text-gray-400 hover:text-white transition-colors duration-300 hover:scale-110 transform">
              <Mail className="w-8 h-8" />
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-4 sm:px-6 lg:px-8 border-t border-white/10">
        <div className="max-w-7xl mx-auto text-center">
          <p className="text-gray-400">© 2025 Myisa Beiucy. Built with React and Tailwind CSS.</p>
        </div>
      </footer>
    </div>
  );
};

export default Index;