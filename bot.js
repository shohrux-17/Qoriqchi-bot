// Qoʻriqchi Telegram boti. Bitta fayl. Ishga tushirish: node --env-file=.env bot.js
// Tekshiruv qoidalari ilovadagi bilan bir xil (ilova kodidan avtomatik olingan).
'use strict';

// ---- ilova bilan umumiy tekshiruv qoidalari ----
const T={
uz:{tag:"Havola, SMS, ilova va QR kodni ochishdan oldin tekshiring.",fam:"Oddiy rejim",tabs:["Universal","Havola","SMS","Ilova (APK)","QR kod","AI yordamchi","Yordam"],
 phL:"Havola yoki @kanal nomini kiriting",phS:"Kelgan SMS matnini shu yerga qoʻying",phA:"Ilova nomi",chk:"Tekshirish",
 v0:"Belgi topilmadi",v:["Xavfsiz","Ehtiyot boʻling","Xavfli"],a:["Shubhali belgi topilmadi. Baribir ehtiyot boʻling.","Shubhali belgilar bor. Ochmang va maʼlumot kiritmang.","Kirmang va hech narsa yubormang. Firibgarlik ehtimoli yuqori."],
 disc:"Bu faqat shakl tahlili. VirusTotal va Google Safe Browsing bazalari keyingi bosqichda ulanadi.",
 bad:"Havola notoʻgʻri koʻrinadi.",empty:"Avval matn kiriting.",cat:"Ilova turi",src:"Qayerdan olindi",perm:"Ilova qaysi ruxsatlarni soʻraydi?",
 cats:["Fonar","Oʻyin","Kalkulyator","Rasm/oboy","Messenjer","Bank/toʻlov","Boshqa"],srcs:["Play Market","Sayt","Telegram fayli"],
 pm:["SMS oʻqish","Kontaktlar","Maxsus imkoniyatlar (Accessibility)","Qurilma administratori","Boshqa ilovalar ustida chizish","Ilova oʻrnatish","Kamera","Mikrofon","Joylashuv","Qoʻngʻiroqlar tarixi","Fayllar"],
 qrT:"QR kod rasmini tanlang yoki suratga oling. Ichidagi havola tekshiriladi.",qrNo:"QR kod topilmadi.",qrUn:"Bu brauzer QR oʻqishni qoʻllamaydi. Havolani qoʻlda kiriting.",
 chatPh:"Savol yozing…",send:"Yuborish",hello:"Salom! Men Qoʻriqchiman. Xavfsizlik haqida istalgan savolni bering.",cerr:"AI yordamchi hozir mavjud emas yoki ruxsat berilmadi.",
 sys:"Oʻzbek tilida",
 tipsH:"Firibgarlikdan saqlanish",
 tips:[["SMS kodni hech kimga aytmang","Bank xodimi ham, “Click” ham SMS kodni soʻramaydi."],["“Yutuq” va “bonus” xabarlariga ishonmang","Yutish uchun toʻlov yoki karta raqami soʻralsa, bu firibgarlik."],["Havolaning manzilini koʻring","click.uz oʻrniga cl1ck-uz.top kabi nomlar soxta."],["Telegramdagi APK fayllarni oʻrnatmang","Faqat Play Market yoki rasmiy sayt."],["Shoshiltirsa, toʻxtang","“24 soatda bloklanadi” kabi gaplar bosim oʻtkazish usuli. Bankka oʻzingiz qoʻngʻiroq qiling."]],
 R:{http:"Aloqa shifrlanmagan (http).",ip:"Sayt nomi oʻrniga IP-manzil ishlatilgan.",puny:"Domen yashirin belgilar (xn--) bilan yozilgan, soxta boʻlishi mumkin.",tld:"Firibgarlikda koʻp ishlatiladigan domen zonasi.",sub:"Subdomenlar juda koʻp.",at:"Havolada @ belgisi bor, haqiqiy manzil yashirilgan.",long:"Havola juda uzun.",brand:"Mashhur nom ({b}) bor, lekin bu rasmiy sayt emas.",kw:"Shubhali soʻzlar: {k}.",short:"Qisqartirilgan havola, haqiqiy manzil koʻrinmaydi.",hyph:"Domenda defislar koʻp.",tg:"Telegram manzilida firibgarlik belgilari bor.",tgn:"Telegram kanal/bot egasini tekshirib boʻlmaydi.",off:"Rasmiy domenlar roʻyxatida bor.",none:"Shakl boʻyicha shubhali belgi topilmadi.",
  code:"Kod, PIN yoki parol soʻralmoqda.",urg:"Shoshiltirish va qoʻrqitish belgisi.",prz:"Yutuq yoki sovgʻa va’dasi.",mny:"Pul oʻtkazish soʻralmoqda.",card:"Karta maʼlumotlari tilga olingan.",lnk:"Xabardagi havola shubhali.",adv:"Kredit va oldindan toʻlov talabi: firibgarlik belgisi.",cb:"Pul yechilgani haqida xabar va qoʻngʻiroq qilish talabi: keng tarqalgan firibgarlik usuli.",job:"Tez va oson daromad vaʼdasi, Telegram/WhatsApp orqali.",scheme:"Bu oddiy sayt havolasi emas, xavfli boʻlishi mumkin.",emp:"Bank xodimi deb tanishtirilmoqda.",otp:"Bu oddiy bir martalik kod xabariga oʻxshaydi. Kodni hech kimga aytmang.",
  perm:"“{p}” ruxsati “{c}” ilovasiga keraksiz.",permd:"“{p}” ruxsati juda xavfli.",s1:"Sayt orqali olingan ilova.",s2:"Telegramdan kelgan fayl.",okapk:"Ruxsatlar va manba odatiy."}},
ru:{tag:"Проверяйте ссылки, SMS, приложения и QR-коды перед открытием.",fam:"Простой режим",tabs:["Универсальная","Ссылка","SMS","Приложение (APK)","QR-код","ИИ-помощник","Помощь"],
 phL:"Введите ссылку или @канал",phS:"Вставьте текст полученного SMS",phA:"Название приложения",chk:"Проверить",
 v0:"Признаков нет",v:["Безопасно","Осторожно","Опасно"],a:["Подозрительных признаков нет. Всё равно будьте внимательны.","Есть подозрительные признаки. Не открывайте и не вводите данные.","Не заходите и ничего не отправляйте. Высокий риск мошенничества."],
 disc:"Это только анализ формы. Базы VirusTotal и Google Safe Browsing подключим на следующем этапе.",
 bad:"Ссылка выглядит неверно.",empty:"Сначала введите текст.",cat:"Тип приложения",src:"Откуда получено",perm:"Какие разрешения запрашивает приложение?",
 cats:["Фонарик","Игра","Калькулятор","Обои","Мессенджер","Банк/платежи","Другое"],srcs:["Play Маркет","Сайт","Файл из Telegram"],
 pm:["Чтение SMS","Контакты","Специальные возможности (Accessibility)","Администратор устройства","Поверх других приложений","Установка приложений","Камера","Микрофон","Геолокация","Журнал звонков","Файлы"],
 qrT:"Выберите изображение QR-кода или сфотографируйте. Ссылка внутри будет проверена.",qrNo:"QR-код не найден.",qrUn:"Браузер не умеет читать QR. Введите ссылку вручную.",
 chatPh:"Напишите вопрос…",send:"Отправить",hello:"Здравствуйте! Я Qoʻriqchi. Задайте любой вопрос о безопасности.",cerr:"ИИ-помощник сейчас недоступен или доступ не разрешён.",
 sys:"по-русски",tipsH:"Как не попасться мошенникам",
 tips:[["Никому не сообщайте SMS-код","Ни сотрудник банка, ни Click код не спрашивают."],["Не верьте «выигрышам» и «бонусам»","Если просят оплату или номер карты, это обман."],["Смотрите адрес ссылки","Вместо click.uz адрес вроде cl1ck-uz.top поддельный."],["Не ставьте APK из Telegram","Только Play Маркет или официальный сайт."],["Если торопят, остановитесь","«Заблокируем через 24 часа» это давление. Позвоните в банк сами."]],
 R:{http:"Соединение не зашифровано (http).",ip:"Вместо имени сайта используется IP-адрес.",puny:"Домен записан скрытыми символами (xn--), возможна подделка.",tld:"Доменная зона, часто используемая мошенниками.",sub:"Слишком много поддоменов.",at:"В ссылке есть @, настоящий адрес скрыт.",long:"Слишком длинная ссылка.",brand:"Есть известное имя ({b}), но это не официальный сайт.",kw:"Подозрительные слова: {k}.",short:"Сокращённая ссылка, реальный адрес не виден.",hyph:"Много дефисов в домене.",tg:"В адресе Telegram есть признаки обмана.",tgn:"Владельца Telegram-канала или бота проверить нельзя.",off:"Есть в списке официальных доменов.",none:"По форме подозрительных признаков нет.",
  code:"Просят код, PIN или пароль.",urg:"Признаки спешки и запугивания.",prz:"Обещание выигрыша или подарка.",mny:"Просят перевести деньги.",card:"Упомянуты данные карты.",lnk:"Ссылка в сообщении подозрительна.",adv:"Кредит и требование предоплаты: признак мошенничества.",cb:"Сообщение о списании и просьба позвонить: распространённая схема мошенников.",job:"Обещание лёгкого заработка через Telegram/WhatsApp.",scheme:"Это не обычная ссылка на сайт, может быть опасна.",emp:"Представляются сотрудником банка.",otp:"Похоже на обычное сообщение с одноразовым кодом. Никому не сообщайте код.",
  perm:"Разрешение «{p}» не нужно приложению «{c}».",permd:"Разрешение «{p}» очень опасно.",s1:"Приложение с сайта.",s2:"Файл из Telegram.",okapk:"Разрешения и источник обычные."}},
en:{tag:"Check links, SMS, apps and QR codes before you open them.",fam:"Simple mode",tabs:["Universal","Link","SMS","App (APK)","QR code","AI helper","Help"],
 phL:"Enter a link or @channel",phS:"Paste the SMS text you received",phA:"App name",chk:"Check",
 v0:"No signs found",v:["Safe","Be careful","Dangerous"],a:["No warning signs found. Stay alert anyway.","Some warning signs. Don’t open it or enter any data.","Don’t enter and don’t send anything. High scam risk."],
 disc:"This is a form-only analysis. VirusTotal and Google Safe Browsing databases come in the next stage.",
 bad:"The link looks invalid.",empty:"Enter some text first.",cat:"App type",src:"Where it came from",perm:"Which permissions does the app ask for?",
 cats:["Flashlight","Game","Calculator","Wallpaper","Messenger","Bank/payments","Other"],srcs:["Play Store","Website","Telegram file"],
 pm:["Read SMS","Contacts","Accessibility service","Device administrator","Draw over other apps","Install apps","Camera","Microphone","Location","Call log","Files"],
 qrT:"Pick a QR code image or take a photo. The link inside will be checked.",qrNo:"No QR code found.",qrUn:"This browser can’t read QR codes. Enter the link manually.",
 chatPh:"Type a question…",send:"Send",hello:"Hi! I’m Qoʻriqchi. Ask me anything about staying safe.",cerr:"The AI helper is unavailable right now, or access was not granted.",
 sys:"in English",tipsH:"How to avoid scams",
 tips:[["Never share an SMS code","Neither bank staff nor Click will ask for it."],["Don’t trust “prizes” and “bonuses”","If they ask for payment or a card number, it’s a scam."],["Read the link address","Instead of click.uz, a name like cl1ck-uz.top is fake."],["Don’t install APKs from Telegram","Use the Play Store or the official site."],["If they rush you, stop","“Blocked in 24 hours” is pressure. Call your bank yourself."]],
 R:{http:"Connection is not encrypted (http).",ip:"An IP address is used instead of a site name.",puny:"Domain uses hidden characters (xn--), may be fake.",tld:"Domain zone often used in scams.",sub:"Too many subdomains.",at:"The link contains @, the real address is hidden.",long:"The link is very long.",brand:"Uses a well-known name ({b}) but isn’t its official site.",kw:"Suspicious words: {k}.",short:"Shortened link, the real address is hidden.",hyph:"Many hyphens in the domain.",tg:"The Telegram address shows scam signs.",tgn:"Can’t verify who owns this Telegram channel or bot.",off:"Found in the official domain list.",none:"No suspicious signs in the link’s form.",
  code:"Asks for a code, PIN or password.",urg:"Signs of pressure and threats.",prz:"Promises a prize or gift.",mny:"Asks you to transfer money.",card:"Mentions card details.",lnk:"The link in the message is suspicious.",adv:"A loan plus an upfront-fee request: a scam sign.",cb:"Debit alert asking you to call back: a common scam pattern.",job:"Promises easy income via Telegram/WhatsApp.",scheme:"This isn’t a normal website link and may be dangerous.",emp:"Claims to be a bank employee.",otp:"Looks like a normal one-time code message. Never share the code.",
  perm:"The “{p}” permission isn’t needed by a “{c}” app.",permd:"The “{p}” permission is very dangerous.",s1:"App obtained from a website.",s2:"File received via Telegram.",okapk:"Permissions and source look normal."}}
};
let lang="uz";try{lang=localStorage.getItem("lang")||"uz"}catch(e){}
const t=()=>T[lang];
const OFF=["google.com","youtube.com","telegram.org","click.uz","payme.uz","uzum.uz","gov.uz","lex.uz","uzcard.uz","humo.uz","paynet.uz","nbu.uz","kapitalbank.uz","sqb.uz","ipoteka.uz","xb.uz","aloqabank.uz","infinbank.uz","apple.com","microsoft.com","facebook.com","instagram.com","wikipedia.org","anthropic.com","claude.ai","googleusercontent.com","googleapis.com","gstatic.com","googlevideo.com","telegram.me","github.com","amazon.com","whatsapp.com","whatsapp.net","paypal.com","paypal.me","mygov.uz","xalqbank.uz","icloud.com","fb.com","meta.com","messenger.com","olx.uz","soliq.uz","beeline.uz","ucell.uz","uztelecom.uz","mobiuz.uz","asakabank.uz","agrobank.uz","hamkorbank.uz","anorbank.uz","tbcbank.uz","visa.com","mastercard.com","tiktok.com","gmail.com","binance.com","coinbase.com","metamask.io","yandex.ru","yandex.com","yandex.uz","ya.ru","humocard.uz","uzumbank.uz","click.me","payme.me","youtu.be","google.org","yandex.taxi","yandex.kz","yandex.by","yandex.net","yandex.eu","yandex.go","yandex.cloud","tiktokcdn.com","googlevideo.com","ytimg.com"];
const BR=["click","payme","uzum","humo","uzcard","paynet","kapitalbank","ipoteka","xalqbank","nbu","sqb","telegram","google","facebook","instagram","apple","paypal","mygov","gov-uz","govuz","soliq","olx","beeline","ucell","uztelecom","mobiuz","asakabank","agrobank","hamkorbank","anorbank","tbcbank","visa","mastercard","whatsapp","tiktok","gmail","icloud","binance","metamask","coinbase","yandex"];
const BADTLD=["xyz","top","click","tk","ml","ga","cf","gq","icu","buzz","cyou","monster","rest","sbs","cfd"];
const SHORT=["bit.ly","tinyurl.com","t.co","cutt.ly","is.gd","goo.gl","clck.ru","rb.gy","shorturl.at"];
const KW=["login","verify","secure","bonus","gift","prize","win","claim","update","confirm","wallet","airdrop","free","sovga","yutuq","aksiya","kredit"];
const isOff=h=>OFF.some(d=>h===d||h.endsWith("."+d))||(/(^|\.)google\.(com?\.)?[a-z]{2}$/.test(h)&&!BADTLD.includes(h.split(".").pop()));
function lvl(s,r,y){return s>=r?2:s>=y?1:0}

