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
  name: "Adrian Cancio",
  role: "Software Developer at Treelogic",
  aspiration: "Aspiring Cloud/DevOps Engineer",
  bio: "Full-stack developer grounded in Java/Spring Boot and Angular, driven by automation and a commitment to continuous improvement in systems architecture and DevSecOps pipelines.",
};

export const about = {
  currentFocus:
    "Building production-grade applications across the Spring Boot and Angular stack while championing clean architectures and measurable delivery.",
  careerVision:
    "Transitioning into a Cloud/DevOps Engineer role where automation, IaC, and secure-by-design pipelines accelerate product impact.",
  learning:
    "Currently mastering PowerShell to deliver cross-platform automation that bridges cloud-native tooling with enterprise environments.",
  valueProposition:
    "I bring an automation-first mindset to every project—designing resilient environments, codifying infrastructure, and weaving observability and security into delivery workflows.",
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
      "Infrastructure bootstrap and environment hardening scripts spanning PowerShell and Bash to bring consistency to developer workstations and servers.",
    repository: "https://github.com/adrian-cancio/PowerShell-Config",
    stack: ["PowerShell", "Automation", "Infrastructure as Code"],
    theme: "automation",
  },
  {
    title: "Root Utilities",
    description:
      "Workflow accelerators for repetitive operations, packaging guardrails for security-sensitive tasks.",
    repository: "https://github.com/adrian-cancio/root-utils",
    stack: ["PowerShell", "DevSecOps", "Tooling"],
    theme: "automation",
  },
  {
    title: "PQC DevSecOps Pipeline",
    description:
      "Prototype CI/CD pipeline weaving post-quantum cryptography checks into automated delivery gates with Python automation scripts.",
    repository: "https://github.com/adrian-cancio/pqc-devsecops-pipeline",
    stack: ["Python", "CI/CD", "Security Automation"],
    theme: "automation",
  },
  {
    title: "League Outcome Simulator",
    description:
      "Predictive analytics toolkit estimating tournament trajectories and scenario planning for stakeholders.",
    repository: "https://github.com/adrian-cancio/league-outcome-simulator",
    stack: ["Python", "Data Simulation", "Analytics"],
    theme: "systems",
  },
  {
    title: "Kickstart Neovim",
    description:
      "Lua-driven configuration balancing developer ergonomics with safe defaults for terminal-first workflows.",
    repository: "https://github.com/adrian-cancio/kickstart.nvim",
    stack: ["Lua", "Developer Experience", "System Configuration"],
    theme: "tooling",
  },
];

export const contact = {
  email: "adriancancio@duck.com",
  github: "https://github.com/adrian-cancio",
  pronouns: "He/Him",
};

export const highlights = [
  {
    title: "Cloud & DevOps Trajectory",
    description:
      "Advancing towards cloud-native delivery with IaC, container orchestration, and security-aware CI/CD pipelines.",
    icon: BadgeCheck,
  },
  {
    title: "Automation at Scale",
    description:
      "Passionate about codifying repeatable, observable workflows that reduce operational toil for teams.",
    icon: Workflow,
  },
  {
    title: "Continuous Improvement",
    description:
      "Relentless focus on feedback loops—pairing metrics with retrospectives to evolve products and processes.",
    icon: Rocket,
  },
];
