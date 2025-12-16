// small UI helpers
document.getElementById('year').textContent = new Date().getFullYear();

// profile click to enlarge (optional)
const img = document.getElementById('profile-img');
if(img){
  img.style.cursor = 'pointer';
  img.addEventListener('click', ()=> {
    const win = window.open();
    win.document.write(`<img src="${img.src}" style="max-width:95vw;max-height:95vh;">`);
  });
}

// contact form demo (no backend)
const form = document.getElementById('contact-form');
const note = document.getElementById('form-note');
if(form){
  form.addEventListener('submit', e=>{
    e.preventDefault();
    note.textContent = 'Thank you — message captured (demo). For real sending configure Netlify Forms or a backend.';
    form.reset();
  });
}
