
document.addEventListener('DOMContentLoaded', function () {

  function setupSmoothScroll() {
    const btn = document.querySelectorAll('a[href*="#"]');
    const hiddenElement = document.getElementById("target");
    btn.forEach(function (btns) {
      btns.addEventListener("click", function (e) {
        e.preventDefault();
        hiddenElement.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
      });
    });
  }

  function setupImageClickHandlers() {
    function handleImageClick(imageId, handId) {
      var image = document.getElementById(imageId);
      var hand = document.getElementById(handId);

      if (image && hand) {
        image.classList.remove('blur');
        hand.classList.add('hidden');
      }
    }

    var imageIds = ['image1', 'image2', 'image3', 'image4'];
    var handIds = ['hand1', 'hand2', 'hand3', 'hand4'];

    imageIds.forEach((imageId, index) => {
      var handId = handIds[index];

      var imageElement = document.getElementById(imageId);
      var handElement = document.getElementById(handId);

      if (imageElement && handElement) {
        imageElement.addEventListener('click', function () {
          handleImageClick(imageId, handId);
        });

        handElement.addEventListener('click', function () {
          handleImageClick(imageId, handId);
        });
      }
    });
  }

  function displayCurrentAndNextMonth() {
    const months = [
      "يناير", "فبراير", "مارس", "أبريل", "مايو", "يونيو", "يوليو", "أغسطس", "سبتمبر", "أكتوبر", "نوفمبر", "ديسمبر"
    ];

    const currentDate = new Date();
    const currentMonthIndex = currentDate.getMonth();
    const currentMonth = months[currentMonthIndex];
    const nextMonthIndex = (currentMonthIndex + 1) % 12;
    const nextMonth = months[nextMonthIndex];

    const monthElement = document.getElementById('month');
    const nextMonthElement = document.getElementById('next_month');

    if (monthElement) {
      monthElement.innerHTML = `${currentMonth}`;
    }

    if (nextMonthElement) {
      nextMonthElement.innerHTML = `${nextMonth}`;
    }
  }

  setupSmoothScroll();
  setupImageClickHandlers();
  displayCurrentAndNextMonth();
});