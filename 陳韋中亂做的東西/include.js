document.addEventListener("DOMContentLoaded", () => {
  // 1. 自動載入 Header (拔掉斜線)
  const headerEl = document.querySelector("header");
  if (headerEl) {
    fetch("header.html")  // <--- 這裡原本是 "/header.html"
      .then(response => {
        if (!response.ok) throw new Error("Header load failed");
        return response.text();
      })
      .then(html => {
        headerEl.innerHTML = html;
      })
      .catch(err => console.error(err));
  }

  // 2. 自動載入 Footer (拔掉斜線)
  const footerEl = document.querySelector("footer");
  if (footerEl) {
    fetch("footer.html") // <--- 這裡原本是 "/footer.html"
      .then(response => {
        if (!response.ok) throw new Error("Footer load failed");
        return response.text();
      })
      .then(html => {
        footerEl.innerHTML = html;
      })
      .catch(err => console.error(err));
  }
});