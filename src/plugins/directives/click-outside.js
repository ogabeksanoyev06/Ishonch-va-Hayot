import Vue from 'vue'

Vue.directive('on-click-outside', {
  bind: function (el, binding, vnode) {
    el.clickOutsideEvent = function (event) {
      // here I check that click was outside the el and his childrens
      const ignoreClasses = binding.arg
      const exceptions = Array.from(event.target.classList).filter(ignoreClass => ignoreClasses.includes(ignoreClass));
      if ((!(el == event.target || el.contains(event.target))) && exceptions.length <= 0) {
        // and if it did, call method provided in attribute value
        vnode.context[binding.expression](event);
      }
    };
    document.body.addEventListener('click', el.clickOutsideEvent)
  },
  unbind: function (el) {
    document.body.removeEventListener('click', el.clickOutsideEvent)
  },
});
