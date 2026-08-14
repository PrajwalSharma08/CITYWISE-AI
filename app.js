// ============================================================
// CITYWISE AI — Full Stack Application Logic (Official Map, Live Schemes & National Citizen Services Hub)
// ============================================================

// NATIONAL CITIZEN SERVICES DATABASE (LIC, VOTER ID, BANKING, EPFO, PARIVAHAN, AADHAAR)
const CITIZEN_SERVICES_DB = [
    {
        id: 'voter-epic',
        name: 'Voter ID E-EPIC & NVSP Portal',
        dept: 'भारत निर्वाचन आयोग (Election Commission of India)',
        cat: 'VOTER',
        icon: '🗳️',
        bg: 'rgba(99, 102, 241, 0.15)',
        color: '#6366f1',
        desc: 'नया वोटर ID कार्ड बनवाएं, डिजिटल e-EPIC डाउनलोड करें, पता/नाम सुधारें एवं वोटर लिस्ट में नाम खोजें।',
        tags: ['E-EPIC Card', 'नया रजिस्ट्रेशन', 'वोटर लिस्ट', 'फॉर्म 6/8'],
        link: 'https://voters.eci.gov.in'
    },
    {
        id: 'lic-premium',
        name: 'LIC पॉलिसी प्रीमियम एवं स्टेटस पोर्टल',
        dept: 'भारतीय जीवन बीमा निगम (Life Insurance Corporation of India)',
        cat: 'LIC',
        icon: '🛡️',
        bg: 'rgba(16, 185, 129, 0.15)',
        color: '#10b981',
        desc: 'ऑनलाइन LIC पॉलिसी प्रीमियम जमा करें, पॉलिसी मैच्योरिटी एवं बोनस स्टेटस जांचें, क्लेम गाइड डाउनलोड करें।',
        tags: ['प्रीमियम भुगतान', 'पॉलिसी स्टेटस', 'बोनस ट्रैकर', 'CLAIM'],
        link: 'https://licindia.in'
    },
    {
        id: 'pm-jjby',
        name: 'PM जीवन ज्योति बीमा योजना (PMJJBY & PMSBY)',
        dept: 'वित्तीय सेवाएं विभाग / LIC & Banks',
        cat: 'LIC',
        icon: '🏥',
        bg: 'rgba(245, 158, 11, 0.15)',
        color: '#f59e0b',
        desc: 'मात्र ₹436/वर्ष में ₹2 लाख का जीवन बीमा एवं ₹20/वर्ष में दुर्घटना बीमा। सभी बैंक खातों पर उपलब्ध।',
        tags: ['₹2 लाख कवर', '₹436 वार्षिक', 'ऑटो-डेबिट', 'Jan Dhan'],
        link: 'https://www.jansuraksha.gov.in'
    },
    {
        id: 'pmjdy-bank',
        name: 'PM जन धन योजना & सरकारी बैंक खाता (Zero Balance)',
        dept: 'वित्तीय समावेशन प्रभाग / Public Sector Banks (SBI, PNB, BOB)',
        cat: 'BANK',
        icon: '🏦',
        bg: 'rgba(56, 189, 248, 0.15)',
        color: '#38bdf8',
        desc: 'बिना किसी न्यूनतम राशि के ज़ीरो बैलेंस सरकारी बैंक खाता खोलें, ₹10,000 ओवरड्राफ्ट सुविधा एवं रुपे कार्ड प्राप्त करें।',
        tags: ['Zero Balance', 'RuPay Card', 'DBT Direct', 'Bank Mitra'],
        link: 'https://pmjdy.gov.in'
    },
    {
        id: 'aadhaar-uidai',
        name: 'Aadhaar Services & Mobile/PAN Link',
        dept: 'भारतीय विशिष्ट पहचान प्राधिकरण (UIDAI)',
        cat: 'VOTER',
        icon: '🆔',
        bg: 'rgba(236, 72, 153, 0.15)',
        color: '#ec4899',
        desc: 'e-Aadhaar कार्ड डाउनलोड करें, PAN-Aadhaar लिंक स्टेटस जांचें, मोबाइल नंबर अपडेट एवं निकटतम आधार केंद्र ढूंढें।',
        tags: ['e-Aadhaar PDF', 'PAN Link Status', 'मोबाइल अपडेट', 'Seva Kendra'],
        link: 'https://myaadhaar.uidai.gov.in'
    },
    {
        id: 'epfo-passbook',
        name: 'EPFO UAN मेंबर पासबुक & PF क्लेम',
        dept: 'कर्मचारी भविष्य निधि संगठन (Employees Provident Fund Organisation)',
        cat: 'BANK',
        icon: '💼',
        bg: 'rgba(139, 92, 246, 0.15)',
        color: '#8b5cf6',
        desc: 'अपना UAN नंबर एक्टिवेट करें, ऑनलाइन PF पासबुक देखें, एडवांस क्लेम ट्रान्सफर एवं पेंशन स्टेटस चेक करें।',
        tags: ['UAN Passbook', 'PF Balance', 'ऑनलाइन एडवांस', 'Pension Status'],
        link: 'https://www.epfindia.gov.in'
    },
    {
        id: 'parivahan-dl',
        name: 'ड्राइविंग लाइसेंस, RC & e-Challan (Parivahan)',
        dept: 'सड़क परिवहन एवं राजमार्ग मंत्रालय (MoRTH)',
        cat: 'CIVIC',
        icon: '🚗',
        bg: 'rgba(14, 165, 233, 0.15)',
        color: '#0ea5e9',
        desc: 'ड्राइविंग लाइसेंस का ऑनलाइन नवीनीकरण (Renewal), RC वाहन विवरण, फैंसी नंबर स्लॉट एवं e-Challan भुगतान।',
        tags: ['DL Renewal', 'RC Verification', 'e-Challan Pay', 'Sarthi'],
        link: 'https://parivahan.gov.in'
    },
    {
        id: 'passport-seva',
        name: 'पासपोर्ट सेवा केंद्र (Passport Seva Kendra)',
        dept: 'विदेश मंत्रालय (Ministry of External Affairs)',
        cat: 'CIVIC',
        icon: '✈️',
        bg: 'rgba(99, 102, 241, 0.15)',
        color: '#6366f1',
        desc: 'नए पासपोर्ट एवं तत्काल पासपोर्ट के लिए आवेदन करें, अपॉइंटमेंट स्लॉट बुक करें एवं स्टेटस ट्रैक करें।',
        tags: ['नया पासपोर्ट', 'तत्काल सेवा', 'स्लॉट बुकिंग', 'Status Track'],
        link: 'https://passportindia.gov.in'
    },
    {
        id: 'mandi-bhav',
        name: 'राष्ट्रीय कृषि बाजार e-NAM (लाइव मंडी भाव)',
        dept: 'कृषि एवं किसान कल्याण मंत्रालय (Ministry of Agriculture)',
        cat: 'CIVIC',
        icon: '🌾',
        bg: 'rgba(34, 197, 94, 0.15)',
        color: '#22c55e',
        desc: 'देश भर की 1,000+ मंडियों के गेहूं, चना, सोयाबीन, धान एवं सब्जियों के दैनिक लाइव भाव देखें एवं व्यापार करें।',
        tags: ['दैनिक मंडी भाव', 'e-NAM Trade', 'फसल भाव', 'किसान सेल'],
        link: 'https://www.enam.gov.in'
    },
    {
        id: 'electricity-bill',
        name: 'विद्युत वितरण बिल भुगतान (State Power Discoms)',
        dept: 'केंद्रीय विद्युत प्राधिकरण एवं राज्य पावर कॉर्पोरेशन',
        cat: 'CIVIC',
        icon: '⚡',
        bg: 'rgba(234, 179, 8, 0.15)',
        color: '#eab308',
        desc: 'सभी 28 राज्यों एवं 8 UTs के बिजली बिल देखें, ऑनलाइन भुगतान करें एवं नया कनेक्शन स्लॉट बुक करें।',
        tags: ['ऑनलाइन बिल पे', 'नया कनेक्शन', 'पावर हेल्प 1912', 'Discoms'],
        link: 'https://powermin.gov.in'
    }
];

// REGIONS GROUPING FOR HOME CHIPS
const REGIONS = {
    'North': { title: '🏔️ उत्तरी राज्य एवं UT (North India)', codes: ['DL', 'UP', 'PB', 'HR', 'HP', 'UK', 'JK', 'LA', 'CH'] },
    'Central': { title: '🌾 मध्य एवं पश्चिमी राज्य (Central & West)', codes: ['MP', 'RJ', 'GJ', 'MH', 'CT', 'GA', 'DD'] },
    'East': { title: '🎨 पूर्वी एवं पूर्वोत्तर राज्य (East & North-East)', codes: ['BR', 'WB', 'JH', 'OD', 'AS', 'SK', 'AR', 'NL', 'MN', 'MZ', 'TR', 'ML'] },
    'South': { title: '🛕 दक्षिणी राज्य एवं द्वीप (South & Islands)', codes: ['TN', 'KA', 'TS', 'AP', 'KL', 'PY', 'AN', 'LD'] }
};

