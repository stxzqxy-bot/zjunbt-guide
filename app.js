const dorms=[
  {name:'一期 · 直廊宿舍',meta:'24-31 栋 · 四人间 · 独卫 · 全部朝南',color:'#4f73a8',images:['assets/dorm-1-overview.jpg','assets/dorm-1-corridor-layout.jpg'],details:['一期宿舍楼号范围：24-31。','直廊户型为四人间，带独立卫浴。','直廊四人间全部朝南。','图中包含一期寝室内况与直廊四人寝布局。']},
  {name:'一期 · 大套间宿舍',meta:'24-31 栋 · 十四人间 / 十人间 · 偶南奇北',color:'#607a68',images:['assets/dorm-1-suite14-layout.jpg','assets/dorm-1-suite10-layout.jpg','assets/dorm-1-overview.jpg'],details:['一期大套间包含十四人间、十人间。','套间内包含四人寝和二人寝。','寝室号偶数朝南，奇数朝北。','套间图展示客厅、卫生间、楼梯、电箱等公共区域位置。']},
  {name:'二期 · 四/五人寝',meta:'18-23 栋 · 公共卫生间 · 偶南奇北',color:'#8f7467',images:['assets/dorm-2-layout.jpg','assets/dorm-2-public-area.jpg'],details:['二期宿舍楼号范围：18-23。','存在四人寝、五人寝或六人寝。','南北两种朝向：偶数寝室朝南，奇数寝室朝北。','公共卫生间，公共浴室、盥洗室、洗衣机等集中设置。']},
  {name:'二期 · 六人寝',meta:'18-23 栋 · 公共卫生间 · 南北朝向',color:'#63717f',images:['assets/dorm-2-layout.jpg','assets/dorm-2-public-area.jpg'],details:['二期六人寝与四/五人寝同属 18-23 栋片区。','公共卫生间，无独立卫浴。','寝室号偶数朝南，奇数朝北。','户型图可见组合立柜、床位与阳台位置。']},
  {name:'三期宿舍',meta:'09-17 栋 · 四人寝 · 独卫 · 偶南奇北',color:'#7b688b',images:['assets/dorm-3-layout.jpg','assets/dorm-3-real.jpg'],details:['三期宿舍楼号范围：09-17。','四人寝，带独立卫浴。','寝室号偶数朝南，奇数朝北。','每两层楼一间洗衣房，图中展示独卫内洗漱台与洗衣房。']},
  {name:'四期宿舍',meta:'女 1 号楼 / 男 2 号楼 · 四人间 · 独卫 · 全部朝南',color:'#9a7950',images:['assets/dorm-4-real-1.jpg','assets/dorm-4-real-2.jpg','assets/dorm-4-real-3.jpg'],details:['四期宿舍：女 1 号楼，男 2 号楼。','四人间，带独立卫浴。','全部朝南。','后三张为四期宿舍实拍，包含床位、整体寝室与洗漱台。']},
  {name:'新宿舍 · 新建楼体',meta:'楼体实拍 · 分配以学校通知为准',color:'#506c72',images:['assets/dorm-new-building.jpg'],details:['已补充新宿舍楼体实拍图。','具体投用时间、分配年级、房型与收费标准以学校通知为准。','适合关注后续入住安排的新生提前了解楼体位置与外观。']}
];
const policies=[
 {id:'major',icon:'↗',name:'转专业',title:'本科生转专业指南',desc:'学校支持符合条件的学生按流程申请转专业。具体开放专业、名额、申请条件与考核方式由当年学校及学院通知确定。',points:[['先看当年通知','不要仅参考往年时间与名额'],['关注学院考核','可能包含成绩、面试或其他要求'],['确认课程衔接','转入后可能需要补修课程'],['重要提醒','首页资料区已放置相关文件入口']],type:'信息提示'},
 {id:'course',icon:'⌁',name:'选课抢课',title:'选课与抢课',desc:'选课通常分轮次进行，通识课、体育项目等热门课程可能较快满额。请以教务系统当学期通知和培养方案为准。',points:[['提前做备选','准备不同时间段和课程组合'],['先查培养方案','避免只看“好不好抢”'],['关注退补选','名额可能在退补选阶段释放'],['别信代抢','保护统一身份认证账号']],type:'学生经验'},
 {id:'credit',icon:'✓',name:'毕业学分',title:'毕业与学分要求',desc:'毕业资格一般同时涉及培养方案规定的课程与学分、实践环节、体测等要求，不同专业和年级版本可能不同。',points:[['以培养方案为准','查看本人专业、入学年份版本'],['定期核对','用教务系统检查已获与待修学分'],['留意专项要求','创新创业、劳动教育等可能单列'],['毕业前复核','及时联系学院教务老师']],type:'官方口径'},
 {id:'scholar',icon:'✦',name:'奖学金',title:'奖学金与评奖评优',desc:'申请时间、综合测评构成和具体条件以当学年学生工作通知为准。通常会综合考察学业、素质评价与纪律情况。',points:[['留意班级通知','申请窗口通常有明确截止时间'],['保存证明材料','竞赛、志愿服务等及时登记'],['看清适用范围','不同奖项条件与名额不同'],['材料整理','奖项规则以当年学院通知为准']],type:'信息提示'},
 {id:'exam',icon:'A',name:'四六级',title:'大学英语四六级',desc:'考试由全国统一安排，校内报名资格、报名时间和考场安排以学校教务通知为准。通常每年举行两次。',points:[['关注报名通知','名额及资格按校内安排'],['核对个人信息','报名前确认照片与学籍信息'],['准备有效证件','按准考证要求携带'],['不要错过缴费','未完成缴费通常视为未报名']],type:'官方口径'}
];
const officialDocs=[
  {category:'转专业',title:'2025-2026学年第二学期学生转专业工作通知',file:'docs/major-change-2025-2026-2.pdf',url:'https://nnnews.nbt.edu.cn/_s2/9f/09/c6a171685/page.psp',summary:'最新一期转专业通知，包含申请对象、网上报名时间、学院审核、公示流程和附件入口。',attachments:[{label:'接收人数及条件汇总、学生操作指南',url:'https://nnnews.nbt.edu.cn/_s2/9f/09/c6a171685/page.psp',type:'官方附件',requiresCode:true,note:'进入官方原网页后在附件处下载。'}]},
  {category:'选课',title:'2026-2027学年第一学期选课、选订教材通知',file:'docs/course-selection-2026-2027-1.pdf',url:'https://jwc.nbt.edu.cn/content.jsp?urltype=news.NewsContentUrl&wbtreeid=1025&wbnewsid=10155',summary:'选课、教材选订相关通知，适合新学期选课前集中查看。',attachments:[{label:'附件.zip',url:'https://jwc.nbt.edu.cn/system/_content/download.jsp?urltype=news.DownloadAttachUrl&owner=1803104057&wbfileid=4D31C5B4A9369632DAC827B3B27F59AC',type:'官方附件',requiresCode:true,note:'学校下载接口需要验证码。'}]},
  {category:'选课',title:'2026-2027学年第一学期微专业选课通知',file:'docs/micro-major-selection-2026-2027-1.pdf',url:'https://jwc.nbt.edu.cn/content.jsp?urltype=news.NewsContentUrl&wbtreeid=1025&wbnewsid=10215',summary:'微专业选课通知，适合想了解跨学科/微专业课程报名的同学查看。',attachments:[{label:'附件.zip',url:'https://jwc.nbt.edu.cn/system/_content/download.jsp?urltype=news.DownloadAttachUrl&owner=1803104057&wbfileid=6B35CF69DBE994995184D33871E1E208',type:'官方附件',requiresCode:true,note:'学校下载接口需要验证码。'}]},
  {category:'学籍',title:'本科学生学籍管理规定',file:'docs/student-status-rule.pdf',url:'https://jwc.nbt.edu.cn/info/1064/6550.htm',summary:'注册、学籍异动、休复学、退学、毕业与结业等基础规则集合。',attachments:[]},
  {category:'学分',title:'学生课程替代和学分认定管理办法',file:'docs/credit-recognition-rule.pdf',url:'https://jwc.nbt.edu.cn/info/1064/6555.htm',summary:'课程替代、学分认定、交流学习等场景常用；涉及毕业学分核对时尤其要看。',attachments:[]}
];
const faqData=[
 ['家长可以进校园吗？','开学时家长可以进校园；后续日常进校通常需要预约申请。','报到','experience'],
 ['寝室会断网断电吗？门禁是什么时候？','宿舍工作日 23:00、节假日 24:00 会统一熄灯，但不会断电断网；没有门禁。','宿舍','experience'],
 ['宿舍是如何分配的？','通常由学校和学院统筹，不建议相信网上“提前选房”信息；具体到学院、班级、楼栋可能每年变化。','宿舍','experience'],
 ['军训时间为多长？','军训安排以当届新生入学教育和军训通知为准，天气等因素也可能影响日程。通常为 2 周。','报到','experience'],
 ['平时有早自习和晚自习吗？','没有早自习。大一新生需要上一年晚自习，晚自习时间通常为 18:30-20:30；个别学院时间可能会做调整。','学习','experience'],
 ['一定要加入学生会或社团吗？','不必。按兴趣、精力和成长目标选择即可，课程学习与休息同样重要。','社团','experience'],
 ['选课要怎么选？','先依据培养方案确认必修与限选要求，再安排通识、体育等课程。热门课程准备备选，关注退补选。','学习','experience'],
 ['学校有什么组织和社团？','社团名录和招新情况会变化，建议查看开学社团招新活动及校团委当年发布的信息。','社团','experience'],
 ['四六级什么时候考？','全国大学英语四六级通常每年举行两次，具体报名与考试日期以教育考试院和学校教务通知为准。','考试','official'],
 ['奖学金什么时候申请？一般需要什么条件？','以当学年评奖评优通知为准，通常综合学业成绩、素质评价、纪律情况等。','政策','official'],
 ['老师上课点名吗？','由任课教师决定，签到、课堂互动和考勤都可能计入平时成绩。按时上课是最稳妥的答案。','学习','experience'],
 ['宿舍卫生检查严不严？','会有宿舍卫生与安全检查，频率和要求以楼栋、学院通知为准；违规电器与消防通道通常是重点。','宿舍','experience'],
 ['学校有几个食堂？','共有两个食堂，一共五层。','生活','experience'],
 ['宿舍条件怎么样？','学校存在多期、多种房型，不能用一句“几人间、有无独卫”概括。请在上方按具体宿舍类型查看。','宿舍','experience'],
 ['宿舍违规电器有哪些？','大功率发热、明火或存在消防风险的电器通常禁止，最终以最新版学生公寓管理规定和宿管通知为准。','宿舍','official'],
 ['上课时间是怎么样的？','具体节次时间表和课程安排以教务系统课表为准；不同学期可能调整。','学习','official'],
 ['学校附近有什么奶茶店？','星巴克、古茗、茶百道、蜜雪冰城、霸王茶姬、瑞幸等各品牌都有。','生活','experience'],
 ['毕业有学分要求吗？','有。不同专业、入学年份执行不同版本培养方案，请核对本人培养方案及教务系统完成情况。','政策','official'],
 ['宿舍床的尺寸大小是多少？','一期宿舍为 0.9×2.0 m；二期宿舍为 0.9×1.9 m；三期宿舍为 0.85×0.95 m；四期宿舍为 0.9×1.9 m。','宿舍','experience'],
 ['学校的图书馆怎么样？','可用于自习、借阅和数据库资源访问；开放时间、预约规则和馆藏服务请以图书馆当期公告为准。','校园','official'],
 ['宿舍到教学楼的距离远不远？','取决于宿舍片区与上课楼栋，步行时间会有差异；多数日常上课路线可以步行解决。','校园','experience'],
 ['学校考研上岸率怎么样？','“上岸率”口径容易混淆报考人数、录取人数与毕业生总数，建议按学院查看官方升学数据，不引用未经说明的单一比例。','发展','official'],
 ['平时上课的时间是怎么样的？','以个人课表为准，课程可能分布在工作日的不同时段；不要把他人课表当作本专业模板。','学习','official'],
 ['学校可以转专业吗？','可以申请，但开放范围、名额、条件和考核以当年学校及学院通知为准。','政策','official'],
 ['学校哪个专业更有发展前景？','不建议只按“热门”判断。结合课程内容、个人能力、行业变化与学校培养特色选择更可靠。','发展','experience'],
 ['学校周边有什么好吃的外卖？','门店选择很多，可以按校门、配送速度、价格和学生评分来挑选。','生活','experience'],
 ['学校周围有哪些课外娱乐场所？','学校门口就是步行街和夜市，学校距离市中心商场不足五公里。','生活','experience'],
 ['冬天会很冷吗？需不需要电热毯？','宁波冬季湿冷体感明显，但电热毯是否允许必须先查宿舍管理规定。可优先准备保暖被褥和合规暖水袋。','生活','experience'],
 ['周末逛街一般去哪里？','学校周边商圈很发达。','生活','experience'],
 ['有没有课余兼职推荐？','优先校内勤工俭学、学院助理。更多可加微信咨询学长。','发展','experience'],
 ['上课可以带平板吗？','通常可用于记笔记，但应遵守任课老师课堂要求，考试或特定课堂可能限制电子设备。','学习','experience'],
 ['一般哪些课比较好抢？','“好抢”随容量与选课人数变化；热门体育、通识课常更紧张，建议准备多套不冲突的备选。','学习','experience'],
 ['体育俱乐部中的器材需要自备吗？','因项目而异，球拍、泳具等个人器材可能需要自备，请看课程说明或咨询任课老师。','学习','experience'],
 ['宿舍的床位怎么安排的？','可能由学校预分配、宿舍内部协商或现场安排，不同批次未必相同，请勿提前默认可自由选择。','宿舍','experience'],
 ['学校找对象容易吗？','这题没有官方统计。多参加自己真正喜欢的活动、尊重边界，比“以脱单为目标”更容易认识合拍的人。','生活','experience'],
 ['学校宿舍是独立卫浴吗？','详情可查看上方宿舍详解。','宿舍','experience'],
 ['新生需要买校园卡吗？','是否发放实体卡、手机虚拟卡及使用范围，以当届迎新指南和校园卡中心通知为准，避免向非学校指定人员付费办理。','报到','official'],
 ['有推荐的学生组织吗？','先看组织实际工作内容、时间投入和氛围，不存在适合所有人的“必加组织”。建议试听招新宣讲再决定。','社团','experience'],
 ['学校有早操要求吗？','学校没有早操。','校园','experience'],
 ['可以骑电动车进校园吗？','车辆登记、充电与通行规定存在安全管理要求，请以保卫处最新通知为准。自 2024 年以后已经不再发放车辆通行证。','校园','official']
];

