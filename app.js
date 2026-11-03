const $=s=>document.querySelector(s),$$=s=>[...document.querySelectorAll(s)],rp=n=>'Rp'+n.toLocaleString('id-ID');
const esc=s=>String(s).replace(/[&<>"]/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;'}[c]));
const ld=(k,d)=>{try{return JSON.parse(localStorage.getItem(k))||d}catch(e){return d}},sv=(k,v)=>{try{localStorage.setItem(k,JSON.stringify(v))}catch(e){}};
const CT={daun:'Tanaman hias daun',sukulen:'Sukulen & kaktus',rambat:'Tanaman merambat',langka:'Koleksi khusus',bibit:'Bibit & benih',pupuk:'Pupuk & nutrisi',media:'Media tanam',pot:'Pot & planter',alat:'Alat berkebun'};
const B=[
['lidah-mertua','Lidah Mertua','Sansevieria laurentii','blade','teduh',14,65000,'daun',4.8,12,40,0,'Tegak, kuat, dan hampir tidak pernah protes. Cocok buat kamar kos yang minim cahaya dan pemilik yang sering lupa.'],
['monstera','Monstera Deliciosa','Monstera deliciosa','round','sedang',7,185000,'daun',4.9,5,60,0,'Daun besar berbelah yang bikin sudut kosong langsung terlihat sengaja. Tumbuh cepat kalau cahayanya pas.'],
['sirih-gading','Sirih Gading','Epipremnum aureum','trail','teduh',7,45000,'rambat',4.7,20,30,0,'Menjuntai dari rak atau digantung. Bisa diperbanyak lewat stek air, jadi cepat jadi banyak.'],
['kaktus','Kaktus Bulat Mini','Echinopsis','cactus','terang',21,35000,'sukulen',4.6,0,12,0,'Mungil, bulat, dan berbunga di musim tertentu. Letakkan di jendela yang kena matahari langsung.'],
['zz','ZZ Plant','Zamioculcas zamiifolia','blade','teduh',21,120000,'daun',4.8,8,50,0,'Daun mengilap yang tahan ditinggal mudik berminggu-minggu. Umbinya menyimpan air sendiri.'],
['pilea','Pilea Koin','Pilea peperomioides','round','sedang',7,75000,'daun',4.9,6,25,1,'Daun bundar seperti koin dan rajin beranak. Aman di rumah dengan kucing atau anjing.'],
['alocasia','Kuping Gajah Mini','Alocasia amazonica','round','sedang',5,150000,'langka',4.5,3,35,0,'Urat daun kontras yang dramatis. Sedikit rewel soal kelembapan, tapi hasilnya sepadan.'],
['mutiara','Untaian Mutiara','Senecio rowleyanus','trail','terang',14,90000,'rambat',4.7,9,20,0,'Butiran hijau menjuntai di pot gantung. Butuh cahaya terang dan tanah yang cepat kering.'],
['haworthia','Haworthia Zebra','Haworthiopsis attenuata','cactus','terang',21,55000,'sukulen',4.8,15,10,1,'Roset bergaris putih yang rapi. Pilihan aman untuk meja kerja dan rumah berhewan.'],
['philodendron','Philodendron Pink Princess','Philodendron erubescens','round','sedang',7,420000,'langka',4.9,2,45,0,'Daun gelap dengan semburat merah muda. Koleksi incaran, stok selalu tipis.']
].map((a,i)=>({id:a[0],n:a[1],lat:a[2],sh:a[3],l:a[4],d:a[5],p:a[6],c:a[7],r:a[8],st:a[9],h:a[10],pet:a[11],ds:a[12],i}));

const EXTRA=[
['bibit-monstera','Bibit Monstera Deliciosa','Monstera deliciosa · bibit semai','round','sedang',7,28000,'bibit',4.8,24,8,0,'Bibit tanaman hias untuk dibesarkan sendiri. Harga per bibit; ukuran dan tahap tumbuh dapat berbeda.','/ bibit'],
['bibit-sirih','Stek Sirih Gading','Epipremnum aureum · stek berakar','trail','teduh',7,12000,'bibit',4.7,35,10,0,'Stek berakar untuk memulai tanaman rambat di rumah. Harga per stek.','/ stek'],
['benih-kosmos','Benih Bunga Cosmos','Cosmos bipinnatus · benih','round','terang',5,18000,'bibit',4.6,40,0,0,'Benih bunga untuk pot atau taman kecil. Isi kemasan simulasi 20 benih.','/ pack'],
['bibit-kemangi','Benih Kemangi','Ocimum basilicum · benih','blade','terang',3,15000,'bibit',4.7,50,0,0,'Benih tanaman aromatik untuk kebun dapur. Isi kemasan simulasi 30 benih.','/ pack'],
['pupuk-organik','Pupuk Organik Cair','Nutrisi tanaman · konsentrat','blade','sedang',14,32000,'pupuk',4.7,30,0,0,'Pupuk cair untuk tanaman hias. Ikuti dosis dan frekuensi pada label produk; jangan melebihi anjuran.','/ botol 250 ml'],
['pupuk-kompos','Kompos matang','Bahan organik · siap campur','round','sedang',14,22000,'pupuk',4.8,28,0,0,'Kompos matang untuk campuran media dan perbaikan bahan organik. Harga per kantong 1 kg.','/ 1 kg'],
['pupuk-slow','Pupuk slow release','Nutrisi lepas terkendali','round','sedang',30,45000,'pupuk',4.8,18,0,0,'Nutrisi lepas terkendali. Pemakaian harus mengikuti petunjuk kemasan dan kebutuhan spesies.','/ pack 100 g'],
['media-aroid','Aroid Mix','Campuran media porous','round','sedang',7,38000,'media',4.8,22,0,0,'Campuran media untuk koleksi aroid. Periksa kecocokan komposisi dengan kondisi dan kebutuhan tanamanmu.','/ 1 liter'],
['media-semai','Media Semai Halus','Media awal persemaian','blade','terang',3,16000,'media',4.6,30,0,0,'Media halus untuk penyemaian benih. Harga per kantong 1 liter.','/ 1 liter'],
['cocopeat','Cocopeat blok','Serat sabut kelapa olahan','trail','sedang',7,19000,'media',4.7,26,0,0,'Bahan campuran media berbasis serat sabut kelapa. Basahi dan siapkan sesuai petunjuk produk.','/ blok'],
['pot-terakota','Pot Terakota Mini','Pot tanah liat · lubang drainase','round','terang',7,27000,'pot',4.8,19,0,0,'Pot terakota dengan lubang drainase. Ukuran mini, diameter sekitar 10 cm.','/ pot'],
['pot-keramik','Pot Keramik Natural','Planter keramik · diameter 14 cm','blade','sedang',7,68000,'pot',4.9,12,0,0,'Planter keramik untuk tanaman indoor. Periksa lubang drainase dan gunakan pot dalam bila diperlukan.','/ pot'],
['pot-gantung','Pot Gantung Minimal','Planter gantung · diameter 16 cm','trail','terang',7,52000,'pot',4.7,15,0,0,'Pot gantung untuk tanaman menjuntai. Termasuk tali gantung; pastikan titik pemasangan kuat.','/ pot'],
['alat-siram','Penyiram Leher Panjang','Alat siram · 1 liter','blade','sedang',7,39000,'alat',4.7,20,0,0,'Penyiram leher panjang untuk mengarahkan air ke media dengan lebih terukur.','/ unit'],
['sekop-mini','Sekop Tanam Mini','Peralatan berkebun','round','terang',7,24000,'alat',4.6,25,0,0,'Sekop mini untuk memindahkan media dan merapikan pot.','/ unit'],
['sprayer','Sprayer Kabut','Botol semprot · 500 ml','round','sedang',7,29000,'alat',4.6,21,0,0,'Botol semprot untuk kebutuhan perawatan tertentu. Tidak semua tanaman membutuhkan penyemprotan daun.','/ unit']
].map((a,i)=>({id:a[0],n:a[1],lat:a[2],sh:a[3],l:a[4],d:a[5],p:a[6],c:a[7],r:a[8],st:a[9],h:a[10],pet:a[11],ds:a[12],unit:a[13],i:20+i}));

const RV=[['Nadia, Bandung','Sampai utuh dan segar. Panduan siramnya benar-benar kepakai.'],['Raka, Jakarta','Ukurannya sesuai foto, potnya juga bagus. Packing aman.'],['Salsa, Yogyakarta','Awalnya takut mati, ternyata gampang kalau ikut jadwalnya.'],['Dimas, Surabaya','Pengiriman cepat, tanaman langsung betah di meja kerja.']];
const T=['#FFC21A','#8EC5F0','#FF8F7A','#CFE84A','#F4F6EC'];
function art(sh,i){const bg=T[i%5],sun=T[(i+2)%5],pot=T[(i+3)%5],g=i%2?'#1B7A4B':'#0D2B21';let p='';
if(sh==='blade')[[-30,52],[-14,72],[2,84],[17,66],[32,48]].forEach(([a,h])=>p+=`<ellipse cx="0" cy="${-h}" rx="10" ry="${h}" transform="translate(100 172) rotate(${a})"/>`);
else if(sh==='round')[[-48,70,26],[-18,92,30],[16,84,28],[46,64,24]].forEach(([a,l,r])=>p+=`<g transform="translate(100 172) rotate(${a})"><line x2="0" y2="${-l}" stroke-width="4"/><circle cy="${-l-r+6}" r="${r}" stroke="none"/></g>`);
else if(sh==='cactus')p='<rect x="78" y="62" width="44" height="116" rx="22"/><path d="M78 120h-14a12 12 0 0 1-12-12V92M122 140h14a12 12 0 0 0 12-12v-22" fill="none" stroke-width="12" stroke-linecap="round"/><circle cx="100" cy="58" r="8" fill="#FF8F7A" stroke="none"/>';
else{for(let n=0;n<26;n++){const a=Math.PI*(n%13)/12,r=28+(n%3)*17+Math.floor(n/13)*10;p+=`<circle cx="${(100-Math.cos(a)*r*1.1).toFixed(1)}" cy="${(172-Math.sin(a)*r*.9).toFixed(1)}" r="${9+(n%4)*2}" stroke="none"/>`}p+='<path d="M70 174q-28 22-16 52M130 174q26 20 18 46" fill="none" stroke-width="3"/><circle cx="54" cy="228" r="7" stroke="none"/><circle cx="148" cy="222" r="7" stroke="none"/>'}
return `<svg viewBox="0 0 200 240" role="img" aria-label="Ilustrasi tanaman"><rect width="200" height="240" fill="${bg}"/><circle cx="${i%2?62:138}" cy="70" r="46" fill="${sun}"/><g class="sway" fill="${g}" stroke="${g}">${p}</g><path d="M66 172h68l-9 52H75z" fill="${pot}" stroke="#0D2B21" stroke-width="3"/></svg>`}
if(!ld('vusers',null))sv('vusers',[]);
let mine=ld('vm',[]),S={cart:ld('vc',{}),wish:ld('vw',[]),user:ld('vu',null),orders:ld('vo',[]),stock:ld('vs',{})},authGatePending=!ld('vu',null),F={q:'',c:'semua',l:'semua',p:'0-0',s:'rec',pet:false},view='cart';
const all=()=>[...mine,...B,...EXTRA].map(x=>({...x,st:S.stock[x.id]!==undefined?S.stock[x.id]:x.st})),find=id=>all().find(x=>x.id===id);
const save=()=>{sv('vc',S.cart);sv('vw',S.wish);sv('vu',S.user);sv('vo',S.orders);sv('vs',S.stock);sv('vm',mine);if(S.user?.email){const users=ld('vusers',[]),i=users.findIndex(x=>x.email===S.user.email);if(i>=0){users[i]={...users[i],...S.user};sv('vusers',users)}}};
const toast=t=>{const e=$('#toast');e.textContent=t;e.classList.add('on');clearTimeout(toast.t);toast.t=setTimeout(()=>e.classList.remove('on'),2200)};
const heart=on=>`<svg width="20" height="20" viewBox="0 0 24 24" aria-hidden="true"><path d="M12 21s-8-5.3-8-11a4.5 4.5 0 0 1 8-2.8A4.5 4.5 0 0 1 20 10c0 5.7-8 11-8 11z" fill="${on?'currentColor':'none'}" stroke="currentColor" stroke-width="2"/></svg>`;
const SO={pa:(a,b)=>a.p-b.p,pd:(a,b)=>b.p-a.p,rt:(a,b)=>b.r-a.r,lj:(a,b)=>b.d-a.d};
function render(){const[lo,hi]=F.p.split('-').map(Number);
 const a=all().filter(x=>(F.c==='semua'||x.c===F.c)&&(F.l==='semua'||x.l===F.l)&&(!F.pet||x.pet)&&x.p>=lo&&(!hi||x.p<=hi)&&(x.n+' '+x.lat).toLowerCase().includes(F.q));
 if(SO[F.s])a.sort(SO[F.s]);$('#hit').textContent=a.length+' tanaman ditemukan';
 $('#grid').innerHTML=a.map(x=>`<article class="card"><button class="wish" data-w="${x.id}" aria-label="Simpan ${esc(x.n)}">${heart(S.wish.includes(x.id))}</button><button class="tile c" data-d="${x.id}" aria-label="Lihat detail ${esc(x.n)}">${art(x.sh,x.i)}<span class="tag">${x.st?(x.st<4?'Sisa '+x.st:'Siap kirim'):'Stok habis'}</span></button><span class="product-kind">${esc(CT[x.c]||x.c)}</span><h3>${esc(x.n)}</h3><p class="lat">${esc(x.lat)}</p><p class="m"><span class="st">★</span> ${String(x.r).replace('.',',')} &nbsp; Siram tiap ${x.d} hari &nbsp; Cahaya ${x.l}</p><div class="row"><b>${rp(x.p)}${x.unit?` <small>${x.unit}</small>`:''}</b><button class="btn" data-add="${x.id}"${x.st?'':' disabled'}>Tambah</button></div></article>`).join('')||'<p class="emp">Belum ada yang cocok. Longgarkan filternya, atau jual tanamanmu sendiri.</p>'}
$('#cats').innerHTML=Object.entries(CT).map(([k,v],j)=>{const n=all().filter(x=>x.c===k).length;return `<button class="cat" data-c="${k}"><div class="tile">${art((B.find(x=>x.c===k)||EXTRA.find(x=>x.c===k)||B[0]).sh,j+1)}</div><b>${v}</b><span class="m">${n} pilihan</span></button>`}).join('');
$('#fc').innerHTML='<option value="semua">Semua jenis</option>'+Object.entries(CT).map(([k,v])=>`<option value="${k}">${v}</option>`).join('');
const rows=()=>Object.entries(S.cart).map(([k,q])=>({x:find(k),q})).filter(r=>r.x&&r.q>0);
const sub=()=>rows().reduce((s,r)=>s+r.x.p*r.q,0),ong=()=>{const s=sub();return !s||s>=150000?0:18000};
function panel(){Object.keys(S.cart).forEach(k=>{const x=find(k);if(!x||S.cart[k]<1)delete S.cart[k];else if(S.cart[k]>x.st)S.cart[k]=x.st});S.wish=S.wish.filter(find);
 const r=rows(),n=r.reduce((s,y)=>s+y.q,0);$('#cc').textContent=n;$('#wc').textContent=S.wish.length;$('#ab').textContent=S.user?S.user.name.split(' ')[0]:'Masuk';
 $('#t1').setAttribute('aria-pressed',view==='cart');$('#t2').setAttribute('aria-pressed',view==='wish');$('#dt').textContent=view==='cart'?'Keranjang':'Tersimpan';$('#foot').hidden=view!=='cart';
 if(view==='cart'){$('#items').innerHTML=r.map(({x,q})=>`<div class="it"><div class="th">${art(x.sh,x.i)}</div><div><b>${esc(x.n)}</b><p class="m">Siram tiap ${x.d} hari</p><div class="qty"><button data-q="${x.id}" data-v="-1" aria-label="Kurangi">&minus;</button><span>${q}</span><button data-q="${x.id}" data-v="1" aria-label="Tambah" ${q>=x.st?'disabled':''}>+</button></div></div><b>${rp(x.p*q)}</b></div>`).join('')||'<p class="m" style="padding:16px 0">Keranjang masih kosong. Pilih satu yang cocok dulu.</p>';
  const s=sub(),L=150000;$('#bar i').style.width=Math.min(100,s/L*100)+'%';$('#ship').textContent=!s?'Gratis ongkir mulai '+rp(L):s<L?'Tambah '+rp(L-s)+' lagi untuk gratis ongkir':'Gratis ongkir terbuka';
  $('#sub').textContent=rp(s);$('#ong').textContent=s?(ong()?rp(ong()):'Gratis'):'-';$('#tot').textContent=rp(s+ong());$('#co').disabled=!s}
 else $('#items').innerHTML=S.wish.map(id=>{const x=find(id);return `<div class="it"><div class="th">${art(x.sh,x.i)}</div><div><b>${esc(x.n)}</b><p class="m">${rp(x.p)}${x.unit||''}</p><div class="qty"><button class="btn" style="padding:7px 12px" data-add="${x.id}" ${x.st?'':'disabled'}>Tambah</button></div></div><button class="btn g" style="padding:7px 12px" data-w="${x.id}">Hapus</button></div>`}).join('')||'<p class="m" style="padding:16px 0">Belum ada yang disimpan. Tekan ikon hati di kartu tanaman.</p>';
 save()}
const op=v=>document.body.classList.toggle('open',v),show=v=>{view=v;panel();op(true)};
const add=(id,q=1)=>{const x=find(id);if(!x||!x.st)return;const c=(S.cart[id]||0)+q;if(c>x.st){toast('Stok '+x.n+' tinggal '+x.st);return}S.cart[id]=c;panel();toast(x.n+' masuk keranjang')};
const wt=id=>{const i=S.wish.indexOf(id);i<0?S.wish.push(id):S.wish.splice(i,1);panel();render()};
const md=$('#md'),openM=(h,n)=>{md.className=n?'n':'';md.innerHTML=`<button class="btn g x" data-a="mx" aria-label="Tutup">Tutup</button>`+h;if(!md.open)md.showModal()};
const fd=(id,l,t='text',x='')=>`<div class="fd"><label for="${id}">${l}</label><input id="${id}" type="${t}" ${x}><p class="e"></p></div>`;
const bad=(id,m)=>{const e=$('#'+id).closest('.fd');e.classList.toggle('bad',!!m);e.querySelector('.e').textContent=m||'';return !m};
function detail(id){const x=find(id),sw=x.l==='terang'?'dekat jendela yang kena matahari':x.l==='sedang'?'di dekat jendela dengan cahaya tersaring':'di sudut ruangan, jauh dari matahari langsung';
 openM(`<div class="dt"><div class="tile">${art(x.sh,x.i)}</div><div><h2>${esc(x.n)}</h2><p class="lat">${esc(x.lat)}</p><p><span class="st">★</span> ${String(x.r).replace('.',',')} dari ${40+x.i*7} ulasan</p><p>${esc(x.ds)}</p>
 <table><tr><td>Cahaya</td><td>${x.l}</td></tr><tr><td>Jadwal siram</td><td>Tiap ${x.d} hari</td></tr><tr><td>Tinggi sekarang</td><td>sekitar ${x.h} cm</td></tr><tr><td>Aman untuk hewan</td><td>${x.pet?'Ya':'Tidak, jauhkan dari kucing dan anjing'}</td></tr><tr><td>Stok</td><td>${x.st?x.st+' tersedia':'Habis'}</td></tr></table>
 <p class="m"><b>Cara rawat.</b> Taruh ${sw}. Siram tiap ${x.d} hari, atau saat 2 cm tanah paling atas sudah kering. Pakai pot berlubang drainase dan buang air yang menggenang di alas.</p>
 <div class="row"><b style="font-size:20px">${rp(x.p)}</b><div class="acts"><button class="btn g" data-w="${x.id}">${S.wish.includes(x.id)?'Hapus simpanan':'Simpan'}</button><button class="btn" data-add="${x.id}" ${x.st?'':'disabled'}>Tambah ke keranjang</button></div></div>
 <div class="seed-option"><b>Ingin mulai dari benih atau bibit?</b><p class="m">Cek opsi perbanyakan yang tersedia untuk jenis tanaman ini.</p><button class="btn g" data-seed-option="${x.id}">Lihat opsi benih / bibit</button></div><h3 style="margin:20px 0 4px">Cerita pembeli</h3>${[RV[x.i%4],RV[(x.i+1)%4]].map(r=>`<div class="rv"><b>${r[0]}</b>${r[1]}</div>`).join('')}</div></div>`)}
function acc(){
 if(S.user){
   const u=S.user,o=S.orders.filter(x=>x.e===u.email);
   openM(`<div class="profile-head"><div class="profile-avatar" id="profileAvatar">${u.avatar?`<img src="${u.avatar}" alt="Foto profil">`:esc((u.name||'V').slice(0,1).toUpperCase())}</div><div><p class="eyebrow">VALAUERA MEMBER</p><h2 style="margin:0">${esc(u.name)}</h2><p class="m">${esc(u.email||'Akun lokal')} · ${(u.xp||0)>=200?'Senior':(u.xp||0)>=50?'Junior':'New'} · ${u.xp||0} EXP</p></div></div>
   <div class="rv"><b>Username</b>${esc(u.name)}<p class="m">Nama ini tampil di profil dan saat kamu ikut diskusi.</p></div><div class="fd" style="margin-top:14px"><label for="profilePhoto">Ganti foto profil</label><input id="profilePhoto" type="file" accept="image/*"><p class="m">Foto disimpan lokal untuk prototipe.</p></div>
   <h3 style="margin:18px 0 5px">Pesanan saya</h3>${o.map(x=>`<div class="rv"><b>${x.id}</b>${x.d}, ${x.n} tanaman, ${rp(x.t)}, bayar ${x.pay}</div>`).join('')||'<p class="m">Belum ada pesanan.</p>'}
   <br><button class="btn g" data-a="out">Keluar dari akun</button>`,1);
 } else auth('login');
}
function auth(mode='login'){
 const isSignup=mode==='signup';
 openM(`<div class="auth-shell"><div class="auth-art"><strong>Let life<br>grow here.</strong></div><div class="auth-form">
 <p class="eyebrow">A PLACE FOR PLANT PEOPLE</p><h2>${isSignup?'Buat ruangmu sendiri.':'Selamat datang kembali.'}</h2>
 <p class="m">${isSignup?'Buat profil sederhana untuk bertanya, berbagi, dan menyimpan perjalanan tanamanmu.':'Masuk untuk melanjutkan obrolan dan melihat profil komunitasmu.'}</p>
 <div class="auth-switch"><button type="button" data-auth-mode="login" aria-pressed="${!isSignup}">Masuk</button><button type="button" data-auth-mode="signup" aria-pressed="${isSignup}">Daftar</button></div>
 <form id="authForm" data-mode="${isSignup?'signup':'login'}" novalidate>
 ${isSignup?fd('authName','Username','text','autocomplete="nickname" maxlength="20" placeholder="Contoh: sari_tanam"'):''}
 ${fd('authContact','Alamat Gmail','email','autocomplete="username" required placeholder="nama@gmail.com"')}
 <div class="fd"><label for="authPass">Kata sandi</label><div class="pass-row"><input id="authPass" type="password" autocomplete="${isSignup?'new-password':'current-password'}" minlength="6" required placeholder="Minimal 6 karakter"><button type="button" class="btn g pass-toggle" data-a="passPreview">Lihat</button></div></div>
 ${isSignup?fd('authPass2','Ulangi kata sandi','password','autocomplete="new-password" placeholder="Ketik ulang kata sandi"'):''}
 <button class="btn w" type="submit">${isSignup?'Buat profil':'Masuk ke Valauera'}</button></form>
 <p class="auth-local-note">Mode prototipe lokal: gunakan alamat Gmail berformat valid dan kata sandi minimal 6 karakter. Data akun hanya tersimpan di browser ini.</p>
 </div></div>`,false);
}

const demoReplies=[
 ['Budi','Coba cek bagian bawah pot dulu, Nek. Kalau akarnya sudah melingkar padat dan air cepat sekali keluar, itu bisa jadi salah satu tanda perlu pot lebih besar.'],
 ['Maya','Jangan buru-buru dipindah saat baru keluar daun. Tunggu daunnya mulai mengeras agar tanaman tidak stres bersamaan.'],
 ['Pak Hendra','Saya biasa cek lubang drainase dan akar. Ukuran pot naik sedikit saja, jangan langsung terlalu besar.'],
 ['Lina','Media porous membantu. Saya pakai campuran media yang sesuai jenis tanaman, bukan tanah kebun padat.'],
 ['Rafi','Kalau masih ada ruang untuk akar dan tanaman tetap stabil, belum tentu harus repotting sekarang.'],
 ['Nadia','Pastikan pot baru punya lubang bawah ya, Nek. Air yang menggenang bisa bikin akar kekurangan udara.'],
 ['Tono','Saya setuju tunggu daun baru matang dulu. Pengalaman saya, tanaman lebih mudah beradaptasi.'],
 ['Ayu','Cek apakah akar keluar dari lubang bawah. Tapi satu tanda saja belum cukup untuk memutuskan.'],
 ['Dewi','Jangan merusak bola akar kalau tidak perlu. Pindahkan dengan hati-hati dan isi sisi pot dengan media baru.'],
 ['Fajar','Setelah repotting, taruh di tempat bercahaya tidak langsung dulu dan pantau kondisinya.'],
 ['Siska','Kalau media lama sudah padat atau susah menyerap air, itu juga alasan untuk mengecek kondisi akar.'],
 ['Reno','Pot baru cukup sedikit lebih lebar dari pot lama. Pot terlalu besar bisa membuat media lama kering lebih lambat.'],
 ['Bu Ratna','Saya umur 63 masih belajar juga, Nek. Kuncinya pelan-pelan dan jangan terlalu sering mengutak-atik akar.'],
 ['Dimas','Kalau tanaman sehat dan tumbuh normal, repotting tidak harus dilakukan hanya karena sudah setahun.'],
 ['Putri','Boleh foto akar dan pangkal batangnya supaya anggota lain bisa bantu lihat kondisinya.'],
 ['Arman','Siram sesuai kondisi media setelah pindah, jangan otomatis menambah air banyak-banyak.'],
 ['Nina','Bersihkan pot lama dan siapkan media sebelum mulai supaya akar tidak terlalu lama terbuka.'],
 ['Yusuf','Kalau ada akar busuk atau berbau, potong bagian yang rusak dengan alat bersih. Kalau tidak, minimalkan gangguan.'],
 ['Citra','Terima kasih sudah bertanya, Nek. Pertanyaan sederhana begini sering membantu anggota lain juga.'],
 ['Mila','Kalau masih ragu, foto kondisi akar dan media dulu. Anggota lain bisa bantu memberi masukan sebelum diputuskan repotting.']
];
const threads={
 grandma:{category:'TANYA JAWAB · MONSTERA',title:'Monstera saya keluar daun baru. Kapan waktu yang pas pindah pot?',author:'Nenek Sari',role:'Penghobi tanaman rumahan · 67 tahun',body:'Selamat sore, teman-teman. Monstera di teras saya baru mengeluarkan satu daun baru. Potnya sudah hampir dua tahun. Apa sebaiknya langsung saya pindahkan, atau tunggu dulu? Saya takut malah mengganggu pertumbuhannya. Terima kasih sebelumnya.',replies:demoReplies},
 balcony:{category:'TANYA JAWAB · CAHAYA',title:'Tanaman apa yang cocok untuk balkon dengan matahari pagi?',author:'Damar',role:'Plant enthusiast',body:'Balkon saya mendapat matahari pagi beberapa jam lalu terang tidak langsung. Saya ingin mulai dari tanaman yang relatif mudah dirawat. Pengalaman teman-teman apa?',replies:[['Mira','Amati berapa lama matahari langsung masuk dan seberapa panas balkon saat siang.'],['Raka','Sirih gading bisa dicoba di tempat terang tidak langsung, tetapi sesuaikan dengan kondisi balkon.'],['Alya','Jangan lupa angin dan hujan juga memengaruhi media cepat kering.'],['Damar','Terima kasih, aku akan amati dulu intensitasnya.']]},
 'green-corner':{category:'INSPIRASI · RUANG HIJAU',title:'Sudut hijau sederhana yang bikin rumah terasa lebih hidup',author:'Rani',role:'Plant stylist',body:'Tidak perlu memenuhi rumah dengan pot. Satu rak dekat jendela, beberapa tanaman dengan kebutuhan cahaya serupa, dan ruang untuk bergerak sudah bisa jadi awal.',replies:[['Nisa','Aku mulai dari satu tanaman di meja makan. Sekarang jadi rutinitas kecil yang menyenangkan.'],['Ari','Kelompokkan tanaman dengan kebutuhan cahaya mirip agar perawatannya lebih mudah.'],['Rani','Setuju. Mulai dari ruang yang memang punya kondisi cocok, bukan sekadar sudut kosong.']] }
};
function threadView(id){
 if(id==='new'&&!S.user){auth('login');return}
 if(id==='new'){openM(`<p class="eyebrow">COMMUNITY POST</p><h2>Mulai diskusi baru</h2><form id="newThreadForm"><div class="fd"><label for="postTitle">Judul pertanyaan</label><input id="postTitle" maxlength="100" required placeholder="Apa yang ingin kamu tanyakan?"></div><div class="fd"><label for="postBody">Ceritakan lebih lengkap</label><textarea id="postBody" maxlength="700" required placeholder="Ceritakan kondisi tanaman, cahaya, media, dan hal yang sudah dicoba..."></textarea></div><button class="btn w" type="submit">Terbitkan diskusi demo</button></form>`,1);return}
 const t=threads[id];if(!t)return;
 const replies=t.replies.map((r,i)=>`<article class="reply"><div class="reply-avatar">${esc(r[0].slice(0,1))}</div><div><b>${esc(r[0])}</b><small>${i===0&&id==='grandma'?'Anggota komunitas':'Plant people'} · ${i+1} jam lalu</small><p>${esc(r[1])}</p></div></article>`).join('');
 openM(`<div class="thread-head"><p class="eyebrow">${t.category}</p><h2>${t.title}</h2><p class="m">Oleh <b>${esc(t.author)}</b> · ${esc(t.role)}</p></div>
 <div class="thread-question"><p>${esc(t.body)}</p></div><div class="tt"><b style="font:800 18px Unbounded">${t.replies.length} tanggapan</b><span class="m">Diskusi komunitas</span></div>
 <div class="reply-list">${replies}</div>
 <form class="reply-form" id="replyForm" data-thread-id="${id}"><label for="replyText"><b>Ikut membantu percakapan</b></label><textarea id="replyText" rows="3" maxlength="500" placeholder="${S.user?'Tulis pengalaman atau saran yang sopan...':'Masuk untuk ikut menjawab'}" ${S.user?'':'disabled'}></textarea><button class="btn w" type="submit" ${S.user?'':'disabled'}>${S.user?'Kirim tanggapan demo':'Masuk untuk menjawab'}</button></form>`,false);
}

function sell(){openM(`<p class="eyebrow">SELLER MATCH / 01</p><h2>Kamu ingin menawarkan apa?</h2><p class="m">Pilih kebutuhan jualanmu dulu. Formulir akan menyesuaikan.</p><form id="sellSurvey"><div class="survey-options"><label><input type="radio" name="sellType" value="daun" checked><span><b>Tanaman hias</b><small>Tanaman hidup dalam pot atau siap tanam.</small></span></label><label><input type="radio" name="sellType" value="bibit"><span><b>Benih & bibit</b><small>Benih kemasan, stek, atau bibit muda.</small></span></label><label><input type="radio" name="sellType" value="alat"><span><b>Peralatan</b><small>Pot, sekop, sprayer, media, dan perlengkapan.</small></span></label></div><div class="fd"><label for="sellStyle">Gaya produk</label><select id="sellStyle"><option>Minimalis dan mudah dirawat</option><option>Koleksi unik dan langka</option><option>Ramah pemula</option><option>Organik dan berkelanjutan</option></select></div><div class="fd"><label for="sellAudience">Target pembeli</label><select id="sellAudience"><option>Pemula</option><option>Kolektor</option><option>Penghuni kos / apartemen</option><option>Semua kalangan</option></select></div><button class="btn w" type="submit">Lanjut isi produk ↗</button></form>`,1)}
function sellForm(kind){const seed=kind==='bibit',tool=kind==='alat',cats=seed?['bibit']:tool?['pot','alat','media','pupuk']:['daun','rambat','sukulen','langka'];openM(`<p class="eyebrow">SELLER STUDIO / 02</p><h2>${seed?'Daftarkan benih atau bibit':tool?'Daftarkan perlengkapan':'Daftarkan tanamanmu'}</h2><form id="sf" data-kind="${kind}" novalidate>${fd('sn','Nama produk','text','maxlength="50" required')}<div class="fd"><label for="sellCat">Kategori</label><select id="sellCat">${cats.map(c=>`<option value="${c}">${CT[c]}</option>`).join('')}</select></div>${seed?'<div class="two"><div class="fd"><label for="seedPack">Isi kemasan</label><input id="seedPack" type="number" min="1" value="20" required></div><div class="fd"><label for="seedUnit">Satuan</label><select id="seedUnit"><option>butir</option><option>stek</option><option>bibit</option><option>pack</option></select></div></div>':''}${!tool?'<div class="fd"><label for="sh">Bentuk ilustrasi</label><select id="sh"><option value="blade">Daun tegak</option><option value="round">Daun bulat</option><option value="cactus">Kaktus</option><option value="trail">Menjuntai</option></select></div>':''}<div class="two"><div class="fd"><label for="sl">Cahaya</label><select id="sl"><option>terang</option><option selected>sedang</option><option>teduh</option></select></div>${fd('sd','Interval perawatan (hari)','number','min="1" max="60" value="7"')}</div><div class="two">${fd('sp','Harga unik (Rp)','number','min="1000" step="1000" required')}${fd('ss','Stok','number','min="1" max="999" value="1" required')}</div><div class="fd"><label for="sx">Deskripsi</label><textarea id="sx" maxlength="300" placeholder="Jelaskan kondisi, ukuran, isi, dan cara penggunaan"></textarea></div><button class="btn w" type="submit">Simpan produk</button></form>`,1)}

function finder(){openM(`<p class="eyebrow">Plant finder / 01</p><h2>Let's find your green.</h2><p class="m" style="margin-bottom:18px">Jawab sesuai kondisi ruangmu. Hasilnya berupa rekomendasi dari koleksi yang tersedia.</p><form id="finderForm"><div class="fd"><label for="fq1">Seberapa terang ruanganmu?</label><select id="fq1"><option value="teduh">Cenderung teduh</option><option value="sedang" selected>Cahaya tidak langsung</option><option value="terang">Terang / dekat jendela</option></select></div><div class="fd"><label for="fq2">Seberapa sering kamu ingin merawat?</label><select id="fq2"><option value="low">Sesekali saja</option><option value="mid" selected>Beberapa kali seminggu</option><option value="high">Aku suka merawat rutin</option></select></div><div class="fd"><label for="fq3">Ada kucing atau anjing di rumah?</label><select id="fq3"><option value="no">Tidak ada</option><option value="yes">Ada, perlu tanaman yang lebih aman</option></select></div><button class="btn w" type="submit">Temukan tanaman ↗</button></form>`,1)}
function care(){openM(`<p class="eyebrow">Care planner / 02</p><h2>Ritme merawatmu.</h2><p class="m" style="margin-bottom:18px">Pilih tanaman dari koleksi untuk melihat panduan siram awal. Jadwal ini hanya pengingat; cek kelembapan tanah sebelum menyiram.</p><form id="careForm"><div class="fd"><label for="carePlant">Tanaman</label><select id="carePlant">${all().map(x=>`<option value="${x.id}">${esc(x.n)}</option>`).join('')}</select></div><div class="fd"><label for="careDate">Terakhir disiram</label><input id="careDate" type="date" value="${new Date().toISOString().slice(0,10)}"></div><button class="btn w" type="submit">Buat jadwal</button></form><div id="careResult"></div>`,1)}
function clinic(){openM(`<p class="eyebrow">Plant clinic / 03</p><h2>Baca sinyal tanaman.</h2><p class="m">Pilih gejala yang kamu lihat untuk mendapat langkah pemeriksaan awal. Gejala bisa punya beberapa penyebab; cek kondisi media dan cahaya sebelum mengambil tindakan.</p><div class="fd" style="margin-top:18px"><label for="symptom">Apa yang terjadi?</label><select id="symptom"><option value="yellow">Daun menguning</option><option value="brown">Ujung daun kecokelatan</option><option value="soft">Batang atau daun lembek</option><option value="droop">Daun layu / menggantung</option><option value="spots">Bercak pada daun</option></select></div><div id="clinicResult" class="rv"></div><button class="btn w" data-a="clinicCheck">Lihat langkah awal</button>`,1);clinicAdvice()}
function clinicAdvice(){const el=$('#clinicResult'),s=$('#symptom');if(!el||!s)return;const tips={yellow:'Periksa tanah: terlalu basah dan terlalu kering sama-sama bisa memicu daun menguning. Pastikan pot punya drainase dan cek apakah daun tua saja yang berubah.',brown:'Cek kelembapan udara, pola siram, dan paparan matahari langsung. Pangkas bagian kering dengan alat bersih jika sudah mengganggu.',soft:'Batang atau daun lembek dapat berkaitan dengan pembusukan. Periksa akar dan media; kurangi penyiraman bila media terus basah dan pastikan air bisa keluar.',droop:'Raba media sebelum menyiram. Jika kering, siram menyeluruh; jika basah, tunggu dan periksa drainase serta kondisi akar.',spots:'Pisahkan sementara dari tanaman lain, hindari membasahi daun, dan periksa apakah bercak menyebar. Bersihkan alat setelah digunakan.'};el.innerHTML='<b>Langkah pemeriksaan</b><p>'+tips[s.value]+'</p><p class="m">Jika kondisi memburuk atau tidak membaik, minta bantuan nursery atau ahli tanaman setempat.</p>'}
function journal(){openM(`<p class="eyebrow">Plant journal / 04</p><h2>Catatan tumbuh.</h2><p class="m" style="margin-bottom:18px">Simpan catatan kecil tentang perjalanan tanamanmu di perangkat ini.</p><form id="journalForm"><div class="fd"><label for="jn">Nama tanaman</label><input id="jn" placeholder="Monstera kecilku" required></div><div class="fd"><label for="jt">Catatan hari ini</label><textarea id="jt" placeholder="Daun baru muncul, repotting, kondisi tanah..." required></textarea></div><button class="btn w" type="submit">Simpan catatan</button></form><div id="journalEntries"></div>`,1);showJournalEntries()}
function showJournalEntries(){const a=ld('vjournal',[]),el=$('#journalEntries');if(el)el.innerHTML=a.slice(0,8).map(x=>`<div class="rv"><b>${esc(x.n)} · ${esc(x.d)}</b>${esc(x.t)}</div>`).join('')||'<p class="m">Belum ada catatan. Mulai dari satu daun baru.</p>'}

function checkout(){const u=S.user||{};openM(`<h2>Checkout</h2><form class="dt" id="cf" novalidate><div>${fd('cn','Nama','text',`value="${esc(u.name||'')}" autocomplete="name"`)}<div class="two">${fd('ce','Email','email',`value="${esc(u.email||'')}"`)}${fd('cp','No. HP','tel','placeholder="08xxxxxxxxxx"')}</div><div class="fd"><label for="ca">Alamat lengkap</label><textarea id="ca"></textarea><p class="e"></p></div><div class="two">${fd('cy','Kota')}${fd('cz','Kode pos','text','inputmode="numeric"')}</div><div class="pay"><label><input type="radio" name="pay" value="Transfer bank" checked>Transfer bank</label><label><input type="radio" name="pay" value="E-wallet">E-wallet</label><label><input type="radio" name="pay" value="COD">Bayar di tempat (COD)</label></div></div><div><h3 style="margin:0 0 8px">Ringkasan</h3>${rows().map(({x,q})=>`<div class="sm"><span>${esc(x.n)} x${q}</span><span>${rp(x.p*q)}</span></div>`).join('')}<div class="sm"><span>Ongkir</span><span>${ong()?rp(ong()):'Gratis'}</span></div><div class="tt" style="margin-top:12px"><span>Total</span><b>${rp(sub()+ong())}</b></div><button class="btn w" type="submit">Buat pesanan</button><p class="m" style="margin-top:8px">Garansi hidup 14 hari berlaku untuk semua pesanan.</p></div></form>`)}
document.addEventListener('click',e=>{const t=e.target.closest('[data-a],[data-add],[data-w],[data-d],[data-q],[data-c]');if(!t)return;const a=t.dataset.a;
 if(t.dataset.add)add(t.dataset.add);else if(t.dataset.w){wt(t.dataset.w);if(md.open&&md.querySelector('.dt'))detail(t.dataset.w)}else if(t.dataset.d)detail(t.dataset.d);
 else if(t.dataset.q){S.cart[t.dataset.q]+=+t.dataset.v;panel()}
 else if(t.dataset.c){F.c=t.dataset.c;$('#fc').value=F.c;render();$('#koleksi').scrollIntoView()}
 else if(a==='cart'||a==='wish'){e.preventDefault();md.open&&md.close();show(a)}else if(a==='x')op(false);else if(a==='mx')md.close();
 else if(a==='acc'){e.preventDefault();op(false);acc()}else if(a==='sell'){op(false);sell()}else if(a==='co'){if(!sub())return;op(false);checkout()}
 else if(a==='guide'){if(window.driver?.js){const tour=window.driver.js.driver({showProgress:true,steps:[{element:'.hero',popover:{title:'Selamat datang',description:'Mulai dari sini untuk menemukan ruang hijau yang cocok.'}},{element:'#cats',popover:{title:'Jelajahi kategori',description:'Pilih kategori untuk langsung membuka katalog yang sesuai.'}},{element:'#koleksi',popover:{title:'Koleksi tanaman',description:'Cari, filter, dan lihat detail tanaman.'}},{element:'#studio',popover:{title:'Plant studio',description:'Gunakan alat bantu untuk merawat tanaman.'}},{element:'#community',popover:{title:'Komunitas',description:'Baca story, temukan teman, tanya jawab, dan selesaikan quest.'}}]});tour.drive()}else toast('Tur membutuhkan koneksi internet untuk memuat Driver.js')}else if(a==='finder'){finder()}else if(a==='care'){care()}else if(a==='clinic'){clinic()}else if(a==='journal'){journal()}else if(a==='clinicCheck'){clinicAdvice()}
  else if(a==='out'){S.user=null;save();panel();md.close();toast('Kamu sudah keluar')}});
md.addEventListener('cancel',e=>{if(md.classList.contains('auth-required'))e.preventDefault()});
md.addEventListener('submit',e=>{e.preventDefault();const f=e.target.id,v=id=>$('#'+id).value.trim();
 if(f==='finderForm'){const light=$('#fq1').value,pet=$('#fq3').value==='yes';let picks=all().filter(x=>(x.l===light||light==='sedang'&&x.l==='teduh')&&(!pet||x.pet));if(!picks.length)picks=all().filter(x=>!pet||x.pet);picks.sort((a,b)=>a.p-b.p);openM(`<p class="eyebrow">Your green match</p><h2>Mulai dari sini.</h2><p class="m">Berdasarkan cahaya dan kebutuhan rumahmu, ini beberapa pilihan yang bisa kamu pertimbangkan.</p>${picks.slice(0,3).map(x=>`<div class="rv"><b>${esc(x.n)} · ${rp(x.p)}</b><p class="m">${esc(x.ds)}</p><button class="btn g" data-d="${x.id}">Lihat detail</button></div>`).join('')||'<p>Belum ada kecocokan. Coba ubah pilihanmu.</p>'}`,1)}
  if(f==='careForm'){const x=find($('#carePlant').value),date=new Date($('#careDate').value+'T12:00:00');if(!x||Number.isNaN(date.getTime()))return;const next=new Date(date);next.setDate(next.getDate()+x.d);$('#careResult').innerHTML=`<div class="rv"><b>${esc(x.n)}</b><p>Perkiraan cek siram berikutnya: <strong>${next.toLocaleDateString('id-ID',{day:'numeric',month:'long',year:'numeric'})}</strong>.</p><p class="m">Interval ${x.d} hari adalah titik awal, bukan aturan mutlak. Siram hanya jika kondisi tanah memang membutuhkan.</p><button class="btn g" id="saveCare">Simpan pengingat</button></div>`;$('#saveCare').onclick=()=>{const a=ld('vcare',[]);a.push({n:x.n,d:next.toISOString().slice(0,10)});sv('vcare',a);toast('Pengingat tersimpan di perangkat ini')}}
  if(f==='journalForm'){const a=ld('vjournal',[]);a.unshift({n:v('jn'),t:v('jt'),d:new Date().toLocaleDateString('id-ID',{day:'numeric',month:'short',year:'numeric'})});sv('vjournal',a);showJournalEntries();$('#jn').value='';$('#jt').value='';toast('Catatan tumbuh tersimpan')}
 
 if(f==='sf'&&!e.target.dataset.kind){const a=bad('sn',v('sn').length>=2?'':'Isi nama tanaman'),b=bad('sp',+v('sp')>=1000?'':'Isi harga minimal Rp1.000'),c=bad('ss',+v('ss')>=1?'':'Stok minimal 1');if(!(a&&b&&c))return;
  mine.unshift({id:'c'+Date.now(),n:v('sn'),lat:'Dari komunitas',sh:$('#sh').value,l:$('#sl').value,d:+v('sd')||7,p:+v('sp'),c:'daun',r:4.5,st:+v('ss'),h:30,pet:0,ds:v('sx')||'Dijual oleh anggota komunitas Valauera.',i:Math.floor(Math.random()*5)});
  F={q:'',c:'semua',l:'semua',p:'0-0',s:'rec',pet:false};$$('#q,#fc,#fl,#fp,#so').forEach(x=>x.value=x.id==='q'?'':x.options[0].value);$('#tl').setAttribute('aria-pressed',false);save();render();md.close();toast('Tanamanmu sudah tayang');$('#koleksi').scrollIntoView()}
 if(f==='cf'){const ok=[bad('cn',v('cn').length>=2?'':'Isi nama kamu'),bad('ce',/^\S+@\S+\.\S+$/.test(v('ce'))?'':'Email belum valid'),bad('cp',/^(\+62|62|0)8\d{7,12}$/.test(v('cp').replace(/[\s-]/g,''))?'':'Nomor HP belum valid'),bad('ca',v('ca').length>=8?'':'Isi alamat lengkap'),bad('cy',v('cy').length>=2?'':'Isi kota'),bad('cz',/^\d{5}$/.test(v('cz'))?'':'Kode pos 5 angka')];if(ok.includes(false)){md.querySelector('.bad input,.bad textarea').focus();return}
  const r=rows(),id='VLA-'+Math.random().toString(36).slice(2,7).toUpperCase()+Math.floor(100+Math.random()*900);
  S.orders.push({id,e:(S.user?S.user.email:v('ce')).toLowerCase(),d:new Date().toLocaleDateString('id-ID',{day:'numeric',month:'short',year:'numeric'}),n:r.reduce((s,y)=>s+y.q,0),t:sub()+ong(),pay:md.querySelector('[name=pay]:checked').value});
  r.forEach(({x,q})=>S.stock[x.id]=Math.max(0,x.st-q));const nm=v('cn').split(' ')[0],em=v('ce');S.cart={};panel();render();
  md.innerHTML=`<button class="btn g x" data-a="mx">Tutup</button><div class="ok">V</div><h2>Pesanan diterima</h2><p>Terima kasih, ${esc(nm)}. Rincian pesanan dikirim ke ${esc(em)}.</p><div class="oid">${id}</div><button class="btn" data-a="mx">Lanjut belanja</button>`}});
$('#nf').onsubmit=e=>{e.preventDefault();e.target.reset();toast('Terima kasih! Form newsletter ini masih demo lokal.')};
$('#q').oninput=e=>{F.q=e.target.value.trim().toLowerCase();render()};
[['fc','c'],['fl','l'],['fp','p'],['so','s']].forEach(([i,k])=>$('#'+i).onchange=e=>{F[k]=e.target.value;render()});
$('#tl').onclick=e=>{F.pet=!F.pet;e.currentTarget.setAttribute('aria-pressed',F.pet);render()};
$('#rs').onclick=()=>{F={q:'',c:'semua',l:'semua',p:'0-0',s:'rec',pet:false};$$('#q,#fc,#fl,#fp,#so').forEach(x=>x.value=x.id==='q'?'':x.options[0].value);$('#tl').setAttribute('aria-pressed',false);render()};
$('#sc').onclick=()=>op(false);document.addEventListener('keydown',e=>{if(e.key==='Escape')op(false)});
$('#mode').onclick=()=>{const r=document.documentElement,d=r.dataset.theme||(matchMedia('(prefers-color-scheme: dark)').matches?'dark':'light');r.dataset.theme=d==='dark'?'light':'dark'};
const ar=$('#art');ar.addEventListener('pointermove',e=>{const r=ar.getBoundingClientRect();ar.style.setProperty('--mx',((e.clientX-r.left)/r.width-.5)*2);ar.style.setProperty('--my',((e.clientY-r.top)/r.height-.5)*2)});ar.addEventListener('pointerleave',()=>{ar.style.setProperty('--mx',0);ar.style.setProperty('--my',0)});


const articleContent={
 water:['Menyiram berdasarkan kondisi, bukan tanggal','Frekuensi penyiraman tidak sama untuk semua tanaman. Jenis tanaman, ukuran pot, media, cahaya, suhu, dan kelembapan ikut memengaruhi kebutuhan air. Coba periksa media dengan jari sekitar 2 inci untuk banyak tanaman hias; jika masih lembap, tunda penyiraman. Beberapa kelompok seperti sukulen membutuhkan media lebih kering, jadi selalu cocokkan dengan spesiesnya.','University of Maryland Extension','https://extension.umd.edu/resource/watering-indoor-plants'],
 light:['Membaca cahaya di dalam rumah','Cahaya yang diterima tanaman dipengaruhi arah jendela, tirai, bangunan di luar, musim, dan jarak dari jendela. Mata manusia mudah beradaptasi sehingga ruangan yang terasa terang belum tentu cukup terang bagi tanaman. Kenali kebutuhan spesies dan amati respons pertumbuhannya sebelum memindahkan pot.','University of Arizona Cooperative Extension','https://extension.arizona.edu/sites/default/files/2024-10/IndoorPlantCare.pdf'],
 drainage:['Pot yang baik membantu akar bernapas','Untuk kebanyakan tanaman dalam pot, lubang drainase membantu air berlebih keluar. Jangan biarkan pot terus berdiri di air yang tertampung di tatakan. Saat memilih pot baru, naikkan ukuran secara bertahap dan pastikan media sesuai kebutuhan tanaman.','University of Illinois Extension','https://extension.illinois.edu/houseplants/get-started']
};
document.addEventListener('click',e=>{const a=e.target.closest('[data-article]');if(a){const x=articleContent[a.dataset.article];openM(`<p class="eyebrow">VALAUERA FIELD GUIDE</p><h2>${x[0]}</h2><p style="font-size:16px;line-height:1.8;color:var(--ink)">${x[1]}</p><div class="rv"><b>Rujukan</b>${x[2]}<br><a href="${x[3]}" target="_blank" rel="noopener">Buka sumber asli ↗</a></div><p class="m">Panduan umum. Kebutuhan spesifik tetap mengikuti jenis tanaman dan kondisi tempat tumbuh.</p>`,1)}});
const eventData={
 Depok:[
  ['Plant & Pause','Sabtu, 14 November 2026','09.00–11.00','Taman kota (lokasi simulasi)','Jalan santai ringan dan sesi mengenal tanaman sekitar.','Santai · Pemula'],
  ['Tukar Stek Minggu Pagi','Minggu, 22 November 2026','08.00–10.00','Ruang komunitas (lokasi simulasi)','Bawa stek sehat yang sudah berakar untuk bertukar dan berbagi cerita.','Tukar tanaman'],
  ['Pot Pertamaku','Sabtu, 5 Desember 2026','10.00–12.00','Studio hijau (lokasi simulasi)','Kelas simulasi mengenal media, pot, dan drainase untuk pemula.','Workshop']
 ],
 'Jakarta Selatan':[
  ['Lunch Break Green Walk','Rabu, 18 November 2026','12.00–13.00','Taman lingkungan (lokasi simulasi)','Jeda makan siang dengan observasi tanaman dan obrolan santai.','After office'],
  ['Plant Corner Social','Sabtu, 28 November 2026','09.00–11.00','Ruang hijau (lokasi simulasi)','Kenalan dengan komunitas dan ide menata sudut hijau.','Komunitas']
 ],
 Bandung:[
  ['Morning Garden Notes','Minggu, 15 November 2026','07.30–09.30','Kebun belajar (lokasi simulasi)','Belajar mengamati cahaya dan kebutuhan tanaman.','Belajar bersama'],
  ['Seedling Exchange','Sabtu, 28 November 2026','09.00–11.00','Ruang temu (lokasi simulasi)','Tukar bibit dan berbagi cara semai.','Tukar bibit']
 ],
 Yogyakarta:[
  ['Slow Sunday in Green','Minggu, 22 November 2026','08.00–10.00','Taman warga (lokasi simulasi)','Aktivitas santai untuk mengenal tanaman dan lingkungan.','Outdoor'],
  ['Plant Care for Beginners','Sabtu, 5 Desember 2026','10.00–12.00','Ruang belajar (lokasi simulasi)','Pengenalan dasar cahaya, air, dan media tanam.','Workshop']
 ]
};
function renderEvents(city='Depok'){
 const rows=eventData[city]||[];
 $('#eventCount').textContent=rows.length+' agenda simulasi';
 $('#eventGrid').innerHTML=rows.map((e,i)=>`<article class="event-card"><div class="event-date"><span>${e[1].split(' ')[0]}</span><b>${e[1].split(' ')[1]}</b></div><div class="event-copy"><span class="event-tag">${e[5]}</span><h3>${e[0]}</h3><p>${e[4]}</p><dl><div><dt>Waktu</dt><dd>${e[2]}</dd></div><div><dt>Area</dt><dd>${e[3]}</dd></div></dl><button class="btn g" data-event="${i}" data-city="${city}">Lihat detail</button></div></article>`).join('')||'<p>Belum ada agenda simulasi untuk kota ini.</p>';
}
document.addEventListener('change',e=>{
 if(e.target.id==='eventCity')renderEvents(e.target.value);
 if(e.target.id==='languageSelect')setLanguage(e.target.value);
});
document.addEventListener('click',e=>{
 const ev=e.target.closest('[data-event]');
 if(ev){const item=(eventData[ev.dataset.city]||[])[Number(ev.dataset.event)];openM(`<p class="eyebrow">AGENDA SIMULASI · ${ev.dataset.city.toUpperCase()}</p><h2>${item[0]}</h2><p>${item[4]}</p><div class="rv"><b>Tanggal</b>${item[1]}</div><div class="rv"><b>Waktu</b>${item[2]}</div><div class="rv"><b>Area</b>${item[3]}</div><p class="m">Acara ini sepenuhnya fiktif untuk demo. Tidak ada pendaftaran atau lokasi nyata.</p>`,1)}
});
const translations={
 id:{home:'Beranda',plants:'Belanja tanaman & perlengkapan',community:'Komunitas',studio:'Studio tanaman',journal:'Artikel',events:'Agenda',about:'Tentang',welcome:'Selamat datang di Valauera',desc:'Ruang untuk menemukan tanaman, belajar, dan mengambil jeda dari rutinitas.',browse:'Jelajahi produk',join:'Gabung komunitas'},
 en:{home:'Home',plants:'Shop plants & supplies',community:'Community',studio:'Plant studio',journal:'Journal',events:'Events',about:'About',welcome:'Welcome to Valauera',desc:'A space to discover plants, learn, and take a pause from the everyday.',browse:'Explore products',join:'Join the community'},
 ja:{home:'ホーム',plants:'植物と園芸用品',community:'コミュニティ',studio:'プラントスタジオ',journal:'記事',events:'イベント',about:'私たちについて',welcome:'Valaueraへようこそ',desc:'植物を見つけ、学び、日常から少し離れてひと息つく場所。',browse:'商品を見る',join:'コミュニティに参加'}
};
const routeTranslations={
 id:{home:['Ruang hidup, bernapas.','Temukan tanaman, cerita, dan inspirasi untuk memulai perjalanan hijau.'],plants:['Temukan tanamanmu.','Jelajahi tanaman, bibit, pupuk, media, pot, dan alat berkebun.'],community:['Tumbuh bersama komunitas.','Tempat bertanya, berbagi pengalaman, dan belajar dari sesama pecinta tanaman.'],studio:['Kenali kebutuhan ruangmu.','Alat sederhana untuk memilih dan merawat tanaman dengan lebih percaya diri.'],journal:['Belajar dari pengetahuan dan pengalaman.','Artikel, panduan, dan cerita yang membantu siapa pun lebih dekat dengan alam.'],events:['Cari jeda di luar layar.','Agenda komunitas simulasi untuk belajar, bertukar tanaman, dan menikmati ruang hijau.'],about:['Kenapa Valauera dibuat.','Kenali tujuan, prinsip, pengembang, dan sumber pengetahuan di balik Valauera.']},
 en:{home:['A little room to breathe.','Discover plants, stories, and inspiration for a greener everyday.'],plants:['Find your kind of green.','Explore plants, seeds, fertilizers, growing media, pots, and gardening tools.'],community:['Grow with the community.','A welcoming place to ask, share experience, and learn from fellow plant people.'],studio:['Find what fits your space.','Simple tools to help you choose and care for plants with confidence.'],journal:['Learn through stories and knowledge.','Articles, practical guides, and stories to bring people closer to nature.'],events:['Take a pause beyond the screen.','Fictional community gatherings for learning, plant swaps, and time outdoors.'],about:['Why Valauera was created.','Meet the purpose, principles, creator, and research behind Valauera.']},
 ja:{home:['ひと息つける緑の場所。','植物やストーリーを見つけ、毎日に小さな緑を取り入れましょう。'],plants:['あなたに合う植物を見つけよう。','植物、種、肥料、培養土、鉢、園芸用品をご覧ください。'],community:['コミュニティと一緒に育つ。','質問や経験を共有し、植物好きの仲間と学べる場所です。'],studio:['部屋に合う植物を探す。','植物選びとお手入れをサポートするシンプルなツール。'],journal:['知識とストーリーから学ぶ。','記事やガイドを通じて自然をもっと身近に感じましょう。'],events:['画面から離れてひと休み。','学びや植物交換を楽しむ架空のコミュニティイベントです。'],about:['Valaueraが生まれた理由。','目的、理念、開発者、参考研究をご紹介します。']}
};
function setLanguage(lang){
 const t=translations[lang]||translations.id;
 localStorage.setItem('vlang',lang);
 const labels={plants:t.plants,community:t.community,studio:t.studio,journal:t.journal,events:t.events,about:t.about};
 $$('button.route-link,.mobile-nav button[data-route]').forEach(el=>{
   const k=el.dataset.route;
   if(k==='home')el.textContent=t.home;
   else if(labels[k])el.textContent=labels[k];
 });
 $('#languageSelect').value=lang;
 document.documentElement.lang=lang==='ja'?'ja':lang==='en'?'en':'id';
 const page=document.body.dataset.page||'home';
 const copy=(routeTranslations[lang]||routeTranslations.id)[page];
 const head=$('#routeHeading');
 if(head&&copy){head.querySelector('h1').textContent=copy[0];head.querySelector('p:last-child').textContent=copy[1]}
 const logo=$('.top .logo');if(logo)logo.innerHTML='vala<span>uera</span>';
 const words={
  en:{'Simpan':'Save','Tas':'Bag','Masuk':'Sign in','Tanaman':'Plants','Komunitas':'Community','Studio tanaman':'Plant studio','Artikel':'Journal','Agenda':'Events','Tentang':'About','Titip jual':'Sell','Temukan teman tanam':'Find plant friends','Cerita yang sedang tumbuh':'Stories in bloom','Aktivitas teman':'Friends activity','Quest kebun hari ini':'Today’s garden quests','Buat story':'Create story','Tambah teman':'Add friend','Lihat story':'View story','Tutup':'Close','Profil dan akun saya':'My profile','Semua produk':'All products','Tentang Valauera':'About Valauera','Keranjang':'Cart','Tersimpan':'Saved','Beranda':'Home','Belanja tanaman & perlengkapan':'Shop plants & supplies','Bahasa':'Language','Kabar tanaman baru':'Plant updates','Jelajah':'Explore','Akun':'Account','Profil dan akun saya':'My profile','Jual tanaman':'Sell plants','Bantu aku memilih':'Help me choose','Tanaman pilihan':'Curated plants','Cari':'Search','Jenis':'Type','Cahaya':'Light','Harga':'Price','Urutkan':'Sort','Aman untuk hewan':'Pet-friendly','Cerita':'Stories','Teman':'Friends','Tanya jawab':'Q&A','Quest harian':'Daily quests','Aktivitas teman':'Friends activity','Apa yang sedang kamu cari?':'What are you looking for?','Tanaman hias':'Houseplants','Benih & bibit':'Seeds & seedlings','Peralatan & media':'Tools & growing media','Anggaran':'Budget','Tampilkan pilihan':'Show matches','Cerita yang sedang tumbuh':'Stories in bloom','Temukan teman tanam':'Find plant friends','Quest kebun hari ini':'Today’s garden quests'},
  ja:{'Simpan':'保存','Tas':'カート','Masuk':'ログイン','Tanaman':'植物','Komunitas':'コミュニティ','Studio tanaman':'プラントスタジオ','Artikel':'記事','Agenda':'イベント','Tentang':'概要','Titip jual':'出品する','Temukan teman tanam':'植物好きの友達を探す','Cerita yang sedang tumbuh':'植物のストーリー','Aktivitas teman':'友達のアクティビティ','Quest kebun hari ini':'今日のガーデンクエスト','Buat story':'ストーリーを作成','Tambah teman':'友達を追加','Lihat story':'ストーリーを見る','Tutup':'閉じる','Profil dan akun saya':'プロフィール','Semua produk':'すべての商品','Tentang Valauera':'Valaueraについて','Keranjang':'カート','Tersimpan':'保存済み','Beranda':'ホーム','Belanja tanaman & perlengkapan':'植物・園芸用品','Kabar tanaman baru':'植物の最新情報','Jelajah':'探す','Akun':'アカウント','Profil dan akun saya':'プロフィール','Jual tanaman':'植物を販売','Bantu aku memilih':'選ぶのを手伝って','Tanaman pilihan':'おすすめの植物','Cari':'検索','Jenis':'種類','Cahaya':'光','Harga':'価格','Urutkan':'並べ替え','Aman untuk hewan':'ペットに安全','Cerita':'ストーリー','Teman':'友達','Tanya jawab':'Q&A','Quest harian':'毎日のクエスト','Aktivitas teman':'友達の活動','Apa yang sedang kamu cari?':'何をお探しですか？','Tanaman hias':'観葉植物','Benih & bibit':'種・苗','Peralatan & media':'園芸用品・用土','Anggaran':'予算','Tampilkan pilihan':'結果を見る','Cerita yang sedang tumbuh':'植物のストーリー','Temukan teman tanam':'植物好きの友達を探す','Quest kebun hari ini':'今日のガーデンクエスト'}
 }[lang];
 if(words){Object.assign(words,lang==='en'?{
 'Ruang hidup, bernapas.':'A little room to breathe.','Temukan tanaman, cerita, dan inspirasi untuk memulai perjalanan hijau.':'Discover plants, stories, and inspiration for a greener everyday.','Temukan tanaman':'Discover plants','Kenali ruangmu':'Explore your space','Cari lewat gaya':'Browse by personality','Pilih mood yang paling dekat dengan ruang dan gaya hidupmu.':'Choose the mood that fits your space and lifestyle.','The living collection':'The living collection','Tanaman pilihan':'Curated plants','Lebih dari sekadar belanja.':'More than shopping.','Ruang untuk belajar, merawat, dan menikmati proses tumbuh.':'A space to learn, care, and enjoy the growing process.','Tanaman yang cocok dengan hidupmu.':'Plants that fit your life.','Masih bingung mulai dari mana? Jawab beberapa pertanyaan sederhana. Kami bantu menyaring tanaman berdasarkan cahaya ruangan, waktu luang, dan pengalaman merawat.':'Not sure where to start? Answer a few simple questions. We will narrow down plants based on your light, free time, and care experience.','Tumbuh bersama komunitas.':'Grow with the community.','Tempat bertanya, berbagi pengalaman, dan belajar dari sesama pecinta tanaman.':'A place to ask, share experiences, and learn from fellow plant lovers.','Bukan cuma punya tanaman. Punya dunia di sekitarnya.':'More than owning plants. Find a world around them.','Tempat bertukar pengalaman, belajar dari kolektor lain, menemukan tanaman lokal, dan merayakan proses tumbuh.':'A place to exchange experience, learn from collectors, discover local plants, and celebrate growth.','Cerita yang sedang tumbuh':'Stories in bloom','Aktivitas teman':'Friends activity','Temukan teman tanam':'Find plant friends','Belajar dari pengalaman':'Learn from experience','Quest kebun hari ini':'Today’s garden quests','Kebiasaan kecil, dilakukan dengan tenang. Centang jika sudah dilakukan.':'Small habits, done calmly. Check them off when complete.','Artikel, cerita, dan panduan.':'Articles, stories, and guides.','Cerita, pengetahuan, dan inspirasi untuk sudut hijau milikmu.':'Stories, knowledge, and inspiration for your green corner.','Jelajahi':'Explore','Akun':'Account','Kabar tanaman baru':'Plant updates','Semua produk':'All products','Agenda komunitas':'Community events','Tentang Valauera':'About Valauera','Profil dan akun saya':'My profile','Jual tanaman':'Sell plants','A little greener, a little more you':'A little greener, a little more you'
}:{
 'Ruang hidup, bernapas.':'ひと息つける緑の場所。','Temukan tanaman, cerita, dan inspirasi untuk memulai perjalanan hijau.':'植物や物語を見つけ、毎日に小さな緑を取り入れましょう。','Temukan tanaman':'植物を探す','Kenali ruangmu':'部屋に合う植物を探す','Cari lewat gaya':'好みから探す','Pilih mood yang paling dekat dengan ruang dan gaya hidupmu.':'部屋やライフスタイルに合う雰囲気を選びましょう。','Tanaman pilihan':'おすすめの植物','Lebih dari sekadar belanja.':'買い物だけではありません。','Ruang untuk belajar, merawat, dan menikmati proses tumbuh.':'学び、育て、成長を楽しむ場所。','Tanaman yang cocok dengan hidupmu.':'あなたの暮らしに合う植物。','Tumbuh bersama komunitas.':'コミュニティと一緒に育つ。','Bukan cuma punya tanaman. Punya dunia di sekitarnya.':'植物を育てるだけでなく、その周りの世界も楽しもう。','Cerita yang sedang tumbuh':'植物のストーリー','Aktivitas teman':'友達の活動','Temukan teman tanam':'植物好きの友達を探す','Belajar dari pengalaman':'経験から学ぶ','Quest kebun hari ini':'今日のガーデンクエスト','Kebiasaan kecil, dilakukan dengan tenang. Centang jika sudah dilakukan.':'小さな習慣を穏やかに。できたらチェックしましょう。','Artikel, cerita, dan panduan.':'記事・ストーリー・ガイド。','Cerita, pengetahuan, dan inspirasi untuk sudut hijau milikmu.':'あなたの緑の空間のための物語、知識、アイデア。','Jelajahi':'探す','Akun':'アカウント','Kabar tanaman baru':'植物の最新情報','Semua produk':'すべての商品','Agenda komunitas':'コミュニティイベント','Tentang Valauera':'Valaueraについて','Profil dan akun saya':'プロフィール','Jual tanaman':'植物を販売'
});}
 if(words){const walker=document.createTreeWalker(document.body,NodeFilter.SHOW_TEXT);const nodes=[];while(walker.nextNode())nodes.push(walker.currentNode);nodes.forEach(n=>{if(!n.parentElement?.closest('script,style')){if(n.__baseText===undefined)n.__baseText=n.nodeValue;const v=n.__baseText.trim();n.nodeValue=words[v]?n.__baseText.replace(v,words[v]):n.__baseText}})}else{const walker=document.createTreeWalker(document.body,NodeFilter.SHOW_TEXT);while(walker.nextNode()){const n=walker.currentNode;if(n.__baseText!==undefined)n.nodeValue=n.__baseText}}}

const routeMeta={
 home:['YOUR GREEN SPACE','Ruang hidup, bernapas.','Temukan tanaman, cerita, dan inspirasi untuk memulai perjalanan hijau.'],
 plants:['THE LIVING COLLECTION','Temukan tanamanmu.','Jelajahi koleksi berdasarkan jenis, cahaya, dan kebutuhan perawatan.'],
 community:['VALAUERA SOCIETY','Tumbuh bersama komunitas.','Tempat bertanya, berbagi pengalaman, dan belajar dari sesama pecinta tanaman.'],
 studio:['VALAUERA PLANT STUDIO','Kenali kebutuhan ruangmu.','Alat sederhana untuk memilih dan merawat tanaman dengan lebih percaya diri.'],
 events:['VALAUERA LOCAL GATHERINGS','Cari jeda di luar layar.','Agenda komunitas simulasi untuk belajar, bertukar tanaman, dan menikmati ruang hijau.'],
 about:['OUR STORY','Kenapa Valauera dibuat.','Kenali tujuan, prinsip, pengembang, dan sumber pengetahuan di balik Valauera.'],
 journal:['THE VALAUERA JOURNAL','Belajar dari pengetahuan dan pengalaman.','Artikel, panduan, dan cerita yang membantu siapa pun lebih dekat dengan alam.']
};
function routeTo(page){
 if(!routeMeta[page])page='home';
 document.body.dataset.page=page;
 document.body.classList.add('page-changing');
 const main=$('#atas');
 main.hidden=!['home','plants','community'].includes(page);
 if(main){[...main.children].forEach(el=>{
   if(page==='plants')el.hidden=el.id!=='koleksi';
   else if(page==='home')el.hidden=el.id==='koleksi'||el.id==='community';
   else if(page==='community')el.hidden=el.id!=='community';
   else el.hidden=false;
 })}
 $('#studio').hidden=page!=='studio';
 $('#community').hidden=page!=='community';
 $('#journal').hidden=page!=='journal';
 $('#events').hidden=page!=='events';
 $('#about').hidden=page!=='about';
 $('#community-extra').hidden=true;
 let head=$('#routeHeading');
 if(!head){head=document.createElement('div');head.id='routeHeading';head.className='page-heading';document.querySelector('.top').after(head)}
 const m=routeMeta[page];
 if(page==='events')renderEvents($('#eventCity')?.value||'Depok');
 head.hidden=['home','plants'].includes(page);
 head.innerHTML=`<p class="eyebrow">${m[0]}</p><h1>${m[1]}</h1><p>${m[2]}</p>`;
 setLanguage(localStorage.getItem('vlang')||'id');
 $$('[data-route]').forEach(el=>{if(el.matches('button')){if(el.classList.contains('route-link')||el.closest('.mobile-nav')){if(el.dataset.route===page)el.setAttribute('aria-current','page');else el.removeAttribute('aria-current')}}});
 window.scrollTo({top:0,behavior:'auto'});
 history.replaceState(null,'','#'+page);
 setTimeout(()=>document.body.classList.remove('page-changing'),260);
}
document.addEventListener('click',e=>{
 const r=e.target.closest('[data-route]');if(r){e.preventDefault();routeTo(r.dataset.route)}
 const am=e.target.closest('[data-auth-mode]');if(am){auth(am.dataset.authMode)}
 const th=e.target.closest('[data-thread]');if(th){threadView(th.dataset.thread)}
});
document.addEventListener('submit',e=>{
 const f=e.target;
 if(f.id==='authForm'){
   e.preventDefault();
   const mode=f.dataset.mode,contact=$('#authContact').value.trim().toLowerCase(),pass=$('#authPass').value;
   const users=ld('vusers',[]);
   if(!/^[a-z0-9._%+-]+@gmail\.com$/i.test(contact)){toast('Masukkan alamat Gmail yang valid');return}
   if(pass.length<6){toast('Kata sandi minimal 6 karakter');return}
   let u=users.find(x=>x.email===contact);
   if(mode==='signup'){
     const name=$('#authName').value.trim(),pass2=$('#authPass2').value;
     const blocked=/(admin|moderator|support|fuck|shit|bitch|anjing|bangsat|kontol|memek|ngentot|tolol|bodoh|rasis|nazi|terror|porn|sex|rape)/i;
     if(!/^[a-zA-Z0-9_]{3,20}$/.test(name)||blocked.test(name)){toast('Username 3–20 karakter: huruf, angka, underscore; tanpa kata kasar atau sensitif');return}
     if(pass!==pass2){toast('Konfirmasi kata sandi belum sama');return}
     if(u){toast('Gmail ini sudah memiliki profil lokal');return}
     u={name,email:contact,password:pass,avatar:'',xp:0};users.push(u);sv('vusers',users);
   }else{
     if(u&&u.password!==pass){toast('Kata sandi tidak cocok untuk profil lokal ini');return}
     if(!u){u={name:contact.split('@')[0].replace(/[._-]/g,'_'),email:contact,password:pass,avatar:'',xp:0};users.push(u);sv('vusers',users)}
   }
   S.user={name:u.name,email:u.email,avatar:u.avatar||'',xp:u.xp||0};authGatePending=false;md.classList.remove('auth-required','auth-dialog');save();panel();md.close();toast('Profil lokal siap, '+u.name+'!')
 }
 if(f.id==='sf'){
   e.preventDefault();const name=$('#sn').value.trim(),price=Number($('#sp').value),stock=Number($('#ss').value),kind=f.dataset.kind;
   if(!name||price<1000||stock<1){toast('Lengkapi nama, harga, dan stok dengan benar');return}
   const id='user-'+Date.now(),cat=$('#sellCat').value,seed=kind==='bibit',tool=kind==='alat';if(seed&&[...B,...EXTRA,...mine].some(x=>x.c==='bibit'&&x.p===price)){toast('Harga benih harus berbeda dari produk benih lain. Coba harga lain.');return}
   const item={id,n:name,lat:seed?'Benih / bibit lokal':tool?'Perlengkapan berkebun':'Tanaman koleksi',sh:$('#sh')?.value||'round',l:$('#sl').value,d:Number($('#sd').value)||7,p:price,c:cat,r:5,st:stock,h:0,pet:0,ds:$('#sx').value||'Produk dari penjual komunitas.',unit:seed?'/ '+$('#seedPack').value+' '+$('#seedUnit').value:tool?'/ unit':'/ pot',i:40+mine.length};mine.push(item);save();md.close();render();toast('Produk berhasil ditambahkan ke katalog demo');return;
 }
 if(f.id==='replyForm'){
   e.preventDefault();
   if(!S.user){auth('login');return}
   const val=$('#replyText').value.trim();if(!val){toast('Tulis tanggapan terlebih dahulu');return}
   const id=f.dataset.threadId;threads[id].replies.push([S.user.name,val]);S.user.xp=(S.user.xp||0)+10;save();threadView(id);toast('Tanggapan ditambahkan · +10 EXP')
 }
 if(f.id==='newThreadForm'){
   e.preventDefault();if(!S.user){auth('login');return}
   const title=$('#postTitle').value.trim(),body=$('#postBody').value.trim();
   if(title.length<8||body.length<12){toast('Judul atau cerita masih terlalu singkat');return}
   const id='user-'+Date.now();threads[id]={category:'DISKUSI BARU',title,author:S.user.name,role:'Anggota Valauera',body,replies:[]};
   md.close();routeTo('community');toast('Diskusi demo berhasil diterbitkan')
 }
});


const demoFriends=[
{id:'f1',name:'Nenek Sari',plant:'Monstera deliciosa',hobby:'Aroid, repotting, dan berbagi pengalaman',bio:'Merawat tanaman teras sejak lama. Percaya setiap daun baru punya cerita.',level:'Senior',xp:340,story:'Daun Monstera baru membuka pagi ini. Aku menunggu sampai daunnya mengeras sebelum mengubah posisi pot.',color:'#F3B6A2'},
{id:'f2',name:'Damar Pratama',plant:'Philodendron',hobby:'Koleksi aroid dan media porous',bio:'Suka membandingkan campuran media dan mencatat respons tanaman.',level:'Junior',xp:110,story:'Mencoba campuran bark dan perlite baru untuk koleksi aroid.',color:'#8EC5F0'},
{id:'f3',name:'Mika Tan',plant:'Kaktus & Haworthia',hobby:'Sukulen mini dan fotografi makro',bio:'Meja kerja kecil dengan sukulen yang tumbuh perlahan.',level:'Junior',xp:78,story:'Haworthia mengeluarkan anakan kecil. Proses pelan juga tetap kemajuan.',color:'#CFE84A'},
{id:'f4',name:'Pak Hendra',plant:'Anggrek bulan',hobby:'Anggrek, kompos, dan kebun balkon',bio:'Berbagi cara membaca akar dan menjaga sirkulasi udara.',level:'Senior',xp:520,story:'Akar anggrek tampak hijau setelah penyiraman pagi. Jangan lupa sirkulasi udara.',color:'#FFC21A'},
{id:'f5',name:'Alya Putri',plant:'Sirih gading',hobby:'Urban jungle, stek air, dan tanaman pemula',bio:'Mengubah sudut kos jadi tempat istirahat kecil yang penuh hijau.',level:'New',xp:22,story:'Stek sirih gading pertamaku mulai menumbuhkan akar. Senang banget!',color:'#FF8F7A'}];
function portrait(i){const f=demoFriends[i],skin=['#D69B78','#B97858','#E8B68F','#A96F50','#F0C7A5'][i],hair=['#4A3028','#201C1B','#38251F','#30221D','#3B2926'][i];return `<svg viewBox="0 0 100 100" role="img" aria-label="Ilustrasi profil ${f.name}"><rect width="100" height="100" rx="50" fill="${f.color}"/><path d="M13 100Q15 68 50 67Q85 68 87 100" fill="#365D4A"/><ellipse cx="50" cy="43" rx="23" ry="28" fill="${skin}"/><path d="M26 43Q21 10 51 11Q80 11 75 44L69 29Q50 19 31 36Z" fill="${hair}"/><circle cx="42" cy="45" r="2" fill="#34251F"/><circle cx="59" cy="45" r="2" fill="#34251F"/><path d="M44 57Q50 61 57 56" fill="none" stroke="#8B5145" stroke-width="2" stroke-linecap="round"/></svg>`}
function renderCommunity(){const strip=$('#storyStrip'),activity=$('#friendActivity'),grid=$('#friendGrid'),feed=$('#questionFeed'),quests=$('#questList');if(!strip)return;const seen=ld('vseen',[]),ownStories=ld('vstories',[]).filter(x=>Date.now()-x.at<86400000);strip.innerHTML=(ownStories.length?`<button class="story-person" data-own-story><span class="story-avatar">${S.user?.avatar?`<img src="${S.user.avatar}" alt="Foto profil" style="width:100%;height:100%;object-fit:cover;border-radius:50%">`:portrait(4)}</span><small>Cerita kamu</small></button>`:`<button class="story-add" data-a="addStory"><span class="story-avatar add-ring"><b>+</b></span><small>Cerita kamu</small></button>`)+demoFriends.map((f,i)=>`<button class="story-person" data-story="${i}"><span class="story-avatar ${seen.includes(f.id)?'seen':''}">${portrait(i)}</span><small>${f.name.split(' ')[0]}</small></button>`).join('');activity.innerHTML=demoFriends.slice(0,3).map((f,i)=>`<article class="activity-card"><span class="mini-avatar">${portrait(i)}</span><div><b>${f.name}</b><p>${f.story}</p><small>Sedang merawat: ${f.plant}</small></div></article>`).join('');const friends=ld('vfriends',[]),q=($('#friendSearch')?.value||'').toLowerCase();grid.innerHTML=demoFriends.filter(f=>(f.name+' '+f.plant+' '+f.hobby).toLowerCase().includes(q)).map(f=>{const i=demoFriends.indexOf(f),yes=friends.includes(f.id);return `<article class="friend-card"><div class="friend-cover" style="background:${f.color}">${portrait(i)}</div><div class="friend-card-body"><div class="friend-title"><b>${f.name}</b><span class="level ${f.level.toLowerCase()}">${f.level}</span></div><p class="m">${f.plant} · ${f.xp} EXP</p><p>${f.bio}</p><small>${f.hobby}</small><button class="btn ${yes?'g':''} w" data-friend="${f.id}">${yes?'Mengikuti':'Tambah teman'}</button><button class="text-link" data-story="${i}">Lihat story ↗</button></div></article>`}).join('');feed.innerHTML=Object.entries(threads).map(([id,t])=>`<article class="question-card"><div><span class="level senior">Senior</span><h3>${esc(t.title)}</h3><p class="m">Oleh ${esc(t.author)} · ${t.replies.length} jawaban</p></div><button class="btn g" data-thread="${id}">Buka diskusi</button></article>`).join('');const day=new Date().toISOString().slice(0,10),done=ld('vquest-'+day,[]),qs=[['check','Periksa kelembapan media sebelum menyiram',10],['water','Siram tanaman yang memang membutuhkan air hari ini',15],['observe','Amati satu daun atau batang baru',10],['clean','Bersihkan satu daun dari debu dengan lembut',10],['journal','Catat perkembangan tanamanmu',15]];quests.innerHTML=qs.map(([id,label,xp])=>`<label class="quest-item"><input type="checkbox" data-quest="${id}" ${done.includes(id)?'checked':''}><span>${label}<small>+${xp} EXP</small></span></label>`).join('');$('#xpTotal').textContent+='' ;$('#xpTotal').textContent=qs.filter(x=>done.includes(x[0])).reduce((n,x)=>n+x[2],0)+' EXP hari ini'}
document.addEventListener('click',e=>{const seed=e.target.closest('[data-seed-option]');if(seed){const x=find(seed.dataset.seedOption),id='seed-'+x.id;let price=Math.max(5000,Math.round((x.p*.32)/1000)*1000);while([...B,...EXTRA,...mine].some(y=>y.id!==id&&y.c==='bibit'&&y.p===price))price+=1000;let item=find(id);if(!item){item={...x,id,n:'Bibit awal '+x.n,lat:x.lat+' · bibit simulasi',c:'bibit',p:price,unit:'/ bibit',st:12,ds:'Opsi bibit simulasi untuk prototipe Valauera. Ketersediaan benih nyata bergantung pada spesies dan penjual.',i:70+mine.length};mine.push(item);save();render()}openM(`<p class="eyebrow">PROPAGATION OPTION</p><h2>Opsi benih / bibit ${esc(x.n)}</h2><p class="m">Opsi perbanyakan simulasi. Ketersediaan benih nyata bergantung pada spesies dan penjual.</p><div class="rv"><b>${esc(item.n)}</b><p class="m">Harga: ${rp(price)} per bibit.</p><button class="btn w" data-add="${id}">Tambah opsi bibit ke tas</button></div>`,1);return}const c=e.target.closest('[data-c]');if(c){F.c=c.dataset.c;$('#fc').value=F.c;routeTo('plants');render();$('#koleksi').scrollIntoView({behavior:'smooth',block:'start'});return}const tab=e.target.closest('[data-community-tab]');if(tab){$$('[data-community-tab]').forEach(x=>x.classList.toggle('active',x===tab));$$('[data-community-pane]').forEach(x=>x.hidden=x.dataset.communityPane!==tab.dataset.communityTab);return}const fr=e.target.closest('[data-friend]');if(fr){let a=ld('vfriends',[]);a=a.includes(fr.dataset.friend)?a.filter(x=>x!==fr.dataset.friend):[...a,fr.dataset.friend];sv('vfriends',a);renderCommunity();return}const own=e.target.closest('[data-own-story]');if(own){const a=ld('vstories',[]).filter(x=>Date.now()-x.at<86400000);openM(`<div class="story-viewer"><p class="eyebrow">CERITA KAMU</p><h2>${esc(a[0]?.text||'Belum ada cerita')}</h2><p class="m">Story akan kedaluwarsa setelah 24 jam.</p></div><button class="btn w" data-a="mx">Tutup</button>`,1);return}const st=e.target.closest('[data-story]');if(st){const i=Number(st.dataset.story),f=demoFriends[i],seen=ld('vseen',[]);if(!seen.includes(f.id)){seen.push(f.id);sv('vseen',seen)}openM(`<div class="story-viewer" style="background:linear-gradient(145deg,${f.color},#F4F6EC)"><div class="story-profile">${portrait(i)}<b>${f.name}</b><span>${f.level} · ${f.plant}</span></div><h2>${f.story}</h2><p>${f.bio}</p></div><button class="btn w" data-a="mx">Tutup story</button>`,1);renderCommunity();return}const pv=e.target.closest('[data-a="passPreview"]');if(pv){const ip=$('#authPass');if(ip){ip.type=ip.type==='password'?'text':'password';pv.textContent=ip.type==='password'?'Lihat':'Sembunyikan'}return}if(e.target.closest('[data-a="shopSurvey"]')){openM(`<p class="eyebrow">PERSONAL SHOPPING GUIDE</p><h2>Apa yang sedang kamu cari?</h2><p class="m">Pilih beberapa kebutuhan. Katalog akan disaring berdasarkan jawabanmu.</p><form id="shopSurveyForm"><div class="survey-options"><label><input type="checkbox" name="shopKind" value="daun" checked><span><b>Tanaman hias</b><small>Tanaman daun, rambat, sukulen, atau koleksi khusus.</small></span></label><label><input type="checkbox" name="shopKind" value="bibit"><span><b>Benih & bibit</b><small>Mulai menanam dari awal.</small></span></label><label><input type="checkbox" name="shopKind" value="alat"><span><b>Peralatan & media</b><small>Pot, alat, pupuk, dan media tanam.</small></span></label></div><div class="fd"><label for="shopLight">Cahaya di rumah</label><select id="shopLight"><option value="semua">Belum tahu / campuran</option><option value="teduh">Teduh</option><option value="sedang">Cahaya tidak langsung</option><option value="terang">Terang / dekat jendela</option></select></div><div class="fd"><label for="shopStyle">Selera gaya</label><select id="shopStyle"><option value="natural">Natural dan tenang</option><option value="minimal">Minimalis</option><option value="colorful">Warna dan bentuk unik</option><option value="collector">Koleksi langka</option></select></div><div class="fd"><label for="shopBudget">Anggaran</label><select id="shopBudget"><option value="0-0">Bebas</option><option value="0-50000">Di bawah Rp50.000</option><option value="50000-150000">Rp50.000–Rp150.000</option><option value="150000-0">Di atas Rp150.000</option></select></div><button class="btn w" type="submit">Tampilkan pilihan ↗</button></form>`,1);return}if(e.target.closest('[data-a="addStory"]')){if(!S.user){auth('login');return}openM(`<h2>Buat story</h2><form id="storyForm"><div class="fd"><label for="storyText">Apa yang sedang tumbuh hari ini?</label><textarea id="storyText" maxlength="240" required placeholder="Ceritakan tanamanmu..."></textarea></div><button class="btn w" type="submit">Bagikan story demo</button></form><p class="m">Story simulasi disimpan lokal selama sesi prototipe.</p>`,1)}});
document.addEventListener('change',e=>{if(e.target.matches('[data-quest]')){const day=new Date().toISOString().slice(0,10),a=ld('vquest-'+day,[]),id=e.target.dataset.quest,points={check:10,water:15,observe:10,clean:10,journal:15},was=a.includes(id);sv('vquest-'+day,e.target.checked?[...new Set([...a,id])]:a.filter(x=>x!==id));if(S.user&&!was&&e.target.checked){S.user.xp=(S.user.xp||0)+(points[id]||0);save()}else if(S.user&&was&&!e.target.checked){S.user.xp=Math.max(0,(S.user.xp||0)-(points[id]||0));save()}renderCommunity()}if(e.target.id==='profilePhoto'){const file=e.target.files?.[0];if(!file)return;if(file.size>2*1024*1024){toast('Foto maksimal 2 MB');return}const r=new FileReader();r.onload=()=>{S.user.avatar=r.result;save();toast('Foto profil diperbarui');acc()};r.readAsDataURL(file)}});
document.addEventListener('input',e=>{if(e.target.id==='friendSearch')renderCommunity()});
document.addEventListener('submit',e=>{if(e.target.id==='shopSurveyForm'){e.preventDefault();const kinds=[...e.target.querySelectorAll('[name=shopKind]:checked')].map(x=>x.value);if(!kinds.length){toast('Pilih minimal satu jenis produk');return}const map={daun:['daun','rambat','sukulen','langka'],bibit:['bibit'],alat:['pot','alat','media','pupuk']};const cats=[...new Set(kinds.flatMap(k=>map[k]))];F.c=cats.length===1?cats[0]:'semua';F.l=$('#shopLight').value;F.p=$('#shopBudget').value;sv('vshopPrefs',{kinds,light:F.l,budget:F.p,style:$('#shopStyle').value});md.close();routeTo('plants');render();if(cats.length>1){$('#fc').value='semua';F.c='semua';render()}$('#koleksi').scrollIntoView({behavior:'smooth'});toast('Katalog disesuaikan dengan pilihanmu');return}if(e.target.id==='sellSurvey'){e.preventDefault();sellForm(new FormData(e.target).get('sellType'))}if(e.target.id==='storyForm'){e.preventDefault();const a=ld('vstories',[]);a.unshift({text:$('#storyText').value.trim(),user:S.user.name,at:Date.now()});sv('vstories',a);md.close();renderCommunity();toast('Story tersimpan di prototipe lokal')}});

render();panel();renderCommunity();routeTo('home');if($('#languageSelect'))setLanguage(localStorage.getItem('vlang')||'id');

/* ===== Original Valauera 1.4 enhancement layer ===== */

/* ===== Valauera 1.4 enhancement layer ===== */
(function(){
  const V14_LANGS = {
    en: {
      "Simpan":"Save","Tas":"Cart","Masuk":"Sign in","Beranda":"Home","Komunitas":"Community",
      "Belanja tanaman & perlengkapan":"Shop plants & supplies","Studio tanaman":"Plant studio","Artikel":"Journal",
      "Agenda":"Events","Tentang":"About","Tanaman pilihan":"Featured plants","Tanaman":"Plants",
      "Semua produk":"All products","Bantu aku memilih":"Help me choose","Jual tanaman":"Sell plants",
      "Cerita":"Stories","Teman":"Friends","Tanya jawab":"Q&A forum","Quest harian":"Daily quests",
      "Cerita yang sedang tumbuh":"Stories in bloom","Aktivitas teman":"Friends activity",
      "Temukan teman tanam":"Find plant friends","Quest kebun hari ini":"Today’s garden quests",
      "Buat story":"Create a story","+ Buat story":"+ Create story","Cerita kamu":"Your story",
      "Tambah teman":"Follow","Mengikuti":"Following","Lihat story ↗":"View story ↗",
      "Lihat profil":"View profile","Buka profil":"Open profile","Buka diskusi":"Open discussion",
      "Lihat semua jawaban":"View all answers","Tanya komunitas":"Ask the community",
      "Belajar dari pengalaman":"Learn from experience","Jawaban terbaru":"Latest answers",
      "Belum ada jawaban. Jadilah orang pertama yang membantu.":"No answers yet. Be the first to help.",
      "Jawaban komunitas":"Community answers","Ikut membantu percakapan":"Join the conversation",
      "Kirim tanggapan demo":"Post answer (demo)","Masuk untuk menjawab":"Sign in to answer",
      "Profil teman":"Friend profile","Bio":"About","Pengikut":"Followers","Mengikuti":"Following",
      "Foto koleksi":"Photo collection","Lihat koleksi":"View collection","Tanaman utama":"Favorite plant",
      "Minat tanaman":"Plant interests","Aktivitas terbaru":"Recent activity","Foto unggahan":"Shared photos",
      "Story tersimpan di prototipe lokal":"Story saved in this local prototype",
      "Apa yang sedang tumbuh hari ini?":"What’s growing today?",
      "Tambahkan cerita singkat, foto, atau video tanamanmu.":"Add a short note, photo, or video of your plants.",
      "Foto atau video (opsional)":"Photo or video (optional)","Pilih foto / video":"Choose photo / video",
      "Pratinjau media":"Media preview","Bagikan story":"Share story","Story akan hilang setelah 24 jam.":"Stories disappear after 24 hours.",
      "Foto maksimal 5 MB sebelum diproses. Video maksimal 900 KB untuk penyimpanan lokal.":"Photos up to 5 MB before processing. Videos up to 900 KB for local storage.",
      "Tambahkan media agar teman bisa melihat perkembangan tanamanmu.":"Add media so friends can see how your plants are growing.",
      "Bibit & benih":"Seeds & seedlings","Bibit dan benih":"Seeds & seeds","Lihat semua bibit":"Browse all seeds",
      "Mulai dari benih, tumbuhkan sendiri.":"Start from seed and grow it yourself.",
      "Pilih benih, stek, atau bibit muda. Setiap produk menampilkan gambar kemasan, isi, dan harga.":"Choose seeds, cuttings, or young plants. Each product shows its packet artwork, quantity, and price.",
      "Lihat katalog bibit":"Browse seed catalogue","Foto ilustrasi produk":"Product illustration",
      "Community":"Community","Plant people":"Plant people","New":"New","Junior":"Junior","Senior":"Senior","Member":"Member",
      "Cerita teman":"Friends’ stories","Forum komunitas":"Community forum","Jawaban forum tidak disembunyikan lagi: cuplikan jawaban tampil di kartu diskusi.":"Forum answers are easier to find: answer previews appear on discussion cards.",
      "Mulai dari rasa ingin tahu":"Start with curiosity","Belajar dari pengalaman nyata":"Learn from real experience",
      "Tumbuh bersama, bukan berlomba":"Grow together, not against each other",
      "Periksa kelembapan media sebelum menyiram":"Check soil moisture before watering",
      "Siram tanaman yang memang membutuhkan air hari ini":"Water plants that actually need it today",
      "Amati satu daun atau batang baru":"Observe one new leaf or stem",
      "Bersihkan satu daun dari debu dengan lembut":"Gently clean dust from one leaf",
      "Catat perkembangan tanamanmu":"Record your plant’s progress",
      "Kebiasaan kecil, dilakukan dengan tenang. Centang jika sudah dilakukan.":"Small habits, done calmly. Check them off when complete.",
      "Pilihan bibit":"Seedling options","Benih & bibit":"Seeds & seedlings",
      "Produk bibit":"Seed products","Kategori":"Category","Jenis":"Type","Cahaya":"Light","Harga":"Price",
      "Cari":"Search","Cari nama atau tanaman...":"Search names or plants...","Cari nama atau tanaman…":"Search names or plants…",
      "Apa yang sedang kamu cari?":"What are you looking for?","Tanaman hias":"Houseplants",
      "Peralatan & media":"Tools & growing media","Anggaran":"Budget","Tampilkan pilihan":"Show matches",
      "Buat diskusi baru":"Start a discussion","Judul pertanyaan":"Question title","Ceritakan lebih lengkap":"Add more detail",
      "Terbitkan diskusi demo":"Publish demo discussion","Nama produk":"Product name","Simpan produk":"Save product",
      "Ganti foto profil":"Change profile photo","Pesanan saya":"My orders","Keluar dari akun":"Sign out",
      "Tentang Valauera":"About Valauera","Dibuat oleh":"Created by",
      "Belum ada yang cocok. Longgarkan filternya, atau jual tanamanmu sendiri.":"No matches yet. Loosen the filters or list a plant of your own.",
      "tanaman ditemukan":"plants found","Siap kirim":"Ready to ship","Stok habis":"Out of stock",
      "Tanggapan":"Answers","Diskusi komunitas":"Community discussion","Tutup":"Close","Kirim":"Send",
      "Lanjut isi produk ↗":"Continue to product details ↗","Daftarkan benih atau bibit":"List seeds or seedlings",
      "Daftarkan perlengkapan":"List supplies","Daftarkan tanamanmu":"List your plant",
      "Isi kemasan":"Pack quantity","Satuan":"Unit","Harga unik (Rp)":"Set your price (IDR)","Stok":"Stock",
      "Cahaya di rumah":"Light at home","Selera gaya":"Preferred style","Tampilkan pilihan ↗":"Show matches ↗",
      "Story Circle":"Story circle","YOUR GREEN SPACE":"YOUR GREEN SPACE","THE LIVING COLLECTION":"THE LIVING COLLECTION",
      "STORY CIRCLE":"STORY CIRCLE","FROM YOUR FRIENDS":"FROM YOUR FRIENDS","PLANT PEOPLE":"PLANT PEOPLE",
      "GROWER LEVEL":"GROWER LEVEL","SMALL DAILY RITUALS":"SMALL DAILY RITUALS"
    },
    ja: {
      "Simpan":"保存","Tas":"カート","Masuk":"ログイン","Beranda":"ホーム","Komunitas":"コミュニティ",
      "Belanja tanaman & perlengkapan":"植物・園芸用品","Studio tanaman":"植物スタジオ","Artikel":"記事",
      "Agenda":"イベント","Tentang":"概要","Tanaman pilihan":"おすすめの植物","Tanaman":"植物",
      "Semua produk":"すべての商品","Bantu aku memilih":"選ぶのを手伝って","Jual tanaman":"植物を販売",
      "Cerita":"ストーリー","Teman":"友達","Tanya jawab":"Q&Aフォーラム","Quest harian":"毎日のクエスト",
      "Cerita yang sedang tumbuh":"育つストーリー","Aktivitas teman":"友達の活動",
      "Temukan teman tanam":"植物好きの友達を探す","Quest kebun hari ini":"今日のガーデンクエスト",
      "Buat story":"ストーリーを作成","+ Buat story":"+ ストーリーを作成","Cerita kamu":"あなたのストーリー",
      "Tambah teman":"フォローする","Mengikuti":"フォロー中","Lihat story ↗":"ストーリーを見る ↗",
      "Lihat profil":"プロフィールを見る","Buka profil":"プロフィールを開く","Buka diskusi":"ディスカッションを開く",
      "Lihat semua jawaban":"すべての回答を見る","Tanya komunitas":"コミュニティに質問",
      "Belajar dari pengalaman":"経験から学ぶ","Jawaban terbaru":"最新の回答",
      "Belum ada jawaban. Jadilah orang pertama yang membantu.":"まだ回答はありません。最初の回答を投稿しましょう。",
      "Jawaban komunitas":"コミュニティの回答","Ikut membantu percakapan":"会話に参加する",
      "Kirim tanggapan demo":"回答を投稿（デモ）","Masuk untuk menjawab":"ログインして回答",
      "Profil teman":"友達のプロフィール","Bio":"自己紹介","Pengikut":"フォロワー","Mengikuti":"フォロー中",
      "Foto koleksi":"コレクション写真","Lihat koleksi":"コレクションを見る","Tanaman utama":"お気に入りの植物",
      "Minat tanaman":"植物の興味","Aktivitas terbaru":"最近の活動","Foto unggahan":"投稿した写真",
      "Story tersimpan di prototipe lokal":"ストーリーをローカルのプロトタイプに保存しました",
      "Apa yang sedang tumbuh hari ini?":"今日は何が育っていますか？",
      "Tambahkan cerita singkat, foto, atau video tanamanmu.":"短い文章、写真、または植物の動画を追加できます。",
      "Foto atau video (opsional)":"写真・動画（任意）","Pilih foto / video":"写真・動画を選択",
      "Pratinjau media":"メディアのプレビュー","Bagikan story":"ストーリーを投稿",
      "Story akan hilang setelah 24 jam.":"ストーリーは24時間後に消えます。",
      "Foto maksimal 5 MB sebelum diproses. Video maksimal 900 KB untuk penyimpanan lokal.":"写真は処理前5MBまで、動画はローカル保存のため900KBまでです。",
      "Tambahkan media agar teman bisa melihat perkembangan tanamanmu.":"写真や動画で植物の成長を友達に見せましょう。",
      "Bibit & benih":"種・苗","Bibit dan benih":"種と苗","Lihat semua bibit":"種・苗をすべて見る",
      "Mulai dari benih, tumbuhkan sendiri.":"種から育ててみましょう。",
      "Pilih benih, stek, atau bibit muda. Setiap produk menampilkan gambar kemasan, isi, dan harga.":"種、挿し木、若い苗から選べます。各商品にパッケージ画像、内容量、価格を表示します。",
      "Lihat katalog bibit":"種・苗のカタログを見る","Foto ilustrasi produk":"商品イメージ",
      "Community":"コミュニティ","Plant people":"植物を愛する人","New":"新人","Junior":"初級","Senior":"上級","Member":"メンバー",
      "Cerita teman":"友達のストーリー","Forum komunitas":"コミュニティフォーラム",
      "Jawaban forum tidak disembunyikan lagi: cuplikan jawaban tampil di kartu diskusi.":"フォーラムの回答を見つけやすくしました。ディスカッションカードに回答のプレビューを表示します。",
      "Mulai dari rasa ingin tahu":"好奇心から始めよう","Belajar dari pengalaman nyata":"実体験から学ぶ",
      "Tumbuh bersama, bukan berlomba":"競争せず、一緒に育とう",
      "Periksa kelembapan media sebelum menyiram":"水やり前に土の湿り気を確認する",
      "Siram tanaman yang memang membutuhkan air hari ini":"水が必要な植物に水をあげる",
      "Amati satu daun atau batang baru":"新しい葉や茎を観察する",
      "Bersihkan satu daun dari debu dengan lembut":"葉のほこりをやさしく拭き取る",
      "Catat perkembangan tanamanmu":"植物の成長を記録する",
      "Kebiasaan kecil, dilakukan dengan tenang. Centang jika sudah dilakukan.":"小さな習慣を穏やかに。できたらチェックしましょう。",
      "Pilihan bibit":"苗の選択","Produk bibit":"種・苗の商品","Kategori":"カテゴリー",
      "Jenis":"種類","Cahaya":"光","Harga":"価格","Cari":"検索",
      "Cari nama atau tanaman...":"名前や植物を検索...","Cari nama atau tanaman…":"名前や植物を検索…",
      "Apa yang sedang kamu cari?":"何をお探しですか？","Tanaman hias":"観葉植物",
      "Peralatan & media":"園芸用品・用土","Anggaran":"予算","Tampilkan pilihan":"候補を見る",
      "Buat diskusi baru":"新しい質問を投稿","Judul pertanyaan":"質問のタイトル","Ceritakan lebih lengkap":"詳しく説明する",
      "Terbitkan diskusi demo":"質問を投稿（デモ）","Nama produk":"商品名","Simpan produk":"商品を保存",
      "Ganti foto profil":"プロフィール写真を変更","Pesanan saya":"注文履歴","Keluar dari akun":"ログアウト",
      "Tentang Valauera":"Valaueraについて","Dibuat oleh":"制作",
      "Belum ada yang cocok. Longgarkan filternya, atau jual tanamanmu sendiri.":"一致する商品がありません。条件を広げるか、植物を出品してください。",
      "tanaman ditemukan":"件の植物が見つかりました","Siap kirim":"発送可能","Stok habis":"在庫切れ",
      "Tanggapan":"回答","Diskusi komunitas":"コミュニティのディスカッション","Tutup":"閉じる","Kirim":"送信",
      "Lanjut isi produk ↗":"商品情報の入力へ ↗","Daftarkan benih atau bibit":"種・苗を出品",
      "Daftarkan perlengkapan":"園芸用品を出品","Daftarkan tanamanmu":"植物を出品",
      "Isi kemasan":"内容量","Satuan":"単位","Harga unik (Rp)":"価格（ルピア）","Stok":"在庫",
      "Cahaya di rumah":"部屋の明るさ","Selera gaya":"好みのスタイル","Tampilkan pilihan ↗":"候補を見る ↗",
      "YOUR GREEN SPACE":"あなたの緑の空間","THE LIVING COLLECTION":"植物コレクション",
      "STORY CIRCLE":"ストーリーサークル","FROM YOUR FRIENDS":"友達から","PLANT PEOPLE":"植物好きの仲間",
      "GROWER LEVEL":"メンバーランク","SMALL DAILY RITUALS":"毎日の小さな習慣"
    }
  };

  Object.assign(V14_LANGS.en, {
    "Ruang hidup, bernapas.":"A room to live and breathe.","Temukan tanaman yang cocok dengan ruang, ritme, dan kepribadianmu. Bukan cuma mempercantik sudut rumah — tapi menumbuhkan cerita kecil setiap hari.":"Find plants that fit your space, rhythm, and personality. Not just to decorate a corner, but to grow little stories every day.",
    "A little greener, a little more you":"A little greener, a little more you","kurasi tanaman":"curated plants","komunitas tumbuh":"growing community","panduan perawatan":"care guides",
    "Kurasi, bukan sekadar stok.":"Curated with care, not just stocked.","Tanaman dipilih berdasarkan karakter, kebutuhan, dan daya hidupnya.":"Plants are selected for their character, needs, and vitality.","Rawat dengan percaya diri.":"Care with confidence.","Setiap tanaman punya panduan awal agar kamu nggak mulai dari nol.":"Every plant comes with a starter guide, so you never start from zero.","Belanja dari plant people.":"Shop from plant people.","Temukan koleksi dari Valauera dan penjual komunitas.":"Discover collections from Valauera and community sellers.",
    "Cari lewat gaya":"Browse by personality","Pilih mood yang paling dekat dengan ruang dan gaya hidupmu.":"Choose the mood that best fits your space and lifestyle.","Jeda hari ini: baca kebutuhan tanamanmu.":"Today's pause: understand what your plants need.","Jangan menyiram hanya karena jadwal. Periksa media, amati cahaya yang benar-benar diterima, dan pastikan pot memiliki drainase. Tiga kebiasaan sederhana ini lebih berguna daripada mengikuti rutinitas yang sama untuk semua tanaman.":"Do not water just because the calendar says so. Check the soil, observe the light your plant actually receives, and make sure the pot drains well. These simple habits work better than one routine for every plant.",
    "Profil":"Profile","Mode":"Theme","Katalog bibit":"Seed catalogue","Sukulen & kaktus":"Succulents & cacti","Tanaman hias daun":"Foliage plants","Tanaman merambat":"Climbing plants","Koleksi khusus":"Special collections","Pupuk & nutrisi":"Fertilizers & nutrients","Media tanam":"Growing media","Pot & planter":"Pots & planters","Alat berkebun":"Gardening tools",
    "Nenek Sari":"Nenek Sari","Damar Pratama":"Damar Pratama","Mika Tan":"Mika Tan","Pak Hendra":"Pak Hendra","Alya Putri":"Alya Putri",
    "Aroid, repotting, dan berbagi pengalaman":"Aroids, repotting, and sharing experience","Merawat tanaman teras sejak lama. Percaya setiap daun baru punya cerita.":"Has cared for patio plants for years and believes every new leaf has a story.","Daun Monstera baru membuka pagi ini. Aku menunggu sampai daunnya mengeras sebelum mengubah posisi pot.":"A new Monstera leaf unfurled this morning. I will wait until it hardens before moving the pot.",
    "Koleksi aroid dan media porous":"Aroid collections and airy potting mixes","Suka membandingkan campuran media dan mencatat respons tanaman.":"Enjoys comparing potting mixes and recording how plants respond.","Mencoba campuran bark dan perlite baru untuk koleksi aroid.":"Trying a new bark and perlite mix for the aroid collection.",
    "Sukulen mini dan fotografi makro":"Mini succulents and macro photography","Meja kerja kecil dengan sukulen yang tumbuh perlahan.":"A small desk with slow-growing succulents.","Haworthia mengeluarkan anakan kecil. Proses pelan juga tetap kemajuan.":"The Haworthia has a tiny offset. Slow progress is still progress.",
    "Anggrek, kompos, dan kebun balkon":"Orchids, compost, and balcony gardening","Berbagi cara membaca akar dan menjaga sirkulasi udara.":"Shares tips on reading root health and maintaining airflow.","Akar anggrek tampak hijau setelah penyiraman pagi. Jangan lupa sirkulasi udara.":"The orchid roots look green after this morning's watering. Remember good airflow.",
    "Urban jungle, stek air, dan tanaman pemula":"Urban jungles, water propagation, and beginner plants","Mengubah sudut kos jadi tempat istirahat kecil yang penuh hijau.":"Turning a small rental-room corner into a green resting place.","Stek sirih gading pertamaku mulai menumbuhkan akar. Senang banget!":"My first pothos cutting is growing roots. So exciting!",
    "TANYA JAWAB · MONSTERA":"Q&A · MONSTERA","TANYA JAWAB · CAHAYA":"Q&A · LIGHT","INSPIRASI · RUANG HIJAU":"INSPIRATION · GREEN SPACE",
    "Monstera saya keluar daun baru. Kapan waktu yang pas pindah pot?":"My Monstera has a new leaf. When is the right time to repot?","Tanaman apa yang cocok untuk balkon dengan matahari pagi?":"Which plants suit a balcony with morning sun?","Sudut hijau sederhana yang bikin rumah terasa lebih hidup":"A simple green corner that makes a home feel alive",
    "Selamat sore, teman-teman. Monstera di teras saya baru mengeluarkan satu daun baru. Potnya sudah hampir dua tahun. Apa sebaiknya langsung saya pindahkan, atau tunggu dulu? Saya takut malah mengganggu pertumbuhannya. Terima kasih sebelumnya.":"Good afternoon, everyone. My patio Monstera has just produced a new leaf. It has been in the same pot for almost two years. Should I repot it now, or wait? I am afraid of disturbing its growth. Thank you in advance.",
    "Balkon saya mendapat matahari pagi beberapa jam lalu terang tidak langsung. Saya ingin mulai dari tanaman yang relatif mudah dirawat. Pengalaman teman-teman apa?":"My balcony gets a few hours of morning sun, followed by bright indirect light. I want to start with relatively easy-care plants. What has worked for you?",
    "Tidak perlu memenuhi rumah dengan pot. Satu rak dekat jendela, beberapa tanaman dengan kebutuhan cahaya serupa, dan ruang untuk bergerak sudah bisa jadi awal.":"You do not need to fill your home with pots. One shelf near a window, a few plants with similar light needs, and room to move are enough to begin.",
    "Coba cek bagian bawah pot dulu, Nek. Kalau akarnya sudah melingkar padat dan air cepat sekali keluar, itu bisa jadi salah satu tanda perlu pot lebih besar.":"Check the bottom of the pot first. If roots are tightly circling and water runs through very quickly, those may be signs that a larger pot is needed.",
    "Jangan buru-buru dipindah saat baru keluar daun. Tunggu daunnya mulai mengeras agar tanaman tidak stres bersamaan.":"Do not rush to repot just as a new leaf appears. Wait until the leaf begins to harden so the plant is not stressed by two changes at once.",
    "Saya biasa cek lubang drainase dan akar. Ukuran pot naik sedikit saja, jangan langsung terlalu besar.":"I usually check the drainage holes and roots. Move up only one pot size; do not choose a pot that is much larger.",
    "Media porous membantu. Saya pakai campuran media yang sesuai jenis tanaman, bukan tanah kebun padat.":"An airy mix helps. I use a potting mix suited to the plant rather than dense garden soil.",
    "Kalau masih ada ruang untuk akar dan tanaman tetap stabil, belum tentu harus repotting sekarang.":"If the roots still have room and the plant is stable, repotting may not be necessary yet.",
    "Pastikan pot baru punya lubang bawah ya, Nek. Air yang menggenang bisa bikin akar kekurangan udara.":"Make sure the new pot has drainage holes. Standing water can deprive roots of oxygen.",
    "Saya setuju tunggu daun baru matang dulu. Pengalaman saya, tanaman lebih mudah beradaptasi.":"I agree with waiting for the new leaf to mature. In my experience, plants adapt more easily that way.",
    "Cek apakah akar keluar dari lubang bawah. Tapi satu tanda saja belum cukup untuk memutuskan.":"Check whether roots are emerging from the drainage holes. One sign alone is not enough to decide.",
    "Jangan merusak bola akar kalau tidak perlu. Pindahkan dengan hati-hati dan isi sisi pot dengan media baru.":"Avoid disturbing the root ball unless necessary. Move it carefully and fill the sides with fresh potting mix.",
    "Setelah repotting, taruh di tempat bercahaya tidak langsung dulu dan pantau kondisinya.":"After repotting, place it in bright indirect light and monitor its condition.",
    "Kalau media lama sudah padat atau susah menyerap air, itu juga alasan untuk mengecek kondisi akar.":"If the old mix has become compacted or no longer absorbs water well, inspect the roots too.",
    "Pot baru cukup sedikit lebih lebar dari pot lama. Pot terlalu besar bisa membuat media lama kering lebih lambat.":"The new pot should be only slightly wider than the old one. An oversized pot can make the mix dry more slowly.",
    "Saya umur 63 masih belajar juga, Nek. Kuncinya pelan-pelan dan jangan terlalu sering mengutak-atik akar.":"I am 63 and still learning too. The key is to go slowly and avoid disturbing the roots too often.",
    "Kalau tanaman sehat dan tumbuh normal, repotting tidak harus dilakukan hanya karena sudah setahun.":"If the plant is healthy and growing normally, it does not need repotting just because a year has passed.",
    "Boleh foto akar dan pangkal batangnya supaya anggota lain bisa bantu lihat kondisinya.":"You could share a photo of the roots and stem base so other members can help assess them.",
    "Siram sesuai kondisi media setelah pindah, jangan otomatis menambah air banyak-banyak.":"Water according to the condition of the potting mix after moving; do not automatically add a large amount.",
    "Bersihkan pot lama dan siapkan media sebelum mulai supaya akar tidak terlalu lama terbuka.":"Clean the old pot and prepare the mix beforehand so the roots are not exposed for too long.",
    "Kalau ada akar busuk atau berbau, potong bagian yang rusak dengan alat bersih. Kalau tidak, minimalkan gangguan.":"If any roots are rotten or smell bad, trim the damaged parts with a clean tool. Otherwise, minimize disturbance.",
    "Terima kasih sudah bertanya, Nek. Pertanyaan sederhana begini sering membantu anggota lain juga.":"Thank you for asking. Simple questions like this often help other members too.",
    "Kalau masih ragu, foto kondisi akar dan media dulu. Anggota lain bisa bantu memberi masukan sebelum diputuskan repotting.":"If you are unsure, share photos of the roots and potting mix first. Members can offer ideas before you decide to repot.",
    "Amati berapa lama matahari langsung masuk dan seberapa panas balkon saat siang.":"Observe how long direct sunlight reaches the balcony and how hot it gets at midday.",
    "Sirih gading bisa dicoba di tempat terang tidak langsung, tetapi sesuaikan dengan kondisi balkon.":"Pothos can be tried in bright indirect light, but adjust to the actual balcony conditions.",
    "Jangan lupa angin dan hujan juga memengaruhi media cepat kering.":"Remember that wind and rain also affect how quickly the potting mix dries.",
    "Terima kasih, aku akan amati dulu intensitasnya.":"Thanks, I will observe the light intensity first.",
    "Aku mulai dari satu tanaman di meja makan. Sekarang jadi rutinitas kecil yang menyenangkan.":"I started with one plant on the dining table. It has become a lovely little routine.",
    "Kelompokkan tanaman dengan kebutuhan cahaya mirip agar perawatannya lebih mudah.":"Group plants with similar light needs to make care easier.",
    "Setuju. Mulai dari ruang yang memang punya kondisi cocok, bukan sekadar sudut kosong.":"Agreed. Start with a space that already has suitable conditions, not just an empty corner."
  });
  Object.assign(V14_LANGS.ja, {
    "Ruang hidup, bernapas.":"暮らしに、深呼吸を。","Temukan tanaman yang cocok dengan ruang, ritme, dan kepribadianmu. Bukan cuma mempercantik sudut rumah — tapi menumbuhkan cerita kecil setiap hari.":"部屋や暮らしのリズム、あなたらしさに合う植物を見つけましょう。空間を飾るだけでなく、毎日に小さな物語を育てます。",
    "A little greener, a little more you":"少し緑を、もっと自分らしく","kurasi tanaman":"厳選した植物","komunitas tumbuh":"育つコミュニティ","panduan perawatan":"お手入れガイド",
    "Kurasi, bukan sekadar stok.":"ただ在庫を並べるのではなく、丁寧に選ぶ。","Tanaman dipilih berdasarkan karakter, kebutuhan, dan daya hidupnya.":"植物の個性、必要な環境、育ちやすさを考えて選びます。","Rawat dengan percaya diri.":"自信を持って育てよう。","Setiap tanaman punya panduan awal agar kamu nggak mulai dari nol.":"それぞれの植物に育て方のガイドがあり、ゼロから迷うことはありません。","Belanja dari plant people.":"植物を愛する人から買おう。","Temukan koleksi dari Valauera dan penjual komunitas.":"Valaueraやコミュニティの出品者によるコレクションを見つけましょう。",
    "Cari lewat gaya":"好みから探す","Pilih mood yang paling dekat dengan ruang dan gaya hidupmu.":"部屋やライフスタイルに合う雰囲気を選びましょう。","Jeda hari ini: baca kebutuhan tanamanmu.":"今日のひと休み：植物の必要な環境を知ろう。","Jangan menyiram hanya karena jadwal. Periksa media, amati cahaya yang benar-benar diterima, dan pastikan pot memiliki drainase. Tiga kebiasaan sederhana ini lebih berguna daripada mengikuti rutinitas yang sama untuk semua tanaman.":"予定だけを理由に水をあげないでください。土の状態、実際に届く光、鉢の排水を確認しましょう。同じ水やりをすべての植物に当てはめるより、この3つを確かめることが大切です。",
    "Profil":"プロフィール","Mode":"表示設定","Katalog bibit":"種・苗のカタログ","Sukulen & kaktus":"多肉植物・サボテン","Tanaman hias daun":"観葉植物","Tanaman merambat":"つる性植物","Koleksi khusus":"特別なコレクション","Pupuk & nutrisi":"肥料・栄養剤","Media tanam":"培養土","Pot & planter":"鉢・プランター","Alat berkebun":"園芸用品",
    "Nenek Sari":"サリさん","Damar Pratama":"ダマル","Mika Tan":"ミカ","Pak Hendra":"ヘンドラさん","Alya Putri":"アリヤ",
    "Aroid, repotting, dan berbagi pengalaman":"アロイド、植え替え、経験の共有","Merawat tanaman teras sejak lama. Percaya setiap daun baru punya cerita.":"長年テラスの植物を育てています。新しい葉にはそれぞれ物語があると信じています。","Daun Monstera baru membuka pagi ini. Aku menunggu sampai daunnya mengeras sebelum mengubah posisi pot.":"今朝モンステラの新しい葉が開きました。葉が硬くなるまで鉢の場所を変えずに待ちます。",
    "Koleksi aroid dan media porous":"アロイドのコレクションと通気性のよい用土","Suka membandingkan campuran media dan mencatat respons tanaman.":"用土の配合を比べ、植物の反応を記録するのが好きです。","Mencoba campuran bark dan perlite baru untuk koleksi aroid.":"アロイド用にバークとパーライトの新しい配合を試しています。",
    "Sukulen mini dan fotografi makro":"小さな多肉植物とマクロ写真","Meja kerja kecil dengan sukulen yang tumbuh perlahan.":"ゆっくり育つ多肉植物を小さなデスクで育てています。","Haworthia mengeluarkan anakan kecil. Proses pelan juga tetap kemajuan.":"ハオルチアに小さな子株ができました。ゆっくりでも前進です。",
    "Anggrek, kompos, dan kebun balkon":"ラン、堆肥、バルコニー菜園","Berbagi cara membaca akar dan menjaga sirkulasi udara.":"根の状態の見方や風通しを保つ方法を共有しています。","Akar anggrek tampak hijau setelah penyiraman pagi. Jangan lupa sirkulasi udara.":"朝の水やり後、ランの根が緑色に見えます。風通しも忘れずに。",
    "Urban jungle, stek air, dan tanaman pemula":"アーバンジャングル、水挿し、初心者向け植物","Mengubah sudut kos jadi tempat istirahat kecil yang penuh hijau.":"小さな部屋の一角を、緑に囲まれた休息スペースに変えています。","Stek sirih gading pertamaku mulai menumbuhkan akar. Senang banget!":"初めてのポトスの挿し穂に根が出てきました。とてもうれしいです！",
    "TANYA JAWAB · MONSTERA":"Q&A · モンステラ","TANYA JAWAB · CAHAYA":"Q&A · 光","INSPIRASI · RUANG HIJAU":"インスピレーション · 緑の空間",
    "Monstera saya keluar daun baru. Kapan waktu yang pas pindah pot?":"モンステラに新しい葉が出ました。植え替えはいつがよいですか？","Tanaman apa yang cocok untuk balkon dengan matahari pagi?":"朝日が当たるバルコニーに合う植物は？","Sudut hijau sederhana yang bikin rumah terasa lebih hidup":"家を生き生きさせるシンプルなグリーンコーナー",
    "Selamat sore, teman-teman. Monstera di teras saya baru mengeluarkan satu daun baru. Potnya sudah hampir dua tahun. Apa sebaiknya langsung saya pindahkan, atau tunggu dulu? Saya takut malah mengganggu pertumbuhannya. Terima kasih sebelumnya.":"皆さん、こんにちは。テラスのモンステラに新しい葉が出ました。同じ鉢で約2年育てています。すぐ植え替えるべきか、もう少し待つべきか迷っています。成長を妨げてしまわないか心配です。よろしくお願いします。",
    "Balkon saya mendapat matahari pagi beberapa jam lalu terang tidak langsung. Saya ingin mulai dari tanaman yang relatif mudah dirawat. Pengalaman teman-teman apa?":"私のバルコニーには数時間朝日が当たり、その後は明るい間接光になります。比較的育てやすい植物から始めたいです。おすすめや経験を教えてください。",
    "Tidak perlu memenuhi rumah dengan pot. Satu rak dekat jendela, beberapa tanaman dengan kebutuhan cahaya serupa, dan ruang untuk bergerak sudah bisa jadi awal.":"家中を鉢で埋める必要はありません。窓際の棚と、似た光を好む数種類の植物、動けるスペースがあれば十分です。",
    "Coba cek bagian bawah pot dulu, Nek. Kalau akarnya sudah melingkar padat dan air cepat sekali keluar, itu bisa jadi salah satu tanda perlu pot lebih besar.":"まず鉢の底を確認してみてください。根がぎっしり回り、水がすぐに抜けるなら、一回り大きな鉢が必要なサインかもしれません。",
    "Jangan buru-buru dipindah saat baru keluar daun. Tunggu daunnya mulai mengeras agar tanaman tidak stres bersamaan.":"新しい葉が出たばかりのときは急いで植え替えないでください。葉が少し硬くなるまで待つと、植物への負担を重ねずにすみます。",
    "Saya biasa cek lubang drainase dan akar. Ukuran pot naik sedikit saja, jangan langsung terlalu besar.":"私は排水穴と根を確認します。鉢は一回りだけ大きくし、急に大きすぎるものを選ばないようにしています。",
    "Media porous membantu. Saya pakai campuran media yang sesuai jenis tanaman, bukan tanah kebun padat.":"通気性のよい用土が役立ちます。固い庭土ではなく、植物の種類に合った配合を使っています。",
    "Kalau masih ada ruang untuk akar dan tanaman tetap stabil, belum tentu harus repotting sekarang.":"根にまだ余裕があり、株も安定しているなら、今すぐ植え替える必要はないかもしれません。",
    "Pastikan pot baru punya lubang bawah ya, Nek. Air yang menggenang bisa bikin akar kekurangan udara.":"新しい鉢に排水穴があることを確認してください。水がたまると根が酸素不足になることがあります。",
    "Saya setuju tunggu daun baru matang dulu. Pengalaman saya, tanaman lebih mudah beradaptasi.":"新しい葉が成熟するまで待つことに賛成です。私の経験では、そのほうが植物も順応しやすいです。",
    "Cek apakah akar keluar dari lubang bawah. Tapi satu tanda saja belum cukup untuk memutuskan.":"底の穴から根が出ているか確認しましょう。ただし、一つのサインだけで決めるのは不十分です。",
    "Jangan merusak bola akar kalau tidak perlu. Pindahkan dengan hati-hati dan isi sisi pot dengan media baru.":"必要がなければ根鉢を崩さないでください。慎重に移し、鉢の側面に新しい用土を足します。",
    "Setelah repotting, taruh di tempat bercahaya tidak langsung dulu dan pantau kondisinya.":"植え替え後は明るい間接光の場所に置き、状態を観察してください。",
    "Kalau media lama sudah padat atau susah menyerap air, itu juga alasan untuk mengecek kondisi akar.":"古い用土が固まっていたり、水を吸いにくくなっていたりする場合も、根を確認する理由になります。",
    "Pot baru cukup sedikit lebih lebar dari pot lama. Pot terlalu besar bisa membuat media lama kering lebih lambat.":"新しい鉢は古い鉢より少し幅が広い程度で十分です。大きすぎる鉢では用土が乾くまで時間がかかります。",
    "Saya umur 63 masih belajar juga, Nek. Kuncinya pelan-pelan dan jangan terlalu sering mengutak-atik akar.":"私も63歳ですが、まだ勉強中です。大切なのは焦らず、根を何度も触らないことです。",
    "Kalau tanaman sehat dan tumbuh normal, repotting tidak harus dilakukan hanya karena sudah setahun.":"植物が健康で順調に育っているなら、1年経ったという理由だけで植え替える必要はありません。",
    "Boleh foto akar dan pangkal batangnya supaya anggota lain bisa bantu lihat kondisinya.":"根と茎の付け根の写真を共有すれば、ほかのメンバーも状態を確認できます。",
    "Siram sesuai kondisi media setelah pindah, jangan otomatis menambah air banyak-banyak.":"植え替え後は用土の状態に合わせて水をあげてください。自動的に大量の水を加えないようにしましょう。",
    "Bersihkan pot lama dan siapkan media sebelum mulai supaya akar tidak terlalu lama terbuka.":"根が長時間むき出しにならないよう、始める前に古い鉢を洗い、新しい用土を準備しましょう。",
    "Kalau ada akar busuk atau berbau, potong bagian yang rusak dengan alat bersih. Kalau tidak, minimalkan gangguan.":"腐った根や臭いのある根があれば、清潔な道具で傷んだ部分を切り取ります。それ以外は触りすぎないようにします。",
    "Terima kasih sudah bertanya, Nek. Pertanyaan sederhana begini sering membantu anggota lain juga.":"質問してくださってありがとうございます。こうした素朴な疑問は、ほかのメンバーにも役立ちます。",
    "Kalau masih ragu, foto kondisi akar dan media dulu. Anggota lain bisa bantu memberi masukan sebelum diputuskan repotting.":"迷う場合は、まず根と用土の状態を撮影してください。植え替えを決める前に、メンバーから意見をもらえます。",
    "Amati berapa lama matahari langsung masuk dan seberapa panas balkon saat siang.":"直射日光が当たる時間と、昼間のバルコニーの暑さを観察してみてください。",
    "Sirih gading bisa dicoba di tempat terang tidak langsung, tetapi sesuaikan dengan kondisi balkon.":"ポトスは明るい間接光の場所で試せますが、実際のバルコニーの環境に合わせてください。",
    "Jangan lupa angin dan hujan juga memengaruhi media cepat kering.":"風や雨も用土の乾く速さに影響することを忘れないでください。",
    "Terima kasih, aku akan amati dulu intensitasnya.":"ありがとう。まず光の強さを観察してみます。",
    "Aku mulai dari satu tanaman di meja makan. Sekarang jadi rutinitas kecil yang menyenangkan.":"ダイニングテーブルに一鉢置くことから始めました。今では楽しい小さな習慣です。",
    "Kelompokkan tanaman dengan kebutuhan cahaya mirip agar perawatannya lebih mudah.":"光の条件が似ている植物をまとめると、お手入れが簡単になります。",
    "Setuju. Mulai dari ruang yang memang punya kondisi cocok, bukan sekadar sudut kosong.":"そうですね。空いている場所ではなく、植物に合った環境の場所から始めましょう。"
  });

  Object.assign(V14_LANGS.en, {
    "Oleh":"By","Anggota komunitas":"Community member","Plant people":"Plant people","Tanggapan":"Answers","Diskusi komunitas":"Community discussion",
    "Ikut membantu percakapan":"Join the conversation","Simpan produk":"Save product","Profil dan akun saya":"My profile","Bahasa":"Language",
    "Pilih minimal satu jenis produk":"Choose at least one product type","Masukkan alamat Gmail yang valid":"Enter a valid Gmail address","Tulis tanggapan terlebih dahulu":"Write an answer first",
    "Tulis pengalaman atau saran yang sopan...":"Share a helpful experience or suggestion...","Masuk untuk ikut menjawab":"Sign in to answer",
    "Cerita tersimpan di prototipe lokal":"Story saved in this local prototype","Foto profil diperbarui":"Profile photo updated","Tutup story":"Close story",
    "Periksa kelembapan media sebelum menyiram":"Check soil moisture before watering","Siram tanaman yang memang membutuhkan air hari ini":"Water plants that actually need it today",
    "Amati satu daun atau batang baru":"Observe one new leaf or stem","Bersihkan satu daun dari debu dengan lembut":"Gently clean dust from one leaf","Catat perkembangan tanamanmu":"Record your plant’s progress"
  });
  Object.assign(V14_LANGS.ja, {
    "Oleh":"投稿者：","Anggota komunitas":"コミュニティメンバー","Plant people":"植物を愛する人","Tanggapan":"回答","Diskusi komunitas":"コミュニティのディスカッション",
    "Ikut membantu percakapan":"会話に参加する","Simpan produk":"商品を保存","Profil dan akun saya":"マイプロフィール","Bahasa":"言語",
    "Pilih minimal satu jenis produk":"商品タイプを1つ以上選択してください","Masukkan alamat Gmail yang valid":"有効なGmailアドレスを入力してください","Tulis tanggapan terlebih dahulu":"先に回答を入力してください",
    "Tulis pengalaman atau saran yang sopan...":"経験や丁寧なアドバイスを入力してください...","Masuk untuk ikut menjawab":"ログインして回答する",
    "Cerita tersimpan di prototipe lokal":"ストーリーをローカルのプロトタイプに保存しました","Foto profil diperbarui":"プロフィール写真を更新しました","Tutup story":"ストーリーを閉じる"
  });

  Object.assign(V14_LANGS.en, {
    "Valauera society · plant people, real stories":"Valauera society · plant people, real stories",
    "Bukan cuma punya tanaman. Punya dunia di sekitarnya.":"More than owning plants. Discover the world around them.",
    "Tempat bertukar pengalaman, belajar dari kolektor lain, menemukan tanaman lokal, dan merayakan proses tumbuh. Dari pemilik satu pot pertama sampai kolektor yang sudah bertahun-tahun berkebun.":"A place to exchange experience, learn from collectors, discover local plants, and celebrate growth — from first-time plant owners to long-time gardeners.",
    "Jelajahi komunitas":"Explore the community","Bagikan cerita":"Share a story","OUR COMMON GROUND":"OUR COMMON GROUND",
    "Ruang yang terbuka untuk rasa ingin tahu, pengalaman, dan kecintaan pada alam.":"A welcoming space for curiosity, experience, and a love of nature.",
    "Bukan cuma punya tanaman. Punya dunia di sekitarnya.":"More than owning plants. Discover the world around them.",
    "Tempat bertanya, berbagi pengalaman, dan belajar dari sesama pecinta tanaman.":"A place to ask, share experience, and learn from fellow plant lovers.",
    "Temukan koleksi, minat, dan tanaman yang sedang dirawat temanmu.":"Explore friends’ collections, interests, and the plants they care for.",
    "Lihat koleksi, minat, dan tanaman yang sedang dirawat temanmu.":"View collections, interests, and the plants your friends are caring for.",
    "Kontribusi membantu memberi EXP dan membuka gelar komunitas.":"Helpful contributions earn EXP and unlock community titles.",
    "Mulai dari satu pot pertama sampai koleksi yang sudah bertahun-tahun berkebun.":"From a first plant pot to a collection built over years.",
    "Pengetahuan yang bisa dipraktikkan.":"Knowledge you can put into practice.",
    "Obrolan yang sedang tumbuh.":"Conversations in bloom.","Tumbuh bersama komunitas.":"Grow with the community.",
    "Ruang untuk bertanya, berbagi pengalaman, dan belajar dari sesama pecinta tanaman.":"A place to ask questions, share experience, and learn from fellow plant lovers.",
    "Plant enthusiast":"Plant enthusiast","Penghobi tanaman rumahan · 67 tahun":"Home gardener · 67 years old"
  });
  Object.assign(V14_LANGS.ja, {
    "Valauera society · plant people, real stories":"Valaueraのコミュニティ · 植物を愛する人たちの物語",
    "Bukan cuma punya tanaman. Punya dunia di sekitarnya.":"植物を持つだけではなく、その周りの世界も楽しもう。",
    "Tempat bertukar pengalaman, belajar dari kolektor lain, menemukan tanaman lokal, dan merayakan proses tumbuh. Dari pemilik satu pot pertama sampai kolektor yang sudah bertahun-tahun berkebun.":"経験を交換し、コレクターから学び、身近な植物を見つけ、成長を楽しむ場所です。初めて一鉢を育てる人から長年の愛好家まで歓迎します。",
    "Jelajahi komunitas":"コミュニティを見る","Bagikan cerita":"ストーリーを共有","OUR COMMON GROUND":"みんなが集う場所",
    "Ruang yang terbuka untuk rasa ingin tahu, pengalaman, dan kecintaan pada alam.":"好奇心や経験、自然への愛情を分かち合うオープンな場所です。",
    "Tempat bertanya, berbagi pengalaman, dan belajar dari sesama pecinta tanaman.":"質問し、経験を共有し、植物好きの仲間から学べる場所です。",
    "Temukan koleksi, minat, dan tanaman yang sedang dirawat temanmu.":"友達のコレクションや興味、育てている植物を見てみましょう。",
    "Lihat koleksi, minat, dan tanaman yang sedang dirawat temanmu.":"友達のコレクションや興味、育てている植物を見てみましょう。",
    "Kontribusi membantu memberi EXP dan membuka gelar komunitas.":"役立つ投稿で経験値を獲得し、コミュニティの称号を開放できます。",
    "Pengetahuan yang bisa dipraktikkan.":"実践できる知識。","Obrolan yang sedang tumbuh.":"育っていく会話。","Tumbuh bersama komunitas.":"コミュニティと一緒に育とう。",
    "Tempat bertanya, berbagi pengalaman, dan belajar dari sesama pecinta tanaman.":"質問し、経験を共有し、植物好きの仲間から学べる場所です。",
    "Plant enthusiast":"植物愛好家","Penghobi tanaman rumahan · 67 tahun":"家庭菜園の愛好家 · 67歳"
  });

  let activeLang = localStorage.getItem('vlang') || 'id';
  function cacheBase(root){
    const w=document.createTreeWalker(root,NodeFilter.SHOW_TEXT);
    while(w.nextNode()){
      const n=w.currentNode;
      if(n.__v14Base===undefined) n.__v14Base = n.__baseText!==undefined ? n.__baseText : n.nodeValue;
    }
  }
  function applyLocale(root=document.body){
    const dict=V14_LANGS[activeLang]||{};
    const w=document.createTreeWalker(root,NodeFilter.SHOW_TEXT);
    while(w.nextNode()){
      const n=w.currentNode;
      if(n.__v14Base===undefined) n.__v14Base=n.__baseText!==undefined?n.__baseText:n.nodeValue;
      const base=String(n.__v14Base||"");
      const trimmed=base.trim();
      if(!trimmed) continue;
      const translated=dict[trimmed];
      const start=base.indexOf(trimmed),end=start+trimmed.length;
      const next=translated?base.slice(0,start)+translated+base.slice(end):base;
      if(n.nodeValue!==next)n.nodeValue=next;
    }
    const attrs=['placeholder','aria-label','title'];
    root.querySelectorAll?.('*').forEach(el=>{
      attrs.forEach(attr=>{
        const val=el.getAttribute(attr);
        if(!val)return;
        const key='__v14_'+attr;
        if(el.dataset[key]===undefined)el.dataset[key]=val;
        const original=el.dataset[key];
        el.setAttribute(attr,dict[original]||original);
      });
    });
  }
  function syncLocale(lang){
    activeLang=['id','en','ja'].includes(lang)?lang:'id';
    if(activeLang!=='id'){
      applyLocale(document.body);
    }else{
      const w=document.createTreeWalker(document.body,NodeFilter.SHOW_TEXT);
      while(w.nextNode()){const n=w.currentNode;if(n.__v14Base!==undefined&&n.nodeValue!==n.__v14Base)n.nodeValue=n.__v14Base;}
      document.querySelectorAll('*').forEach(el=>['placeholder','aria-label','title'].forEach(attr=>{const base=el.dataset['__v14_'+attr];if(base!==undefined)el.setAttribute(attr,base);}));
    }
    document.documentElement.lang=activeLang;
  }
  const originalSetLanguage=setLanguage;
  setLanguage=function(lang){
    cacheBase(document.body);
    originalSetLanguage(lang);
    syncLocale(lang);
  };
  cacheBase(document.body);

  // Keep new content (dialogs, forum replies, profile panels) in the selected language.
  const localeObserver=new MutationObserver(records=>{
    records.forEach(rec=>rec.addedNodes.forEach(node=>{
      if(node.nodeType===1){cacheBase(node);applyLocale(node);}
      else if(node.nodeType===3){if(node.__v14Base===undefined)node.__v14Base=node.nodeValue;applyLocale(node.parentElement||document.body);}
    }));
  });
  localeObserver.observe(document.body,{childList:true,subtree:true});

  function seedPacketArt(x){
    const label=esc((x.n||'Benih hijau').slice(0,26));
    const latin=esc((x.lat||'Seeds').slice(0,34));
    const seedColor=['#D7E8C9','#F1DFB8','#D8E8ED','#E8D8E8'][Math.abs(x.i||0)%4];
    const shape=x.sh||'round';
    let leaf=shape==='cactus'
      ? '<path d="M102 112v-48m0 26q-22 0-22-20m22 31q22 0 22-20" fill="none" stroke="#1B7A4B" stroke-width="9" stroke-linecap="round"/>'
      : '<path d="M102 108q-34-37-7-56 31 16 7 56zm0 0q8-43 38-37-2 30-38 37z" fill="#1B7A4B"/><path d="M102 108v-45" stroke="#DCE8DD" stroke-width="3"/>';
    return `<svg class="seed-packet" viewBox="0 0 204 240" role="img" aria-label="${label}, seed packet illustration"><rect width="204" height="240" rx="12" fill="#E7F0E5"/><circle cx="160" cy="42" r="26" fill="#FFC21A"/><path d="M43 23h118l-8 194H51z" fill="#FCF8EB" stroke="#0D2B21" stroke-width="4"/><path d="M43 23h118v28H43z" fill="#0D2B21"/><text x="102" y="42" fill="#FFFFFF" text-anchor="middle" font-size="11" font-family="Arial" font-weight="700">VALAUERA SEEDS</text><rect x="60" y="68" width="84" height="80" rx="10" fill="${seedColor}"/>${leaf}<path d="M84 149q18-13 36 0" fill="none" stroke="#8A6A4B" stroke-width="3"/><text x="102" y="171" fill="#0D2B21" text-anchor="middle" font-size="10" font-family="Arial" font-weight="700">${label}</text><text x="102" y="187" fill="#4B6558" text-anchor="middle" font-size="7.5" font-family="Arial">${latin}</text><path d="M70 199h64" stroke="#FFC21A" stroke-width="5" stroke-linecap="round"/></svg>`;
  }
  function applySeedArtwork(){
    document.querySelectorAll('.card .tile.c[data-d]').forEach(tile=>{
      const item=find(tile.dataset.d);
      if(item&&item.c==='bibit'){
        const tag=tile.querySelector('.tag')?.outerHTML||'';
        tile.innerHTML=seedPacketArt(item)+tag;
      }
    });
    const seedCat=document.querySelector('#cats [data-c="bibit"] .tile');
    if(seedCat)seedCat.innerHTML=seedPacketArt({n:'Bibit & benih',lat:'Seeds and seedlings',sh:'round',i:4});
  }
  const baseRender=render;
  render=function(){baseRender();applySeedArtwork();};

  function addSeedEntry(){
    const section=document.querySelector('#koleksi');
    if(!section||document.querySelector('#v14SeedEntry'))return;
    const entry=document.createElement('div');
    entry.id='v14SeedEntry';entry.className='v14-seed-entry';
    entry.innerHTML=`<div><b>🌱 <span data-v14-label="seed-title">Mulai dari benih, tumbuhkan sendiri.</span></b><p data-v14-label="seed-copy">Pilih benih, stek, atau bibit muda. Setiap produk menampilkan gambar kemasan, isi, dan harga.</p></div><button class="btn" id="v14SeedJump">Lihat semua bibit</button>`;
    const head=section.querySelector('.hd');
    if(head)head.insertAdjacentElement('afterend',entry);else section.prepend(entry);
    document.querySelector('#v14SeedJump').addEventListener('click',()=>{
      routeTo('plants');F.c='bibit';F.q='';$('#fc').value='bibit';render();
      section.scrollIntoView({behavior:'smooth',block:'start'});
    });
  }

  function installCommunityShortcuts(){
    const hub=document.querySelector('.community-hub');
    if(!hub||document.querySelector('#v14CommunityShortcuts'))return;
    const tabs=hub.querySelector('.community-tabs');
    const shortcuts=document.createElement('div');
    shortcuts.id='v14CommunityShortcuts';shortcuts.className='community-shortcuts';
    shortcuts.innerHTML=`
      <button class="community-shortcut active" type="button" data-community-tab="stories"><span class="shortcut-icon">◎</span><b>Cerita foto & video</b><small>Lihat dan bagikan perkembangan tanaman</small></button>
      <button class="community-shortcut" type="button" data-community-tab="friends"><span class="shortcut-icon">♧</span><b>Profil teman</b><small>Bio, koleksi foto, pengikut, dan mengikuti</small></button>
      <button class="community-shortcut" type="button" data-community-tab="questions"><span class="shortcut-icon">↗</span><b>Forum & jawaban</b><small>Baca pertanyaan dan cuplikan jawaban</small></button>
      <button class="community-shortcut" type="button" data-community-tab="quests"><span class="shortcut-icon">✓</span><b>Quest harian</b><small>Kebiasaan kecil dan poin pengalaman</small></button>`;
    if(tabs)tabs.insertAdjacentElement('afterend',shortcuts);else hub.prepend(shortcuts);
    const hint=document.createElement('p');
    hint.className='v14-community-hint';
    hint.textContent='Pilih salah satu ruang di atas. Setiap bagian memiliki isi dan tombol tindakan yang terlihat.';
    shortcuts.insertAdjacentElement('afterend',hint);
  }
  function setCommunityTab(name){
    document.querySelectorAll('[data-community-tab]').forEach(el=>el.classList.toggle('active',el.dataset.communityTab===name));
    document.querySelectorAll('[data-community-pane]').forEach(el=>el.hidden=el.dataset.communityPane!==name);
  }
  document.addEventListener('click',e=>{
    const tab=e.target.closest('[data-community-tab]');
    if(tab){
      setCommunityTab(tab.dataset.communityTab);
    }
  });

  const friendPlantShapes=['round','trail','cactus','blade','trail'];
  function openFriendProfile(id){
    const i=demoFriends.findIndex(f=>f.id===id);
    if(i<0)return;
    const f=demoFriends[i],following=ld('vfriends',[]),isFollowing=following.includes(id);
    const followerCount=(f.followers||[128,92,176,241,67][i])+(isFollowing?1:0);
    const followingCount=f.following||[52,74,31,88,19][i];
    const gallery=[0,1,2].map((n)=>`<figure><div>${art(friendPlantShapes[i],i+n+2)}</div><figcaption>Foto koleksi ${n+1} · ${f.plant}</figcaption></figure>`).join('');
    openM(`<div class="v14-profile-top"><div class="v14-friend-avatar">${portrait(i)}</div><div><p class="eyebrow">VALAUERA PLANT PEOPLE</p><h2 style="margin:0">${esc(f.name)}</h2><p class="m">${esc(f.level)} · ${f.xp} EXP</p></div></div>
      <div class="v14-profile-stats"><div><b>${followerCount}</b><span>Pengikut</span></div><div><b>${followingCount}</b><span>Mengikuti</span></div><div><b>3</b><span>Foto koleksi</span></div></div>
      <section class="v14-story-card"><b>Bio</b><p style="margin:7px 0 0">${esc(f.bio)}</p></section>
      <div class="rv"><b>Tanaman utama</b><p>${esc(f.plant)}</p><b>Minat tanaman</b><p>${esc(f.hobby)}</p><b>Aktivitas terbaru</b><p>${esc(f.story)}</p></div>
      <h3 style="margin:18px 0 7px">Foto unggahan</h3><div class="v14-gallery">${gallery}</div>
      <div class="v14-friend-actions"><button class="btn ${isFollowing?'g':''}" data-profile-follow="${id}">${isFollowing?'Mengikuti':'Tambah teman'}</button><button class="btn g" data-story="${i}">Lihat story</button></div>`,true);
  }

  function showStoryMedia(story){
    if(!story||!story.media)return '';
    if(story.mediaType==='video')return `<video class="v14-story-media" controls playsinline src="${story.media}"></video>`;
    return `<img class="v14-story-media" src="${story.media}" alt="Foto story tanaman">`;
  }
  function openStoryComposer(){
    if(!S.user){auth('login');return;}
    openM(`<p class="eyebrow">STORY CIRCLE</p><h2>Buat story</h2><p class="m">Tambahkan cerita singkat, foto, atau video tanamanmu.</p>
      <form id="v14StoryForm">
        <div class="fd"><label for="v14StoryText">Apa yang sedang tumbuh hari ini?</label><textarea id="v14StoryText" rows="3" maxlength="240" placeholder="Ceritakan tanamanmu..."></textarea></div>
        <div class="fd"><label for="v14StoryMedia">Foto atau video (opsional)</label><input id="v14StoryMedia" type="file" accept="image/*,video/*"><p class="m">Foto maksimal 5 MB sebelum diproses. Video maksimal 900 KB untuk penyimpanan lokal.</p><div id="v14StoryPreview" class="v14-story-preview">Pratinjau media akan muncul di sini</div></div>
        <button class="btn w" type="submit">Bagikan story</button>
      </form><p class="v14-story-addline">Story akan hilang setelah 24 jam. Media dan teks tersimpan di browser perangkat ini.</p>`,true);
  }
  function readDataURL(file){
    return new Promise((resolve,reject)=>{
      const reader=new FileReader();
      reader.onload=()=>resolve(reader.result);
      reader.onerror=()=>reject(new Error('File tidak dapat dibaca'));
      reader.readAsDataURL(file);
    });
  }
  async function prepareStoryMedia(file){
    if(!file)return null;
    if(file.type.startsWith('video/')){
      if(file.size>900*1024)throw new Error('Video maksimal 900 KB untuk penyimpanan lokal.');
      return {media:await readDataURL(file),mediaType:'video'};
    }
    if(!file.type.startsWith('image/'))throw new Error('Pilih file foto atau video.');
    if(file.size>5*1024*1024)throw new Error('Foto maksimal 5 MB.');
    const raw=await readDataURL(file);
    try{
      const img=new Image();
      const loaded=new Promise((resolve,reject)=>{img.onload=resolve;img.onerror=reject;});
      img.src=raw;await loaded;
      const scale=Math.min(1,1200/Math.max(img.naturalWidth,img.naturalHeight));
      const canvas=document.createElement('canvas');
      canvas.width=Math.max(1,Math.round(img.naturalWidth*scale));
      canvas.height=Math.max(1,Math.round(img.naturalHeight*scale));
      canvas.getContext('2d').drawImage(img,0,0,canvas.width,canvas.height);
      return {media:canvas.toDataURL('image/jpeg',0.78),mediaType:'image'};
    }catch(_){return {media:raw,mediaType:'image'};}
  }
  document.addEventListener('change',e=>{
    if(e.target.id==='v14StoryMedia'){
      const file=e.target.files?.[0],preview=document.querySelector('#v14StoryPreview');
      if(!preview)return;
      if(!file){preview.textContent='Pratinjau media akan muncul di sini';return;}
      if(file.type.startsWith('video/')){
        const u=URL.createObjectURL(file);
        preview.innerHTML=`<video controls playsinline src="${u}" style="max-width:100%;max-height:210px;border-radius:10px"></video>`;
      }else{
        const u=URL.createObjectURL(file);
        preview.innerHTML=`<img src="${u}" alt="Pratinjau foto" style="max-width:100%;max-height:210px;border-radius:10px">`;
      }
    }
  });
  document.addEventListener('submit',async e=>{
    if(e.target.id!=='v14StoryForm')return;
    e.preventDefault();e.stopImmediatePropagation();
    const text=$('#v14StoryText').value.trim(),file=$('#v14StoryMedia').files?.[0];
    if(!text&&!file){toast('Tambahkan teks atau foto/video terlebih dahulu');return;}
    try{
      const media=await prepareStoryMedia(file);
      const stories=ld('vstories',[]);
      stories.unshift({id:'story-'+Date.now(),text,user:S.user.name,at:Date.now(),...(media||{})});
      try{sv('vstories',stories);}catch(_){}
      md.close();renderCommunity();toast('Story tersimpan di prototipe lokal');
    }catch(err){toast(err.message||'Media gagal diproses');}
  },true);

  function openOwnStory(){
    const stories=ld('vstories',[]).filter(x=>Date.now()-x.at<86400000);
    const story=stories[0];
    if(!story){openStoryComposer();return;}
    openM(`<p class="eyebrow">CERITA KAMU</p><h2>${esc(story.user||S.user?.name||'Kamu')}</h2>${showStoryMedia(story)}<div class="v14-story-card">${esc(story.text||'')}</div><p class="m">Story akan kedaluwarsa setelah 24 jam.</p><button class="btn w" data-a="mx">Tutup</button>`,true);
  }
  function openFriendStory(index){
    const f=demoFriends[index];if(!f)return;
    const seen=ld('vseen',[]);if(!seen.includes(f.id)){seen.push(f.id);sv('vseen',seen);}
    openM(`<div class="story-viewer" style="background:linear-gradient(145deg,${f.color},#F4F6EC)"><div class="story-profile">${portrait(index)}<b>${esc(f.name)}</b><span>${esc(f.level)} · ${esc(f.plant)}</span></div><div class="v14-story-card">${art(friendPlantShapes[index],index+7)}<h2>${esc(f.story)}</h2><p>${esc(f.bio)}</p></div><button class="btn g w" data-profile-id="${f.id}">Lihat profil</button><button class="btn w" data-a="mx" style="margin-top:8px">Tutup</button></div>`,true);
    renderCommunity();
  }

  document.addEventListener('click',e=>{
    const add=e.target.closest('[data-a="addStory"]');
    if(add){e.preventDefault();e.stopImmediatePropagation();openStoryComposer();return;}
    const own=e.target.closest('[data-own-story]');
    if(own){e.preventDefault();e.stopImmediatePropagation();openOwnStory();return;}
    const story=e.target.closest('[data-story]');
    if(story){e.preventDefault();e.stopImmediatePropagation();openFriendStory(Number(story.dataset.story));return;}
    const profile=e.target.closest('[data-profile-id]');
    if(profile){e.preventDefault();e.stopImmediatePropagation();openFriendProfile(profile.dataset.profileId);return;}
    const follow=e.target.closest('[data-profile-follow]');
    if(follow){
      e.preventDefault();e.stopImmediatePropagation();
      const id=follow.dataset.profileFollow,a=ld('vfriends',[]);
      a.includes(id)?sv('vfriends',a.filter(x=>x!==id)):sv('vfriends',[...a,id]);
      openFriendProfile(id);renderCommunity();return;
    }
    const tab=e.target.closest('[data-community-tab]');
    if(tab)setCommunityTab(tab.dataset.communityTab);
  },true);

  const baseRenderCommunity=renderCommunity;
  renderCommunity=function(){
    baseRenderCommunity();
    const friends=ld('vfriends',[]),query=($('#friendSearch')?.value||'').toLowerCase();
    const own=ld('vstories',[]).filter(x=>Date.now()-x.at<86400000);
    const strip=$('#storyStrip');
    if(strip){
      strip.innerHTML=(own.length
        ? `<button class="story-person" data-own-story><span class="story-avatar">${own[0].media&&own[0].mediaType==='image'?`<img src="${own[0].media}" alt="Story kamu">`:(S.user?.avatar?`<img src="${S.user.avatar}" alt="Foto profil">`:portrait(4))}</span><small>Cerita kamu</small></button>`
        : `<button class="story-add" data-a="addStory"><span class="story-avatar add-ring"><b>+</b></span><small>Cerita kamu</small></button>`)
        +demoFriends.map((f,i)=>`<button class="story-person has-new-story" data-story="${i}"><span class="story-avatar">${portrait(i)}</span><small>${esc(f.name.split(' ')[0])}</small></button>`).join('');
    }
    const grid=$('#friendGrid');
    if(grid){
      grid.innerHTML=demoFriends.filter(f=>(f.name+' '+f.plant+' '+f.hobby).toLowerCase().includes(query)).map((f)=>{
        const i=demoFriends.indexOf(f),yes=friends.includes(f.id);
        return `<article class="friend-card"><button class="friend-cover" type="button" data-profile-id="${f.id}" style="width:100%;border:0;background:${f.color};cursor:pointer">${portrait(i)}</button><div class="friend-card-body"><div class="friend-title"><button class="v14-profile-link" data-profile-id="${f.id}">${esc(f.name)}</button><span class="level ${f.level.toLowerCase()}">${esc(f.level)}</span></div><p class="m">${esc(f.plant)} · ${f.xp} EXP</p><p>${esc(f.bio)}</p><small>${esc(f.hobby)}</small><div class="v14-friend-actions"><button class="btn ${yes?'g':''}" data-friend="${f.id}">${yes?'Mengikuti':'Tambah teman'}</button><button class="btn g" data-profile-id="${f.id}">Lihat profil</button></div></div></article>`;
      }).join('')||'<p class="emp">Tidak ada teman yang cocok dengan pencarianmu.</p>';
    }
    const feed=$('#questionFeed');
    if(feed){
      feed.innerHTML=Object.entries(threads).map(([id,t])=>{
        const latest=t.replies.slice(-2).reverse();
        const preview=latest.length?latest.map(r=>`<p><b>${esc(r[0])}:</b> ${esc(r[1])}</p>`).join(''):'<p>Belum ada jawaban. Jadilah orang pertama yang membantu.</p>';
        const known=demoFriends.find(f=>f.name===t.author);const knownUser=ld('vusers',[]).find(u=>u.name===t.author);const knownXp=t.author===S.user?.name?(S.user.xp||0):(known?.xp??knownUser?.xp);const role=knownXp===undefined?'Member':knownXp>=200?'Senior':knownXp>=50?'Junior':'New';
        return `<article class="question-card v14-question"><div style="width:100%"><span class="level ${role.toLowerCase()}">${role}</span><h3>${esc(t.title)}</h3><p class="m">Oleh ${esc(t.author)} · ${t.replies.length} jawaban</p><div class="v14-answer-preview"><span class="answer-label">Jawaban terbaru</span>${preview}</div><div class="v14-question-actions"><span class="v14-answers-note">${t.replies.length} jawaban tersedia</span><button class="btn g" data-thread="${id}">Lihat semua jawaban</button></div></div></article>`;
      }).join('')||'<p class="emp">Belum ada diskusi. Mulai pertanyaan pertama.</p>';
    }
    const activity=$('#friendActivity');
    if(activity)activity.innerHTML=demoFriends.slice(0,3).map((f,i)=>`<button class="activity-card" data-profile-id="${f.id}" style="width:100%;text-align:left;border:1px solid var(--ln);background:transparent;cursor:pointer"><span class="mini-avatar">${portrait(i)}</span><div><b>${esc(f.name)}</b><p>${esc(f.story)}</p><small>Sedang merawat: ${esc(f.plant)} · Lihat profil ↗</small></div></button>`).join('');
    // Keep selected community destination reflected in both the tab strip and shortcut cards.
    const selected=document.querySelector('[data-community-pane]:not([hidden])')?.dataset.communityPane||'stories';
    document.querySelectorAll('[data-community-tab]').forEach(el=>el.classList.toggle('active',el.dataset.communityTab===selected));
  };

  const baseThreadViewV14=threadView;
  threadView=function(id){
    baseThreadViewV14(id);
    if(id==='new'||!threads[id]||!md.open)return;
    const t=threads[id],replies=md.querySelectorAll('.reply');
    replies.forEach((el,index)=>{
      const name=t.replies[index]?.[0];if(!name)return;
      const friend=demoFriends.find(f=>f.name===name),account=ld('vusers',[]).find(u=>u.name===name);
      const xp=name===S.user?.name?(S.user.xp||0):(friend?.xp??account?.xp);
      if(xp===undefined)return;
      const rank=xp>=200?'Senior':xp>=50?'Junior':'New';
      const author=el.querySelector('b');
      if(author&&!author.parentElement.querySelector('.level'))author.insertAdjacentHTML('afterend',` <span class="level ${rank.toLowerCase()}">${rank}</span>`);
    });
    const count=md.querySelector('.tt b');
    if(count)count.textContent=activeLang==='ja'?`${t.replies.length}件の回答`:activeLang==='en'?`${t.replies.length} answers`:`${t.replies.length} tanggapan`;
    const label=md.querySelector('.tt span');
    if(label)label.textContent=activeLang==='ja'?'コミュニティの回答':activeLang==='en'?'Community answers':'Diskusi komunitas';
    cacheBase(md);applyLocale(md);
  };

  // Persist user-created threads and forum replies in this browser prototype.
  try{Object.assign(threads,ld('v14Threads',{}));}catch(_){}
  function saveUserThreads(){
    const saved={};
    Object.entries(threads).forEach(([id,t])=>{saved[id]=t;});
    sv('v14Threads',saved);
  }
  document.addEventListener('submit',e=>{
    const form=e.target;
    if(form.id==='newThreadForm'){
      e.preventDefault();e.stopImmediatePropagation();
      if(!S.user){auth('login');return;}
      const title=$('#postTitle').value.trim(),body=$('#postBody').value.trim();
      if(title.length<8||body.length<12){toast('Judul atau cerita masih terlalu singkat');return;}
      const id='user-'+Date.now();
      threads[id]={category:'DISKUSI BARU',title,author:S.user.name,role:'Anggota Valauera',body,replies:[]};
      saveUserThreads();md.close();routeTo('community');setCommunityTab('questions');renderCommunity();toast('Diskusi tersimpan di prototipe lokal');
      return;
    }
    if(form.id==='replyForm'){
      e.preventDefault();e.stopImmediatePropagation();
      if(!S.user){auth('login');return;}
      const val=$('#replyText').value.trim(),id=form.dataset.threadId;
      if(!val||!threads[id]){toast('Tulis jawaban terlebih dahulu');return;}
      threads[id].replies.push([S.user.name,val]);
      S.user.xp=(S.user.xp||0)+10;save();saveUserThreads();threadView(id);
      toast('Jawaban ditambahkan · +10 EXP');renderCommunity();
    }
  },true);

  // Profile menu: show following/follower information and the user's own story photos.
  const baseAcc=acc;
  acc=function(){
    baseAcc();
    if(!S.user||!md.open)return;
    const own=ld('vstories',[]).filter(x=>Date.now()-x.at<86400000);
    const media=own.filter(x=>x.media).slice(0,6);
    const gallery=media.map((x,i)=>`<figure><div>${showStoryMedia(x)}</div><figcaption>Story ${i+1}</figcaption></figure>`).join('');
    const block=document.createElement('section');
    block.innerHTML=`<div class="v14-profile-stats"><div><b>${S.user.followers||14}</b><span>Pengikut</span></div><div><b>${ld('vfriends',[]).length}</b><span>Mengikuti</span></div><div><b>${media.length}</b><span>Foto koleksi</span></div></div><div class="rv"><b>Bio</b><p>${esc(S.user.bio||'Suka merawat tanaman dan berbagi proses tumbuh.')}</p></div><h3>Foto unggahan</h3><div class="v14-gallery">${gallery||'<p class="m">Foto story yang kamu bagikan akan muncul di sini.</p>'}</div>`;
    md.querySelector('.profile-head')?.insertAdjacentElement('afterend',block);
  };

  // Add seed-specific visual treatment and visible discovery shortcuts.
  addSeedEntry();installCommunityShortcuts();
  const originalSeedLanguage=V14_LANGS;
  const oldApplyLocale=applyLocale;
  function translateAddedControls(){
    const dict=V14_LANGS[activeLang]||{};
    const hero=document.querySelector('.hero');
    if(hero){
      const h=hero.querySelector('h1'),lead=hero.querySelector('.lead'),eyebrow=hero.querySelector('.eyebrow');
      if(h)h.innerHTML=activeLang==='ja'?'暮らしに、<em>深呼吸を。</em>':activeLang==='en'?'A room to live, <em>and breathe.</em>':'Ruang hidup, <em>bernapas.</em>';
      if(lead)lead.textContent=activeLang==='ja'?'部屋や暮らしのリズム、あなたらしさに合う植物を見つけましょう。空間を飾るだけでなく、毎日に小さな物語を育てます。':activeLang==='en'?'Find plants that fit your space, rhythm, and personality. Not just to decorate a corner, but to grow little stories every day.':'Temukan tanaman yang cocok dengan ruang, ritme, dan kepribadianmu. Bukan cuma mempercantik sudut rumah — tapi menumbuhkan cerita kecil setiap hari.';
      if(eyebrow)eyebrow.textContent=activeLang==='ja'?'少し緑を、もっと自分らしく':activeLang==='en'?'A little greener, a little more you':'A little greener, a little more you';
      const links=hero.querySelectorAll('.acts > a,.acts > button');
      const labels=activeLang==='ja'?['植物を探す','部屋に合う植物を探す','クイックツアー']:activeLang==='en'?['Discover plants','Find plants for your space','Quick tour']:['Temukan tanaman','Kenali ruangmu','Tur singkat'];
      links.forEach((el,i)=>{if(labels[i]){const arrow=el.querySelector('span')?.outerHTML||'';el.innerHTML=labels[i]+(i===0?' '+arrow:'');}});
      const stats=hero.querySelectorAll('.stats .m');
      const statLabels=activeLang==='ja'?['植物を厳選','育つコミュニティ','お手入れガイド']:activeLang==='en'?['curated plants','growing community','care guides']:['kurasi tanaman','komunitas tumbuh','panduan perawatan'];
      stats.forEach((el,i)=>{const strong=el.querySelector('b')?.outerHTML||'';if(statLabels[i])el.innerHTML=strong+statLabels[i];});
    }
    const mode=document.querySelector('#mode');if(mode)mode.textContent=activeLang==='ja'?'表示設定':activeLang==='en'?'Theme':'Mode';
    document.querySelectorAll('.mobile-nav [data-route="profile"],.mobile-nav [data-a="acc"],.mobile-nav .profile-link').forEach(el=>{el.textContent=activeLang==='ja'?'プロフィール':activeLang==='en'?'Profile':'Profil';});
    const langSelect=document.querySelector('#languageSelect');
    if(langSelect){const opts=langSelect.options;if(opts.length>=3){opts[0].textContent=activeLang==='ja'?'インドネシア語':activeLang==='en'?'Indonesian':'ID';opts[1].textContent=activeLang==='ja'?'英語':activeLang==='en'?'English':'EN';opts[2].textContent=activeLang==='ja'?'日本語':activeLang==='en'?'Japanese':'日本語';}}

    document.querySelectorAll('[data-v14-label]').forEach(el=>{
      const base=el.dataset.v14Label==='seed-title'?'Mulai dari benih, tumbuhkan sendiri.':'Pilih benih, stek, atau bibit muda. Setiap produk menampilkan gambar kemasan, isi, dan harga.';
      el.textContent=activeLang==='id'?base:(dict[base]||base);
    });
    document.querySelectorAll('#v14CommunityShortcuts .community-shortcut').forEach(btn=>{
      const pairs={
        stories:['Cerita foto & video','Lihat dan bagikan perkembangan tanaman'],
        friends:['Profil teman','Bio, koleksi foto, pengikut, dan mengikuti'],
        questions:['Forum & jawaban','Baca pertanyaan dan cuplikan jawaban'],
        quests:['Quest harian','Kebiasaan kecil dan poin pengalaman']
      };
      const k=btn.dataset.communityTab,p=pairs[k];if(!p)return;
      const maps={
        en:{'Cerita foto & video':'Photo & video stories','Lihat dan bagikan perkembangan tanaman':'View and share plant updates','Profil teman':'Friend profiles','Bio, koleksi foto, pengikut, dan mengikuti':'Bio, photo collection, followers and following','Forum & jawaban':'Forum & answers','Baca pertanyaan dan cuplikan jawaban':'Browse questions and answer previews','Quest harian':'Daily quests','Kebiasaan kecil dan poin pengalaman':'Daily habits and experience points'},
        ja:{'Cerita foto & video':'写真・動画ストーリー','Lihat dan bagikan perkembangan tanaman':'植物の成長を見て共有','Profil teman':'友達のプロフィール','Bio, koleksi foto, pengikut, dan mengikuti':'自己紹介、写真、フォロワー、フォロー','Forum & jawaban':'フォーラムと回答','Baca pertanyaan dan cuplikan jawaban':'質問と回答のプレビューを見る','Quest harian':'毎日のクエスト','Kebiasaan kecil dan poin pengalaman':'毎日の習慣と経験値'}
      };
      btn.querySelector('b').textContent=activeLang==='id'?p[0]:(maps[activeLang]?.[p[0]]||p[0]);
      btn.querySelector('small').textContent=activeLang==='id'?p[1]:(maps[activeLang]?.[p[1]]||p[1]);
    });
    const hint=document.querySelector('.v14-community-hint');
    if(hint)hint.textContent=activeLang==='ja'?'上のスペースを選択してください。各セクションに内容と操作ボタンがあります。':activeLang==='en'?'Choose a space above. Each section has clear content and actions.':'Pilih salah satu ruang di atas. Setiap bagian memiliki isi dan tombol tindakan yang terlihat.';
    const replyForm=md.querySelector('#replyForm');
    const currentThread=replyForm&&threads[replyForm.dataset.threadId];
    const answerCount=md.querySelector('.tt b');
    if(currentThread&&answerCount)answerCount.textContent=activeLang==='ja'?`${currentThread.replies.length}件の回答`:activeLang==='en'?`${currentThread.replies.length} answers`:`${currentThread.replies.length} tanggapan`;
  }
  const oldSyncLocale=syncLocale;
  syncLocale=function(lang){oldSyncLocale(lang);translateAddedControls();};

  // Wrap route changes so the additional discovery UI is always refreshed.
  const baseRouteTo=routeTo;
  routeTo=function(page){
    baseRouteTo(page);
    if(page==='community'){installCommunityShortcuts();renderCommunity();translateAddedControls();}
    if(page==='plants'){addSeedEntry();applySeedArtwork();}
  };
  // Keep initial page and dynamic UI in the chosen language.
  render();renderCommunity();
  setLanguage(activeLang);
})();



/* ===== Valauera 1.4.1 additions: recent views + quick search ===== */
(function () {
  'use strict';

  const RECENT_KEY = 'valauera_recent_plants_v1';
  const RECENT_LIMIT = 4;

  function readRecent() {
    try {
      const value = JSON.parse(localStorage.getItem(RECENT_KEY) || '[]');
      return Array.isArray(value) ? value.filter(id => typeof id === 'string') : [];
    } catch (_) {
      return [];
    }
  }

  function writeRecent(ids) {
    try { localStorage.setItem(RECENT_KEY, JSON.stringify(ids.slice(0, RECENT_LIMIT))); }
    catch (_) {}
  }

  function getPlantData() {
    try { return typeof all === 'function' ? all() : []; }
    catch (_) { return []; }
  }

  function renderRecent() {
    const grid = document.querySelector('#grid');
    if (!grid) return;

    let section = document.querySelector('#recentlyViewed');
    if (!section) {
      section = document.createElement('section');
      section.id = 'recentlyViewed';
      section.className = 'recent-section';
      section.setAttribute('aria-label', 'Tanaman yang baru dilihat');
      grid.insertAdjacentElement('afterend', section);
    }

    const recent = readRecent();
    const plants = getPlantData();
    const entries = recent.map(id => plants.find(plant => plant.id === id)).filter(Boolean);

    if (!entries.length) {
      section.hidden = true;
      return;
    }

    section.hidden = false;
    section.innerHTML = `
      <div class="recent-heading">
        <div>
          <p class="eyebrow">YOUR RECENTLY VIEWED</p>
          <h3>Baru kamu lihat</h3>
        </div>
        <button class="recent-clear" type="button" data-recent-clear>Hapus riwayat</button>
      </div>
      <div class="recent-list">
        ${entries.map(plant => `
          <article class="recent-item">
            <div class="recent-copy">
              <b>${esc(plant.n)}</b>
              <span>${esc(plant.lat || '')}</span>
              <strong>${rp(plant.p)}</strong>
            </div>
            <button class="btn g" type="button" data-d="${esc(plant.id)}">Lihat lagi</button>
          </article>
        `).join('')}
      </div>`;
  }

  // Capture the product-detail action before the existing delegated handler.
  document.addEventListener('click', function (event) {
    const detailButton = event.target.closest('[data-d]');
    if (detailButton && detailButton.dataset.d) {
      const id = detailButton.dataset.d;
      const recent = [id, ...readRecent().filter(item => item !== id)];
      writeRecent(recent);
      renderRecent();
    }

    if (event.target.closest('[data-recent-clear]')) {
      writeRecent([]);
      renderRecent();
    }
  }, true);

  // "/" or Ctrl/Cmd + K focuses the catalogue search without hijacking text fields.
  document.addEventListener('keydown', function (event) {
    const search = document.querySelector('#q');
    if (!search) return;

    const active = document.activeElement;
    const typing = active && (
      active.isContentEditable ||
      /^(INPUT|TEXTAREA|SELECT)$/.test(active.tagName)
    );

    if (!typing && (event.key === '/' || ((event.ctrlKey || event.metaKey) && event.key.toLowerCase() === 'k'))) {
      event.preventDefault();
      if (typeof routeTo === 'function' && document.body.dataset.page !== 'plants') {
        routeTo('plants');
      }
      search.focus();
      search.select();
    }
  });

  // Render after the original catalogue renderer has populated the page.
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', renderRecent, { once: true });
  } else {
    renderRecent();
  }
  window.addEventListener('pageshow', renderRecent);
})();

