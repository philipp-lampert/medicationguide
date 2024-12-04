const acetaminophenTimezones = [
	// United States (US)
	'America/New_York',
	'America/Chicago',
	'America/Denver',
	'America/Boise',
	'America/Detroit',
	'America/Los_Angeles',
	'America/Phoenix',
	'America/Anchorage',
	'America/Adak',
	'America/Indiana/Knox',
	'America/Indiana/Marengo',
	'America/Indiana/Petersburg',
	'America/Indiana/Tell_City',
	'America/Indiana/Vevay',
	'America/Indiana/Wincennes',
	'America/Indiana/Winamac',
	'America/Indianapolis',
	'Pacific/Honolulu',
	'America/Juneau',
	'America/Kentucky/Monticello',
	'America/Louisville',
	'America/Menominee',
	'America/Metlakatla',
	'America/Nome',
	'America/North_Dakota/Beulah',
	'America/North_Dakota/Center',
	'America/North_Dakota/New_Salem',
	'America/Puerto_Rico',
	'America/Sitka',
	'America/Yakutat',
	// Canada (CA)
	'America/Toronto',
	'America/Camebdridge_Bay',
	'America/Coral_Harbour',
	'America/Creston',
	'America/Dawson',
	'America/Dawson_Creek',
	'America/Vancouver',
	'America/Montreal',
	'America/Edmonton',
	'America/Rankin_Inlet',
	'America/Resolute',
	'America/Inuvik',
	'America/Fort_Nelson',
	'America/Winnipeg',
	'America/Regina',
	'America/Moncton',
	'America/Halifax',
	'America/St_Johns',
	'America/Whitehorse',
	'America/Iqaluit',
	'America/Glace_Bay',
	'America/Goose_Bay',
	'America/Swift_Current',
	'America/Whitehorse',
	// Japan (JP)
	'Asia/Tokyo',
	// South Korea (KR)
	'Asia/Seoul',
	// Taiwan (TW)
	'Asia/Taipei'
];

const timezone = Intl.DateTimeFormat().resolvedOptions().timeZone;

export const paracetamolAcetaminophen = (): string => {
	return acetaminophenTimezones.includes(timezone) ? 'Acetaminophen' : 'Paracetamol';
};