function getStandardHelplines(stateName, capital) {
    return [
        { dept: 'राष्ट्रीय आपातकालीन सेवा / Emergency', num: '112', icon: '🆘', bg: '#ff4d6d22', color: '#ff4d6d' },
        { dept: `${stateName} जल निगम / Water Board`, num: '1800-180-1230', icon: '💧', bg: '#4a9eff22', color: '#4a9eff' },
        { dept: `${stateName} विद्युत वितरण (Power Discom)`, num: '1912', icon: '⚡', bg: '#ffb34722', color: '#ffb347' },
        { dept: 'लोक निर्माण विभाग (PWD Roads)', num: '1800-180-4167', icon: '🏗️', bg: '#9b6dff22', color: '#9b6dff' },
        { dept: `${capital} नगर निगम / Municipal Corp`, num: '1800-11-8585', icon: '🏙️', bg: '#00c78c22', color: '#00c78c' },
        { dept: 'राज्य स्वास्थ्य विभाग (Health Helpline)', num: '104', icon: '🏥', bg: '#ff9f4322', color: '#ff9f43' },
        { dept: 'किसान कॉल सेंटर / Kisan Call Center', num: '1800-180-1551', icon: '🌾', bg: '#43e97b22', color: '#43e97b' },
        { dept: 'राज्य परिवहन सहायता / Transport', num: '1800-22-4000', icon: '🚌', bg: '#00d4d422', color: '#00d4d4' }
    ];
}

function getStandardSchemes(stateName) {
    return [
        { name: 'किसान सम्मान निधि (PM-KISAN)', desc: '₹6000/वर्ष DBT सहायता तीन किश्तों में', docs: ['आधार', 'खसरा/खतौनी', 'बैंक पासबुक'], cat: 'कृषि' },
        { name: `${stateName} युवा स्वरोजगार योजना`, desc: 'युवाओं को ₹5 लाख तक ऋण एवं सब्सिडी', docs: ['आयु प्रमाण', 'व्यापार योजना', 'आधार'], cat: 'रोजगार' },
        { name: 'आयुष्मान भारत — स्वास्थ्य बीमा', desc: 'परिवार को ₹5 लाख तक मुफ़्त इलाज कवर', docs: ['राशन कार्ड', 'आधार'], cat: 'स्वास्थ्य' },
        { name: 'सुकन्या समृद्धि योजना', desc: 'बालिकाओं की उच्च शिक्षा एवं भविष्य हेतु बचत', docs: ['जन्म प्रमाण', 'अभिभावक आधार'], cat: 'महिला' }
    ];
}

