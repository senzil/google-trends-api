'use strict';

var mapToNumber = {
"ZA":"40",
"DE":"15",
"SA":"36",
"AR":"30",
"AU":"8",
"AT":"44",
"BE":"41",
"BR":"18",
"CA":"13",
"CL":"38",
"CO":"32",
"KR":"23",
"DK":"49",
"EG":"29",
"ES":"26",
"US":"1",
"FI":"50",
"FR":"16",
"GR":"48",
"HK":"10",
"HU":"45",
"IN":"3",
"ID":"19",
"IL":"6",
"IT":"27",
"JP":"4",
"KE":"37",
"MY":"34",
"MX":"21",
"NG":"52",
"NO":"51",
"NL":"17",
"NZ": "64",
"PH":"25",
"PL":"31",
"PT":"47",
"CZ":"43",
"RO":"39",
"GB":"9",
"RU":"14",
"SG":"5",
"SE":"42",
"CH":"46",
"TW":"12",
"TH":"33",
"TR":"24",
"UA":"35",
"VN":"28"};

var mapToAbbreviation = {
AFGHANISTAN: 'AF',
'ÅLAND ISLANDS': 'AX',
ALBANIA: 'AL',
ALGERIA: 'DZ',
'AMERICAN SAMOA': 'AS',
ANDORRA: 'AD',
ANGOLA: 'AO',
ANGUILLA: 'AI',
ANTARCTICA: 'AQ',
'ANTIGUA AND BARBUDA': 'AG',
ARGENTINA: 'AR',
ARMENIA: 'AM',
ARUBA: 'AW',
AUSTRALIA: 'AU',
AUSTRIA: 'AT',
AZERBAIJAN: 'AZ',
BAHAMAS: 'BS',
BAHRAIN: 'BH',
BANGLADESH: 'BD',
BARBADOS: 'BB',
BELARUS: 'BY',
BELGIUM: 'BE',
BELIZE: 'BZ',
BENIN: 'BJ',
BERMUDA: 'BM',
BHUTAN: 'BT',
BOLIVIA: 'BO',
'BOSNIA AND HERZEGOVINA': 'BA',
BOTSWANA: 'BW',
'BOUVET ISLAND': 'BV',
BRAZIL: 'BR',
'BRITISH INDIAN OCEAN TERRITORY': 'IO',
'BRUNEI DARUSSALAM': 'BN',
BULGARIA: 'BG',
'BURKINA FASO': 'BF',
BURUNDI: 'BI',
CAMBODIA: 'KH',
CAMEROON: 'CM',
CANADA: 'CA',
'CAPE VERDE': 'CV',
'CAYMAN ISLANDS': 'KY',
'CENTRAL AFRICAN REPUBLIC': 'CF',
CHAD: 'TD',
CHILE: 'CL',
CHINA: 'CN',
'CHRISTMAS ISLAND': 'CX',
'COCOS (KEELING) ISLANDS': 'CC',
COLOMBIA: 'CO',
COMOROS: 'KM',
CONGO: 'CG',
'CONGO, THE DEMOCRATIC REPUBLIC OF THE': 'CD',
'COOK ISLANDS': 'CK',
'COSTA RICA': 'CR',
'COTE D"IVOIRE': 'CI',
CROATIA: 'HR',
CUBA: 'CU',
CYPRUS: 'CY',
'CZECH REPUBLIC': 'CZ',
DENMARK: 'DK',
DJIBOUTI: 'DJ',
DOMINICA: 'DM',
'DOMINICAN REPUBLIC': 'DO',
ECUADOR: 'EC',
EGYPT: 'EG',
'EL SALVADOR': 'SV',
'EQUATORIAL GUINEA': 'GQ',
ERITREA: 'ER',
ESTONIA: 'EE',
ETHIOPIA: 'ET',
'FALKLAND ISLANDS (MALVINAS)': 'FK',
'FAROE ISLANDS': 'FO',
FIJI: 'FJ',
FINLAND: 'FI',
FRANCE: 'FR',
'FRENCH GUIANA': 'GF',
'FRENCH POLYNESIA': 'PF',
'FRENCH SOUTHERN TERRITORIES': 'TF',
GABON: 'GA',
GAMBIA: 'GM',
GEORGIA: 'GE',
GERMANY: 'DE',
GHANA: 'GH',
GIBRALTAR: 'GI',
GREECE: 'GR',
GREENLAND: 'GL',
GRENADA: 'GD',
GUADELOUPE: 'GP',
GUAM: 'GU',
GUATEMALA: 'GT',
GUERNSEY: 'GG',
GUINEA: 'GN',
'GUINEA-BISSAU': 'GW',
GUYANA: 'GY',
HAITI: 'HT',
'HEARD ISLAND AND MCDONALD ISLANDS': 'HM',
'HOLY SEE (VATICAN CITY STATE)': 'VA',
HONDURAS: 'HN',
'HONG KONG': 'HK',
HUNGARY: 'HU',
ICELAND: 'IS',
INDIA: 'IN',
INDONESIA: 'ID',
'IRAN, ISLAMIC REPUBLIC OF': 'IR',
IRAQ: 'IQ',
IRELAND: 'IE',
'ISLE OF MAN': 'IM',
ISRAEL: 'IL',
ITALY: 'IT',
JAMAICA: 'JM',
JAPAN: 'JP',
JERSEY: 'JE',
JORDAN: 'JO',
KAZAKHSTAN: 'KZ',
KENYA: 'KE',
KIRIBATI: 'KI',
'KOREA, DEMOCRATIC PEOPLE"S REPUBLIC OF': 'KP',
'KOREA, REPUBLIC OF': 'KR',
KUWAIT: 'KW',
KYRGYZSTAN: 'KG',
'LAO PEOPLE"S DEMOCRATIC REPUBLIC': 'LA',
LATVIA: 'LV',
LEBANON: 'LB',
LESOTHO: 'LS',
LIBERIA: 'LR',
'LIBYAN ARAB JAMAHIRIYA': 'LY',
LIECHTENSTEIN: 'LI',
LITHUANIA: 'LT',
LUXEMBOURG: 'LU',
MACAO: 'MO',
'MACEDONIA, THE FORMER YUGOSLAV REPUBLIC OF': 'MK',
MADAGASCAR: 'MG',
MALAWI: 'MW',
MALAYSIA: 'MY',
MALDIVES: 'MV',
MALI: 'ML',
MALTA: 'MT',
'MARSHALL ISLANDS': 'MH',
MARTINIQUE: 'MQ',
MAURITANIA: 'MR',
MAURITIUS: 'MU',
MAYOTTE: 'YT',
MEXICO: 'MX',
'MICRONESIA, FEDERATED STATES OF': 'FM',
'MOLDOVA, REPUBLIC OF': 'MD',
MONACO: 'MC',
MONGOLIA: 'MN',
MONTSERRAT: 'MS',
MOROCCO: 'MA',
MOZAMBIQUE: 'MZ',
MYANMAR: 'MM',
NAMIBIA: 'NA',
NAURU: 'NR',
NEPAL: 'NP',
NETHERLANDS: 'NL',
'NETHERLANDS ANTILLES': 'AN',
'NEW CALEDONIA': 'NC',
'NEW ZEALAND': 'NZ',
NICARAGUA: 'NI',
NIGER: 'NE',
NIGERIA: 'NG',
NIUE: 'NU',
'NORFOLK ISLAND': 'NF',
'NORTHERN MARIANA ISLANDS': 'MP',
NORWAY: 'NO',
OMAN: 'OM',
PAKISTAN: 'PK',
PALAU: 'PW',
'PALESTINIAN TERRITORY, OCCUPIED': 'PS',
PANAMA: 'PA',
'PAPUA NEW GUINEA': 'PG',
PARAGUAY: 'PY',
PERU: 'PE',
PHILIPPINES: 'PH',
PITCAIRN: 'PN',
POLAND: 'PL',
PORTUGAL: 'PT',
'PUERTO RICO': 'PR',
QATAR: 'QA',
REUNION: 'RE',
ROMANIA: 'RO',
'RUSSIAN FEDERATION': 'RU',
RWANDA: 'RW',
'SAINT HELENA': 'SH',
'SAINT KITTS AND NEVIS': 'KN',
'SAINT LUCIA': 'LC',
'SAINT PIERRE AND MIQUELON': 'PM',
'SAINT VINCENT AND THE GRENADINES': 'VC',
SAMOA: 'WS',
'SAN MARINO': 'SM',
'SAO TOME AND PRINCIPE': 'ST',
'SAUDI ARABIA': 'SA',
SENEGAL: 'SN',
'SERBIA AND MONTENEGRO': 'CS',
SEYCHELLES: 'SC',
'SIERRA LEONE': 'SL',
SINGAPORE: 'SG',
SLOVAKIA: 'SK',
SLOVENIA: 'SI',
'SOLOMON ISLANDS': 'SB',
SOMALIA: 'SO',
'SOUTH AFRICA': 'ZA',
'SOUTH GEORGIA AND THE SOUTH SANDWICH ISLANDS': 'GS',
SPAIN: 'ES',
'SRI LANKA': 'LK',
SUDAN: 'SD',
SURINAME: 'SR',
'SVALBARD AND JAN MAYEN': 'SJ',
SWAZILAND: 'SZ',
SWEDEN: 'SE',
SWITZERLAND: 'CH',
'SYRIAN ARAB REPUBLIC': 'SY',
'TAIWAN, PROVINCE OF CHINA': 'TW',
TAJIKISTAN: 'TJ',
'TANZANIA, UNITED REPUBLIC OF': 'TZ',
THAILAND: 'TH',
'TIMOR-LESTE': 'TL',
TOGO: 'TG',
TOKELAU: 'TK',
TONGA: 'TO',
'TRINIDAD AND TOBAGO': 'TT',
TUNISIA: 'TN',
TURKEY: 'TR',
TURKMENISTAN: 'TM',
'TURKS AND CAICOS ISLANDS': 'TC',
TUVALU: 'TV',
UGANDA: 'UG',
UKRAINE: 'UA',
'UNITED ARAB EMIRATES': 'AE',
'UNITED KINGDOM': 'GB',
'UNITED STATES': 'US',
'UNITED STATES MINOR OUTLYING ISLANDS': 'UM',
URUGUAY: 'UY',
UZBEKISTAN: 'UZ',
VANUATU: 'VU',
VENEZUELA: 'VE',
'VIET NAM': 'VN',
'VIRGIN ISLANDS, BRITISH': 'VG',
'VIRGIN ISLANDS, U.S.': 'VI',
'WALLIS AND FUTUNA': 'WF',
'WESTERN SAHARA': 'EH',
YEMEN: 'YE',
ZAMBIA: 'ZM',
ZIMBABWE: 'ZW'};

