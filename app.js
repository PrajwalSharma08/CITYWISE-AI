// ============================================================
// CITYWISE AI — Enterprise Dual-Language (Hindi & English) Voice & Governance Engine
// ============================================================

// DUAL-LANGUAGE VOICE CONFIGURATION (HINDI & ENGLISH ONLY)
let isVoiceMuted = false;
let currentLang = 'HI'; // 'HI' or 'EN'
let currentVoiceLang = 'hi-IN';
let availableVoices = [];

function loadVoices() {
    if (typeof window !== 'undefined' && window.speechSynthesis) {
        availableVoices = window.speechSynthesis.getVoices();
    }
}
if (typeof window !== 'undefined' && window.speechSynthesis) {
    loadVoices();
    window.speechSynthesis.onvoiceschanged = loadVoices;
}

// ROBUST VOICE ENGINE (GUARANTEED HINDI & ENGLISH TTS)
window.speakText = function(text, overrideLang) {
    if (isVoiceMuted || typeof window === 'undefined' || !window.speechSynthesis) return;
    try {
        window.speechSynthesis.cancel();

        setTimeout(() => {
            if (isVoiceMuted) return;
            const langToUse = overrideLang || currentVoiceLang || (currentLang === 'EN' ? 'en-IN' : 'hi-IN');
            const utt = new SpeechSynthesisUtterance(text);
            utt.lang = langToUse;
            utt.rate = 1.0;
            utt.pitch = 1.0;

            if (!availableVoices || availableVoices.length === 0) {
                availableVoices = window.speechSynthesis.getVoices();
            }

            if (availableVoices && availableVoices.length > 0) {
                let matchingVoice = null;
                if (langToUse.startsWith('hi')) {
                    matchingVoice = availableVoices.find(v => v.lang.includes('hi') || v.name.includes('Hindi') || v.lang === 'hi-IN');
                } else {
                    matchingVoice = availableVoices.find(v => v.lang === 'en-IN' || v.lang === 'en-GB' || v.lang === 'en-US' || v.lang.includes('en'));
                }
                
                if (matchingVoice) utt.voice = matchingVoice;
            }

            if (window.speechSynthesis.paused) {
                window.speechSynthesis.resume();
            }
            window.speechSynthesis.speak(utt);
        }, 50);
    } catch(e) {
        console.warn("TTS Error:", e);
    }
};

window.toggleVoiceMute = function() {
    isVoiceMuted = !isVoiceMuted;

    const topBtn = document.getElementById('top-voice-toggle-btn');
    const topIcon = document.getElementById('top-voice-icon');
    const topText = document.getElementById('top-voice-text');

    const navBtn = document.getElementById('nav-voice-toggle-btn');
    const navIcon = document.getElementById('nav-voice-icon');
    const navText = document.getElementById('nav-voice-text');

    const mIcon = document.getElementById('mobile-menu-voice-icon');
    const mText = document.getElementById('mobile-menu-voice-text');

    if (isVoiceMuted) {
        if (window.speechSynthesis) window.speechSynthesis.cancel();

        if (topBtn) topBtn.classList.add('muted');
        if (topIcon) topIcon.className = 'fa-solid fa-volume-xmark';
        if (topText) topText.textContent = currentLang === 'EN' ? 'Voice: OFF' : 'आवाज: बंद (MUTE)';

        if (navBtn) navBtn.classList.add('muted');
        if (navIcon) navIcon.className = 'fa-solid fa-volume-xmark';
        if (navText) navText.textContent = currentLang === 'EN' ? 'Muted' : 'आवाज MUTE';

        if (mIcon) mIcon.className = 'fa-solid fa-volume-xmark';
        if (mText) mText.textContent = currentLang === 'EN' ? 'Voice: OFF' : 'आवाज: बंद (MUTE)';
    } else {
        if (topBtn) topBtn.classList.remove('muted');
        if (topIcon) topIcon.className = 'fa-solid fa-volume-high';
        if (topText) topText.textContent = currentLang === 'EN' ? 'Voice: ON' : 'आवाज: चालू (ON)';

        if (navBtn) navBtn.classList.remove('muted');
        if (navIcon) navIcon.className = 'fa-solid fa-volume-high';
        if (navText) navText.textContent = currentLang === 'EN' ? 'Voice ON' : 'आवाज ON';

        if (mIcon) mIcon.className = 'fa-solid fa-volume-high';
        if (mText) mText.textContent = currentLang === 'EN' ? 'Voice: ON' : 'आवाज: चालू (ON)';

        window.speakText(currentLang === 'EN' ? 'Voice assistance activated.' : 'आवाज चालू कर दी गई है।');
    }
};

// 1-CLICK HINDI / ENGLISH LANGUAGE TOGGLE
window.toggleLanguage = function() {
    currentLang = currentLang === 'HI' ? 'EN' : 'HI';
    currentVoiceLang = currentLang === 'EN' ? 'en-IN' : 'hi-IN';

    const topLangBtnTxt = document.getElementById('lang-btn-text');
    const navLangTxt = document.getElementById('nav-lang-txt');
    const mLangTxt = document.getElementById('m-lang-toggle-txt');

    if (currentLang === 'EN') {
        if (topLangBtnTxt) topLangBtnTxt.textContent = 'हिन्दी में बदलें';
        if (navLangTxt) navLangTxt.textContent = 'हिन्दी';
        if (mLangTxt) mLangTxt.textContent = 'Switch to हिन्दी';
        window.speakText('Switched to English. Welcome to CITYWISE AI National Governance Portal.', 'en-IN');
    } else {
        if (topLangBtnTxt) topLangBtnTxt.textContent = 'English में देखें';
        if (navLangTxt) navLangTxt.textContent = 'English';
        if (mLangTxt) mLangTxt.textContent = 'Switch to English';
        window.speakText('हिंदी भाषा सक्रिय। सिटीवाइज़ एआई राष्ट्रीय सुशासन पोर्टल में आपका स्वागत है।', 'hi-IN');
    }
};

window.triggerCurrentVoiceGreeting = function() {
    if (currentLang === 'EN') {
        window.speakText('Welcome to CITYWISE AI National Governance Portal.', 'en-IN');
    } else {
        window.speakText('सिटीवाइज़ एआई राष्ट्रीय सुशासन पोर्टल में आपका स्वागत है।', 'hi-IN');
    }
};

