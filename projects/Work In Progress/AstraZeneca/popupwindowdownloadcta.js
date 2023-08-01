function handleIframeClick(event) {
    const parentOrigin = window.location.origin;
    parent.postMessage("downloadEmailCTA", parentOrigin);
}

const textDownload = document.querySelector(".text-download");
textDownload.addEventListener("click", handleIframeClick);