
console.log("Loaded!");
$(document).ready(function(){
  $('a.photo').zoom({url: 'download-7.jpg'});
});

// Using Colorbox with Zoom
$(document).ready(function(){
  $('a.photo').zoom({
    url: 'download-7.jpg', 
    callback: function(){
      $(this).colorbox({href: this.src});
    }
  });
});