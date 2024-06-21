const tab1 = document.querySelector('.tab-1');
const tab2 = document.querySelector('.tab-2');
const tabBody1 = document.querySelector('.tab-1-body');
const tabBody2 = document.querySelector('.tab-2-body');

const closeAllTabBodies = () => {
    tabBody1.style.display = 'none'
    tabBody2.style.display = 'none'
}

const openTab1 = () => {
    closeAllTabBodies();
    tabBody1.style.display = 'block';
}

const openTab2 = () => {
    closeAllTabBodies();
    tabBody2.style.display = 'block';
}

tab1.addEventListener('click', openTab1);
tab2.addEventListener('click', openTab2);