// FULL DATABASE FOR ALL 36 REGIONS
const STATE_DB = {
    UP: {
        name: 'उत्तर प्रदेश / Uttar Pradesh', capital: 'लखनऊ', emoji: '🛕', population: '24.1 Cr', area: '2,40,928 km²', cm: 'योगी आदित्यनाथ',
        districts: {
            'लखनऊ (Lucknow)': ['मलिहाबाद (Malihabad)', 'बक्शी का तालाब (BKT)', 'मोहनलालगंज (Mohanlalganj)', 'काकोरी (Kakori)', 'चिनहट (Chinhat)'],
            'वाराणसी (Varanasi)': ['पिंडरा (Pindra)', 'शिवपुर (Shivpur)', 'रोहनिया (Rohaniya)', 'सेवापुरी (Sewapuri)'],
            'कानपुर (Kanpur)': ['बिल्हौर (Bilhaur)', 'घाटमपुर (Ghatampur)', 'कल्याणपुर (Kalyanpur)'],
            'प्रयागराज (Prayagraj)': ['फूलपुर (Phulpur)', 'सोरांव (Soraon)', 'मेजा (Meja)', 'करछना (Karchhana)'],
            'गोरखपुर (Gorakhpur)': ['सहजनवां (Sahjanwa)', 'चौरीचौरा (Chauri Chaura)', 'बांसगांव (Bansgaon)'],
        },
        helplines: getStandardHelplines('उत्तर प्रदेश', 'लखनऊ'),
        schemes: getStandardSchemes('उत्तर प्रदेश'),
        civic: { total: 45820, resolved: 41230, pending: 3100, assigned: 1490, rate: 90 }
    },
    MP: {
        name: 'मध्य प्रदेश / Madhya Pradesh', capital: 'भोपाल', emoji: '🌾', population: '8.5 Cr', area: '3,08,252 km²', cm: 'मोहन यादव',
        districts: {
            'भोपाल (Bhopal)': ['बैरसिया (Bairasia)', 'हुजूर (Huzur)', 'फंदा (Phanda)'],
            'इंदौर (Indore)': ['सावेर (Sanwer)', 'देपालपुर (Depalpur)', 'महू (Mhow)'],
            'ग्वालियर (Gwalior)': ['डबरा (Dabra)', 'भितरवार (Bhitarwar)'],
            'जबलपुर (Jabalpur)': ['पाटन (Patan)', 'सिहोरा (Sihora)', 'कुंडम (Kundam)'],
        },
        helplines: getStandardHelplines('मध्य प्रदेश', 'भोपाल'),
        schemes: getStandardSchemes('मध्य प्रदेश'),
        civic: { total: 28540, resolved: 25100, pending: 2400, assigned: 1040, rate: 88 }
    },
    BR: { name: 'बिहार / Bihar', capital: 'पटना', emoji: '🚜', population: '12.4 Cr', area: '94,163 km²', cm: 'नीतीश कुमार', districts: { 'पटना (Patna)': ['दानापुर (Danapur)', 'मसौढ़ी (Masaurhi)'] }, helplines: getStandardHelplines('बिहार', 'पटना'), schemes: getStandardSchemes('बिहार'), civic: { total: 19800, resolved: 17200, pending: 1900, assigned: 700, rate: 87 } },
    MH: { name: 'महाराष्ट्र / Maharashtra', capital: 'मुंबई', emoji: '🏙️', population: '12.3 Cr', area: '3,07,713 km²', cm: 'देवेंद्र फडणवीस', districts: { 'मुंबई (Mumbai)': ['अंधेरी (Andheri)', 'बांद्रा (Bandra)'] }, helplines: getStandardHelplines('महाराष्ट्र', 'मुंबई'), schemes: getStandardSchemes('महाराष्ट्र'), civic: { total: 62400, resolved: 57800, pending: 3100, assigned: 1500, rate: 93 } },
    DL: { name: 'दिल्ली एनसीआर / Delhi NCR', capital: 'नई दिल्ली', emoji: '🏛️', population: '3.3 Cr', area: '1,484 km²', cm: 'रेखा गुप्ता', districts: { 'दक्षिण दिल्ली (South Delhi)': ['हौज खास (Hauz Khas)', 'साकेत (Saket)'] }, helplines: getStandardHelplines('दिल्ली', 'नई दिल्ली'), schemes: getStandardSchemes('दिल्ली'), civic: { total: 38900, resolved: 36200, pending: 1800, assigned: 900, rate: 93 } },
    RJ: { name: 'राजस्थान / Rajasthan', capital: 'जयपुर', emoji: '🏰', population: '8.1 Cr', area: '3,42,239 km²', cm: 'भजन लाल शर्मा', districts: { 'जयपुर (Jaipur)': ['आमेर (Amer)'] }, helplines: getStandardHelplines('राजस्थान', 'जयपुर'), schemes: getStandardSchemes('राजस्थान'), civic: { total: 22100, resolved: 19400, pending: 1900, assigned: 800, rate: 88 } },
    WB: { name: 'पश्चिम बंगाल / West Bengal', capital: 'कोलकाता', emoji: '🎨', population: '9.7 Cr', area: '88,752 km²', cm: 'ममता बनर्जी', districts: { 'कोलकाता (Kolkata)': ['साल्ट लेक (Salt Lake)'] }, helplines: getStandardHelplines('पश्चिम बंगाल', 'कोलकाता'), schemes: getStandardSchemes('पश्चिम बंगाल'), civic: { total: 31200, resolved: 27800, pending: 2500, assigned: 900, rate: 89 } },
    GJ: { name: 'गुजरात / Gujarat', capital: 'गांधीनगर', emoji: '🌊', population: '7.0 Cr', area: '1,96,024 km²', cm: 'भूपेंद्र पटेल', districts: { 'अहमदाबाद (Ahmedabad)': ['साणंद (Sanand)'] }, helplines: getStandardHelplines('गुजरात', 'गांधीनगर'), schemes: getStandardSchemes('गुजरात'), civic: { total: 24600, resolved: 22900, pending: 1200, assigned: 500, rate: 93 } },
    TN: { name: 'तमिलनाडु / Tamil Nadu', capital: 'चेन्नई', emoji: '🛕', population: '7.8 Cr', area: '1,30,058 km²', cm: 'एम.के. स्टालिन', districts: { 'चेन्नई (Chennai)': ['अड्यार (Adyar)'] }, helplines: getStandardHelplines('तमिलनाडु', 'चेन्नई'), schemes: getStandardSchemes('तमिलनाडु'), civic: { total: 29300, resolved: 27100, pending: 1600, assigned: 600, rate: 92 } },
    KA: { name: 'कर्नाटक / Karnataka', capital: 'बेंगलुरु', emoji: '💻', population: '6.8 Cr', area: '1,91,791 km²', cm: 'सिद्धारमैया', districts: { 'बेंगलुरु (Bengaluru)': ['व्हाइटफील्ड (Whitefield)'] }, helplines: getStandardHelplines('कर्नाटक', 'बेंगलुरु'), schemes: getStandardSchemes('कर्नाटक'), civic: { total: 35700, resolved: 33200, pending: 1800, assigned: 700, rate: 93 } },
    TS: { name: 'तेलंगाना / Telangana', capital: 'हैदराबाद', emoji: '🏛️', population: '3.8 Cr', area: '1,12,077 km²', cm: 'रेवंत रेड्डी', districts: { 'हैदराबाद (Hyderabad)': ['गच्चीबाउली (Gachibowli)'] }, helplines: getStandardHelplines('तेलंगाना', 'हैदराबाद'), schemes: getStandardSchemes('तेलंगाना'), civic: { total: 18900, resolved: 17500, pending: 900, assigned: 500, rate: 93 } },
    PB: { name: 'पंजाब / Punjab', capital: 'चंडीगढ़', emoji: '🌾', population: '3.0 Cr', area: '50,362 km²', cm: 'भगवंत मान', districts: { 'लुधियाना (Ludhiana)': ['जग्रांव (Jagraon)'] }, helplines: getStandardHelplines('पंजाब', 'चंडीगढ़'), schemes: getStandardSchemes('पंजाब'), civic: { total: 14200, resolved: 13100, pending: 700, assigned: 400, rate: 92 } },
    HR: { name: 'हरियाणा / Haryana', capital: 'चंडीगढ़', emoji: '🚜', population: '2.8 Cr', area: '44,212 km²', cm: 'नायब सिंह सैनी', districts: { 'गुरुग्राम (Gurugram)': ['मानसर (Manesar)'] }, helplines: getStandardHelplines('हरियाणा', 'चंडीगढ़'), schemes: getStandardSchemes('हरियाणा'), civic: { total: 16800, resolved: 15600, pending: 800, assigned: 400, rate: 93 } },
    KL: { name: 'केरल / Kerala', capital: 'तिरुवनंतपुरम', emoji: '🌴', population: '3.5 Cr', area: '38,852 km²', cm: 'पिनाराई विजयन', districts: { 'तिरुवनंतपुरम (Trivandrum)': ['कझाकुट्टम (Kazhakkoottam)'] }, helplines: getStandardHelplines('केरल', 'तिरुवनंतपुरम'), schemes: getStandardSchemes('केरल'), civic: { total: 12600, resolved: 11900, pending: 500, assigned: 200, rate: 94 } },
    OD: { name: 'ओडिशा / Odisha', capital: 'भुवनेश्वर', emoji: '🏖️', population: '4.6 Cr', area: '1,55,707 km²', cm: 'मोहन माझी', districts: { 'भुवनेश्वर (Bhubaneswar)': ['जटनी (Jatni)'] }, helplines: getStandardHelplines('ओडिशा', 'भुवनेश्वर'), schemes: getStandardSchemes('ओडिशा'), civic: { total: 15300, resolved: 14000, pending: 900, assigned: 400, rate: 91 } },
    AS: { name: 'असम / Assam', capital: 'दिसपुर', emoji: '☕', population: '3.5 Cr', area: '78,438 km²', cm: 'हिमंत विश्व शर्मा', districts: { 'गुवाहाटी (Guwahati)': ['दिसपुर (Dispur)'] }, helplines: getStandardHelplines('असम', 'दिसपुर'), schemes: getStandardSchemes('असम'), civic: { total: 10400, resolved: 9500, pending: 600, assigned: 300, rate: 91 } },
    JK: { name: 'जम्मू-कश्मीर / J&K (UT)', capital: 'श्रीनगर', emoji: '🏔️', population: '1.4 Cr', area: '42,241 km²', cm: 'मनोज सिन्हा (LG)', districts: { 'श्रीनगर (Srinagar)': ['गुलमर्ग (Gulmarg)'] }, helplines: getStandardHelplines('जम्मू-कश्मीर', 'श्रीनगर'), schemes: getStandardSchemes('जम्मू-कश्मीर'), civic: { total: 8200, resolved: 7600, pending: 400, assigned: 200, rate: 93 } },
    AP: { name: 'आंध्र प्रदेश / AP', capital: 'अमरावती', emoji: '🏛️', population: '5.3 Cr', area: '1,62,975 km²', cm: 'चंद्रबाबू नायडू', districts: { 'विशाखापत्तनम (Vizag)': ['अनाकापल्ले (Anakapalle)'] }, helplines: getStandardHelplines('आंध्र प्रदेश', 'अमरावती'), schemes: getStandardSchemes('आंध्र प्रदेश'), civic: { total: 15000, resolved: 14000, pending: 700, assigned: 300, rate: 93 } },
    AR: { name: 'अरुणाचल प्रदेश / Arunachal', capital: 'ईटानगर', emoji: '🏔️', population: '15 Lakh', area: '83,743 km²', cm: 'पेमा खांडू', districts: { 'ईटानगर (Itanagar)': ['नाहरलगुन (Naharlagun)'] }, helplines: getStandardHelplines('अरुणाचल प्रदेश', 'ईटानगर'), schemes: getStandardSchemes('अरुणाचल प्रदेश'), civic: { total: 2400, resolved: 2200, pending: 150, assigned: 50, rate: 91 } },
    CT: { name: 'छत्तीसगढ़ / Chhattisgarh', capital: 'रायपुर', emoji: '🌾', population: '3.0 Cr', area: '1,35,192 km²', cm: 'विष्णु देव साय', districts: { 'रायपुर (Raipur)': ['अभनपुर (Abhanpur)'] }, helplines: getStandardHelplines('छत्तीसगढ़', 'रायपुर'), schemes: getStandardSchemes('छत्तीसगढ़'), civic: { total: 11000, resolved: 10000, pending: 700, assigned: 300, rate: 90 } },
    GA: { name: 'गोवा / Goa', capital: 'पणजी', emoji: '🏖️', population: '15 Lakh', area: '3,702 km²', cm: 'प्रमोद सावंत', districts: { 'उत्तर गोवा (North Goa)': ['मापुसा (Mapusa)'] }, helplines: getStandardHelplines('गोवा', 'पणजी'), schemes: getStandardSchemes('गोवा'), civic: { total: 3200, resolved: 3000, pending: 150, assigned: 50, rate: 94 } },
    HP: { name: 'हिमाचल प्रदेश / Himachal', capital: 'शिमला', emoji: '🏔️', population: '75 Lakh', area: '55,673 km²', cm: 'सुखविंदर सिंह सुक्खू', districts: { 'शिमला (Shimla)': ['कुफरी (Kufri)'] }, helplines: getStandardHelplines('हिमाचल प्रदेश', 'शिमला'), schemes: getStandardSchemes('हिमाचल प्रदेश'), civic: { total: 6500, resolved: 6000, pending: 350, assigned: 150, rate: 92 } },
    JH: { name: 'झारखंड / Jharkhand', capital: 'रांची', emoji: '⛏️', population: '3.9 Cr', area: '79,716 km²', cm: 'हेमंत सोरेन', districts: { 'रांची (Ranchi)': ['कांके (Kanke)'] }, helplines: getStandardHelplines('झारखंड', 'रांची'), schemes: getStandardSchemes('झारखंड'), civic: { total: 13500, resolved: 12000, pending: 1000, assigned: 500, rate: 89 } },
    MN: { name: 'मणिपुर / Manipur', capital: 'इम्फाल', emoji: '⛰️', population: '32 Lakh', area: '22,327 km²', cm: 'एन. बीरेन सिंह', districts: { 'इम्फाल (Imphal)': ['लम्फेलपत (Lamphelpat)'] }, helplines: getStandardHelplines('मणिपुर', 'इम्फाल'), schemes: getStandardSchemes('मणिपुर'), civic: { total: 2900, resolved: 2600, pending: 200, assigned: 100, rate: 90 } },
    ML: { name: 'मेघालय / Meghalaya', capital: 'शिलांग', emoji: '🌧️', population: '33 Lakh', area: '22,429 km²', cm: 'कॉनराड संगमा', districts: { 'शिलांग (Shillong)': ['सोहरा (Sohra)'] }, helplines: getStandardHelplines('मेघालय', 'शिलांग'), schemes: getStandardSchemes('मेघालय'), civic: { total: 3100, resolved: 2850, pending: 180, assigned: 70, rate: 91 } },
    MZ: { name: 'मिजोरम / Mizoram', capital: 'आइजोल', emoji: '⛰️', population: '12 Lakh', area: '21,081 km²', cm: 'लालदुहोमा', districts: { 'आइजोल (Aizawl)': ['दर्लावन (Darlawn)'] }, helplines: getStandardHelplines('मिजोरम', 'आइजोल'), schemes: getStandardSchemes('मिजोरम'), civic: { total: 1800, resolved: 1680, pending: 80, assigned: 40, rate: 93 } },
    NL: { name: 'नागालैंड / Nagaland', capital: 'कोहिमा', emoji: '⛰️', population: '22 Lakh', area: '16,579 km²', cm: 'नेफ्यू रियू', districts: { 'कोहिमा (Kohima)': ['दीमापुर (Dimapur)'] }, helplines: getStandardHelplines('नागालैंड', 'कोहिमा'), schemes: getStandardSchemes('नागालैंड'), civic: { total: 2100, resolved: 1900, pending: 130, assigned: 70, rate: 90 } },
    SK: { name: 'सिक्किम / Sikkim', capital: 'गंगटोक', emoji: '🏔️', population: '7 Lakh', area: '7,096 km²', cm: 'प्रेम सिंह तामांग', districts: { 'गंगटोक (Gangtok)': ['पेल्लिंग (Pelling)'] }, helplines: getStandardHelplines('सिक्किम', 'गंगटोक'), schemes: getStandardSchemes('सिक्किम'), civic: { total: 1200, resolved: 1140, pending: 40, assigned: 20, rate: 95 } },
    TR: { name: 'त्रिपुरा / Tripura', capital: 'अगरतला', emoji: '🏛️', population: '40 Lakh', area: '10,491 km²', cm: 'माणिक साहा', districts: { 'अगरतला (Agartala)': ['रानिरबाजार (Ranirbazar)'] }, helplines: getStandardHelplines('त्रिपुरा', 'अगरतला'), schemes: getStandardSchemes('त्रिपुरा'), civic: { total: 3400, resolved: 3100, pending: 200, assigned: 100, rate: 91 } },
    UK: { name: 'उत्तराखंड / Uttarakhand', capital: 'देहरादून', emoji: '🏔️', population: '1.1 Cr', area: '53,483 km²', cm: 'पुष्कर सिंह धामी', districts: { 'देहरादून (Deहरादून)': ['ऋषिकेश (Rishikesh)'] }, helplines: getStandardHelplines('उत्तराखंड', 'देहरादून'), schemes: getStandardSchemes('उत्तराखंड'), civic: { total: 9800, resolved: 9000, pending: 550, assigned: 250, rate: 91 } },
    LA: { name: 'लद्दाख / Ladakh (UT)', capital: 'लेह', emoji: '🏔️', population: '3 Lakh', area: '59,146 km²', cm: 'उपराज्यपाल (UT)', districts: { 'लेह (Leh)': ['नुब्रा (Nubra)'] }, helplines: getStandardHelplines('लद्दाख', 'लेह'), schemes: getStandardSchemes('लद्दाख'), civic: { total: 900, resolved: 850, pending: 35, assigned: 15, rate: 94 } },
    CH: { name: 'चंडीगढ़ / Chandigarh (UT)', capital: 'चंडीगढ़', emoji: '🏛️', population: '11 Lakh', area: '114 km²', cm: 'प्रशासक (UT)', districts: { 'चंडीगढ़ नगर (Chandigarh)': ['मनीमाजरा (Manimajra)'] }, helplines: getStandardHelplines('चंडीगढ़', 'चंडीगढ़'), schemes: getStandardSchemes('चंडीगढ़'), civic: { total: 4200, resolved: 4000, pending: 150, assigned: 50, rate: 95 } },
    PY: { name: 'पुडुचेरी / Puducherry (UT)', capital: 'पुडुचेरी', emoji: '🏖️', population: '13 Lakh', area: '479 km²', cm: 'एन. रंगासामी', districts: { 'पुडुचेरी (Pondicherry)': ['ओझुकरै (Ozhukarai)'] }, helplines: getStandardHelplines('पुडुचेरी', 'पुडुचेरी'), schemes: getStandardSchemes('पुडुचेरी'), civic: { total: 3100, resolved: 2900, pending: 130, assigned: 70, rate: 93 } },
    AN: { name: 'अंडमान निकोबार / A&N (UT)', capital: 'पोर्ट ब्लेयर', emoji: '🏝️', population: '4 Lakh', area: '8,249 km²', cm: 'उपराज्यपाल (UT)', districts: { 'पोर्ट ब्लेयर (Port Blair)': ['गराचरमा (Garacharma)'] }, helplines: getStandardHelplines('अंडमान निकोबार', 'पोर्ट ब्लेयर'), schemes: getStandardSchemes('अंडमान निकोबार'), civic: { total: 1100, resolved: 1020, pending: 50, assigned: 30, rate: 92 } },
    LD: { name: 'लक्षद्वीप / Lakshadweep (UT)', capital: 'कवारत्ती', emoji: '🏝️', population: '70,000', area: '32 km²', cm: 'प्रशासक (UT)', districts: { 'कवारत्ती (Kavaratti)': ['अगाती (Agatti)'] }, helplines: getStandardHelplines('लक्षद्वीप', 'कवारत्ती'), schemes: getStandardSchemes('लक्षद्वीप'), civic: { total: 450, resolved: 430, pending: 12, assigned: 8, rate: 95 } },
    DD: { name: 'दादरा एवं नगर हवेली और दमन-दीव (UT)', capital: 'दमन', emoji: '🏖️', population: '6 Lakh', area: '603 km²', cm: 'प्रशासक (UT)', districts: { 'दमन (Daman)': ['सिलवासा (Silvassa)'] }, helplines: getStandardHelplines('दमन-दीव', 'दमन'), schemes: getStandardSchemes('दमन-दीव'), civic: { total: 1500, resolved: 1400, pending: 70, assigned: 30, rate: 93 } },
};

