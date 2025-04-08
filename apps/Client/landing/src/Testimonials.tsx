"use client";

import { InfiniteMovingCards } from "../../@/components/ui/infinite-moving-cards";

export function Testimonials() {
    return (
        <div className="rounded-md w-full flex flex-col my-32  items-center justify-center relative overflow-hidden cursor-pointer">
            <div className="max-w-7xl flex">

                <h1 className="text-4xl sm:text-5xl md:text-6xl  z-2 font-bold mb-26 bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-500">
                    Testimonial&apos;s
                </h1>
            </div>
            <div className="absolute pointer-events-none inset-0  items-center justify-center bg-[#0c0c0c] [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>
            <div className="absolute inset-0  pointer-events-none"></div>
            <InfiniteMovingCards
                items={testimonials}
                direction="right"
                speed="slow"
            />
        </div>
    );
}

const testimonials = [
    {
        quote:
            "It was the best of times, it was the worst of times, it was the age of wisdom, it was the age of foolishness, it was the epoch of belief, it was the epoch of incredulity, it was the season of Light, it was the season of Darkness, it was the spring of hope, it was the winter of despair.",
        name: "Charles Dickens",
        title: "A Tale of Two Cities",
    },
    {
        quote:
            "To be, or not to be, that is the question: Whether 'tis nobler in the mind to suffer The slings and arrows of outrageous fortune, Or to take Arms against a Sea of troubles, And by opposing end them: to die, to sleep.",
        name: "William Shakespeare",
        title: "Hamlet",
    },
    {
        quote: "All that we see or seem is but a dream within a dream.",
        name: "Edgar Allan Poe",
        title: "A Dream Within a Dream",
    },
    {
        quote:
            "It is a truth universally acknowledged, that a single man in possession of a good fortune, must be in want of a wife.",
        name: "Jane Austen",
        title: "Pride and Prejudice",
    },
    {
        quote:
            "Call me Ishmael. Some years ago—never mind how long precisely—having little or no money in my purse, and nothing particular to interest me on shore, I thought I would sail about a little and see the watery part of the world.",
        name: "Herman Melville",
        title: "Moby-Dick",
    },
];
