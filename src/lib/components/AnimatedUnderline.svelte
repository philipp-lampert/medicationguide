<script lang="ts">
	let { color = 'bg-black' } = $props<{
		color?: string;
	}>();
</script>

<span
	class="absolute bottom-0 left-0 z-50 h-0.5 w-full scale-x-0 transform {color} transition-transform duration-300 group-hover:scale-x-100"
></span>
