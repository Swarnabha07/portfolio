import {
  Brush,
  Database,
  HardDrive,
  Mail,
  MonitorSmartphone,
  ShieldCheck,
  ServerCog,
  Workflow,
  Wrench,
} from "lucide-react";

export const TOOLKIT = [
  {
    id: "frontend",
    title: "Frontend",
    icon: MonitorSmartphone,

    items: [
      {
        name: "Next.js (App Router)",
        description: "Full-stack React framework",
      },
      {
        name: "React",
        description: "Component-based UI development",
      },
    ],
  },

  {
    id: "ui-ux",
    title: "UI & UX",
    icon: Brush,

    items: [
      {
        name: "Framer Motion",
        description: "Animations & interactions",
      },
      {
        name: "Shadcn UI",
        description: "Accessible component library",
      },
      {
        name: "Recharts",
        description: "Analytics & data visualization",
      },
      {
        name: "Tiptap",
        description: "Rich text editor",
      },

      {
        name: "React Three Fiber",
        description: "3D rendering",
      },
      {
        name: "React Three Drei",
        description: "3D scene helpers",
      },
      {
        name: "Lordicon",
        description: "Animated icons",
      },

      {
        name: "React-Toastify",
        description: "Toast notifications",
      },
    ],
  },

  {
    id: "backend",
    title: "Backend",
    icon: ServerCog,

    items: [
      {
        name: "Next.js API Routes",
        description: "Server-side APIs",
      },
      {
        name: "Node.js",
        description: "JavaScript runtime",
      },
    ],
  },

  {
    id: "authentication",
    title: "Authentication",
    icon: ShieldCheck,

    items: [
      {
        name: "NextAuth.js",
        description: "Authentication & session management",
      },
    ],
  },

  {
    id: "database",
    title: "Database",
    icon: Database,

    items: [
      {
        name: "MongoDB",
        description: "NoSQL database",
      },
      {
        name: "Mongoose",
        description: "Schema design & relationships",
      },
    ],
  },

  {
    id: "realtime",
    title: "Real-Time & Automation",
    icon: Workflow,

    items: [
      {
        name: "Server-Sent Events",
        description: "Real-time server updates",
      },
      {
        name: "BullMQ + Redis",
        description: "Queues & background processing",
      },
      {
        name: "cron-job.org",
        description: "Scheduled task automation",
      },
    ],
  },

  {
    id: "storage",
    title: "Storage & Media",
    icon: HardDrive,

    items: [
      {
        name: "Supabase",
        description: "Secure file storage",
      },
    ],
  },

  {
    id: "email",
    title: "Email Infrastructure",
    icon: Mail,

    items: [
      {
        name: "Resend",
        description: "Production email delivery",
      },
      {
        name: "Mailtrap",
        description: "Email testing environment",
      },
    ],
  },

  {
    id: "tools",
    title: "Development Tools",
    icon: Wrench,

    items: [
      {
        name: "Postman",
        description: "API testing",
      },
    ],
  },
];