var mapToDomain = { COM: 'google.com',
AC: 'google.ac',
AD: 'google.ad',
AE: 'google.ae',
AF: 'google.com.af',
AG: 'google.com.ag',
AI: 'google.com.ai',
AL: 'google.al',
AM: 'google.am',
AO: 'google.co.ao',
AR: 'google.com.ar',
AS: 'google.as',
AT: 'google.at',
AU: 'google.com.au',
AZ: 'google.az',
BA: 'google.ba',
BD: 'google.com.bd',
BE: 'google.be',
BF: 'google.bf',
BG: 'google.bg',
BH: 'google.com.bh',
BI: 'google.bi',
BJ: 'google.bj',
BN: 'google.com.bn',
BO: 'google.com.bo',
BR: 'google.com.br',
BS: 'google.bs',
BT: 'google.bt',
BW: 'google.co.bw',
BY: 'google.by',
BZ: 'google.com.bz',
CA: 'google.ca',
KH: 'google.com.kh',
CC: 'google.cc',
CD: 'google.cd',
CF: 'google.cf',
CAT: 'google.cat',
CG: 'google.cg',
CH: 'google.ch',
CI: 'google.ci',
CK: 'google.co.ck',
CL: 'google.cl',
CM: 'google.cm',
CN: 'google.cn',
CO: 'google.com.co',
CR: 'google.co.cr',
CU: 'google.com.cu',
CV: 'google.cv',
CY: 'google.com.cy',
CZ: 'google.cz',
DE: 'google.de',
DJ: 'google.dj',
DK: 'google.dk',
DM: 'google.dm',
DO: 'google.com.do',
DZ: 'google.dz',
EC: 'google.com.ec',
EE: 'google.ee',
EG: 'google.com.eg',
ES: 'google.es',
ET: 'google.com.et',
FI: 'google.fi',
FJ: 'google.com.fj',
FM: 'google.fm',
FR: 'google.fr',
GA: 'google.ga',
GE: 'google.ge',
GF: 'google.gf',
GG: 'google.gg',
GH: 'google.com.gh',
GI: 'google.com.gi',
GL: 'google.gl',
GM: 'google.gm',
GP: 'google.gp',
GR: 'google.gr',
GT: 'google.com.gt',
GY: 'google.gy',
HK: 'google.com.hk',
HN: 'google.hn',
HR: 'google.hr',
HT: 'google.ht',
HU: 'google.hu',
ID: 'google.co.id',
IR: 'google.ir',
IQ: 'google.iq',
IE: 'google.ie',
IL: 'google.co.il',
IM: 'google.im',
IN: 'google.co.in',
IO: 'google.io',
IS: 'google.is',
IT: 'google.it',
JE: 'google.je',
JM: 'google.com.jm',
JO: 'google.jo',
JP: 'google.co.jp',
KE: 'google.co.ke',
KI: 'google.ki',
KG: 'google.kg',
KR: 'google.co.kr',
KW: 'google.com.kw',
KZ: 'google.kz',
LA: 'google.la',
LB: 'google.com.lb',
LC: 'google.com.lc',
LI: 'google.li',
LK: 'google.lk',
LS: 'google.co.ls',
LT: 'google.lt',
LU: 'google.lu',
LV: 'google.lv',
LY: 'google.com.ly',
MA: 'google.co.ma',
MD: 'google.md',
ME: 'google.me',
MG: 'google.mg',
MK: 'google.mk',
ML: 'google.ml',
MM: 'google.com.mm',
MN: 'google.mn',
MS: 'google.ms',
MT: 'google.com.mt',
MU: 'google.mu',
MV: 'google.mv',
MW: 'google.mw',
MX: 'google.com.mx',
MY: 'google.com.my',
MZ: 'google.co.mz',
NA: 'google.com.na',
NE: 'google.ne',
NF: 'google.com.nf',
NG: 'google.com.ng',
NI: 'google.com.ni',
NL: 'google.nl',
NO: 'google.no',
NP: 'google.com.np',
NR: 'google.nr',
NU: 'google.nu',
NZ: 'google.co.nz',
OM: 'google.com.om',
PA: 'google.com.pa',
PE: 'google.com.pe',
PH: 'google.com.ph',
PK: 'google.com.pk',
PL: 'google.pl',
PG: 'google.com.pg',
PN: 'google.pn',
PR: 'google.com.pr',
PS: 'google.ps',
PT: 'google.pt',
PY: 'google.com.py',
QA: 'google.com.qa',
RO: 'google.ro',
RS: 'google.rs',
RU: 'google.ru',
RW: 'google.rw',
SA: 'google.com.sa',
SB: 'google.com.sb',
SC: 'google.sc',
SE: 'google.se',
SG: 'google.com.sg',
SH: 'google.sh',
SI: 'google.si',
SK: 'google.sk',
SL: 'google.com.sl',
SN: 'google.sn',
SM: 'google.sm',
SO: 'google.so',
ST: 'google.st',
SV: 'google.com.sv',
TD: 'google.td',
TG: 'google.tg',
TH: 'google.co.th',
TJ: 'google.com.tj',
TK: 'google.tk',
TL: 'google.tl',
TM: 'google.tm',
TO: 'google.to',
TN: 'google.tn',
TR: 'google.com.tr',
TT: 'google.tt',
TW: 'google.com.tw',
TZ: 'google.co.tz',
UA: 'google.com.ua',
UG: 'google.co.ug',
UK: 'google.co.uk',
US: 'google.us',
UY: 'google.com.uy',
UZ: 'google.co.uz',
VC: 'google.com.vc',
VE: 'google.co.ve',
VG: 'google.vg',
VI: 'google.co.vi',
VN: 'google.com.vn',
VU: 'google.vu',
WS: 'google.ws',
ZA: 'google.co.za',
ZM: 'google.co.zm',
ZW: 'google.co.zw' };


function getCountryCode (country) {
	return mapToNumber[country] || mapToNumber[getCountryAbbreviation(country)] || mapToNumber['US'];
}

function getCountryAbbreviation(country){
	return mapToAbbreviation[country.toUpperCase()];
}

function getCountryDomain(country){
	return mapToDomain[country] || mapToDomain[getCountryAbbreviation(country)] || mapToDomain['COM'];
}

module.exports = {
	getCode: getCountryCode,
	getAbbreviation: getCountryAbbreviation,
	getDomain: getCountryDomain
};