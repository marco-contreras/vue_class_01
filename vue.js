var app = new Vue({
    el: '.vue',
    data: {
        message: 'Aprende Vue.js Facilmente',
        src: 'https://steemit-production-imageproxy-upload.s3.amazonaws.com/DQmReM2aoZysGbehUrN6RWkRfRLjaVuR3xL3XFpiY17x7QB'
    },
    beforeCreate : function(){
        console.log('Before Create');
    },
    created : function(){
        console.log('After Create');
    },
    beforeMount : function(){
        console.log('Before Mount');
    },
    mounted : function(){
        console.log('After Mount');
    },
    beforeUpdate : function(){
        console.log('Before Update');
    },
    updated : function(){
        console.log('After Update');
    },
    beforeDestroy : function(){
        console.log('Before Destroy');
    },
    destroyed : function(){
        console.log('After Destroy');
    },
    methods: {
        showMessage: function(){
            return 'Lern Vue';
        },
        showFirstMessage: function(){
            return this.message;
        },
        destroy: function () {
            this.$destroy();
        }
    }

});