<script>
	/** @type {{ [key: number]: string }} */
	const statusNames = {
		2: 'None',
		1: 'Relative',
		0: 'Absolute'
	};

	const contraindications = [
		{
			condition: 'Children < 15 years',
			drugs: [
				{ drug: 'acetaminophen', status: 2 },
				{ drug: 'ibuprofen', status: 2 },
				{ drug: 'naproxen', status: 1 },
				{ drug: 'aspirin', status: 0 }
			]
		},
		{
			condition: 'Pregnancy > 6 months',
			drugs: [
				{ drug: 'acetaminophen', status: 2 },
				{ drug: 'ibuprofen', status: 0 },
				{ drug: 'naproxen', status: 0 },
				{ drug: 'aspirin', status: 0 }
			]
		},
		{
			condition: 'Reflux/Stomach ulcera',
			drugs: [
				{ drug: 'acetaminophen', status: 2 },
				{ drug: 'ibuprofen', status: 1 },
				{ drug: 'naproxen', status: 1 },
				{ drug: 'aspirin', status: 1 }
			]
		},
		{
			condition: 'Kidney disease',
			drugs: [
				{ drug: 'acetaminophen', status: 2 },
				{ drug: 'ibuprofen', status: 1 },
				{ drug: 'naproxen', status: 1 },
				{ drug: 'aspirin', status: 1 }
			]
		},
		{
			condition: 'Heart failure',
			drugs: [
				{ drug: 'acetaminophen', status: 2 },
				{ drug: 'ibuprofen', status: 0 },
				{ drug: 'naproxen', status: 0 },
				{ drug: 'aspirin', status: 1 }
			]
		},
		{
			condition: 'Liver disease',
			drugs: [
				{ drug: 'acetaminophen', status: 1 },
				{ drug: 'ibuprofen', status: 1 },
				{ drug: 'naproxen', status: 1 },
				{ drug: 'aspirin', status: 1 }
			]
		}
	];

	/** @type {{ [key: number]: string }} */
	const statusColors = {
		2: 'bg-green-100 text-green-800',
		1: 'bg-yellow-100 text-yellow-800',
		0: 'bg-red-100 text-red-800'
	};
</script>

<table class="w-3/4 table-fixed border-collapse overflow-hidden rounded-lg bg-white">
	<thead>
		<tr class="bg-gray-100">
			<th class="w-1/4"></th>
			<th class="px-4 py-3 font-medium">Acetaminophen</th>
			<th class="px-4 py-3 font-medium">Ibuprofen</th>
			<th class="px-4 py-3 font-medium">Naproxen</th>
			<th class="px-4 py-3 font-medium">Aspirin</th>
		</tr>
	</thead>
	<tbody>
		{#each contraindications as row, i}
			<tr class="{i % 2 === 0 ? 'bg-white' : 'bg-gray-50'} transition-colors hover:bg-gray-100">
				<td class="px-4 py-3 text-left">{row.condition}</td>
				{#each row.drugs as drugStatus}
					<td class="px-4 py-3">
						<span
							class="rounded-md px-2 pb-1 pt-1.5 text-sm font-medium {statusColors[
								drugStatus.status
							]}"
						>
							{statusNames[drugStatus.status]}
						</span>
					</td>
				{/each}
			</tr>
		{/each}
	</tbody>
</table>
