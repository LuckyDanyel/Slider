
import '../scss/slider.scss';
import '../index.pug';
import './slider';

import Slider from './slider';
let getSliderDoom = document.querySelectorAll('.slider');

let slider;

getSliderDoom.forEach(element => { // Слайдеров может быть несколько на странице. Если слайдер на странице один, то это конструкция будет работать 
      slider = new Slider({
            $el: element, // Элемент на странице
            size: 5, // Количетсво картинок в каждом слайде
      })
});


      











