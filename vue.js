var app = new Vue({
    el: '.vue',
    data: {
        message: 'Aprende Vue.js Facilmente'
    },
    methods: {
        showMessage: function(){
            return 'Lern Vue';
        },
        showFirstMessage: function(){
            return this.message;
        }
    }

});