// WELFARE SCHEMES DATABASE (30+ ACTIVE & UPCOMING)
const NATIONAL_SCHEMES_DATABASE = [
    {
        name: 'मुख्यमंत्री लाड़ली बहना योजना (MP Ladli Behna Scheme)',
        desc: 'मध्य प्रदेश की 21 से 60 वर्ष की महिलाओं को ₹1,250 प्रति माह वित्तीय सहायता सीधे खाते में (DBT) दी जाती है।',
        targetGroup: 'मध्य प्रदेश की समस्त विवाहित/विधवा/परित्यक्ता महिलाएं (आयु: 21-60 वर्ष)',
        docs: ['आधार कार्ड', 'समग्र ID (Samagra ID)', 'बैंक पासबुक'],
        cat: 'MP राज्य कल्याण / महिला सशक्तिकरण',
        state: 'MP', occ: ['ALL'], gender: ['Female', 'ALL'], minAge: 21, maxAge: 60,
        link: 'https://cmladlibehna.mp.gov.in'
    },
    {
        name: 'मुख्यमंत्री किसान कल्याण योजना (MP Kisan Kalyan Scheme)',
        desc: 'मध्य प्रदेश के पीएम-किसान लाभार्थी किसानों को राज्य सरकार द्वारा ₹4,000 अतिरिक्त वार्षिक वित्तीय सहायता दी जाती है।',
        targetGroup: 'मध्य प्रदेश के सभी भू-धारक PM-KISAN लाभार्थी किसान',
        docs: ['खसरा/खतौनी', 'आधार कार्ड', 'बैंक विवरण'],
        cat: 'MP राज्य कल्याण / कृषि विकास',
        state: 'MP', occ: ['Farmer', 'ALL'], gender: 'ALL', minAge: 18, maxAge: 90,
        link: 'https://saara.mp.gov.in'
    },
    {
        name: 'मुख्यमंत्री सीखो-कमाओ योजना (MP Sikho Kamao Scheme)',
        desc: 'मध्य प्रदेश के 18 से 29 वर्ष के युवाओं को उद्योग उन्मुख प्रशिक्षण के साथ ₹8,000 से ₹10,000 प्रति माह स्टाइपेंड।',
        targetGroup: 'मध्य प्रदेश के 12वीं/ITI/स्नातक उत्तीर्ण युवा',
        docs: ['12वीं/ITI/स्नातक अंकसूची', 'मूल निवास', 'आधार कार्ड'],
        cat: 'MP राज्य कल्याण / युवा रोजगार',
        state: 'MP', occ: ['Unemployed', 'Student', 'ALL'], gender: 'ALL', minAge: 18, maxAge: 29,
        link: 'https://mmsky.mp.gov.in'
    },
    {
        name: 'मुख्यमंत्री कन्या सुमंगला योजना (UP Kanya Sumangala)',
        desc: 'उत्तर प्रदेश में बेटियों के जन्म से लेकर स्नातक में प्रवेश तक 6 चरणों में कुल ₹15,000 की वित्तीय सहायता।',
        targetGroup: 'उत्तर प्रदेश की बालिकाएं (पारिवारिक आय < ₹3 लाख)',
        docs: ['जन्म प्रमाण', 'माता-पिता का आधार', 'आय प्रमाण'],
        cat: 'UP राज्य कल्याण / बालिका शिक्षा',
        state: 'UP', occ: ['ALL', 'Student'], gender: ['Female', 'ALL'], minAge: 0, maxAge: 25,
        link: 'https://mksy.up.gov.in'
    },
    {
        name: 'मुख्यमंत्री युवा उद्यमी विकास अभियान (UP Youth Entrepreneurship)',
        desc: 'उत्तर प्रदेश के बेरोजगार युवाओं को नया उद्योग स्थापित करने हेतु ₹5 लाख तक का 100% ब्याज-मुक्त ऋण एवं सब्सिडी।',
        targetGroup: 'उत्तर प्रदेश के बेरोजगार युवा (18-40 वर्ष)',
        docs: ['आधार कार्ड', 'शैक्षणिक योग्यता', 'व्यापार परियोजना'],
        cat: 'UP राज्य कल्याण / स्वरोजगार',
        state: 'UP', occ: ['Unemployed', 'Student', 'ALL'], gender: 'ALL', minAge: 18, maxAge: 40,
        link: 'https://msme.up.gov.in'
    },
    {
        name: 'मुख्यमंत्री कन्या उत्थान योजना (Bihar Kanya Utthan)',
        desc: 'बिहार की कन्याओं को जन्म से लेकर स्नातक उत्तीर्ण होने तक स्वास्थ्य एवं उच्च शिक्षा हेतु ₹50,000 तक की प्रोत्साहन राशि।',
        targetGroup: 'बिहार की सभी छात्राएं एवं अविवाहित युवतियां',
        docs: ['स्नातक मार्कशीट', 'आधार कार्ड', 'बैंक खाता'],
        cat: 'बिहार राज्य कल्याण / महिला शिक्षा',
        state: 'BR', occ: ['Student', 'ALL'], gender: ['Female', 'ALL'], minAge: 0, maxAge: 28,
        link: 'https://medhasoft.bih.nic.in'
    },
    {
        name: 'बिहार स्टूडेंट क्रेडिट कार्ड योजना (Bihar Student Credit Card)',
        desc: 'बिहार के 12वीं उत्तीर्ण विद्यार्थियों को उच्च शिक्षा हेतु मात्र 4% ब्याज पर ₹4 लाख तक का शिक्षा ऋण।',
        targetGroup: 'बिहार के उच्च शिक्षा (BTech/MBBS/BSc) के छात्र',
        docs: ['12वीं की अंकपत्र', 'कॉलेज दाखिला रसीद', 'आधार'],
        cat: 'बिहार राज्य कल्याण / उच्च शिक्षा',
        state: 'BR', occ: ['Student', 'ALL'], gender: 'ALL', minAge: 17, maxAge: 30,
        link: 'https://www.7nishchay-yuvaupmission.bihar.gov.in'
    },
    {
        name: 'नमो शेतकरी महासन्मान निधी योजना (MH Namo Shetkari)',
        desc: 'महाराष्ट्र के किसानों को राज्य सरकार द्वारा ₹6,000 प्रति वर्ष अतिरिक्त सहायता राशि ₹2,000 की तीन किश्तों में दी जाती है।',
        targetGroup: 'महाराष्ट्र के सभी पंजीकृत कृषक परिवार',
        docs: ['7/12 उतारा', 'आधार कार्ड', 'बैंक खाता'],
        cat: 'महाराष्ट्र राज्य कल्याण / कृषि विकास',
        state: 'MH', occ: ['Farmer', 'ALL'], gender: 'ALL', minAge: 18, maxAge: 90,
        link: 'https://nsmn.mahabhumi.gov.in'
    },
    {
        name: 'मुख्यमंत्री आयुष्मान आरोग्य योजना (Rajasthan Ayushman Arogya)',
        desc: 'राजस्थान के सभी परिवारों को पंजीकृत अस्पतालों में प्रतिवर्ष ₹25 लाख तक का निःशुल्क कैशलेस इलाज बीमा।',
        targetGroup: 'राजस्थान के सभी मूल निवासी परिवार',
        docs: ['जन-आधार कार्ड', 'आधार कार्ड'],
        cat: 'राजस्थान राज्य कल्याण / मुफ़्त इलाज',
        state: 'RJ', occ: ['ALL'], gender: 'ALL', minAge: 0, maxAge: 100,
        link: 'https://health.rajasthan.gov.in'
    },
    {
        name: '⚡ PM सूर्य घर मुफ़्त बिजली योजना (Rooftop Solar 2025)',
        desc: '💡 आगामी योजना: 300 यूनिट मुफ़्त बिजली हेतु घरों की छत पर सोलर पैनल लगाने के लिए ₹78,000 तक की सरकारी सब्सिडी।',
        targetGroup: 'समस्त आवासीय बिजली उपभोक्ता एवं मध्यमवर्गीय परिवार',
        docs: ['बिजली बिल', 'छत का स्वामित्व प्रमाण', 'आधार कार्ड'],
        cat: '⚡ आगामी राष्ट्रीय योजना / अक्षय ऊर्जा 2025',
        state: 'ALL', occ: ['ALL'], gender: 'ALL', minAge: 18, maxAge: 90,
        link: 'https://pmsuryaghar.gov.in'
    },
    {
        name: '🚗 UP इलेक्ट्रिक वाहन सब्सिडी नीति (UP EV Subsidy 2025)',
        desc: '💡 आगामी योजना: उत्तर प्रदेश में 2-व्हीलर, 4-व्हीलर एवं EV बस खरीद पर ₹5,000 से ₹50,000 तक की सीधी DBT सब्सिडी।',
        targetGroup: 'उत्तर प्रदेश के नए EV वाहन खरीदार',
        docs: ['वाहन पंजीकरण (RC)', 'आधार कार्ड', 'बैंक विवरण'],
        cat: '⚡ आगामी UP राज्य योजना / EV क्रांति 2025',
        state: 'UP', occ: ['ALL'], gender: 'ALL', minAge: 18, maxAge: 75,
        link: 'https://upevsubsidy.in'
    },
    {
        name: 'प्रधानमंत्री किसान सम्मान निधि (PM-KISAN)',
        desc: 'देश के समस्त कृषक परिवारों को प्रतिवर्ष ₹6,000 की नकद सहायता DBT के माध्यम से ₹2,000 की तीन किश्तों में दी जाती है।',
        targetGroup: 'भारत के सभी छोटी व बड़ी जोत वाले कृषक परिवार',
        docs: ['आधार कार्ड', 'भूमि खतौनी/खसरा', 'बैंक पासबुक'],
        cat: 'केंद्रीय योजना / कृषि एवं किसान कल्याण',
        state: 'ALL', occ: ['Farmer', 'ALL'], gender: 'ALL', minAge: 18, maxAge: 100,
        link: 'https://pmkisan.gov.in'
    },
    {
        name: 'प्रधानमंत्री आवास योजना — ग्रामीण एवं शहरी (PM Awas)',
        desc: 'बेघर एवं कच्चे मकानों में रहने वाले गरीब परिवारों को पक्का मकान निर्माण हेतु ₹1.20 लाख से ₹2.50 लाख तक की वित्तीय मदद।',
        targetGroup: 'बीपीएल, ईडब्ल्यूएस एवं कच्चे मकानों में रहने वाले परिवार',
        docs: ['आय प्रमाण', 'राशन कार्ड', 'आधार कार्ड', 'बैंक खाता'],
        cat: 'केंद्रीय योजना / आवास विकास',
        state: 'ALL', occ: ['Laborer', 'Unemployed', 'Farmer', 'Vendor', 'Artisan', 'ALL'], gender: 'ALL', minAge: 18, maxAge: 85,
        link: 'https://pmaymis.gov.in'
    },
    {
        name: 'आयुष्मान भारत — प्रधानमंत्री जन आरोग्य योजना (PM-JAY)',
        desc: 'देश के 12 करोड़ गरीब परिवारों को अस्पतालों में प्रतिवर्ष ₹5,00,000 का निःशुल्क मुफ़्त इलाज बीमा कवर।',
        targetGroup: 'गरीब एवं वंचित परिवार (SECC Data)',
        docs: ['राशन कार्ड', 'आधार कार्ड', 'आयुष्मान कार्ड'],
        cat: 'केंद्रीय योजना / निःशुल्क स्वास्थ्य बीमा',
        state: 'ALL', occ: ['ALL'], gender: 'ALL', minAge: 0, maxAge: 100,
        link: 'https://pmjay.gov.in'
    },
    {
        name: 'इंद्रा गांधी राष्ट्रीय वृद्धावस्था पेंशन (Indira Gandhi Pension)',
        desc: '60 वर्ष व उससे अधिक आयु के बीपीएल बुजुर्गों को जीवन यापन हेतु प्रतिमाह नियमित वृद्धावस्था पेंशन।',
        targetGroup: '60 वर्ष या उससे अधिक आयु के BPL बुजुर्ग नागरिक',
        docs: ['आयु प्रमाण', 'BPL राशन कार्ड', 'आधार कार्ड'],
        cat: 'केंद्रीय योजना / बुजुर्ग पेंशन',
        state: 'ALL', occ: ['ALL'], gender: 'ALL', minAge: 60, maxAge: 110,
        link: 'https://nsap.nic.in'
    },
    {
        name: 'प्रधानमंत्री मुद्रा योजना (PM Mudra Loan)',
        desc: 'व्यवसाय शुरू करने या बढ़ाने हेतु बिना किसी बैंक गारंटी के ₹50,000 से ₹10 लाख तक का रियायती व्यावसायिक ऋण।',
        targetGroup: 'लघु व्यापारी, दुकानदार, पटरी विक्रेता एवं बेरोजगार युवा',
        docs: ['प्रोजेक्ट रिपोर्ट', 'आधार कार्ड', 'बैंक विवरण'],
        cat: 'केंद्रीय योजना / व्यापारिक ऋण',
        state: 'ALL', occ: ['Vendor', 'Artisan', 'Unemployed', 'ALL'], gender: 'ALL', minAge: 18, maxAge: 65,
        link: 'https://www.mudra.org.in'
    },
    {
        name: 'प्रधानमंत्री स्वनिधि योजना (PM SVANidhi Loan)',
        desc: 'पटरी विक्रेताओं एवं रेहड़ी वालों को अपना काम चलाने हेतु बिना गारंटी ₹10,000 से ₹50,000 तक का कार्यशील पूंजी ऋण।',
        targetGroup: 'शहरी व ग्रामीण पटरी विक्रेता एवं रेहड़ी वाले',
        docs: ['वेंडिंग प्रमाणपत्र', 'आधार', 'बैंक खाता'],
        cat: 'केंद्रीय योजना / पटरी विक्रेता कल्याण',
        state: 'ALL', occ: ['Vendor', 'ALL'], gender: 'ALL', minAge: 18, maxAge: 70,
        link: 'https://pmsvanidhi.mohua.gov.in'
    },
    {
        name: 'प्रधानमंत्री विश्वकर्मा योजना (PM Vishwakarma)',
        desc: '18 पारंपरिक कारीगरों एवं शिल्पकारों को ₹3 लाख का रियायती ऋण, ₹15,000 की टूलकिट एवं ₹500/दिन प्रशिक्षण स्टाइपेंड।',
        targetGroup: 'बढ़ई, लोहार, सुनार, कुम्हार, दर्जी, मोची आदि कारीगर',
        docs: ['कारीगर प्रमाण', 'आधार कार्ड', 'बैंक पासबुक'],
        cat: 'केंद्रीय योजना / कारीगर सशक्तिकरण',
        state: 'ALL', occ: ['Artisan', 'ALL'], gender: 'ALL', minAge: 18, maxAge: 70,
        link: 'https://pmvishwakarma.gov.in'
    }
];

