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
  title: "Cloud DevOps Engineer",
  role: "Software Developer at Treelogic",
  aspiration: "",
  bio: "Full-stack developer specializing in Java/Spring Boot and Angular with expertise in automation, CI/CD, and infrastructure provisioning.",
};

export const about = {
  currentFocus:
    "Building production-grade applications with Spring Boot and Angular, implementing CI/CD pipelines and automated testing practices.",
  careerVision:
    "Advancing into roles focused on automation, Infrastructure as Code, and cloud-native platforms.",
  learning:
    "Mastering PowerShell for cross-platform automation, container orchestration, and infrastructure management with Terraform and Ansible.",
  valueProposition:
    "Automation-first approach to building resilient systems with integrated observability and security.",
};

export const techStack: TechCategory[] = [
  {
    title: "Languages",
    icon: Code2,
    focus: "Multi-language expertise",
    items: ["Java", "Python", "JavaScript", "TypeScript", "C#", "C/C++"],
  },
  {
    title: "Web Frameworks",
    icon: Rocket,
    focus: "Full-stack development",
    items: ["Spring Boot", "Angular", "REST APIs"],
  },
  {
    title: "DevOps & Automation",
    icon: Workflow,
    focus: "Automation and security",
    items: ["PowerShell (Deep Focus)", "Shell Scripting", "DevSecOps"],
  },
  {
    title: "Other",
    icon: Boxes,
    focus: "Versatile tooling",
    items: ["Flutter (Dart)", "Object-Oriented Design", "Data Structures", "System Configuration (Lua/Neovim)", "Linux"],
  },
];

export const projects: Project[] = [
  {
    title: "Automation / Scripting",
    description:
      "PowerShell and Bash scripts for automated software installation, system configuration, and security hardening across Windows, Linux, and macOS.",
    repository: "https://github.com/adrian-cancio/PowerShell-Config",
    stack: ["PowerShell", "Automation", "Infrastructure as Code"],
    theme: "automation",
  },
  {
    title: "Root Utilities",
    description:
      "DevOps workflow utilities for credential management, deployment automation, and system administration with security-focused guardrails.",
    repository: "https://github.com/adrian-cancio/root-utils",
    stack: ["PowerShell", "DevSecOps", "Tooling"],
    theme: "automation",
  },
  {
    title: "PQC DevSecOps Pipeline",
    description:
      "CI/CD pipeline integrating post-quantum cryptography checks with Python automation for future-proof security validation.",
    repository: "https://github.com/adrian-cancio/pqc-devsecops-pipeline",
    stack: ["Python", "CI/CD", "Security Automation"],
    theme: "automation",
  },
  {
    title: "League Outcome Simulator",
    description:
      "Statistical modeling toolkit for tournament predictions with interactive visualizations and scenario planning.",
    repository: "https://github.com/adrian-cancio/league-outcome-simulator",
    stack: ["Python", "Data Simulation", "Analytics"],
    theme: "systems",
  },
  {
    title: "Kickstart Neovim",
    description:
      "Optimized Neovim configuration with LSP integration, code completion, and Git support for terminal-first development.",
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
      "Building expertise in Infrastructure as Code, container orchestration, and CI/CD pipelines for cloud-native delivery.",
    icon: BadgeCheck,
  },
  {
    title: "Automation at Scale",
    description:
      "Creating repeatable workflows that reduce manual processes and empower teams to focus on innovation.",
    icon: Workflow,
  },
  {
    title: "Continuous Improvement",
    description:
      "Implementing monitoring and observability solutions that enable data-driven decisions to improve system reliability.",
    icon: Rocket,
  },
];
