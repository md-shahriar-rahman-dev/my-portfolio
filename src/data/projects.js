export const PROJECTS = [
  {
    id: "proj-1",
    name: "Todo App",
    image: "/projects/todo.svg",
    tech: ["React", "Vite", "LocalStorage"],
    short: "A fast and minimal todo application.",
    desc: "A minimal, fast todo app with local persistence, filters, and accessibility in mind.",
    live: "https://example.com/todo-app",
    repo: "https://github.com/placeholder/todo-client",
    challenges:
      "Managing state and persistence edge cases across components and ensuring accessibility for keyboard users.",
    improvements:
      "Add user sync, authentication, and mobile offline sync using Service Workers.",
  },
  {
    id: "proj-2",
    name: "Portfolio Template",
    image: "/projects/portfolio.svg",
    tech: ["React", "CSS", "Vite"],
    short: "A modern portfolio template with responsive components.",
    desc: "This project is a starter portfolio template featuring responsive layout, accessible components and deploy-ready configuration.",
    live: "https://example.com/portfolio",
    repo: "https://github.com/placeholder/portfolio-client",
    challenges:
      "Creating a flexible layout system that works across devices and optimizing images for performance.",
    improvements:
      "Add CMS integration for content and a blog, and add dark/light theme toggle.",
  },
  {
    id: "proj-3",
    name: "E-commerce Mock",
    image: "/projects/shop.svg",
    tech: ["React", "Context API", "Stripe (mock)"],
    short: "A demo e-commerce app with cart and filters.",
    desc: "A demo e-commerce front-end with product listing, filtering, cart management and mock checkout flow.",
    live: "https://example.com/shop",
    repo: "https://github.com/placeholder/shop-client",
    challenges:
      "Designing state flows for cart and filters and keeping UX snappy on mobile.",
    improvements:
      "Add backend APIs, real payments, and advanced search and recommendations.",
  },
];

export function getProjectById(id) {
  return PROJECTS.find((p) => p.id === id);
}
