let deferredPrompt = null;

window.addEventListener("beforeinstallprompt", (e) => {
  e.preventDefault();
  deferredPrompt = e;
  console.log("📲 beforeinstallprompt captured. Ready to trigger A2HS.");
});

// Export arrow function to trigger prompt
export const triggerA2HS = () => {
  if (deferredPrompt) {
    deferredPrompt.prompt();
    deferredPrompt.userChoice.then((choiceResult) => {
      if (choiceResult.outcome === "accepted") {
        console.log("✅ User accepted the A2HS prompt");
      } else {
        console.log("❌ User dismissed the A2HS prompt");
      }
      deferredPrompt = null;
    });
  } else {
    console.log("⚠️ A2HS not ready yet");
  }
};
