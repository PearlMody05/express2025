window.addEventListener("DOMContentLoaded", () => {
  const canvas = document.getElementById("certificateCanvas");
  const ctx = canvas.getContext("2d");
  const downloadBtn = document.getElementById("downloadBtn");

  downloadBtn.disabled = true;

  const img = new Image();
  img.src = "./public/assets/cer.png";
  img.onload = () => {
    ctx.drawImage(img, 0, 0, canvas.width, canvas.height);

    // Draw verified name from backend
    const name = window.verifiedName || "Unknown";
    ctx.font = "bold 60px Arial";
    ctx.fillStyle = "#fff";
    ctx.textAlign = "center";
    ctx.fillText(name, canvas.width / 2, 480);

    downloadBtn.disabled = false;
  };

  img.onerror = () => {
    ctx.font = "30px Arial";
    ctx.fillStyle = "red";
    ctx.fillText(
      "Certificate image not found!",
      canvas.width / 2,
      canvas.height / 2
    );
  };

  downloadBtn.addEventListener("click", () => {
    const link = document.createElement("a");
    link.href = canvas.toDataURL("image/png");
    link.download = "certificate.png";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  });
});
