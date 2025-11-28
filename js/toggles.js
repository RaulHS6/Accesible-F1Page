function setupToggle(btnId, contentId, labelShow, labelHide) {
    const btn = document.getElementById(btnId);
    const content = document.getElementById(contentId);
    if (!btn || !content) return;
    btn.addEventListener('click', () => {
        const isExpanded = btn.getAttribute('aria-expanded') === 'true';
        btn.setAttribute('aria-expanded', !isExpanded);
        content.hidden = isExpanded;
        btn.textContent = isExpanded ? labelShow : labelHide;
    });
}

function setupMainToggles() {
    setupToggle('btn-captions', 'captions-content', 'Ver Transcripción', 'Ocultar Transcripción');
    setupToggle('btn-ad', 'ad-content', 'Ver Audio Descripción', 'Ocultar Audio Descripción');
}

document.addEventListener('DOMContentLoaded', setupMainToggles);