// NATIONAL CITIZEN SERVICES DATABASE
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
        link: 'https://voters.eci.gov.in',
        mirror: 'https://www.nvsp.in',
        domain: 'eci.gov.in',
        voiceNote: 'भारत निर्वाचन आयोग। नया वोटर आईडी कार्ड और वोटर लिस्ट सेवाएं उपलब्ध हैं।'
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
        link: 'https://licindia.in',
        mirror: 'https://customer.licindia.in',
        domain: 'licindia.in',
        voiceNote: 'भारतीय जीवन बीमा निगम LIC। ऑनलाइन प्रीमियम भुगतान और पॉलिसी स्टेटस जांचें।'
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
        link: 'https://www.jansuraksha.gov.in',
        mirror: 'https://financialservices.gov.in',
        domain: 'jansuraksha.gov.in',
        voiceNote: 'प्रधानमंत्री जीवन ज्योति बीमा योजना। मात्र 436 रुपये में 2 लाख रुपये का जीवन बीमा।'
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
        link: 'https://pmjdy.gov.in',
        mirror: 'https://www.bankbazaar.com/pmjdy.html',
        domain: 'pmjdy.gov.in',
        voiceNote: 'प्रधानमंत्री जन धन योजना। ज़ीरो बैलेंस सरकारी बैंक खाता एवं रुपे कार्ड प्राप्त करें।'
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
        link: 'https://myaadhaar.uidai.gov.in',
        mirror: 'https://uidai.gov.in',
        domain: 'uidai.gov.in',
        voiceNote: 'आधार सेवाएं। ई-आधार डाउनलोड करें और पैन आधार लिंक स्टेटस चेक करें।'
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
        link: 'https://www.epfindia.gov.in',
        mirror: 'https://passbook.epfindia.gov.in',
        domain: 'epfindia.gov.in',
        voiceNote: 'कर्मचारी भविष्य निधि ईपीएफओ। पीएफ बैलेंस और पेंशन पासबुक ऑनलाइन देखें।'
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
        link: 'https://parivahan.gov.in',
        mirror: 'https://sarathi.parivahan.gov.in',
        domain: 'parivahan.gov.in',
        voiceNote: 'परिवहन सेवा। ड्राइविंग लाइसेंस और ई-चालान भुगतान पोर्टल।'
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
        link: 'https://passportindia.gov.in',
        mirror: 'https://portal2.passportindia.gov.in',
        domain: 'passportindia.gov.in',
        voiceNote: 'पासपोर्ट सेवा केंद्र। नए पासपोर्ट और अपॉइंटमेंट स्लॉट बुक करें।'
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
        link: 'https://www.enam.gov.in',
        mirror: 'https://agmarknet.gov.in',
        domain: 'enam.gov.in',
        voiceNote: 'राष्ट्रीय कृषि बाजार ई-नाम। देश भर की मंडियों के दैनिक लाइव भाव देखें।'
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
        link: 'https://powermin.gov.in',
        mirror: 'https://www.bharatbillpay.com',
        domain: 'powermin.gov.in',
        voiceNote: 'विद्युत वितरण निगम। बिजली बिल देखें और ऑनलाइन भुगतान करें।'
    }
];

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
    "UP": {
        "name": "उत्तर प्रदेश / Uttar Pradesh",
        "capital": "लखनऊ",
        "emoji": "🛕",
        "population": "24.1 Cr",
        "area": "2,40,928 km²",
        "cm": "योगी आदित्यनाथ",
        "dbtAmount": "₹54,200 Cr",
        "dbtRating": "94%",
        "districts": {
            "लखनऊ (Lucknow)": [
                "हजरतगंज (Hazratganj)",
                "मलिहाबाद (Malihabad)",
                "बक्शी का तालाब (BKT)",
                "मोहनलालगंज (Mohanlalganj)",
                "काकोरी (Kakori)",
                "चिनहट (Chinhat)",
                "गोमती नगर (Gomti Nagar)",
                "आलमबाग (Alambagh)"
            ],
            "कानपुर (Kanpur)": [
                "कल्याणपुर (Kalyanpur)",
                "बिल्हौर (Bilhaur)",
                "घाटमपुर (Ghatampur)",
                "कालियानपुर (Kalianpur)",
                "पनकी (Panki)",
                "जाजमऊ (Jajmau)",
                "नवाबगंज (Nawabganj)"
            ],
            "प्रयागराज (Prayagraj)": [
                "सिविल लाइंस (Civil Lines)",
                "फूलपुर (Phulpur)",
                "सोरांव (Soraon)",
                "मेजा (Meja)",
                "करछना (Karchhana)",
                "झूंसी (Jhunsi)",
                "कोरांव (Koraon)"
            ],
            "वाराणसी (Varanasi)": [
                "दशाश्वमेध (Dashashwamedh)",
                "पिंडरा (Pindra)",
                "शिवपुर (Shivpur)",
                "रोहनिया (Rohaniya)",
                "सेवापुरी (Sewapuri)",
                "रामनगर (Ramnagar)",
                "कैंट (Cantt)"
            ],
            "आगरा (Agra)": [
                "अकोला (Akola)",
                "फतेहाबाद (Fatehabad)",
                "एत्मादपुर (Etmadpur)",
                "बाह (Bah)",
                "किरावली (Kirawali)",
                "ताजगंज (Tajganj)"
            ],
            "नोएडा / गौतम बुद्ध नगर (Noida)": [
                "सेक्टर 62 (Sector 62)",
                "ग्रेटर नोएडा (Greater Noida)",
                "दादरी (Dadri)",
                "जेवर (Jewar)",
                "दनकौर (Dankaur)"
            ],
            "गाजियाबाद (Ghaziabad)": [
                "लोनी (Loni)",
                "मुर्तजाबाद (Murtazabad)",
                "मुरादनगर (Muradnagar)",
                "मोदीनगर (Modinagar)",
                "वसुंधरा (Vasundhara)",
                "इंदिरापुरम (Indirapuram)"
            ],
            "मेरठ (Meerut)": [
                "सरधना (Sardhana)",
                "मवाना (Mawana)",
                "हस्तिनापुर (Hastinapur)",
                "दौराला (Daurala)",
                "रोहटा (Rohta)"
            ],
            "बरेली (Bareilly)": [
                "नवाबगंज (Nawabganj)",
                "फरीदपुर (Faridpur)",
                "आंवला (Aonla)",
                "मीरगंज (Mirganj)",
                "बहेड़ी (Baheri)"
            ],
            "अलीगढ़ (Aligarh)": [
                "खैर (Khair)",
                "अतरौली (Atrauli)",
                "इगलास (Iglas)",
                "गभाना (Gabhana)",
                "कोल (Koil)"
            ],
            "मुरादाबाद (Moradabad)": [
                "कांठ (Kanth)",
                "ठाकुरद्वारा (Thakurdwara)",
                "बिलारी (Bilari)",
                "कुंदरकी (Kundarki)"
            ],
            "सहारनपुर (Saharanpur)": [
                "देवबंद (Deoband)",
                "नकुड़ (Nakur)",
                "बेहट (Behat)",
                "रामपुर मनिहारान (Rampur Maniharan)"
            ],
            "गोरखपुर (Gorakhpur)": [
                "सहजनवां (Sahjanwa)",
                "चौरीचौरा (Chauri Chaura)",
                "बांसगांव (Bansgaon)",
                "कैम्पियरगंज (Campierganj)",
                "खजनी (Khajni)"
            ],
            "अयोध्या (Ayodhya)": [
                "सदर (Sadar)",
                "रुदौली (Rudauli)",
                "मिल्कीपुर (Milkipur)",
                "सोहावल (Sohawal)",
                "बीकापुर (Bikapur)"
            ],
            "झांसी (Jhansi)": [
                "मऊरानीपुर (Mauranipur)",
                "गरौठा (Garautha)",
                "मोंठ (Moth)",
                "बबीना (Babina)"
            ],
            "मथुरा (Mathura)": [
                "वृंदावन (Vrindavan)",
                "गोवर्धन (Goverdhan)",
                "छाता (Chhata)",
                "मांट (Mant)",
                "महावन (Mahavan)"
            ],
            "फिरोजाबाद (Firozabad)": [
                "शिकोहाबाद (Shikohabad)",
                "टूंडला (Tundla)",
                "जसराना (Jasrana)",
                "सिरसागंज (Sirsaganj)"
            ],
            "मुजफ्फरनगर (Muzaffarnagar)": [
                "बुढ़ाना (Budhana)",
                "खतौली (Khatauli)",
                "जानसठ (Jansath)",
                "शामली (Shamli)"
            ]
        }
    },
    "MH": {
        "name": "महाराष्ट्र / Maharashtra",
        "capital": "मुंबई",
        "emoji": "🏙️",
        "population": "12.3 Cr",
        "area": "3,07,713 km²",
        "cm": "देवेंद्र फडणवीस",
        "dbtAmount": "₹48,900 Cr",
        "dbtRating": "95%",
        "districts": {
            "मुंबई (Mumbai)": [
                "अंधेरी (Andheri)",
                "बांद्रा (Bandra)",
                "बोरीवली (Borivali)",
                "दादर (Dadar)",
                "कुर्ला (Kurla)",
                "कोलाबा (Colaba)",
                "घाटकोपर (Ghatkopar)",
                "मुलुंड (Mulund)"
            ],
            "पुणे (Pune)": [
                "हवेली (Haveli)",
                "शिवाजीनगर (Shivajinagar)",
                "कोथरुड (Kothrud)",
                "हिंजेवाड़ी (Hinjawadi)",
                "हड़पसर (Hadapsar)",
                "बारामती (Baramati)",
                "शिरूर (Shirur)",
                "जुन्नर (Junnar)"
            ],
            "पिंपरी-चिंचवड़ (Pimpri-Chinchwad)": [
                "पिंपरी (Pimpri)",
                "चिंचवड़ (Chinchwad)",
                "भोसरी (Bhosari)",
                "निगडी (Nigdi)",
                "रावेत (Ravet)",
                "आकुर्डी (Akurdi)"
            ],
            "नागपुर (Nagpur)": [
                "रामटेक (Ramtek)",
                "कामठी (Kamthi)",
                "उमरेड (Umred)",
                "काटोल (Katol)",
                "सावनेर (Savner)",
                "हिंगणा (Hingna)"
            ],
            "ठाणे (Thane)": [
                "कल्याण (Kalyan)",
                "उल्हासनगर (Ulhasnagar)",
                "भिवंडी (Bhiwandi)",
                "अंबरनाथ (Ambernath)",
                "मामणोली (Mamnoli)",
                "भाईंदर (Bhayandar)",
                "बदलापुर (Badlapur)",
                "मीरा रोड (Mira Road)"
            ],
            "वसई-विरार (Vasai-Virar)": [
                "वसई (Vasai)",
                "विरार (Virar)",
                "नालासोपारा (Nallasopara)",
                "नवघर (Navghar)",
                "पालघर (Palghar)"
            ],
            "नासिक (Nashik)": [
                "इगतपुरी (Igatpuri)",
                "डिंडोरी (Dindori)",
                "निफाड़ (Niphad)",
                "मालेगांव (Malegaon)",
                "त्र्यंबकेश्वर (Trimbak)",
                "सिन्नर (Sinnar)",
                "येवला (Yeola)"
            ],
            "छत्रपति संभाजीनगर / औरंगाबाद": [
                "पैठण (Paithan)",
                "गंगापुर (Gangapur)",
                "वैजापुर (Vaijapur)",
                "खुलदाबाद (Khuldabad)",
                "सिल्लोड (Sillod)"
            ],
            "सोलापुर (Solapur)": [
                "पंढरपुर (Pandharpur)",
                "बार्शी (Barshi)",
                "अक्कलकोट (Akkalkot)",
                "करमाला (Karmala)",
                "सांगोला (Sangola)"
            ],
            "कोल्हापुर (Kolhapur)": [
                "करवीर (Karveer)",
                "इचलकरंजी (Ichalkaranji)",
                "हातकणंगले (Hatkanangle)",
                "शिरोळ (Shirol)",
                "कागल (Kagal)"
            ],
            "अमरावती (Amravati)": [
                "अचलपुर (Achalpur)",
                "चांदूर (Chandur)",
                "मोर्शी (Morshi)",
                "दर्यापुर (Daryapur)"
            ],
            "नांदेड़ (Nanded)": [
                "लोहा (Loha)",
                "मुखेड़ (Mukhed)",
                "कंधार (Kandhar)",
                "भोकर (Bhokar)",
                "बिलोली (Biloli)"
            ],
            "सांगली (Sangli)": [
                "मिरज (Miraj)",
                "इस्लामपुर (Islampur)",
                "तासगांव (Tasgaon)",
                "विटा (Vita)"
            ],
            "जलगांव (Jalgaon)": [
                "भुसावल (Bhusawal)",
                "चालीसगांव (Chalisgaon)",
                "जामनेर (Jamner)",
                "अमळनेर (Amalner)"
            ],
            "अकोला (Akola)": [
                "अकोट (Akot)",
                "बालापुर (Balapur)",
                "मुर्तिजापुर (Murtizapur)",
                "तेल्हारा (Telhara)"
            ],
            "लातूर (Latur)": [
                "उदगीर (Udgir)",
                "अहमदपुर (Ahmedpur)",
                "औसा (Ausa)",
                "निलंगा (Nilanga)"
            ],
            "धुले (Dhule)": [
                "शिरपुर (Shirpur)",
                "साक्री (Sakri)",
                "सिंदखेड़ा (Sindkheda)"
            ],
            "अहमदनगर / अहिल्यानगर": [
                "राहाता (Rahata/Shirdi)",
                "संगमनेर (Sangamner)",
                "कोपरगांव (Kopargaon)",
                "श्रीरामपुर (Shrirampur)",
                "नेवासा (Nevasa)"
            ]
        }
    },
    "BR": {
        "name": "बिहार / Bihar",
        "capital": "पटना",
        "emoji": "🚜",
        "population": "12.4 Cr",
        "area": "94,163 km²",
        "cm": "नीतीश कुमार",
        "dbtAmount": "₹32,600 Cr",
        "dbtRating": "89%",
        "districts": {
            "पटना (Patna)": [
                "दानापुर (Dinapore)",
                "खगौल (Khagaul)",
                "मसौढ़ी (Masaurhi)",
                "फुलवारी शरीफ (Phulwari)",
                "खुसरूपुर (Khusropur)",
                "बाढ़ (Barh)",
                "फतुहा (Fatuha)",
                "बख्तियारपुर (Bakhtiarpur)",
                "मोकामा (Mokama)"
            ],
            "गया (Gaya)": [
                "बोधगया (Bodh Gaya)",
                "शेरघाटी (Sherghati)",
                "टिकारी (Tikari)",
                "इमामगंज (Imamganj)",
                "वजीरगंज (Wazirganj)",
                "बेलागंज (Belaganj)",
                "अतरी (Atri)"
            ],
            "मुजफ्फरपुर (Muzaffarpur)": [
                "कांठी (Kanti)",
                "सकरा (Sakra)",
                "मरवन (Marwan)",
                "सरैया (Saraiya)",
                "साहेबगंज (Sahebganj)",
                "मोतीपुर (Motipur)",
                "कुढ़नी (Kurhani)"
            ],
            "भागलपुर (Bhagalpur)": [
                "कहलगांव (Kahalgaon)",
                "सुल्तानगंज (Sultanganj)",
                "नवगछिया (Naugachhia)",
                "पीरपैंती (Pirpainti)",
                "बबुरा (Babura)",
                "बिहपुर (Bihpur)"
            ],
            "दरभंगा (Darbhanga)": [
                "लहेरियासराय (Laheriasarai)",
                "बेनीपुर (Benipur)",
                "बहेड़ी (Baheri)",
                "मुड़िया (Muria)",
                "नरपतनगर (Narpatnagar)",
                "लखनौर (Lakhnaur)",
                "हायाघाट (Hayaghat)",
                "जाले (Jale)"
            ],
            "बेगूसराय (Begusarai)": [
                "बरौनी (Barauni)",
                "मटिहानी (Matihani)",
                "गढ़पुरा (Garhpura)",
                "नावकोठी (Nao Kothi)",
                "उलाओ (Ulao)",
                "सिंघौल (Singhaul)",
                "बखरी (Bakhri)",
                "तेघड़ा (Teghra)"
            ],
            "कटिहार (Katihar)": [
                "मनिहारी (Manihari)",
                "बारसोई (Barsoi)",
                "कोढ़ा (Kodha)",
                "कदवा (Kadwa)",
                "बलरामपुर (Balrampur)",
                "अमदाबाद (Amdabad)"
            ],
            "आरा / भोजपुर (Arrah)": [
                "कोइलवर (Koelwar)",
                "बड़हरा (Barhara)",
                "जगदीशपुर (Jagdishpur)",
                "पीरो (Piro)",
                "मसार (Masar)",
                "जमीरा (Jamira)",
                "गिद्धा (Giddha)",
                "सहार (Sahar)"
            ],
            "छपरा / सारण (Chapra)": [
                "सोनपुर (Sonepur)",
                "मढ़ौरा (Marhaura)",
                "रिविलगंज (Revelganj)",
                "मांझी (Manjhi)",
                "परसा (Parsa)",
                "गड़खा (Garkha)",
                "एकमा (Ekma)"
            ],
            "रोहतास / डेहरी (Dehri)": [
                "डेहरी आन सोन (Dehri)",
                "सासाराम (Sasaram)",
                "नोखा (Nokha)",
                "नासरीगंज (Nasriganj)",
                "पहलेंजा (Pahleza)",
                "सखरा (Sakhara)",
                "बिक्रमगंज (Bikramganj)"
            ],
            "वैशाली / हाजीपुर (Hajipur)": [
                "हाजीपुर (Hajipur)",
                "महुआ (Mahua)",
                "लालंगज (Lalganj)",
                "राजापाकर (Raja Pakar)",
                "देसरी (Desri)",
                "सहदेई बुजुर्ग (Sahdai Buzurg)",
                "पातेपुर (Patepur)",
                "बिदुपुर (Bidupur)"
            ],
            "सीतामढ़ी (Sitamarhi)": [
                "डुमरा (Dumra)",
                "बैरगनिया (Bairgania)",
                "सुरसंड (Sursand)",
                "पुपरी (Pupri)",
                "रून्नीसैदपुर (Runnisaidpur)",
                "बाजपट्टी (Bajpatti)"
            ],
            "समस्तीपुर (Samastipur)": [
                "दलसिंहसराय (Dalsingh Sarai)",
                "रोसड़ा (Rosera)",
                "हसनपुर (Hasanpur)",
                "खानपुर (Khanpur)",
                "कल्याणपुर (Kalyanpur)",
                "उजियारपुर (Ujiarpur)",
                "वारिसनगर (Warisnagar)"
            ],
            "सहरसा / बेलाही (Belahi)": [
                "बेलाही (Belahi)",
                "सिमरी बख्तियारपुर (Bakhtiarpur)",
                "सोनवर्षा (Sonbarsa)",
                "सौर बाजार (Saur Bazar)",
                "महिषी (Mahishi)",
                "कहरा (Kahara)"
            ],
            "पूर्णिया (Purnia)": [
                "बनमनखी (Banmankhi)",
                "कसबा (Kasba)",
                "धमदाहा (Dhamdaha)",
                "बैसी (Baisi)",
                "अमौर (Amour)"
            ],
            "मुंगेर (Munger)": [
                "जमालपुर (Jamalpur)",
                "खड़कपुर (Kharagpur)",
                "तारापुर (Tarapur)",
                "बरियारपुर (Bariarpur)"
            ],
            "नालंदा / बिहार शरीफ (Bihar Sharif)": [
                "राजगीर (Rajgir)",
                "हिलसा (Hilsa)",
                "इस्लामपुर (Islampur)",
                "हरनौत (Harnaut)",
                "सिलाव (Silao)"
            ],
            "सीवान (Siwan)": [
                "महाराजगंज (Maharajganj)",
                "मैरवा (Mairwa)",
                "दरौली (Darauli)",
                "पचरुखी (Pachrukhi)",
                "रघुनाथपुर (Raghunathpur)"
            ],
            "मोतिहारी / पूर्वी चंपारण (Motihari)": [
                "रक्सौल (Raxaul)",
                "चकिया (Chakia)",
                "ढाका (Dhaka)",
                "अरेराज (Areraj)",
                "मेहसी (Mehsi)"
            ],
            "बेतिया / पश्चिमी चंपारण (Bettiah)": [
                "बगहा (Bagaha)",
                "नरकटियागंज (Narkatiaganj)",
                "रामनगर (Ramnagar)",
                "लौरिया (Lauriya)",
                "चनपटिया (Chanpatia)"
            ],
            "बक्सर (Buxar)": [
                "डुमरांव (Dumraon)",
                "ब्रह्मपुर (Brahampur)",
                "सिमरी (Simri)",
                "इटारही (Itarhi)"
            ]
        }
    },
    "MP": {
        "name": "मध्य प्रदेश / Madhya Pradesh",
        "capital": "भोपाल",
        "emoji": "🌾",
        "population": "8.5 Cr",
        "area": "3,08,252 km²",
        "cm": "मोहन यादव",
        "dbtAmount": "₹38,400 Cr",
        "dbtRating": "93%",
        "districts": {
            "इंदौर (Indore)": [
                "सावेर (Sanwer)",
                "देपालपुर (Depalpur)",
                "महू (Mhow)",
                "कम्पेल (Kampel)",
                "तिल्लोर खुर्द (Tillor Khurd)",
                "राऊ (Rau)",
                "हातोद (Hatod)",
                "पीथमपुर (Pithampur)"
            ],
            "भोपाल (Bhopal)": [
                "बैरसिया (Bairasia)",
                "हुजूर (Huzur)",
                "फंदा (Phanda)",
                "कोलार (Kolar)",
                "अरेरा (Arera)",
                "एमपी नगर (MP Nagar)",
                "गोविंदपुरा (Govindpura)"
            ],
            "जबलपुर (Jabalpur)": [
                "पाटन (Patan)",
                "सिहोरा (Sihora)",
                "कुंडम (Kundam)",
                "पनागर (Panagar)",
                "मझौली (Majholi)",
                "शाहपुरा (Shahpura)",
                "बरगी (Bargi)"
            ],
            "ग्वालियर (Gwalior)": [
                "डबरा (Dabra)",
                "भितरवार (Bhitarwar)",
                "मुरार (Morar)",
                "लश्कर (Lashkar)",
                "घाटीगांव (Ghatigaon)",
                "हजीरा (Hazira)"
            ],
            "उज्जैन (Ujjain)": [
                "महिदपुर (Mahidpur)",
                "तराना (Tarana)",
                "नागदा (Nagda)",
                "बड़नगर (Barnagar)",
                "खाचरोद (Khachrod)",
                "घट्टिया (Ghattia)"
            ],
            "सागर (Sagar)": [
                "बीना (Bina)",
                "खुरई (Khurai)",
                "रहली (Rehli)",
                "गढ़ाकोटा (Gadhakota)",
                "देवरी (Deori)",
                "बंडा (Banda)"
            ],
            "सतना (Satna)": [
                "मैहर (Maihar)",
                "नागोद (Nagod)",
                "अमरपाटन (Amarpatan)",
                "उचेहरा (Uchehara)",
                "चित्रकूट (Chitrakoot)"
            ],
            "रीवा (Rewa)": [
                "मऊगंज (Mauganj)",
                "हुजूर (Huzur)",
                "सिरमौर (Sirmaur)",
                "त्यौंथर (Teonthar)",
                "हनुमना (Hanumana)"
            ],
            "रतलाम (Ratlam)": [
                "जावरा (Jaora)",
                "आलोट (Alot)",
                "सैलाना (Sailana)",
                "पिपलोदा (Piploda)",
                "बाजना (Bajna)"
            ],
            "नरसिंहपुर / बरमान (Barmhan Kalan)": [
                "बरमान कलां (Barmhan Kalan)",
                "गाडरवारा (Gadarwara)",
                "करेली (Kareli)",
                "गोटेगांव (Gotegaon)",
                "तेंदूखेड़ा (Tendukheda)"
            ],
            "देवास / शिवनी (Shivni)": [
                "शिवनी (Shivni)",
                "पीपलदा (Pipalda)",
                "परमी (Permi)",
                "सोनकच्छ (Sonkatch)",
                "बागली (Bagli)",
                "कन्नौद (Kannod)",
                "खातेगांव (Khategaon)"
            ],
            "कटनी / मुरवारा (Katni)": [
                "मुरवारा (Murwara)",
                "बहोरीबंद (Bahoriband)",
                "विजयराघवगढ़ (Vijayraghavgarh)",
                "बड़वारा (Badwara)",
                "रीठी (Rithi)"
            ],
            "सिंगरौली (Singrauli)": [
                "बैढ़न (Waidhan)",
                "चितरंगी (Chitrangi)",
                "देवसर (Deosar)",
                "माड़ा (Mada)"
            ],
            "खंडवा (Khandwa)": [
                "ओंकारेश्वर (Omkareshwar)",
                "पंधाना (Pandhana)",
                "पुनासा (Punasa)",
                "हरसूद (Harsud)"
            ],
            "छिंदवाड़ा (Chhindwara)": [
                "सौंसर (Sausar)",
                "परासिया (Parasia)",
                "जुन्नारदेव (Junnardeo)",
                "अमरवाड़ा (Amarwara)",
                "पांढुर्णा (Pandhurna)"
            ]
        }
    },
    "GJ": {
        "name": "गुजरात / Gujarat",
        "capital": "गांधीनगर",
        "emoji": "🌊",
        "population": "7.0 Cr",
        "area": "1,96,024 km²",
        "cm": "भूपेंद्र पटेल",
        "dbtAmount": "₹34,100 Cr",
        "dbtRating": "96%",
        "districts": {
            "अहमदाबाद (Ahmedabad)": [
                "साणंद (Sanand)",
                "दस्करोई (Daskroi)",
                "धोलका (Dholka)",
                "धंधुका (Dhandhuka)",
                "बावला (Bavla)",
                "विरमगाम (Viramgam)",
                "मणिनगर (Maninagar)",
                "बोपल (Bopal)"
            ],
            "सूरत (Surat)": [
                "ओलपाड (Olpad)",
                "कामरेज (Kamrej)",
                "बारडोली (Bardoli)",
                "मांडवी (Mandvi)",
                "महुवा (Mahuva)",
                "चोरयासी (Choryasi)",
                "कतारगाम (Katargam)",
                "अडाजण (Adajan)"
            ],
            "वडोदरा (Vadodara)": [
                "पादरा (Padra)",
                "करजण (Karjan)",
                "डभोई (Dabhoi)",
                "अंगढ़ (Anghad)",
                "सुरसी (Sursi)",
                "गोरवा (Gorwa)",
                "सावली (Savli)",
                "वाघोडिया (Vaghodia)"
            ],
            "राजकोट (Rajkot)": [
                "गोंडल (Gondal)",
                "जेतपुर (Jetpur)",
                "धोराजी (Dhoraji)",
                "जसदण (Jasdan)",
                "उपलेटा (Upleta)",
                "कोटका सांगाणी (Kotda Sangani)"
            ],
            "भावनगर (Bhavnagar)": [
                "महुआ (Mahuva)",
                "पालीताना (Palitana)",
                "तलाजा (Talaja)",
                "सिहोर (Sihor)",
                "गारियाधार (Gariadhar)"
            ],
            "जामनगर (Jamnagar)": [
                "ध्रोल (Dhrol)",
                "जोड़िया (Jodiya)",
                "कालावड (Kalavad)",
                "लालपुर (Lalpur)",
                "जामजोधपुर (Jamjodhpur)"
            ],
            "गांधीनगर (Gandhinagar)": [
                "कलोल (Kalol)",
                "दहेगाम (Dahegam)",
                "माणसा (Mansa)",
                "पेथापुर (Pethapur)"
            ],
            "वापी / वलसाड (Vapi)": [
                "वापी (Vapi)",
                "पारडी (Pardi)",
                "उमरगाम (Umbergaon)",
                "धरमपुर (Dharampur)",
                "कपराड़ा (Kaprada)"
            ],
            "कच्छ / भुज (Bhuj)": [
                "गांधीधाम (Gandhidham)",
                "मांडवी (Mandvi)",
                "अंजार (Anjar)",
                "मुंद्रा (Mundra)",
                "रापर (Rapar)"
            ]
        }
    },
    "RJ": {
        "name": "राजस्थान / Rajasthan",
        "capital": "जयपुर",
        "emoji": "🏰",
        "population": "8.1 Cr",
        "area": "3,42,239 km²",
        "cm": "भजन लाल शर्मा",
        "dbtAmount": "₹29,800 Cr",
        "dbtRating": "91%",
        "districts": {
            "जयपुर (Jaipur)": [
                "आमेर (Amer)",
                "सांगानेर (Sanganer)",
                "चाकसू (Chaksu)",
                "बस्सी (Bassi)",
                "कोटपूतली (Kotputli)",
                "फुलेरा (Phulera)",
                "जमवारामगढ़ (Jamwa Ramgarh)",
                "विराटनगर (Viratnagar)"
            ],
            "जोधपुर (Jodhpur)": [
                "लूणी (Luni)",
                "ओसियां (Osian)",
                "फलोदी (Phalodi)",
                "शेरगढ़ (Shergarh)",
                "भोपालगढ़ (Bhopalgarh)",
                "बिलाड़ा (Bilara)"
            ],
            "कोटा (Kota)": [
                "लाडपुरा (Ladpura)",
                "सांगोद (Sangod)",
                "रामगंजमंडी (Ramganj Mandi)",
                "दीगोद (Digod)",
                "इटावा (Itawa)",
                "कनवास (Kanwas)"
            ],
            "बीकानेर (Bikaner)": [
                "नोखा (Nokha)",
                "लूणकरणसर (Lunkaransar)",
                "डूंगरगढ़ (Dungargarh)",
                "कोलायत (Kolayat)",
                "खाजूवाला (Khajuwala)"
            ],
            "अजमेर (Ajmer)": [
                "ब्यावर (Beawar)",
                "किशनगढ़ (Kishangarh)",
                "नसीराबाद (Nasirabad)",
                "पुष्कर (Pushkar)",
                "केकड़ी (Kekri)",
                "मसूदा (Masuda)"
            ],
            "उदयपुर (Udaipur)": [
                "गिर्वा (Girwa)",
                "मावली (Mavli)",
                "वल्लभनगर (Vallabhnagar)",
                "सलूम्बर (Salumbar)",
                "झाड़ोल (Jhadol)",
                "खेरवाड़ा (Kherwara)"
            ],
            "भीलवाड़ा (Bhilwara)": [
                "मांडलगढ़ (Mandalgarh)",
                "शाहपुरा (Shahpura)",
                "आसींद (Asind)",
                "जहाजपुर (Jahazpur)",
                "गुलाबपुरा (Gulabpura)"
            ],
            "अलवर (Alwar)": [
                "तिजारा (Tijara)",
                "किशनगढ़ बास (Kishangarh Bas)",
                "बहरोड़ (Behror)",
                "थानागाजी (Thanagazi)",
                "राजगढ़ (Rajgarh)",
                "नीमराणा (Neemrana)"
            ]
        }
    },
    "KA": {
        "name": "कर्नाटक / Karnataka",
        "capital": "बेंगलुरु",
        "emoji": "💻",
        "population": "6.8 Cr",
        "area": "1,91,791 km²",
        "cm": "सिद्धारमैया",
        "dbtAmount": "₹33,900 Cr",
        "dbtRating": "94%",
        "districts": {
            "बेंगलुरु शहरी (Bengaluru Urban)": [
                "येलहंका (Yelahanka)",
                "व्हाइटफील्ड (Whitefield)",
                "हेसरघट्टा (Hesarghatta)",
                "बागलूर (Bagalur)",
                "सोनडेकोप्पा (Sondekoppa)",
                "मादनायकानहल्ली (Madnayakanhalli)",
                "काडीगानहल्ली (Kadiganahalli)",
                "बयनडहल्ली (Bayandhalli)",
                "कोरमंगला (Koramangala)",
                "इलेक्ट्रॉनिक सिटी (Electronic City)"
            ],
            "मैसूर (Mysuru)": [
                "नंजनगुड़ (Nanjangud)",
                "हुनसूर (Hunsur)",
                "के.आर. नगर (KR Nagar)",
                "टी. नरसीपुर (T Narasipura)",
                "बेंद्रवाड़ी (Bendravadi)",
                "पिरीयापटना (Piriyapatna)"
            ],
            "हुबली-धारवाड़ (Hubballi-Dharwad)": [
                "कुंदगोल (Kundgol)",
                "नवलगुंड (Navalgund)",
                "कलघटगी (Kalghatgi)",
                "अल्नावर (Alnavar)"
            ],
            "मंगलोर / दक्षिण कन्नड़ (Mangaluru)": [
                "बंतवाल (Bantwal)",
                "पुत्तूर (Puttur)",
                "बेलथंगड़ी (Belthangady)",
                "सुलिया (Sullia)",
                "मूडबिद्री (Moodabidri)"
            ],
            "बेलगावी / बेलगाम (Belagavi)": [
                "गोकक (Gokak)",
                "चिक्कोडी (Chikkodi)",
                "अथणी (Athani)",
                "हुक्केरी (Hukkeri)",
                "बैलहोंगल (Bailhongal)",
                "सौंदत्ती (Saundatti)"
            ],
            "दावणगेरे (Davanagere)": [
                "हरिहर (Harihar)",
                "चन्नागिरी (Channagiri)",
                "होन्नाली (Honnali)",
                "जगलूर (Jagalur)"
            ]
        }
    },
    "TN": {
        "name": "तमिलनाडु / Tamil Nadu",
        "capital": "चेन्नई",
        "emoji": "🛕",
        "population": "7.8 Cr",
        "area": "1,30,058 km²",
        "cm": "एम.के. स्टालिन",
        "dbtAmount": "₹36,700 Cr",
        "dbtRating": "94%",
        "districts": {
            "चेन्नई (Chennai)": [
                "अड्यार (Adyar)",
                "अण्णा नगर (Anna Nagar)",
                "तांबरम (Tambaram)",
                "पल्लवरम (Pallavaram)",
                "अंबत्तूर (Ambattur)",
                "आवादी (Avadi)",
                "तिरुवोट्टियूर (Tiruvottiyur)",
                "वंडालूर (Vandalur)",
                "पोरूर (Porur)",
                "मुगलिवाक्कम (Mugalivakkam)",
                "टी. नगर (T Nagar)"
            ],
            "कोयंबटूर (Coimbatore)": [
                "पोल्लाची (Pollachi)",
                "मेट्टुपालयम (Mettupalayam)",
                "सुलूर (Sulur)",
                "अन्नाूर (Annur)",
                "नादम्पालयम (Nadampalayam)",
                "वालपराई (Valparai)"
            ],
            "मदुरै (Madurai)": [
                "तिरुप्परंगुंद्रम (Tirupparangunram)",
                "मेलूर (Melur)",
                "उसीलाम्पत्ती (Usilampatti)",
                "सोलन कुरुणी (Solankuruni)",
                "नेडुमदुरै (Nedumadurai)",
                "वलैयनकुलम (Valaiyankulam)",
                "वाडिप्पट्टी (Vadipatti)"
            ],
            "तिरुचिरापल्ली (Trichy)": [
                "श्रीरंगम (Srirangam)",
                "लालगुडी (Lalgudi)",
                "मणप्पारई (Manapparai)",
                "गुंडूर (Gundur)",
                "कंबरसम्पेत्तई (Kambarasampettai)",
                "थुरैयूर (Thuraiyur)"
            ],
            "सलेम (Salem)": [
                "अयोध्यापट्टनम (Ayodhyapattanam)",
                "नेयक्कारापट्टी (Neykkarappatti)",
                "पनामरत्तुपट्टी (Panamarattuppatti)",
                "वीरपांडी (Virapandi)",
                "वलसय्यूर (Valasaiyur)",
                "चिन्नानूर (Chinnanur)",
                "मेट्टूर (Mettur)",
                "ओमालूर (Omalur)"
            ],
            "तिरुप्पुर (Tiruppur)": [
                "अविनाशी (Avinashi)",
                "पल्लादम (Palladam)",
                "धारापुरम (Dharapuram)",
                "उदुमलपेट (Udumalaipettai)",
                "कांगेयम (Kangeyam)"
            ],
            "इरोड (Erode)": [
                "भवानी (Bhavani)",
                "गोबिचेट्टीपलायम (Gobichettipalayam)",
                "पेरुंदुरई (Perundurai)",
                "सत्यमंगलम (Sathyamangalam)"
            ],
            "तूतीकोरिन (Thoothukudi)": [
                "पेयनविलाई (Peyanvilai)",
                "तिरुचेंदूर (Tiruchendur)",
                "कोविलपट्टी (Kovilpatti)",
                "ओट्टापिदारम (Ottapidaram)"
            ]
        }
    },
    "TS": {
        "name": "तेलंगाना / Telangana",
        "capital": "हैदराबाद",
        "emoji": "🏛️",
        "population": "3.8 Cr",
        "area": "1,12,077 km²",
        "cm": "रेवंत रेड्डी",
        "dbtAmount": "₹22,400 Cr",
        "dbtRating": "93%",
        "districts": {
            "हैदराबाद (Hyderabad)": [
                "चारमीनार (Charminar)",
                "सिकंदराबाद (Secunderabad)",
                "गच्चीबाउली (Gachibowli)",
                "मलकपेट (Malakpet)",
                "जुबली हिल्स (Jubilee Hills)",
                "हाईटेक सिटी (HITEC City)",
                "बंजारा हिल्स (Banjara Hills)"
            ],
            "मेडचल-मलकाजगिरि (Malkajgiri)": [
                "मलकाजगिरि (Malkajgiri)",
                "अल्वाल (Alwal)",
                "दुंडीगल (Dundigal)",
                "गागिलापुर (Gagilapur)",
                "कुतबुल्लापुर (Quthbullapur)",
                "मेडक (Medchal)",
                "उप्पल (Uppal)"
            ],
            "रंगारेड्डी (Ranga Reddy)": [
                "बंदलागुड़ा (Bandlaguda)",
                "किस्मतपुर (Kismatpur)",
                "ममीदीपल्ली (Mamidipalli)",
                "वत्तिनागुलापल्ली (Wattinagulapalli)",
                "हिमायतसागर (Himayatsagar)",
                "मंचिरेवुला (Manchirevula)",
                "शमशाबाद (Shamshabad)",
                "इब्राहिमपटनम (Ibrahimpatnam)"
            ],
            "वारंगल (Warangal)": [
                "कोंडापर्ती (Kondaparti)",
                "मोगलचर्ला (Mogalcherla)",
                "हसनपर्ती (Hasanparthy)",
                "काजीपेट (Kazipet)",
                "नरसमपेट (Narsampet)",
                "वर्धन्नापेट (Wardhannapet)"
            ],
            "निजामाबाद (Nizamabad)": [
                "आर्मूर (Armoor)",
                "बोधन (Bodhan)",
                "भीमगल (Bheemgal)",
                "वरंगल (Varni)"
            ],
            "करीमनगर (Karimnagar)": [
                "हुजुराबाद (Huzurabad)",
                "मानकोंडूर (Manakondur)",
                "चोपडांडी (Choppadandi)",
                "जम्मीकुंटा (Jammikunta)"
            ]
        }
    },
    "WB": {
        "name": "पश्चिम बंगाल / West Bengal",
        "capital": "कोलकाता",
        "emoji": "🎨",
        "population": "9.7 Cr",
        "area": "88,752 km²",
        "cm": "ममता बनर्जी",
        "dbtAmount": "₹27,500 Cr",
        "dbtRating": "90%",
        "districts": {
            "कोलकाता (Kolkata)": [
                "साल्ट लेक सिटी (Salt Lake)",
                "अलीपुर (Alipore)",
                "भवानीपुर (Bhawanipur)",
                "दमदम (Dum Dum)",
                "टॉलीगंज (Tollygunge)",
                "श्यामबाजार (Shyambazar)",
                "न्यू टाउन (New Town)"
            ],
            "हावड़ा (Howrah)": [
                "बाली (Bally)",
                "उलुबेरिया (Uluberia)",
                "सांकराइल (Sankrail)",
                "पांचला (Panchla)",
                "बगनान (Bagnan)",
                "डुमजोर (Dumjor)",
                "शिबपुर (Shibpur)"
            ],
            "उत्तर 24 परगना (North 24 Parganas)": [
                "बैरकपुर (Barakpur)",
                "भाटपाड़ा (Bhatpara)",
                "पानीहाटी (Panihati)",
                "कमरहटी (Kamarhati)",
                "टीटागढ़ (Titagarh)",
                "खरदह (Khardah)",
                "बारासात (Barasat)",
                "बशीरहाट (Basirhat)"
            ],
            "हुगली (Hooghly)": [
                "चुंचुड़ा (Chunchura)",
                "श्रीरामपुर (Shrirampur)",
                "चंदननगर (Chandannagar)",
                "बांसबेरिया (Bansbaria)",
                "बेगमपुर (Begampur)",
                "चांदीतला (Chanditala)",
                "आरामबाग (Arambagh)",
                "उत्तरपारा (Uttarpara)"
            ],
            "पश्चिम बर्धमान / आसनसोल (Asansol)": [
                "आसनसोल (Asansol)",
                "कुल्टी (Kulti)",
                "रानीगंज (Raniganj)",
                "दुर्गापुर (Durgapur)",
                "जामुरिया (Jamuria)"
            ],
            "मुर्शिदाबाद (Murshidabad)": [
                "बहरामपुर (Baharampur)",
                "धुलियान (Dhulian)",
                "जालदीपुर (Jaladipur)",
                "जाजीग्राम (Jajigram)",
                "इमामनगर (Imamnagar)",
                "बललालपुर (Ballalpur)",
                "लालगोला (Lalgola)",
                "जंगीपुर (Jangipur)"
            ],
            "नदिया / कृष्णानगर (Krishnanagar)": [
                "कृष्णानगर (Krishnanagar)",
                "कल्याणी (Kalyani)",
                "शांतिपुर (Santipur)",
                "रानाघाट (Ranaghat)",
                "दीगनगर (Dignagar)",
                "नवद्वीप (Nabadwip)"
            ],
            "मेदिनीपुर / खड़गपुर (Kharagpur)": [
                "खड़गपुर (Kharagpur)",
                "मेदिनीपुर (Midnapore)",
                "तमलुक (Tamluk)",
                "कोला (Kola)",
                "घाटल (Ghatal)",
                "हल्दिया (Haldia)"
            ]
        }
    },
    "PB": {
        "name": "पंजाब / Punjab",
        "capital": "चंडीगढ़",
        "emoji": "🌾",
        "population": "3.0 Cr",
        "area": "50,362 km²",
        "cm": "भगवंत मान",
        "dbtAmount": "₹19,200 Cr",
        "dbtRating": "92%",
        "districts": {
            "लुधियाना (Ludhiana)": [
                "जग्रांव (Jagraon)",
                "खन्ना (Khanna)",
                "समराला (Samrala)",
                "पायल (Payal)",
                "रायकोट (Raikot)",
                "साहनेवाल (Sahnewal)"
            ],
            "अमृतसर (Amritsar)": [
                "अजनाला (Ajnala)",
                "बाबा बकाला (Baba Bakala)",
                "मजीठा (Majitha)",
                "अटारी (Attari)",
                "छेहरटा (Chheharta)"
            ],
            "मोहाली / एसएएस नगर (Mohali)": [
                "खरड़ (Kharar)",
                "डेराबस्सी (Dera Bassi)",
                "सोहाना (Sohana)",
                "मौली (Mauli)",
                "भाबत (Bhabat)",
                "मनौली (Manauli)",
                "धुराली (Dhurali)",
                "मोटा माजरा (Mota Mazra)",
                "जीरकपुर (Zirakpur)"
            ],
            "जालंधर (Jalandhar)": [
                "नकोदर (Nakodar)",
                "फिल्लौर (Phillaur)",
                "शाहकोट (Shahkot)",
                "आदमपुर (Adampur)",
                "करतारपुर (Kartarpur)"
            ],
            "पटियाला (Patiala)": [
                "नाभा (Nabha)",
                "राजपुरा (Rajpura)",
                "समाना (Samana)",
                "पातड़ां (Patran)",
                "अभयपुर (Abhepur)",
                "सनौर (Sanaur)"
            ],
            "बठिंडा (Bathinda)": [
                "तलवंडी साबो (Talwandi Sabo)",
                "रामपुरा फूल (Rampura Phul)",
                "मौड़ (Maur)",
                "गोनियाना (Goniana)"
            ]
        }
    },
    "HR": {
        "name": "हरियाणा / Haryana",
        "capital": "चंडीगढ़",
        "emoji": "🚜",
        "population": "2.8 Cr",
        "area": "44,212 km²",
        "cm": "नायब सिंह सैनी",
        "dbtAmount": "₹18,500 Cr",
        "dbtRating": "94%",
        "districts": {
            "गुरुग्राम (Gurugram)": [
                "मानेसर (Manesar)",
                "सोहना (Sohna)",
                "पटौदी (Pataudi)",
                "बादशाहपुर (Badshahpur)",
                "फरुखनगर (Farrukhnagar)",
                "डीएलएफ साइबरसिटी (DLF)"
            ],
            "फरीदाबाद (Faridabad)": [
                "बल्लभगढ़ (Ballabgarh)",
                "बड़खल (Badkhal)",
                "धौज (Dhauj)",
                "तिगांव (Tigaon)",
                "धरमपुर (Dharampur)",
                "एनआईटी (NIT)"
            ],
            "पानीपत (Panipat)": [
                "समालखा (Samalkha)",
                "इसराना (Israna)",
                "बापोली (Bapoli)",
                "मतलौडा (Madlauda)"
            ],
            "अंबाला (Ambala)": [
                "बराड़ा (Barara)",
                "नारायणगढ़ (Naraingarh)",
                "शहजादपुर (Shahzadpur)",
                "साहा (Saha)"
            ],
            "करनाल (Karnal)": [
                "घरौंडा (Gharaunda)",
                "असंध (Assandh)",
                "इन्द्री (Indri)",
                "नीलोखेड़ी (Nilokheri)",
                "तरावड़ी (Taraori)"
            ],
            "हिसार (Hisar)": [
                "हांसी (Hansi)",
                "बरवाला (Barwala)",
                "नारनौंद (Narnaund)",
                "आदमपुर (Adampur)",
                "उकलाना (Uklana)"
            ]
        }
    },
    "KL": {
        "name": "केरल / Kerala",
        "capital": "तिरुवनंतपुरम",
        "emoji": "🌴",
        "population": "3.5 Cr",
        "area": "38,852 km²",
        "cm": "पिनाराई विजयन",
        "dbtAmount": "₹16,400 Cr",
        "dbtRating": "96%",
        "districts": {
            "तिरुवनंतपुरम (Trivandrum)": [
                "नेय्याट्टिनकरा (Neyyattinkara)",
                "नेदुमंगड़ (Nedumangad)",
                "कझाकुट्टम (Kazhakkoottam)",
                "आयिरुरपारा (Ayirurpara)",
                "तोनाक्कल (Tonakkal)",
                "मनारा (Mannara)",
                "वर्कला (Varkala)",
                "कोवलम (Kovalam)"
            ],
            "कोच्चि / एर्नाकुलम (Kochi)": [
                "अलुवा (Aluva)",
                "कणयनूर (Kanayannur)",
                "त्रिपुनिथुरा (Tripunittura)",
                "कलमस्सेरी (Kalamasseri)",
                "एडप्पल्ली (Edappalli)",
                "एलांकुन्नपुझा (Elangunnapuzha)",
                "मुलम्पिल्ली (Mulampilli)",
                "वैपीन (Vypin)",
                "फोर्ट कोच्चि (Fort Kochi)"
            ],
            "कोल्लम / क्विलोन (Quilon)": [
                "पुनलूर (Punalur)",
                "कोट्टारक्करा (Kottarakkara)",
                "करुनागपल्ली (Karunagappally)",
                "मय्यनाड (Mayyanad)",
                "मुनरो तुरुत्तु (Munro Turuttu)",
                "पल्लीमन (Palliman)",
                "परवूर (Paravur)"
            ],
            "अलप्पुझा / एलेप्पी (Alleppey)": [
                "चेरथला (Cherthala)",
                "मावेलिक्कारा (Mavelikkara)",
                "अम्बलप्पुझा (Ambalappuzha)",
                "मन्नानचेरी (Mannanchori)",
                "पेरुम्बलम (Perumbalam)",
                "कुट्टनाड (Kuttanad)"
            ],
            "कोझिकोड / कालीकट (Kozhikode)": [
                "वटकरा (Vatakara)",
                "कोयिलांडी (Koyilandy)",
                "तामरस्सेरी (Thamarassery)",
                "बेपोर (Beypore)"
            ],
            "त्रिशूर (Thrissur)": [
                "कन्ननकुलम (Kannankulam)",
                "चवक्कड़ (Chavakkad)",
                "मुकुंदपुरम (Mukundapuram)",
                "कोडुंगल्लूर (Kodungallur)",
                "गुरुवायूर (Guruvayur)"
            ]
        }
    },
    "AP": {
        "name": "आंध्र प्रदेश / AP",
        "capital": "अमरावती",
        "emoji": "🏛️",
        "population": "5.3 Cr",
        "area": "1,62,975 km²",
        "cm": "चंद्रबाबू नायडू",
        "dbtAmount": "₹26,100 Cr",
        "dbtRating": "94%",
        "districts": {
            "विशाखापत्तनम (Vizag)": [
                "अनकापल्ले (Anakapalle)",
                "भीमुनिपटनम (Bheemunipatnam)",
                "गाजुवाका (Gajuwaka)",
                "पेंदुर्ति (Pendurthi)",
                "अराकू घाटी (Araku)"
            ],
            "विजयवाड़ा / एनटीआर (Vijayawada)": [
                "मंगलागिरि (Mangalagiri)",
                "गुड़ीवाड़ा (Gudivada)",
                "नुज्विद (Nuzvid)",
                "अंबापुरम (Ambapuram)",
                "पातापाडु (Patapadu)",
                "इब्राहिमपटनम (Ibrahimpatnam)"
            ],
            "गुंटूर (Guntur)": [
                "तेनाली (Tenali)",
                "सत्तेनापल्ली (Sattenapalle)",
                "नरसरावपेट (Narasaraopet)",
                "सीतानगरम (Sitanagaram)",
                "बापटला (Bapatla)"
            ],
            "तिरुपति (Tirupati)": [
                "श्रीकालहस्ती (Srikalahasti)",
                "चंद्रगिरि (Chandragiri)",
                "नागरी (Nagari)",
                "पुत्तूर (Puttur)"
            ],
            "काकीनाडा (Kakinada)": [
                "पिथापुरम (Pithapuram)",
                "पेद्दापुरम (Peddapuram)",
                "तुनी (Tuni)",
                "समलकोट (Samalkot)"
            ],
            "राजमुंदरी (Rajahmundry)": [
                "कोव्वूर (Kovvur)",
                "अनपर्ती (Anaparthy)",
                "निदादावोलु (Nidadavole)",
                "रामचंद्रपुरम (Ramachandrapuram)"
            ],
            "कडपा (Kadapa)": [
                "पाताकुडपा (Patacudapah)",
                "पुतलमपल्ले (Putlampalle)",
                "तक्कोलु (Takkolu)",
                "राजमपेट (Rajampet)",
                "प्रद्दातूर (Proddatur)"
            ]
        }
    },
    "OD": {
        "name": "ओडिशा / Odisha",
        "capital": "भुवनेश्वर",
        "emoji": "🏖️",
        "population": "4.6 Cr",
        "area": "1,55,707 km²",
        "cm": "मोहन माझी",
        "dbtAmount": "₹17,800 Cr",
        "dbtRating": "92%",
        "districts": {
            "भुवनेश्वर / खोरधा (Bhubaneswar)": [
                "जटनी (Jatni)",
                "बालीपटना (Balipatna)",
                "बेगुनिया (Begunia)",
                "बाणपुर (Banapur)",
                "खंडगिरि (Khandagiri)"
            ],
            "कटक (Cuttack)": [
                "अठगढ़ (Athagarh)",
                "बांकी (Banki)",
                "चौद्वार (Choudwar)",
                "सालेपुर (Salepur)",
                "तिगड़िया (Tigiria)"
            ],
            "राउरकेला / सुंदरगढ़ (Rourkela)": [
                "बड़गांव (Bargaon)",
                "बोनई (Bonai)",
                "राजगांगपुर (Rajgangpur)",
                "बृजराजनगर (Brajarajnagar)",
                "पानपोष (Panposh)"
            ],
            "ब्रह्मपुर / गंजम (Brahmapur)": [
                "छत्रपुर (Chhatrapur)",
                "भंजनगर (Bhanjanagar)",
                "हिंजिलिकट (Hinjilicut)",
                "अस्का (Aska)",
                "गोपालपुर (Gopalpur)"
            ],
            "पुरी (Puri)": [
                "कोणार्क (Konark)",
                "पिपिली (Pipili)",
                "सत्यवादी (Satyabadi)",
                "ब्रह्मगिरि (Brahmagiri)",
                "काकटपुर (Kakatpur)"
            ],
            "बालेश्वर (Balasore)": [
                "जलेश्वर (Jaleswar)",
                "सोरो (Soro)",
                "बस्ता (Basta)",
                "निलगिरि (Nilagiri)",
                "चांदीपुर (Chandipur)"
            ],
            "संबलपुर (Sambalpur)": [
                "बुर्ला (Burla)",
                "हीराकुड (Hirakud)",
                "कुचिंडा (Kuchinda)",
                "रेढ़ाखोल (Rairakhol)"
            ]
        }
    },
    "JH": {
        "name": "झारखंड / Jharkhand",
        "capital": "रांची",
        "emoji": "⛏️",
        "population": "3.9 Cr",
        "area": "79,716 km²",
        "cm": "हेमंत सोरेन",
        "dbtAmount": "₹15,400 Cr",
        "dbtRating": "89%",
        "districts": {
            "रांची (Ranchi)": [
                "कांके (Kanke)",
                "ओरमांझी (Ormanjhi)",
                "पिथौरिया (Pithauria)",
                "रातू (Ratu)",
                "बुढ़मू (Burmu)",
                "सिल्ली (Silli)",
                "डोरंडा (Doranda)",
                "हटिया (Hatia)"
            ],
            "जमशेदपुर / पूर्वी सिंहभूम (Jamshedpur)": [
                "साकची (Sakchi)",
                "बिष्टुपुर (Bishtupur)",
                "घाटशिला (Ghatshila)",
                "पोटका (Potka)",
                "पटमदा (Patamda)",
                "मुसाबनी (Musabani)",
                "मानगो (Mango)"
            ],
            "धनबाद (Dhanbad)": [
                "झरिया (Jharia)",
                "बाघमारा (Baghmara)",
                "निरसा (Nirsa)",
                "टुंडी (Tundi)",
                "हरिलाडीह (Hariladih)",
                "चिरकुंडा (Chirkunda)",
                "गोविंदपुर (Govindpur)"
            ],
            "बोकारो स्टील सिटी (Bokaro)": [
                "चास (Chas)",
                "बेरमो (Bermo)",
                "गोमिया (Gomia)",
                "चंदनकियारी (Chandankiyari)",
                "फुसरो (Phusro)"
            ],
            "देवघर (Deoghar)": [
                "मधुपुर (Madhupur)",
                "सारठ (Sarath)",
                "देवीपुर (Devipur)",
                "मोहनपुर (Mohanpur)"
            ],
            "हजारीबाग (Hazaribagh)": [
                "बरही (Barhi)",
                "बड़कागांव (Barkagaon)",
                "चौपारण (Chauparan)",
                "इचाक (Ichak)"
            ]
        }
    },
    "AS": {
        "name": "असम / Assam",
        "capital": "दिसपुर",
        "emoji": "☕",
        "population": "3.5 Cr",
        "area": "78,438 km²",
        "cm": "हिमंत विश्व शर्मा",
        "dbtAmount": "₹13,200 Cr",
        "dbtRating": "91%",
        "districts": {
            "गुवाहाटी / कामरूप मेट्रो (Guwahati)": [
                "दिसपुर (Dispur)",
                "जलुकबारी (Jalukbari)",
                "सोनापुर (Sonapur)",
                "पल्टन बाजार (Paltan Bazar)",
                "नारंगी (Narengi)",
                "खानापारा (Khanapara)"
            ],
            "डिब्रूगढ़ (Dibrugarh)": [
                "नाहरकटिया (Naharkatia)",
                "चाबुआ (Chabua)",
                "मोरन (Moran)",
                "टिंगखोंग (Tingkhong)",
                "दुलियाजान (Duliajan)"
            ],
            "सिलचर / कछार (Silchar)": [
                "सोनई (Sonai)",
                "धोलाई (Dholai)",
                "उधारबोंड (Udharbond)",
                "काटीगोरा (Katigorah)",
                "लखीपुर (Lakhipur)"
            ],
            "जोरहाट (Jorhat)": [
                "टीटाबार (Titabar)",
                "माजुली (Majuli)",
                "मरियनी (Mariani)",
                "तेओक (Teok)"
            ],
            "तेजपुर / शोणितपुर (Tezpur)": [
                "ढेकिआजुली (Dhekiajuli)",
                "रंगपारा (Rangapara)",
                "जामुगुरीहाट (Jamugurihat)"
            ]
        }
    },
    "UK": {
        "name": "उत्तराखंड / Uttarakhand",
        "capital": "देहरादून",
        "emoji": "🏔️",
        "population": "1.1 Cr",
        "area": "53,483 km²",
        "cm": "पुष्कर सिंह धामी",
        "dbtAmount": "₹8,400 Cr",
        "dbtRating": "92%",
        "districts": {
            "देहरादून (Dehradun)": [
                "ऋषिकेश (Rishikesh)",
                "विकासनगर (Vikasnagar)",
                "डोईवाला (Doiwala)",
                "हरबटपुर (Harbatpur)",
                "सौंधोंवाली (Saundhonwali)",
                "मसूरी (Mussoorie)",
                "चकराता (Chakrata)"
            ],
            "हरिद्वार (Haridwar)": [
                "रुड़की (Roorkee)",
                "लक्सर (Laksar)",
                "भगवानपुर (Bhagwanpur)",
                "गुमानवाला (Gumanwala)",
                "ज्वालापुर (Jwalapur)",
                "मंगलौर (Manglaur)"
            ],
            "उधम सिंह नगर (US Nagar)": [
                "काशीपुर (Kashipur)",
                "रुद्रपुर (Rudrapur)",
                "किच्छा (Kichha)",
                "महुआखेड़ागंज (Mahuakheraganj)",
                "नगला (Nagla)",
                "जसपुर (Jaspur)",
                "बाजपुर (Bazpur)",
                "खटीमा (Khatima)"
            ],
            "नैनीताल (Nainital)": [
                "हल्द्वानी (Haldwani)",
                "रामनगर (Ramnagar)",
                "कमलवागांजा (Kamalwaganja)",
                "मदनपुर (Madanpur)",
                "भीमताल (Bhimtal)",
                "लालकुआं (Lalkuan)"
            ],
            "अल्मोड़ा (Almora)": [
                "रानीखेत (Ranikhet)",
                "द्वाराहाट (Dwarahat)",
                "सोमेश्वर (Someshwar)",
                "भिकियासैंण (Bhikiyasain)"
            ]
        }
    },
    "HP": {
        "name": "हिमाचल प्रदेश / Himachal",
        "capital": "शिमला",
        "emoji": "🏔️",
        "population": "75 Lakh",
        "area": "55,673 km²",
        "cm": "सुखविंदर सिंह सुक्खू",
        "dbtAmount": "₹6,400 Cr",
        "dbtRating": "92%",
        "districts": {
            "शिमला (Shimla)": [
                "कुफरी (Kufri)",
                "रोहड़ू (Rohru)",
                "रामपुर (Rampur)",
                "चौपाल (Chopal)",
                "ठियोग (Theog)",
                "संजौली (Sanjauli)"
            ],
            "कांगड़ा / धर्मशाला (Dharamshala)": [
                "पालमपुर (Palampur)",
                "नूरपुर (Nurpur)",
                "ज्वालामुखी (Jwalamukhi)",
                "देहरा (Dehra)",
                "बैजनाथ (Baijnath)"
            ],
            "मंडी (Mandi)": [
                "सुंदरनगर (Sundernagar)",
                "सरकाघाट (Sarkaghat)",
                "जोगिंदरनगर (Jogindernagar)",
                "करसोग (Karsog)"
            ],
            "कुल्लू (Kullu)": [
                "मनाली (Manali)",
                "बंजार (Banjar)",
                "आनी (Anni)",
                "भुंतर (Bhuntar)"
            ],
            "सोलन (Solan)": [
                "कसौली (Kasauli)",
                "नालागढ़ (Nalagarh)",
                "बद्दी (Baddi)",
                "कंडाघाट (Kandaghat)"
            ]
        }
    },
    "CT": {
        "name": "छत्तीसगढ़ / Chhattisgarh",
        "capital": "रायपुर",
        "emoji": "🌾",
        "population": "3.0 Cr",
        "area": "1,35,192 km²",
        "cm": "विष्णु देव साय",
        "dbtAmount": "₹14,900 Cr",
        "dbtRating": "91%",
        "districts": {
            "रायपुर (Raipur)": [
                "अभनपुर (Abhanpur)",
                "आरंग (Arang)",
                "धरसींवा (Dharsiwa)",
                "तिल्दा (Tilda)",
                "नवा रायपुर (Nava Raipur)"
            ],
            "बिलासपुर (Bilaspur)": [
                "कोटा (Kota)",
                "तखतपुर (Takhatpur)",
                "मस्तुरी (Masturi)",
                "बिल्हा (Bilha)",
                "रतनपुर (Ratanpur)"
            ],
            "दुर्ग / भिलाई (Durg-Bhilai)": [
                "पाटन (Patan)",
                "धमधा (Dhamdha)",
                "भिलाई नगर (Bhilai)",
                "कुम्हारी (Kumhari)"
            ],
            "कोरबा (Korba)": [
                "कटघोरा (Katghora)",
                "पाली (Pali)",
                "पोड़ी उपरोड़ा (Podi)",
                "दीपका (Deepka)"
            ],
            "गोरखपुर / कबीरधाम (Gorakhpur)": [
                "कवर्धा (Kawardha)",
                "पंडरिया (Pandariya)",
                "सहसपुर लोहारा (Sohara)"
            ]
        }
    },
    "GA": {
        "name": "गोवा / Goa",
        "capital": "पणजी",
        "emoji": "🏖️",
        "population": "15 Lakh",
        "area": "3,702 km²",
        "cm": "प्रमोद सावंत",
        "dbtAmount": "₹2,800 Cr",
        "dbtRating": "95%",
        "districts": {
            "उत्तर गोवा / पणजी (Panaji)": [
                "मापुसा (Mapusa)",
                "कैलांगूट (Calangute)",
                "बिचोलिम (Bicholim)",
                "पोंडा (Ponda)",
                "पेरनेम (Pernem)"
            ],
            "दक्षिण गोवा / मडगांव (Margao)": [
                "वास्को द गामा (Vasco)",
                "मुरगांव (Mormugao)",
                "क्यूपेम (Quepem)",
                "कैनकोना (Canacona)",
                "सांगुएम (Sanguem)"
            ]
        }
    },
    "JK": {
        "name": "जम्मू-कश्मीर / J&K (UT)",
        "capital": "श्रीनगर",
        "emoji": "🏔️",
        "population": "1.4 Cr",
        "area": "42,241 km²",
        "cm": "मनोज सिन्हा (LG)",
        "dbtAmount": "₹8,900 Cr",
        "dbtRating": "93%",
        "districts": {
            "श्रीनगर (Srinagar)": [
                "गुलमर्ग (Gulmarg)",
                "हजरतबल (Hazratbal)",
                "बटमालू (Batmaloo)",
                "पंपोर (Pampur)",
                "सोटुर (Sotur)",
                "लाल चौक (Lal Chowk)",
                "डालगेट (Dalgate)"
            ],
            "जम्मू (Jammu)": [
                "अखनूर (Akhnoor)",
                "आर.एस. पुरा (RS Pura)",
                "बिश्नाह (Bishnah)",
                "बाहु (Bahu)",
                "गांधी नगर (Gandhi Nagar)"
            ],
            "अनंतनाग (Anantnag)": [
                "पहलगाम (Pahalgam)",
                "कोकरनाग (Kokernag)",
                "डोरू (Dooru)",
                "बिजबिहाड़ा (Bijbehara)"
            ],
            "बारामूला (Baramulla)": [
                "सोपोर (Sopore)",
                "पट्टन (Pattan)",
                "उरी (Uri)",
                "तंगमर्ग (Tangmarg)"
            ]
        }
    },
    "DL": {
        "name": "दिल्ली एनसीआर / Delhi NCR",
        "capital": "नई दिल्ली",
        "emoji": "🏛️",
        "population": "3.3 Cr",
        "area": "1,484 km²",
        "cm": "रेखा गुप्ता",
        "dbtAmount": "₹14,200 Cr",
        "dbtRating": "96%",
        "districts": {
            "नई दिल्ली (New Delhi)": [
                "कनॉट प्लेस (Connaught Place)",
                "चाणक्यपुरी (Chanakyapuri)",
                "दिल्ली कैंट (Delhi Cantt)",
                "वसंत विहार (Vasant Vihar)",
                "इंडिया गेट (India Gate)"
            ],
            "दक्षिण दिल्ली (South Delhi)": [
                "हौज खास (Hauz Khas)",
                "साकेत (Saket)",
                "महरौली (Mehrauli)",
                "मदनगीर (Madangir)",
                "ग्रेटर कैलाश (GK)",
                "लाजपत नगर (Lajpat Nagar)"
            ],
            "पश्चिम दिल्ली (West Delhi)": [
                "नजफगढ़ (Najafgarh)",
                "नांगलोई जाट (Nangloi Jat)",
                "सुल्तानपुर माजरा (Sultanpur)",
                "खैर (Kair)",
                "जनकपुरी (Janakpuri)",
                "राजौरी गार्डन (Rajouri Garden)"
            ],
            "उत्तर दिल्ली (North Delhi)": [
                "नरेला (Narela)",
                "भलस्वा जहाँगीरपुर (Bhalswa)",
                "बख्तावरपुर (Bakhtawarpur)",
                "दरियापुर कलां (Daryapur Kalan)",
                "मॉडल टाउन (Model Town)",
                "सिविल लाइंस (Civil Lines)"
            ],
            "पूर्वी दिल्ली (East Delhi)": [
                "दल्लूपुरा (Dalupura)",
                "मंडोली (Mandoli)",
                "मयूर विहार (Mayur Vihar)",
                "लक्ष्मी नगर (Laxmi Nagar)",
                "प्रीत विहार (Preet Vihar)"
            ]
        }
    },
    "CH": {
        "name": "चंडीगढ़ / Chandigarh (UT)",
        "capital": "चंडीगढ़",
        "emoji": "🏛️",
        "population": "11 Lakh",
        "area": "114 km²",
        "cm": "प्रशासक (UT)",
        "dbtAmount": "₹1,200 Cr",
        "dbtRating": "96%",
        "districts": {
            "चंडीगढ़ नगर (Chandigarh)": [
                "सेक्टर 17 (Sector 17)",
                "मनीमाजरा (Manimajra)",
                "धनास (Dhanas)",
                "बहलोलपुर (Bahlolpur)",
                "तोगन (Togan)",
                "सेक्टर 35 (Sector 35)"
            ]
        }
    },
    "PY": {
        "name": "पुडुचेरी / Puducherry (UT)",
        "capital": "पुडुचेरी",
        "emoji": "🏖️",
        "population": "13 Lakh",
        "area": "479 km²",
        "cm": "एन. रंगासामी",
        "dbtAmount": "₹1,400 Cr",
        "dbtRating": "94%",
        "districts": {
            "पुडुचेरी (Pondicherry)": [
                "उलघारेट (Oulgaret)",
                "ओझुकरै (Ozhukarai)",
                "विलियानूर (Villianur)",
                "बाउर (Bahour)",
                "व्हाइट टाउन (White Town)"
            ],
            "कराईकल (Karaikal)": [
                "कोट्टुचेरी (Kottucherry)",
                "नेडुंगाडु (Nedungadu)",
                "तिरुमलरयनपट्टिनम (TR Pattinam)"
            ]
        }
    },
    "MN": {
        "name": "मणिपुर / Manipur",
        "capital": "इम्फाल",
        "emoji": "⛰️",
        "population": "32 Lakh",
        "area": "22,327 km²",
        "cm": "एन. बीरेन सिंह",
        "dbtAmount": "₹2,100 Cr",
        "dbtRating": "90%",
        "districts": {
            "इम्फाल पश्चिम (Imphal West)": [
                "लम्फेलपत (Lamphelpat)",
                "पटसोई (Patsoi)",
                "वांगोई (Wangoi)"
            ],
            "इम्फाल पूर्व (Imphal East)": [
                "पोरोमपत (Porompat)",
                "सवामबुंग (Sawombung)",
                "अंद्रो (Andro)"
            ],
            "थौबल (Thoubal)": [
                "ककचिंग (Kakching)",
                "लिलोंग (Lilong)",
                "याइरिपोक (Yairipok)"
            ],
            "चुराचांदपुर (Churachandpur)": [
                "तुईबोंग (Tuibong)",
                "सिंगहाट (Singngat)"
            ]
        }
    },
    "ML": {
        "name": "मेघालय / Meghalaya",
        "capital": "शिलांग",
        "emoji": "🌧️",
        "population": "33 Lakh",
        "area": "22,429 km²",
        "cm": "कॉनराड संगमा",
        "dbtAmount": "₹2,300 Cr",
        "dbtRating": "91%",
        "districts": {
            "पूर्वी खासी हिल्स / शिलांग (Shillong)": [
                "सोहरा (Sohra/Cherrapunji)",
                "मावफ्लांग (Mawphlang)",
                "पाइनुरस्ला (Pynursla)",
                "मावकिरवाट (Mawkyrwat)"
            ],
            "पश्चिम गारो हिल्स / तुरा (Tura)": [
                "तुरा (Tura)",
                "डालू (Dalu)",
                "रोंगराम (Rongram)",
                "फुलबारी (Phulbari)"
            ],
            "जयंतिया हिल्स / जोवाई (Jowai)": [
                "जोवाई (Jowai)",
                "अमलेरेम (Amlarem)",
                "खलीहरियात (Khliehriat)"
            ]
        }
    },
    "NL": {
        "name": "नागालैंड / Nagaland",
        "capital": "कोहिमा",
        "emoji": "⛰️",
        "population": "22 Lakh",
        "area": "16,579 km²",
        "cm": "नेफ्यू रियू",
        "dbtAmount": "₹1,800 Cr",
        "dbtRating": "90%",
        "districts": {
            "कोहिमा (Kohima)": [
                "जोतसेमा (Jotsema)",
                "चेचामे (Chechame)",
                "त्सेमिन्यु (Tseminyu)",
                "जखमा (Jakhama)"
            ],
            "दीमापुर (Dimapur)": [
                "चुमुकेदिमा (Chumukedima)",
                "मेदजिफेमा (Medziphema)",
                "निहुतो (Nihuto)"
            ],
            "मोकोकचुंग (Mokokchung)": [
                "तुली (Tuli)",
                "चांगतोंग्या (Changtongya)",
                "मांगकोलेम्बा (Mangkolemba)"
            ]
        }
    },
    "TR": {
        "name": "त्रिपुरा / Tripura",
        "capital": "अगरतला",
        "emoji": "🏛️",
        "population": "40 Lakh",
        "area": "10,491 km²",
        "cm": "माणिक साहा",
        "dbtAmount": "₹3,100 Cr",
        "dbtRating": "92%",
        "districts": {
            "पश्चिम त्रिपुरा / अगरतला (Agartala)": [
                "रानिरबाजार (Ranirbazar)",
                "मोहनपुर (Mohanpur)",
                "जिरानिया (Jirania)",
                "सदर (Sadar)"
            ],
            "गोमती / उदयपुर (Udaipur)": [
                "उदयपुर (Udaipur)",
                "अमरपुर (Amarpur)",
                "काकड़ाबन (Kakraban)"
            ],
            "उत्तर त्रिपुरा / धर्मनगर (Dharmanagar)": [
                "धर्मनगर (Dharmanagar)",
                "पानीसागर (Panisagar)",
                "कंचनपुर (Kanchanpur)"
            ]
        }
    },
    "SK": {
        "name": "सिक्किम / Sikkim",
        "capital": "गंगटोक",
        "emoji": "🏔️",
        "population": "7 Lakh",
        "area": "7,096 km²",
        "cm": "प्रेम सिंह तामांग",
        "dbtAmount": "₹950 Cr",
        "dbtRating": "95%",
        "districts": {
            "पूर्वी सिक्किम / गंगटोक (Gangtok)": [
                "तादोंग (Tadong)",
                "रानिपूल (Ranipool)",
                "पाकयोंग (Pakyong)",
                "सिंगतम (Singtam)"
            ],
            "पश्चिम सिक्किम / ग्यालशिंग (Gyalshing)": [
                "पेल्लिंग (Pelling)",
                "युक्सोम (Yuksom)",
                "डेंटम (Dentan)"
            ],
            "दक्षिण सिक्किम / नामची (Namchi)": [
                "नामची (Namchi)",
                "जोरथांग (Jorethang)",
                "रावंगला (Ravangla)"
            ]
        }
    },
    "MZ": {
        "name": "मिजोरम / Mizoram",
        "capital": "आइजोल",
        "emoji": "⛰️",
        "population": "12 Lakh",
        "area": "21,081 km²",
        "cm": "लालदुहोमा",
        "dbtAmount": "₹1,500 Cr",
        "dbtRating": "93%",
        "districts": {
            "आइजोल (Aizawl)": [
                "दर्लावन (Darlawn)",
                "सैरांग (Sairang)",
                "त्लुंगवेल (Tlungvel)",
                "दौपुई (Dawrpui)"
            ],
            "लुंगलेई (Lunglei)": [
                "हनाहथियाल (Hnahthial)",
                "तुईपांग (Tuipang)",
                "तलाबुंग (Tlabung)"
            ],
            "चम्फाई (Champhai)": [
                "खॉजावल (Khawzawl)",
                "नगोपा (Ngopa)"
            ]
        }
    },
    "AR": {
        "name": "अरुणाचल प्रदेश / Arunachal",
        "capital": "ईटानगर",
        "emoji": "🏔️",
        "population": "15 Lakh",
        "area": "83,743 km²",
        "cm": "पेमा खांडू",
        "dbtAmount": "₹2,400 Cr",
        "dbtRating": "91%",
        "districts": {
            "ईटानगर राजधानी परिसर (Itanagar)": [
                "नाहरलगुन (Naharlagun)",
                "बंदरदेवा (Banderdewa)",
                "दोइमुख (Doimukh)",
                "गंगा (Ganga)"
            ],
            "तवांग (Tawang)": [
                "जंग (Jang)",
                "लुमला (Lumla)",
                "मुक्तो (Mukto)"
            ],
            "पासीघाट / पूर्वी सियांग (Pasighat)": [
                "पासीघाट (Pasighat)",
                "रुक्सिन (Ruksin)",
                "मेबो (Mebo)"
            ],
            "लोअर सुबनसिरी / जीरो (Ziro)": [
                "जीरो (Ziro)",
                "याचूली (Yachuli)",
                "रागा (Raga)"
            ]
        }
    },
    "LA": {
        "name": "लद्दाख / Ladakh (UT)",
        "capital": "लेह",
        "emoji": "🏔️",
        "population": "3 Lakh",
        "area": "59,146 km²",
        "cm": "उपराज्यपाल (UT)",
        "dbtAmount": "₹680 Cr",
        "dbtRating": "94%",
        "districts": {
            "लेह (Leh)": [
                "नुब्रा घाटी (Nubra)",
                "खालत्से (Khaltsi)",
                "चांगथांग (Changthang)",
                "डिस्कित (Diskit)",
                "चोगलमसर (Choglamsar)"
            ],
            "कारगिल (Kargil)": [
                "द्रास (Dras)",
                "जांस्कर (Zanskar)",
                "संखू (Sankoo)",
                "शिकार (Shakar)"
            ]
        }
    },
    "DD": {
        "name": "दादरा एवं नगर हवेली और दमन-दीव (UT)",
        "capital": "दमन",
        "emoji": "🏖️",
        "population": "6 Lakh",
        "area": "603 km²",
        "cm": "प्रशासक (UT)",
        "dbtAmount": "₹750 Cr",
        "dbtRating": "94%",
        "districts": {
            "दमन (Daman)": [
                "नानी दमन (Nani Daman)",
                "मोती दमन (Moti Daman)",
                "कडिया (Kadaiya)",
                "दाभेल (Dabhel)"
            ],
            "दीव (Diu)": [
                "घोघला (Ghoghla)",
                "बुचरवाड़ा (Bucherwada)",
                "वानकबारा (Vanakbara)"
            ],
            "सिलवासा / दादरा नगर हवेली (Silvassa)": [
                "सिलवासा (Silvassa)",
                "नरोली (Naroli)",
                "राखोली (Rakholi)",
                "खानवेल (Khanvel)"
            ]
        }
    },
    "AN": {
        "name": "अंडमान निकोबार / A&N (UT)",
        "capital": "पोर्ट ब्लेयर",
        "emoji": "🏝️",
        "population": "4 Lakh",
        "area": "8,249 km²",
        "cm": "उपराज्यपाल (UT)",
        "dbtAmount": "₹490 Cr",
        "dbtRating": "93%",
        "districts": {
            "दक्षिण अंडमान / पोर्ट ब्लेयर (Port Blair)": [
                "गराचरमा (Garacharma)",
                "फेरागुंज (Ferrargunj)",
                "हैवलॉक / स्वराज द्वीप (Havelock)",
                "नील द्वीप (Neil Island)"
            ],
            "उत्तर एवं मध्य अंडमान (Mayabunder)": [
                "मायाबंदर (Mayabunder)",
                "डिगलीपुर (Diglipur)",
                "रंगत (Rangat)"
            ],
            "निकोबार (Nicobar)": [
                "कार निकोबार (Car Nicobar)",
                "ग्रेट निकोबार (Great Nicobar)",
                "कमोर्टा (Kamorta)"
            ]
        }
    },
    "LD": {
        "name": "लक्षद्वीप / Lakshadweep (UT)",
        "capital": "कवारत्ती",
        "emoji": "🏝️",
        "population": "70,000",
        "area": "32 km²",
        "cm": "प्रशासक (UT)",
        "dbtAmount": "₹120 Cr",
        "dbtRating": "95%",
        "districts": {
            "कवारत्ती (Kavaratti)": [
                "अगाती (Agatti)",
                "अमीनी (Amini)",
                "एंड्रोट (Andrott)",
                "मिनिकॉय (Minicoy)",
                "कदमत (Kadmat)",
                "कल्पेनी (Kalpeni)",
                "चेतलात (Chetlat)"
            ]
        }
    }
};

