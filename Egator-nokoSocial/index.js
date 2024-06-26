const menuItems = document.querySelectorAll('.menu-item');

const messagesNotification = document.querySelector('#messages-notifications');
const messages = document.querySelector('.messages');
const message = document.querySelectorAll('.message');
const messageSearch = document.querySelector('#message-search');

const theme = document.querySelector('#theme');
const themeModal = document.querySelector('.customize-theme');
const fontSizes = document.querySelectorAll('.choose-size span');
const colorPalette = document.querySelectorAll('.choose-color span');

const bg1 = document.querySelector('.bg-1');
const bg2 = document.querySelector('.bg-2');
const bg3 = document.querySelector('.bg-3');

const root = document.querySelector(':root');

//Sidebar
const changeActiveItems = () => {
    menuItems.forEach(item => {
        item.classList.remove("active")
    })
}

menuItems.forEach(item => {
    item.addEventListener('click', () => {
        changeActiveItems();
        item.classList.add("active")
        if(item.id != 'notifications') { document.querySelector('.notifications-popup').style.display = 'none'; }
        else 
        { 
            document.querySelector('.notifications-popup').style.display = 'block';
            document.querySelector('#notifications .notification-count').style.display = 'none';
        }
    })
})

//Messages
messagesNotification.addEventListener('click', () => {
    messages.style.boxShadow = '0 0 1rem var(--color-primary)';
    messagesNotification.querySelector('.notification-count').style.display = 'none';
    setTimeout(() => {
        messages.style.boxShadow = 'none'
    }, 2000);
});

//Search messages
const searchMessages = () => {
    const val = messageSearch.value.toLowerCase();
    console.log(val);
    message.forEach(m => {
        m.querySelectorAll('h5').forEach(h => console.log(h.textContent.toLowerCase()))
    });

    message.forEach(chat => {
        let name = chat.querySelector('h5').textContent.toLowerCase();
        if(name.indexOf(val) != -1)
        {
            chat.style.display = 'flex'
        }
        else 
        {
            chat.style.display = 'none'
        }
    });
}

messageSearch.addEventListener('keyup', searchMessages);

//Theme Customization
const openThemeModal = () => {
    themeModal.style.display = 'grid';
}

const closeThemeModal = (e) => {
    if(e.target.classList.contains('customize-theme'))
    {
        themeModal.style.display = 'none'
    }
}

const removeSizeSelector = () => {
    fontSizes.forEach(size => {
        size.classList.remove('active');
    });
}

themeModal.addEventListener('click', closeThemeModal);

theme.addEventListener('click', openThemeModal)

//Fontsizes
fontSizes.forEach(size => {
    size.addEventListener('click', () => {
        removeSizeSelector();
        let fontsize;
        size.classList.toggle('active');

        if(size.classList.contains('font-size-1'))
        {
            fontsize = '10px'
            root.style.setProperty('--sticky-top-left', '5.4rem')
            root.style.setProperty('--sticky-top-right', '5.4rem')
        } 
        else if(size.classList.contains('font-size-2')) 
        {
            fontsize = '13px'
            root.style.setProperty('--sticky-top-left', '5.4rem')
            root.style.setProperty('--sticky-top-right', '-7rem')
        } 
        else if(size.classList.contains('font-size-3')) 
        {
            fontsize = '16px'
            root.style.setProperty('--sticky-top-left', '-2rem')
            root.style.setProperty('--sticky-top-right', '-17rem')
        } 
        else if(size.classList.contains('font-size-4')) 
        {
            fontsize = '19px'
            root.style.setProperty('--sticky-top-left', '-5rem')
            root.style.setProperty('--sticky-top-right', '-25rem')
        } 
        else if(size.classList.contains('font-size-5')) 
        {
            fontsize = '22px'
            root.style.setProperty('--sticky-top-left', '-10rem')
            root.style.setProperty('--sticky-top-right', '-35rem')
        }

        document.querySelector('html').style.fontSize = fontsize;
    });
})

//Primary color
colorPalette.forEach(color => {
    color.addEventListener('click', () => {
        let primaryHue;
        if(color.classList.contains('color-1'))
        {
            primaryHue = 252;
        }
        else if(color.classList.contains('color-2'))
        {
            primaryHue = 52;
        }
        else if(color.classList.contains('color-3'))
        {
            primaryHue = 352;
        }
        else if(color.classList.contains('color-4'))
        {
            primaryHue = 152;
        }
        else if(color.classList.contains('color-5'))
        {
            primaryHue = 202;
        }
        color.classList.add('active');
        root.style.setProperty('--primary-color-hue', primaryHue);
    });
});


//Background
let colorWhiteLightness;
let colorLightLightness;
let colorDarkLightness;

const chageBG = () => {
    root.style.setProperty('--color-white-lightness', colorWhiteLightness);
    root.style.setProperty('--color-light-lightness', colorLightLightness);
    root.style.setProperty('--color-dark-lightness', colorDarkLightness);
}

bg1.addEventListener('click', () => {
    colorDarkLightness = '17%';
    colorWhiteLightness = '100%';
    colorLightLightness = '95%';

    bg1.classList.add('active');
    bg2.classList.remove('active');
    bg3.classList.remove('active');
    chageBG();
});

bg2.addEventListener('click', () => {
    colorDarkLightness = '95%';
    colorWhiteLightness = '20%';
    colorLightLightness = '15%';

    bg2.classList.add('active');
    bg1.classList.remove('active');
    bg3.classList.remove('active');
    chageBG();
});

bg3.addEventListener('click', () => {
    colorDarkLightness = '95%';
    colorWhiteLightness = '10%';
    colorLightLightness = '0%';

    bg3.classList.add('active');
    bg1.classList.remove('active');
    bg2.classList.remove('active');
    chageBG();
});