let currentSelectedStateCode = null;
let currentSelectedDistrict = null;
let currentSelectedVillage = null;
let currentFontSizePx = 16;
let currentRegionFilter = 'ALL';
let currentServiceCategory = 'ALL';
let currentLang = 'HI';

// RENDER NATIONAL CITIZEN SERVICES HUB CARDS
function renderCitizenServices(category = 'ALL', searchQuery = '') {
    const container = document.getElementById('services-cards-container');
    if (!container) return;

    let filtered = CITIZEN_SERVICES_DB.filter(s => {
        let catMatch = category === 'ALL' || s.cat === category;
        let queryMatch = !searchQuery || 
            s.name.toLowerCase().includes(searchQuery.toLowerCase()) || 
            s.desc.toLowerCase().includes(searchQuery.toLowerCase()) ||
            s.dept.toLowerCase().includes(searchQuery.toLowerCase()) ||
            s.tags.some(t => t.toLowerCase().includes(searchQuery.toLowerCase()));
        return catMatch && queryMatch;
    });

    let html = '';
    if (filtered.length === 0) {
        html = `<div style="grid-column:1/-1;text-align:center;padding:40px;color:var(--text-muted)">
            <i class="fa-solid fa-folder-open fa-3x" style="color:var(--accent-saffron);opacity:0.8;"></i>
            <h3 style="margin-top:12px;font-size:16px;color:var(--text-heading)">कोई नागरिक सेवा नहीं मिली</h3>
            <p style="font-size:13px;">कृपया अपनी खोज बदलें या 'सभी सेवाएं' पर क्लिक करें।</p>
        </div>`;
    } else {
        filtered.forEach(s => {
            html += `<div class="service-card">
                <div>
                    <div class="service-card-head">
                        <div class="service-card-icon" style="background:${s.bg};color:${s.color}">
                            ${s.icon}
                        </div>
                        <div class="service-card-info">
                            <h4>${s.name}</h4>
                            <div class="service-card-dept">${s.dept}</div>
                        </div>
                    </div>
                    <div class="service-card-desc">${s.desc}</div>
                    <div class="service-card-tags">
                        ${s.tags.map(t => `<span class="srv-tag">⚡ ${t}</span>`).join('')}
                    </div>
                </div>
                <div class="service-card-action">
                    <span class="badge badge-success"><i class="fa-solid fa-circle-check"></i> Official Portal</span>
                    <a href="${s.link}" target="_blank" class="srv-portal-btn">
                        <span>पोर्टल खोलें</span> <i class="fa-solid fa-arrow-up-right-from-square"></i>
                    </a>
                </div>
            </div>`;
        });
    }

    container.innerHTML = html;
}

