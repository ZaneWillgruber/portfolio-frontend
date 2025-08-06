export const PageHeader = () => (
	<header className="sticky top-0 left-0 right-0 text-center z-30 p-4 bg-slate-900/70 backdrop-blur-sm">
		<h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-slate-100 tracking-wider">zanewillgruber.com</h1>
		<p className="text-lg sm:text-xl text-slate-400 mt-2">Where Projects Go to Die</p>
	</header>
);

export const Stars = () => (
	<div className="fixed inset-0 opacity-30 z-0">
		{Array.from({ length: 100 }).map((_, i) => (
			<div
				key={i}
				className="absolute w-1 h-1 bg-slate-300 rounded-full"
				style={{
					top: `${Math.random() * 100}%`,
					left: `${Math.random() * 100}%`,
					opacity: Math.random() * 0.7 + 0.3,
				}}
			/>
		))}
	</div>
);

export const Fog = () => (
	<div className="fixed inset-0 bg-gradient-to-t from-slate-900 via-transparent to-slate-900/50 pointer-events-none z-20"></div>
);

export const ScrollIndicator = () => (
	<div className="fixed bottom-10 left-1/2 -translate-x-1/2 text-slate-400 text-center animate-bounce z-30">
		<p>Scroll to explore</p>
		<svg className="w-6 h-6 mx-auto mt-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
			<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
		</svg>
	</div>
);
