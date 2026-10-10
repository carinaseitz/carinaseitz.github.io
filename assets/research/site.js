document.querySelectorAll('nav a').forEach(link=>{
  if(link.getAttribute('href')===window.location.pathname) link.setAttribute('aria-current','page');
});
const search=document.querySelector('#publication-search');
if(search){
  const entries=[...document.querySelectorAll('.publication')];
  const count=document.querySelector('#publication-count');
  const filter=()=>{
    const words=search.value.toLocaleLowerCase().trim().split(/\s+/).filter(Boolean);
    let visible=0;
    entries.forEach(entry=>{entry.hidden=!words.every(word=>entry.textContent.toLocaleLowerCase().includes(word));if(!entry.hidden)visible++;});
    count.textContent=`${visible} of ${entries.length} publications`;
    document.querySelector('#no-results').hidden=visible!==0;
  };
  search.addEventListener('input',filter);filter();
}
