export const entradaUpScroll = {
	offscreen: {
		y: 80,
		opacity: 0,
	},
	onscreen: {
		opacity: 1,
		y: 0,
		transition: {
			type: 'spring',
			// bounce: 0.3,
			duration: 1,
		},
	},
};

export const entradaMenu = {
	offscreen: {
		y: '-50%',
		opacity: 0,
	},
	onscreen: {
		opacity: 1,
		y: '0%',
		transition: {
			type: 'tween',
			// bounce: 0.3,
			duration: 0.5,
		},
	},
};

export const entradaImagenPortada = {
	offscreen: {
		x: 80,
		opacity: 0,
	},
	onscreen: {
		opacity: 1,
		x: 0,
		transition: {
			type: 'tween',
			// bounce: 0.3,
			duration: 0.5,
		},
	},
};

export const whatsapp = {
	offscreen: {
		x: 80,
		opacity: 0,
	},
	onscreen: {
		opacity: 1,
		x: 0,
		transition: {
			type: 'spring',
			duration: 1,
		},
	},
};

export const entradaScaleScroll = {
	offscreen: {
		opacity: 0,
		// scale: 0,
	},
	onscreen: {
		opacity: 1,
		// scale: 1,
		transition: { type: 'tween', duration: 1 },
	},
};
