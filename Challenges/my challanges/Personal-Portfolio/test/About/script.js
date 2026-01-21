document.addEventListener("DOMContentLoaded", () => {
  // Grab once, cache forever
  const btn             = document.querySelector(".info_more-btn");
  const sidebar         = document.querySelector(".sidebar");
  const navbar          = document.querySelector(".navbar");

  if (!btn || !sidebar || !navbar) {
    console.warn("Missing key elements, toggle disabled.");
    return;
  }

  btn.addEventListener("click", () => {
    // 1) Expand / collapse sidebar
    sidebar.classList.toggle("active");

    // 2) Show or hide the mobile navbar (optional)
    navbar.classList.toggle("is-visible");

    // 3) Flip chevron + text
    const icon = btn.querySelector("ion-icon");
    const text = btn.querySelector("span");
    const open = sidebar.classList.contains("active");

    if (icon) icon.setAttribute("name", open ? "chevron-up" : "chevron-down");
    if (text) text.textContent = open ? "Hide Menu" : "Show Menu";
  });
});
