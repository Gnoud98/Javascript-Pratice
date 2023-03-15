const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);

const tabItem = $$('.tab-item');
const paneItem = $$('.tab-pane');
const line= $('.line');
const tabActive= $('.tab-item.active')
requestIdleCallback(function () {
    line.style.left = tabActive.offsetLeft + "px";
    line.style.width = tabActive.offsetWidth + "px";
  });

  
tabItem.forEach((tab, index) => {
    const pane = paneItem[index];
    tab.onclick = function () {
        
        this.classList.add('active');
        pane.classList.add('active');

        $('.tab-item.active').classList.remove('active');
        $('.tab-pane.active').classList.remove('active');

        

        line.style.left= this.offsetLeft + 'px';
        line.style.width= this.offsetWidth + 'px';

    }
})