window.filterServiceCategory = function(cat, btnEl) {
    currentServiceCategory = cat;
    const btns = document.querySelectorAll('.srv-cat-btn');
    btns.forEach(b => b.classList.remove('active'));
    if (btnEl) btnEl.classList.add('active');

    const searchVal = document.getElementById('service-search-input')?.value || '';
    renderCitizenServices(cat, searchVal);
};

window.filterCitizenServices = function() {
    const searchVal = document.getElementById('service-search-input')?.value || '';
    renderCitizenServices(currentServiceCategory, searchVal);
};

// TOP TOOL 1: DARK / LIGHT THEME TOGGLE (STARTS WITH LIGHT THEME DEFAULT)
window.toggleTheme = function() {
    const isLightNow = document.body.classList.toggle('light-theme');
    const txtEl = document.getElementById('theme-btn-text');
    const btnEl = document.getElementById('btn-theme-toggle');

    if (isLightNow) {
        if (txtEl) txtEl.textContent = 'Dark Mode';
        if (btnEl) btnEl.innerHTML = '<i class="fa-solid fa-moon"></i> <span id="theme-btn-text">Dark Mode</span>';
        window.speakText('लाइट मोड चालू किया गया।');
    } else {
        if (txtEl) txtEl.textContent = 'Light Mode';
        if (btnEl) btnEl.innerHTML = '<i class="fa-solid fa-sun" style="color:#f59e0b"></i> <span id="theme-btn-text">Light Mode</span>';
        window.speakText('डार्क मोड चालू किया गया।');
    }
};

// TOP TOOL 2: FONT SIZE ADJUSTER (A+ / A-)
window.adjustFontSize = function(delta) {
    currentFontSizePx = Math.max(13, Math.min(22, currentFontSizePx + delta));
    document.documentElement.style.fontSize = currentFontSizePx + 'px';
};

// TOP TOOL 3: LANGUAGE TOGGLE (HINDI <-> ENGLISH)
window.toggleLanguage = function() {
    currentLang = currentLang === 'HI' ? 'EN' : 'HI';
    const langTxt = document.getElementById('lang-btn-text');

    if (currentLang === 'EN') {
        if (langTxt) langTxt.textContent = 'हिंदी में बदलें';
        applyLanguageStrings('EN');
        window.speakText('Switched to CITYWISE AI English language mode.');
    } else {
        if (langTxt) langTxt.textContent = 'English में बदलें';
        applyLanguageStrings('HI');
        window.speakText('सिटीवाइज़ एआई हिंदी भाषा मोड सक्रिय किया गया।');
    }
};

function applyLanguageStrings(lang) {
    if (lang === 'EN') {
        setElemTxt('nav-txt-home', 'Home Portal');
        setElemTxt('nav-txt-services', 'Citizen Services');
        setElemTxt('nav-txt-map', 'Official India Map');
        setElemTxt('nav-txt-schemes', 'Welfare Schemes');
        setElemTxt('btn-voice-txt', 'Voice Assist');
        setElemTxt('ticker-header-lbl', 'CITYWISE AI Governance Updates:');
        setElemTxt('hero-badge-txt', 'CITYWISE AI — 28 States & 8 UTs Portal');
        setElemTxt('hero-sub-txt', 'Click on any State, select your District/City and Village. View LIC policies, Voter ID, Public Banking, local department helplines, and state-specific welfare schemes.');
        setElemTxt('quick-finder-title', 'CITYWISE AI Quick Finder');
        setElemTxt('lbl-step-1', 'State / Union Territory (State/UT)');
        setElemTxt('lbl-step-2', 'District / City');
        setElemTxt('lbl-step-3', 'Village / Tehsil / Ward');
        setElemTxt('btn-launch-txt', 'Open Local Governance Portal');
        setElemTxt('btn-map-link-txt', 'Open Official Map of India');
        setElemTxt('srv-sec-tag', 'CITYWISE AI National Citizen Services');
        setElemTxt('srv-sec-title', 'Voter ID, LIC, Public Banks, Aadhaar & Civil Services');
        setElemTxt('map-sec-tag', 'CITYWISE AI Map Explorer');
        setElemTxt('map-sec-title', 'Official Map of India — Select State, City & Village');
        setElemTxt('map-card-title', 'Map of India');
        setElemTxt('sch-sec-tag', 'CITYWISE AI Scheme Engine');
        setElemTxt('sch-sec-title', 'Find Central & State Welfare Schemes');
        setElemTxt('sch-profile-title', 'Select Your Profile');
        setElemTxt('btn-search-txt', 'Search Eligible Schemes');
        setElemTxt('sch-res-title', 'Matching Schemes');
    } else {
        setElemTxt('nav-txt-home', 'मुख्य पृष्ठ Home');
        setElemTxt('nav-txt-services', 'नागरिक सेवाएं LIC & Voter ID');
        setElemTxt('nav-txt-map', 'भारत का नक्शा Official Map');
        setElemTxt('nav-txt-schemes', 'सरकारी योजनाएं Welfare Engine');
        setElemTxt('btn-voice-txt', 'आवाज सुनें Voice Assist');
        setElemTxt('ticker-header-lbl', 'CITYWISE AI सुशासन अपडेट्स:');
        setElemTxt('hero-badge-txt', 'CITYWISE AI — 28 राज्य एवं 8 UT सुशासन पोर्टल');
        setElemTxt('hero-sub-txt', 'भारत के किसी भी राज्य पर क्लिक करें — फिर अपना ज़िला/शहर एवं गाँव चुनें। LIC पॉलिसियां, Voter ID, सरकारी बैंकिंग, विभागीय हेल्पलाइन नंबर एवं राज्य की योजनाएं देखें।');
        setElemTxt('quick-finder-title', 'CITYWISE AI त्वरित खोजक');
        setElemTxt('lbl-step-1', 'राज्य / केंद्र शासित प्रदेश (State / UT)');
        setElemTxt('lbl-step-2', 'ज़िला / शहर (District / City)');
        setElemTxt('lbl-step-3', 'गाँव / तहसील / वार्ड (Village / Tehsil / Ward)');
        setElemTxt('btn-launch-txt', 'स्थानीय सुशासन पोर्टल खोलें');
        setElemTxt('btn-map-link-txt', 'भारत का नक्शा खोलें (Official Map)');
        setElemTxt('srv-sec-tag', 'CITYWISE AI राष्ट्रीय नागरिक सेवाएं');
        setElemTxt('srv-sec-title', 'Voter ID, LIC, सरकारी बैंक, Aadhaar एवं जन सेवाएं');
        setElemTxt('map-sec-tag', 'CITYWISE AI नक्शा Explorer');
        setElemTxt('map-sec-title', 'भारत का आधिकारिक नक्शा — राज्य, शहर एवं गाँव चुनें');
        setElemTxt('map-card-title', 'भारत का नक्शा');
        setElemTxt('sch-sec-tag', 'CITYWISE AI योजना खोजक');
        setElemTxt('sch-sec-title', 'राज्य एवं केंद्र सरकार की योजनाएं खोजें');
        setElemTxt('sch-profile-title', 'आपकी जानकारी चुनें');
        setElemTxt('btn-search-txt', 'योग्य योजनाएं खोजें');
        setElemTxt('sch-res-title', 'खोज परिणाम');
    }
}

function setElemTxt(id, text) {
    const el = document.getElementById(id);
    if (el) el.textContent = text;
}

