(function(){
  var items=[['home','Overview'],['1','Sampling'],['2','Framing'],['3','Windowing'],['4','FFT'],['5','Spectrogram'],['6','Mel features'],['7','Embedding & decision'],['terms','Glossary']];
  var aside=document.createElement('aside');
  aside.className='side-guide';
  aside.setAttribute('aria-label','화자 식별 가이드 목차');
  aside.innerHTML='<strong class="side-brand">SPEAKER ID · GUIDE</strong><nav>'+items.map(function(x,i){return '<a href="#'+x[0]+'" data-side="'+x[0]+'"><span>'+(i?String(i).padStart(2,'0'):'—')+'</span>'+x[1]+'</a>';}).join('')+'</nav><p class="side-note">마이크 입력이 화자 이름으로 바뀌는 과정을 신호의 형태 변화에 따라 설명합니다.</p>';
  document.body.insertBefore(aside,document.body.firstChild);
  function sync(){var id=location.hash.slice(1)||'home';aside.querySelectorAll('a').forEach(function(a){a.classList.toggle('active',a.dataset.side===id);});document.querySelectorAll('.page figure').forEach(function(f){f.classList.toggle('animate',f.closest('.page').classList.contains('on'));});}
  addEventListener('hashchange',function(){requestAnimationFrame(sync);});
  document.querySelectorAll('.page figure svg').forEach(function(svg){var f=svg.closest('figure'),b=document.createElement('button');b.type='button';b.className='replay-visual';b.textContent='애니메이션 다시 보기';b.addEventListener('click',function(){f.classList.remove('animate');void f.offsetWidth;f.classList.add('animate');});f.insertBefore(b,f.firstChild);});
  sync();
})();
