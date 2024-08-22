/* Индекс слайда по умолчанию
var slideIndex = 1;
showSlides(slideIndex);
Функция увеличивает индекс на 1, показывает следующй слайд
function plusSlide() {
    showSlides(slideIndex += 1);
}
Функция уменьшяет индекс на 1, показывает предыдущий слайд
function minusSlide() {
    showSlides(slideIndex -= 1);
}Устанавливает текущий слайд
function currentSlide(n) {
    showSlides(slideIndex = n);
}
 Основная функция слайдера
function showSlides(n) {
    var i;
    var slides = document.getElementsByClassName("item");
    var dots = document.getElementsByClassName("slider-dots_item");
    if (n > slides.length) {
        slideIndex = 1
    }
    if (n < 1) {
        slideIndex = slides.length
    }
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex - 1].style.display = "block";
    dots[slideIndex - 1].className += " active";
}*/

/* Фокус*/

const driver = window.driver.js.driver;
const formEl = document.getElementById('start')

formEl.addEventListener('click', () => {
    const tour = driver({
        popoverClass: 'driverjs-theme',
        nextBtnText: 'Далее',
        prevBtnText: 'Назад',
        doneBtnText: 'Завершить',
        showProgress: true,
        progressText: '{{current}} из {{total}}',
        steps: [
            { element: '#left-menu-list', popover: { title: 'Быстрая навигация', description: 'В данном меню расположены </br>основные категории товаров,</br> а также можно перейти к </br>новинкам и товарам по акции.' } },
            { element: '#calculator-link', popover: { title: 'Калькулятор пряжи', description: 'Используйте калькулятор, чтобы определить необходимое</br> количество пряжи для вязания будущего аксессуара.', side: "top", align: 'start' } },
            { element: '#location', popover: { title: 'Местоположение', description: 'Выберите свой город, для расчета</br> примерной стоимости доставки.', side: "bottom", align: 'start' } },
            { element: '#profile', popover: { title: 'Каталог с категориями', description: "<img class='gif' src='gif/1.gif'><span class='elemText'>Каталог стоит использовать для быстрого поиска нужной продукции, с помощью предложенных фильтров. В выбранной категории можно дополнительно настроить фильтры по цене, назначению и&nbsp;другим&nbsp;параметрам.</span>", side: "bottom", align: 'start' } },
            { element: '#favorites', popover: { title: 'Избранное', description: "<img class='gif' src='gif/2.gif'><span class='elemText'>При исследовании каталога, понравившиеся модели продукции можно добавить в избранное. Далее во вкладке 'Любимое' можно продолжить покупку, добавив товар в корзину, либо убрать неподходящий товар.</span>" } },
            { element: '#basket-line', popover: { title: 'Корзина товаров', description: "<img class='gif' src='gif/3.gif'><span class='elemText'>Корзина хранит выбранные Вами товары к покупке из каталога или 'Избранного'. Для завершения покупки перейдите к оформлению заказа, нажав на соответствующую кнопку. Далее выберите вариант доставки и способ оплаты, заполните данные получателя, при наличии введите промокод и перейдите к оплате заказа. Также есть возможность оформить заявку через менеджера.</span>" } },
            { element: '#main-banners', popover: { title: 'Новостные баннеры', description: 'Информационнае баннеры, информирующие</br> о поступлении товаров, новинок и других новостях</br> магазина Yarn21. Кликните по баннеру, чтобы</br> ознакомиться с соответствующей новостью.' } },
            { element: '#brand', popover: { title: 'Бренды', description: 'Используйте данное меню для перехода</br> к каталогу пряжи указанного бренда.' } },
            { element: '#buttons', popover: { title: 'Action buttons', description: 'Manage the current dashboard or create new one.' } },
            { element: '#catalog-pryazha', popover: { title: 'Группировка пряжи по назначению', description: 'Используйте данное меню для перехода</br> к пряже, используемой для определенных задач.' } },
            { element: '#catalog-spitsy', popover: { title: 'Группировка спиц по типу', description: 'Используйте данное меню для перехода</br> к спицам определенного типа.' } },
            { element: '#catalog-kryuchki', popover: { title: 'Группировка крючков по типу', description: 'Используйте данное меню для перехода</br> к крючкам определенного типа.' } },
            { element: '#subscribe-form', popover: { title: 'Подписка на рассылку', description: 'Чтобы не пропустить очередную распродажу</br> или праздничные скидки, рекомендуем подписаться</br> на рассылку и всегда быть в курсе всех новинок!.' } },


        ]
    })

    tour.drive()
})


/* Бургер-меню */
const iconMenu = document.querySelector('.menu__icon');
const navMenu = document.querySelector('.menu__nav');

if (iconMenu) {
    iconMenu.addEventListener("click", function () {

        document.body.classList.toggle('lock');
        iconMenu.classList.toggle('active');
        navMenu.classList.toggle('active');
    }
    );
}

/* Замена в title*/
let introText = document.querySelector('.intro__title');
let windowWidth = document.documentElement.clientWidth;

if (windowWidth <= 375) {
    introText.innerHTML = "Enjoy Foods Over <span>World</span>";
} else {
    introText.innerHTML = "Enjoy Foods All Over The <span>World</span>";
}

if (windowWidth <= 456) {
    document.getElementsByName('email')[0].placeholder = 'Email Address';
} else {
    document.getElementsByName('email')[0].placeholder = "Enter Your Email Address";
}

/* Переворот в select*/
const select = document.querySelector('.purchases__select');

document.addEventListener("click", function (e) {
    select.classList.toggle('active');

    const click = e.composedPath().includes(select);
    if (!click) {
        select.classList.remove('active'); // скрываем элемент т к клик был за его пределами
    }
});

/* Слайдер
var splide = new splide('.splide');
var bar = splide.root.querySelector('.my-carousel-progress-bar');

// Обновление ширины при прокрутке:
splide.on('mounted move', function () {
    var end = splide.Components.Controller.getEnd() + 1;
    var rate = Math.min((splide.index + 1) / end, 1);
    bar.style.width = String(100 * rate) + '%';
});

splide.mount();*/