let currentSelectedStateCode = null;
let currentSelectedDistrict = null;
let currentSelectedVillage = null;
let currentFontSizePx = 16;
let currentRegionFilter = 'ALL';
let currentServiceCategory = 'ALL';
let currentHeatmapMode = 'standard';

// ============================================================
// 1. SAFE REDIRECTION & CYBER SECURITY VERIFICATION ENGINE
// ============================================================
window.triggerSafeRedirect = function(targetUrl, portalName, mirrorUrl = '', voiceNote = '') {
    const modal = document.getElementById('safe-redirect-modal');
    if (!modal) {
        window.open(targetUrl, '_blank');
        return;
    }

    document.getElementById('safe-portal-name').textContent = portalName || (currentLang === 'EN' ? 'Official Government Portal' : 'आधिकारिक सरकारी पोर्टल');
    document.getElementById('safe-portal-url').textContent = targetUrl;
    
    const proceedBtn = document.getElementById('safe-proceed-btn');
    if (proceedBtn) proceedBtn.href = targetUrl;

    const mirrorSection = document.getElementById('safe-mirror-section');
    const mirrorLink = document.getElementById('safe-mirror-link');
    if (mirrorUrl && mirrorSection && mirrorLink) {
        mirrorSection.classList.remove('hidden');
        mirrorLink.href = mirrorUrl;
    } else if (mirrorSection) {
        mirrorSection.classList.add('hidden');
    }

    modal.classList.remove('hidden');

    if (voiceNote) {
        window.speakText(voiceNote);
    } else {
        window.speakText(currentLang === 'EN' ? `Opening official verified portal for ${portalName}.` : `${portalName} का आधिकारिक सरकारी पोर्टल खोला जा रहा है।`);
    }
};

