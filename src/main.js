import { createApp } from 'vue'
import App from './App.vue'


let app = createApp(App);
app.directive('clicafora',{
    beforeMount: function(el, binding) {
        el.clicaForaEvent = function(event) {
            // here I check that click was outside the el and his childrens
            if (!(el === event.target && el.contains(event.target))) {
                // and if it did, call method provided in attribute value
                binding.value(event, el);
            }

        };
        document.body.addEventListener("click", el.clicaForaEvent);
        document.body.addEventListener("touchstart", el.clicaForaEvent);
    },
    unmounted: function(el) {
        document.body.removeEventListener("click", el.clicaForaEvent);
        document.body.removeEventListener("touchstart", el.clicaForaEvent);
    },
    stopProp(event) {
        event.stopPropagation();
    }
});
app.mount('#app');
