import { ReactNode } from "react";
import { motion } from "motion/react";
import { 
  Mail, 
  Phone, 
  GraduationCap, 
  Briefcase, 
  Award, 
  BookOpen, 
  Globe, 
  Users, 
  FileText, 
  ChevronRight,
  ExternalLink,
  MapPin,
  Calendar,
  Microscope,
  Zap,
  CheckCircle2,
  Linkedin,
  Download,
  Sparkles
} from "lucide-react";

const SectionHeader = ({ title, icon: Icon }: { title: string, icon: any }) => (
  <div className="flex items-center gap-4 mb-10">
    <div className="p-3 bg-brand-accent/10 rounded-xl">
      <Icon className="w-6 h-6 text-brand-accent" />
    </div>
    <h2 className="text-3xl font-display font-bold text-brand-primary tracking-tight">{title}</h2>
  </div>
);

const Card = ({ children, className = "", ...props }: { children: ReactNode, className?: string, [key: string]: any }) => (
  <div {...props} className={`bg-white rounded-3xl p-8 border border-slate-100 shadow-sm hover:shadow-md transition-all duration-300 ${className}`}>
    {children}
  </div>
);

const Badge = ({ children, variant = "default" }: { children: ReactNode, variant?: "default" | "accent" | "outline" }) => (
  <span className={`px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider ${
    variant === "accent" ? "bg-brand-accent/10 text-brand-accent" : 
    variant === "outline" ? "border border-brand-accent/30 text-brand-accent" :
    "bg-slate-100 text-slate-600"
  }`}>
    {children}
  </span>
);