window.closeSafeRedirectModal = function() {
    const modal = document.getElementById('safe-redirect-modal');
    if (modal) modal.classList.add('hidden');
};

window.openPrivacySecurityModal = function() {
    const modal = document.getElementById('privacy-security-modal');
    if (modal) modal.classList.remove('hidden');
    window.speakText(currentLang === 'EN' ? 'Data security policy. CITYWISE AI never stores Aadhaar or banking credentials.' : "डेटा सुरक्षा नीति। सिटीवाइज़ एआई कोई आधार या बैंक पासवर्ड स्टोर नहीं करता।");
};

window.closePrivacySecurityModal = function() {
    const modal = document.getElementById('privacy-security-modal');
    if (modal) modal.classList.add('hidden');
};

// ============================================================
// 2. CLEAN STATE EXPLORER MAP ENGINE
// ============================================================
function initCleanStateMap() {
    renderMapStatesList();
    renderQuickScrollStrip();
}

function renderQuickScrollStrip() {
    const container = document.getElementById('map-quick-scroll-strip');
    if (!container) return;

    let html = '';
    Object.keys(STATE_DB).forEach(code => {
        const s = STATE_DB[code];
        let subText = currentHeatmapMode === 'dbt' ? s.dbtAmount : (currentHeatmapMode === 'civic' ? s.dbtRating : s.capital);
        html += `<button class="quick-state-pill" onclick="onMapStateClick('${code}')">
            ${s.emoji} ${s.name.split('/')[0]} <span style="opacity:0.75;font-weight:400;">(${subText})</span>
        </button>`;
    });
    container.innerHTML = html;
}

