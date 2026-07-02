const whatsappNumber = "34XXXXXXXXX";
const whatsappMessage =
  "Hola, me gustaría recibir información sobre las clases de yoga de Senda.";

const whatsappLinks = document.querySelectorAll('a[href*="wa.me"]');

whatsappLinks.forEach((link) => {
  link.href = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
    whatsappMessage
  )}`;
  link.target = "_blank";
});


const elementsToAnimate = document.querySelectorAll(".section, article");

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("show");
      }
    });
  },
  {
    threshold: 0.15,
  }
);

elementsToAnimate.forEach((element) => {
  element.classList.add("hide");
  observer.observe(element);
});


const footerText = document.querySelector("footer p");

if (footerText) {
  footerText.textContent = `© ${new Date().getFullYear()} Senda Yoga · Todos los derechos reservados.`;
}
