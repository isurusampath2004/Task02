const products = [
  {id:1,name:'UltraBook Pro 14',price:1199,ram:'16GB',cpu:'Intel i7',storage:'512GB SSD',img:'https://via.placeholder.com/600x400?text=UltraBook+Pro+14'},
  {id:2,name:'WorkMate 15',price:899,ram:'8GB',cpu:'Intel i5',storage:'256GB SSD',img:'https://via.placeholder.com/600x400?text=WorkMate+15'},
  {id:3,name:'Gaming X 17',price:1499,ram:'32GB',cpu:'AMD Ryzen 9',storage:'1TB SSD',img:'https://via.placeholder.com/600x400?text=Gaming+X+17'},
  {id:4,name:'SlimBook 13',price:799,ram:'8GB',cpu:'Intel i5',storage:'256GB SSD',img:'https://via.placeholder.com/600x400?text=SlimBook+13'}
];

function money(n){return '$'+n.toFixed(2)}

function renderProducts(){
  const grid=document.getElementById('products-grid');
  grid.innerHTML='';
  products.forEach(p=>{
    const el=document.createElement('div');el.className='card';
    el.innerHTML=`<img src="${p.img}" alt="${p.name}"><div class="title">${p.name}</div><div class="desc">${p.cpu} · ${p.ram} · ${p.storage}</div><div class="price">${money(p.price)}</div><div class="actions"><button class="btn view" data-id="${p.id}">View</button><button class="btn buy" data-id="${p.id}">Buy</button></div>`;
    grid.appendChild(el);
  });
}

function openModal(content){
  const modal=document.getElementById('product-modal');
  document.getElementById('modal-body').innerHTML=content;modal.setAttribute('aria-hidden','false');
}

function closeModal(){
  document.getElementById('product-modal').setAttribute('aria-hidden','true');
}

document.addEventListener('click',e=>{
  if(e.target.matches('.view')){
    const id=+e.target.dataset.id; const p=products.find(x=>x.id===id);
    openModal(`<div style="display:flex;gap:16px;flex-wrap:wrap"><img src="${p.img}" alt="${p.name}" style="width:300px;border-radius:8px"><div><h2>${p.name}</h2><p class="price">${money(p.price)}</p><p>${p.cpu} · ${p.ram} · ${p.storage}</p><p><button class=\"btn buy\" data-id=\"${p.id}\">Buy now</button></p></div></div>`)
  }
  if(e.target.matches('#modal-close')) closeModal();
  if(e.target.matches('.buy')){
    const id=+e.target.dataset.id; const p=products.find(x=>x.id===id);
    alert('Thanks — you selected: '+p.name+' ('+money(p.price)+') — This is a demo site.');
  }
});

document.getElementById('modal-close').addEventListener('click',closeModal);

document.getElementById('contact-form').addEventListener('submit',e=>{
  e.preventDefault();
  const name=document.getElementById('name').value.trim();
  const email=document.getElementById('email').value.trim();
  const message=document.getElementById('message').value.trim();
  if(!name||!email||!message){alert('Please fill all fields');return}
  alert('Thanks, '+name+'. We received your message — demo only.');
  document.getElementById('contact-form').reset();
});

renderProducts();
