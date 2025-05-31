async function loadPage(page) {
  const html = await window.api.loadPage(page);
  document.getElementById("banner").innerText = page.toUpperCase() + " PAGE";
  document.getElementById("content").innerHTML = html;
}

window.onload = () => loadPage("main");
