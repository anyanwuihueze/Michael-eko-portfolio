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

      <motion.section
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="pt-40 pb-24 px-4 md:px-8"
      >
        <div className="max-w-5xl mx-auto">
          <motion.div variants={containerVariants} initial="hidden" animate="visible">
            <motion.p
              variants={itemVariants}
              className="text-sm md:text-base uppercase tracking-[0.2em] text-accent font-semibold mb-6"
            >
              AI Growth Operator | Immigration Systems Specialist | Co-founder @ Japa Genie
            </motion.p>

            <motion.h1
              variants={itemVariants}
              className="text-5xl md:text-7xl font-bold mb-8 leading-tight tracking-tight"
            >
              AI-powered systems for
              <br />
              <span className="text-accent">global migration and growth</span>
            </motion.h1>

            <motion.p
              variants={itemVariants}
              className="text-xl md:text-2xl text-muted-foreground mb-12 max-w-4xl leading-relaxed"
            >
              I design and scale AI-powered systems that help people navigate global
              migration—while automating growth, engagement, and decision-making for
              digital products.
            </motion.p>

            <motion.div variants={itemVariants} className="flex flex-col md:flex-row gap-6 mb-14">
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

            <motion.div variants={itemVariants} className="flex flex-wrap gap-3 mb-10">
              {[
                "Canadian Immigration Experience",
                "Education & Process Guidance",
                "Co-founder @ Japa Genie",
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

            <motion.div
              variants={itemVariants}
              className="max-w-4xl border border-accent/30 bg-accent/5 rounded-lg p-6 md:p-7"
            >
              <p className="text-sm md:text-base leading-relaxed text-foreground">
                <span className="font-bold text-accent">Important compliance note:</span>{" "}
                I am not a Regulated Canadian Immigration Consultant (RCIC) and do not
                provide immigration advice or representation. My work focuses on
                education, systems design, and process guidance based on publicly
                available policies.
              </p>
            </motion.div>
          </motion.div>
        </div>
      </motion.section>

      <motion.div
        initial={{ scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        transition={{ duration: 0.8 }}
        className="h-px bg-border max-w-5xl mx-auto mb-24"
      />

      <motion.section className="py-24 px-4 md:px-8">
        <div className="max-w-6xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl md:text-6xl font-bold mb-16"
          >
            What I Do
          </motion.h2>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid md:grid-cols-3 gap-12 md:gap-16"
          >
            {[
              {
                icon: <Globe className="w-10 h-10" />,
                title: "Immigration Systems & Operations",
                description:
                  "Experience supporting individuals navigating Canadian immigration systems within correctional and transition environments. Strong understanding of immigration processes, policy frameworks, documentation systems, and case navigation in a non-advisory support capacity.",
              },
              {
                icon: <Brain className="w-10 h-10" />,
                title: "AI Systems & Automation",
                description:
                  "I design and deploy AI-powered workflows that automate complex processes: prompt engineering and LLM systems, automation pipelines for content and agents, Ubuntu-based environments, system deployment, and scalable AI tools from MVP to production.",
              },
              {
                icon: <TrendingUp className="w-10 h-10" />,
                title: "Growth & Scaling",
                description:
                  "I build systems that don’t just work—they grow. That includes AI-powered content engines, automated marketing pipelines, user engagement systems, and growth loops for digital products.",
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

      <motion.section id="featured" className="py-24 px-4 md:px-8 bg-secondary/30">
        <div className="max-w-6xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl md:text-6xl font-bold mb-16"
          >
            Featured Projects
          </motion.h2>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid md:grid-cols-2 gap-10 md:gap-12"
          >
            {[
              {
                title: "Japa Genie",
                description:
                  "AI-powered platform helping African users understand and navigate global relocation pathways. My role spans growth strategy and user acquisition, AI content systems, product positioning, and engagement optimization.",
                role: "Co-founder & Growth Partner",
                link: "https://www.japagenie.com",
              },
              {
                title: "AI Video Automation Engine",
                description:
                  "Built a fully automated pipeline: Script → Generate → Publish. Designed for scalable content production, automated distribution systems, and growth-focused campaign execution.",
                role: "System Architect",
                link: "#",
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
                {project.link !== "#" && (
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => window.open(project.link, "_blank")}
                    className="px-6 py-2 border border-foreground text-foreground font-bold rounded-sm transition-all hover:bg-foreground/5 flex items-center gap-2"
                  >
                    View Project
                    <ExternalLink className="w-4 h-4" />
                  </motion.button>
                )}
              </motion.div>
            ))}
          </motion.div>
        </div>
      </motion.section>

      <motion.section id="expertise" className="py-24 px-4 md:px-8">
        <div className="max-w-6xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl md:text-6xl font-bold mb-16"
          >
            Why I’m Different
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
                title: "Real-World Immigration Exposure",
                description:
                  "Hands-on experience working within systems that interact with immigration realities—not just theory.",
              },
              {
                icon: <Layers className="w-8 h-8" />,
                title: "Builder + Operator",
                description:
                  "I don’t just design ideas—I build and deploy working systems.",
              },
              {
                icon: <Zap className="w-8 h-8" />,
                title: "Compliance-Aware",
                description:
                  "I understand the boundaries of immigration regulation and build systems that stay within safe, non-advisory frameworks.",
              },
              {
                icon: <Globe className="w-8 h-8" />,
                title: "AI + Growth + Systems Thinking",
                description:
                  "Rare combination of technical AI execution, growth strategy, and operational thinking.",
              },
              {
                icon: <Layers className="w-8 h-8" />,
                title: "Execution & Delivery (Scrum Master Experience)",
                description:
                  "Led structured project delivery using Agile and Waterfall methodologies, managing real-world systems and ensuring consistent execution across complex workflows.",
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

      <motion.section id="about" className="py-24 px-4 md:px-8 bg-secondary/30">
        <div className="max-w-4xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl md:text-6xl font-bold mb-12"
          >
            About Me
          </motion.h2>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="space-y-8 text-muted-foreground leading-relaxed text-lg"
          >
            <p>I work at the intersection of immigration, AI, and growth.</p>
            <p>
              My experience supporting individuals in structured environments has
              given me a practical understanding of how immigration systems affect
              real lives. I combine that with technical expertise in AI to build
              scalable tools that simplify complex processes.
            </p>
            <p>
              My background in Agile project delivery through Scrum Master work
              strengthens my ability to not only design systems, but execute and
              scale them reliably in real-world environments.
            </p>
            <p>
              As Co-founder of Japa Genie, I’m focused on helping African
              professionals access global opportunities through technology-driven
              guidance and automation.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mt-16 pt-16 border-t border-border"
          >
            <h3 className="text-3xl font-bold mb-10">Credentials & Expertise</h3>
            <div className="grid md:grid-cols-2 gap-6">
              {[
                "Certificate in Canadian Immigration Laws, Policies & Procedures (UBC)",
                "Scrum Master (Agile & Waterfall Project Delivery)",
                "Canadian immigration systems experience",
                "AI systems & automation",
                "Co-founder @ Japa Genie",
                "Growth & marketing systems",
                "Ubuntu environments, agents, and deployment workflows",
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

      <motion.section id="contact" className="py-24 px-4 md:px-8">
        <div className="max-w-2xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-6xl font-bold mb-6">Let’s Connect</h2>
            <p className="text-xl text-muted-foreground leading-relaxed">
              Building at the intersection of immigration, AI, and global mobility.
              If you’re working on something meaningful in this space — let’s connect.
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
                <Select
                  value={formData.serviceType}
                  onValueChange={(value) => handleSelectChange("serviceType", value)}
                >
                  <SelectTrigger className="border border-border rounded-sm px-4 py-3 text-lg">
                    <SelectValue placeholder="Select an interest" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="immigration-systems">
                      Immigration Systems
                    </SelectItem>
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
                <a
                  href="mailto:ekomichael1981@gmail.com"
                  className="font-bold text-lg hover:text-accent transition-colors break-all"
                >
                  ekomichael1981@gmail.com
                </a>
              </div>
              <div>
                <Phone className="w-8 h-8 text-accent mx-auto mb-4" />
                <p className="text-sm text-muted-foreground mb-3 font-medium">Phone</p>
                <a
                  href="tel:+12042901895"
                  className="font-bold text-lg hover:text-accent transition-colors"
                >
                  +1 (204) 290-1895
                </a>
              </div>
              <div>
                <Linkedin className="w-8 h-8 text-accent mx-auto mb-4" />
                <p className="text-sm text-muted-foreground mb-3 font-medium">LinkedIn</p>
                <a
                  href="https://www.linkedin.com/in/michael-eko-816190275"
                  target="_blank"
                  rel="noreferrer"
                  className="font-bold text-lg hover:text-accent transition-colors break-all"
                >
                  View Profile
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </motion.section>

      <motion.footer
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
        className="border-t border-border py-16 px-4 md:px-8 bg-secondary/30"
      >
        <div className="max-w-6xl mx-auto text-center text-muted-foreground">
          <p className="font-medium">© 2026 Michael Eko. All rights reserved.</p>
          <p className="text-sm mt-3">
            AI Growth Operator | Immigration Systems Specialist | Co-founder @ Japa Genie
          </p>
        </div>
      </motion.footer>
    </div>
  );
}
