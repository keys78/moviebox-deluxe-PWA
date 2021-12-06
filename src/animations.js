
export const pageAnimation = {
	hidden: {
		translateX:-200,
		opacity: 0,
	},
	visible: {
		opacity: 1,
		translateX:0,
		transition: {
			duration: 0.4,
			when: 'beforeChildren',
			staggerChildren: 0.5,
		},
	},
	exit: {
		opacity: 0,
		translateX: -200,
		transition: {
			duration: 0.4,
		},
	},
};
