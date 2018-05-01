$(document).ready(function () {
  $('#searchInput').val('');
  $('#searchInput').keypress(function(e){
         if(e.which == 13){
             $("#magnifyingGlass").click();
     });
  $("#magnifyingGlass").click(function() {
  
  $.ajax ({
    url: "https://en.wikipedia.org/w/api.php?action=query&list=search&srsearch=" +  encodeURIComponent($("input").val()) + "&srprop=snippet&format=json&utf8=",
    success: function (file) {
      $(".container").append('<section id="content"></section>')
      $("section").html('');
    for (let i = 0; i < 10; i++) {
      
      $("section").append('<div class="contentBox"> <div class="title"><a target="_blank" href="https://en.wikipedia.org/?curid=' + file.query.search[i].pageid + '">' + file.query.search[i].title + '</a></div><hr/>' ).append('<div class="description">' + file.query.search[i].snippet + '</div></div>')
      
     }
        $("searchInput").val('');
      
   }, cache: false
 }).then(function(){
   $(".container").css({"transform": "translateY(-320px)"})
   
 })
  })
  
  
})