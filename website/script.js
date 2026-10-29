/* Personalization lives here: edit LETTER_TEXT, MEMORY text in index.html, and PHOTOS below. */
const LETTER_TEXT = `Dear Zunniaaa ♥

Happiest Birthday! 🎂🥹

Kaash aaj main tumhare paas hota aur tumhein saamne se birthday wish kar pata. Even though we are celebrating from different places, I wanted to make something special just for you.

25 March 2025 se shuru hone wala hamara safar mere liye ek special memory hai. Thank you for the moments we have shared. I hope your birthday brings you happiness, peace, smiles, and lots of beautiful opportunities.

Allah tumhari achi khwahishein poori kare, tumhein khush rakhe, aur tumhari zindagi mein barkat de. Ameen. ♥

I hope this little surprise makes you smile. You deserve a lovely birthday filled with happiness and warmth.

Happy Birthday once again, Zunniaaa! 🎂💗

With love,
Hussain ♥`;
// Add or edit real local photos here. Keep alt text accurate and concise.
const PHOTOS = [
  {src:'assets/photos/photo-1.png', alt:'A collage portrait of Zunnia and Hussain'}
];

const $ = (id) => document.getElementById(id);
const welcome = $('welcome'), experience = $('experience');
const reducedMotion=window.matchMedia('(prefers-reduced-motion: reduce)');
function scrollBehavior(){return reducedMotion.matches?'auto':'smooth'}
function enterExperience(){welcome.classList.add('leaving');setTimeout(()=>{welcome.classList.add('hidden');experience.classList.remove('hidden');$('home').scrollIntoView({behavior:scrollBehavior()});},reducedMotion.matches?0:450)}
function replay(){experience.classList.add('hidden');welcome.classList.remove('hidden','leaving');document.querySelectorAll('.candle').forEach(c=>c.classList.remove('out'));$('wish-message').textContent='A little birthday magic, just for you ✨';envelope.classList.remove('open');envelope.closest('.letter-section').classList.remove('letter-open');letterPaper.inert=true;letterPaper.setAttribute('aria-hidden','true');letterPaper.setAttribute('tabindex','-1');letterButton.textContent='Open Your Letter 💌';letterButton.setAttribute('aria-expanded','false');window.scrollTo({top:0,behavior:scrollBehavior()})}
$('open-surprise').addEventListener('click',enterExperience);
$('replay').addEventListener('click',replay);$('replay-final').addEventListener('click',replay);
$('letter-text').textContent=LETTER_TEXT;
function confetti(){let layer=$('confetti-layer');if(!layer){layer=document.createElement('div');layer.id='confetti-layer';layer.setAttribute('aria-hidden','true');document.body.append(layer)}const colors=['#e77fa1','#d8b36c','#aa8bc5','#f3b5bd','#fff0bd'];for(let i=0;i<95;i++){const bit=document.createElement('i');bit.className='confetti';bit.style.left=Math.random()*100+'%';bit.style.background=colors[i%colors.length];bit.style.setProperty('--duration',(2.5+Math.random()*2)+'s');bit.style.setProperty('--drift',(Math.random()*180-90)+'px');layer.append(bit);setTimeout(()=>bit.remove(),5000)}}
$('celebrate').addEventListener('click',confetti);
$('wish').addEventListener('click',()=>{document.querySelectorAll('.candle').forEach(c=>c.classList.add('out'));$('wish-message').textContent='Wish karo, Zunniaaa! ✨ May this year bring you lots of happiness. ♥';confetti()});
const envelope=$('envelope'), letterSection=envelope.closest('.letter-section'), letterPaper=$('letter-paper'), letterButton=$('letter-toggle');letterButton.addEventListener('click',()=>{const open=!envelope.classList.contains('open');envelope.classList.toggle('open',open);letterSection.classList.toggle('letter-open',open);letterPaper.inert=!open;letterPaper.setAttribute('aria-hidden',String(!open));letterPaper.setAttribute('tabindex',open?'0':'-1');letterButton.textContent=open?'Fold Your Letter':'Open Your Letter 💌';letterButton.setAttribute('aria-expanded',String(open))});
const gallery=$('gallery');let activePhoto=0;function renderGallery(){if(!PHOTOS.length){const card=document.createElement('div');card.className='photo-card';card.setAttribute('aria-label','A quiet little photo gallery');card.innerHTML='<span aria-hidden="true">?</span>';gallery.append(card);return}PHOTOS.forEach((photo,i)=>{const card=document.createElement('div');card.className='photo-card has-image';const button=document.createElement('button');button.setAttribute('aria-label',`Open photo ${i+1}: ${photo.alt}`);const img=document.createElement('img');img.src=photo.src;img.alt=photo.alt;img.loading='lazy';img.onerror=()=>{card.className='photo-card';card.innerHTML=`<div>♡<small>Could not load ${photo.src}. Check the file path.</small></div>`};button.append(img);button.addEventListener('click',()=>openLightbox(i));card.append(button);gallery.append(card)})}renderGallery();
const lightbox=$('lightbox');let lightboxOrigin=null;function openLightbox(i){if(!PHOTOS.length)return;activePhoto=i;lightboxOrigin=document.activeElement;showPhoto();lightbox.hidden=false;$('lightbox-close').focus()}function showPhoto(){const p=PHOTOS[activePhoto];$('lightbox-image').src=p.src;$('lightbox-image').alt=p.alt;$('lightbox-caption').textContent=p.alt}function closeLightbox(){lightbox.hidden=true;if(lightboxOrigin)lightboxOrigin.focus()}function movePhoto(n){activePhoto=(activePhoto+n+PHOTOS.length)%PHOTOS.length;showPhoto()}$('lightbox-close').addEventListener('click',closeLightbox);$('lightbox-prev').addEventListener('click',()=>movePhoto(-1));$('lightbox-next').addEventListener('click',()=>movePhoto(1));lightbox.addEventListener('click',e=>{if(e.target===lightbox)closeLightbox()});document.addEventListener('keydown',e=>{if(lightbox.hidden)return;if(e.key==='Escape')closeLightbox();if(e.key==='ArrowLeft')movePhoto(-1);if(e.key==='ArrowRight')movePhoto(1);if(e.key==='Tab'){const controls=[$('lightbox-close'),$('lightbox-prev'),$('lightbox-next')];const first=controls[0],last=controls[2];if(e.shiftKey&&document.activeElement===first){e.preventDefault();last.focus()}else if(!e.shiftKey&&document.activeElement===last){e.preventDefault();first.focus()}}});
// Optional local audio. It is only started from the visitor's Play button.
const audio = $('birthday-audio');
const playButton = $('music-toggle');
const muteButton = $('mute-toggle');
const musicStatus = $('music-status');

