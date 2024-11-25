<script>
	const reasons = [
		{
			symptom: 'Persistent pain',
			reason: 'May signal an underlying condition that requires further evaluation or treatment'
		},
		{
			symptom: 'Severe pain',
			reason: 'Can indicate a serious issue, such as nerve damage, infection, or organ dysfunction'
		},
		{
			symptom: 'Chest pain',
			reason: 'Can be life-threatening and may indicate a heart attack'
		},
		{
			symptom: 'Abdominal pain',
			reason: 'Could suggest appendicitis, gallstones, or other gastrointestinal problems'
		},
		{
			symptom: 'Pain after injury',
			reason:
				'Might indicate fractures, ligament tears, or internal damage that requires immediate care'
		}
	];
</script>

<table
	class="w-3/4 border-collapse overflow-hidden rounded-lg border border-black bg-white text-left"
>
	<tbody>
		{#each reasons as row, i}
			<tr class="{i % 2 === 0 ? 'bg-gray-50' : 'bg-white'} transition-colors hover:bg-gray-100">
				<td class="px-4 py-3 font-medium">{row.symptom}</td>
				<td class="px-4 py-3">
					<span class="rounded-md px-2 py-1">
						{row.reason}
					</span>
				</td>
			</tr>
		{/each}
	</tbody>
</table>
