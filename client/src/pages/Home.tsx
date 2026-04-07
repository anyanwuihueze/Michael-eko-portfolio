import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Globe,
  Zap,
  Brain,
  Layers,
  Shield,
  TrendingUp,
  Mail,
  Phone,
  Linkedin,
  Github,
  ExternalLink,
  ArrowRight,
} from "lucide-react";
import { useState } from "react";
import { toast } from "sonner";
import { motion } from "framer-motion";

export default function Home() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    serviceType: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleFormChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSelectChange = (name: string, value: string) => {
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleFormSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      await new Promise((resolve) => setTimeout(resolve, 1000));
      toast.success("Message sent! I'll get back to you within 24 hours.");
      setFormData({
        name: "",
        email: "",
        phone: "",
        serviceType: "",
        message: "",
      });
    } catch (error) {
      toast.error("Failed to send message. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Navigation */}
      <motion.nav
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="fixed top-0 w-full bg-background/95 backdrop-blur-md border-b border-border z-50"
      >
        <div className="max-w-6xl mx-auto px-4 md:px-8 py-6 flex items-center justify-between">
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="text-2xl font-bold text-accent tracking-tight"
          >
            Michael Eko
          </motion.div>
          <div className="hidden md:flex gap-12 text-sm font-medium">
            <motion.a
              whileHover={{ color: "#D4AF37" }}
              href="#featured"
              className="transition-colors hover:text-accent"
            >
              Work
            </motion.a>
            <motion.a
              whileHover={{ color: "#D4AF37" }}
              href="#expertise"
              className="transition-colors hover:text-accent"
            >
              Expertise
            </motion.a>
            <motion.a
              whileHover={{ color: "#D4AF37" }}
              href="#about"
              className="transition-colors hover:text-accent"
            >
              About
            </motion.a>
            <motion.a
              whileHover={{ color: "#D4AF37" }}
              href="#contact"
              className="transition-colors hover:text-accent"
            >
              Contact
            </motion.a>
          </div>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() =>
              document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })
            }
            className="hidden md:block px-6 py-2 bg-foreground text-background font-bold text-sm rounded-sm transition-all hover:opacity-90"
          >
            Get In Touch
          </motion.button>
        </div>
      </motion.nav>

      {/* Hero Section */}
      <motion.section
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="pt-40 pb-32 px-4 md:px-8"
      >
        <div className="max-w-5xl mx-auto">
          <motion.div variants={containerVariants} initial="hidden" animate="visible">
            <motion.h1
              variants={itemVariants}
              className="text-6xl md:text-7xl font-bold mb-8 leading-tight tracking-tight"
            >
              Immigration Systems
              <br />
              <span className="text-accent">× AI Growth Operator</span>
            </motion.h1>

            <motion.p
              variants={itemVariants}
              className="text-xl md:text-2xl text-muted-foreground mb-12 max-w-3xl leading-relaxed"
            >
              I design and scale systems that help people move across borders while leveraging AI to automate growth, engagement, and decision-making.
            </motion.p>

            <motion.div variants={itemVariants} className="flex flex-col md:flex-row gap-6 mb-16">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() =>
                  document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })
                }
                className="px-8 py-4 bg-foreground text-background font-bold text-lg rounded-sm transition-all hover:opacity-90 flex items-center justify-center gap-2"
              >
                Get In Touch
                <ArrowRight className="w-5 h-5" />
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() =>
                  document.getElementById("featured")?.scrollIntoView({ behavior: "smooth" })
                }
                className="px-8 py-4 border-2 border-foreground text-foreground font-bold text-lg rounded-sm transition-all hover:bg-foreground/5"
              >
                View Work
              </motion.button>
            </motion.div>

            {/* Authority Badges */}
            <motion.div variants={itemVariants} className="flex flex-wrap gap-3">
              {[
                "Canadian Immigration",
                "RCIC Candidate",
                "Japa Genie Co-founder",
                "AI Systems & Automation",
              ].map((badge, idx) => (
                <motion.div
                  key={idx}
                  whileHover={{ scale: 1.05 }}
                  className="px-4 py-2 bg-accent/10 border border-accent/30 rounded-sm text-sm font-medium text-accent transition-all"
                >
                  {badge}
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </motion.section>

      {/* Divider */}
      <motion.div
        initial={{ scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        transition={{ duration: 0.8 }}
        className="h-px bg-border max-w-5xl mx-auto mb-32"
      />

      {/* What I Do Section */}
      <motion.section className="py-32 px-4 md:px-8">
        <div className="max-w-6xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-5xl md:text-6xl font-bold mb-20"
          >
            What I Do
          </motion.h2>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid md:grid-cols-3 gap-16"
          >
            {[
              {
                icon: <Globe className="w-10 h-10" />,
                title: "Immigration Operations",
                description:
                  "Real-world experience supporting immigrants in Canadian correctional and transition settings. Deep understanding of immigration processes, compliance, and case handling.",
              },
              {
                icon: <Brain className="w-10 h-10" />,
                title: "AI Systems & Automation",
                description:
                  "Design and deploy AI-powered automation workflows. Ubuntu-based systems, prompt engineering, pipeline optimization, and production-ready AI agents.",
              },
              {
                icon: <TrendingUp className="w-10 h-10" />,
                title: "Growth & Scaling",
                description:
                  "Build AI-powered content systems and automated marketing pipelines. User engagement optimization and scalable solutions that reach thousands.",
              },
            ].map((item, idx) => (
              <motion.div
                key={idx}
                variants={itemVariants}
                whileHover={{ y: -8 }}
                className="space-y-4 transition-all"
              >
                <motion.div className="text-accent">{item.icon}</motion.div>
                <h3 className="text-2xl font-bold">{item.title}</h3>
                <p className="text-muted-foreground leading-relaxed text-lg">
                  {item.description}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </motion.section>

      {/* Featured Projects */}
      <motion.section id="featured" className="py-32 px-4 md:px-8 bg-secondary/30">
        <div className="max-w-6xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-5xl md:text-6xl font-bold mb-20"
          >
            Featured Projects
          </motion.h2>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid md:grid-cols-2 gap-12"
          >
            {[
              {
                title: "Japa Genie",
                description:
                  "AI-powered immigration assistant helping Africans navigate global relocation. Growth strategy, AI content systems, and user engagement optimization.",
                role: "Co-founder & Growth Partner",
                link: "https://www.japagenie.com",
                github: "https://github.com/anyanwuihueze/japa-genie-test-v1-preauth",
              },
              {
                title: "AI Video Automation Engine",
                description:
                  "End-to-end system: Script → Generate → Publish. Scalable marketing campaigns with automated video generation and distribution pipelines.",
                role: "System Architect",
                link: "#",
                github: "#",
              },
            ].map((project, idx) => (
              <motion.div
                key={idx}
                variants={itemVariants}
                whileHover={{ y: -12 }}
                className="p-8 md:p-10 border border-border rounded-lg transition-all hover:border-accent/50 hover:shadow-lg"
              >
                <h3 className="text-3xl font-bold mb-3">{project.title}</h3>
                <p className="text-accent text-sm font-bold mb-6">{project.role}</p>
                <p className="text-muted-foreground mb-8 leading-relaxed text-lg">
                  {project.description}
                </p>
                <div className="flex gap-4">
                  {project.link !== "#" && (
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      onClick={() => window.open(project.link, "_blank")}
                      className="px-6 py-2 border border-foreground text-foreground font-bold rounded-sm transition-all hover:bg-foreground/5 flex items-center gap-2"
                    >
                      View Demo
                      <ExternalLink className="w-4 h-4" />
                    </motion.button>
                  )}
                  {project.github !== "#" && (
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      onClick={() => window.open(project.github, "_blank")}
                      className="px-6 py-2 border border-foreground text-foreground font-bold rounded-sm transition-all hover:bg-foreground/5"
                    >
                      GitHub
                    </motion.button>
                  )}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </motion.section>

      {/* Why I'm Different */}
      <motion.section id="expertise" className="py-32 px-4 md:px-8">
        <div className="max-w-6xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-5xl md:text-6xl font-bold mb-20"
          >
            Why I'm Different
          </motion.h2>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid md:grid-cols-2 gap-12"
          >
            {[
              {
                icon: <Shield className="w-8 h-8" />,
                title: "Real-World Immigration Experience",
                description:
                  "Not just theory. Direct experience in Canadian immigration systems, compliance frameworks, and real-world case handling.",
              },
              {
                icon: <Layers className="w-8 h-8" />,
                title: "Build AI Systems That Scale",
                description:
                  "Ability to architect and deploy AI solutions that scale from MVP to production, serving thousands of users.",
              },
              {
                icon: <Zap className="w-8 h-8" />,
                title: "Compliance + Automation + Growth",
                description:
                  "Rare combination: understands regulatory requirements, builds scalable systems, and drives user acquisition.",
              },
              {
                icon: <Globe className="w-8 h-8" />,
                title: "Operator Mindset",
                description:
                  "Think strategically and execute tactically. Operate both technically and commercially to solve real human problems.",
              },
            ].map((item, idx) => (
              <motion.div
                key={idx}
                variants={itemVariants}
                whileHover={{ x: 8 }}
                className="flex gap-6 transition-all"
              >
                <div className="text-accent flex-shrink-0 mt-1">{item.icon}</div>
                <div>
                  <h3 className="font-bold text-xl mb-3">{item.title}</h3>
                  <p className="text-muted-foreground leading-relaxed text-lg">
                    {item.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </motion.section>

      {/* About Section */}
      <motion.section id="about" className="py-32 px-4 md:px-8 bg-secondary/30">
        <div className="max-w-4xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-5xl md:text-6xl font-bold mb-12"
          >
            About
          </motion.h2>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="space-y-8 text-muted-foreground leading-relaxed text-lg"
          >
            <p>
              I operate at the intersection of immigration, technology, and growth. With hands-on experience supporting immigrants in Canadian correctional and transition environments, I've developed a deep, real-world understanding of immigration systems and challenges.
            </p>
            <p>
              Alongside this, I build and deploy AI-powered systems—from automation pipelines to content engines—enabling scalable solutions that reach and impact thousands. My work focuses on combining compliance, human insight, and intelligent automation to solve real problems.
            </p>
            <p>
              As Co-founder and Growth Partner at Japa Genie, I'm applying these principles to help African professionals navigate global relocation while leveraging AI to automate growth and decision-making.
            </p>
          </motion.div>

          {/* Credentials */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mt-16 pt-16 border-t border-border"
          >
            <h3 className="text-3xl font-bold mb-10">Credentials & Expertise</h3>
            <div className="grid md:grid-cols-2 gap-6">
              {[
                "RCIC Candidate (Regulated Canadian Immigration Consultant)",
                "Canadian Immigration Experience",
                "AI Systems & Automation",
                "Co-founder @ Japa Genie",
                "Growth & Marketing Strategy",
                "AI Video Generation & Automation",
              ].map((cred, idx) => (
                <motion.div
                  key={idx}
                  whileHover={{ x: 4 }}
                  className="flex items-start gap-4 transition-all"
                >
                  <div className="text-accent font-bold text-xl mt-1">✓</div>
                  <p className="text-foreground text-lg">{cred}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </motion.section>

      {/* Contact Section */}
      <motion.section id="contact" className="py-32 px-4 md:px-8">
        <div className="max-w-2xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-5xl md:text-6xl font-bold mb-6">Let's Connect</h2>
            <p className="text-xl text-muted-foreground leading-relaxed">
              Building at the intersection of immigration, AI, and global mobility. If you're working on something meaningful in this space — let's connect.
            </p>
          </motion.div>

          <motion.form
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            onSubmit={handleFormSubmit}
            className="space-y-8 mb-16"
          >
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-bold mb-3">Name</label>
                <Input
                  name="name"
                  value={formData.name}
                  onChange={handleFormChange}
                  placeholder="Your name"
                  required
                  className="border border-border rounded-sm px-4 py-3 text-lg"
                />
              </div>
              <div>
                <label className="block text-sm font-bold mb-3">Email</label>
                <Input
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleFormChange}
                  placeholder="your@email.com"
                  required
                  className="border border-border rounded-sm px-4 py-3 text-lg"
                />
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-bold mb-3">Phone</label>
                <Input
                  name="phone"
                  value={formData.phone}
                  onChange={handleFormChange}
                  placeholder="Your phone number"
                  required
                  className="border border-border rounded-sm px-4 py-3 text-lg"
                />
              </div>
              <div>
                <label className="block text-sm font-bold mb-3">Interest</label>
                <Select value={formData.serviceType} onValueChange={(value) => handleSelectChange("serviceType", value)}>
                  <SelectTrigger className="border border-border rounded-sm px-4 py-3 text-lg">
                    <SelectValue placeholder="Select an interest" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="immigration-systems">Immigration Systems</SelectItem>
                    <SelectItem value="ai-automation">AI & Automation</SelectItem>
                    <SelectItem value="growth-strategy">Growth Strategy</SelectItem>
                    <SelectItem value="collaboration">Collaboration</SelectItem>
                    <SelectItem value="other">Other</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>

            <div>
              <label className="block text-sm font-bold mb-3">Message</label>
              <Textarea
                name="message"
                value={formData.message}
                onChange={handleFormChange}
                placeholder="Tell me about your project or idea..."
                rows={6}
                required
                className="border border-border rounded-sm px-4 py-3 text-lg"
              />
            </div>

            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              type="submit"
              disabled={isSubmitting}
              className="w-full px-8 py-4 bg-foreground text-background font-bold text-lg rounded-sm transition-all hover:opacity-90 disabled:opacity-50"
            >
              {isSubmitting ? "Sending..." : "Send Message"}
            </motion.button>
          </motion.form>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="border-t border-border pt-16"
          >
            <div className="grid md:grid-cols-3 gap-12 text-center">
              <div>
                <Mail className="w-8 h-8 text-accent mx-auto mb-4" />
                <p className="text-sm text-muted-foreground mb-3 font-medium">Email</p>
                <a href="mailto:placeholder@email.com" className="font-bold text-lg hover:text-accent transition-colors">
                  placeholder@email.com
                </a>
              </div>
              <div>
                <Phone className="w-8 h-8 text-accent mx-auto mb-4" />
                <p className="text-sm text-muted-foreground mb-3 font-medium">Phone</p>
                <a href="tel:+12042901895" className="font-bold text-lg hover:text-accent transition-colors">
                  +1 (204) 290-1895
                </a>
              </div>
              <div>
                <Linkedin className="w-8 h-8 text-accent mx-auto mb-4" />
                <p className="text-sm text-muted-foreground mb-3 font-medium">Social</p>
                <div className="flex gap-6 justify-center">
                  <motion.a
                    whileHover={{ scale: 1.2 }}
                    href="#"
                    className="hover:text-accent transition-colors"
                    title="LinkedIn"
                  >
                    <Linkedin className="w-6 h-6" />
                  </motion.a>
                  <motion.a
                    whileHover={{ scale: 1.2 }}
                    href="#"
                    className="hover:text-accent transition-colors"
                    title="GitHub"
                  >
                    <Github className="w-6 h-6" />
                  </motion.a>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </motion.section>

      {/* Footer */}
      <motion.footer
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
        className="border-t border-border py-16 px-4 md:px-8 bg-secondary/30"
      >
        <div className="max-w-6xl mx-auto text-center text-muted-foreground">
          <p className="font-medium">© 2026 Michael Eko. All rights reserved.</p>
          <p className="text-sm mt-3">Immigration Systems & AI Growth Operator</p>
        </div>
      </motion.footer>
    </div>
  );
}