window.setMapHeatmapMode = function(mode, btnEl) {
    currentHeatmapMode = mode;
    const btns = document.querySelectorAll('.map-mode-btn');
    btns.forEach(b => b.classList.remove('active'));
    if (btnEl) btnEl.classList.add('active');

    renderMapStatesList();
    renderQuickScrollStrip();

    if (mode === 'dbt') window.speakText(currentLang === 'EN' ? 'DBT funding rank mode active.' : 'डीबीटी फंड रैंकिंग मोड सक्रिय।');
    else if (mode === 'civic') window.speakText(currentLang === 'EN' ? 'Civic satisfaction rate ranking active.' : 'सुशासन संतुष्टि दर रैंकिंग सक्रिय।');
    else window.speakText(currentLang === 'EN' ? 'All 36 States and UTs active.' : 'सभी राज्य एवं केंद्र शासित प्रदेश सक्रिय।');
};

window.resetMapToAllIndia = function() {
    currentSelectedStateCode = null;
    currentSelectedDistrict = null;
    currentSelectedVillage = null;
    document.getElementById('bc-state').textContent = 'राज्य (State)';
    document.getElementById('bc-district').textContent = 'ज़िला (District)';
    document.getElementById('bc-village').textContent = 'गाँव (Village)';
    document.getElementById('bc-state').classList.remove('active');
    document.getElementById('bc-district').classList.remove('active');
    document.getElementById('bc-village').classList.remove('active');
    backToStep(1);
    window.speakText(currentLang === 'EN' ? 'All India map reset.' : 'संपूर्ण भारत नक्शा रीसेट किया गया।');
};

