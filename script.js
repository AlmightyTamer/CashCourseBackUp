// ----------------- PAGE NAVIGATION -----------------
function showPage(pageId) {
  const pages = document.querySelectorAll('.page');
  pages.forEach(p => p.classList.remove('active'));
  const page = document.getElementById(`page-${pageId}`);
  if(page) page.classList.add('active');

  // Update active link
  document.querySelectorAll('.nav-links a').forEach(link => link.classList.remove('active'));
  const link = Array.from(document.querySelectorAll('.nav-links a'))
    .find(a => a.getAttribute('onclick').includes(pageId));
  if(link) link.classList.add('active');
}

function goToHome() {
  showPage('home');
}

// ----------------- AUTH MODAL -----------------
function openAuthModal(mode) {
  const modal = document.getElementById('authModal');
  modal.style.display = 'flex';
  const title = document.getElementById('authModalTitle');
  title.textContent = mode === 'login' ? 'Welcome back' : 'Create Account';
}

function closeAuthModal() {
  const modal = document.getElementById('authModal');
  modal.style.display = 'none';
}

function handleAuthSubmit() {
  alert('Auth submitted (demo only)');
  closeAuthModal();
}
