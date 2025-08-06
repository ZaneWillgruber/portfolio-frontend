"use client";

import { useEffect, useRef, useState } from "react";

interface Project {
	id: number;
	name: string;
	description: string;
	birthDate: string;
	deathDate: string;
}

const projects: Project[] = [
	{
		id: 1,
		name: "Task Manager Apps",
		description: "A React-based task management application",
		birthDate: "2023-01-15",
		deathDate: "2023-03-22"
	},
	{
		id: 2,
		name: "Recipe Finder",
		description: "Mobile app for finding recipes based on ingredients",
		birthDate: "2022-08-04",
		deathDate: "2022-11-30"
	},
	{
		id: 3,
		name: "Budget Tracker",
		description: "Personal finance tracking web application",
		birthDate: "2023-05-10",
		deathDate: "2023-07-18"
	},
	{
		id: 4,
		name: "Weather Dashboard",
		description: "Real-time weather visualization tool",
		birthDate: "2022-12-01",
		deathDate: "2023-02-15"
	},
	{
		id: 5,
		name: "Fitness Tracker",
		description: "Workout and nutrition tracking application",
		birthDate: "2023-04-20",
		deathDate: "2023-09-05"
	},
	{
		id: 6,
		name: "Social Media Clone",
		description: "A Twitter-like social platform experiment",
		birthDate: "2022-06-12",
		deathDate: "2022-10-28"
	},
	{
		id: 7,
		name: "E-commerce Site",
		description: "Online store with product catalog and cart",
		birthDate: "2023-02-05",
		deathDate: "2023-06-30"
	},
	{
		id: 8,
		name: "Portfolio v1",
		description: "First iteration of personal portfolio",
		birthDate: "2021-11-20",
		deathDate: "2022-04-15"
	}
];

function formatDate(dateString: string): string {
	const date = new Date(dateString);
	return date.toLocaleDateString('en-US', { year: 'numeric', month: 'short', day: 'numeric' });
}

function Gravestone({ project, index }: { project: Project; index: number }) {
	return (
		<div
			className="gravestone relative mx-auto my-24 w-64 h-80 flex flex-col items-center perspective-element"
			style={{
				transform: `translateZ(${-100 - index * 50}px) translateX(${index % 2 === 0 ? -100 : 100}px)`,
			}}
		>
			<div className="stone bg-slate-300 w-full h-64 rounded-t-lg pt-6 px-4 text-center shadow-lg transform hover:scale-105 transition-transform">
				<div className="cross absolute -top-10 left-1/2 transform -translate-x-1/2 w-8 h-16 bg-slate-400">
					<div className="w-16 h-6 bg-slate-400 absolute top-3 -left-4"></div>
				</div>
				<h3 className="font-bold text-slate-800 text-xl mt-6">{project.name}</h3>
				<p className="text-slate-600 text-sm mt-2 mb-4">{project.description}</p>
				<div className="dates mt-4 border-t border-slate-500 pt-4">
					<p className="text-slate-700">
						<span className="font-semibold">Birth:</span> {formatDate(project.birthDate)}
					</p>
					<p className="text-slate-700">
						<span className="font-semibold">Death:</span> {formatDate(project.deathDate)}
					</p>
				</div>
			</div>
			<div className="dirt bg-gradient-to-b from-slate-700 to-slate-900 w-full h-16 rounded-b-lg"></div>
		</div>
	);
}

export default function HomePage() {
	const [scrollY, setScrollY] = useState(0);
	const graveyard = useRef<HTMLDivElement>(null);

	useEffect(() => {
		const handleScroll = () => {
			setScrollY(window.scrollY);

			// Apply 3D perspective effect to gravestones
			if (graveyard.current) {
				const elements = graveyard.current.querySelectorAll('.perspective-element');
				elements.forEach((el, i) => {
					const element = el as HTMLElement;
					const speed = 0.15;
					const yOffset = scrollY * speed;
					const zOffset = -100 - i * 50;
					const xOffset = i % 2 === 0 ? -100 : 100;

					element.style.transform = `translateZ(${zOffset}px) translateY(${-yOffset}px) translateX(${xOffset}px)`;
				});
			}
		};

		window.addEventListener('scroll', handleScroll);
		return () => window.removeEventListener('scroll', handleScroll);
	}, [scrollY]);

	return (
		<div className="min-h-screen w-full overflow-x-hidden bg-gradient-to-b from-slate-800 to-slate-900 pb-96">
			{/* Fixed background */}
			<div className="fixed inset-0 bg-gradient-to-b from-slate-800 to-slate-900 -z-10"></div>

			{/* Stars */}
			<div className="fixed inset-0 opacity-30 z-0">
				{Array.from({ length: 100 }).map((_, i) => (
					<div
						key={i}
						className="absolute w-1 h-1 bg-slate-300 rounded-full"
						style={{
							top: `${Math.random() * 100}%`,
							left: `${Math.random() * 100}%`,
							opacity: Math.random() * 0.7 + 0.3
						}}
					></div>
				))}
			</div>

			{/* Fog effect */}
			<div className="fixed inset-0 bg-gradient-to-b from-transparent to-slate-900/50 pointer-events-none z-5"></div>

			{/* Header */}
			<header className="sticky top-0 left-0 right-0 text-center z-30 p-4 bg-slate-900/70 backdrop-blur-sm">
				<h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-slate-100 tracking-wider">zanewillgruber.com</h1>
				<p className="text-lg sm:text-xl text-slate-400 mt-2">Where Projects Go to Die</p>
			</header>

			{/* Main content with 3D perspective */}
			<div className="relative perspective" style={{ perspective: '1000px', perspectiveOrigin: 'center top' }}>
				<main
					ref={graveyard}
					className="relative z-10 max-w-5xl mx-auto px-4 pt-32 pb-96"
					style={{
						transformStyle: 'preserve-3d',
						transform: `translateY(${scrollY * 0.1}px) rotateX(${20 + scrollY * 0.01}deg)`
					}}
				>
					{/* Ground */}
					<div
						className="absolute inset-0 -z-1 bg-gradient-to-b from-slate-700 to-slate-900"
						style={{
							transform: 'rotateX(90deg) translateZ(-100px) scale(2)',
							transformOrigin: 'center bottom',
							height: '200%'
						}}
					></div>

					{/* Gravestones */}
					<div className="grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-32">
						{projects.map((project, index) => (
							<Gravestone key={project.id} project={project} index={index} />
						))}
					</div>
				</main>
			</div>

			{/* Scroll indicator */}
			<div className="fixed bottom-10 left-1/2 transform -translate-x-1/2 text-slate-400 text-center animate-bounce z-30">
				<p>Scroll to explore</p>
				<svg className="w-6 h-6 mx-auto mt-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
					<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
				</svg>
			</div>

			<style jsx>{`
        .perspective {
          perspective: 1000px;
        }
        
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-10px); }
        }
      `}</style>
		</div>
	);
}
