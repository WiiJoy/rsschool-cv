'use strict'

document.addEventListener('DOMContentLoaded', () => {
    const examplies = document.querySelectorAll('.examplies__item'),
          burger = document.querySelector('.hamburger'),
          menuItem = document.querySelectorAll('.menu__item'),
          container = document.querySelector('.container'),
          nav = document.querySelector('.nav'),
          wrapper = document.querySelector('.wrapper');

    examplies.forEach(item => {
        item.addEventListener('mouseover', (ev) => {
            examplies.forEach(item => item.classList.remove('examplies__item_active'))

            item.classList.add('examplies__item_active')
        })
    
        item.addEventListener('mouseout', (ev) => {
            if (ev.toElement && (ev.toElement.classList.contains('examplies__item__img') || ev.toElement.classList.contains('examplies__item__descr'))) return

            item.classList.remove('examplies__item_active')
        })
    })

    burger.addEventListener('click', (ev) => {
        burger.classList.toggle('hamburger_active')
        document.body.classList.toggle('container_inactive')
        nav.classList.toggle('nav_active')
        wrapper.classList.toggle('wrapper_active')
    })

    menuItem.forEach(item => {
        item.addEventListener('click', () => {
            burger.classList.remove('hamburger_active')
            document.body.classList.remove('container_inactive')
            nav.classList.remove('nav_active')
            wrapper.classList.remove('wrapper_active')
        })
    });
})