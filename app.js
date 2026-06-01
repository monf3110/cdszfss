
document.addEventListener('DOMContentLoaded',()=>{
document.querySelectorAll('a[href$=".html"]').forEach(a=>{
a.addEventListener('click',e=>{e.preventDefault();document.body.classList.add('page-leave');setTimeout(()=>location=a.href,320);});
});
const m=document.querySelector('.menu');
if(m){
const overlay=document.createElement('div');
overlay.className='side-menu';
overlay.innerHTML='<div class="side-panel"><h3>Меню</h3><a href="index.html">Главная</a><a href="courses.html">Курсы</a><a href="favorites.html">Избранное</a><a href="profile.html">Профиль</a></div>';
document.body.appendChild(overlay);
m.onclick=()=>overlay.classList.add('open');
overlay.onclick=(e)=>{if(e.target===overlay)overlay.classList.remove('open')}
}
const hero=document.querySelector('.hero');
if(hero){window.addEventListener('scroll',()=>{hero.style.backgroundPosition=`center calc(50% + ${window.scrollY*0.15}px)`})}
});
