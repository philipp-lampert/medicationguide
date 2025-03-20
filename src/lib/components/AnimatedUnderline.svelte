<script lang="ts">
	let {
		color = 'bg-black',
		bottom = 0,
		height = 2
	} = $props<{
		color?: string;
		bottom?: number;
		height?: number;
	}>();
</script>

<span
	class="absolute left-0 z-50 w-full scale-x-0 transform {color} transition-transform duration-300 group-hover:scale-x-100"
	style="bottom: {bottom}px; height: {height}px;"
></span>