// PAGE ROUTING & MOBILE SYNC
window.switchPage = function(pageId) {
    try {
        const pages = document.querySelectorAll('.page-view');
        pages.forEach(p => { p.classList.remove('active'); p.style.display = 'none'; });

        const navBtns = document.querySelectorAll('.nav-btn');
        navBtns.forEach(b => b.classList.remove('active'));

        const mNavBtns = document.querySelectorAll('.m-bottom-btn');
        mNavBtns.forEach(b => b.classList.remove('active'));

        const targetPage = document.getElementById('page-' + pageId);
        if (targetPage) {
            targetPage.style.display = 'block';
            setTimeout(() => targetPage.classList.add('active'), 10);
            window.scrollTo({ top: 0, behavior: 'smooth' });
        }

        const activeNavBtn = document.getElementById('nav-' + pageId);
        if (activeNavBtn) activeNavBtn.classList.add('active');

        const activeMBtn = document.getElementById('m-nav-' + pageId);
        if (activeMBtn) activeMBtn.classList.add('active');

        if (pageId === 'home') initTicker();
        if (pageId === 'services') renderCitizenServices();
        if (pageId === 'map') renderMapStep1();
    } catch(err) { console.error("switchPage error:", err); }
};

window.toggleMobileMenu = function() {
    const menu = document.getElementById('mobile-dropdown');
    if (menu) menu.classList.toggle('show');
};

// POPULATE REGIONAL CATEGORIZED STATE CHIPS ON HOME
function populateHomeControls(regionFilter = 'ALL') {
    const chipContainer = document.getElementById('home-state-chips');
    const selectState   = document.getElementById('home-select-state');
    if (!chipContainer || !selectState) return;

    let groupHtml = '';
    let selectHtml = '<option value="">-- राज्य चुनें / Select State --</option>';

    Object.keys(REGIONS).forEach(rKey => {
        if (regionFilter !== 'ALL' && regionFilter !== rKey) return;

        const regObj = REGIONS[rKey];
        groupHtml += `<div class="region-block">
            <div class="region-block-title">${regObj.title}</div>
            <div class="state-chips-grid">`;
        
        regObj.codes.forEach(code => {
            if (STATE_DB[code]) {
                const s = STATE_DB[code];
                groupHtml += `<button class="state-chip" onclick="onHomeStateChipClick('${code}')">${s.emoji} ${s.name}</button>`;
                selectHtml += `<option value="${code}">${s.emoji} ${s.name}</option>`;
            }
        });

        groupHtml += `</div></div>`;
    });

    chipContainer.innerHTML = groupHtml;
    selectState.innerHTML   = selectHtml;
}

window.filterRegionChips = function(regionKey, btnEl) {
    currentRegionFilter = regionKey;
    const btns = document.querySelectorAll('.region-tab-btn');
    btns.forEach(b => b.classList.remove('active'));
    if (btnEl) btnEl.classList.add('active');

    populateHomeControls(regionKey);
};

window.onHomeStateChipClick = function(code) {
    currentSelectedStateCode = code;
    window.selectState(code);
};

window.onHomeStateChange = function(code) {
    currentSelectedStateCode = code;
    const distSelect = document.getElementById('home-select-district');
    const villSelect = document.getElementById('home-select-village');
    const launchBtn  = document.getElementById('home-btn-launch');

    if (!code || !STATE_DB[code]) {
        distSelect.disabled = true;
        distSelect.innerHTML = '<option value="">-- पहले राज्य चुनें / Select State First --</option>';
        villSelect.disabled = true;
        villSelect.innerHTML = '<option value="">-- पहले ज़िला चुनें / Select District First --</option>';
        launchBtn.disabled = true;
        return;
    }

    const s = STATE_DB[code];
    let html = '<option value="">-- ज़िला/शहर चुनें / Select District --</option>';
    if (s.districts) {
        Object.keys(s.districts).forEach(d => { html += `<option value="${d}">${d}</option>`; });
    } else {
        html += `<option value="${s.capital}">${s.capital} (मुख्य शहर)</option>`;
    }

    distSelect.disabled = false;
    distSelect.innerHTML = html;
    villSelect.disabled = true;
    villSelect.innerHTML = '<option value="">-- पहले ज़िला चुनें / Select District First --</option>';
    launchBtn.disabled = true;
};

window.onHomeDistrictChange = function(distName) {
    currentSelectedDistrict = distName;
    const villSelect = document.getElementById('home-select-village');
    const launchBtn  = document.getElementById('home-btn-launch');

    if (!distName || !currentSelectedStateCode) {
        villSelect.disabled = true;
        launchBtn.disabled = true;
        return;
    }

    const s = STATE_DB[currentSelectedStateCode];
    let html = '<option value="">-- गाँव/तहसील चुनें / Select Village --</option>';
    if (s.districts && s.districts[distName]) {
        s.districts[distName].forEach(v => { html += `<option value="${v}">${v}</option>`; });
    } else {
        html += `<option value="मुख्य वार्ड 1">मुख्य वार्ड 1</option>`;
        html += `<option value="ग्राम पंचायत 2">ग्राम पंचायत 2</option>`;
    }

    villSelect.disabled = false;
    villSelect.innerHTML = html;
    launchBtn.disabled = false;
};

window.onHomeVillageChange = function(villName) {
    currentSelectedVillage = villName;
    document.getElementById('home-btn-launch').disabled = !villName;
};

window.launchSelectedLocationPortal = function() {
    const stateCode = currentSelectedStateCode || document.getElementById('home-select-state').value;
    if (stateCode && STATE_DB[stateCode]) {
        window.selectState(stateCode);
    } else {
        window.selectState('UP');
    }
};

// MAP EXPLORER STEP DRILL DOWN
function renderMapStep1() {
    const grid = document.getElementById('map-states-grid');
    if (!grid) return;

    let html = '';
    Object.keys(STATE_DB).forEach(code => {
        const s = STATE_DB[code];
        html += `<div class="item-card-chip" onclick="onMapStateClick('${code}')">
            ${s.emoji} ${s.name}
            <small>राजधानी: ${s.capital}</small>
        </div>`;
    });
    grid.innerHTML = html;
}

window.onMapStateClick = function(code) {
    if (!STATE_DB[code]) return;
    currentSelectedStateCode = code;
    const s = STATE_DB[code];

    document.getElementById('bc-state').textContent = s.name;
    document.getElementById('bc-state').classList.add('active');

    document.getElementById('drill-step-1').classList.add('hidden');
    document.getElementById('drill-step-2').classList.remove('hidden');
    document.getElementById('drill-step-3').classList.add('hidden');

    document.getElementById('city-step-title').textContent = `${s.name} — शहर/ज़िला चुनें:`;
    document.getElementById('map-hover-info').textContent = `${s.name} चुना गया`;

    const citiesGrid = document.getElementById('cities-grid');
    let html = '';
    if (s.districts) {
        Object.keys(s.districts).forEach(d => {
            html += `<div class="item-card-chip" onclick="onMapCityClick('${d}')">
                🏙️ ${d}
                <small>${s.districts[d].length} गाँव/वार्ड</small>
            </div>`;
        });
    } else {
        html += `<div class="item-card-chip" onclick="onMapCityClick('${s.capital}')">
            🏙️ ${s.capital}
            <small>मुख्य नगर क्षेत्र</small>
        </div>`;
    }
    citiesGrid.innerHTML = html;
};

window.onMapCityClick = function(cityName) {
    currentSelectedDistrict = cityName;
    document.getElementById('bc-district').textContent = cityName;
    document.getElementById('bc-district').classList.add('active');

    document.getElementById('drill-step-1').classList.add('hidden');
    document.getElementById('drill-step-2').classList.add('hidden');
    document.getElementById('drill-step-3').classList.remove('hidden');

    document.getElementById('village-step-title').textContent = `${cityName} — गाँव/वार्ड चुनें:`;

    const s = STATE_DB[currentSelectedStateCode];
    const villagesGrid = document.getElementById('villages-grid');
    let html = '';
    if (s.districts && s.districts[cityName]) {
        s.districts[cityName].forEach(v => {
            html += `<div class="item-card-chip" onclick="onMapVillageClick('${v}')">
                🌾 ${v}
                <small>CITYWISE AI सुशासन केंद्र active</small>
            </div>`;
        });
    } else {
        html += `<div class="item-card-chip" onclick="onMapVillageClick('मुख्य वार्ड 1')">🌾 मुख्य वार्ड 1</div>`;
        html += `<div class="item-card-chip" onclick="onMapVillageClick('ग्राम पंचायत 2')">🌾 ग्राम पंचायत 2</div>`;
    }
    villagesGrid.innerHTML = html;
};

window.onMapVillageClick = function(villageName) {
    currentSelectedVillage = villageName;
    document.getElementById('bc-village').textContent = villageName;
    document.getElementById('bc-village').classList.add('active');

    window.selectState(currentSelectedStateCode);
};

window.backToStep = function(stepNum) {
    if (stepNum === 1) {
        document.getElementById('drill-step-1').classList.remove('hidden');
        document.getElementById('drill-step-2').classList.add('hidden');
        document.getElementById('drill-step-3').classList.add('hidden');
    } else if (stepNum === 2) {
        document.getElementById('drill-step-1').classList.add('hidden');
        document.getElementById('drill-step-2').classList.remove('hidden');
        document.getElementById('drill-step-3').classList.add('hidden');
    }
};

// DRAWER RENDER
window.selectState = function(code) {
    if (!STATE_DB[code]) return;
    currentSelectedStateCode = code;
    const s = STATE_DB[code];
    const drawer = document.getElementById('state-drawer');

    document.getElementById('d-icon').textContent = s.emoji;
    document.getElementById('d-name').textContent = s.name;
    document.getElementById('d-capital').textContent = `राजधानी: ${s.capital} | CM: ${s.cm}`;

    document.getElementById('d-body').innerHTML = buildDrawerContent(s);
    drawer.classList.remove('hidden');
};

window.closeDrawer = function() {
    const drawer = document.getElementById('state-drawer');
    if (drawer) drawer.classList.add('hidden');
};