export default function App() {
  const handleDownloadCV = () => {
    window.print();
  };

  return (
    <div className="min-h-screen bg-brand-surface font-sans selection:bg-brand-accent/20 selection:text-brand-accent scroll-smooth">
      {/* Modern Hero Section */}
      <header className="relative pt-8 pb-12 overflow-hidden">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-brand-accent/5 -skew-x-12 translate-x-1/4 z-0" />
        
        <div className="container mx-auto px-6 relative z-10">
          <div className="flex flex-col lg:flex-row items-center gap-10">
            <motion.div 
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="flex-1 text-center lg:text-left"
            >
              <div className="flex flex-wrap justify-center lg:justify-start gap-3 mb-4">
                <Badge variant="accent">Environmental Engineer</Badge>
                <Badge variant="outline">PhD Researcher</Badge>
              </div>
              <h1 className="text-4xl lg:text-6xl font-display font-black text-brand-primary mb-4 leading-[0.9]">
                Me Me <br />
                <span className="text-brand-accent">Maw</span>
              </h1>
              <p className="text-base text-slate-600 max-w-xl mb-6 leading-relaxed">
                Doctor of Philosophy (PhD) specializing in Environmental and Water Resources Engineering. 
                Pioneering research in <span className="text-brand-accent font-bold">microplastics removal</span> from wastewater systems.
              </p>
              
              <div className="flex flex-wrap justify-center lg:justify-start gap-4 print:hidden">
                <button 
                  onClick={handleDownloadCV}
                  className="group flex items-center gap-3 bg-brand-primary text-white px-8 py-4 rounded-2xl hover:bg-brand-accent transition-all shadow-lg hover:shadow-brand-accent/20"
                >
                  <Download className="w-5 h-5" />
                  <span className="font-semibold">Download CV</span>
                </button>
                <a 
                  href="https://www.linkedin.com/in/me-me-maw-9436b8123/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 bg-white border border-slate-200 px-8 py-4 rounded-2xl hover:border-brand-accent transition-all group"
                >
                  <Linkedin className="w-5 h-5 text-brand-accent group-hover:scale-110 transition-transform" />
                  <span className="font-semibold">LinkedIn</span>
                </a>
              </div>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, ease: "easeOut" }}
              className="relative"
            >
              <div className="relative w-48 h-[240px] lg:w-[260px] lg:h-[360px]">
                {/* Decorative background elements */}
                <div className="absolute -inset-4 bg-brand-accent/10 rounded-[2rem] -rotate-3 blur-2xl" />
                <div className="absolute inset-0 bg-brand-accent/5 rounded-[2rem] rotate-3" />
                
                {/* Main Image Container */}
                <div className="relative w-full h-full overflow-hidden rounded-[2rem] shadow-[0_16px_32px_-8px_rgba(0,0,0,0.1)] border-8 border-white">
                  <img 
                    src="https://picsum.photos/seed/mememaw_professional/800/1000" 
                    alt="Me Me Maw" 
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                    referrerPolicy="no-referrer"
                  />
                </div>

                {/* Floating Badge */}
                <motion.div 
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5 }}
                  className="absolute -bottom-8 -right-8 bg-white p-6 rounded-3xl shadow-2xl border border-slate-100 hidden md:block"
                >
                  <div className="flex items-center gap-4">
                    <div className="p-3 bg-emerald-50 rounded-2xl">
                      <Sparkles className="w-6 h-6 text-emerald-600" />
                    </div>
                    <div>
                      <p className="text-[10px] text-slate-400 font-bold uppercase tracking-[0.2em] mb-1">Research Impact</p>
                      <p className="text-xl font-display font-bold text-brand-primary">Q1 Publications</p>
                    </div>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>
      </header>

      <main className="container mx-auto px-6 pb-32">
        {/* Bento Grid: Education & Skills & Research Impact */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-24">
          <Card className="lg:col-span-2">
            <SectionHeader title="Academic Journey" icon={GraduationCap} />
            <div className="space-y-10">
              {[
                { 
                  degree: "Doctor of Philosophy (PhD.)", 
                  field: "Environmental and Water Resources Engineering", 
                  school: "Mahidol University, Thailand", 
                  year: "2023",
                  accent: true
                },
                { 
                  degree: "Master of Science", 
                  field: "Industrial Chemistry", 
                  school: "Yandanabon University, Myanmar", 
                  year: "2014" 
                },
                { 
                  degree: "Bachelor of Science (Hons.)", 
                  field: "Industrial Chemistry", 
                  school: "Yandanabon University, Myanmar", 
                  year: "2012" 
                }
              ].map((edu, idx) => (
                <div key={idx} className="flex gap-6 group">
                  <div className={`w-12 h-12 rounded-2xl flex items-center justify-center shrink-0 transition-colors ${edu.accent ? 'bg-brand-accent text-white' : 'bg-slate-100 text-slate-400'}`}>
                    <GraduationCap className="w-6 h-6" />
                  </div>
                  <div>
                    <div className="flex items-center gap-3 mb-1">
                      <h3 className="text-xl font-display font-bold text-brand-primary">{edu.degree}</h3>
                      <Badge>{edu.year}</Badge>
                    </div>
                    <p className="text-brand-accent font-medium mb-1">{edu.field}</p>
                    <p className="text-slate-500 text-sm">{edu.school}</p>
                  </div>
                </div>
              ))}
            </div>
          </Card>

          <div className="space-y-8">
            <Card className="bg-brand-primary text-white border-none">
              <SectionHeader title="Research Impact" icon={Sparkles} />
              <div className="space-y-6">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-brand-accent/20 rounded-xl flex items-center justify-center text-brand-accent font-black text-xl">Q1</div>
                  <p className="text-sm text-slate-300">Top-tier international journal publications in <span className="text-white font-bold">Chemosphere</span> and <span className="text-white font-bold">STOTEN</span>.</p>
                </div>
                <div className="p-4 bg-white/5 rounded-2xl border border-white/10">
                  <p className="text-xs font-bold text-brand-accent uppercase mb-2 tracking-widest">Key Contribution</p>
                  <p className="text-sm text-slate-300 leading-relaxed">
                    Developed rapid and efficient methods for extracting microplastics from sewage sludge, significantly improving environmental monitoring accuracy.
                  </p>
                </div>
              </div>
            </Card>

            <Card>
              <SectionHeader title="Expertise" icon={Award} />
              <div className="space-y-6">
                <div>
                  <h3 className="text-[10px] font-black text-slate-400 uppercase tracking-[0.2em] mb-3">Technical Stack</h3>
                  <div className="flex flex-wrap gap-2">
                    {["FTIR", "Raman", "Motic Image", "GIS", "R", "SPSS"].map(s => (
                      <span key={s} className="px-2 py-1 bg-slate-50 text-slate-700 text-[10px] font-bold rounded-lg border border-slate-100">
                        {s}
                      </span>
                    ))}
                  </div>
                </div>
                <div>
                  <h3 className="text-[10px] font-black text-slate-400 uppercase tracking-[0.2em] mb-3">Languages</h3>
                  <div className="space-y-2">
                    <div className="flex justify-between items-center text-sm">
                      <span className="font-semibold">Burmese</span>
                      <span className="text-brand-accent font-bold">Native</span>
                    </div>
                    <div className="flex justify-between items-center text-sm">
                      <span className="font-semibold">English</span>
                      <span className="text-slate-400">Working</span>
                    </div>
                  </div>
                </div>
              </div>
            </Card>
          </div>
        </div>

        {/* Professional Experience */}
        <div className="mb-24">
          <SectionHeader title="Professional Trajectory" icon={Briefcase} />
          <div className="space-y-8">
            {[
              {
                role: "Environmental Consultant",
                company: "E Guard Environmental Services Co., Ltd.",
                location: "Yangon, Myanmar",
                period: "May 2015 – 2024",
                type: "Full-time (2015-2018) & Project-based (2019-2024)",
                tasks: [
                  "Lead and arrange for the assigned EIA, EMP, IEE projects.",
                  "Perform site investigation for environmental baseline data collection (air, water, biodiversity, soil and demographic etc.) in and around the project region.",
                  "Coordinating with project proponents, and all stakeholders.",
                  "Prepare and write comprehensive EIA reports including baseline studies, assessments, mitigation measures.",
                  "Prepare presentation, arrange for public consulting meeting."
                ]
              },
              {
                role: "Teaching Assistant",
                company: "Faculty of Engineering, Mahidol University",
                location: "Thailand",
                period: "Two Semesters",
                type: "Environmental and Water Resources Engineering",
                tasks: [
                  "Responsible for setting up laboratory experiments related to water/wastewater sampling collection and analysis.",
                  "Preparation of chemicals, reagents, calibration equipment’s and ensuring that all necessary materials are available.",
                  "Helping students understand to do experiments correctly and safely, correctly, and answering their questions."
                ]
              },
              {
                role: "Technical Sale Executive",
                company: "Myint Thukha Nadi Co., Ltd.",
                location: "Yangon, Myanmar",
                period: "Aug 2014 – Mar 2015",
                tasks: [
                  "Assist to prepare price quotation for chemicals, glassware and education books for government tenders.",
                  "Perform as an assistant for client communication, technical sale etc."
                ]
              }
            ].map((job, idx) => (
              <Card key={idx} className="group overflow-hidden">
                <div className="flex flex-col md:flex-row md:items-start gap-8">
                  <div className="md:w-1/3">
                    <Badge variant="accent">{job.period}</Badge>
                    <h3 className="text-2xl font-display font-bold text-brand-primary mt-4 mb-2">{job.role}</h3>
                    <p className="text-brand-accent font-semibold flex items-center gap-2">
                      <Briefcase className="w-4 h-4" /> {job.company}
                    </p>
                    <p className="text-slate-400 text-sm mt-1 flex items-center gap-2">
                      <MapPin className="w-3 h-3" /> {job.location}
                    </p>
                    <p className="text-xs text-slate-400 mt-4 italic">{job.type}</p>
                  </div>
                  <div className="md:w-2/3 border-l border-slate-100 md:pl-8">
                    <ul className="space-y-4">
                      {job.tasks.map((task, tIdx) => (
                        <li key={tIdx} className="flex gap-4 text-slate-600 leading-relaxed">
                          <CheckCircle2 className="w-5 h-5 text-brand-accent shrink-0 mt-0.5" />
                          <span>{task}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>

        {/* Research & Publications */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-24">
          <div>
            <SectionHeader title="Journal Publications" icon={BookOpen} />
            <div className="space-y-6">
              {[
                {
                  title: "Microplastics in Wastewater and Sludge from Centralized and Decentralized Wastewater Treatment Plants",
                  journal: "Chemosphere",
                  year: "2024",
                  doi: "https://doi.org/10.1016/j.chemosphere.2024.142536",
                  rank: "Q1"
                },
                {
                  title: "Rapid and efficient removal of organic matter from sewage sludge for extraction of microplastics",
                  journal: "Science of the Total Environment",
                  year: "2022",
                  doi: "https://doi.org/10.1016/j.scitotenv.2022.158642",
                  rank: "Q1"
                },
                {
                  title: "Occurrence and removal of microplastics in activated sludge treatment systems: A case study in Thailand",
                  journal: "Engineering Access",
                  year: "2022",
                  doi: "https://doi.org/10.1016/j.scitotenv.2022.158642",
                  rank: "TR1"
                }
              ].map((pub, idx) => (
                <div key={idx} className="p-6 bg-white rounded-2xl border border-slate-100 hover:border-brand-accent transition-all group">
                  <div className="flex justify-between items-start mb-4">
                    <Badge variant="accent">{pub.rank}</Badge>
                    <span className="text-sm font-bold text-slate-400">{pub.year}</span>
                  </div>
                  <h4 className="text-lg font-display font-bold text-brand-primary mb-3 group-hover:text-brand-accent transition-colors leading-snug">
                    {pub.title}
                  </h4>
                  <p className="text-sm text-slate-500 italic mb-4">{pub.journal}</p>
                  <a href={pub.doi} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-sm font-bold text-brand-accent hover:gap-3 transition-all">
                    Access Paper <ExternalLink className="w-4 h-4" />
                  </a>
                </div>
              ))}
            </div>
          </div>

          <div>
            <SectionHeader title="Conferences & Workshops" icon={Microscope} />
            <div className="space-y-6">
              {[
                {
                  title: "Microplastics occurrence in wastewater treatment plants: A keen concern of retention capacity",
                  event: "6th Kyoto University Mahidol University Laboratory Workshop",
                  date: "March 29, 2023",
                  type: "Presentation"
                },
                {
                  title: "Quantification and characterization of microplastics in wastewater",
                  event: "Kyoto University Symposium",
                  date: "Nov 29-30, 2021",
                  type: "Poster Presentation"
                },
                {
                  title: "Occurrence and removal of microplastics in activated sludge treatment systems",
                  event: "10th International Conference on Environmental Engineering, Science and Management",
                  date: "May 12-13, 2021",
                  type: "Conference Presentation"
                }
              ].map((conf, idx) => (
                <div key={idx} className="p-6 bg-slate-900 rounded-2xl text-white group hover:bg-brand-accent transition-all">
                  <div className="flex justify-between items-center mb-4">
                    <span className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-400 group-hover:text-white/80">{conf.type}</span>
                    <Calendar className="w-4 h-4 text-brand-accent group-hover:text-white" />
                  </div>
                  <h4 className="text-lg font-display font-bold mb-2 leading-tight">{conf.title}</h4>
                  <p className="text-sm text-slate-400 group-hover:text-white/80 mb-1">{conf.event}</p>
                  <p className="text-xs font-mono text-brand-accent group-hover:text-white">{conf.date}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Modernized Trainings Timeline */}
        <div className="mb-24">
          <SectionHeader title="Professional Development" icon={Zap} />
          <Card className="p-10">
            <div className="space-y-0">
              {[
                { 
                  year: "2023", 
                  title: "Program Change Management in Click Up", 
                  provider: "Coursera Project Network" 
                },
                { 
                  year: "2020", 
                  title: "Planning & Design of Sanitation Systems and Technologies", 
                  provider: "École Polytechnique Fédérale de Lausanne (EPFL), Coursera" 
                },
                { 
                  year: "2020", 
                  title: "Introduction to Fecal Sludge Management", 
                  provider: "École Polytechnique Fédérale de Lausanne (EPFL), Coursera" 
                },
                { 
                  year: "2018", 
                  title: "Wastewater Treatment System Course", 
                  provider: "Myanmar Engineering Society" 
                },
                { 
                  year: "2018", 
                  title: "Resource, Efficient and Cleaner Production (RECP) Course", 
                  provider: "United Nations Industrial Development Organization (UNIDO)" 
                },
                { 
                  year: "2017", 
                  title: "Energy Cooperation Training in the Greater Mekong Sub Region", 
                  provider: "Mekong Institute",
                  details: "Sponsored by the Energy Policy and Planning Office, Energy conservation promotion fund, and Yunnan power grid Co., Ltd."
                },
                { 
                  year: "2017", 
                  title: "Environmental Impact Assessment Training", 
                  provider: "Fauna & Flora International (FFI)" 
                },
                { 
                  year: "2016", 
                  title: "Environmental and Social Impact Assessment Training (ESIA)", 
                  provider: "Asia Institute of Technology Vietnam, Hanoi, Vietnam" 
                },
                { 
                  year: "2016", 
                  title: "Chemical Storage and Handling Basic Course", 
                  provider: "Myanmar Chemical Industries Association" 
                },
                { 
                  year: "2016", 
                  title: "ISO 9001-2008 Internal Audit Training", 
                  provider: "SGS Myanmar Company Limited" 
                },
                { 
                  year: "2016", 
                  title: "ISO 14001-2015 Internal Audit Training", 
                  provider: "ABC, AN ABS Company Limited" 
                },
                { 
                  year: "2015", 
                  title: "Technical Training for Lab-Technicians (Environmental Analysis)", 
                  provider: "Eco-Lab (Organized by ALARM)" 
                },
                { 
                  year: "2015", 
                  title: "Ecological Laboratory Technician Training", 
                  provider: "Eco-Lab (Organized by ALARM)" 
                }
              ].map((t, idx) => (
                <div key={idx} className="relative pl-10 pb-12 last:pb-0 border-l-2 border-slate-100 ml-4 group">
                  <div className="absolute -left-[9px] top-1.5 w-4 h-4 rounded-full bg-white border-2 border-slate-200 group-hover:border-brand-accent group-hover:bg-brand-accent transition-all duration-300 shadow-sm" />
                  <div className="flex flex-col md:flex-row md:items-center gap-2 mb-2">
                    <span className="text-xs font-black text-brand-accent uppercase tracking-[0.2em]">{t.year}</span>
                    <div className="hidden md:block w-1 h-1 rounded-full bg-slate-200" />
                    <h4 className="text-xl font-display font-bold text-brand-primary group-hover:text-brand-accent transition-colors">
                      {t.title}
                    </h4>
                  </div>
                  <p className="text-slate-500 font-medium mb-2">{t.provider}</p>
                  {t.details && (
                    <p className="text-sm text-slate-400 italic leading-relaxed max-w-2xl bg-slate-50 p-3 rounded-xl border border-slate-100">
                      {t.details}
                    </p>
                  )}
                </div>
              ))}
            </div>
          </Card>
        </div>

        {/* Achievements & Voluntary */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <Card className="bg-brand-primary text-white border-none">
            <SectionHeader title="Achievements" icon={Award} />
            <div className="flex gap-6">
              <div className="w-16 h-16 bg-white/10 rounded-2xl flex items-center justify-center shrink-0">
                <Award className="w-8 h-8 text-brand-accent" />
              </div>
              <p className="text-slate-300 leading-relaxed italic">
                Scholarship Alumina of Norwegian Government and the Capacity Building Initiative for Myanmar (CBIM-II) Scholarship to Mahidol University, 2018.
              </p>
            </div>
          </Card>
          <Card>
            <SectionHeader title="Voluntary Work" icon={Users} />
            <ul className="space-y-4">
              <li className="flex gap-4 items-start">
                <div className="w-2 h-2 rounded-full bg-brand-accent mt-2 shrink-0" />
                <p className="text-slate-600">3rd MU GRAD Sustainable Environment and Costal Ecological Restoration, 2019.</p>
              </li>
              <li className="flex gap-4 items-start">
                <div className="w-2 h-2 rounded-full bg-brand-accent mt-2 shrink-0" />
                <p className="text-slate-600">Peer reviewer for manuscripts related to microplastics studies.</p>
              </li>
            </ul>
          </Card>
        </div>
      </main>

      {/* Back to Top Button */}
      <button 
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        className="fixed bottom-8 right-8 p-4 bg-brand-primary text-white rounded-2xl shadow-xl hover:bg-brand-accent transition-all z-50 print:hidden group"
        aria-label="Back to top"
      >
        <ChevronRight className="w-6 h-6 -rotate-90 group-hover:-translate-y-1 transition-transform" />
      </button>

      {/* Modern Footer */}
      <footer className="bg-slate-900 text-white py-20 print:hidden">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-4xl font-display font-bold mb-8">Let's Connect</h2>
          <div className="flex flex-wrap justify-center gap-8 mb-12">
            <a href="mailto:mememaw29@gmail.com" className="flex items-center gap-3 text-slate-400 hover:text-white transition-colors">
              <Mail className="w-5 h-5" /> mememaw29@gmail.com
            </a>
            <a href="tel:+660949749894" className="flex items-center gap-3 text-slate-400 hover:text-white transition-colors">
              <Phone className="w-5 h-5" /> +66 09 497 49894
            </a>
            <a href="https://www.linkedin.com/in/me-me-maw-9436b8123/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 text-slate-400 hover:text-white transition-colors">
              <Linkedin className="w-5 h-5" /> LinkedIn
            </a>
          </div>
          <div className="w-24 h-1 bg-brand-accent mx-auto mb-12" />
          <p className="text-slate-500 text-sm mb-4">Referees available on request</p>
          <p className="text-slate-600 text-xs font-mono">© 2026 • Designed with Precision</p>
        </div>
      </footer>
    </div>
  );
}
