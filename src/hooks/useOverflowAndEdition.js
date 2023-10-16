import { useEffect } from "react";

// Used to check for overflowing resume content everytime a skill item is added. If inner overflow is detected,
// the download button is disabled.
function useOverflowAndEdition(focusedElement, ...dependencies) {
  useEffect(() => {
    const resume = document.querySelector('.resume');
    const summaryTitle = document.querySelector('.summary-bar-title');
    const summaryBar = document.querySelector('.summary-bar');
    const contactBar = document.querySelector('.contact-bar');
    const downloadButton = document.querySelector('.download.button');
    if (resume.scrollHeight > resume.clientHeight || resume.scrollWidth > resume.clientWidth || summaryTitle.scrollHeight > summaryTitle.clientHeight || summaryBar.scrollHeight > summaryBar.clientHeight || summaryBar.scrollWidth > summaryBar.clientWidth || contactBar.scrollHeight > contactBar.clientHeight || contactBar.scrollWidth > contactBar.clientWidth || focusedElement != 0) {
      downloadButton.disabled = true;
    } else {
      downloadButton.disabled = false;
    }
  }, [focusedElement, dependencies])
}

export default useOverflowAndEdition;