function buildDrawerContent(s) {
    let html = '';

    const dist = currentSelectedDistrict || Object.keys(s.districts || {})[0] || s.capital;
    const vill = currentSelectedVillage || (s.districts && s.districts[dist] ? s.districts[dist][0] : 'मुख्य क्षेत्र');

    html += `<div class="loc-banner">
        <i class="fa-solid fa-location-crosshairs"></i>
        <span>CITYWISE AI क्षेत्र: <b>${s.name.split('/')[0]}</b> ➔ <b>${dist}</b> ➔ <b>${vill}</b></span>
    </div>`;

    html += `<div class="d-section">
        <div class="d-section-title"><i class="fa-solid fa-chart-bar"></i> सांख्यिकी <small>/ Overview</small></div>
        <div style="display:grid;grid-template-columns:1fr 1fr;gap:10px;">
            <div class="stat-pill"><span class="stat-n">${s.population}</span><span class="stat-l">जनसंख्या</span></div>
            <div class="stat-pill"><span class="stat-n">${s.area}</span><span class="stat-l">क्षेत्रफल</span></div>
        </div>
    </div>`;

    const c = s.civic;
    html += `<div class="d-section">
        <div class="d-section-title"><i class="fa-solid fa-clipboard-list"></i> सुशासन स्थिति <small>/ Governance Status</small></div>
        <div class="civic-bar"><div class="civic-bar-label">कुल निस्तारित कार्य</div><div class="civic-bar-val">${c.total.toLocaleString()}</div></div>
        <div class="civic-bar"><div class="civic-bar-label">संतुष्टि दर</div><div class="civic-bar-track"><div class="civic-bar-fill" style="width:${c.rate}%"></div></div><div class="civic-bar-val" style="color:var(--accent-emerald)">${c.rate}%</div></div>
    </div>`;

    html += `<div class="d-section"><div class="d-section-title"><i class="fa-solid fa-phone-volume"></i> विभागीय हेल्पलाइन नंबर (${s.helplines.length})</div>`;
    s.helplines.forEach(h => {
        html += `<div class="helpline-card">
            <div class="hl-icon" style="background:${h.bg};color:${h.color}">${h.icon}</div>
            <div class="hl-info"><div class="hl-dept">${h.dept}</div><div class="hl-num">${h.num}</div></div>
            <a class="hl-call" href="tel:${h.num.replace(/[^0-9]/g,'')}"><i class="fa-solid fa-phone"></i> कॉल</a>
        </div>`;
    });
    html += `</div>`;

    html += `<div class="d-section"><div class="d-section-title"><i class="fa-solid fa-award"></i> सक्रिय योजनाएं (${s.schemes.length})</div>`;
    s.schemes.forEach(sc => {
        html += `<div class="d-scheme">
            <div style="display:flex;justify-content:space-between;align-items:flex-start;gap:8px;margin-bottom:6px;">
                <div class="d-scheme-name">${sc.name}</div>
                <span class="badge badge-warning" style="font-size:9px;">${sc.cat}</span>
            </div>
            <div class="d-scheme-desc">${sc.desc}</div>
            <div class="d-scheme-docs">
                ${sc.docs.map(d => `<span class="doc-tag">📄 ${d}</span>`).join('')}
            </div>
        </div>`;
    });
    html += `</div>`;

    return html;
}

// REALTIME SCHEME SEARCH ENGINE
function renderAllSchemes(filters = {}) {
    const listEl = document.getElementById('schemes-list');
    const badgeEl = document.getElementById('match-count-badge');
    if (!listEl) return;

    let stateCode = filters.state || document.getElementById('input-state')?.value || 'ALL';
    let occ = filters.occ || document.getElementById('input-occupation')?.value || 'ALL';
    let gender = filters.gender || document.getElementById('input-gender')?.value || 'ALL';
    let age = parseInt(filters.age || document.getElementById('input-age')?.value || '35');

    let filtered = NATIONAL_SCHEMES_DATABASE.filter(s => {
        let stateMatch = stateCode === 'ALL' || s.state === 'ALL' || s.state === stateCode;
        let occMatch = occ === 'ALL' || s.occ.includes('ALL') || s.occ.includes(occ);
        let genderMatch = gender === 'ALL' || s.gender === 'ALL' || (Array.isArray(s.gender) && s.gender.includes(gender));
        let ageMatch = !s.minAge || (age >= s.minAge && age <= (s.maxAge || 120));

        return stateMatch && occMatch && genderMatch && ageMatch;
    });

    if (filtered.length === 0) {
        filtered = NATIONAL_SCHEMES_DATABASE.filter(s => s.state === 'ALL' || s.state === stateCode);
    }

    const stateLabel = stateCode !== 'ALL' && STATE_DB[stateCode] ? STATE_DB[stateCode].name.split('/')[0] : 'संपूर्ण भारत';

    if (badgeEl) badgeEl.textContent = `${stateLabel}: ${filtered.length} योजनाएं मिलीं`;

    let html = '';
    filtered.forEach(sc => {
        html += `<div class="scheme-item">
            <div class="scheme-item-head">
                <div class="scheme-name">${sc.name}</div>
                <span class="scheme-cat">${sc.cat}</span>
            </div>
            <div style="font-size:11.5px;font-weight:700;color:var(--accent-saffron);margin-bottom:6px;">
                🎯 <b>किसके लिए है:</b> ${sc.targetGroup || 'समस्त पात्र नागरिक'}
            </div>
            <div class="scheme-item-body">${sc.desc}</div>
            <div class="scheme-item-footer">
                <div class="scheme-docs-wrap">
                    ${sc.docs.map(d => `<span class="scheme-tag">📄 ${d}</span>`).join('')}
                </div>
                <a href="${sc.link}" target="_blank" class="apply-link"><i class="fa-solid fa-arrow-up-right-from-square"></i> ऑनलाइन आवेदन करें</a>
            </div>
        </div>`;
    });

    listEl.innerHTML = html;
}

window.updateIncomeLabel = function(val) {
    document.getElementById('income-display').textContent = '₹' + parseInt(val).toLocaleString('en-IN') + ' / वर्ष';
};

window.handleSchemeSearch = function(e) {
    if (e) e.preventDefault();
    const btn = document.getElementById('btn-search-schemes');
    if (btn) {
        btn.innerHTML = '<i class="fa-solid fa-spinner fa-spin"></i> खोज जारी है...';
        btn.disabled = true;
    }

    setTimeout(() => {
        const state = document.getElementById('input-state').value;
        const occ = document.getElementById('input-occupation').value;
        const gender = document.getElementById('input-gender').value;
        const age = document.getElementById('input-age').value;
        renderAllSchemes({ state, occ, gender, age });

        if (btn) {
            btn.innerHTML = '<i class="fa-solid fa-magnifying-glass"></i> <span id="btn-search-txt">योग्य योजनाएं खोजें</span>';
            btn.disabled = false;
        }
    }, 350);
};

window.triggerManualDataSync = function() {
    const badge = document.getElementById('sync-status-badge');
    if (badge) {
        badge.innerHTML = '<i class="fa-solid fa-sync fa-spin"></i> data.gov.in सिंक जारी...';
        setTimeout(() => {
            badge.innerHTML = '<i class="fa-solid fa-circle-check"></i> data.gov.in & myScheme सिंक सफल';
            window.speakText('डेटा डॉट जीओवी डॉट इन और माई स्कीम से योजनाएं सफलतापूर्वक सिंक हो गईं।');
        }, 1200);
    }
};

// VOICE & TICKER
window.speakText = function(text) {
    if (!window.speechSynthesis) return;
    try {
        window.speechSynthesis.cancel();
        const utt = new SpeechSynthesisUtterance(text);
        utt.lang = currentLang === 'EN' ? 'en-IN' : 'hi-IN'; utt.rate = 0.95;
        window.speechSynthesis.speak(utt);
    } catch(e) {}
};

window.speakCurrentStateDetails = function() {
    if (!currentSelectedStateCode) return;
    const s = STATE_DB[currentSelectedStateCode];
    window.speakText(`${s.name} का विवरण। राजधानी ${s.capital}।`);
};

const TICKER_ITEMS = [
    '🔴 [CITYWISE AI] — Voter ID E-EPIC डाउनलोड एवं नया रजिस्ट्रेशन लाइव',
    '🟡 [CITYWISE AI] — LIC पॉलिसी प्रीमियम ऑनलाइन भुगतान एवं मैच्योरिटी स्टेटस चालू',
    '🟢 [CITYWISE AI] — PM Jan Dhan zero balance bank account registration active',
    '🔵 [CITYWISE AI] — मध्य प्रदेश लाड़ली बहना योजना एवं UP युवा उद्यमी लोन पोर्टल लाइव',
];
let tickerIdx = 0;
function initTicker() {
    const el = document.getElementById('ticker-text');
    if (!el) return;
    el.textContent = TICKER_ITEMS[0];
    clearInterval(window._tickerInterval);
    window._tickerInterval = setInterval(() => {
        tickerIdx = (tickerIdx + 1) % TICKER_ITEMS.length;
        el.style.opacity = '0';
        setTimeout(() => { el.textContent = TICKER_ITEMS[tickerIdx]; el.style.opacity = '1'; }, 300);
    }, 4000);
}

// DOM LOAD INIT
document.addEventListener('DOMContentLoaded', () => {
    initTicker();
    populateHomeControls();
    renderCitizenServices();
    updateIncomeLabel(250000);
});

document.addEventListener('click', e => {
    const drawer = document.getElementById('state-drawer');
    if (drawer && !drawer.classList.contains('hidden')) {
        if (!drawer.contains(e.target) && !e.target.closest('.state-chip, .nav-btn, .item-card-chip, .map-pin-btn, #home-btn-launch, .quick-service-btn')) {
            window.closeDrawer();
        }
    }
});
