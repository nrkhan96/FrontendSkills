const accordians = document.querySelectorAll('.accordian > div');

accordians.forEach(accordian => {
    let tab = accordian.querySelector('.accordian-tab')
    let body = accordian.querySelector('.accordian-body')
    body.classList.add('hide')


    tab.addEventListener('click', () => {
        body.classList.toggle('hide');
        //create class called hided for display none, then toggle that
    });
});

