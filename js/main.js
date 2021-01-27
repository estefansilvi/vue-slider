var app = new Vue({
  el: '#app',
  data: {
    active:true,
    imageList: [
      'https://images.pexels.com/photos/371633/pexels-photo-371633.jpeg?cs=srgb&dl=clouds-country-daylight-371633.jpg&fm=jpg',
      'https://static.photocdn.pt/images/articles/2017/04/28/iStock-646511634.jpg',
      'https://cdn.mos.cms.futurecdn.net/FUE7XiFApEqWZQ85wYcAfM.jpg',
      'https://static.photocdn.pt/images/articles/2017/04/28/iStock-546424192.jpg'
    ],

    imageIDX:0,

  },
  methods: {
    next:function(){
      this.imageIDX ++;
      if(this.imageIDX === this.imageList.length){
        this.imageIDX = 0
      }
      return this.imageIDX;
    },
    prev: function(){
      this.imageIDX --;
      if(this.imageIDX == -1){
        this.imageIDX = this.imageList.length - 1;
      }

      return this.imageIDX
    },
    
}
});


Vue.config.devtools = true;