const dormGrid=document.querySelector('#dormGrid');
dormGrid.innerHTML=dorms.map(d=>{const imgs=(d.images||[]).slice(0,3).map((src,i)=>`<img src="${src}" alt="${d.name}图片${i+1}">`).join('');const details=(d.details||[]).map(x=>`<li>${x}</li>`).join('');return `<article class="dorm-card" style="--card:${d.color}"><span class="status">● 已补充资料</span><h3>${d.name}</h3><p>${d.meta}</p><div class="dorm-gallery">${imgs}</div><ul>${details}</ul></article>`}).join('');
let activePolicy='major';
function renderPolicy(){const tabs=document.querySelector('#policyTabs'),panel=document.querySelector('#policyPanel');if(!tabs||!panel)return;const item=policies.find(p=>p.id===activePolicy);tabs.innerHTML=policies.map(p=>`<button class="${p.id===activePolicy?'active':''}" data-policy="${p.id}">${p.icon}　${p.name}</button>`).join('');panel.innerHTML=`<span class="tag ${item.type==='信息提示'?'pending':item.type==='学生经验'?'experience':'official'}">${item.type}</span><h3>${item.title}</h3><p>${item.desc}</p><div class="policy-points">${item.points.map(x=>`<div><b>${x[0]}</b><span>${x[1]}</span></div>`).join('')}</div><div class="source-line">资料状态：部分官方资料已整理到下方 PDF 区，可浏览、下载到本地，并通过官方原网页核对发布日期。</div>`;document.querySelectorAll('[data-policy]').forEach(b=>b.onclick=()=>{activePolicy=b.dataset.policy;renderPolicy()})}renderPolicy();
let activeDoc=0;function renderDocs(){const list=document.querySelector('#docsList');if(!list)return;list.innerHTML=officialDocs.map((d,i)=>{const attachments=(d.attachments||[]).map(a=>`<a class="${a.requiresCode?'needs-code':''}" href="${a.file||a.url}" ${a.file?'download':'target="_blank" rel="noopener"'} title="${a.note||''}">${a.requiresCode?'需验证码 · ':''}${a.type||'附件'}：${a.label}</a>`).join('');return `<article class="doc-card ${i===activeDoc?'active':''}" data-doc="${i}"><span>${d.category}</span><h3>${d.title}</h3><p>${d.summary}</p><div class="doc-actions"><a href="${d.file}" target="_blank" rel="noopener">浏览预览 PDF</a><a href="${d.file}" download>下载预览 PDF</a>${attachments}<a href="${d.url}" target="_blank" rel="noopener">官方原网页</a></div></article>`}).join('');const doc=officialDocs[activeDoc];document.querySelector('#docViewer').src=doc.file;document.querySelector('#viewerTitle').textContent=doc.title;document.querySelector('#viewerDownload').href=doc.file;document.querySelector('#viewerDownload').setAttribute('download',`${doc.title}.pdf`);document.querySelectorAll('[data-doc]').forEach(card=>card.onclick=e=>{if(e.target.tagName.toLowerCase()==='a')return;activeDoc=Number(card.dataset.doc);renderDocs()})}renderDocs();
const categories=['全部',...new Set(faqData.map(x=>x[2]))];let activeCategory='全部',searchTerm='';
function renderFaq(){document.querySelector('#faqFilters').innerHTML=categories.map(c=>`<button class="${c===activeCategory?'active':''}" data-cat="${c}">${c}</button>`).join('');const shown=faqData.filter(x=>(activeCategory==='全部'||x[2]===activeCategory)&&(`${x[0]} ${x[1]}`.includes(searchTerm)));document.querySelector('#faqList').innerHTML=shown.length?shown.map((x,i)=>`<article class="faq-item"><button class="faq-q" aria-expanded="false"><span class="num">${String(i+1).padStart(2,'0')}</span><strong>${x[0]}</strong><span class="plus">＋</span></button><div class="faq-answer">${x[1]}<br><b class="tag ${x[3]}">${x[3]==='official'?'官方口径':x[3]==='experience'?'学生经验':'信息提示'}</b></div></article>`).join(''):'<div class="empty">没有找到相关内容，试试换个关键词，或者直接提问。</div>';document.querySelectorAll('[data-cat]').forEach(b=>b.onclick=()=>{activeCategory=b.dataset.cat;renderFaq()});document.querySelectorAll('.faq-q').forEach(b=>b.onclick=()=>{const item=b.closest('.faq-item'),open=item.classList.toggle('open');b.setAttribute('aria-expanded',open);b.querySelector('.plus').textContent=open?'−':'＋'})}renderFaq();
const search=document.querySelector('#globalSearch');function runSearch(q){search.value=q;searchTerm=q.trim();activeCategory='全部';renderFaq();document.querySelector('#faq').scrollIntoView({behavior:'smooth'})}search.addEventListener('input',e=>{searchTerm=e.target.value.trim();activeCategory='全部';renderFaq()});search.addEventListener('keydown',e=>{if(e.key==='Enter')document.querySelector('#faq').scrollIntoView({behavior:'smooth'})});document.querySelectorAll('[data-query]').forEach(b=>b.onclick=()=>runSearch(b.dataset.query));document.addEventListener('keydown',e=>{if((e.metaKey||e.ctrlKey)&&e.key.toLowerCase()==='k'){e.preventDefault();search.focus()}});
const dialog=document.querySelector('#askDialog'),askForm=document.querySelector('#askForm'),askSuccessDialog=document.querySelector('#askSuccessDialog');function closeDialog(target){if(target&&target.open)target.close()}function bindDialogClose(target){if(!target)return;target.querySelectorAll('.close').forEach(btn=>btn.addEventListener('click',()=>closeDialog(target)));target.addEventListener('click',e=>{const box=target.getBoundingClientRect();const outside=e.clientX<box.left||e.clientX>box.right||e.clientY<box.top||e.clientY>box.bottom;if(outside)closeDialog(target)})}bindDialogClose(dialog);bindDialogClose(askSuccessDialog);document.querySelectorAll('[data-open-ask]').forEach(b=>b.onclick=()=>{if(dialog&&!dialog.open)dialog.showModal()});askForm.addEventListener('submit',e=>{e.preventDefault();const text=document.querySelector('#askText').value.trim();if(!text){return}const saved=JSON.parse(localStorage.getItem('nbt-questions')||'[]');saved.push({text,category:document.querySelector('#askCategory').value,time:new Date().toISOString()});localStorage.setItem('nbt-questions',JSON.stringify(saved));document.querySelector('#askText').value='';closeDialog(dialog);const toast=document.querySelector('#toast');toast.textContent='问题已保存在本机，建议添加学长微信实时回复';toast.classList.add('show');setTimeout(()=>toast.classList.remove('show'),2600);if(askSuccessDialog&&!askSuccessDialog.open)askSuccessDialog.showModal()});
const lightbox=document.querySelector('#imageLightbox');const lightboxImg=lightbox.querySelector('img'),lightboxText=lightbox.querySelector('p');document.addEventListener('click',e=>{const img=e.target.closest('img');if(!img||img.closest('.image-lightbox'))return;lightboxImg.src=img.currentSrc||img.src;lightboxImg.alt=img.alt||'图片预览';lightboxText.textContent=img.alt||'';lightbox.classList.add('open');lightbox.setAttribute('aria-hidden','false')});function closeLightbox(){lightbox.classList.remove('open');lightbox.setAttribute('aria-hidden','true');setTimeout(()=>{if(!lightbox.classList.contains('open'))lightboxImg.removeAttribute('src')},220)}lightbox.addEventListener('click',e=>{if(e.target===lightbox||e.target.closest('.lightbox-close'))closeLightbox()});document.addEventListener('keydown',e=>{if(e.key==='Escape'&&lightbox.classList.contains('open'))closeLightbox()});

