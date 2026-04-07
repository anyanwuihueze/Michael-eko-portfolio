import { Card } from "@/components/ui/card";
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
} from "lucide-react";
import { useState } from "react";
import { toast } from "sonner";

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

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-background/80 backdrop-blur-md border-b border-border z-50">
        <div className="max-w-6xl mx-auto px-4 py-4 flex items-center justify-between">
          <div className="text-xl font-bold text-accent">Michael Eko</div>
          <div className="hidden md:flex gap-8 text-sm">
            <a href="#featured" className="hover:text-accent transition">
              Work
            </a>
            <a href="#expertise" className="hover:text-accent transition">
              Expertise
            </a>
            <a href="#about" className="hover:text-accent transition">
              About
            </a>
            <a href="#contact" className="hover:text-accent transition">
              Contact
            </a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4 relative overflow-hidden">
        {/* Background Image */}
        <div
          className="absolute inset-0 -z-10 opacity-20"
          style={{
            backgroundImage: "url('/hero-bg-michael.jpg')",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        />
        <div className="max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
            Immigration Systems × AI Growth Operator
          </h1>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl">
            I design and scale systems that help people move across borders while leveraging AI to automate growth, engagement, and decision-making.
          </p>

          {/* Authority Badges */}
          <div className="flex flex-wrap gap-3 mb-8">
            <div className="px-3 py-1 bg-accent/10 border border-accent/30 rounded text-sm text-accent font-medium">
              Canadian Immigration
            </div>
            <div className="px-3 py-1 bg-accent/10 border border-accent/30 rounded text-sm text-accent font-medium">
              RCIC Candidate
            </div>
            <div className="px-3 py-1 bg-accent/10 border border-accent/30 rounded text-sm text-accent font-medium">
              Japa Genie Co-founder
            </div>
            <div className="px-3 py-1 bg-accent/10 border border-accent/30 rounded text-sm text-accent font-medium">
              AI Systems & Automation
            </div>
          </div>

          <div className="flex flex-col md:flex-row gap-4">
            <Button
              size="lg"
              className="bg-accent hover:bg-accent/90 text-accent-foreground"
              onClick={() =>
                document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })
              }
            >
              Get In Touch
            </Button>
            <Button
              size="lg"
              variant="outline"
              onClick={() =>
                document.getElementById("featured")?.scrollIntoView({ behavior: "smooth" })
              }
            >
              View Work
            </Button>
          </div>
        </div>
      </section>

      {/* What I Do Section */}
      <section className="py-20 px-4 bg-card/50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold mb-12">What I Do</h2>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: <Globe className="w-8 h-8" />,
                title: "Immigration Operations",
                description:
                  "Real-world experience supporting immigrants in Canadian correctional and transition settings. Deep understanding of immigration processes, compliance, and case handling.",
              },
              {
                icon: <Brain className="w-8 h-8" />,
                title: "AI Systems & Automation",
                description:
                  "Design and deploy AI-powered automation workflows. Ubuntu-based systems, prompt engineering, pipeline optimization, and production-ready AI agents.",
              },
              {
                icon: <TrendingUp className="w-8 h-8" />,
                title: "Growth & Scaling",
                description:
                  "Build AI-powered content systems and automated marketing pipelines. User engagement optimization and scalable solutions that reach thousands.",
              },
            ].map((item, idx) => (
              <div key={idx} className="space-y-3">
                <div className="text-accent">{item.icon}</div>
                <h3 className="font-bold text-lg">{item.title}</h3>
                <p className="text-muted-foreground text-sm">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Projects */}
      <section id="featured" className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold mb-12">Featured Projects</h2>

          <div className="grid md:grid-cols-2 gap-8">
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
              <Card key={idx} className="p-8 hover:border-accent/50 transition">
                <h3 className="text-2xl font-bold mb-2">{project.title}</h3>
                <p className="text-accent text-sm font-semibold mb-4">{project.role}</p>
                <p className="text-muted-foreground mb-6">{project.description}</p>
                <div className="flex gap-3">
                  {project.link !== "#" && (
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={() => window.open(project.link, "_blank")}
                    >
                      View Demo
                      <ExternalLink className="ml-2 w-3 h-3" />
                    </Button>
                  )}
                  {project.github !== "#" && (
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={() => window.open(project.github, "_blank")}
                    >
                      GitHub
                    </Button>
                  )}
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Why I'm Different */}
      <section className="py-20 px-4 bg-card/50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold mb-12">Why I'm Different</h2>

          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                icon: <Shield className="w-6 h-6" />,
                title: "Real-World Immigration Experience",
                description:
                  "Not just theory. Direct experience in Canadian immigration systems, compliance frameworks, and real-world case handling.",
              },
              {
                icon: <Layers className="w-6 h-6" />,
                title: "Build AI Systems That Scale",
                description:
                  "Ability to architect and deploy AI solutions that scale from MVP to production, serving thousands of users.",
              },
              {
                icon: <Zap className="w-6 h-6" />,
                title: "Compliance + Automation + Growth",
                description:
                  "Rare combination: understands regulatory requirements, builds scalable systems, and drives user acquisition.",
              },
              {
                icon: <Globe className="w-6 h-6" />,
                title: "Operator Mindset",
                description:
                  "Think strategically and execute tactically. Operate both technically and commercially to solve real human problems.",
              },
            ].map((item, idx) => (
              <div key={idx} className="flex gap-4">
                <div className="text-accent flex-shrink-0">{item.icon}</div>
                <div>
                  <h3 className="font-bold text-lg mb-2">{item.title}</h3>
                  <p className="text-muted-foreground text-sm">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold mb-8">About</h2>

          <div className="space-y-6 text-muted-foreground leading-relaxed">
            <p>
              I operate at the intersection of immigration, technology, and growth. With hands-on experience supporting immigrants in Canadian correctional and transition environments, I've developed a deep, real-world understanding of immigration systems and challenges.
            </p>
            <p>
              Alongside this, I build and deploy AI-powered systems—from automation pipelines to content engines—enabling scalable solutions that reach and impact thousands. My work focuses on combining compliance, human insight, and intelligent automation to solve real problems.
            </p>
            <p>
              As Co-founder and Growth Partner at Japa Genie, I'm applying these principles to help African professionals navigate global relocation while leveraging AI to automate growth and decision-making.
            </p>
          </div>

          {/* Credentials */}
          <div className="mt-12 pt-12 border-t border-border">
            <h3 className="text-2xl font-bold mb-6">Credentials & Expertise</h3>
            <div className="grid md:grid-cols-2 gap-6">
              {[
                "RCIC Candidate (Regulated Canadian Immigration Consultant)",
                "Canadian Immigration Experience",
                "AI Systems & Automation",
                "Co-founder @ Japa Genie",
                "Growth & Marketing Strategy",
                "AI Video Generation & Automation",
              ].map((cred, idx) => (
                <div key={idx} className="flex items-start gap-3">
                  <div className="text-accent mt-1">✓</div>
                  <p className="text-foreground">{cred}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-4 bg-card/50">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-4xl font-bold mb-4 text-center">Let's Connect</h2>
          <p className="text-center text-muted-foreground mb-12">
            Building at the intersection of immigration, AI, and global mobility. If you're working on something meaningful in this space — let's connect.
          </p>

          <form onSubmit={handleFormSubmit} className="space-y-6 mb-12">
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-semibold mb-2">Name</label>
                <Input
                  name="name"
                  value={formData.name}
                  onChange={handleFormChange}
                  placeholder="Your name"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-semibold mb-2">Email</label>
                <Input
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleFormChange}
                  placeholder="your@email.com"
                  required
                />
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-semibold mb-2">Phone</label>
                <Input
                  name="phone"
                  value={formData.phone}
                  onChange={handleFormChange}
                  placeholder="Your phone number"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-semibold mb-2">Interest</label>
                <Select value={formData.serviceType} onValueChange={(value) => handleSelectChange("serviceType", value)}>
                  <SelectTrigger>
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
              <label className="block text-sm font-semibold mb-2">Message</label>
              <Textarea
                name="message"
                value={formData.message}
                onChange={handleFormChange}
                placeholder="Tell me about your project or idea..."
                rows={5}
                required
              />
            </div>

            <Button
              type="submit"
              size="lg"
              className="w-full bg-accent hover:bg-accent/90 text-accent-foreground"
              disabled={isSubmitting}
            >
              {isSubmitting ? "Sending..." : "Send Message"}
            </Button>
          </form>

          {/* Contact Info */}
          <div className="border-t border-border pt-12">
            <div className="grid md:grid-cols-3 gap-8 text-center">
              <div>
                <Mail className="w-6 h-6 text-accent mx-auto mb-3" />
                <p className="text-sm text-muted-foreground mb-2">Email</p>
                <a href="mailto:placeholder@email.com" className="font-semibold hover:text-accent">
                  placeholder@email.com
                </a>
              </div>
              <div>
                <Phone className="w-6 h-6 text-accent mx-auto mb-3" />
                <p className="text-sm text-muted-foreground mb-2">Phone</p>
                <a href="tel:+12042901895" className="font-semibold hover:text-accent">
                  +1 (204) 290-1895
                </a>
              </div>
              <div>
                <Linkedin className="w-6 h-6 text-accent mx-auto mb-3" />
                <p className="text-sm text-muted-foreground mb-2">Social</p>
                <div className="flex gap-4 justify-center">
                  <a href="#" className="hover:text-accent transition" title="LinkedIn">
                    <Linkedin className="w-5 h-5" />
                  </a>
                  <a href="#" className="hover:text-accent transition" title="GitHub">
                    <Github className="w-5 h-5" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border py-12 px-4 bg-card/50">
        <div className="max-w-6xl mx-auto text-center text-muted-foreground">
          <p>© 2026 Michael Eko. All rights reserved.</p>
          <p className="text-sm mt-2">Immigration Systems & AI Growth Operator</p>
        </div>
      </footer>
    </div>
  );
}
