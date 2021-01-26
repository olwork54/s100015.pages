let mapSettings = {
    isoCountries: {
        'AF': 'Afghanistan',
        'AX': 'Aland Islands',
        'AL': 'Albania',
        'DZ': 'Algeria',
        'AS': 'American Samoa',
        'AD': 'Andorra',
        'AO': 'Angola',
        'AI': 'Anguilla',
        'AQ': 'Antarctica',
        'AG': 'Antigua And Barbuda',
        'AR': 'Argentina',
        'AM': 'Armenia',
        'AW': 'Aruba',
        'AU': 'Australia',
        'AT': 'Austria',
        'AZ': 'Azerbaijan',
        'BS': 'Bahamas',
        'BH': 'Bahrain',
        'BD': 'Bangladesh',
        'BB': 'Barbados',
        'BY': 'Belarus',
        'BE': 'Belgium',
        'BZ': 'Belize',
        'BJ': 'Benin',
        'BM': 'Bermuda',
        'BT': 'Bhutan',
        'BO': 'Bolivia',
        'BA': 'Bosnia And Herzegovina',
        'BW': 'Botswana',
        'BV': 'Bouvet Island',
        'BR': 'Brazil',
        'IO': 'British Indian Ocean Territory',
        'BN': 'Brunei Darussalam',
        'BG': 'Bulgaria',
        'BF': 'Burkina Faso',
        'BI': 'Burundi',
        'KH': 'Cambodia',
        'CM': 'Cameroon',
        'CA': 'Canada',
        'CV': 'Cape Verde',
        'KY': 'Cayman Islands',
        'CF': 'Central African Republic',
        'TD': 'Chad',
        'CL': 'Chile',
        'CN': 'China',
        'CX': 'Christmas Island',
        'CC': 'Cocos (Keeling) Islands',
        'CO': 'Colombia',
        'KM': 'Comoros',
        'CG': 'Congo',
        'CD': 'Congo, Democratic Republic',
        'CK': 'Cook Islands',
        'CR': 'Costa Rica',
        'CI': 'Cote D\'Ivoire',
        'HR': 'Croatia',
        'CU': 'Cuba',
        'CY': 'Cyprus',
        'CZ': 'Czech Republic',
        'DK': 'Denmark',
        'DJ': 'Djibouti',
        'DM': 'Dominica',
        'DO': 'Dominican Republic',
        'EC': 'Ecuador',
        'EG': 'Egypt',
        'SV': 'El Salvador',
        'GQ': 'Equatorial Guinea',
        'ER': 'Eritrea',
        'EE': 'Estonia',
        'ET': 'Ethiopia',
        'FK': 'Falkland Islands (Malvinas)',
        'FO': 'Faroe Islands',
        'FJ': 'Fiji',
        'FI': 'Finland',
        'FR': 'France',
        'GF': 'French Guiana',
        'PF': 'French Polynesia',
        'TF': 'French Southern Territories',
        'GA': 'Gabon',
        'GM': 'Gambia',
        'GE': 'Georgia',
        'DE': 'Germany',
        'GH': 'Ghana',
        'GI': 'Gibraltar',
        'GR': 'Greece',
        'GL': 'Greenland',
        'GD': 'Grenada',
        'GP': 'Guadeloupe',
        'GU': 'Guam',
        'GT': 'Guatemala',
        'GG': 'Guernsey',
        'GN': 'Guinea',
        'GW': 'Guinea-Bissau',
        'GY': 'Guyana',
        'HT': 'Haiti',
        'HM': 'Heard Island & Mcdonald Islands',
        'VA': 'Holy See (Vatican City State)',
        'HN': 'Honduras',
        'HK': 'Hong Kong',
        'HU': 'Hungary',
        'IS': 'Iceland',
        'IN': 'India',
        'ID': 'Indonesia',
        'IR': 'Iran, Islamic Republic Of',
        'IQ': 'Iraq',
        'IE': 'Ireland',
        'IM': 'Isle Of Man',
        'IL': 'Israel',
        'IT': 'Italy',
        'JM': 'Jamaica',
        'JP': 'Japan',
        'JE': 'Jersey',
        'JO': 'Jordan',
        'KZ': 'Kazakhstan',
        'KE': 'Kenya',
        'KI': 'Kiribati',
        'KR': 'Korea',
        'KW': 'Kuwait',
        'KG': 'Kyrgyzstan',
        'LA': 'Lao People\'s Democratic Republic',
        'LV': 'Latvia',
        'LB': 'Lebanon',
        'LS': 'Lesotho',
        'LR': 'Liberia',
        'LY': 'Libyan Arab Jamahiriya',
        'LI': 'Liechtenstein',
        'LT': 'Lithuania',
        'LU': 'Luxembourg',
        'MO': 'Macao',
        'MK': 'Macedonia',
        'MG': 'Madagascar',
        'MW': 'Malawi',
        'MY': 'Malaysia',
        'MV': 'Maldives',
        'ML': 'Mali',
        'MT': 'Malta',
        'MH': 'Marshall Islands',
        'MQ': 'Martinique',
        'MR': 'Mauritania',
        'MU': 'Mauritius',
        'YT': 'Mayotte',
        'MX': 'Mexico',
        'FM': 'Micronesia, Federated States Of',
        'MD': 'Moldova',
        'MC': 'Monaco',
        'MN': 'Mongolia',
        'ME': 'Montenegro',
        'MS': 'Montserrat',
        'MA': 'Morocco',
        'MZ': 'Mozambique',
        'MM': 'Myanmar',
        'NA': 'Namibia',
        'NR': 'Nauru',
        'NP': 'Nepal',
        'NL': 'Netherlands',
        'AN': 'Netherlands Antilles',
        'NC': 'New Caledonia',
        'NZ': 'New Zealand',
        'NI': 'Nicaragua',
        'NE': 'Niger',
        'NG': 'Nigeria',
        'NU': 'Niue',
        'NF': 'Norfolk Island',
        'MP': 'Northern Mariana Islands',
        'NO': 'Norway',
        'OM': 'Oman',
        'PK': 'Pakistan',
        'PW': 'Palau',
        'PS': 'Palestinian Territory, Occupied',
        'PA': 'Panama',
        'PG': 'Papua New Guinea',
        'PY': 'Paraguay',
        'PE': 'Peru',
        'PH': 'Philippines',
        'PN': 'Pitcairn',
        'PL': 'Poland',
        'PT': 'Portugal',
        'PR': 'Puerto Rico',
        'QA': 'Qatar',
        'RE': 'Reunion',
        'RO': 'Romania',
        'RU': 'Russian Federation',
        'RW': 'Rwanda',
        'BL': 'Saint Barthelemy',
        'SH': 'Saint Helena',
        'KN': 'Saint Kitts And Nevis',
        'LC': 'Saint Lucia',
        'MF': 'Saint Martin',
        'PM': 'Saint Pierre And Miquelon',
        'VC': 'Saint Vincent And Grenadines',
        'WS': 'Samoa',
        'SM': 'San Marino',
        'ST': 'Sao Tome And Principe',
        'SA': 'Saudi Arabia',
        'SN': 'Senegal',
        'RS': 'Serbia',
        'SC': 'Seychelles',
        'SL': 'Sierra Leone',
        'SG': 'Singapore',
        'SK': 'Slovakia',
        'SI': 'Slovenia',
        'SB': 'Solomon Islands',
        'SO': 'Somalia',
        'ZA': 'South Africa',
        'GS': 'South Georgia And Sandwich Isl.',
        'ES': 'Spain',
        'LK': 'Sri Lanka',
        'SD': 'Sudan',
        'SR': 'Suriname',
        'SJ': 'Svalbard And Jan Mayen',
        'SZ': 'Swaziland',
        'SE': 'Sweden',
        'CH': 'Switzerland',
        'SY': 'Syrian Arab Republic',
        'TW': 'Taiwan',
        'TJ': 'Tajikistan',
        'TZ': 'Tanzania',
        'TH': 'Thailand',
        'TL': 'Timor-Leste',
        'TG': 'Togo',
        'TK': 'Tokelau',
        'TO': 'Tonga',
        'TT': 'Trinidad And Tobago',
        'TN': 'Tunisia',
        'TR': 'Turkey',
        'TM': 'Turkmenistan',
        'TC': 'Turks And Caicos Islands',
        'TV': 'Tuvalu',
        'UG': 'Uganda',
        'UA': 'Ukraine',
        'AE': 'United Arab Emirates',
        'GB': 'United Kingdom',
        'US': 'United States',
        'UM': 'United States Outlying Islands',
        'UY': 'Uruguay',
        'UZ': 'Uzbekistan',
        'VU': 'Vanuatu',
        'VE': 'Venezuela',
        'VN': 'Viet Nam',
        'VG': 'Virgin Islands, British',
        'VI': 'Virgin Islands, U.S.',
        'WF': 'Wallis And Futuna',
        'EH': 'Western Sahara',
        'YE': 'Yemen',
        'ZM': 'Zambia',
        'ZW': 'Zimbabwe'
    },
    getCountryName(countryCode) {
        if (this.isoCountries.hasOwnProperty(countryCode)) {
            return this.isoCountries[countryCode];
        } else {
            return countryCode;
        }
    },
    countryClick(countryISO) {
        console.log(countryISO);
        console.log(this.getCountryName(countryISO));
        return;
    },
    getOffersByISO(countryISO) {
        switch (countryISO) {
            case 'US': return 'Keto SS/Trial,CBD SS/Trial,Prime TRT,Granite,Brain,DermaCorrcet - Skin,Flow Fusion,CBD Gummies';
            case 'CA': return 'Gowild, Two-Up,Casino-X,Woo Casino,VulkanVegas,Keto SS/Trial,CBD SS/Trial';
            case 'BR': return 'Keto SS/Trial';
            case 'AU': return 'Golden Lion,Moons Casino,7bit Casio,RichCasino,Pokiez,Bananas go Bahamas,Keto SS/Trial,CBD SS/Trial';
            case 'ES': return 'Premium Collagen 5000,VigraFast,PeniSize XL,MostBet,Keto SS/Trial';
            case 'FR': return 'Keto SS/Trial,Unique Casino,Viga+,Brilliance new,DermaCorrcet - Skin,CBD';
            case 'IT': return 'Premium Collagen 5000,Keto SS/Trial,Unique Casino';
            case 'DE': return 'VigraFast,Veona,Premium Collagen 5000,PeniSize XL,Keto SS/Trial,CBD oil,Cosmo Casino';
            case 'FI': return 'Casino-X,Winorama,Keto SS/Trial';
            case 'RU': return 'Vulkan';
            case 'NZ': return 'Moons Casino,VulkanVegas,Bananas go Bahamas,Keto SS/Trial,CBD';
            case 'UK': return 'Keto SS/Trial,VigraFast,CBD';
            case 'ZA': return 'Keto SS/Trial';
            case 'UA': return 'Vulkan777,Joker Casino,GGBet';
            case 'TR': return 'MostBet,BetTilt';
            case 'PT': return 'Winspark';
            case 'CZ': return 'CasinoChan';
            case 'AZ': return 'MostBet';
            case 'CN': return 'Poker.AI';

            case 'MX': return 'CBD SS/Trial,Keto SS/Trial';
            case 'AR': return 'CBD SS/Trial,Keto SS/Trial';
            case 'CO': return 'CBD SS/Trial,Keto SS/Trial';
            case 'CL': return 'CBD SS/Trial,Keto SS/Trial';
            case 'PE': return 'CBD SS/Trial,Keto SS/Trial';
            case 'EC': return 'CBD SS/Trial,Keto SS/Trial';
            case 'VE': return 'CBD SS/Trial,Keto SS/Trial';
            case 'DO': return 'CBD SS/Trial,Keto SS/Trial';
            case 'GT': return 'CBD SS/Trial,Keto SS/Trial';
            case 'PA': return 'CBD SS/Trial,Keto SS/Trial';
            case 'CR': return 'CBD SS/Trial,Keto SS/Trial';
            case 'UY': return 'CBD SS/Trial,Keto SS/Trial';
            case 'BO': return 'CBD SS/Trial,Keto SS/Trial';
            case 'PY': return 'CBD SS/Trial,Keto SS/Trial';
            case 'SV': return 'CBD SS/Trial,Keto SS/Trial';
            case 'HN': return 'CBD SS/Trial,Keto SS/Trial';
            case 'TT': return 'CBD SS/Trial,Keto SS/Trial';
            case 'JM': return 'CBD SS/Trial,Keto SS/Trial';
            case 'BS': return 'CBD SS/Trial,Keto SS/Trial';
            case 'NI': return 'CBD SS/Trial,Keto SS/Trial';
            case 'HT': return 'CBD SS/Trial,Keto SS/Trial';
            case 'BB': return 'CBD SS/Trial,Keto SS/Trial';
            case 'SR': return 'CBD SS/Trial,Keto SS/Trial';
            case 'GY': return 'CBD SS/Trial,Keto SS/Trial';
            case 'BZ': return 'CBD SS/Trial,Keto SS/Trial';
            case 'LC': return 'CBD SS/Trial,Keto SS/Trial';
            case 'AG': return 'CBD SS/Trial,Keto SS/Trial';
            case 'GD': return 'CBD SS/Trial,Keto SS/Trial';
            case 'KN': return 'CBD SS/Trial,Keto SS/Trial';
            case 'VC': return 'CBD SS/Trial,Keto SS/Trial';
            case 'DM': return 'CBD SS/Trial,Keto SS/Trial';
            case 'GF': return 'CBD SS/Trial,Keto SS/Trial';
            case 'FK': return 'CBD SS/Trial,Keto SS/Trial';
            case 'CU': return 'CBD SS/Trial,Keto SS/Trial';
    
            default:
                return false;
        }
    },
    countryHover(countryISO) {
        if (!this.getOffersByISO(countryISO)) return;
        let offersArr = this.getOffersByISO(countryISO).replaceAll(',', '<br>');
            mapBlock = document.getElementById('map-block'),
            historyBlock = '',
            historyTitle = '',
            historyContent = '';
        if (!document.getElementById('map-history')) {
            historyBlock = document.createElement('div');
            historyTitle = document.createElement('h3');
            historyContent = document.createElement('p');
            historyBlock.id = 'map-history';
            historyTitle.id = 'history-title';
            historyContent.id = 'history-content';
        } else {
            historyBlock = document.getElementById('map-history');
            historyTitle = document.getElementById('history-title');
            historyContent = document.getElementById('history-content');
        }
        historyTitle.innerHTML = 'Country: ' + this.getCountryName(countryISO);
        historyContent.innerHTML = offersArr;
        historyBlock.appendChild(historyTitle);
        historyBlock.appendChild(historyContent);
        mapBlock.appendChild(historyBlock);
    }
}

jQuery(document).ready(function () {
    jQuery('#map-block').SVGWorldMap({
        bottom: 20, /* Bottom padding (removes antarctica from map) */
        clickhandler: 'mapSettings.countryClick', /* Click handler function name */
        overhandler: 'mapSettings.countryHover', /* Click handler function name */
        c: { US: 1, CA: 1, BR: 1, AU: 1, ES: 1, FR: 1, IT: 1, DE: 1, FI: 1, RU: 1, NZ: 1, UK: 1, ZA: 1,
            UA: 1, TR: 1, PT: 1, CZ: 1, AZ: 1, CN: 1, MX: 1, AR: 1, CO: 1, CL: 1, PE: 1, EC: 1, VE: 1, 
            DO: 1, GT: 1, PA: 1, CR: 1, UY: 1, BO: 1, PY: 1, SV: 1, HN: 1, TT: 1, JM: 1, BS: 1, NI: 1, 
            HT: 1, BB: 1, SR: 1, GY: 1, BZ: 1, LC: 1, AG: 1, GD: 1, KN: 1, VC: 1, DM: 1, GF: 1, FK: 1, CU: 1,  } /* Country classes */
    });
});


