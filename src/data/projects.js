export const PROJECTS = [
  {
    id: "proj-1",
    name: "Habit-Hub",
    image: "/projects/habit-hub.png",
    tech: ["React", "Vite", "LocalStorage"],
    short: "A fast and minimal todo application.",
    desc: "A minimal, fast todo app with local persistence, filters, and accessibility in mind.",
    live: "https://wondrous-malabi-72cbd5.netlify.app",
    repo: "https://github.com/md-shahriar-rahman-dev/habit-hub.git",
    challenges:
      "Managing state and persistence edge cases across components and ensuring accessibility for keyboard users.",
    improvements:
      "Add user sync, authentication, and mobile offline sync using Service Workers.",
  },
  {
    id: "proj-2",
    name: "Care-IO",
    image: "/projects/care-io.jpg",
    tech: ["React", "CSS", "Vite"],
    short: "A modern care-io application for healthcare providers and patients.",
    desc: "This project is a modern care-io application for healthcare providers and patients.",
    live: "https://care-io-iota.vercel.app",
    repo: "https://github.com/md-shahriar-rahman-dev/care-io.git",
    challenges:
      "Creating a flexible layout system that works across devices and optimizing images for performance.",
    improvements:
      "Add CMS integration for content and a blog, and add dark/light theme toggle, and add more features.",
  },
  {
    id: "proj-3",
    name: "BookCourier",
    image: "/projects/bookcourier.jpg",
    tech: ["React", "Context API", "Stripe (mock)"],
    short: "A book courier application for book lovers.",
    desc: "The application is a book courier application for book lovers to enhance their reading experience.",
    live: "https://bookcourier-4719b.web.app/",
    repo: "https://github.com/md-shahriar-rahman-dev/bookcourier-client.git",
    challenges:
      "Designing state flows for cart and filters and keeping UX snappy on mobile.",
    improvements:
      "Add backend APIs, real payments, and advanced search and recommendations, and add more features like chat, and more book categories and more features like wishlist, and more features .",
  },
];

export function getProjectById(id) {
  return PROJECTS.find((p) => p.id === id);
}
