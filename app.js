(() => {
 const $=s=>document.querySelector(s),$$=s=>[...document.querySelectorAll(s)];
 const nav=$('#nav'),toggle=$('#menuToggle');
 toggle?.addEventListener('click',()=>{const open=nav.classList.toggle('open');toggle.setAttribute('aria-expanded',String(open));toggle.setAttribute('aria-label',open?'Close navigation':'Open navigation')});
 $$('#nav a').forEach(a=>a.addEventListener('click',()=>{nav.classList.remove('open');toggle?.setAttribute('aria-expanded','false')}));
 const progress=$('#progress'),update=()=>{const max=document.documentElement.scrollHeight-innerHeight;if(progress)progress.style.width=(max>0?scrollY/max*100:0)+'%'};
 addEventListener('scroll',update,{passive:true});update();$('#year').textContent=new Date().getFullYear();
 const items=$$('.reveal');if('IntersectionObserver'in window){const observer=new IntersectionObserver(entries=>entries.forEach(entry=>{if(entry.isIntersecting){entry.target.classList.add('is-visible');observer.unobserve(entry.target)}}),{threshold:.12,rootMargin:'0px 0px -35px 0px'});items.forEach(item=>observer.observe(item))}else items.forEach(item=>item.classList.add('is-visible'));
 $$('.project-card').forEach((card,index)=>card.style.transitionDelay=(index*80)+'ms');


  // Gallery images are served as optimized WebP assets; no client-side
  // base64 decoding is needed.


  // Load user-supplied VOIS photographs from the existing text assets.
  $('img[data-photo-base64]').forEach(async image => {
    try {
      const response = await fetch(image.dataset.photoBase64);
      if (!response.ok) throw new Error('Photo asset unavailable');
      const encoded = (await response.text()).trim();
      if (!/^[A-Za-z0-9+/=]+$/.test(encoded)) throw new Error('Invalid photo asset');
      image.src = 'data:image/jpeg;base64,' + encoded;
    } catch (error) {
      image.alt = 'Photo unavailable: ' + image.alt;
    }
  });
})();