// ============================================================
// 3. REALTIME DBT TRACKER & CHART.JS INTEGRATION
// ============================================================
let dbtStateChartInstance = null;
let dbtSectorChartInstance = null;
let dbtLiveInterval = null;

function initDBTCharts() {
    const stateCtx = document.getElementById('dbtStateChart');
    const sectorCtx = document.getElementById('dbtSectorChart');
    if (!stateCtx || !sectorCtx || dbtStateChartInstance || !window.Chart) return;

    try {
        dbtStateChartInstance = new Chart(stateCtx, {
            type: 'bar',
            data: {
                labels: ['उत्तर प्रदेश', 'महाराष्ट्र', 'मध्य प्रदेश', 'तमिलनाडु', 'गुजरात', 'कर्नाटक', 'बिहार', 'राजस्थान', 'आंध्र प्रदेश', 'तेलंगाना'],
                datasets: [{
                    label: 'DBT अंतरित राशि (₹ Crore)',
                    data: [54200, 48900, 38400, 36700, 34100, 33900, 32600, 29800, 26100, 22400],
                    backgroundColor: [
                        '#6366f1', '#8b5cf6', '#10b981', '#f59e0b', '#38bdf8',
                        '#ec4899', '#14b8a6', '#f97316', '#a855f7', '#06b6d4'
                    ],
                    borderRadius: 6
                }]
            },
            options: {
                responsive: true,
                maintainAspectRatio: false,
                plugins: {
                    legend: { display: false }
                },
                scales: {
                    y: { grid: { color: 'rgba(255,255,255,0.06)' }, ticks: { color: '#9ca3af' } },
                    x: { grid: { display: false }, ticks: { color: '#9ca3af', font: { size: 10 } } }
                }
            }
        });

        dbtSectorChartInstance = new Chart(sectorCtx, {
            type: 'doughnut',
            data: {
                labels: ['कृषि कल्याण (38%)', 'महिला विकास (28%)', 'स्वास्थ्य बीमा (18%)', 'आवास (10%)', 'युवा स्वरोजगार (6%)'],
                datasets: [{
                    data: [38, 28, 18, 10, 6],
                    backgroundColor: ['#10b981', '#ec4899', '#38bdf8', '#f59e0b', '#8b5cf6'],
                    borderWidth: 0
                }]
            },
            options: {
                responsive: true,
                maintainAspectRatio: false,
                plugins: {
                    legend: { position: 'bottom', labels: { color: '#9ca3af', font: { size: 10 } } }
                }
            }
        });

        initDBTLiveFeed();
    } catch(err) {}
}

const SAMPLE_BENEFICIARIES = [
    { name: 'सुनीता देवी', dist: 'सीहोर, MP', scheme: 'लाड़ली बहना योजना', amt: '₹1,250' },
    { name: 'रामेश्वर पटेल', dist: 'वाराणसी, UP', scheme: 'PM-KISAN किश्त', amt: '₹2,000' },
    { name: 'विकास शर्मा', dist: 'पटना, Bihar', scheme: 'स्टूडेंट क्रेडिट कार्ड', amt: '₹25,000' },
    { name: 'अशोक गायकवाड़', dist: 'नासिक, MH', scheme: 'नमो शेतकरी योजना', amt: '₹2,000' },
    { name: 'कौशल्या बाई', dist: 'जयपुर, RJ', scheme: 'आयुष्मान आरोग्य बीमा', amt: '₹12,400' },
    { name: 'मोहम्मद आरिफ', dist: 'भोपाल, MP', scheme: 'सीखो-कमाओ स्टाइपेंड', amt: '₹8,000' }
];

function initDBTLiveFeed() {
    const list = document.getElementById('dbt-live-feed-list');
    if (!list) return;

    list.innerHTML = SAMPLE_BENEFICIARIES.slice(0, 3).map(b => createFeedItemHtml(b)).join('');

    clearInterval(dbtLiveInterval);
    dbtLiveInterval = setInterval(() => {
        const item = SAMPLE_BENEFICIARIES[Math.floor(Math.random() * SAMPLE_BENEFICIARIES.length)];
        const el = document.createElement('div');
        el.innerHTML = createFeedItemHtml(item);
        list.prepend(el.firstElementChild);
        if (list.children.length > 5) {
            list.removeChild(list.lastChild);
        }
    }, 3200);
}

function createFeedItemHtml(b) {
    return `<div class="dbt-feed-item">
        <div>
            <span class="dbt-feed-user">👤 ${b.name}</span> <small style="color:var(--text-muted);">(${b.dist})</small>
            <div class="dbt-feed-scheme">🎯 ${b.scheme}</div>
        </div>
        <div style="text-align:right;">
            <div class="dbt-feed-amount">${b.amt}</div>
            <span class="dbt-feed-time"><i class="fa-solid fa-clock"></i> Just Now (DBT)</span>
        </div>
    </div>`;
}

// ============================================================
// 4. SECURED WHATSAPP & SMS SCHEME NOTIFICATION BOT
// ============================================================
window.openWhatsAppModal = function() {
    const modal = document.getElementById('whatsapp-modal');
    if (modal) modal.classList.remove('hidden');
    window.speakText(currentLang === 'EN' ? "WhatsApp Scheme Alerts. Enter your number to activate notifications." : "व्हाट्सएप योजना अलर्ट्स। अपना नंबर दर्ज करके सरकारी योजना अपडेट्स प्राप्त करें।");
};

window.closeWhatsAppModal = function() {
    const modal = document.getElementById('whatsapp-modal');
    if (modal) modal.classList.add('hidden');
};

window.submitWhatsAppSubscription = function() {
    const phoneInput = document.getElementById('wa-phone-input');
    const phone = phoneInput ? phoneInput.value.trim().replace(/[^0-9]/g, '') : '';
    const consentCheck = document.getElementById('wa-consent-check');

    if (phone.length !== 10) {
        alert(currentLang === 'EN' ? "Please enter a valid 10-digit mobile number." : "कृपया अपना 10 अंकों का सही मोबाइल नंबर दर्ज करें (e.g. 9876543210)।");
        window.speakText(currentLang === 'EN' ? "Please enter a valid 10-digit mobile number." : "कृपया अपना 10 अंकों का सही मोबाइल नंबर दर्ज करें।");
        return;
    }

    if (consentCheck && !consentCheck.checked) {
        alert(currentLang === 'EN' ? "Please agree to the consent checkbox." : "कृपया सरकारी योजना अलर्ट्स प्राप्त करने की सहमति चेकबॉक्स पर टिक करें।");
        return;
    }

    const maskedPhone = phone.substring(0, 2) + '*** **' + phone.substring(7);

    const waText = encodeURIComponent(
        `🏛️ *CITYWISE AI — राष्ट्रीय सुशासन अलर्ट्स*\n\n` +
        `नमस्ते! मोबाइल नंबर: +91 ${maskedPhone} के लिए सरकारी योजना अलर्ट्स सक्रिय किए जा रहे हैं।\n\n` +
        `📢 *नवीनतम योजना अपडेट:* PM सूर्य घर मुफ़्त बिजली योजना (300 यूनिट सब्सिडी ₹78,000) एवं PM-Kisan 19वीं किश्त फॉर्म लाइव हैं।\n\n` +
        `🔒 *प्राइवेसी सुरक्षा:* आपका नंबर पूर्णतः सुरक्षित एवं एन्क्रिप्टेड है।\n` +
        `🔗 *पोर्टल लिंक:* https://citywise-ai.vercel.app`
    );

    const waDirectUrl = `https://api.whatsapp.com/send?phone=91${phone}&text=${waText}`;

    if (window.confetti) {
        window.confetti({ particleCount: 70, spread: 60, origin: { y: 0.6 } });
    }

    const preview = document.getElementById('wa-preview-card');
    const bubble = document.getElementById('wa-preview-bubble');
    const directBtn = document.getElementById('wa-direct-launch-link');

    if (preview && bubble) {
        preview.classList.remove('hidden');
        bubble.innerHTML = `
            <b>🏛️ CITYWISE AI — Official WhatsApp Notification</b><br>
            नमस्ते! आपका मोबाइल नंबर <b>+91 ${maskedPhone}</b> सुरक्षित रूप से रजिस्टर हो गया है।<br><br>
            📢 <b>ताज़ा सरकारी योजना अलर्ट:</b> PM सूर्य घर मुफ़्त बिजली योजना (₹78,000 सब्सिडी) एवं लाड़ली बहना/PM-Kisan किश्त अलर्ट्स एक्टिवेट हो गए हैं।
        `;
    }

    if (directBtn) {
        directBtn.href = waDirectUrl;
        directBtn.style.display = 'inline-flex';
    }

    window.speakText(currentLang === 'EN' ? "Your WhatsApp number is registered for verified scheme alerts." : "आपका व्हाट्सएप नंबर सरकारी योजना अलर्ट्स के लिए सुरक्षित रूप से रजिस्टर हो गया है।");
    window.open(waDirectUrl, '_blank');
};

