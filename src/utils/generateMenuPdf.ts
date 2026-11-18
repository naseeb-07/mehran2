export function generateMenuPdf() {
  const link = document.createElement("a");
  link.href = "/Mehran-Menu-2026.pdf";
  link.download = "Mehran-Restaurant-Menu-2026.pdf";
  link.target = "_blank";
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
}

