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
			fontFamily: {
				retina: ['Retina, Tahoma, Arial, sans-serif'],
				times: ['Times New Roman, serif']
			},
			letterSpacing: {
				'medium-tight': '-0.0075em'
			},
			colors: {
				'german-red': '#e2001a',
				'german-gold': '#f8d100'
			},
			borderWidth: {
				'3': '3px'
			},
			boxShadow: {
				'inner-strong': 'inset 0 0px 15px 0px rgb(0 0 0 / 0.25)'
			},
			display: ['group-hover']
		}
	},

	plugins: [forms]
} satisfies Config;
