window.addEventListener("scroll", function () {
    const header = document.querySelector(".headerTop");
    if (window.scrollY > 0) {
      header.classList.add("sticky");
    } else {
      header.classList.remove("sticky");
    }
  });