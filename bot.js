// Qoʻriqchi Telegram boti. Bitta fayl. Ishga tushirish: node --env-file=.env bot.js
// Tekshiruv qoidalari ilovadagi bilan bir xil (ilova kodidan avtomatik olingan).
'use strict';

const TelegramBot = require('node-telegram-bot-api');
const { GoogleGenAI } = require('@google/genai');

// Environment variables
const token = process.env.TELEGRAM_BOT_TOKEN;
const geminiApiKey = process.env.GEMINI_API_KEY;

if (!token || !geminiApiKey) {
  console.error("Xato: TELEGRAM_BOT_TOKEN yoki GEMINI_API_KEY kiritilmagan!");
  process.exit(1);
}

// Telegram bot va Gemini AI instansiyalari
const bot = new TelegramBot(token, { polling: true });
const ai = new GoogleGenAI({ apiKey: geminiApiKey });

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
  code:"Просят код, PIN или пароль.",urg:"Признаки спешки и запугивания.",prz:"Обещание выигрыша или подарка.",mny:"Просят перевести деньги.",card:"Упомянуты данные карты.",lnk:"Ссылка в сообщении подозрительна.",adv:"Кредит и требование предоплаты: признак мошенничества.",cb:"Сообщение о списании и просьба позвонить: распространённая схема мошенников.",job:"Обещание лёгкого заработка через Telegram/WhatsApp.",scheme:"Это не обычная ссылка на сайт, может быть опасна.",emp:"Представляются сотрудником банка.",otp:"Похоже на сообщение с одноразовым кодом. Никому не сообщайте код.",
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

let lang="uz";
const t=()=>T[lang];
const OFF=["google.com","youtube.com","telegram.org","click.uz","payme.uz","uzum.uz","gov.uz","lex.uz","uzcard.uz","humo.uz","paynet.uz","nbu.uz","kapitalbank.uz","sqb.uz","ipoteka.uz","xb.uz","aloqabank.uz","infinbank.uz","apple.com","microsoft.com","facebook.com","instagram.com","wikipedia.org","anthropic.com","claude.ai","googleusercontent.com","googleapis.com","gstatic.com","googlevideo.com","telegram.me","github.com","amazon.com","whatsapp.com","whatsapp.net","paypal.com","paypal.me","mygov.uz","xalqbank.uz","icloud.com","fb.com","meta.com","messenger.com","olx.uz","soliq.uz","beeline.uz","ucell.uz","uztelecom.uz","mobiuz.uz","asakabank.uz","agrobank.uz","hamkorbank.uz","anorbank.uz","tbcbank.uz","visa.com","mastercard.com","tiktok.com","gmail.com","binance.com","coinbase.com","metamask.io","yandex.ru","yandex.com","yandex.uz","ya.ru","humocard.uz","uzumbank.uz","click.me","payme.me","youtu.be","google.org","yandex.taxi","yandex.kz","yandex.by","yandex.net","yandex.eu","yandex.go","yandex.cloud","tiktokcdn.com","googlevideo.com","ytimg.com"];
const BR=["click","payme","uzum","humo","uzcard","paynet","kapitalbank","ipoteka","xalqbank","nbu","sqb","telegram","google","facebook","instagram","apple","paypal","mygov","gov-uz","govuz","soliq","olx","beeline","ucell","uztelecom","mobiuz","asakabank","agrobank","hamkorbank","anorbank","tbcbank","visa","mastercard","whatsapp","tiktok","gmail","icloud","binance","metamask","coinbase","yandex"];
const BADTLD=["xyz","top","click","tk","ml","ga","cf","gq","icu","buzz","cyou","monster","rest","sbs","cfd"];
const SHORT=["bit.ly","tinyurl.com","t.co","cutt.ly","is.gd","goo.gl","clck.ru","rb.gy","shorturl.at"];
const KW=["login","verify","secure","bonus","gift","prize","win","claim","update","confirm","wallet","airdrop","free","sovga","yutuq","aksiya","kredit"];

