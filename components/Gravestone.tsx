import React from 'react';
import { Project } from '@/lib/data';
import { formatDate } from '@/lib/utils';

interface GravestoneProps {
	project: Project;
	index: number;
}

const Z_OFFSET_BASE = -100;
const Z_OFFSET_FACTOR = 50;
const X_OFFSET = 100;

const Gravestone = React.memo(({ project, index }: GravestoneProps) => {
	const zOffset = Z_OFFSET_BASE - index * Z_OFFSET_FACTOR;
	const xOffset = index % 2 === 0 ? -X_OFFSET : X_OFFSET;

	return (
		<div
			className="gravestone relative mx-auto my-12 w-64 h-80 flex flex-col items-center"
			style={{
				transform: `translateZ(${zOffset}px) translateX(${xOffset}px)`,
			}}
		>
			<div className="stone bg-slate-300 w-full h-64 rounded-t-lg pt-6 px-4 text-center shadow-lg transition-transform hover:scale-105">
				<div className="cross absolute -top-10 left-1/2 -translate-x-1/2 w-8 h-16 bg-slate-400">
					<div className="w-16 h-6 bg-slate-400 absolute top-3 -left-4"></div>
				</div>
				<h3 className="font-bold text-slate-800 text-xl mt-6">{project.name}</h3>
				<p className="text-slate-600 text-sm mt-2 mb-4">{project.description}</p>
				<div className="dates mt-4 border-t border-slate-500 pt-4 text-slate-700">
					<p><span className="font-semibold">Born:</span> {formatDate(project.startDate)}</p>
					<p><span className="font-semibold">Died:</span> {formatDate(project.endDate)}</p>
				</div>
			</div>
			<div className="dirt bg-gradient-to-b from-slate-700 to-slate-900 w-full h-16 rounded-b-lg"></div>
		</div>
	);
});

Gravestone.displayName = 'Gravestone';
export default Gravestone;
