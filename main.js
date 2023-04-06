$('.hamburger-button').click(function(){
    $('.mobile-menu').fadeToggle(100);
    $(this).toggleClass('active');
});

// AOS Animation
AOS.init({
    offset: 320, // offset (in px) from the original trigger point
    delay: 0, // values from 0 to 3000, with step 50ms
    duration: 1500, // values from 0 to 3000, with step 50ms
    easing: 'ease', // default easing for AOS animations
    once: false, // whether animation should happen only once - while scrolling down
    mirror: false, // whether elements should animate out while scrolling past them
    anchorPlacement: 'top-bottom', // defines which position of the element regarding to window should trigger the animation
    });

// Load More Button
var numPosts = 4;

$(document).ready(function() {
  loadPosts();
});

function loadPosts() {
  $.ajax({
    url: "/index.html" + numPosts, // replace with the URL of your Jekyll site
    method: "GET",
    dataType: "json"
  }).done(function(response) {
    addPosts(response.posts);
    numPosts += 4;
  }).fail(function() {
    console.log("Failed to load blog posts.");
  });
}

// function addPosts(posts) {
//   var container = $("#blog-container");
//   $.each(posts, function(index, post) {
//     var postHtml = "<div class='post'>" +
//       "<h2>" + post.title + "</h2>" +
//       "<p>" + post.content + "</p>" +
//       "</div>";
//     container.append(postHtml);
//   });
//   // adjust the height of the container
//   var containerHeight = container.height();
//   container.css("height", containerHeight + "px");
// }

$("#load-more").click(function() {
  loadPosts();
});