function analyzeLink(raw){
 let s=raw.trim(),R=[],sc=0;
 if(!s)return null;
 if(/^@[\w]{3,}$/.test(s))s="https://t.me/"+s.slice(1);
 if(/^(javascript|data|vbscript|file|blob):/i.test(s))return fin(5,[{k:"scheme"}],4,2);
 if(/^(mailto|tel|sms|ftp|sftp):/i.test(s))return {bad:true};
 const typedHttp=/^http:\/\//i.test(s);
 if(!/^[a-z][a-z0-9+.-]*:\/\//i.test(s))s="https://"+s;
 let u;try{u=new URL(s)}catch(e){return {bad:true}}
 if(!/^https?:$/.test(u.protocol))return {bad:true};
 const h=u.hostname.toLowerCase().replace(/\.$/,"").replace(/^www\.(?=t\.me$|telegram\.me$)/,"");
 if(!h.includes(".")&&!/^\[/.test(h))return {bad:true};
 const add=(k,w,x)=>{R.push({k,x});sc+=w};
 if(h==="t.me"||h==="telegram.me"){
  if(/(bonus|gift|giveaway|admin|support|vip|airdrop|crypto|click|payme|uzum|kredit|yutuq)/i.test(u.pathname))add("tg",3);else add("tgn",2);
  return fin(sc,R,5,2);
 }
 if(isOff(h)&&!/@/.test(u.href.split(u.host)[0]+u.username)){R.push({k:"off"});if(typedHttp){add("http",1)}{const f=fin(typedHttp?1:0,R,5,2);f.known=!typedHttp;return f}}
 if(typedHttp)add("http",1);
 if(/^\d{1,3}(\.\d{1,3}){3}$/.test(h)||/^\[/.test(h))add("ip",/^(10\.|192\.168\.|127\.|172\.(1[6-9]|2\d|3[01])\.)/.test(h)?3:4);
 if(h.includes("xn--"))add("puny",3);
 const parts=h.split(".");
 if(BADTLD.includes(parts[parts.length-1]))add("tld",2);
 if(parts.length>4)add("sub",1);
 if(u.username||/@/.test(s.split("?")[0].replace(/^[a-z]+:\/\//i,"").split("/")[0]))add("at",5);
 if(s.length>90)add("long",1);
 if(SHORT.includes(h))add("short",2);
 if((h.match(/-/g)||[]).length>=2)add("hyph",1);
 const variants=[h,h.replace(/1/g,"i"),h.replace(/1/g,"l")].map(x=>x.replace(/0/g,"o").replace(/3/g,"e").replace(/5/g,"s").replace(/\$/g,"s")).flatMap(x=>[x,x.replace(/-/g,"")]);
 const od=OFF.find(d=>new RegExp("(^|[^a-z0-9])"+d.replace(/\./g,"\\.")).test(h));
 const b=od||BR.find(x=>variants.some(v=>new RegExp("(^|[.-])"+x+"(?:(?![a-z])|uz|pay|bank|app|id|online|support|secure|login|verify|bonus|wallet|card|team|help|service)").test(v)));
 if(b)add("brand",4,{b});
 const sh=h.split(/[.\-0-9]+/),sp=(u.pathname+u.search).toLowerCase().split(/[\/\-_.?=&0-9]+/);
 const kh=KW.filter(k=>sh.includes(k)),kp=KW.filter(k=>!kh.includes(k)&&sp.includes(k));
 if(kh.length||kp.length)add("kw",Math.min(kh.length,3)+Math.min(kp.length,1),{k:[...kh,...kp].slice(0,4).join(", ")});
 if(!R.length)R.push({k:"none"});
 return fin(sc,R,4,2);
}
function fin(sc,R,r,y){return {sc,R,level:lvl(sc,r,y)}}
function txt(R){return R.map(o=>{if(o.raw)return o.raw;let m=t().R[o.k];if(o.x)for(const k in o.x)m=m.replace("{"+k+"}",o.x[k]);return m})}

function analyzeSms(raw){
 const s=raw.trim();if(!s)return null;
 let sc=0,R=[];const add=(k,w)=>{R.push({k});sc+=w};
 const low=s.toLowerCase();
 const low2=low.replace(/(do not share|don.t share|never share|hech kimga[^.]*|никому[^.]*)/g,"");
 const safeNote=/(hech kimga|никому|do not share|don.t share|never share)/.test(low);
 const hasCode=/(kod|код|otp|pin|cvv|parol|парол|code)/.test(low);
 const asks=/(ayting|yuboring|kiriting|bering|сообщите|назовите|отправьте|send|tell|share|enter|provide|айтинг|юборинг|киритинг|беринг)/.test(low2);
 if(hasCode&&safeNote&&!/https?:|www\.|\.[a-z]{2,}\//.test(low))add("otp",0);
 else if(hasCode&&asks)add("code",5);
 if(/(bloklan|zudlik|tezda|shoshiling|24 soat|срочно|заблокир|блокл|блокир|немедленно|urgent|immediately|suspended|blocked|within 24)/.test(low))add("urg",2);
 if(/(yechil|списан|снят|debited|withdrawn)/.test(low)&&/(qo.ng.iroq|bekor qil|позвон|звоните|отмен|call)/.test(low))add("cb",5);
 if(/(ish taklifi|daromad|kuniga|работа|заработок|вакансия|job offer|work from home|per day)/.test(low)&&/(telegram|@|t\.me|whatsapp|watsap)/.test(low))add("job",3);
 if(/(kredit|кредит|loan)/.test(low)&&/(pul o.tkaz|o.tkazib|to.lov qil|перевед|оплатите|страховк|pay now|fee)/.test(low))add("adv",2);
 if(/(bank xodim|сотрудник банка|bank employee|bank operator)/.test(low))add("emp",2);
 if(/(yutdingiz|ютдингиз|ютуқ|совға|yutuq|sovg.a|bonus|выигр|приз|подарок|вы победили|\bwon\b|prize|gift|lottery|reward)/.test(low))add("prz",3);
 if(/(pul o.tkaz|o.tkazib|перевед|перевод на|transfer|send money|perevedi|dengi na|pul tashlab|pul otkaz|to.lov qiling|оплатите|pay now)/.test(low))add("mny",3);
 if(/(kart|карт|card number)/.test(low)&&!safeNote)add("card",asks?5:1);
 const m=s.match(/(https?:\/\/\S+|www\.\S+|\b[\w-]+(\.[\w-]+)*\.(uz|com|ru|net|org|xyz|top|click|me|ly|tk|icu)\S*)/i);
 if(m){const a=analyzeLink(m[0].replace(/[.,;)]+$/,""));if(a&&!a.bad&&a.sc>=2)add("lnk",a.level===2?5:Math.min(a.sc,4))}
 if(!R.length)R.push({k:"none"});
 const o=fin(sc,R,5,2);o.known=R.some(x=>x.k==="otp");return o;
}

const W={sms:4,contacts:1,access:5,admin:5,overlay:4,install:4,camera:1,mic:1,loc:1,calls:2,storage:0.5};
const PID=["sms","contacts","access","admin","overlay","install","camera","mic","loc","calls","storage"];
const DANGER=["access","admin","overlay","install"];
const OKP=[["camera"],["storage","loc"],[],["storage"],["contacts","camera","mic","storage","loc"],["sms","camera","contacts","storage"],["camera","storage"]];
function analyzeApk(){
 const cat=+$("#s-cat").value,src=+$("#s-src").value;let sc=0,R=[];
 PID.forEach((id,i)=>{if(!document.getElementById("pm"+i).checked)return;
  const name=t().pm[i],c=t().cats[cat];
  if(DANGER.includes(id)){sc+=W[id];R.push({k:"permd",x:{p:name}})}
  else if(!OKP[cat].includes(id)){sc+=W[id];if(W[id]>=1)R.push({k:"perm",x:{p:name,c}})}
 });
 if(src===1){sc+=2;R.push({k:"s1"})}
 if(src===2){sc+=3;R.push({k:"s2"})}
 if(!R.length)R.push({k:"okapk"});
 return fin(sc,R,4,1);
}


const U={uz:{ph:"SMS, havola yoki matnni shu yerga qoʻying (yoki skrinshot/fayl tanlang)",pick:"📎 Fayl yoki skrinshot (APK, PDF, rasm)",ai:"AI bilan tushuntirish",aiWait:"AI oʻylayapti…",kinds:{link:"Havola",sms:"SMS",apk:"APK",pdf:"PDF",img:"Rasm",file:"Fayl"},
 r:{apkf:"Bu rasmiy doʻkondan emas, APK fayl. Telegram yoki SMS orqali kelgan APK deyarli doim xavfli.",lure:"Fayl nomi aldamchi: rasm, taklifnoma yoki bonus kabi bahona.",dbl:"Qoʻsh kengaytma (masalan rasm.jpg.apk): bu rasm emas, ilova!",hash:"Fayl izi (SHA-256): {h}",nozip:"Fayl haqiqiy APK tuzilmasiga ega emas.",nomf:"APK ichida asosiy maʼlumot fayli topilmadi.",bundle:"Bu paket (xapk/apks) ichida bir nechta ilova bor, ruxsatlarni oʻqib boʻlmadi.",perms:"Xavfli ruxsatlar: {p}.",trojan:"SMS oʻqish va ekran/bildirishnomalarni boshqarish birga: bank troyanining klassik belgisi.",big:"Fayl juda katta, toʻliq tekshirilmadi.",notpdf:"Fayl PDF emas yoki buzilgan.",pdfl:"PDF dastur ishga tushirishga urinadi.",pdfjs:"PDF ichida JavaScript kodi bor.",pdfa:"PDF ochilganda avtomatik amal bajariladi.",pdfe:"PDF ichiga boshqa fayl yashirilgan.",pdfu:"PDF ichidagi shubhali havola: {u}",pdfx:"PDFning bir qismi siqilgan, toʻliq koʻrib boʻlmadi.",qrin:"QR kod ichida: {u}",ocr:"Rasmdagi matn AI orqali oʻqildi va tekshirildi.",noai:"Rasmdan matnni oʻqish uchun AI kerak. Faqat QR tekshirildi.",unk:"Bu fayl turi tekshirilmaydi. Notanish faylni ochmang."}},
ru:{ph:"Вставьте SMS, ссылку или текст (или выберите скриншот/файл)",pick:"📎 Файл или скриншот (APK, PDF, изображение)",ai:"Объяснить с помощью ИИ",aiWait:"ИИ думает…",kinds:{link:"Ссылка",sms:"SMS",apk:"APK",pdf:"PDF",img:"Изображение",file:"Файл"},
 r:{apkf:"Это APK-файл не из официального магазина. APK из Telegram или SMS почти всегда опасен.",lure:"Название файла обманчиво: фото, приглашение или бонус.",dbl:"Двойное расширение (например фото.jpg.apk): это не картинка, а приложение!",hash:"Отпечаток файла (SHA-256): {h}",nozip:"Файл не имеет структуры настоящего APK.",nomf:"Внутри APK не найден главный файл описания.",bundle:"Это пакет (xapk/apks) с несколькими приложениями, разрешения прочитать не удалось.",perms:"Опасные разрешения: {p}.",trojan:"Чтение SMS вместе с управлением экраном/уведомлениями: классический признак банковского трояна.",big:"Файл слишком большой, проверка неполная.",notpdf:"Файл не PDF или повреждён.",pdfl:"PDF пытается запустить программу.",pdfjs:"Внутри PDF есть JavaScript.",pdfa:"При открытии PDF выполняется автоматическое действие.",pdfe:"Внутри PDF спрятан другой файл.",pdfu:"Подозрительная ссылка в PDF: {u}",pdfx:"Часть PDF сжата, полностью просмотреть не удалось.",qrin:"Внутри QR-кода: {u}",ocr:"Текст на изображении прочитан ИИ и проверен.",noai:"Для чтения текста с изображения нужен ИИ. Проверен только QR.",unk:"Этот тип файла не проверяется. Не открывайте незнакомые файлы."}},
en:{ph:"Paste an SMS, link or text here (or pick a screenshot/file)",pick:"📎 File or screenshot (APK, PDF, image)",ai:"Explain with AI",aiWait:"AI is thinking…",kinds:{link:"Link",sms:"SMS",apk:"APK",pdf:"PDF",img:"Image",file:"File"},
 r:{apkf:"This is an APK file, not from an official store. An APK received via Telegram or SMS is almost always dangerous.",lure:"The file name is deceptive: a photo, invitation or bonus excuse.",dbl:"Double extension (e.g. photo.jpg.apk): it’s an app, not a picture!",hash:"File fingerprint (SHA-256): {h}",nozip:"The file doesn’t have a real APK structure.",nomf:"No main manifest found inside the APK.",bundle:"This package (xapk/apks) holds several apps; permissions couldn’t be read.",perms:"Dangerous permissions: {p}.",trojan:"Reading SMS plus control over the screen/notifications: a classic banking-trojan sign.",big:"The file is too large, only partly checked.",notpdf:"The file isn’t a PDF or is corrupted.",pdfl:"The PDF tries to launch a program.",pdfjs:"The PDF contains JavaScript.",pdfa:"The PDF runs an action automatically on open.",pdfe:"Another file is hidden inside the PDF.",pdfu:"Suspicious link inside the PDF: {u}",pdfx:"Part of the PDF is compressed and couldn’t be fully inspected.",qrin:"Inside the QR code: {u}",ocr:"Text in the image was read by AI and checked.",noai:"Reading text from an image needs AI. Only the QR was checked.",unk:"This file type isn’t checked. Don’t open unknown files."}}};
const ut=(k,x)=>{let m=U[lang].r[k];if(x)for(const q in x)m=m.replace("{"+q+"}",()=>x[q]);return m};
const urlRe=/(https?:\/\/[^\s<>"')]+|www\.[^\s<>"')]+|\b[\w-]+(?:\.[\w-]+)*\.(?:uz|com|ru|net|org|xyz|top|click|me|ly|tk|icu|info|online|site|shop|live|cc|to)\b(?:\/[^\s<>"')]*)?)/gi;
const urlsIn=x=>[...new Set((x.match(urlRe)||[]).map(v=>v.replace(/[.,;:!?]+$/,"")))].slice(0,4);
const PW={READ_SMS:4,RECEIVE_SMS:4,SEND_SMS:3,BIND_ACCESSIBILITY_SERVICE:5,BIND_DEVICE_ADMIN:5,SYSTEM_ALERT_WINDOW:3,REQUEST_INSTALL_PACKAGES:3,BIND_NOTIFICATION_LISTENER_SERVICE:4,READ_CALL_LOG:2,PROCESS_OUTGOING_CALLS:2,MANAGE_EXTERNAL_STORAGE:2,REQUEST_DELETE_PACKAGES:2,READ_CONTACTS:1,RECORD_AUDIO:1,READ_PHONE_STATE:1};
async function inflate(u8){const ds=new DecompressionStream("deflate-raw");const w=ds.writable.getWriter();w.write(u8);w.close();return new Uint8Array(await new Response(ds.readable).arrayBuffer())}
function zipDir(b,name){const dv=new DataView(b.buffer,b.byteOffset,b.byteLength);let e=-1;for(let i=b.length-22;i>=Math.max(0,b.length-65557);i--)if(dv.getUint32(i,true)===0x06054b50){e=i;break}
 if(e<0)return null;const n=dv.getUint16(e+10,true);let p=dv.getUint32(e+16,true);const names=[];let found=null;
 for(let i=0;i<n&&p+46<=b.length;i++){if(dv.getUint32(p,true)!==0x02014b50)break;const m=dv.getUint16(p+10,true),cs=dv.getUint32(p+20,true),nl=dv.getUint16(p+28,true),el=dv.getUint16(p+30,true),cl=dv.getUint16(p+32,true),off=dv.getUint32(p+42,true);const nm=new TextDecoder().decode(b.subarray(p+46,p+46+nl));names.push(nm);if(nm===name)found={m,cs,off};p+=46+nl+el+cl}
 return {names,found,dv}}
function permsFrom(m){const set=new Set();for(const d of [new TextDecoder("latin1").decode(m),new TextDecoder("utf-16le").decode(m),new TextDecoder("utf-16le").decode(m.subarray(1))])for(const x of d.matchAll(/android\.permission\.([A-Z_]+)/g))set.add(x[1]);return [...set]}
async function analyzeApkFile(f){
 const R=[{raw:ut("apkf")}];let sc=1;const n=f.name.toLowerCase();
 if(/\.(jpe?g|png|gif|pdf|mp4|docx?|xlsx?|txt|zip)\.(apk|xapk|apks)$/.test(n)){sc+=4;R.push({raw:ut("dbl")})}
 if(/(rasm|foto|photo|surat|taklif|to.y|wedding|invit|video|hujjat|document|akt|ariza|qarz|kredit|bonus|yutuq|click|payme|bank|update|yangilanish|obnov)/.test(n)){sc+=3;R.push({raw:ut("lure")})}
 if(f.size>150*1048576){R.push({raw:ut("big")});return {level:lvl(sc,5,1),sc,R}}
 const b=new Uint8Array(await f.arrayBuffer());
 try{const h=await crypto.subtle.digest("SHA-256",b);R.push({raw:ut("hash",{h:[...new Uint8Array(h)].map(x=>x.toString(16).padStart(2,"0")).join("")})})}catch(e){}
 if(b[0]!==0x50||b[1]!==0x4b){sc+=4;R.push({raw:ut("nozip")})}
 else{try{const z=zipDir(b,"AndroidManifest.xml");
  if(!z||!z.found){if(z&&z.names.some(x=>/\.apk$/i.test(x)))R.push({raw:ut("bundle")});else{sc+=2;R.push({raw:ut("nomf")})}}
  else{const o=z.found,nl=z.dv.getUint16(o.off+26,true),el=z.dv.getUint16(o.off+28,true),st=o.off+30+nl+el,raw=b.subarray(st,st+o.cs);
   const m=o.m===0?raw:o.m===8?await inflate(raw):null;
   if(m){const ps=permsFrom(m),bad=ps.filter(x=>PW[x]);let w=bad.reduce((a,x)=>a+PW[x],0);const has=x=>ps.includes(x);
    if((has("READ_SMS")||has("RECEIVE_SMS"))&&(has("BIND_ACCESSIBILITY_SERVICE")||has("SYSTEM_ALERT_WINDOW")||has("BIND_NOTIFICATION_LISTENER_SERVICE"))){w+=3;R.push({raw:ut("trojan")})}
    if(bad.length)R.push({raw:ut("perms",{p:bad.join(", ")})});sc+=w}}
 }catch(e){}}
 return {level:lvl(sc,5,1),sc,R}}
async function analyzePdf(f){
 if(f.size>50*1048576)return {level:0,sc:0,R:[{raw:ut("big")}]};
 const x=new TextDecoder("latin1").decode(new Uint8Array(await f.arrayBuffer()));const R=[];let sc=0;
 if(!/%PDF-/.test(x.slice(0,1024))){sc+=2;R.push({raw:ut("notpdf")})}
 if(/\/Launch\b/.test(x)){sc+=5;R.push({raw:ut("pdfl")})}
 if(/\/(JavaScript|JS)\b/.test(x)){sc+=3;R.push({raw:ut("pdfjs")})}
 if(/\/(OpenAction|AA)\b/.test(x)){sc+=1;R.push({raw:ut("pdfa")})}
 if(/\/EmbeddedFile\b/.test(x)){sc+=2;R.push({raw:ut("pdfe")})}
 for(const u of [...new Set([...x.matchAll(/\/URI\s*\(([^)]{4,200})\)/g)].map(m=>m[1]))].slice(0,3)){const a=analyzeLink(u);if(a&&!a.bad&&a.level>=1){sc+=Math.min(a.sc,4);R.push({raw:ut("pdfu",{u:u.slice(0,60)})})}}
 if(/\/ObjStm\b/.test(x))R.push({raw:ut("pdfx")});
 if(!R.length)R.push({k:"none"});
 return {level:lvl(sc,5,2),sc,R}}
async function ocrImage(f){
 try{const sm=window.claude?await window.claude.use("sample"):null;if(sm&&sm.limits&&(await sm.limits()).images){const r=await sm("Extract all visible text and URLs from this image verbatim. Output only the extracted text.",{images:[f],modelTier:"quick",cache:false});return r.text}}catch(e){}
 if(!window.claude&&location.protocol.startsWith("http")){try{const bmp=await createImageBitmap(f),k=Math.min(1,1280/Math.max(bmp.width,bmp.height)),cv=document.createElement("canvas");cv.width=Math.round(bmp.width*k);cv.height=Math.round(bmp.height*k);cv.getContext("2d").drawImage(bmp,0,0,cv.width,cv.height);
  const r=await fetch("/api/vision",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({image:cv.toDataURL("image/jpeg",.8).split(",")[1]})});if(r.ok)return (await r.json()).text}catch(e){}}
 return null}
async function analyzeImage(f,withOcr){
 let qr=null;
 try{const bmp=await createImageBitmap(f);
  if("BarcodeDetector" in window){try{const c=await new BarcodeDetector({formats:["qr_code"]}).detect(bmp);if(c.length)qr=c[0].rawValue}catch(e){}}
  if(!qr&&window.jsQR){const k=Math.min(1,1600/Math.max(bmp.width,bmp.height)),cv=document.createElement("canvas");cv.width=Math.round(bmp.width*k);cv.height=Math.round(bmp.height*k);const cx=cv.getContext("2d");cx.drawImage(bmp,0,0,cv.width,cv.height);const d=cx.getImageData(0,0,cv.width,cv.height),q=jsQR(d.data,d.width,d.height);if(q)qr=q.data}
 }catch(e){}
 const R=[],parts=[];let unk=false;
 if(qr){R.push({raw:ut("qrin",{u:qr.slice(0,100)})});parts.push(/^(https?:|www\.)|\.[a-z]{2,}(\/|$)/i.test(qr)?analyzeLink(qr):analyzeSms(qr))}
 if(withOcr){const o=await ocrImage(f);
  if(o){R.push({raw:ut("ocr")});parts.push(analyzeSms(o));urlsIn(o).slice(1).forEach(u=>parts.push(analyzeLink(u)))}
  else if(!qr){R.push({raw:ut("noai")});unk=true}}
 else if(!qr)return {noqr:true,level:0,sc:0,R:[]};
 const ok=parts.filter(a=>a&&!a.bad);
 return {level:Math.max(unk?1:0,...ok.map(a=>a.level)),sc:ok.reduce((a,b)=>a+(b.sc||0),0),R:[...R,...ok.flatMap(a=>a.R)],known:false}}
function combine(items){
 const ok=items.filter(([k,a])=>a&&!a.bad);if(!ok.length)return {bad:true};
 const multi=ok.length>1,R=[];
 for(const [k,a] of ok)txt(a.R).forEach(m=>R.push({raw:multi?`[${U[lang].kinds[k]}] ${m}`:m}));
 return {level:Math.max(...ok.map(([k,a])=>a.level)),sc:ok.reduce((a,[k,b])=>a+(b.sc||0),0),R,known:ok.every(([k,a])=>a.known)}}

// ================= Telegram bot =================
const fs = require("fs");
const env = process.env;
const TOKEN = env.TELEGRAM_BOT_TOKEN, VT_KEY = env.VT_API_KEY, GSB_KEY = env.GSB_API_KEY, AI_KEY = env.ANTHROPIC_API_KEY;
const MODEL = env.CLAUDE_MODEL || "claude-haiku-5-5";
const TG = env.TELEGRAM_API_BASE || "https://api.telegram.org";
const DATA = env.BOT_DATA_FILE || "bot-data.json";
const AI_BASE = env.ANTHROPIC_API_BASE || "https://api.anthropic.com", VT_BASE = env.VT_API_BASE || "https://www.virustotal.com", GSB_BASE = env.GSB_API_BASE || "https://safebrowsing.googleapis.com";
if (!TOKEN) { console.error("TELEGRAM_BOT_TOKEN yoʻq. .env faylni tekshiring."); process.exit(1); }

const sleep = ms => new Promise(r => setTimeout(r, ms));
const esc = x => String(x).replace(/[&<>]/g, c => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;" }[c]));
const tg = async (m, body) => { const r = await fetch(`${TG}/bot${TOKEN}/${m}`, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(body || {}) }); return r.json(); };
async function download(file_id) {
  const f = await tg("getFile", { file_id });
  if (!f.ok) throw new Error("getFile");
  const r = await fetch(`${TG}/file/bot${TOKEN}/${f.result.file_path}`);
  if (!r.ok) throw new Error("download");
  return Buffer.from(await r.arrayBuffer());
}

// ---- saqlanadigan sozlamalar: faqat til (xabarlar saqlanmaydi)
let store = { langs: {} };
try { store = JSON.parse(fs.readFileSync(DATA, "utf8")); } catch (e) {}
const saveStore = () => { try { fs.writeFileSync(DATA, JSON.stringify(store)); } catch (e) {} };
const guess = u => { const c = (u?.language_code || "").slice(0, 2); return c === "ru" ? "ru" : c === "en" ? "en" : "uz"; };
const langOf = (chatId, user) => store.langs[chatId] || guess(user);

// ---- tezlik cheklovi
const rl = new Map();
function allow(key, max, ms = 3600_000) {
  const now = Date.now(), a = (rl.get(key) || []).filter(x => now - x < ms);
  if (a.length >= max) return false;
  a.push(now); rl.set(key, a); return true;
}
setInterval(() => { rl.clear(); explain.clear(); }, 6 * 3600_000);

// ---- bazalar
async function gsbCheck(url, out) {
  if (!GSB_KEY) return;
  const r = await fetch(`${GSB_BASE}/v4/threatMatches:find?key=${GSB_KEY}`, { method: "POST", headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ client: { clientId: "qoriqchi-bot", clientVersion: "1.0" }, threatInfo: { threatTypes: ["MALWARE", "SOCIAL_ENGINEERING", "UNWANTED_SOFTWARE", "POTENTIALLY_HARMFUL_APPLICATION"], platformTypes: ["ANY_PLATFORM"], threatEntryTypes: ["URL"], threatEntries: [{ url }] } }) });
  if (!r.ok) return;
  const d = await r.json(); out.checked.push("gsb"); if (d.matches?.length) out.malicious = true;
}
async function vtCheck(kind, id, out, submitUrl) {
  if (!VT_KEY) return;
  const h = { "x-apikey": VT_KEY };
  const r = await fetch(`${VT_BASE}/api/v3/${kind}/${id}`, { headers: h });
  if (r.status === 404) { if (submitUrl) fetch(VT_BASE + "/api/v3/urls", { method: "POST", headers: { ...h, "content-type": "application/x-www-form-urlencoded" }, body: new URLSearchParams({ url: submitUrl }) }).catch(() => {}); return; }
  if (!r.ok) return;
  const st = (await r.json()).data?.attributes?.last_analysis_stats;
  if (!st || (st.harmless + st.malicious + st.suspicious + st.undetected) === 0) return;
  out.checked.push("vt");
  if (st.malicious >= 2) out.malicious = true; else if (st.malicious + st.suspicious >= 1) out.suspicious = true;
}
const dbUrl = async url => { const o = { malicious: false, suspicious: false, checked: [] }; await Promise.allSettled([gsbCheck(url, o), vtCheck("urls", Buffer.from(url).toString("base64url"), o, url)]); return o; };
const dbFile = async hash => { const o = { malicious: false, suspicious: false, checked: [] }; await Promise.allSettled([vtCheck("files", hash, o)]); return o; };
const RM = {
  uz: { bad: "Google/VirusTotal bazalarida xavfli deb belgilangan!", sus: "Bazalarda shubhali deb belgilangan.", ok: "Google va VirusTotal bazalarida xavf topilmadi." },
  ru: { bad: "Помечено как опасное в базах Google/VirusTotal!", sus: "Помечено как подозрительное в базах.", ok: "В базах Google и VirusTotal угроз не найдено." },
  en: { bad: "Flagged as dangerous in Google/VirusTotal databases!", sus: "Flagged as suspicious in the databases.", ok: "No threats found in Google and VirusTotal databases." } };
