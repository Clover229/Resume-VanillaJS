import { projects } from "./projects.js";
import { openProjectModal } from "./modal.js";

document.addEventListener("DOMContentLoaded", () => {
  const list = document.getElementById("project-list");
  projects.forEach((p) => {
    const card = document.createElement("div");
    card.className = "project-card";
    card.dataset.id = p.id;

    card.innerHTML = `
      <img src="${p.image}" alt="${p.title}" />
      <h3>${p.title}</h3>
    `;

    card.addEventListener("click", () => {
      openProjectModal(p.id);
    });

    list.append(card);
  });

  // nav 링크 부드럽게 스크롤
  document.querySelectorAll(".nav a").forEach((link) => {
    link.addEventListener("click", (e) => {
      e.preventDefault();
      const target = document.querySelector(link.getAttribute("href"));
      if (target) {
        target.scrollIntoView({ behavior: "smooth" });
      }
    });
  });
});