const isOff=h=>OFF.some(d=>h===d||h.endsWith("."+d))||(/(^|\.)google\.(com?\.)?[a-z]{2}$/.test(h)&&!BADTLD.includes(h.split(".").pop()));
function lvl(s,r,y){return s>=r?2:s>=y?1:0}
function fin(sc,R,r,y){return {sc,R,level:lvl(sc,r,y)}}
function txt(R){return R.map(o=>{if(o.raw)return o.raw;let m=t().R[o.k];if(o.x)for(const k in o.x)m=m.replace("{"+k+"}",o.x[k]);return m})}

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
 if((h.match(/-/g)||\uffff).length>=2)add("hyph",1);
 const variants=[h,h.replace(/1/g,"i"),h.replace(/1/g,"l")].map(x=>x.replace(/0/g,"o").replace(/3/g,"e").replace(/5/g,"s").replace(/\$/g,"s")).flatMap(x=>[x,x.replace(/-/g,"")]);
 const od=OFF.find(d=>new RegExp("(^|[^a-z0-9])"+d.replace(/\./g,"\\.")).test(h));
 const b=od?null:BR.find(x=>variants.some(v=>new RegExp("(^|[.-])"+x+"(?:(?![a-z])|uz|pay|bank|app|id|online|support|secure|login|verify|bonus|wallet|card|team|help|service)").test(v)));
 if(b)add("brand",4,{b});
 const sh=h.split(/[.\-0-9]+/),sp=(u.pathname+u.search).toLowerCase().split(/[\/\-_.?=&0-9]+/);
 const kh=KW.filter(k=>sh.includes(k)),kp=KW.filter(k=>!kh.includes(k)&&sp.includes(k));
 if(kh.length||kp.length)add("kw",Math.min(kh.length,3)+Math.min(kp.length,1),{k:[...kh,...kp].slice(0,4).join(", ")});
 if(!R.length)R.push({k:"none"});
 return fin(sc,R,4,2);
}

function analyzeSms(raw){
 const s=raw.trim();if(!s)return null;
 let sc=0,R=[];const add=(k,w)=>{R.push({k});sc+=w};
 const low=s.toLowerCase();
 const low2=low.replace(/(do not share|don.t share|never share|hech kimga[^.]*|\u043d\u0438\u043a\u043e\u043c\u0443[^.]*)/g,"");
 const safeNote=/(hech kimga|\u043d\u0438\u043a\u043e\u043c\u0443|do not share|don.t share|never share)/.test(low);
 const hasCode=/(kod|\u043a\u043e\u0434|otp|pin|cvv|parol|\u043f\u0430\u0440\u043e\u043b|code)/.test(low);
 const asks=/(ayting|yuboring|kiriting|bering|\u0441\u043e\u043e\u0431\u0449\u0438\u0442\u0435|\u043d\u0430\u0437\u043e\u0432\u0438\u0442\u0435|\u043e\u0442\u043f\u0440\u0430\u0432\u044c\u0442\u0435|send|tell|share|enter|provide|\u0430\u0439\u0442\u0438\u043d\u0433|\u044e\u0431\u043e\u0440\u0438\u043d\u0433|\u043a\u0438\u0440\u0438\u0442\u0438\u043d\u0433|\u0431\u0435\u0440\u0438\u043d\u0433)/.test(low2);
 if(hasCode&&safeNote&&!/https?:|www\.|\.[a-z]{2,}\//.test(low))add("otp",0);
 else if(hasCode&&asks)add("code",5);
 if(/(bloklan|zudlik|tezda|shoshiling|24 soat|\u0441\u0440\u043e\u0447\u043d\u043e|\u0437\u0430\u0431\u043b\u043e\u043a\u0438\u0440|\u0431\u043b\u043e\u043a\u043b|\u0431\u043b\u043e\u043a\u0438\u0440|\u043d\u0435\u043c\u0435\u0434\u043b\u0435\u043d\u043d\u043e|urgent|immediately|suspended|blocked|within 24)/.test(low))add("urg",2);
 if(/(yechil|\u0441\u043f\u0438\u0441\u0430\u043d|\u0441\u043d\u044f\u0442|debited|withdrawn)/.test(low)&&/(qo.ng.iroq|bekor qil|\u043f\u043e\u0437\u0432\u043e\u043d|\u0437\u0432\u043e\u043d\u0438\u0442\u0435|\u043e\u0442\u043c\u0435\u043d|call)/.test(low))add("cb",5);
 if(/(ish taklifi|daromad|kuniga|\u0440\u0430\u0431\u043e\u0442\u0430|\u0437\u0430\u0440\u0430\u0431\u043e\u0442\u043e\u043a|\u0432\u0430\u043a\u0430\u043d\u0441\u0438\u044f|job offer|work from home|per day)/.test(low)&&/(telegram|@|t\.me|whatsapp|watsap)/.test(low))add("job",3);
 if(/(kredit|\u043a\u0440\u0435\u0434\u0438\u0442|loan)/.test(low)&&/(pul o.tkaz|o.tkazib|to.lov qil|\u043f\u0435\u0440\u0435\u0432\u0435\u0434|\u043e\u043f\u043b\u0430\u0442\u0438\u0442\u0435|\u0441\u0442\u0440\u0430\u0445\u043e\u0432\u043a|pay now|fee)/.test(low))add("adv",2);
 if(/(bank xodim|\u0441\u043e\u0442\u0440\u0443\u0434\u043d\u0438\u043a \u0431\u0430\u043d\u043a\u0430|bank employee|bank operator)/.test(low))add("emp",2);
 if(/(yutdingiz|\u044e\u0442\u0434\u0438\u043d\u0433\u0438\u0437|\u044e\u0442\u0443\u043a|\u0441\u043e\u0432\u0433\u0430|yutuq|sovg.a|bonus|\u0432\u044b\u0438\u0433\u0440|\u043f\u0440\u0438\u0437|\u043f\u043e\u0434\u0430\u0440\u043e\u043a|\u0432\u044b \u043f\u043e\u0431\u0435\u0434\u0438\u043b\u0438|\bwon\b|prize|gift|lottery|reward)/.test(low))add("prz",3);
 if(/(pul o.tkaz|o.tkazib|\u043f\u0435\u0440\u0435\u0432\u0435\u0434|\u043f\u0435\u0440\u0435\u0432\u043e\u0434 \u043d\u0430|transfer|send money|perevedi|dengi na|pul tashlab|pul otkaz|to.lov qiling|\u043e\u043f\u043b\u0430\u0442\u0438\u0442\u0435|pay now)/.test(low))add("mny",3);
 if(/(kart|\u043a\u0430\u0440\u0442|card number)/.test(low)&&!safeNote)add("card",asks?5:1);
 const m=s.match(/(https?:\/\/\S+|www\.\S+|\b[\w-]+(\.[\w-]+)*\.(uz|com|ru|net|org|xyz|top|click|me|ly|tk|icu)\S*)/i);
 if(m){const a=analyzeLink(m[0].replace(/[.,;)]+$/,""));if(a&&!a.bad&&a.sc>=2)add("lnk",a.level===2?5:Math.min(a.sc,4))}
 if(!R.length)R.push({k:"none"});
 const o=fin(sc,R,5,2);o.known=R.some(x=>x.k==="otp");return o;
}

