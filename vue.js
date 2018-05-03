var app = new Vue({
    el: '.vue',
    data: {
        message: 'Aprende Vue.js Facilmente',
        src: 'https://steemit-production-imageproxy-upload.s3.amazonaws.com/DQmReM2aoZysGbehUrN6RWkRfRLjaVuR3xL3XFpiY17x7QB'
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