'use strict';
(function () {
  var element = document.querySelector('#popup-phone');
  var maskOptions = {
    mask: '+{7}(000)000-00-00',
    minlength: 10
  };
  return new window.IMask(element, maskOptions);
})();
