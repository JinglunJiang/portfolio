function toggleMenu() {
  const menu = document.querySelector(".menu-links");
  const icon = document.querySelector(".hamburger-icon");
  menu.classList.toggle("open");
  icon.classList.toggle("open");
}

let likeCount = localStorage.getItem('likeCount') || 0;

function incrementLikes() {
  likeCount++;
  document.getElementById('like-count').innerText = likeCount;
  localStorage.setItem('likeCount', likeCount);
}

// Set initial like count on page load
document.addEventListener("DOMContentLoaded", function () {
  document.getElementById('like-count').innerText = likeCount;
});
