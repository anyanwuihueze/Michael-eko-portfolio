import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
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
  Code2,
  Zap,
  Brain,
  TrendingDown,
  Shield,
  Cpu,
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
          <div className="text-xl font-bold text-primary">Prince Anyanwu</div>
          <div className="hidden md:flex gap-8 text-sm">
            <a href="#featured" className="hover:text-primary transition">
              Featured Work
            </a>
            <a href="#expertise" className="hover:text-primary transition">
              Expertise
            </a>
            <a href="#blog" className="hover:text-primary transition">
              Blog
            </a>
            <a href="#contact" className="hover:text-primary transition">
              Contact
            </a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
            AI Infrastructure & Cost Optimization Engineer
          </h1>

          <p className="text-xl text-muted-foreground mb-8 max-w-2xl">
            I design and deploy AI systems that reduce cost, automate workflows, and give real-time visibility into AI spend.
          </p>

          <div className="flex flex-col md:flex-row gap-4">
            <Button
              size="lg"
              className="bg-primary hover:bg-primary/90 text-primary-foreground"
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

      {/* Featured Projects */}
      <section id="featured" className="py-20 px-4 bg-card/50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold mb-12">Featured Projects</h2>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Burn Rate",
                description:
                  "Real-time AI API cost monitoring platform with intelligent alerts and leak detection",
                link: "https://burn-rate-zeta.vercel.app/",
                github: "https://github.com/anyanwuihueze/burn-rate",
              },
              {
                title: "Japa Genie",
                description:
                  "AI-powered relocation assistant helping Nigerians navigate international moves",
                link: "https://www.japagenie.com",
                github: "https://github.com/anyanwuihueze/japa-genie-test-v1-preauth",
              },
              {
                title: "Eden Access",
                description:
                  "AI concierge system with voice and identity verification for automating access and guest management in properties",
                link: "https://eden-access.vercel.app/",
                github: "#",
              },
            ].map((project, idx) => (
              <Card key={idx} className="p-6 hover:border-primary/50 transition">
                <h3 className="text-xl font-bold mb-3">{project.title}</h3>
                <p className="text-muted-foreground mb-6">{project.description}</p>
                <div className="flex gap-3">
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => window.open(project.link, "_blank")}
                  >
                    View Demo
                    <ExternalLink className="ml-2 w-3 h-3" />
                  </Button>
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => window.open(project.github, "_blank")}
                  >
                    GitHub
                  </Button>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Expertise */}
      <section id="expertise" className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold mb-12">Core Expertise</h2>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: <TrendingDown className="w-8 h-8" />,
                title: "AI Cost Optimization",
                description:
                  "Monitor, analyze, and optimize AI API spending across multiple providers",
              },
              {
                icon: <Brain className="w-8 h-8" />,
                title: "AI Agents & Automation",
                description:
                  "Design and deploy intelligent agents for customer support, lead qualification, and workflow automation",
              },
              {
                icon: <Zap className="w-8 h-8" />,
                title: "Real-Time Systems",
                description:
                  "Build scalable infrastructure for real-time monitoring, alerts, and data processing",
              },
              {
                icon: <Shield className="w-8 h-8" />,
                title: "Security & Compliance",
                description:
                  "Implement secure key management, data protection, and compliance frameworks",
              },
              {
                icon: <Cpu className="w-8 h-8" />,
                title: "Infrastructure Design",
                description:
                  "Architect cloud-native systems optimized for performance and cost efficiency",
              },
              {
                icon: <Code2 className="w-8 h-8" />,
                title: "Full-Stack Development",
                description:
                  "End-to-end implementation from backend APIs to production-ready frontends",
              },
            ].map((item, idx) => (
              <div key={idx} className="space-y-3">
                <div className="text-primary">{item.icon}</div>
                <h3 className="font-bold text-lg">{item.title}</h3>
                <p className="text-muted-foreground text-sm">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Blog Section */}
      <section id="blog" className="py-20 px-4 bg-card/50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold mb-12">Automation Playbooks</h2>

          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                title: "The Hidden Cost Crisis: Why AI Companies Are Bleeding Money",
                excerpt:
                  "Most AI teams have zero visibility into API spending. Learn why surprise bills are costing startups thousands monthly and how to prevent it.",
                date: "Mar 28, 2026",
              },
              {
                title: "How to Automate Your Sales Pipeline with AI",
                excerpt:
                  "Complete guide to implementing AI agents for lead qualification while maintaining personalization and trust.",
                date: "Mar 25, 2026",
              },
            ].map((post, idx) => (
              <Card key={idx} className="p-6 hover:border-primary/50 transition cursor-pointer">
                <h3 className="text-lg font-bold mb-3 line-clamp-2">{post.title}</h3>
                <p className="text-muted-foreground text-sm mb-4 line-clamp-3">{post.excerpt}</p>
                <div className="flex items-center justify-between">
                  <span className="text-xs text-muted-foreground">{post.date}</span>
                  <span className="text-primary text-sm font-semibold">Read →</span>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-4">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-4xl font-bold mb-4 text-center">Let's Work Together</h2>
          <p className="text-center text-muted-foreground mb-12">
            Tell me what you're building or struggling with—I'll help you design and deploy the right system.
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
                <label className="block text-sm font-semibold mb-2">Service Type</label>
                <Select value={formData.serviceType} onValueChange={(value) => handleSelectChange("serviceType", value)}>
                  <SelectTrigger>
                    <SelectValue placeholder="Select a service" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="cost-optimization">AI Cost Optimization</SelectItem>
                    <SelectItem value="automation">Automation & AI Agents</SelectItem>
                    <SelectItem value="infrastructure">Infrastructure Design</SelectItem>
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
                placeholder="Tell me about your project..."
                rows={5}
                required
              />
            </div>

            <Button
              type="submit"
              size="lg"
              className="w-full"
              disabled={isSubmitting}
            >
              {isSubmitting ? "Sending..." : "Send Message"}
            </Button>
          </form>

          {/* Contact Info */}
          <div className="border-t border-border pt-12">
            <div className="grid md:grid-cols-3 gap-8 text-center">
              <div>
                <Mail className="w-6 h-6 text-primary mx-auto mb-3" />
                <p className="text-sm text-muted-foreground mb-2">Email</p>
                <a href="mailto:anyanwuihueze@gmail.com" className="font-semibold hover:text-primary">
                  anyanwuihueze@gmail.com
                </a>
              </div>
              <div>
                <Phone className="w-6 h-6 text-primary mx-auto mb-3" />
                <p className="text-sm text-muted-foreground mb-2">Phone</p>
                <div className="space-y-1">
                  <a href="tel:+2347088564317" className="font-semibold hover:text-primary block text-sm">
                    +234 708 856 4317
                  </a>
                  <a href="tel:+2349031622709" className="font-semibold hover:text-primary block text-sm">
                    +234 903 162 2709
                  </a>
                </div>
              </div>
              <div>
                <Linkedin className="w-6 h-6 text-primary mx-auto mb-3" />
                <p className="text-sm text-muted-foreground mb-2">Social</p>
                <div className="flex gap-4 justify-center">
                  <a href="#" className="hover:text-primary transition">
                    <Linkedin className="w-5 h-5" />
                  </a>
                  <a href="#" className="hover:text-primary transition">
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
          <p>© 2026 Prince Anyanwu. All rights reserved.</p>
          <p className="text-sm mt-2">AI Infrastructure & Cost Optimization Engineer</p>
        </div>
      </footer>
    </div>
  );
}