// ============================================================
// 5. NATIONAL CITIZEN SERVICES HUB
// ============================================================
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
        html = `<div style="grid-column:1/-1;text-align:center;padding:30px;color:var(--text-muted)">
            <i class="fa-solid fa-folder-open fa-2x" style="color:var(--accent-saffron);opacity:0.8;"></i>
            <h3 style="margin-top:10px;font-size:15px;color:var(--text-heading)">कोई नागरिक सेवा नहीं मिली</h3>
            <p style="font-size:12px;">कृपया अपनी खोज बदलें या 'सभी सेवाएं' पर क्लिक करें।</p>
        </div>`;
    } else {
        filtered.forEach(s => {
            const vNote = s.voiceNote ? s.voiceNote.replace(/'/g, "\\'") : '';
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
                    <span class="badge badge-success"><i class="fa-solid fa-shield-check"></i> ${s.domain}</span>
                    <button class="srv-portal-btn" onclick="triggerSafeRedirect('${s.link}', '${s.name}', '${s.mirror}', '${vNote}')">
                        <span>सुरक्षित पोर्टल</span> <i class="fa-solid fa-arrow-up-right-from-square"></i>
                    </button>
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

    if (cat === 'VOTER') window.speakText(currentLang === 'EN' ? 'Voter ID and identity services.' : 'वोटर आईडी और नागरिक पहचान सेवाएं।');
    else if (cat === 'LIC') window.speakText(currentLang === 'EN' ? 'LIC and Life Insurance services.' : 'एलआईसी और जीवन बीमा सेवाएं।');
    else if (cat === 'BANK') window.speakText(currentLang === 'EN' ? 'Public Banking and Provident Fund services.' : 'सरकारी बैंक खाते और भविष्य निधि सेवाएं।');
    else if (cat === 'CIVIC') window.speakText(currentLang === 'EN' ? 'Transport and Electricity bill services.' : 'परिवहन और विद्युत बिल सेवाएं।');
    else window.speakText(currentLang === 'EN' ? 'All Citizen Services.' : 'सभी नागरिक सेवाएं।');
};

window.filterCitizenServices = function() {
    const searchVal = document.getElementById('service-search-input')?.value || '';
    renderCitizenServices(currentServiceCategory, searchVal);
};

// ============================================================
// 6. WELFARE SCHEMES MATCHING STUDIO
// ============================================================
function renderAllSchemes(filters = {}) {
    const listEl = document.getElementById('schemes-list');
    const badgeEl = document.getElementById('match-count-badge');
    if (!listEl) return;

    let stateCode = filters.state || document.getElementById('input-state')?.value || 'ALL';
    let occ = filters.occ || document.getElementById('input-occupation')?.value || 'ALL';
    let gender = filters.gender || document.getElementById('input-gender')?.value || 'ALL';
    let age = parseInt(filters.age || document.getElementById('input-age')?.value || '32');

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

    const stateLabel = stateCode !== 'ALL' && STATE_DB[stateCode] ? STATE_DB[stateCode].name.split('/')[0] : (currentLang === 'EN' ? 'All India' : 'संपूर्ण भारत');

    if (badgeEl) badgeEl.textContent = `${stateLabel}: ${filtered.length} ${currentLang === 'EN' ? 'Schemes' : 'पात्र योजनाएं'}`;

    let html = '';
    filtered.forEach(sc => {
        const vNote = sc.voiceNote ? sc.voiceNote.replace(/'/g, "\\'") : '';
        html += `<div class="scheme-item">
            <div class="scheme-item-head">
                <div class="scheme-name">${sc.name}</div>
                <span class="scheme-cat">${sc.cat}</span>
            </div>
            <div class="scheme-target">
                🎯 <b>${currentLang === 'EN' ? 'Eligibility:' : 'पात्रता:'}</b> ${sc.targetGroup || 'समस्त पात्र नागरिक'}
            </div>
            <div class="scheme-item-body">${sc.desc}</div>
            <div class="scheme-item-footer">
                <div class="scheme-docs-wrap">
                    ${sc.docs.map(d => `<span class="scheme-tag">📄 ${d}</span>`).join('')}
                </div>
                <button class="apply-link" onclick="triggerSafeRedirect('${sc.link}', '${sc.name}', '${sc.mirror || ''}', '${vNote}')">
                    <i class="fa-solid fa-arrow-up-right-from-square"></i> ${currentLang === 'EN' ? 'Apply Online' : 'ऑनलाइन आवेदन करें'}
                </button>
            </div>
        </div>`;
    });

    listEl.innerHTML = html;
}

window.liveAutoMatchSchemes = function() {
    const state = document.getElementById('input-state')?.value || 'ALL';
    const occ = document.getElementById('input-occupation')?.value || 'ALL';
    const gender = document.getElementById('input-gender')?.value || 'ALL';
    const age = document.getElementById('input-age')?.value || '32';
    renderAllSchemes({ state, occ, gender, age });
};

window.handleSchemeSearch = function(e) {
    if (e) e.preventDefault();
    const btn = document.getElementById('btn-search-schemes');
    if (btn) {
        btn.innerHTML = '<i class="fa-solid fa-spinner fa-spin"></i> मिलान जारी है...';
        btn.disabled = true;
    }

    setTimeout(() => {
        liveAutoMatchSchemes();
        if (window.confetti) {
            window.confetti({ particleCount: 50, spread: 60, origin: { y: 0.7 } });
        }
        if (btn) {
            btn.innerHTML = '<i class="fa-solid fa-magnifying-glass"></i> <span id="btn-search-txt">योग्य सरकारी योजनाएं खोजें</span>';
            btn.disabled = false;
        }

        const stateCode = document.getElementById('input-state')?.value || 'ALL';
        const stateName = (stateCode !== 'ALL' && STATE_DB[stateCode]) ? STATE_DB[stateCode].name.split('/')[0] : 'आपकी प्रोफाइल के लिए';
        window.speakText(currentLang === 'EN' ? `Government schemes matching completed.` : `${stateName} के लिए पात्र सरकारी योजनाओं का मिलान पूरा हो गया है।`);
    }, 200);
};

window.updateIncomeLabel = function(val) {
    const el = document.getElementById('income-display');
    if (el) el.textContent = '₹' + parseInt(val).toLocaleString('en-IN') + (currentLang === 'EN' ? ' / Year' : ' / वर्ष');
};

window.triggerManualDataSync = function() {
    const badge = document.getElementById('sync-status-badge');
    if (badge) {
        badge.innerHTML = '<i class="fa-solid fa-sync fa-spin"></i> सिंक जारी...';
        setTimeout(() => {
            badge.innerHTML = '<i class="fa-solid fa-circle-check"></i> data.gov.in सिंक सफल';
            window.speakText(currentLang === 'EN' ? 'Over 30 schemes successfully synced with data dot gov in.' : 'डेटा डॉट जीओवी डॉट इन से 30 से अधिक योजनाएं सिंक हो गईं।');
        }, 800);
    }
};

// ============================================================
// 7. PAGE ROUTING & NAVIGATION
// ============================================================
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
            setTimeout(() => targetPage.classList.add('active'), 5);
            window.scrollTo({ top: 0, behavior: 'smooth' });
        }

        const activeNavBtn = document.getElementById('nav-' + pageId);
        if (activeNavBtn) activeNavBtn.classList.add('active');

        const activeMBtn = document.getElementById('m-nav-' + pageId);
        if (activeMBtn) activeMBtn.classList.add('active');

        if (pageId === 'home') {
            initTicker();
            window.speakText(currentLang === 'EN' ? 'Home page. 28 States and 8 Union Territories governance portal.' : 'मुख्य पृष्ठ। 28 राज्य एवं 8 केंद्र शासित प्रदेश सुशासन पोर्टल।');
        }
        if (pageId === 'map') {
            initCleanStateMap();
            window.speakText(currentLang === 'EN' ? 'India Digital Map Explorer. Select State and District governance.' : 'भारत डिजिटल नक्शा Explorer। राज्य और ज़िला सुशासन चुनें।');
        }
        if (pageId === 'dbt') {
            initDBTCharts();
            window.speakText(currentLang === 'EN' ? 'Realtime Direct Benefit Transfer tracker. 4.85 lakh crore rupees disbursed.' : 'प्रत्यक्ष लाभ अंतरण डीबीटी लाइव ट्रैकर। 4 लाख 85 हज़ार करोड़ रुपये अंतरित राशि।');
        }
        if (pageId === 'services') {
            renderCitizenServices();
            window.speakText(currentLang === 'EN' ? 'National citizen services hub. Voter ID, LIC, and Public banking.' : 'राष्ट्रीय नागरिक सेवाएं। वोटर आईडी, एलआईसी और सरकारी बैंक हब।');
        }
        if (pageId === 'schemes') {
            liveAutoMatchSchemes();
            window.speakText(currentLang === 'EN' ? 'Welfare schemes matching studio. Check your eligibility.' : 'सरकारी योजना मैचिंग स्टूडियो। अपनी पात्रता की जांच करें।');
        }
    } catch(err) {}
};

window.toggleMobileMenu = function() {
    const menu = document.getElementById('mobile-dropdown');
    if (menu) menu.classList.toggle('show');
};

// ============================================================
// 8. HOME & DRILL DOWN CONTROLS
// ============================================================
// STEP DRILL DOWN IN MAP VIEW WITH REAL CITY & VILLAGE SEARCH
function renderMapStatesList(filterQuery = '') {
    const grid = document.getElementById('map-states-grid');
    if (!grid) return;

    let html = '';
    const q = (filterQuery || '').trim().toLowerCase();

    if (!q) {
        Object.keys(STATE_DB).forEach(code => {
            const s = STATE_DB[code];
            const distCount = s.districts ? Object.keys(s.districts).length : 1;
            let metricTag = currentHeatmapMode === 'dbt' ? `💰 DBT: ${s.dbtAmount}` : (currentHeatmapMode === 'civic' ? `🏛️ संतुष्टि: ${s.dbtRating}` : `📍 ${distCount} शहर/ज़िले | ${s.capital}`);

            html += `<div class="item-card-chip" onclick="onMapStateClick('${code}')">
                ${s.emoji} ${s.name.split('/')[0]}
                <small>${metricTag}</small>
            </div>`;
        });
    } else {
        let matchedCount = 0;

        // 1. Direct State Matches
        Object.keys(STATE_DB).forEach(code => {
            const s = STATE_DB[code];
            if (s.name.toLowerCase().includes(q) || code.toLowerCase().includes(q) || (s.capital && s.capital.toLowerCase().includes(q))) {
                matchedCount++;
                html += `<div class="item-card-chip" onclick="onMapStateClick('${code}')">
                    ${s.emoji} ${s.name.split('/')[0]} <span class="badge badge-success" style="font-size:9px;">राज्य</span>
                    <small>📍 राजधानी: ${s.capital} | DBT: ${s.dbtAmount}</small>
                </div>`;
            }
        });

        // 2. Direct City/District Matches
        Object.keys(STATE_DB).forEach(code => {
            const s = STATE_DB[code];
            if (s.districts) {
                Object.keys(s.districts).forEach(d => {
                    if (d.toLowerCase().includes(q)) {
                        matchedCount++;
                        const vCount = s.districts[d].length;
                        html += `<div class="item-card-chip" onclick="currentSelectedStateCode='${code}'; onMapCityClick('${d}')" style="border-left:3px solid var(--accent-emerald);">
                            🏙️ ${d} <span class="badge badge-info" style="font-size:9px;">शहर / ज़िला</span>
                            <small>📍 ${s.name.split('/')[0]} | ${vCount} गाँव व वार्ड</small>
                        </div>`;
                    }
                });
            }
        });

        // 3. Direct Village / Ward Matches
        Object.keys(STATE_DB).forEach(code => {
            const s = STATE_DB[code];
            if (s.districts) {
                Object.keys(s.districts).forEach(d => {
                    s.districts[d].forEach(v => {
                        if (v.toLowerCase().includes(q)) {
                            matchedCount++;
                            html += `<div class="item-card-chip" onclick="currentSelectedStateCode='${code}'; currentSelectedDistrict='${d}'; onMapVillageClick('${v}')" style="border-left:3px solid var(--accent-saffron);">
                                🌾 ${v} <span class="badge badge-warning" style="font-size:9px;">गाँव / वार्ड</span>
                                <small>📍 ${d}, ${s.name.split('/')[0]}</small>
                            </div>`;
                        }
                    });
                });
            }
        });

        if (matchedCount === 0) {
            html = `<div style="grid-column:1/-1;text-align:center;padding:20px;color:var(--text-muted);">
                <i class="fa-solid fa-location-crosshairs fa-2x" style="color:var(--accent-saffron);opacity:0.8;"></i>
                <div style="margin-top:6px;font-size:13px;font-weight:700;color:var(--text-heading);">${filterQuery} से संबंधित कोई राज्य, शहर या गाँव नहीं मिला</div>
                <small>कृपया सही नाम (e.g. Mumbai, Patna, Indore, Belahi, Lucknow) खोजें।</small>
            </div>`;
        }
    }

    grid.innerHTML = html;
}

window.filterMapByRegion = function(regionKey) {
    if (!REGIONS[regionKey]) return;
    const codes = REGIONS[regionKey].codes;
    const grid = document.getElementById('map-states-grid');
    if (!grid) return;

    let html = '';
    codes.forEach(code => {
        if (!STATE_DB[code]) return;
        const s = STATE_DB[code];
        let metricTag = currentHeatmapMode === 'dbt' ? `💰 DBT: ${s.dbtAmount}` : (currentHeatmapMode === 'civic' ? `🏛️ संतुष्टि: ${s.dbtRating}` : `📍 राजधानी: ${s.capital}`);

        html += `<div class="item-card-chip" onclick="onMapStateClick('${code}')">
            ${s.emoji} ${s.name.split('/')[0]}
            <small>${metricTag}</small>
        </div>`;
    });
    grid.innerHTML = html;

    const drillBadge = document.getElementById('drill-badge');
    if (drillBadge) drillBadge.textContent = `${REGIONS[regionKey].title.split(' ')[1]} (${codes.length})`;

    window.speakText(currentLang === 'EN' ? `${regionKey} region states loaded.` : `${REGIONS[regionKey].title} के राज्य लोड हुए।`);
};

window.filterMapStatesList = function(val) {
    renderMapStatesList(val);
};

window.onMapStateClick = function(code) {
    if (!STATE_DB[code]) return;
    currentSelectedStateCode = code;
    const s = STATE_DB[code];

    const bcState = document.getElementById('bc-state');
    if (bcState) {
        bcState.textContent = s.name.split('/')[0];
        bcState.classList.add('active');
    }

    const previewBadge = document.getElementById('selected-state-preview-badge');
    if (previewBadge) previewBadge.textContent = `📍 ${s.name.split('/')[0]} (${s.dbtAmount})`;

    document.getElementById('drill-step-1').classList.add('hidden');
    document.getElementById('drill-step-2').classList.remove('hidden');
    document.getElementById('drill-step-3').classList.add('hidden');

    document.getElementById('city-step-title').textContent = `${s.name.split('/')[0]} — ${currentLang === 'EN' ? 'Select District:' : 'शहर/ज़िला चुनें:'}`;
    document.getElementById('map-hover-info').textContent = `${s.name.split('/')[0]}`;

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

    window.speakText(currentLang === 'EN' ? `${s.name.split('/')[0]}. Capital ${s.capital}. DBT Fund ${s.dbtAmount}. Please select a district.` : `${s.name.split('/')[0]}। राजधानी ${s.capital}। डीबीटी फंड ${s.dbtAmount}। कृपया ज़िला चुनें।`);
};

window.onMapCityClick = function(cityName) {
    currentSelectedDistrict = cityName;
    const s = STATE_DB[currentSelectedStateCode];

    const bcState = document.getElementById('bc-state');
    if (bcState && s) {
        bcState.textContent = s.name.split('/')[0];
        bcState.classList.add('active');
    }

    const bcDist = document.getElementById('bc-district');
    if (bcDist) {
        bcDist.textContent = cityName;
        bcDist.classList.add('active');
    }

    document.getElementById('drill-step-1').classList.add('hidden');
    document.getElementById('drill-step-2').classList.add('hidden');
    document.getElementById('drill-step-3').classList.remove('hidden');

    document.getElementById('village-step-title').textContent = `${cityName} — ${currentLang === 'EN' ? 'Select Village / Ward:' : 'गाँव/वार्ड चुनें:'}`;

    const villagesGrid = document.getElementById('villages-grid');
    let html = '';
    if (s && s.districts && s.districts[cityName]) {
        s.districts[cityName].forEach(v => {
            html += `<div class="item-card-chip" onclick="onMapVillageClick('${v}')">
                🌾 ${v}
                <small>सुशासन केंद्र / वार्ड</small>
            </div>`;
        });
    } else {
        html += `<div class="item-card-chip" onclick="onMapVillageClick('मुख्य वार्ड 1')">🌾 मुख्य वार्ड 1</div>`;
        html += `<div class="item-card-chip" onclick="onMapVillageClick('ग्राम पंचायत 2')">🌾 ग्राम पंचायत 2</div>`;
    }
    villagesGrid.innerHTML = html;

    window.speakText(currentLang === 'EN' ? `${cityName} selected. Please select a village or ward.` : `${cityName} ज़िला चुना गया। गाँव या वार्ड चुनें।`);
};

window.onMapVillageClick = function(villageName) {
    currentSelectedVillage = villageName;
    const bcVill = document.getElementById('bc-village');
    if (bcVill) {
        bcVill.textContent = villageName;
        bcVill.classList.add('active');
    }

    window.selectState(currentSelectedStateCode);
};

window.backToStep = function(stepNum) {
    if (stepNum === 1) {
        document.getElementById('drill-step-1').classList.remove('hidden');
        document.getElementById('drill-step-2').classList.add('hidden');
        document.getElementById('drill-step-3').classList.add('hidden');
        window.speakText(currentLang === 'EN' ? 'Back to State list.' : 'वापस राज्य सूची।');
    } else if (stepNum === 2) {
        document.getElementById('drill-step-1').classList.add('hidden');
        document.getElementById('drill-step-2').classList.remove('hidden');
        document.getElementById('drill-step-3').classList.add('hidden');
        window.speakText(currentLang === 'EN' ? 'Back to District list.' : 'वापस ज़िला सूची।');
    }
};


// ============================================================
// 8. HOME & DRILL DOWN CONTROLS (ROBUST & COMPLETE)
// ============================================================
window.populateHomeControls = function(regionFilter = 'ALL') {
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
                groupHtml += `<button class="state-chip" onclick="selectState('${code}')" title="${s.name}">
                    ${s.emoji} ${s.name.split('/')[0]}
                </button>`;
            }
        });
        groupHtml += `</div></div>`;
    });

    Object.keys(STATE_DB).forEach(code => {
        const s = STATE_DB[code];
        selectHtml += `<option value="${code}">${s.emoji} ${s.name}</option>`;
    });

    chipContainer.innerHTML = groupHtml;
    selectState.innerHTML = selectHtml;
};

window.filterRegionChips = function(regionKey, btnEl) {
    const btns = document.querySelectorAll('.region-tab-btn');
    btns.forEach(b => b.classList.remove('active'));
    if (btnEl) btnEl.classList.add('active');

    window.populateHomeControls(regionKey);
    if (regionKey === 'ALL') {
        window.speakText(currentLang === 'EN' ? 'All 36 States and Territories loaded.' : 'सभी 36 राज्य एवं केंद्र शासित प्रदेश।');
    } else {
        window.speakText(currentLang === 'EN' ? `${regionKey} India region filtered.` : `${REGIONS[regionKey]?.title || 'क्षेत्र'} लोड हुआ।`);
    }
};

