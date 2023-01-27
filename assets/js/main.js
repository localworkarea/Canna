window.addEventListener("DOMContentLoaded", (event) => {

// OPEN-CLOSE SIDE BLOCKS ===============================================
function lockSideAdd() {
  document.documentElement.classList.add("lock");
  document.documentElement.classList.add("side-open");
}

const iconMenu = document.querySelector(".icon-menu");
if (iconMenu) {
	iconMenu.addEventListener("click", function (e) {
		if (e.target.closest('.icon-menu')) {
			lockSideAdd();
			document.documentElement.classList.add("menu-open");
			document.documentElement.classList.remove("contacts-open");
      document.documentElement.classList.remove("filters-all");
      document.documentElement.classList.remove("item-show");
      document.documentElement.classList.remove("cart-open");
		}
	});
};

const menuLinkContact = document.querySelector(".menu-link-contact");
if (menuLinkContact) {
	menuLinkContact.addEventListener("click", function (e) {
		if (e.target.closest('.menu-link-contact')) {
      lockSideAdd();
			document.documentElement.classList.add("contacts-open");
      document.documentElement.classList.remove("menu-open");
			document.documentElement.classList.remove("cart-open");
			document.documentElement.classList.remove("item-show");
      document.documentElement.classList.remove("filters-all");
		}
	});
};

const allFilters = document.querySelector(".btn-all-filters"); 
if (allFilters) {
	allFilters.addEventListener("click", function (e) {
		if (e.target.closest('.btn-all-filters')) {
      lockSideAdd();
			document.documentElement.classList.add("filters-all");
      document.documentElement.classList.remove("menu-open");
      document.documentElement.classList.remove("contacts-open");
      document.documentElement.classList.remove("item-show");
			document.documentElement.classList.remove("cart-open");
		}
	});
};


const productItem = document.querySelectorAll(".product");
productItem.forEach(item => {
  item.addEventListener("click", itemInit);
});
function itemInit() {
  document.documentElement.classList.add("lock");
  document.documentElement.classList.add("item-show");
  document.documentElement.classList.remove("side-open");
  document.documentElement.classList.remove("menu-open");
  document.documentElement.classList.remove("contacts-open");
  document.documentElement.classList.remove("filters-all");
	document.documentElement.classList.remove("cart-open");
}


const headerCart = document.querySelectorAll(".header__cart");
headerCart.forEach(item => {
	item.addEventListener("click", cartInit);
});
function cartInit() {
  lockSideAdd();
  document.documentElement.classList.add("cart-open");
  document.documentElement.classList.remove("menu-open");
  document.documentElement.classList.remove("contacts-open");
  document.documentElement.classList.remove("filters-all");
  document.documentElement.classList.remove("item-show");
}

const sideIcon = document.querySelectorAll(".side__icons");
sideIcon.forEach(items => {
	items.addEventListener("click", sideClose);
});
function sideClose() {
    document.documentElement.classList.remove("lock");
		document.documentElement.classList.remove("side-open");
    document.documentElement.classList.remove("menu-open");
    document.documentElement.classList.remove("contacts-open");
    document.documentElement.classList.remove("filters-all");
    document.documentElement.classList.remove("item-show");
    document.documentElement.classList.remove("cart-open");
}


// == PRODUCR-ITEM SLIDER ==================================================
	if (document.querySelector('.product-item__slider')) { 
		new Swiper('.product-item__slider', {
			slidesPerView: 1,
			loop: true,
			pagination: {
				el: '.product-item__slider .swiper-pagination',
				clickable: true,
			},
			navigation: {
				prevEl: '.product-item__slider .swiper-button-prev',
				nextEl: '.product-item__slider .swiper-button-next',
			},
      	// Миниатюры (превью)
	    thumbs: {
	    	swiper: {
	    		el: '.product-item__slider-mini ',
	    		slidesPerView: 4,
	    	}
	    },
		});
	}

  // == FILTERS__SLIDER SLIDER ==================================================
  if (document.querySelector('.filters__slider')) { 
		new Swiper('.filters__slider', {
      slidesPerView: "auto",
      spaceBetween: 24,
      centeredSlides: false,
      loop: true,
		});
	}

             
  // == Input Mask for Phone input  =========================================================
  [].forEach.call( document.querySelectorAll('.tel-input'), function(input) {
    var keyCode;
    function mask(event) {
        event.keyCode && (keyCode = event.keyCode);
        var pos = this.selectionStart;
        if (pos < 3) event.preventDefault();
        var matrix = "+7 (___) ___ ____",
            i = 0,
            def = matrix.replace(/\D/g, ""),
            val = this.value.replace(/\D/g, ""),
            new_value = matrix.replace(/[_\d]/g, function(a) {
                return i < val.length ? val.charAt(i++) || def.charAt(i) : a
            });
        i = new_value.indexOf("_");
        if (i != -1) {
            i < 5 && (i = 3);
            new_value = new_value.slice(0, i)
        }
        var reg = matrix.substr(0, this.value.length).replace(/_+/g,
            function(a) {
                return "\\d{1," + a.length + "}"
            }).replace(/[+()]/g, "\\$&");
        reg = new RegExp("^" + reg + "$");
        if (!reg.test(this.value) || this.value.length < 5 || keyCode > 47 && keyCode < 58) this.value = new_value;
        if (event.type == "blur" && this.value.length < 5)  this.value = ""
    }
  
    input.addEventListener("input", mask, false);
    input.addEventListener("focus", mask, false);
    input.addEventListener("blur", mask, false);
    input.addEventListener("keydown", mask, false);
  
    });

    // == CART STATUS ===============================================================================
    const cartProductWrap = document.querySelector('.cart__product-item');
    
    // add class to header__cart ---------------
    if (cartProductWrap.children.length > 0) {
      // console.log ('CART FULL');
      headerCart.forEach(item => {
        item.classList.add('cart-full');
        item.classList.remove('cart-empty');
      });
    } else {
      // console.log ('CART EMPTY');
      headerCart.forEach(item => {
        item.classList.remove('cart-full');
        item.classList.add('cart-empty');
      });
    }

  });