function applyDb(a, x) {
  if (x.malicious) { a.level = 2; a.R.unshift({ raw: RM[lang].bad }); }
  else if (x.suspicious) { a.level = Math.max(a.level, 1); a.R.unshift({ raw: RM[lang].sus }); }
  else if (x.checked.length) { a.R.unshift({ raw: RM[lang].ok }); if (a.level === 0) a.known = true; }
}

// ---- matnlar
const M = {
  uz: { start: "Salom! Men Qoʻriqchiman 🛡️\n\nShubhali SMS, havola, APK fayl, PDF yoki skrinshotni menga yuboring, xavfsizligini tekshiraman:\n🟢 belgi topilmadi · 🟡 ehtiyot boʻling · 🔴 xavfli\n\nGuruhga qoʻshib administrator qilsangiz (xabarlarni oʻchirish huquqi bilan), xavfli APK va havolalarni oʻzim oʻchiraman.\n\n/lang tilni oʻzgartirish · /ask savol · /about", langAsk: "Tilni tanlang:", langOk: "Til tanlandi: Oʻzbekcha ✅",
    disc: "Bu 100% kafolat emas. Shubha qilsangiz, bankka oʻzingiz qoʻngʻiroq qiling. Xabaringiz saqlanmaydi.", empty: "Matn, havola, fayl yoki skrinshot yuboring.",
    tooBig: "Fayl 20 MB dan katta, Telegram uni botga bermaydi. Faqat nomi boʻyicha tekshirildi.", noKey: "Bu funksiya hozir oʻchiq (AI kaliti kiritilmagan).", rate: "Juda koʻp soʻrov. Bir ozdan keyin urinib koʻring.",
    aiBtn: "🤖 AI bilan tushuntirish", aiWait: "AI oʻylayapti…", aiErr: "AI hozir javob bera olmadi.", askUse: "Savolni /ask dan keyin yozing. Masalan:\n/ask Click nomidan qoʻngʻiroq qilishdi, nima qilaman?",
    del: "⚠️ {n} yuborgan xabar oʻchirildi (xavfli).\nSabab: {r}", warn: "⚠️ Ehtiyot boʻling, bu fayl shubhali. Telegramdagi APK fayllarni oʻrnatmang.\nSabab: {r}", noAdmin: "Xavfli xabarni oʻchira olmadim. Meni administrator qiling (xabarlarni oʻchirish huquqi bilan).",
    about: "Qoʻriqchi: firibgarlikdan himoya.\nIshlab chiquvchi: Shohruxbek Tolibov.", wait: "Tekshiryapman…" },
  ru: { start: "Здравствуйте! Я Qoʻriqchi 🛡️\n\nПришлите мне подозрительное SMS, ссылку, APK-файл, PDF или скриншот, и я проверю:\n🟢 признаков нет · 🟡 осторожно · 🔴 опасно\n\nЕсли добавить меня в группу администратором (с правом удалять сообщения), я сам удалю опасные APK и ссылки.\n\n/lang язык · /ask вопрос · /about", langAsk: "Выберите язык:", langOk: "Язык выбран: Русский ✅",
    disc: "Это не 100% гарантия. Если сомневаетесь, позвоните в банк сами. Ваши сообщения не сохраняются.", empty: "Пришлите текст, ссылку, файл или скриншот.",
    tooBig: "Файл больше 20 МБ, Telegram не отдаёт его боту. Проверено только по названию.", noKey: "Эта функция сейчас отключена (нет ключа ИИ).", rate: "Слишком много запросов. Попробуйте позже.",
    aiBtn: "🤖 Объяснить с помощью ИИ", aiWait: "ИИ думает…", aiErr: "ИИ сейчас не смог ответить.", askUse: "Напишите вопрос после /ask. Например:\n/ask Мне позвонили от имени Click, что делать?",
    del: "⚠️ Сообщение от {n} удалено (опасно).\nПричина: {r}", warn: "⚠️ Осторожно, этот файл подозрителен. Не устанавливайте APK из Telegram.\nПричина: {r}", noAdmin: "Не смог удалить опасное сообщение. Сделайте меня администратором (с правом удалять сообщения).",
    about: "Qoʻriqchi: защита от мошенников.\nРазработчик: Shohruxbek Tolibov.", wait: "Проверяю…" },
  en: { start: "Hi! I’m Qoʻriqchi 🛡️\n\nSend me a suspicious SMS, link, APK file, PDF or screenshot and I’ll check it:\n🟢 no signs found · 🟡 be careful · 🔴 dangerous\n\nAdd me to a group as an admin (with permission to delete messages) and I’ll remove dangerous APKs and links myself.\n\n/lang language · /ask question · /about", langAsk: "Choose a language:", langOk: "Language set: English ✅",
    disc: "This is not a 100% guarantee. If in doubt, call your bank yourself. Your messages are not stored.", empty: "Send text, a link, a file or a screenshot.",
    tooBig: "The file is over 20 MB and Telegram won’t give it to bots. Checked by name only.", noKey: "This feature is off right now (no AI key set).", rate: "Too many requests. Try again later.",
    aiBtn: "🤖 Explain with AI", aiWait: "AI is thinking…", aiErr: "AI couldn’t answer right now.", askUse: "Write your question after /ask. For example:\n/ask Someone called me as Click, what do I do?",
    del: "⚠️ A message from {n} was deleted (dangerous).\nReason: {r}", warn: "⚠️ Be careful, this file is suspicious. Don’t install APKs from Telegram.\nReason: {r}", noAdmin: "I couldn’t delete the dangerous message. Please make me an admin (with permission to delete messages).",
    about: "Qoʻriqchi: protection from scams.\nDeveloper: Shohruxbek Tolibov.", wait: "Checking…" } };