// /start komandasi
bot.onText(/\/start/, (msg) => {
  const chatId = msg.chat.id;
  bot.sendMessage(chatId, "Assalomu alaykum! Men Qoʻriqchiman. Xavfsizlik haqida istalgan savol yoki shubhali havola/SMS yuborishingiz mumkin.");
});

// Xabarlarga javob berish va tahlil qilish
bot.on('message', async (msg) => {
  const chatId = msg.chat.id;
  const text = msg.text;

  if (!text || text.startsWith('/')) return;

  try {
    await bot.sendChatAction(chatId, 'typing');

    // 1. Dastlab havola yoki SMS ekanligini mantiqiy tekshiramiz
    const linkRes = analyzeLink(text);
    const smsRes = analyzeSms(text);

    if (linkRes && !linkRes.bad) {
      const statusText = t().v[linkRes.level];
      const details = txt(linkRes.R).join("\n• ");
      const reply = `🔍 **Havola tahlili:**\n\nNatija: **${statusText}**\n\nBelgilar:\n• ${details}`;
      return bot.sendMessage(chatId, reply, { parse_mode: 'Markdown' });
    }

    if (smsRes && smsRes.sc > 0) {
      const statusText = t().v[smsRes.level];
      const details = txt(smsRes.R).join("\n• ");
      const reply = `📱 **SMS tahlili:**\n\nNatija: **${statusText}**\n\nBelgilar:\n• ${details}`;
      return bot.sendMessage(chatId, reply, { parse_mode: 'Markdown' });
    }

    // 2. Agar tayyor qoidalarga tushmasa, AI (Gemini) orqali javob beramiz
    const response = await ai.models.generateContent({
      model: 'gemini-2.5-flash',
      contents: `Sen xavfsizlik va firibgarlikdan himoya qiluvchi Qo'riqchi botisan. Foydalanuvchining savoliga o'zbek tilida qisqa va tushunarli maslahat ber: ${text}`,
    });

    const reply = response.text || "Kechirasiz, javob shakllantirishda xatolik bo'ldi.";
    bot.sendMessage(chatId, reply);

  } catch (error) {
    console.error("Xatolik:", error);
    bot.sendMessage(chatId, "Xatolik yuz berdi. Iltimos, qayta urinib ko'ring.");
  }
});

console.log("Qoʻriqchi boti muvaffaqiyatli ishga tushdi!");
const http = require('http');
const port = process.env.PORT || 3000;
http.createServer((req, res) => {
  res.writeHead(200, { 'Content-Type': 'text/plain' });
  res.end('Bot ishlamoqda!\n');
}).listen(port, () => {
  console.log(`Server port ${port} da tinglanmoqda`);
});
