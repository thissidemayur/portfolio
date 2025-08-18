import { Lightbulb, FileText, Code, Rocket, LucideProps, Shield, Clock, LucideMove3d } from "lucide-react"; // example icons
import { ForwardRefExoticComponent } from "react";


//  -----------------------------------------------  STEPS-DATA -----------------------------------------------
interface iStepsData {
    id: number,
    title: string;
    description: string,
    icon: ForwardRefExoticComponent<LucideProps>
}

export const stepsData: iStepsData[] = [
    {
        id: 1,
        title: "Discovery",
        description: "Understand requirements, goals, and scope",
        icon: Lightbulb
    },
    {
        id: 2,
        title: "Planning",
        description: "Wireframes, architecture, and timeline",
        icon: FileText
    },
    {
        id: 3,
        title: "Development",
        description: "Coding, testing, and iterative feedback",
        icon: Code
    },
    {
        id: 4,
        title: "Delivery & Support",
        description: "Deployment, monitoring, and maintenance",
        icon: Rocket
    },
];


// ----------------------------------------------- TESTIMONIALS -----------------------------------------------
interface iTestimonials {
    name: string;
    src: string;
    quote: string;
    designation: string
}
export const testimonials: iTestimonials[] = [
    {

        quote:
            "He is very humble and hardworking. Appreciable work — completed my projects even during his exam days.",
        name: "Bhawani",
        designation: "Client",
        src: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?q=80&w=3560&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
        quote:
            "Mayur delivered a scalable, production-ready system exactly as we discussed. Communication was clear and updates were always timely.",
        name: "Rohit Sharma",
        designation: "Professor @LPU",
        src: "https://images.unsplash.com/photo-1624561172888-ac93c696e10c?q=80&w=2592&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },

];


// why people hire me
export const reasons = [
    {
        id: 1,
        title: "Expertise & Skills",
        description:
            "Direct access to my full-stack & backend development expertise. I build scalable, production-ready solutions tailored to your needs.",
        icon: Lightbulb
    },
    {
        id: 2,
        title: "Integrity & Communication",
        description:
            "Clear, transparent communication with integrity. You’ll get regular updates and peace of mind without unnecessary stress.",
        icon: Shield
    },
    {
        id: 3,
        title: "On-Time Delivery",
        description:
            "I respect time and deadlines. Your project will be delivered on schedule without compromising quality.",
        icon: Clock,
    },
    {
        id: 4,
        title: "Quality & Impact",
        description:
            "I focus on creating measurable impact and real-world solutions that scale, solve problems, and add value.",
        icon: LucideMove3d,
    },
];