function showAudioProblem(error) {
  playButton.textContent = '♫';
  playButton.classList.remove('is-playing');
  playButton.setAttribute('aria-pressed', 'false');
  playButton.setAttribute('aria-label', 'Play birthday music');

  if (error && error.name === 'NotAllowedError') {
    musicStatus.textContent = 'The browser blocked playback. Click Play again, then check that this browser tab is allowed to play sound.';
  } else if (error && error.name === 'NotSupportedError') {
    musicStatus.textContent = 'This browser could not decode the MP3. Check that assets/audio/birthday-music.mp3 is a valid MP3 file.';
  } else if (audio.error && audio.error.code === 4) {
    musicStatus.textContent = 'No playable music file was found at assets/audio/birthday-music.mp3.';
  } else {
    const reason = error && error.message ? ` (${error.message})` : '';
    musicStatus.textContent = `Music could not be played${reason}. Check assets/audio/birthday-music.mp3 and try again.`;
  }
}

audio.addEventListener('error', () => showAudioProblem());
playButton.addEventListener('click', async () => {
  if (!audio.paused) {
    audio.pause();
    playButton.textContent = '♫';
    playButton.classList.remove('is-playing');
    playButton.setAttribute('aria-pressed', 'false');
    playButton.setAttribute('aria-label', 'Play birthday music');
    musicStatus.textContent = 'Birthday music is paused.';
    return;
  }

  try {
    await audio.play();
    playButton.textContent = 'Ⅱ';
    playButton.classList.add('is-playing');
    playButton.setAttribute('aria-pressed', 'true');
    playButton.setAttribute('aria-label', 'Pause birthday music');
    musicStatus.textContent = audio.muted ? 'Birthday music is playing, muted.' : 'Birthday music is playing.';
  } catch (error) {
    showAudioProblem(error);
  }
});

muteButton.addEventListener('click', () => {
  audio.muted = !audio.muted;
  muteButton.classList.toggle('is-muted', audio.muted);
  muteButton.setAttribute('aria-pressed', String(audio.muted));
  muteButton.setAttribute('aria-label', audio.muted ? 'Unmute birthday music' : 'Mute birthday music');
  muteButton.title = audio.muted ? 'Unmute birthday music' : 'Mute birthday music';
  muteButton.textContent = audio.muted ? '◖×)' : '◖))';
  musicStatus.textContent = audio.paused
    ? (audio.muted ? 'Music is muted. Press Play when you are ready.' : 'Music is ready to play.')
    : (audio.muted ? 'Birthday music is playing, muted.' : 'Birthday music is playing.');
});

audio.addEventListener('canplay', () => {
  if (audio.paused) musicStatus.textContent = 'Optional birthday music is ready when you are.';
});