const searchGo=document.querySelector('#heroSearchGo');
if(searchGo){searchGo.addEventListener('click',()=>runSearch(search.value||''));}

const admissionRows=[
 {province:'浙江',track:'综合改革',year:2025,min:539,group:'普通类最低分',source:'2025 浙江录取情况',majors:[
  ['计算机科学与技术',573],['数据科学与大数据技术',564],['电气工程及其自动化',562],['信息与计算科学',562],['机械设计制造及其自动化',552],['国际商务',553],['电子商务',551],['物流管理',551],['生物工程',548],['建筑学',544],['化学工程与工艺',542],['土木工程',540],['高分子材料与工程',539]
 ]},
 {province:'安徽',track:'历史方向',year:2025,min:548,group:'101（历史+不限）',source:'2025 外省录取情况'},
 {province:'安徽',track:'物理方向（不限）',year:2025,min:546,group:'001（物理+不限）',source:'2025 外省录取情况'},
 {province:'安徽',track:'物理方向（化学）',year:2025,min:549,group:'002（物理+化学）',source:'2025 外省录取情况'},
 {province:'福建',track:'物理方向（不限）',year:2025,min:530,group:'999（物理+不限）',source:'2025 外省录取情况'},
 {province:'福建',track:'物理方向（化学）',year:2025,min:538,group:'500（物理+化学）',source:'2025 外省录取情况'},
 {province:'广东',track:'物理方向（化学）',year:2025,min:540,group:'204（物理+化学）',source:'2025 外省录取情况'},
 {province:'广东',track:'历史方向（中外合作）',year:2025,min:515,group:'203（历史+不限，中外合作办学）',source:'2025 外省录取情况'},
 {province:'广西',track:'历史方向',year:2025,min:523,group:'101（历史+不限）',source:'2025 外省录取情况'},
 {province:'广西',track:'物理方向（不限）',year:2025,min:493,group:'103（物理+不限）',source:'2025 外省录取情况'},
 {province:'广西',track:'物理方向（化学）',year:2025,min:484,group:'102（物理+化学）',source:'2025 外省录取情况'},
 {province:'河南',track:'历史方向',year:2025,min:565,group:'101（历史+不限）',source:'2025 外省录取情况'},
 {province:'河南',track:'物理方向（不限）',year:2025,min:567,group:'103（物理+不限）',source:'2025 外省录取情况'},
 {province:'河南',track:'物理方向（化学）',year:2025,min:570,group:'102（物理+化学）',source:'2025 外省录取情况'},
 {province:'河北',track:'物理方向',year:2025,min:538,group:'物理类',source:'2025 外省录取情况'},
 {province:'重庆',track:'物理方向',year:2025,min:505,group:'物理类',source:'2025 外省录取情况'},
 {province:'贵州',track:'物理方向',year:2025,min:467,group:'物理类',source:'2025 外省录取情况'},
 {province:'四川',track:'理科',year:2025,min:527,group:'本科批理科',source:'2025 外省录取情况'},
 {province:'新疆',track:'理科',year:2025,min:409,group:'本科批理科',source:'2025 外省录取情况'}
];
const allAdmissionProvinces=['浙江','安徽','福建','广东','广西','河南','河北','重庆','贵州','四川','新疆','江苏','江西','湖北','湖南','山东','山西','陕西','云南','甘肃','黑龙江','辽宁','吉林','内蒙古','宁夏','青海','西藏','海南','北京','天津','上海'];
const provinceSelect=document.querySelector('#admissionProvince'),trackSelect=document.querySelector('#admissionTrack'),admissionForm=document.querySelector('#admissionForm'),admissionResult=document.querySelector('#admissionResult');
function unique(arr){return [...new Set(arr)]}
function fillAdmissionProvinces(){if(!provinceSelect)return;provinceSelect.innerHTML=allAdmissionProvinces.map(p=>`<option value="${p}">${p}</option>`).join('');provinceSelect.value='浙江';fillAdmissionTracks();}
function fillAdmissionTracks(){if(!trackSelect||!provinceSelect)return;const rows=admissionRows.filter(x=>x.province===provinceSelect.value);const tracks=rows.length?unique(rows.map(x=>x.track)):['物理方向','历史方向','综合改革','理科','文科'];trackSelect.innerHTML=tracks.map(t=>`<option value="${t}">${t}</option>`).join('');}
function trackAdvice(track){if(track.includes('化学'))return '你选择的是物理化学方向，可优先核对计算机、电气、机械、材料、化工、生物工程等专业组；具体能报哪些专业以当年招生计划为准。';if(track.includes('物理'))return '你选择的是物理方向，可关注工科、经管类和不限选科专业组；若想冲热门专业，建议同时看位次和专业计划数。';if(track.includes('历史'))return '你选择的是历史方向，可优先关注不限选科或中外合作专业组；专业选择要重点核对当年是否在本省投放计划。';if(track.includes('综合'))return '浙江等综合改革省份建议直接按专业最低分对照，热门专业通常要高出学校最低分不少。';return '请同时核对省考试院招生计划、选科要求和位次，分数只能作为第一层参考。';}
function renderAdmission(e){if(e)e.preventDefault();if(!admissionResult||!provinceSelect||!trackSelect)return;const score=Number(document.querySelector('#admissionScore').value);const row=admissionRows.find(x=>x.province===provinceSelect.value&&x.track===trackSelect.value);let html='';if(!row){html='<span class="result-chip chance">数据待录入</span><h3>这个省份/方向还没有结构化到查询器里</h3><p>建议先打开上方“2025 外省录取情况”核对官方表格，或把省份和分数发给学长单独判断。后续可以继续把各省专业组逐步录入。</p>';admissionResult.classList.remove('updated');void admissionResult.offsetWidth;admissionResult.classList.add('updated');admissionResult.innerHTML=html;return;}if(!score){admissionResult.innerHTML='<span class="result-chip">先输入分数</span><h3>请输入你的高考分数</h3><p>选择省份和物理/历史方向后，系统会按官方往年最低投档线给出参考。</p>';return;}const gap=score-row.min;let chip='risk',label='风险较高',title='今年直接冲学校风险较高';if(gap>=15){chip='safe';label='相对稳妥';title='从往年最低线看，冲学校比较有底气';}else if(gap>=5){chip='safe';label='有机会';title='超过往年最低线，建议继续看位次和专业热度';}else if(gap>=0){chip='chance';label='压线可冲';title='接近往年最低线，适合放在冲一冲位置';}else if(gap>=-10){chip='chance';label='冲刺谨慎';title='距离往年最低线不远，但不建议作为保底';}
let majorHtml='';if(row.majors){const available=row.majors.filter(m=>score>=m[1]).sort((a,b)=>b[1]-a[1]);const close=row.majors.filter(m=>score<m[1]&&score>=m[1]-8).sort((a,b)=>a[1]-b[1]);if(available.length){majorHtml+=`<li>按已录入的浙江专业最低分，你可重点看：${available.slice(0,6).map(m=>`${m[0]}（${m[1]}）`).join('、')}。</li>`;}if(close.length){majorHtml+=`<li>可以尝试冲：${close.slice(0,4).map(m=>`${m[0]}（${m[1]}）`).join('、')}，但要结合位次。</li>`;}if(!available.length){majorHtml+='<li>你的分数暂未达到已录入专业最低分，建议谨慎填报并重点看同位次院校。</li>';}}else{majorHtml=`<li>${trackAdvice(row.track)}</li><li>该省当前先按专业组最低分判断，专业级最低分建议继续核对官方招生计划或咨询学长。</li>`;}
html=`<span class="result-chip ${chip}">${label} · ${row.year}年参考</span><h3>${title}</h3><p>${provinceSelect.value} ${row.track}：${row.group} 往年最低投档分 ${row.min}，你的分数 ${score}，相差 ${gap>=0?'+':''}${gap} 分。</p><ul>${majorHtml}<li>重要提醒：志愿填报还要看一分一段位次、当年招生计划、选科要求和省考试院投档规则，本工具只做前置参考。</li></ul><p class="admission-footnote">来源：浙大宁波理工学院招生网《${row.source}》。</p>`;admissionResult.classList.remove('updated');void admissionResult.offsetWidth;admissionResult.classList.add('updated');admissionResult.innerHTML=html;}
fillAdmissionProvinces();if(provinceSelect)provinceSelect.addEventListener('change',fillAdmissionTracks);if(admissionForm)admissionForm.addEventListener('submit',renderAdmission);
