// ==== 1. Key Verification ====
function checkKey() {
  const key = document.getElementById('accessKey').value;
  const msg = document.getElementById('message');

  if (key === "WHATSAPP000") {
    msg.textContent = "Access granted!";
    msg.className = "success";
    setTimeout(() => {
      window.location.href = "share.html";
    }, 1500);
  } else {
    msg.textContent = "Invalid key. Try again!";
    msg.className = "error";
  }
}

// ==== 2. Share System ====
let shareCount = 0;

function shareOnWhatsApp() {
  const shareText = encodeURIComponent("Hack anyone's WhatsApp in just 1 click! 🔥\nCheck this out: https://your-site.github.io/whatsapp-hack");
  const whatsappUrl = `https://api.whatsapp.com/send?text=${shareText}`;
  window.open(whatsappUrl, "_blank");

  shareCount++;
  document.getElementById("shareCount").innerText = `Shares: ${shareCount} / 5`;

  if (shareCount >= 5) {
    document.getElementById("shareMessage").innerText = "Unlocked! Redirecting...";
    setTimeout(() => {
      window.location.href = "victim.html";
    }, 1500);
  }
}

// ==== 3. Fake Hack Animation ====
const logs = [
  "[+] Connecting to WhatsApp server...",
  "[+] Bypassing end-to-end encryption...",
  "[+] Extracting chat database...",
  "[+] Decrypting messages...",
  "[+] Generating victim access link...",
  "[✔] Hack complete! Access link ready."
];

function startFakeHack() {
  const victimNumber = document.getElementById('victimNumber').value;
  const logBox = document.getElementById('logBox');

  if (victimNumber.trim() === "") {
    alert("Please enter a valid number.");
    return;
  }

  logBox.innerHTML = "";
  let index = 0;

  const logInterval = setInterval(() => {
    logBox.innerHTML += logs[index] + "<br>";
    logBox.scrollTop = logBox.scrollHeight;
    index++;

    if (index === logs.length) {
      clearInterval(logInterval);
      setTimeout(() => {
        window.location.href = "fake.html";
      }, 2000);
    }
  }, 1500);
      }
