import { createApp } from 'vue'
import App from './App.vue'


let app = createApp(App);
app.directive('clickoutside',{
    beforeMount: function(el, binding) {

        el.clickOutsideEvent = function(event) {
            // here I check that click was outside the el and his childrens
            if (!(el == event.target || el.contains(event.target))) {
                // and if it did, call method provided in attribute value
                binding.value(event, el);
            }
        };
        document.body.addEventListener("click", el.clickOutsideEvent);
        document.body.addEventListener("touchstart", el.clickOutsideEvent);
    },
    unmounted: function(el) {
        document.body.removeEventListener("click", el.clickOutsideEvent);
        document.body.removeEventListener("touchstart", el.clickOutsideEvent);
    },
    stopProp(event) {
        event.stopPropagation();
    }
});
app.mount('#app');
