let structDoom = function(size){
     
      let result = " ";
      for(let i = 0; i < size; i++ ){
            result += `<div class = "slider__item"> ${i + 1} </div>`;
      }
      return `
            <div class="slider__wrapper">
                  <div class="slider__image">${result}</div>
                  <button class="slider__btn-left"></button>
                  <button class="slider__btn-right"></button>
            </div>`
}
class Slider {
      
      constructor(options) {
            this.$el = options.$el;
            this.size = options.size;

           
            this.loadHtml(this.size);
            this.Items = this.$el.querySelectorAll('.slider__item');
            this.BtnRight = this.$el.querySelector('.slider__btn-right');
            this.BtnLeft = this.$el.querySelector('.slider__btn-left');
            this.#render();

      }

      active = 0;

      uploadImages(index, massiveImages) {
            let reader = new File
      }
     
      loadHtml = (size) => {
            this.$el.innerHTML = structDoom(size);
      }
      changeItem = (func) => {
      
            let classAnimNext = 'slider__next-animation';
            let classAnimLast = 'slider__prev-animation';
            let classPrev = 'slider__prev';
            let classItem = 'slider__item';
            
            func(classPrev, classAnimNext, classItem, classAnimLast); // call back функция
            
                
      }
      upCount = () => (this.isEndElementsRight() == true) ? this.active = 0 : this.active++;

      swipeRight = (cPrev, cActive, cItem) => {
            this.addClasses(cItem); // Очищаем лишнее
            this.addClass(this.active, cPrev); // Добавляем текущему элементу класс prev
            
            this.upCount(); // call back функция
            this.addClass(this.active, cActive); // Добавляем следующему элементу класс active
      }
      downCount = () => (this.isEndElementsLeft() == true) ? this.active = this.Items.length - 1 : this.active--;


      swipeLeft = (cPrev, cActive = null, cItem, animLast) => {
            this.addClasses(cItem);
            this.addClass(this.active, cPrev);

            this.downCount();
            console.log(this.active);
            this.addClass(this.active, animLast);

           
      }
      
      isEndElementsRight = () => (this.active + 1 == this.Items.length) ? true : false;

      isEndElementsLeft = () => (this.active == 0) ? true : false;
      
      deleteClasses = (className) => {
      
            for (let i = 0; i < this.Items.length; i++) {
                  this.Items[i].classList.remove(className);
            }
           
      
      }
      addClasses = (nameClass) => {
            for (let i = 0; i < this.Items.length; i++) {
                  this.Items[i].className = nameClass;
            }
           
      }
      addClass = (index, className) => {
            this.Items[index].classList.add(className);
      }
      removeClass = (index, className) => {
        
            this.Items[index].classList.remove(className);
      }
      
      #render = () => {
            
            this.BtnRight.addEventListener('click', this.changeItem.bind(this, this.swipeRight));
            this.BtnLeft.addEventListener('click', this.changeItem.bind(this, this.swipeLeft));
      }
      

}
export default Slider;





