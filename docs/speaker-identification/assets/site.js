const button=document.querySelector('#theme');
const saved=localStorage.getItem('dnn-theme');
if(saved==='dark'||(!saved&&matchMedia('(prefers-color-scheme: dark)').matches))document.documentElement.classList.add('dark');
button?.addEventListener('click',()=>{document.documentElement.classList.toggle('dark');const dark=document.documentElement.classList.contains('dark');localStorage.setItem('dnn-theme',dark?'dark':'light');button.setAttribute('aria-label',dark?'라이트 모드':'다크 모드')});
