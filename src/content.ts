import type { LucideIcon } from "lucide-react";
import {
  BadgeCheck,
  Boxes,
  Code2,
  Rocket,
  Workflow,
} from "lucide-react";

export type TechCategory = {
  title: string;
  icon: LucideIcon;
  focus?: string;
  items: string[];
};

export type Project = {
  title: string;
  description: string;
  repository: string;
  stack: string[];
  theme: "automation" | "systems" | "tooling";
};

export const hero = {
  name: "Adrian Cancio - Cloud DevOps Engineer",
  role: "Software Developer at Treelogic",
  aspiration: "Aspiring Cloud/DevOps Engineer",
  bio: "Full-stack developer grounded in Java/Spring Boot and Angular, driven by automation and a commitment to continuous improvement in systems architecture and DevSecOps pipelines. I specialize in building scalable applications, implementing CI/CD workflows, and automating infrastructure provisioning. My expertise spans backend services, modern frontend frameworks, and cloud automation tools including PowerShell, Python, and shell scripting.",
};

export const about = {
  currentFocus:
    "Building production-grade applications across the Spring Boot and Angular stack while championing clean architectures and measurable delivery. I design RESTful APIs, implement CI/CD pipelines, and ensure code quality through automated testing and continuous integration practices. Every project is an opportunity to refine development workflows and elevate team productivity through better tooling and processes.",
  careerVision:
    "Transitioning into a Cloud/DevOps Engineer role where automation, Infrastructure as Code (IaC), and secure-by-design pipelines accelerate product impact. My goal is to build cloud-native platforms that empower development teams with self-service infrastructure, automated deployments, and comprehensive observability. I'm passionate about creating systems that scale efficiently while maintaining security and reliability at every layer.",
  learning:
    "Currently mastering PowerShell to deliver cross-platform automation that bridges cloud-native tooling with enterprise environments. I'm diving deep into container orchestration, Kubernetes deployments, and declarative infrastructure management with tools like Terraform and Ansible. This hands-on learning approach combines real-world projects with continuous experimentation to build practical expertise in modern DevOps practices.",
  valueProposition:
    "I bring an automation-first mindset to every project—designing resilient environments, codifying infrastructure, and weaving observability and security into delivery workflows. My approach combines software engineering best practices with infrastructure expertise to create robust, maintainable systems. Whether automating deployment pipelines, hardening security configurations, or optimizing cloud resource utilization, I focus on delivering measurable improvements in speed, reliability, and cost efficiency.",
};

export const techStack: TechCategory[] = [
  {
    title: "Languages",
    icon: Code2,
    focus: "Polyglot foundations for resilient systems",
    items: ["Java", "Python", "JavaScript", "TypeScript", "C#", "C/C++"],
  },
  {
    title: "Web Frameworks",
    icon: Rocket,
    focus: "Product delivery with full-stack ownership",
    items: ["Spring Boot", "Angular", "REST APIs"],
  },
  {
    title: "DevOps & Automation",
    icon: Workflow,
    focus: "Automation-first, secure-by-default",
    items: ["PowerShell (Deep Focus)", "Shell Scripting", "DevSecOps"],
  },
  {
    title: "Other",
    icon: Boxes,
    focus: "Versatile tooling to accelerate delivery",
    items: ["Flutter (Dart)", "Object-Oriented Design", "Data Structures", "System Configuration (Lua/Neovim)", "Linux"],
  },
];

export const projects: Project[] = [
  {
    title: "Automation / Scripting",
    description:
      "Infrastructure bootstrap and environment hardening scripts spanning PowerShell and Bash to bring consistency to developer workstations and servers. These scripts automate software installation, system configuration, security hardening, and development environment setup across Windows, Linux, and macOS platforms. Built with modularity and reusability in mind, they serve as the foundation for reproducible infrastructure.",
    repository: "https://github.com/adrian-cancio/PowerShell-Config",
    stack: ["PowerShell", "Automation", "Infrastructure as Code"],
    theme: "automation",
  },
  {
    title: "Root Utilities",
    description:
      "Workflow accelerators for repetitive operations, packaging guardrails for security-sensitive tasks. This collection of utilities streamlines common DevOps workflows including credential management, deployment automation, and system administration tasks. Each utility follows security best practices with input validation, error handling, and comprehensive logging to ensure safe execution in production environments.",
    repository: "https://github.com/adrian-cancio/root-utils",
    stack: ["PowerShell", "DevSecOps", "Tooling"],
    theme: "automation",
  },
  {
    title: "PQC DevSecOps Pipeline",
    description:
      "Prototype CI/CD pipeline weaving post-quantum cryptography checks into automated delivery gates with Python automation scripts. This forward-looking project demonstrates how to integrate cryptographic agility into modern development workflows, ensuring applications are prepared for the post-quantum computing era. Includes automated security scanning, cryptographic library validation, and compliance reporting.",
    repository: "https://github.com/adrian-cancio/pqc-devsecops-pipeline",
    stack: ["Python", "CI/CD", "Security Automation"],
    theme: "automation",
  },
  {
    title: "League Outcome Simulator",
    description:
      "Predictive analytics toolkit estimating tournament trajectories and scenario planning for stakeholders. Uses statistical modeling and simulation techniques to forecast competition outcomes based on historical performance data. Provides interactive visualizations and what-if analysis capabilities that help teams and analysts make data-driven strategic decisions.",
    repository: "https://github.com/adrian-cancio/league-outcome-simulator",
    stack: ["Python", "Data Simulation", "Analytics"],
    theme: "systems",
  },
  {
    title: "Kickstart Neovim",
    description:
      "Lua-driven configuration balancing developer ergonomics with safe defaults for terminal-first workflows. This highly-optimized Neovim setup includes language server protocol (LSP) integration, intelligent code completion, syntax highlighting, and Git integration. Designed for developers who value keyboard-driven efficiency and want a modern IDE experience in the terminal.",
    repository: "https://github.com/adrian-cancio/kickstart.nvim",
    stack: ["Lua", "Developer Experience", "System Configuration"],
    theme: "tooling",
  },
];

export const contact = {
  email: "adriancancio@duck.com",
  github: "https://github.com/adrian-cancio",
  linkedin: "https://www.linkedin.com/in/adrian-cancio",
  pronouns: "He/Him",
};

export const highlights = [
  {
    title: "Cloud & DevOps Trajectory",
    description:
      "Advancing towards cloud-native delivery with Infrastructure as Code (IaC), container orchestration, and security-aware CI/CD pipelines. I'm building expertise in cloud platforms, Kubernetes, Docker, and automated deployment strategies that enable rapid, reliable software delivery at scale.",
    icon: BadgeCheck,
  },
  {
    title: "Automation at Scale",
    description:
      "Passionate about codifying repeatable, observable workflows that reduce operational toil for teams. From automated testing and deployment pipelines to infrastructure provisioning scripts, I create solutions that eliminate manual processes and empower teams to focus on innovation rather than repetitive tasks.",
    icon: Workflow,
  },
  {
    title: "Continuous Improvement",
    description:
      "Relentless focus on feedback loops—pairing metrics with retrospectives to evolve products and processes. I implement monitoring, logging, and observability solutions that provide actionable insights, enabling data-driven decisions that continuously improve system reliability and team velocity.",
    icon: Rocket,
  },
];
