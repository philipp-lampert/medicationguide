<script lang="ts">
	import type { Snippet } from 'svelte';

	let {
		children,
		isOpen = false,
		closeModal
	} = $props<{
		children: Snippet;
		isOpen?: boolean;
		closeModal: () => void;
	}>();

	let dialog = $state<HTMLDivElement | undefined>(undefined);

	// Close modal on Escape key press
	function handleKeydown(e: KeyboardEvent): void {
		if (isOpen && e.key === 'Escape') closeModal();
	}

	function handleOutsideClick(e: MouseEvent): void {
		if (dialog && !dialog.contains(e.target as Node)) closeModal();
	}

	// Prevent scrolling when modal is open
	$effect(() => {
		if (isOpen) {
			document.body.style.overflow = 'hidden';
		} else {
			document.body.style.overflow = '';
		}
	});
</script>

<svelte:window onkeydown={handleKeydown} />

{#if isOpen}
	<div
		class="fixed inset-0 z-[100] flex h-screen w-screen items-center justify-center bg-black bg-opacity-50"
		onclick={handleOutsideClick}
		role="presentation"
	>
		<div
			class="mx-3 flex max-h-screen w-full max-w-2xl flex-col rounded-2xl bg-white p-4 shadow-lg"
			bind:this={dialog}
			role="dialog"
			aria-modal="true"
			tabindex="-1"
		>
			<div class="flex items-center justify-end">
				<button class=" text-gray-400 hover:text-gray-600" onclick={closeModal} aria-label="Close">
					<svg class="h-5 w-5" stroke="currentColor" viewBox="0 0 24 24">
						<path stroke-linecap="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
					</svg>
				</button>
			</div>
			<div class="mx-3 mb-2 flex-grow overflow-y-auto sm:mx-5 sm:mb-3">
				{@render children()}
			</div>
		</div>
	</div>
{/if}
