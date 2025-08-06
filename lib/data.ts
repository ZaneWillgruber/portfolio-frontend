export interface Project {
	id: number;
	name: string;
	description: string;
	startDate: string;
	endDate: string;
}

export const projects: Project[] = [
	{
		id: 1,
		name: "Task Manager App",
		description: "A React-based task management application",
		startDate: "2023-01-15",
		endDate: "2023-03-22"
	},
	{
		id: 2,
		name: "Recipe Finder",
		description: "Mobile app for finding recipes based on ingredients",
		startDate: "2022-08-04",
		endDate: "2022-11-30"
	},
	{
		id: 3,
		name: "Budget Tracker",
		description: "Personal finance tracking web application",
		startDate: "2023-05-10",
		endDate: "2023-07-18"
	},
	{
		id: 4,
		name: "Task Manager App",
		description: "A React-based task management application",
		startDate: "2023-01-15",
		endDate: "2023-03-22"
	},
	{
		id: 5,
		name: "Recipe Finder",
		description: "Mobile app for finding recipes based on ingredients",
		startDate: "2022-08-04",
		endDate: "2022-11-30"
	},
	{
		id: 6,
		name: "Budget Tracker",
		description: "Personal finance tracking web application",
		startDate: "2023-05-10",
		endDate: "2023-07-18"
	},
];