window.onHomeStateChange = function(stateCode) {
    currentSelectedStateCode = stateCode;
    currentSelectedDistrict = null;
    currentSelectedVillage = null;

    const distSelect = document.getElementById('home-select-district');
    const villSelect = document.getElementById('home-select-village');
    const launchBtn  = document.getElementById('home-btn-launch');

    if (!stateCode || !STATE_DB[stateCode]) {
        if (distSelect) {
            distSelect.disabled = true;
            distSelect.innerHTML = '<option value="">-- पहले राज्य चुनें / Select State First --</option>';
        }
        if (villSelect) {
            villSelect.disabled = true;
            villSelect.innerHTML = '<option value="">-- पहले ज़िला चुनें / Select District First --</option>';
        }
        if (launchBtn) launchBtn.disabled = true;
        return;
    }

    const s = STATE_DB[stateCode];
    let html = '<option value="">-- ज़िला / शहर चुनें (Select District) --</option>';
    if (s.districts) {
        Object.keys(s.districts).forEach(d => {
            html += `<option value="${d}">${d}</option>`;
        });
    } else {
        html += `<option value="${s.capital}">${s.capital}</option>`;
    }

    if (distSelect) {
        distSelect.disabled = false;
        distSelect.innerHTML = html;
    }

    if (villSelect) {
        villSelect.disabled = true;
        villSelect.innerHTML = '<option value="">-- पहले ज़िला चुनें / Select District First --</option>';
    }

    if (launchBtn) launchBtn.disabled = false;

    window.speakText(currentLang === 'EN' ? `${s.name.split('/')[0]} selected. Please choose district.` : `${s.name.split('/')[0]} चुना गया। कृपया ज़िला चुनें।`);
};

window.onHomeDistrictChange = function(distName) {
    currentSelectedDistrict = distName;
    currentSelectedVillage = null;

    const villSelect = document.getElementById('home-select-village');
    const launchBtn  = document.getElementById('home-btn-launch');

    if (!distName || !currentSelectedStateCode) {
        if (villSelect) {
            villSelect.disabled = true;
            villSelect.innerHTML = '<option value="">-- पहले ज़िला चुनें / Select District First --</option>';
        }
        return;
    }

    const s = STATE_DB[currentSelectedStateCode];
    let html = '<option value="">-- गाँव / तहसील / वार्ड चुनें (Select Village/Ward) --</option>';
    if (s.districts && s.districts[distName]) {
        s.districts[distName].forEach(v => {
            html += `<option value="${v}">${v}</option>`;
        });
    } else {
        html += `<option value="मुख्य वार्ड 1">मुख्य वार्ड 1</option>`;
        html += `<option value="ग्राम पंचायत 2">ग्राम पंचायत 2</option>`;
    }

    if (villSelect) {
        villSelect.disabled = false;
        villSelect.innerHTML = html;
    }
    if (launchBtn) launchBtn.disabled = false;

    window.speakText(currentLang === 'EN' ? `${distName} selected.` : `${distName} चुना गया।`);
};

window.onHomeVillageChange = function(villName) {
    currentSelectedVillage = villName;
    const launchBtn = document.getElementById('home-btn-launch');
    if (launchBtn) launchBtn.disabled = false;
};

window.launchSelectedLocationPortal = function() {
    const stateCode = currentSelectedStateCode || document.getElementById('home-select-state')?.value || 'UP';
    const dist = currentSelectedDistrict || document.getElementById('home-select-district')?.value || '';
    const vill = currentSelectedVillage || document.getElementById('home-select-village')?.value || '';

    window.selectState(stateCode, dist, vill);
};

// ============================================================
// STATE DETAILS DRAWER & LOCAL GOVERNANCE PORTAL (100% ROBUST)
// ============================================================
let currentDrawerStateCode = 'UP';
let currentDrawerDistrict = '';
let currentDrawerVillage = '';

window.selectState = function(code, optDistrict = '', optVillage = '') {
    const stateCode = code || currentSelectedStateCode || 'UP';
    if (!STATE_DB[stateCode]) return;
    
    currentSelectedStateCode = stateCode;
    currentDrawerStateCode = stateCode;
    currentDrawerDistrict = optDistrict || currentSelectedDistrict || '';
    currentDrawerVillage = optVillage || currentSelectedVillage || '';

    const s = STATE_DB[stateCode];
    const drawer = document.getElementById('state-drawer');
    const dIcon = document.getElementById('d-icon');
    const dName = document.getElementById('d-name');
    const dCap  = document.getElementById('d-capital');
    const dBody = document.getElementById('d-body');

    if (!drawer || !dBody) return;

    if (dIcon) dIcon.textContent = s.emoji || '🏛️';
    if (dName) {
        let titleText = s.name.split('/')[0].trim();
        if (currentDrawerDistrict) titleText += ` — ${currentDrawerDistrict}`;
        if (currentDrawerVillage) titleText += ` (${currentDrawerVillage})`;
        dName.textContent = titleText;
    }
    if (dCap) {
        dCap.textContent = `📍 राजधानी: ${s.capital} | जनसंख्या: ${s.population} | प्रशासनिक प्रमुख: ${s.cm}`;
    }

    dBody.innerHTML = buildDrawerContent(s);
    drawer.classList.remove('hidden');
    drawer.classList.add('open');

    // Backdrop management
    let backdrop = document.getElementById('drawer-backdrop');
    if (!backdrop) {
        backdrop = document.createElement('div');
        backdrop.id = 'drawer-backdrop';
        backdrop.className = 'drawer-backdrop';
        backdrop.onclick = window.closeDrawer;
        document.body.appendChild(backdrop);
    }
    setTimeout(() => backdrop.classList.add('show'), 10);

    // Audio Voice Navigation
    let speechMsg = currentLang === 'EN'
        ? `${s.name.split('/')[0]} governance portal opened. Capital: ${s.capital}. Direct Benefit Transfer: ${s.dbtAmount}. Satisfaction rate: ${s.dbtRating}.`
        : `${s.name.split('/')[0]} सुशासन पोर्टल खुला। राजधानी ${s.capital}। डीबीटी अंतरण ${s.dbtAmount}। संतुष्टि दर ${s.dbtRating}।`;
    if (currentDrawerDistrict) {
        speechMsg += currentLang === 'EN' ? ` Selected district: ${currentDrawerDistrict}.` : ` चयनित ज़िला: ${currentDrawerDistrict}।`;
    }
    window.speakText(speechMsg);
};

window.closeDrawer = function() {
    const drawer = document.getElementById('state-drawer');
    if (drawer) {
        drawer.classList.remove('open');
        setTimeout(() => drawer.classList.add('hidden'), 250);
    }
    const backdrop = document.getElementById('drawer-backdrop');
    if (backdrop) {
        backdrop.classList.remove('show');
    }
};

window.speakCurrentStateDetails = function() {
    if (currentDrawerStateCode && STATE_DB[currentDrawerStateCode]) {
        const s = STATE_DB[currentDrawerStateCode];
        let msg = currentLang === 'EN'
            ? `${s.name.split('/')[0]}. Capital: ${s.capital}. Chief Minister or Governor: ${s.cm}. Total DBT funds disbursed: ${s.dbtAmount}. Public satisfaction score: ${s.dbtRating}.`
            : `${s.name.split('/')[0]}। राजधानी: ${s.capital}। प्रशासनिक प्रमुख: ${s.cm}। कुल डीबीटी अंतरण: ${s.dbtAmount}। नागरिक संतुष्टि दर: ${s.dbtRating}।`;
        window.speakText(msg);
    }
};

function buildDrawerContent(s) {
    const dist = currentDrawerDistrict || (s.districts ? Object.keys(s.districts)[0] : s.capital);
    const vill = currentDrawerVillage || (s.districts && s.districts[dist] ? s.districts[dist][0] : 'मुख्य वार्ड 1');
    const totalDistCount = s.districts ? Object.keys(s.districts).length : 1;

    let dbtAmount = s.dbtAmount || '₹24,500 Cr';
    let dbtRating = s.dbtRating || '94%';

    return `
        <div class="drawer-content-scroll">
            <!-- 1. Top Governance Key Metrics -->
            <div class="gov-metrics-banner">
                <div class="gov-metric-box">
                    <span class="gov-m-val" style="color:var(--accent-saffron);">${dbtAmount}</span>
                    <span class="gov-m-lbl">💰 लाइव DBT अंतरण</span>
                </div>
                <div class="gov-metric-box">
                    <span class="gov-m-val" style="color:var(--accent-emerald);">${dbtRating}</span>
                    <span class="gov-m-lbl">🏛️ सुशासन संतुष्टि दर</span>
                </div>
                <div class="gov-metric-box">
                    <span class="gov-m-val" style="color:var(--primary-indigo);">${totalDistCount}</span>
                    <span class="gov-m-lbl">🏙️ प्रमुख ज़िले/शहर</span>
                </div>
            </div>

            <!-- 2. Selected Location Active Status -->
            <div class="gov-location-summary-card">
                <div class="loc-sum-header">
                    <i class="fa-solid fa-map-pin" style="color:var(--accent-saffron);"></i>
                    <b>सक्रिय सुशासन केंद्र:</b>
                    <span>${s.name.split('/')[0]} ➔ <b>${dist}</b> ➔ <b>${vill}</b></span>
                </div>
                <div class="loc-sum-details">
                    <div><b>क्षेत्रफल:</b> ${s.area || 'N/A'}</div>
                    <div><b>प्रशासनिक प्रमुख:</b> ${s.cm || 'N/A'}</div>
                    <div><b>डिजिटल लॉकर:</b> 100% एक्टिव</div>
                    <div><b>सुरक्षा स्तर:</b> 256-Bit SSL सुरक्षित</div>
                </div>
            </div>

            <!-- 3. Key Citizen Welfare Schemes Active in this Region -->
            <div class="drawer-sec-title">
                <i class="fa-solid fa-hand-holding-heart" style="color:var(--accent-saffron);"></i>
                <span>इस क्षेत्र में सक्रिय प्रमुख जनकल्याण योजनाएं</span>
            </div>

            <div class="drawer-schemes-list">
                <div class="drawer-scheme-card">
                    <div class="d-sch-head">
                        <b>🌾 PM-किसान सम्मान निधि (100% DBT)</b>
                        <span class="badge badge-success">₹6,000 / वर्ष</span>
                    </div>
                    <p>सीधे बैंक खाते में 3 किस्तों में अंतरण। e-KYC और आधार सीडिंग अनिवार्य।</p>
                    <button class="btn btn-secondary btn-sm" onclick="triggerSafeRedirect('https://pmkisan.gov.in', 'PM-Kisan Samman Nidhi', 'https://india.gov.in')">
                        <i class="fa-solid fa-arrow-up-right-from-square"></i> स्टेटस चेक करें
                    </button>
                </div>

                <div class="drawer-scheme-card">
                    <div class="d-sch-head">
                        <b>🏥 आयुष्मान भारत PM-JAY स्वास्थ्य कार्ड</b>
                        <span class="badge badge-info">₹5 लाख मुफ्त इलाज</span>
                    </div>
                    <p>प्रति परिवार प्रति वर्ष कैशलेस अस्पताल भर्ती सुविधा।</p>
                    <button class="btn btn-secondary btn-sm" onclick="triggerSafeRedirect('https://nha.gov.in', 'National Health Authority', 'https://bis.pmjay.gov.in')">
                        <i class="fa-solid fa-arrow-up-right-from-square"></i> आयुष्मान कार्ड बनाएं
                    </button>
                </div>

                <div class="drawer-scheme-card">
                    <div class="d-sch-head">
                        <b>☀️ PM सूर्य घर मुफ्त बिजली योजना</b>
                        <span class="badge badge-warning">₹78,000 सब्सिडी</span>
                    </div>
                    <p>300 यूनिट तक मुफ्त सौर बिजली एवं रूफटॉप सोलर ग्रांट।</p>
                    <button class="btn btn-secondary btn-sm" onclick="triggerSafeRedirect('https://pmsuryaghar.gov.in', 'PM Surya Ghar Portal', 'https://mnre.gov.in')">
                        <i class="fa-solid fa-arrow-up-right-from-square"></i> सोलर आवेदन करें
                    </button>
                </div>
            </div>

            <!-- 4. Emergency Helplines & Departmental Contacts -->
            <div class="drawer-sec-title mt-16">
                <i class="fa-solid fa-phone-volume" style="color:var(--accent-emerald);"></i>
                <span>आपातकालीन हेल्पलाइन एवं नागरिक सहायता (24x7)</span>
            </div>

            <div class="drawer-helplines-grid">
                <div class="helpline-chip">
                    <i class="fa-solid fa-user-shield" style="color:var(--primary-indigo);"></i>
                    <div>
                        <b>CM जनसेवा हेल्पलाइन</b>
                        <span>📞 1076 / 181</span>
                    </div>
                </div>
                <div class="helpline-chip">
                    <i class="fa-solid fa-truck-medical" style="color:#f43f5e;"></i>
                    <div>
                        <b>राष्ट्रीय आपातकालीन सेवा</b>
                        <span>📞 112 (All-in-One)</span>
                    </div>
                </div>
                <div class="helpline-chip">
                    <i class="fa-solid fa-person-dress" style="color:var(--accent-saffron);"></i>
                    <div>
                        <b>महिला हेल्पलाइन</b>
                        <span>📞 1090 / 181</span>
                    </div>
                </div>
                <div class="helpline-chip">
                    <i class="fa-solid fa-wheat-awn" style="color:var(--accent-emerald);"></i>
                    <div>
                        <b>किसान कॉल सेंटर</b>
                        <span>📞 1800-180-1551</span>
                    </div>
                </div>
            </div>

            <!-- 5. Direct Official State Government Portal Button -->
            <div class="drawer-portal-action mt-18">
                <button class="btn btn-gradient w-100 btn-lg" onclick="triggerSafeRedirect('https://india.gov.in', '${s.name.split('/')[0]} Official Portal', 'https://umang.gov.in')">
                    <i class="fa-solid fa-building-columns"></i> ${s.name.split('/')[0]} आधिकारिक राज्य पोर्टल खोलें
                </button>
            </div>
        </div>
    `;
}


// ============================================================
// 9. THEME & FONT UTILITIES
// ============================================================
window.toggleTheme = function() {
    const isLightNow = document.body.classList.toggle('light-theme');
    const txtEl = document.getElementById('theme-btn-text');
    const btnEl = document.getElementById('btn-theme-toggle');

    if (isLightNow) {
        if (txtEl) txtEl.textContent = 'Dark Mode';
        if (btnEl) btnEl.innerHTML = '<i class="fa-solid fa-moon"></i> <span id="theme-btn-text">Dark Mode</span>';
        window.speakText(currentLang === 'EN' ? 'Light mode activated.' : 'लाइट थीम सक्रिय।');
    } else {
        if (txtEl) txtEl.textContent = 'Light Mode';
        if (btnEl) btnEl.innerHTML = '<i class="fa-solid fa-sun" style="color:#f59e0b"></i> <span id="theme-btn-text">Light Mode</span>';
        window.speakText(currentLang === 'EN' ? 'Dark mode activated.' : 'डार्क थीम सक्रिय।');
    }
};

window.adjustFontSize = function(delta) {
    currentFontSizePx = Math.max(13, Math.min(20, currentFontSizePx + delta));
    document.documentElement.style.fontSize = currentFontSizePx + 'px';
    window.speakText(delta > 0 ? (currentLang === 'EN' ? 'Font size increased.' : 'फ़ॉन्ट साइज बढ़ाया गया।') : (currentLang === 'EN' ? 'Font size decreased.' : 'फ़ॉन्ट साइज घटाया गया।'));
};

const TICKER_ITEMS = [
    '🔒 [सुरक्षा गारंटी] — 100% Zero-PII आर्किटेक्चर एवं 256-बिट SSL एन्क्रिप्शन सक्रिय',
    '🔴 [CITYWISE AI] — भारत नक्शा Explorer एवं ₹4.85 लाख करोड़ DBT लाइव ट्रैकर सक्रिय',
    '🟡 [CITYWISE AI] — Voter ID E-EPIC डाउनलोड एवं नया रजिस्ट्रेशन पोर्टल लाइव',
    '🟢 [CITYWISE AI] — LIC पॉलिसी प्रीमियम ऑनलाइन भुगतान एवं मैच्योरिटी ट्रैकर चालू',
    '🔵 [CITYWISE AI] — PM सूर्य घर मुफ़्त बिजली योजना 300 यूनिट सब्सिडी फॉर्म जारी',
];
let tickerIdx = 0;
function initTicker() {
    const el = document.getElementById('ticker-text');
    if (!el) return;
    el.textContent = TICKER_ITEMS[0];
    clearInterval(window._tickerInterval);
    window._tickerInterval = setInterval(() => {
        tickerIdx = (tickerIdx + 1) % TICKER_ITEMS.length;
        el.textContent = TICKER_ITEMS[tickerIdx];
    }, 4000);
}

// DOM LOAD INIT
document.addEventListener('DOMContentLoaded', () => {
    initTicker();
    populateHomeControls();
    updateIncomeLabel(250000);
    initCleanStateMap();
});

document.addEventListener('click', e => {
    const drawer = document.getElementById('state-drawer');
    if (drawer && !drawer.classList.contains('hidden')) {
        if (!drawer.contains(e.target) && !e.target.closest('.state-chip, .nav-btn, .item-card-chip, .quick-state-pill, #home-btn-launch, .quick-service-btn')) {
            window.closeDrawer();
        }
    }
});
