/* SweepNspect Prototype - JavaScript */

let currentScreen = 'screen-home';

function navigateTo(screenId) {
  const current = document.getElementById(currentScreen);
  const next = document.getElementById(screenId);
  
  if (current) {
    current.classList.remove('active');
  }
  
  setTimeout(() => {
    if (next) {
      next.classList.add('active');
      // Scroll to top of new screen
      const content = next.querySelector('.screen-content');
      if (content) content.scrollTop = 0;
    }
    currentScreen = screenId;
  }, 50);
}

function toggleCheck(element) {
  if (element.classList.contains('checked')) {
    element.classList.remove('checked');
    element.classList.add('flagged');
  } else if (element.classList.contains('flagged')) {
    element.classList.remove('flagged');
  } else {
    element.classList.add('checked');
  }
}

function showLockedModal(type) {
  const modal = document.getElementById('modal-locked');
  const icon = document.getElementById('locked-modal-icon');
  const title = document.getElementById('locked-modal-title');
  const text = document.getElementById('locked-modal-text');

  if (type === 'gas') {
    icon.textContent = '🔵';
    title.textContent = 'Gas Fireplace Service';
    text.textContent = 'This feature requires NFI Gas Specialist certification. Gas appliances have unique safety requirements that this certification ensures you can identify and address.';
  } else if (type === 'pellet') {
    icon.textContent = '🟤';
    title.textContent = 'Pellet Stove Service';
    text.textContent = 'This feature requires NFI Pellet Specialist certification. Pellet appliances have unique mechanical and electrical components that require specialized knowledge.';
  }

  modal.classList.add('active');
}

function showMasterSweepModal() {
  document.getElementById('modal-master-sweep').classList.add('active');
}

function hideModal(modalId) {
  document.getElementById(modalId).classList.remove('active');
}

// Close modals on overlay click
document.querySelectorAll('.modal-overlay').forEach(overlay => {
  overlay.addEventListener('click', (e) => {
    if (e.target === overlay) {
      overlay.classList.remove('active');
    }
  });
});
