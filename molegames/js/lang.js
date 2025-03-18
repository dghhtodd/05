const translations = {
    'zh-CN': {
        title: '萌乐游戏摄影棚',
        updateTitle: '萌乐游戏摄影棚',
        updateInfo: ['每周一、三、五、日固定更新，', '其他时间不定时更新，', '带你领略更多美好。'],
        socialLinks: {
            tiktok: 'TikTok',
            douyin: '抖音',
            instagram: 'Instagram',
            threads: 'Threads',
            westar: '创星球'
        }
    },
    'zh-TW': {
        title: '萌樂遊戲攝影棚',
        updateTitle: '萌樂遊戲攝影棚',
        updateInfo: ['每週一、三、五、日固定更新，', '其他時間不定時更新，', '帶你領略更多美好。'],
        socialLinks: {
            tiktok: 'TikTok',
            douyin: '抖音',
            instagram: 'Instagram',
            threads: 'Threads',
            westar: '創星球'
        }
    },
    'en': {
        title: 'Mole Games Photo Studio',
        updateTitle: 'Mole Games Photo Studio',
        updateInfo: ['Regular updates on Monday, Wednesday, Friday and Sunday,', 'Irregular updates at other times,', 'Bringing you more wonderful moments.'],
        socialLinks: {
            tiktok: 'TikTok',
            douyin: 'Douyin',
            instagram: 'Instagram',
            threads: 'Threads',
            westar: 'Westar'
        }
    }
};

const getCurrentLang = () => {
    const urlParams = new URLSearchParams(window.location.search);
    return urlParams.get('lang') || 'zh-CN';
};

const setLang = (lang) => {
    const url = new URL(window.location.href);
    url.searchParams.set('lang', lang);
    window.history.pushState({}, '', url);
    updateContent();
    updateLangButtons(lang);
};

const updateLangButtons = (currentLang) => {
    document.querySelectorAll('.lang-btn').forEach(btn => {
        let isActive = false;
        if (currentLang === 'zh-CN' && btn.textContent.includes('简体')) isActive = true;
        if (currentLang === 'zh-TW' && btn.textContent.includes('繁體')) isActive = true;
        if (currentLang === 'en' && btn.textContent.includes('English')) isActive = true;
        btn.classList.toggle('active', isActive);
    });
};

const updateContent = () => {
    const texts = translations[getCurrentLang()];
    
    // Update title and header
    document.title = texts.title;
    document.querySelector('header h1').textContent = texts.title;
    document.querySelector('img.header-image').alt = texts.title;
    
    // Update update info section
    const updateInfo = document.querySelector('.update-info');
    updateInfo.querySelector('h2').textContent = texts.updateTitle;
    updateInfo.querySelectorAll('p').forEach((p, i) => {
        p.textContent = texts.updateInfo[i];
    });
    
    // Update social links
    document.querySelectorAll('.social-links a').forEach(link => {
        const platform = Object.keys(texts.socialLinks).find(key => 
            link.href.includes(key));
        if (platform) {
            link.textContent = texts.socialLinks[platform];
        }
    });
};

document.addEventListener('DOMContentLoaded', () => {
    updateContent();
    updateLangButtons(getCurrentLang());
});