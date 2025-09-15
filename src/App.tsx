import React, { useState, useEffect } from 'react';
import { Menu, X, Github, Linkedin, Instagram, Mail, Phone, MapPin, Calendar, Code, Server, Database, Cloud, TrendingUp } from 'lucide-react';

type Section = 'welcome' | 'resume' |  'personal';

interface Skill {
  name: string;
  items: string[];
}

interface Project {
  title: string;
  description: string;
  tech: string[];
  image: string;
}

interface NavButtonProps {
  section: Section;
  children: React.ReactNode;
  onClick: () => void;
}

interface SkillCardProps {
  category: string;
  skills: Skill[];
}

const Portfolio: React.FC = () => {
  const [activeSection, setActiveSection] = useState<Section>('welcome');
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);
  const [isScrolled, setIsScrolled] = useState<boolean>(false);

  useEffect(() => {
    const handleScroll = (): void => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const skills: Record<string, Skill[]> = {
    backend: [
      { name: 'Python', items: ['Flask', 'Falcon', 'Chalice', 'FastAPI', 'Django'] },
      { name: 'PHP', items: ['Laravel'] },
      { name: 'JavaScript', items: ['Node.js'] }
    ],
    frontend: [
      { name: 'JavaScript Frameworks', items: ['React', 'Angular', 'Vue.js'] },
      { name: 'Web Technologies', items: ['HTML5', 'CSS3', 'Bootstrao', 'Materialize', 'Tailwind CSS'] }
    ],
    cloud: [
      { name: 'AWS Services', items: ['S3', 'Lambda', 'EC2', 'API Gateway', 'CloudWatch', 'SQS', 'RDS'] },
      { name: 'DevOps', items: ['Docker', 'Linux Administration', 'Git & GitHub', 'Github Actions'] }
    ],
    databases: [
      { name: 'Databases', items: ['RethinkDB', 'MySQL', 'MongoDB', 'PostgreSQL'] },
      { name: 'Mobile', items: ['iOS Development'] }
    ]
  };

/*  const projects: Project[] = [
    {
      title: 'Personal Software Project',
      description: 'Innovative software solutions using modern technologies',
      tech: ['Python', 'AWS', 'React'],
      image: '🚀'
    },
    {
      title: 'Musical Project',
      description: 'Creative musical endeavors and digital compositions',
      tech: ['Creative', 'Digital Audio'],
      image: '🎵'
    }
  ];
*/
  const NavButton: React.FC<NavButtonProps> = ({ section, children, onClick }) => (
    <button
      onClick={onClick}
      className={`px-4 py-2 rounded-lg transition-all duration-300 font-medium ${
        activeSection === section
          ? 'bg-gradient-to-r from-emerald-500 to-teal-500 text-white shadow-lg shadow-emerald-500/25'
          : 'text-gray-300 hover:text-white hover:bg-gray-800/50'
      }`}
    >
      {children}
    </button>
  );

  const SkillCard: React.FC<SkillCardProps> = ({ category, skills: skillList }) => {
    const getIcon = (): React.ReactNode => {
      switch (category) {
        case 'backend':
          return <Server className="w-6 h-6 text-emerald-400 mr-2" />;
        case 'frontend':
          return <Code className="w-6 h-6 text-blue-400 mr-2" />;
        case 'cloud':
          return <Cloud className="w-6 h-6 text-purple-400 mr-2" />;
        case 'databases':
          return <Database className="w-6 h-6 text-orange-400 mr-2" />;
        default:
          return <Code className="w-6 h-6 text-gray-400 mr-2" />;
      }
    };

    return (
      <div className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-6 border border-gray-700/50 hover:border-emerald-500/30 transition-all duration-300 hover:shadow-lg hover:shadow-emerald-500/10">
        <div className="flex items-center mb-4">
          {getIcon()}
          <h3 className="text-xl font-bold text-white capitalize">{category}</h3>
        </div>
        {skillList.map((skill, index) => (
          <div key={index} className="mb-4 last:mb-0">
            <h4 className="text-emerald-400 font-semibold mb-2">{skill.name}</h4>
            <div className="flex flex-wrap gap-2">
              {skill.items.map((item, idx) => (
                <span
                  key={idx}
                  className="px-3 py-1 bg-gray-900/50 text-gray-300 rounded-full text-sm border border-gray-600/30 hover:border-emerald-500/50 transition-colors duration-200"
                >
                  {item}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    );
  };

  const WelcomeSection: React.FC = () => (
    <div className="min-h-screen flex items-center justify-center relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-black to-gray-900"></div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_40%,rgba(16,185,129,0.1),transparent_50%)]"></div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_60%,rgba(59,130,246,0.1),transparent_50%)]"></div>
      
  <div className="text-center z-10 max-w-4xl mx-auto px-6">
        <div className="relative mb-8">
            <div className="w-80 h-80 mx-auto rounded-2xl bg-gradient-to-br from-emerald-400 to-teal-600 p-1 animate-pulse">
              <div className="w-full h-full rounded-2xl bg-gray-900 overflow-hidden">
                <img 
                  src="/src/assets/me.png" 
                  alt="Jorge Chávez" 
                  className="w-full h-full object-contain scale-100"
                />
              </div>
            </div>
          <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-emerald-400/20 to-teal-400/20 blur-xl animate-pulse"></div>
        </div>
        
        <h1 className="text-4xl font-bold bg-gradient-to-r from-emerald-400 via-teal-300 to-blue-400 bg-clip-text text-transparent mb-4">
          ¡ Hi, I'm Jorge Chávez !
        </h1>
        <p className="text-2xl text-gray-300 mb-8 font-light">
          Computer Engineer & Full-Stack Developer
        </p>
        <p className="text-lg text-gray-400 mb-12 max-w-2xl mx-auto leading-relaxed">
          Transforming ideas into scalable solutions with cutting-edge technologies. 
          Specialized in cloud architectures, modern web frameworks, and system design.
        </p>

      </div>
    </div>
  );

  const PersonalSection: React.FC = () => (
    <div className="min-h-screen py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-16 bg-gradient-to-r from-emerald-400 to-teal-400 bg-clip-text text-transparent">
          About Me
        </h2>
        
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <div className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm rounded-2xl p-8 border border-gray-700/50">
              <h3 className="text-2xl font-bold text-emerald-400 mb-6 flex items-center">
                <MapPin className="w-6 h-6 mr-2" />
                Background
              </h3>
              <p className="text-gray-300 leading-relaxed text-lg">
              Born in Morelos, Mexico, and currently living in Mexico City, Iztapalapa district. Over the years, I have cultivated a strong passion for technology, which led me to pursue a degree in Computer Engineering at the National Autonomous University of Mexico (UNAM). Since then, I have specialized in modern web development—both backend and frontend—as well as in designing cloud-oriented solutions.
              </p>
            </div>
            
            <div className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm rounded-2xl p-8 border border-gray-700/50">
              <h3 className="text-2xl font-bold text-blue-400 mb-6">Interests & Hobbies</h3>
              <div className="grid grid-cols-2 gap-4">
                {['Family Time','Basketball', 'Movies & Series', 'Photography', 'Gym', 'Video Games'].map((hobby, index) => (
                  <div key={index} className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-gradient-to-r from-emerald-400 to-teal-400 rounded-full"></div>
                    <span className="text-gray-300">{hobby}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
          
          <div className="space-y-6">
            <div className="bg-gradient-to-br from-emerald-900/20 to-teal-900/20 backdrop-blur-sm rounded-2xl p-8 border border-emerald-500/20">
            <h3 className="text-2xl font-bold text-emerald-400 mb-6 flex items-center">
                <TrendingUp className="w-6 h-6 mr-2" />
                Professional Growth
              </h3>
              <p className="text-gray-300 leading-relaxed text-lg">
              During my time at university, I was part of PROTECO (Computer Technology Program), which helped me establish myself as a full-stack developer. Over the years, the projects I have worked on have continuously expanded my experience in cloud technologies, modern frameworks, and scalable system design. My career reflects a strong commitment to staying at the forefront of technology and delivering tailored solutions that drive the growth of the companies and projects I collaborate with.
              </p>
            </div>
            
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-gray-800/30 rounded-xl p-6 border border-gray-700/30 text-center">
                <Calendar className="w-8 h-8 text-emerald-400 mx-auto mb-2" />
                <div className="text-2xl font-bold text-white">6+</div>
                <div className="text-gray-400 text-sm">Years Experience</div>
              </div>
              <div className="bg-gray-800/30 rounded-xl p-6 border border-gray-700/30 text-center">
                <Code className="w-8 h-8 text-blue-400 mx-auto mb-2" />
                <div className="text-2xl font-bold text-white">15+</div>
                <div className="text-gray-400 text-sm">Technologies</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  const ResumeSection: React.FC = () => (
    <div className="min-h-screen py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-16 bg-gradient-to-r from-emerald-400 to-teal-400 bg-clip-text text-transparent">
          Professional Resume
        </h2>
        
        <div className="grid lg:grid-cols-3 gap-8 mb-12">
          <div className="lg:col-span-1">
            <div className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm rounded-2xl p-8 border border-gray-700/50 sticky top-8">
              <div className="text-center mb-8">
                <div className="w-32 h-32 mx-auto rounded-full bg-gradient-to-br from-emerald-400 to-teal-600 p-1 mb-4">
                  <div className="w-full h-full rounded-full bg-white overflow-hidden relative">
                    <img 
                      src="/src/assets/meprofile.png" 
                      alt="yoreal" 
                      className="w-full h-full object-contain rounded-full"
                    />
                  </div>
                </div>
                <h3 className="text-2xl font-bold text-white mb-2">Jorge Luis Chávez Delgado</h3>
                <p className="text-emerald-400">Fullstack Developer</p>
              </div>
              
              <div className="space-y-6">
                <div>
                  <h4 className="text-lg font-semibold text-white mb-3 flex items-center">
                    <Mail className="w-4 h-4 mr-2 text-emerald-400" />
                    Contact
                  </h4>
                  <div className="space-y-2 text-gray-300">
                    <p className="flex items-center">
                      <Mail className="w-4 h-4 mr-2 text-gray-400" />
                      jorgech777@icloud.com
                    </p>
                    <p className="flex items-center">
                      <Phone className="w-4 h-4 mr-2 text-gray-400" />
                      +52 1 55 54528740
                    </p>
                  </div>
                </div>
                
                <div>
                  <h4 className="text-lg font-semibold text-white mb-3">Languages</h4>
                  <div className="space-y-3">
                    <div>
                      <div className="flex justify-between text-sm mb-1">
                        <span className="text-gray-300">Spanish</span>
                        <span className="text-emerald-400">Native</span>
                      </div>
                      <div className="w-full bg-gray-700 rounded-full h-2">
                        <div className="bg-gradient-to-r from-emerald-400 to-teal-400 h-2 rounded-full w-full"></div>
                      </div>
                    </div>
                    <div>
                      <div className="flex justify-between text-sm mb-1">
                        <span className="text-gray-300">English</span>
                        <span className="text-blue-400">Intermediate</span>
                      </div>
                      <div className="w-full bg-gray-700 rounded-full h-2">
                        <div className="bg-gradient-to-r from-blue-400 to-blue-500 h-2 rounded-full w-2/4"></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          <div className="lg:col-span-2 space-y-8">
            <div className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm rounded-2xl p-8 border border-gray-700/50">
              <h3 className="text-2xl font-bold text-emerald-400 mb-6">Education</h3>
              <div className="space-y-4">
              <div className="border-l-4 border-purple-500 pl-6">
                  <h4 className="text-xl font-semibold text-white">Diploma in Information Technology Infrastructure</h4>
                  <p className="text-emerald-400">Faculty of Engineering, UNAM</p>
                </div>
                <div className="border-l-4 border-orange-500 pl-6">
                  <h4 className="text-xl font-semibold text-white">Instructor</h4>
                  <p className="text-emerald-400">Computer Technology Program at Faculty of Engineering, UNAM</p>
                </div>
                <div className="border-l-4 border-emerald-500 pl-6">
                  <h4 className="text-xl font-semibold text-white">Computer Engineering</h4>
                  <p className="text-emerald-400">Faculty of Engineering, UNAM</p>
                </div>
                <div className="border-l-4 border-blue-500 pl-6">
                  <h4 className="text-xl font-semibold text-white">Computer Technician</h4>
                  <p className="text-blue-400">National Preparatory School #5, UNAM</p>
                </div>
              </div>
            </div>
            <div className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm rounded-2xl p-8 border border-gray-700/50">
              <h3 className="text-2xl font-bold text-sky-400 mb-6">Work Experience</h3>
              <div className="space-y-6">
                {/* Prestanómico */}
                <div className="border-l-4 border-emerald-500 pl-6">
                  <div className="flex items-start justify-between mb-2">
                    <div>
                      <h4 className="text-xl font-semibold text-white">Desarrollador web fullstack</h4>
                      <p className="text-emerald-400 font-medium">Prestanómico</p>
                    </div>
                    <div className="text-right text-sm text-gray-400">
                      <p>dic. 2020 - actualidad</p>
                      <p>4 años 10 meses</p>
                    </div>
                  </div>
                  <p className="text-gray-300 mb-2">CDMX • Jornada completa • Modalidad Remoto</p>
                  <p className="text-gray-400 text-sm mb-3">Desarrollador Python Web Fullstack</p>
                  <div className="flex flex-wrap gap-2">
                    <span className="px-2 py-1 bg-emerald-900/30 text-emerald-300 rounded text-xs">Desarrollo de API</span>
                    <span className="px-2 py-1 bg-emerald-900/30 text-emerald-300 rounded text-xs">Flask</span>
                    <span className="px-2 py-1 bg-emerald-900/30 text-emerald-300 rounded text-xs">Python</span>
                    <span className="px-2 py-1 bg-emerald-900/30 text-emerald-300 rounded text-xs">+15 aptitudes más</span>
                  </div>
                </div>

                {/* SI Consulting */}
                <div className="border-l-4 border-blue-500 pl-6">
                  <div className="flex items-start justify-between mb-2">
                    <div>
                      <h4 className="text-xl font-semibold text-white">Desarrollador SAP HANA XS / Consultor SAP MM</h4>
                      <p className="text-blue-400 font-medium">SI Consulting</p>
                    </div>
                    <div className="text-right text-sm text-gray-400">
                      <p>mar. 2020 - nov. 2020</p>
                      <p>9 meses</p>
                    </div>
                  </div>
                  <p className="text-gray-300 mb-2">CDMX • Jornada completa • Modalidad Híbrido</p>
                  <div className="flex flex-wrap gap-2">
                    <span className="px-2 py-1 bg-blue-900/30 text-blue-300 rounded text-xs">JSON</span>
                    <span className="px-2 py-1 bg-blue-900/30 text-blue-300 rounded text-xs">Trabajo en equipo</span>
                    <span className="px-2 py-1 bg-blue-900/30 text-blue-300 rounded text-xs">+2 aptitudes más</span>
                  </div>
                </div>

                {/* Promotora Ilduomo */}
                <div className="border-l-4 border-purple-500 pl-6">
                  <div className="flex items-start justify-between mb-2">
                    <div>
                      <h4 className="text-xl font-semibold text-white">Ingeniero de software</h4>
                      <p className="text-purple-400 font-medium">Promotora Ilduomo</p>
                    </div>
                    <div className="text-right text-sm text-gray-400">
                      <p>feb. 2019 - may. 2020</p>
                      <p>1 año 4 meses</p>
                    </div>
                  </div>
                  <p className="text-gray-300 mb-2">CDMX • Jornada Medio tiempo • Modalidad Híbrido</p>
                  <p className="text-gray-400 text-sm mb-3">Capacitación sobre tecnologías web e implementación de nuevos aplicativos</p>
                  
                  <div className="flex flex-wrap gap-2">
                    <span className="px-2 py-1 bg-purple-900/30 text-purple-300 rounded text-xs">Desarrollo de API</span>
                    <span className="px-2 py-1 bg-purple-900/30 text-purple-300 rounded text-xs">Git</span>
                    <span className="px-2 py-1 bg-purple-900/30 text-purple-300 rounded text-xs">+14 aptitudes más</span>
                  </div>
                </div>

                {/* StratBranding */}
                <div className="border-l-4 border-orange-500 pl-6">
                  <div className="flex items-start justify-between mb-2">
                    <div>
                      <h4 className="text-xl font-semibold text-white">Desarrollador de Python</h4>
                      <p className="text-orange-400 font-medium">StratBranding</p>
                    </div>
                    <div className="text-right text-sm text-gray-400">
                      <p>ene. 2019 - mar. 2020</p>
                      <p>1 año 3 meses</p>
                    </div>
                  </div>
                  <p className="text-gray-300 mb-2">CDMX • Jornada Medio tiempo • Modalidad Híbrido</p>
                  <p className="text-gray-400 text-sm mb-3">Desarrollador python, automatización de procesos para la visualización de datos</p>
                  <div className="flex flex-wrap gap-2">
                    <span className="px-2 py-1 bg-orange-900/30 text-orange-300 rounded text-xs">Git</span>
                    <span className="px-2 py-1 bg-orange-900/30 text-orange-300 rounded text-xs">GitHub</span>
                    <span className="px-2 py-1 bg-orange-900/30 text-orange-300 rounded text-xs">+5 aptitudes más</span>
                  </div>
                </div>

                {/* FEMEDESSIR */}
                <div className="border-l-4 border-teal-500 pl-6">
                  <div className="flex items-start justify-between mb-2">
                    <div>
                      <h4 className="text-xl font-semibold text-white">Desarrollador Fullstack</h4>
                      <p className="text-teal-400 font-medium">Federación Mexicana de Deportes sobre Silla de Ruedas</p>
                    </div>
                    <div className="text-right text-sm text-gray-400">
                      <p>jun. 2018 - nov. 2019</p>
                      <p>1 año 6 meses</p>
                    </div>
                  </div>
                  <p className="text-gray-300 mb-2">CDMX • Profesional independiente • Modalidad Híbrido</p>
                  <p className="text-gray-400 text-sm mb-3">Realización del sitio web de la FEMEDESSIR, frontend, backend y administración del servidor (VPS)</p>
                  <div className="flex flex-wrap gap-2">
                    <span className="px-2 py-1 bg-teal-900/30 text-teal-300 rounded text-xs">Git</span>
                    <span className="px-2 py-1 bg-teal-900/30 text-teal-300 rounded text-xs">GitHub</span>
                    <span className="px-2 py-1 bg-teal-900/30 text-teal-300 rounded text-xs">+6 aptitudes más</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm rounded-2xl p-8 border border-gray-700/50">
              <h3 className="text-2xl font-bold text-purple-400 mb-6">Professional Skills</h3>
              <div className="space-y-4">
                {['Leadership & Teaching', 'Team Collaboration', 'Problem Solving', 'Project Management', 'Continuous Learning'].map((skill, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <div className="w-3 h-3 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full"></div>
                    <span className="text-gray-300">{skill}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {Object.entries(skills).map(([category, skillList]) => (
            <SkillCard key={category} category={category} skills={skillList} />
          ))}
        </div>
      </div>
    </div>
  );

  const sections: Record<Section, React.ReactNode> = {
    welcome: <WelcomeSection />,
    resume: <ResumeSection />,
    personal: <PersonalSection />
    
  };

  return (
    <div className="bg-black text-white min-h-screen">
      {/* Navigation */}
      <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled ? 'bg-black/80 backdrop-blur-lg border-b border-gray-800/50' : 'bg-transparent'
      }`}>
        <div className="max-w-6xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="text-2xl font-bold bg-gradient-to-r from-emerald-400 to-teal-400 bg-clip-text text-transparent">
              
            </div>
            
            {/* Desktop Navigation */}
            <div className="hidden md:flex space-x-2">
              <NavButton section="welcome" onClick={() => setActiveSection('welcome')}>
                Welcome
              </NavButton>
              <NavButton section="personal" onClick={() => setActiveSection('personal')}>
                Personal
              </NavButton>
              <NavButton section="resume" onClick={() => setActiveSection('resume')}>
                Resume
              </NavButton>
            </div>
            
            {/* Mobile Menu Button */}
            <button 
              className="md:hidden p-2 rounded-lg hover:bg-gray-800/50 transition-colors duration-200"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label="Toggle menu"
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
          
          {/* Mobile Navigation */}
          {isMenuOpen && (
            <div className="md:hidden mt-4 pb-4 space-y-2">
              <div className="flex flex-col space-y-2">
                <NavButton section="welcome" onClick={() => {setActiveSection('welcome'); setIsMenuOpen(false);}}>
                  Welcome
                </NavButton>
                <NavButton section="personal" onClick={() => {setActiveSection('personal'); setIsMenuOpen(false);}}>
                  Personal
                </NavButton>
                <NavButton section="resume" onClick={() => {setActiveSection('resume'); setIsMenuOpen(false);}}>
                  Resume
                </NavButton>
              </div>
            </div>
          )}
        </div>
      </nav>
      
      {/* Content */}
      <div className="pt-16">
        {sections[activeSection]}
      </div>
      
      {/* Footer */}
      <footer className="bg-black border-t border-gray-800/50 py-8">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <div className="flex justify-center space-x-6 mb-4">
            <a 
              href="#" 
              className="text-gray-400 hover:text-emerald-400 transition-colors duration-300"
              aria-label="Instagram"
            >
              <Instagram className="w-5 h-5 text-white" />
            </a>
            <a 
              href="https://github.com/kubos777" 
              className="text-gray-400 hover:text-emerald-400 transition-colors duration-300"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
            >
              <Github className="w-6 h-6" />
            </a>
            <a 
              href="https://linkedin.com" 
              className="text-gray-400 hover:text-emerald-400 transition-colors duration-300"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
            >
              <Linkedin className="w-6 h-6" />
            </a>
          </div>
          <p className="text-gray-400">© 2025 Built with React & Tailwind CSS</p>
        </div>
      </footer>
    </div>
  );
};

export default Portfolio;