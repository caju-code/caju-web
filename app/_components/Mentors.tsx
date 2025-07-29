"use client"
import { useState } from "react";
import Image from "next/image";

export default function Mentors(){
    const [currentSlide, setCurrentSlide] = useState(0);

    const mentors = [
        {
            name: "Fernanda Vilela",
            description: "Don't worry if you don't fit in with everyone else, we would rather you stand out than fall in line.",
            image: "/images/cat1.png",
            bgColor: "#FF9C00",
            learnMore: "Learn more"
        },
        {
            name: "Amanda Carvalho",
            description: "Always given 24 hours a full day to make the most of your opportunities.",
            image: "/images/cat2.png",
            bgColor: "#FB4202",
            learnMore: "Learn more"
        },
        {
            name: "Chico Fernando",
            description: "Treat our service users like family, and stick to our ethics like a champion.",
            image: "/images/cat3.png",
            bgColor: "#8CBE2F",
            learnMore: "Learn more"
        },
        {
            name: "Luize Moretti",
            description: "Our business is one of our community pillars. Allow for your ideas to be the best.",
            image: "/images/cat4.png",
            bgColor: "#1982C4",
            learnMore: "Learn more"
        }
    ];

    const nextSlide = () => {
        setCurrentSlide((prev) => (prev + 1) % mentors.length);
    };

    const prevSlide = () => {
        setCurrentSlide((prev) => (prev - 1 + mentors.length) % mentors.length);
    };

    return (
        <section className="py-24 pb-40 bg-gray-50">
            {/* Primeira div - Título e Subtítulo */}
            <div className="text-center mb-16">
                <h2 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
                    Mentors
                </h2>
                <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                    Meet the Mentors Guiding Our Journey
                </p>
            </div>

            {/* Segunda div - Ícone central */}
           <div className="text-center mb-16">
                           <div className="flex items-center justify-center">
                               <Image
                                   src="/images/cajuicon.png"
                                   alt="Caju Icon"
                                   width={30}
                                   height={30}
                               />
                           </div>
                       </div>

            {/* Terceira div - Slide de Cards */}
            <div className="max-w-7xl mx-auto px-6">
                <div className="relative overflow-hidden">
                    <div 
                        className="flex transition-transform duration-500 ease-in-out"
                        style={{ 
                            transform: `translateX(-${currentSlide * 622}px)`
                        }}
                    >
                        {mentors.map((mentor, index) => (
                            <div
                                key={index}
                                className="flex-shrink-0"
                                style={{ width: '622px', padding: '0 90px 90px 90px' }}
                            >
                                <div className="mentor-card-wrapper relative">
                                    {/* Shadow element */}
                                    <div 
                                        className="shadow-element absolute top-6 left-6 z-0 transition-transform duration-200 ease-in-out"
                                        style={{ 
                                            width: '442px', 
                                            height: '358px',
                                            backgroundColor: '#000000',
                                            borderRadius: '40px',
                                            clipPath: 'path("M44.2894 41.7354C48.3267 17.6465 69.1768 0 93.6017 0H383.284C410.898 0 433.284 22.3858 433.284 50V308C433.284 335.614 410.898 358 383.284 358H50.3614C19.4461 358 -4.06087 330.225 1.0492 299.735L44.2894 41.7354Z")',
                                            WebkitClipPath: 'path("M44.2894 41.7354C48.3267 17.6465 69.1768 0 93.6017 0H383.284C410.898 0 433.284 22.3858 433.284 50V308C433.284 335.614 410.898 358 383.284 358H50.3614C19.4461 358 -4.06087 330.225 1.0492 299.735L44.2894 41.7354Z")'
                                        }}
                                    ></div>

                                    {/* Card Background */}
                                    <div 
                                        className="mentor-card relative overflow-hidden flex flex-col z-10"
                                        style={{ 
                                            width: '442px', 
                                            height: '358px',
                                            backgroundColor: mentor.bgColor,
                                            borderRadius: '40px',
                                            clipPath: 'path("M44.2894 41.7354C48.3267 17.6465 69.1768 0 93.6017 0H383.284C410.898 0 433.284 22.3858 433.284 50V308C433.284 335.614 410.898 358 383.284 358H50.3614C19.4461 358 -4.06087 330.225 1.0492 299.735L44.2894 41.7354Z")',
                                            WebkitClipPath: 'path("M44.2894 41.7354C48.3267 17.6465 69.1768 0 93.6017 0H383.284C410.898 0 433.284 22.3858 433.284 50V308C433.284 335-614 410.898 358 383.284 358H50.3614C19.4461 358 -4.06087 330.225 1.0492 299.735L44.2894 41.7354Z")'
                                        }}
                                    >
                                        {/* Decorative white curved lines */}
                                        <div className="absolute inset-0 overflow-hidden">
                                            <div className="absolute top-8 right-12 w-40 h-20 border-2 border-white/30 rounded-full transform rotate-12"></div>
                                            <div className="absolute bottom-12 right-16 w-24 h-12 border-2 border-white/20 rounded-full transform -rotate-12"></div>
                                        </div>

                                        <div className="relative z-10 p-8 flex flex-col h-full w-2/3 ml-auto text-right">
                                            {/* Title section */}
                                            <div className="mb-6">
                                                <h3 className="text-white font-bold text-2xl mb-2">
                                                    {mentor.name}
                                                </h3>
                                            </div>

                                            {/* Description section */}
                                            <div className="flex-1 mb-6">
                                                <p className="text-white/90 text-base leading-relaxed">
                                                    {mentor.description}
                                                </p>
                                            </div>

                                            {/* Footer with Learn more button */}
                                            <div className="mt-auto">
                                                <button className="text-white font-bold text-lg hover:text-white/80 transition-all duration-300">
                                                    {mentor.learnMore}
                                                </button>
                                            </div>
                                        </div>
                                    </div>

                                    {/* Overlapping Profile Image - 70% inside the card */}
                                    <div className="absolute -left-14 top-1/2 transform -translate-y-1/2 z-20">
                                        <div className="rounded-full overflow-hidden border-4 border-white shadow-lg" style={{ width: '194px', height: '194px' }}>
                                            <Image
                                                src={mentor.image}
                                                alt={mentor.name}
                                                width={194}
                                                height={194}
                                                className="w-full h-full object-cover"
                                            />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Navigation dots */}
                <div className="flex justify-center items-center gap-4 mt-8">
                    <button
                        onClick={prevSlide}
                        className="w-10 h-10 rounded-full bg-gray-300 hover:bg-gray-400 flex items-center justify-center transition-colors"
                    >
                        <span className="text-gray-700">←</span>
                    </button>

                    <div className="flex gap-2">
                        {mentors.map((_, index) => (
                            <button
                                key={index}
                                onClick={() => setCurrentSlide(index)}
                                className={`w-3 h-3 rounded-full transition-colors ${
                                    index === currentSlide ? 'bg-[#feaa24]' : 'bg-gray-300'
                                }`}
                            />
                        ))}
                    </div>

                    <button
                        onClick={nextSlide}
                        className="w-10 h-10 rounded-full bg-gray-300 hover:bg-gray-400 flex items-center justify-center transition-colors"
                    >
                        <span className="text-gray-700">→</span>
                    </button>
                </div>
            </div>
        </section>
    );
};