const m = () => M[lang];

const explain = new Map();
function fmt(a) {
  const tt = t(), em = ["🟢", "🟡", "🔴"][a.level], head = a.level === 0 && !a.known ? tt.v0 : tt.v[a.level];
  const li = txt(a.R).map(x => "• " + esc(x.length > 300 ? x.slice(0, 300) + "…" : x)).join("\n");
  return `${em} <b>${esc(head)}</b>\n${esc(tt.a[a.level])}\n\n${li}\n\n<i>${esc(m().disc)}</i>`.slice(0, 3900);
}

// ---- tekshiruv
async function checkText(text) {
  const inp = text.trim(), us = urlsIn(inp), items = [];
  const single = (us.length === 1 && us[0] === inp) || /^@\w{3,}$/.test(inp);
  if (single) items.push(["link", analyzeLink(inp)]);
  else { items.push(["sms", analyzeSms(inp)]); us.slice(1).forEach(u => items.push(["link", analyzeLink(u)])); }
  const a = combine(items);
  if (a.bad) return a;
  for (const u of us.slice(0, 2)) {
    if (/^@/.test(u) || /^(https?:\/\/)?(www\.)?(t\.me|telegram\.me)\//i.test(u)) continue;
    try { applyDb(a, await dbUrl(/^https?:/i.test(u) ? u : "https://" + u)); } catch (e) {}
  }
  return a;
}
async function checkFile(doc) {
  const name = doc.file_name || "file", low = name.toLowerCase();
  const isApk = /\.(apk|xapk|apks)$/.test(low), isPdf = /\.pdf$/.test(low) || doc.mime_type === "application/pdf";
  if (!isApk && !isPdf) return combine([["file", { level: 1, sc: 2, R: [{ raw: ut("unk") }] }]]);
  if ((doc.file_size || 0) > 20 * 1024 * 1024) {
    const a = await analyzeApkFile({ name, size: 151 * 1048576, arrayBuffer: async () => new ArrayBuffer(0) });
    a.R.push({ raw: m().tooBig }); return combine([["apk", a]]);
  }
  const buf = await download(doc.file_id);
  const f = { name, size: buf.length, arrayBuffer: async () => buf.buffer.slice(buf.byteOffset, buf.byteOffset + buf.length) };
  const a = isApk ? await analyzeApkFile(f) : await analyzePdf(f);
  const c = combine([[isApk ? "apk" : "pdf", a]]);
  try { applyDb(c, await dbFile(require("crypto").createHash("sha256").update(buf).digest("hex"))); } catch (e) {}
  return c;
}
async function aiCall(system, content, max = 600) {
  if (!AI_KEY) return null;
  const r = await fetch(AI_BASE + "/v1/messages", { method: "POST", headers: { "x-api-key": AI_KEY, "anthropic-version": "2023-06-01", "content-type": "application/json" },
    body: JSON.stringify({ model: MODEL, max_tokens: max, system, messages: [{ role: "user", content }] }) });
  if (!r.ok) return null;
  return (await r.json()).content.filter(b => b.type === "text").map(b => b.text).join("");
}
const LN = { uz: "in Uzbek", ru: "in Russian", en: "in English" };
const PERSONA = () => `You are Qoʻriqchi AI, the assistant inside the Qoʻriqchi app and Telegram bot, developed by Shohruxbek Tolibov. If asked who made it, say Shohruxbek Tolibov. If asked which AI model or company powers you, say you are Qoʻriqchi’s AI assistant and can’t share details about the underlying technology; never claim to be human or a specific other model. You help ordinary people in Uzbekistan stay safe from scams (SMS, Telegram, fake bank/Click/Payme links, fake APKs). Answer ${LN[lang]}, short and simple, with practical steps. Never claim anything is 100% safe.`;
async function checkPhoto(photos) {
  if (!AI_KEY) return null;
  const buf = await download(photos[photos.length - 1].file_id);
  if (buf.length > 5 * 1024 * 1024) return null;
  const r = await fetch(AI_BASE + "/v1/messages", { method: "POST", headers: { "x-api-key": AI_KEY, "anthropic-version": "2023-06-01", "content-type": "application/json" },
    body: JSON.stringify({ model: MODEL, max_tokens: 800, messages: [{ role: "user", content: [{ type: "image", source: { type: "base64", media_type: "image/jpeg", data: buf.toString("base64") } }, { type: "text", text: "Extract all visible text and URLs from this image verbatim. Output only the extracted text." }] }] }) });
  if (!r.ok) return null;
  const text = (await r.json()).content.filter(b => b.type === "text").map(b => b.text).join("");
  if (!text.trim()) return null;
  const a = await checkText(text);
  if (a.bad) return null;
  a.R.unshift({ raw: ut("ocr") }); a.known = false; return a;
}

// ---- yuborish
const send = (chat_id, text, extra) => tg("sendMessage", { chat_id, text, parse_mode: "HTML", disable_web_page_preview: true, ...extra });
async function reply(chatId, replyTo, a) {
  if (a.bad) return send(chatId, esc(m().empty), { reply_to_message_id: replyTo });
  const extra = { reply_to_message_id: replyTo };
  const key = `${chatId}:${replyTo}`;
  if (AI_KEY) { explain.set(key, { lang, level: a.level, findings: txt(a.R).join("\n- ") }); extra.reply_markup = { inline_keyboard: [[{ text: m().aiBtn, callback_data: "ai:" + key }]] }; }
  return send(chatId, fmt(a), extra);
}
const langKb = { inline_keyboard: [[{ text: "Oʻzbekcha", callback_data: "lang:uz" }, { text: "Русский", callback_data: "lang:ru" }, { text: "English", callback_data: "lang:en" }]] };
const noticed = new Map();

async function handleGroup(msg) {
  const chatId = msg.chat.id;
  if (!allow("g" + chatId, 120)) return;
  let a = null, kind = "";
  const isCmd = /^\/(start|help|lang|about)(@\w+)?\b/.test(msg.text || "");
  if (isCmd) return handleCommand(msg);
  if (msg.document && /\.(apk|xapk|apks)$/i.test(msg.document.file_name || "")) { a = await checkFile(msg.document); kind = "apk"; }
  else if ((msg.text || msg.caption) && urlsIn(msg.text || msg.caption).length) { a = await checkText(msg.text || msg.caption); kind = "txt"; }
  if (!a || a.bad) return;
  const who = esc(msg.from?.first_name || "user");
  const reason = esc(txt(a.R).filter(x => !/SHA-256/.test(x))[0] || "");
  if (a.level >= 2) {
    const d = await tg("deleteMessage", { chat_id: chatId, message_id: msg.message_id });
    if (d.ok) await send(chatId, m().del.replace("{n}", who).replace("{r}", reason));
    else if (!noticed.has(chatId) || Date.now() - noticed.get(chatId) > 86400_000) { noticed.set(chatId, Date.now()); await send(chatId, esc(m().noAdmin)); }
  } else if (a.level === 1 && kind === "apk") {
    await send(chatId, m().warn.replace("{r}", reason), { reply_to_message_id: msg.message_id });
  }
}
async function handleCommand(msg) {
  const chatId = msg.chat.id, text = msg.text || "";
  const cmd = (text.match(/^\/(\w+)/) || [])[1];
  if (cmd === "start" || cmd === "help") { await send(chatId, esc(m().start)); if (msg.chat.type === "private" && !store.langs[chatId]) await send(chatId, esc(m().langAsk), { reply_markup: langKb }); }
  else if (cmd === "lang") await send(chatId, esc(m().langAsk), { reply_markup: langKb });
  else if (cmd === "about") await send(chatId, esc(m().about));
  else if (cmd === "ask") {
    const q = text.replace(/^\/ask(@\w+)?/, "").trim();
    if (!q) return send(chatId, esc(m().askUse));
    if (!AI_KEY) return send(chatId, esc(m().noKey));
    if (!allow("ai" + msg.from?.id, 15)) return send(chatId, esc(m().rate));
    const ans = await aiCall(PERSONA(), q.slice(0, 1500));
    await send(chatId, ans ? esc(ans).slice(0, 3900) : esc(m().aiErr), { reply_to_message_id: msg.message_id });
  }
}
async function handlePrivate(msg) {
  const chatId = msg.chat.id, uid = msg.from?.id || chatId;
  if (msg.text && msg.text.startsWith("/")) return handleCommand(msg);
  if (!allow("u" + uid, 40)) return send(chatId, esc(m().rate));
  await tg("sendChatAction", { chat_id: chatId, action: "typing" });
  let a;
  if (msg.document) a = await checkFile(msg.document);
  else if (msg.photo) {
    if (!AI_KEY) return send(chatId, esc(m().noKey));
    if (!allow("ai" + uid, 15)) return send(chatId, esc(m().rate));
    a = await checkPhoto(msg.photo);
    if (!a) return send(chatId, esc(m().aiErr));
  } else if (msg.text || msg.caption) a = await checkText(msg.text || msg.caption);
  else return send(chatId, esc(m().empty));
  await reply(chatId, msg.message_id, a);
}
async function handleCallback(cq) {
  const data = cq.data || "", chatId = cq.message?.chat?.id;
  if (data.startsWith("lang:")) {
    const l = data.slice(5); if (!M[l]) return;
    store.langs[chatId] = l; saveStore(); lang = l;
    await tg("answerCallbackQuery", { callback_query_id: cq.id });
    return send(chatId, esc(m().langOk));
  }
  if (data.startsWith("ai:")) {
    const info = explain.get(data.slice(3));
    await tg("answerCallbackQuery", { callback_query_id: cq.id });
    if (!info) return send(chatId, esc(m().aiErr));
    if (!allow("ai" + cq.from.id, 15)) return send(chatId, esc(m().rate));
    lang = info.lang;
    const ans = await aiCall(PERSONA(), `A checker produced this result: level=${["no signs found", "suspicious", "dangerous"][info.level]}.\nFindings:\n- ${info.findings}\nIn at most 5 short sentences: what this means and what the person should do now.`);
    await send(chatId, ans ? esc(ans).slice(0, 3900) : esc(m().aiErr));
  }
}
async function handle(u) {
  if (u.callback_query) { lang = langOf(u.callback_query.message?.chat?.id, u.callback_query.from); return handleCallback(u.callback_query); }
  const msg = u.message; if (!msg || !msg.chat) return;
  lang = langOf(msg.chat.id, msg.from);
  if (msg.chat.type === "private") return handlePrivate(msg);
  if (msg.chat.type === "group" || msg.chat.type === "supergroup") return handleGroup(msg);
}

// ---- asosiy sikl (xabarlar ketma-ket qayta ishlanadi)
let offset = 0;
(async function main() {
  const me = await tg("getMe").catch(() => null);
  console.log(me?.ok ? `Qoʻriqchi bot ishga tushdi: @${me.result.username}` : "Telegramga ulanib boʻlmadi. Token toʻgʻrimi?");
  for (;;) {
    try {
      const r = await tg("getUpdates", { offset, timeout: 30, allowed_updates: ["message", "callback_query"] });
      if (!r.ok) { console.error("getUpdates:", r.description); await sleep(5000); continue; }
      for (const u of r.result) { offset = u.update_id + 1; try { await handle(u); } catch (e) { console.error("xato:", e.message); } }
    } catch (e) { console.error("tarmoq:", e.message); await sleep(3000); }
  }
})();
