class Menu {
  constructor() {
    this.hamburger = document.querySelector('.menu-toggle')
    this.mainNav = document.querySelectorAll('.main-nav .nav-columns')
    this.mobileNav = document.querySelectorAll('.nav-columns');
    this.submenu = document.querySelectorAll('.js-sub-menu');
  }

  events() {
    if (this.hamburger) {
      this.hamburger.addEventListener('click', e => {
        e.preventDefault();
        this.hamburger.querySelector('.svg-hamburger').classList.toggle('is-active')
        document.querySelector('body').classList.toggle('menu-open');
      });
    }


    if (this.submenu) {
      for (let i = 0; i < this.submenu.length; i++) {
        let subMenu = this.submenu[i];
        let subMenuParent = subMenu.previousElementSibling;
        subMenuParent.classList.add('has-submenu');
        subMenuParent.addEventListener('click', e => {
          e.preventDefault();

          if( this.isHidden(subMenu) ) {
            subMenu.style.display = 'block';
            subMenuParent.classList.add('is-opened');
          } else{
            subMenu.style.display = 'none';
            subMenuParent.classList.remove('is-opened');
          }

          let subMenuWidth = subMenu.offsetWidth;
          let subMenuChildMenu = subMenu.querySelector('.sub-menu');
          if (subMenuChildMenu) {
            subMenuChildMenu.style.left = subMenuWidth + 'px';
          }
        })
      }
    }
  }

  resize() {
    var isMobile = window.matchMedia("only screen and (max-width: 1024px)").matches;
    if (isMobile) {
      this.hamburger.addEventListener('click', e => {
        e.preventDefault();
        for (let i = 0; i < this.mobileNav.length; i++) {
          this.mobileNav[i].style.display = 'block'
        }
      })
    }
  }

  isHidden(el) {
    var style = window.getComputedStyle(el);
    return (style.display === 'none')
  }

  init() {
    this.events();
    this.resize();

    window.addEventListener('resize', () => {
      this.resize();
    });
  }
}

export default Menu;
