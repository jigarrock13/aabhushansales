(() => {
  const cleanPhone = (value) => String(value || "").replace(/[^\d]/g, "");
  const buildMessage = (form) => {
    const data = new FormData(form);
    const business = form.dataset.businessName || "Aabhushan Sales";
    const product = data.get("product") || "";
    const category = data.get("category") || "jewellery";
    const budget = data.get("budget") || "not specified";
    const occasion = data.get("occasion") || "not specified";
    if (product) return `Hello ${business}, I am interested in ${product}. Occasion: ${occasion}. Please share availability and details.`;
    return `Hello ${business}, I am looking for ${category}. Budget: ${budget}. Occasion: ${occasion}. Please share available options.`;
  };
  const init = () => {
    document.querySelectorAll("[data-aabhushan-enquiry]").forEach((form) => {
      if (form.dataset.ready === "true") return;
      form.dataset.ready = "true";
      form.addEventListener("submit", async (event) => {
        event.preventDefault();
        const message = buildMessage(form);
        const output = form.querySelector("[data-aabhushan-output]");
        const whatsapp = form.querySelector("[data-aabhushan-whatsapp-action]");
        let copied = false;
        try { if (navigator.clipboard) { await navigator.clipboard.writeText(message); copied = true; } } catch {}
        if (output) { output.value = copied ? `${message}\n\nMessage copied.` : message; output.textContent = output.value; }
        if (whatsapp) {
          const number = cleanPhone(form.dataset.whatsappNumber);
          if (number) { whatsapp.href = `https://wa.me/${number}?text=${encodeURIComponent(message)}`; whatsapp.hidden = false; }
        }
      });
    });
  };
  if (document.readyState === "loading") document.addEventListener("DOMContentLoaded", init); else init();
  document.addEventListener("shopify:section:load", init);
})();
