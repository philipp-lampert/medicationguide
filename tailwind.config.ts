import forms from '@tailwindcss/forms';
import type { Config } from 'tailwindcss';

export default {
	content: ['./src/**/*.{html,js,svelte,ts}'],
	corePlugins: {
		container: false
	},
	theme: {
		extend: {
			fontSize: {
				'4.5xl': ['2.625rem', '3rem']
			},
			fontFamily: {
				retina: ['Retina, Tahoma, Arial, sans-serif'],
				times: ['Times New Roman, serif'],
				'retina-narrow': ['RetinaNarrow, sans-serif']
			},
			letterSpacing: {
				'medium-tight': '-0.01em'
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

	plugins: [
		forms,
		function ({ addVariant }) {
			addVariant('hover', '@media (any-hover: hover) and (any-pointer: fine) { &:hover }');
		}
	]
} satisfies Config;
