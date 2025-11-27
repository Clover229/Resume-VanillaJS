import { projects } from "./projects.js";

const modal = document.getElementById("project-modal");
const modalTitle = modal.querySelector(".modal-title");
const modalImg = modal.querySelector(".modal-img");
const modalDesc = modal.querySelector(".modal-desc");
const closeBtn = modal.querySelector(".close-btn");

export function openProjectModal(id) {
  const p = projects.find((x) => x.id === id);
  if (!p) return;

  modalTitle.textContent = p.title;
  modalImg.src = p.image;
  modalImg.alt = p.title;
  modalDesc.textContent = p.description;

  modal.classList.add("show");
}

export function closeModal() {
  modal.classList.remove("show");
}

closeBtn.addEventListener("click", closeModal);
modal.addEventListener("click", (e) => {
  if (e.target === modal) closeModal();
});
