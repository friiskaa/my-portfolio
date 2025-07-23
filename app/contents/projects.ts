import { Project } from "../types";

export const projects: Project[] = [
    {
        title: 'Job Fair Information System',
        description: 'A full-stack e-commerce platform built with Next.js, TypeScript, and Tailwind CSS.',
        technologies: ['Next.js', 'TypeScript', 'Tailwind CSS', 'Stripe'],
        githubLink: 'https://github.com',
        demoLink: 'https://demo.com',
        image: '/projects/job-fair.png',
    },
    {
        title: 'SiLa: Sign Language Application',
        description: 'A personal finance tracker to manage expenses and income.',
        technologies: ['React', 'Firebase'],
        githubLink: 'https://github.com',
        demoLink: 'https://demo.com',
        image: '/projects/sila.png',
    }
];