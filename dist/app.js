'use strict';
const dialog=document.querySelector('#viewer');
const body=document.querySelector('#dialog-body');
const page=document.body.dataset.page;
let returnFocus=null;
function openDialog(label){returnFocus=document.activeElement;document.querySelector('#dialog-label').textContent=label;body.replaceChildren();dialog.showModal();document.body.style.overflow='hidden';dialog.scrollTop=0;}
function closeDialog(){dialog.close();}
dialog.querySelector('.close').addEventListener('click',closeDialog);
dialog.addEventListener('click',e=>{if(e.target===dialog){const r=dialog.getBoundingClientRect();if(e.clientX<r.left||e.clientX>r.right||e.clientY<r.top||e.clientY>r.bottom)closeDialog();}});
dialog.addEventListener('close',()=>{body.querySelectorAll('video').forEach(v=>v.pause());body.replaceChildren();document.body.style.overflow='';returnFocus?.focus();});
function el(tag,text,cls){const x=document.createElement(tag);if(text)x.textContent=text;if(cls)x.className=cls;return x;}
const articles=[
 {title:'AI는 우리의 창의성을 어디까지 넓혀줄 수 있을까?',lead:'좋은 결과를 만드는 것은 도구일까, 질문일까. 생성형 AI를 활용한 첫 실습은 이 질문에서 시작됐다.',sections:[['첫 결과보다 중요한 두 번째 질문','같은 주제를 입력해도 맥락과 조건에 따라 결과가 달라진다. 첫 실습에서는 추상적인 요청 대신 대상 독자, 전달할 메시지, 표현 방식을 구체화해 보았다. 결과의 차이를 비교하는 과정이 곧 생각을 정리하는 연습이 됐다.'],['선택하는 일도 창작이다','AI가 여러 가능성을 제시하면, 사람은 목적에 맞는 것을 선택하고 수정한다. 어떤 표현을 남길지, 어떤 이미지를 덜어낼지 판단하는 기준은 만들고 싶은 이야기에서 출발한다.'],['창의성은 도구와의 대화 속에서','이번 학습에서는 AI를 완성된 답을 주는 도구보다 아이디어를 확장하는 대화 상대로 바라봤다. 결과를 비판적으로 읽고 나만의 관점을 더하는 과정이 다음 실험의 출발점이다.']]},
 {title:'좋은 프롬프트는 좋은 질문에서 시작된다',lead:'구체적인 질문을 만들기 위해 목적, 독자, 제약 조건을 나누어 적어 보았다.',sections:[['막연한 요청을 구체적으로 바꾸기','“AI에 대한 기사를 써줘” 대신 “AI를 처음 배우는 독자에게 프롬프트 실험의 차이를 설명하는 도입부를 써줘”라고 요청했다. 두 문장을 비교하며 누가 무엇을 이해해야 하는지 먼저 정의하는 습관을 연습했다.'],['한 번에 하나의 조건만 바꾸기','길이, 말투, 예시의 개수를 동시에 바꾸면 어떤 조건이 영향을 주었는지 알기 어렵다. 하나씩 수정하고 결과를 비교하면 다음 요청에 활용할 기준을 남길 수 있다.']]},
 {title:'데이터에서 이야기를 발견하는 방법',lead:'숫자를 나열하는 일과 숫자로 이야기하는 일 사이에는 관찰과 검증의 과정이 있다.',sections:[['질문을 먼저 정하기','이번 예시 실습에서는 가상의 학습 시간 기록을 놓고 “언제 집중하기 쉬웠을까?”라는 질문을 세웠다. 실제 통계나 조사 결과를 주장하기보다 데이터를 읽는 방법을 연습하는 데 목적을 두었다.'],['차이를 설명하기 전에 확인하기','눈에 띄는 차이가 있어도 표본의 크기와 측정 기준을 먼저 확인해야 한다. 그래프는 질문을 돕지만, 원인을 자동으로 설명해 주지는 않는다. 기사에는 관찰한 사실과 해석을 구분해 적었다.']]},
 {title:'AI 시대, 팩트체크가 더 중요해지는 이유',lead:'자연스러운 문장이 언제나 사실을 의미하지는 않는다. 매끄러움과 정확성을 따로 살피는 연습이 필요하다.',sections:[['주장을 작게 나누기','초안에서 날짜, 수치, 인물의 발언, 인과관계를 나타내는 문장을 따로 표시했다. 검증할 수 있는 단위로 나누면 확인이 필요한 부분이 분명해진다.'],['출처를 직접 읽기','AI가 제시한 자료 이름만 신뢰하지 않고 실제 원문을 열어 맥락과 발행일을 확인한다. 확인할 수 없는 내용은 사실처럼 적지 않고 삭제하거나 불확실성을 명시하는 방식으로 수정했다.']]}
];
document.querySelectorAll('[data-article]').forEach(b=>b.addEventListener('click',()=>{const a=articles[Number(b.dataset.article)];openDialog('ARTICLE / SAMPLE');body.append(el('div','한국경제 AI 교육 · 학습용 샘플','eyebrow'),el('h2',a.title),el('p',a.lead));a.sections.forEach(([t,p])=>body.append(el('h3',t),el('p',p)));}));
const artworks=[['still-life','Soft Geometry','크림색 종이의 구조와 반투명한 유리의 질감을 함께 배치한 조형 실험.','미니멀한 정물, 아이보리 종이 조형물, 연분홍 유리 구, 따뜻한 모래빛 받침대, 부드러운 건축적 그림자.'],['architecture','Quiet Futures','반복되는 아치와 자연광으로 미래 공간의 분위기를 탐색했습니다.','미래적인 크림색 복도, 아치형 개구부, 아침 햇빛, 은은한 분홍빛 반사, 고요한 건축 사진.'],['fabric','Between Air & Form','단단한 구와 가벼운 천의 대비를 통해 움직임을 상상하는 작업.','아이보리 구 위로 흐르는 반투명 연분홍 패브릭, 모래빛 스튜디오, 부드러운 빛, 실험적인 파인아트 정물.']];
document.querySelectorAll('[data-art]').forEach(b=>b.addEventListener('click',()=>{const a=artworks[Number(b.dataset.art)];openDialog('IMAGE / AI GENERATED');const img=el('img');img.src=`assets/${a[0]}.png`;img.alt=a[2];body.append(img,el('h2',a[1]),el('p',a[2]),el('h3','프롬프트 방향'),el('p',a[3]));}));
const films=[['fabric','The Shape of Air','빛과 천의 흐름을 표현하는 브랜드 필름을 구상했습니다. 도입은 넓은 화면, 중간은 질감, 마지막은 형태에 집중합니다.'],['architecture','Quiet City, 2030','빈 공간에서 시작해 아치와 빛의 리듬을 따라가는 공간 영상 기획입니다.'],['still-life','A Different Perspective','같은 오브제를 다른 거리에서 바라보며 형태의 새로운 면을 발견하는 제품 필름 기획입니다.']];
document.querySelectorAll('[data-film]').forEach(b=>b.addEventListener('click',()=>{const f=films[Number(b.dataset.film)];openDialog('VIDEO / MOTION CONCEPT');body.append(el('h2',f[1]));const stage=el('div',null,'storyboard');const img=el('img');img.src=`assets/${f[0]}.png`;img.alt=f[1]+' 모션 기획';stage.append(img,el('span',f[1],'story-caption'));const controls=el('div',null,'motion-controls');const toggle=el('button','일시정지');if(matchMedia('(prefers-reduced-motion: reduce)').matches){toggle.disabled=true;toggle.textContent='동작 줄이기 적용됨';}toggle.addEventListener('click',()=>{stage.classList.toggle('is-paused');toggle.textContent=stage.classList.contains('is-paused')?'재생':'일시정지';});controls.append(toggle,el('span','이미지 확대·이동으로 만든 모션 예시 · 무음'));body.append(stage,controls,el('p',f[2]),el('p','실제 영상 파일이 아닌 스토리보드 미리보기입니다. 내 자료 미리보기에서 영상 파일을 선택하면 재생할 수 있습니다.'));}));
const configs={introduce:{name:'프로필',accept:'.pdf,.txt,.md,.png,.jpg,.jpeg,.webp',ext:['pdf','txt','md','png','jpg','jpeg','webp']},article:{name:'기사',accept:'.txt,.md,.pdf',ext:['txt','md','pdf']},image:{name:'이미지',accept:'.png,.jpg,.jpeg,.webp,.gif',ext:['png','jpg','jpeg','webp','gif']},video:{name:'영상',accept:'.mp4,.webm,.mov',ext:['mp4','webm','mov']},final:{name:'Final project',accept:'.pdf,.txt,.md,.png,.jpg,.jpeg,.webp',ext:['pdf','txt','md','png','jpg','jpeg','webp']}};
const localItems=[];
document.querySelector('#add-material').addEventListener('click',()=>{const c=configs[page];openDialog('MY MATERIAL / PREVIEW');body.append(el('h2',`${c.name} 자료 미리보기`),el('p','파일은 서버로 전송되지 않습니다. 현재 페이지를 새로고침하거나 다른 메뉴로 이동하면 목록이 사라집니다. 공개 게시용 업로드·저장 기능은 아직 연결되지 않았습니다.'));const form=el('form');const titleLabel=el('label','제목');const title=el('input');title.required=true;title.maxLength=120;title.placeholder='작업 제목을 입력하세요';titleLabel.append(title);const fileLabel=el('label',`파일 선택 (${c.ext.join(', ')})`);const file=el('input');file.type='file';file.required=true;file.accept=c.accept;fileLabel.append(file);const status=el('div',null,'form-status');status.setAttribute('role','status');const submit=el('button','미리보기 추가','primary');submit.type='submit';file.addEventListener('change',()=>{if(!title.value&&file.files[0])title.value=file.files[0].name.replace(/\.[^.]+$/,'');});form.append(titleLabel,fileLabel,status,submit);form.addEventListener('submit',e=>{e.preventDefault();const f=file.files[0];const t=title.value.trim();if(!t){status.textContent='제목을 입력해 주세요.';return;}if(!f)return;const ext=f.name.split('.').pop().toLowerCase();if(!c.ext.includes(ext)){status.textContent='지원하지 않는 형식입니다. 안내된 파일 형식을 선택해 주세요.';return;}if(f.size>200*1024*1024){status.textContent='200MB 이하의 파일을 선택해 주세요.';return;}const item={title:t,file:f,ext,url:URL.createObjectURL(f)};localItems.push(item);renderLocal();closeDialog();document.querySelector('#local-materials').scrollIntoView({behavior:matchMedia('(prefers-reduced-motion: reduce)').matches?'instant':'smooth'});});body.append(form);});
function renderLocal(){const list=document.querySelector('#local-materials');list.replaceChildren(el('h2','내 자료 · 이 페이지에서만 미리보기'));localItems.forEach(item=>{const row=el('div',null,'local-item');const info=el('div');info.append(el('strong',item.title),el('p',`${item.file.name} · ${(item.file.size/1024/1024).toFixed(1)} MB`,'row-sub'));const show=el('button','열기 ↗');show.addEventListener('click',()=>previewItem(item));row.append(info,show);list.append(row);});}
async function previewItem(item){openDialog('MY MATERIAL / LOCAL FILE');body.append(el('h2',item.title));if(['txt','md'].includes(item.ext)){const text=await item.file.text();if(dialog.open&&body.querySelector('h2')?.textContent===item.title)body.append(el('pre',text));}else if(['mp4','webm','mov'].includes(item.ext)){const v=el('video');v.controls=true;v.preload='metadata';v.src=item.url;v.addEventListener('error',()=>body.append(el('p','이 브라우저에서 재생할 수 없는 영상 형식입니다. MP4(H.264) 또는 WebM 파일을 사용해 주세요.')));body.append(v);}else if(item.ext==='pdf'){const a=el('a','PDF 파일 새 탭에서 열기 ↗','text-link');a.href=item.url;a.target='_blank';a.rel='noopener';body.append(a);}else{const img=el('img');img.src=item.url;img.alt=item.title;img.addEventListener('error',()=>body.append(el('p','이미지를 읽을 수 없습니다. 올바른 이미지 파일인지 확인해 주세요.')));body.append(img);}}
if(page==='introduce'){
 const commentForm=document.querySelector('#profile-comment-form');
 const commentInput=document.querySelector('#profile-comment');
 const commentList=document.querySelector('#profile-comment-list');
 const commentStatus=document.querySelector('#comment-status');
 const commentKey='ai-atelier-profile-comments-v1';
 let comments=[];
 try{const stored=JSON.parse(localStorage.getItem(commentKey)||'[]');if(Array.isArray(stored))comments=stored.filter(item=>item&&typeof item.text==='string');}catch{}
 const saveComments=()=>{try{localStorage.setItem(commentKey,JSON.stringify(comments));return true;}catch{return false;}};
 const renderComments=()=>{commentList?.replaceChildren();if(!commentList)return;if(!comments.length){commentList.append(el('p','아직 저장된 주석이 없습니다.','comment-empty'));return;}comments.forEach(item=>{const article=el('article',null,'comment-item');const copy=el('p',item.text);const time=el('time',new Intl.DateTimeFormat('ko-KR',{dateStyle:'medium',timeStyle:'short'}).format(new Date(item.createdAt)));time.dateTime=item.createdAt;const remove=el('button','삭제','comment-delete');remove.type='button';remove.setAttribute('aria-label',`주석 삭제: ${item.text.slice(0,20)}`);remove.addEventListener('click',()=>{comments=comments.filter(comment=>comment.id!==item.id);saveComments();renderComments();if(commentStatus)commentStatus.textContent='주석을 삭제했습니다.';});article.append(copy,time,remove);commentList.append(article);});};
 commentForm?.addEventListener('submit',event=>{event.preventDefault();const text=commentInput?.value.trim();if(!text)return;comments.unshift({id:globalThis.crypto?.randomUUID?.()||`${Date.now()}-${Math.random()}`,text,createdAt:new Date().toISOString()});comments=comments.slice(0,50);if(!saveComments()){if(commentStatus)commentStatus.textContent='브라우저 저장소를 사용할 수 없어 주석을 저장하지 못했습니다.';return;}commentInput.value='';renderComments();if(commentStatus)commentStatus.textContent='이 브라우저에 주석을 저장했습니다.';});
 renderComments();
}
const finePointer=matchMedia('(pointer:fine)');
const reducedMotion=matchMedia('(prefers-reduced-motion: reduce)');
if(finePointer.matches){
 document.body.classList.add('magic-cursor-enabled');
 if(!reducedMotion.matches){
  const sparkleColors=['#F6B1C5','#F8C4D5','#F3A5C2','#D76A89','#B7526F'];
  let lastSparkle=0;
  window.addEventListener('pointermove',event=>{const now=performance.now();if(now-lastSparkle<38)return;lastSparkle=now;const sparkle=el('i',null,'cursor-sparkle');sparkle.setAttribute('aria-hidden','true');sparkle.style.left=`${event.clientX-10+Math.random()*20}px`;sparkle.style.top=`${event.clientY-10+Math.random()*20}px`;sparkle.style.setProperty('--spark-color',sparkleColors[Math.floor(Math.random()*sparkleColors.length)]);sparkle.style.setProperty('--spark-x',`${-10+Math.random()*20}px`);sparkle.style.setProperty('--spark-y',`${10+Math.random()*18}px`);sparkle.style.width=sparkle.style.height=`${3+Math.floor(Math.random()*3)}px`;document.body.append(sparkle);sparkle.addEventListener('animationend',()=>sparkle.remove(),{once:true});setTimeout(()=>sparkle.remove(),900);},{passive:true});
 }
}
const bgmAudio=document.querySelector('#background-music');
const bgmToggle=document.querySelector('#bgm-toggle');
const bgmLabel=document.querySelector('#bgm-label');
if(bgmAudio&&bgmToggle&&bgmLabel){
 bgmAudio.volume=.35;
 const updateBgmState=playing=>{bgmToggle.setAttribute('aria-pressed',String(playing));bgmToggle.setAttribute('aria-label',playing?'배경음악 정지':'배경음악 재생');bgmLabel.textContent=playing?'BGM 정지':'BGM 재생';document.body.classList.toggle('bgm-playing',playing);};
 try{const savedTime=Number(sessionStorage.getItem('ai-atelier-bgm-time'));if(Number.isFinite(savedTime)&&savedTime>0)bgmAudio.currentTime=savedTime;}catch{}
 bgmToggle.addEventListener('click',async()=>{if(bgmAudio.paused){try{await bgmAudio.play();updateBgmState(true);}catch{updateBgmState(false);bgmLabel.textContent='다시 재생';}}else{bgmAudio.pause();updateBgmState(false);}});
 bgmAudio.addEventListener('play',()=>updateBgmState(true));
 bgmAudio.addEventListener('pause',()=>updateBgmState(false));
 bgmAudio.addEventListener('error',()=>{updateBgmState(false);bgmLabel.textContent='BGM 오류';});
 window.addEventListener('pagehide',()=>{try{sessionStorage.setItem('ai-atelier-bgm-time',String(bgmAudio.currentTime));}catch{}});
 updateBgmState(false);
}
window.addEventListener('pagehide',()=>localItems.forEach(item=>URL.revokeObjectURL(item.url)));
