"use client";

import { projects } from '@/lib/data';
import { useScrollPosition } from '@/hooks/useScrollPosition';
import Gravestone from '@/components/Gravestone';
import { PageHeader, Stars, Fog, ScrollIndicator } from '@/components/Scene';

// Constants for the 3D effect
const ROTATE_X_BASE = 20;
const ROTATE_X_FACTOR = 0.01;
const TRANSLATE_Y_FACTOR = 0.2;

export default function HomePage() {
	const scrollY = useScrollPosition();

	// Dynamic styles for the main 3D container
	const graveyardStyle = {
		transformStyle: 'preserve-3d' as const,
		transform: `translateY(${scrollY * TRANSLATE_Y_FACTOR}px) rotateX(${ROTATE_X_BASE + scrollY * ROTATE_X_FACTOR}deg)`,
	};

	return (
		// The perspective property on the parent creates the 3D space
		<div className="min-h-[300vh] w-full overflow-x-hidden bg-slate-900" style={{ perspective: '1000px' }}>
			<div className="fixed inset-0 bg-gradient-to-b from-slate-800 to-slate-900 -z-10" />
			<Stars />
			<Fog />
			<PageHeader />

			<main className="relative z-10 max-w-5xl mx-auto px-4 pt-48 pb-96" style={graveyardStyle}>
				<div className="grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-32">
					{projects.map((project, index) => (
						<Gravestone key={project.id} project={project} index={index} />
					))}
				</div>
			</main>

			<ScrollIndicator />
		</div>
	);
}
