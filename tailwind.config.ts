import forms from '@tailwindcss/forms';
import type { Config } from 'tailwindcss';

export default {
	content: ['./src/**/*.{html,js,svelte,ts}'],

	theme: {
		container: {
			center: true,
			padding: '2rem'
		},
		extend: {
			colors: {
				'german-red': '#e2001a',
				'german-gold': '#f8d100'
			},
			borderWidth: {
				'3': '3px'
			}
		}
	},

	plugins: [forms]
} satisfies Config;
