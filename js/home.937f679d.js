(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["home"],{"009a":function(t,e,a){"use strict";a("393a")},"0b1f":function(t,e,a){},"1fd1":function(t,e,a){t.exports=a.p+"img/W2.accf4df2.webp"},"2e85":function(t,e,a){t.exports=a.p+"img/S4.b536ee5c.webp"},"393a":function(t,e,a){},"6a39":function(t,e,a){"use strict";a("8099")},7886:function(t,e,a){"use strict";a("0b1f")},"7d97":function(t,e,a){"use strict";a.r(e);var i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("AppHeader"),a("AppBanner"),a("AppAbout"),a("AppSpeciality"),a("AppFooter")],1)},s=[],n=a("a4ce"),c=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"page-banner"},[a("div",{staticClass:"container-banner"},[a("div",{staticClass:"slider-banner"},[a("div",{staticClass:"slider"},[a("transition-group",{attrs:{name:"fade",tag:"div"}},t._l([t.currentIndex],(function(e){return a("div",{key:e},[a("img",{staticClass:"photo",attrs:{alt:"slider zdjęć ukazujący gabinet",src:t.currentImg}})])})),0),a("a",{staticClass:"prev",attrs:{href:"#"},on:{click:t.prev}},[t._v("❮❮ ")]),a("a",{staticClass:"next",attrs:{href:"#"},on:{click:t.next}},[t._v("❯❯ ")])],1),a("div",{staticClass:"label-banner"},[a("div",{staticClass:"label-content-baner"},[a("div",{staticClass:"label-info"},[a("div",{staticClass:"phone"},[a("span",[a("font-awesome-icon",{attrs:{icon:"phone",pull:"left",transform:{rotate:100}}})],1),t._v("KONTAKT")]),t._m(0)]),a("div",{staticClass:"label-banner-border-between"}),a("div",{staticClass:"label-info"},[a("div",{staticClass:"clock"},[a("span",[a("font-awesome-icon",{attrs:{icon:["far","clock"]}})],1),t._v("GODZINY PRACY")]),a("p",[t._v("Sprawdź wybranego")]),a("p",[t._v("lekarza")])]),a("div",{staticClass:"label-banner-border-between"}),a("div",{staticClass:"label-info"},[a("div",{staticClass:"location"},[a("span",[a("font-awesome-icon",{attrs:{icon:["fas","map-marker-alt"]}})],1),t._v("ADRES")]),a("p",[t._v("ul. Leszczyńskiego 25")]),a("p",[t._v("20-069 Lublin")])])]),a("div",{staticClass:"label-banner-border"})])])])])},r=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("a",{attrs:{href:"tel: +48604540510"}},[a("p",[t._v("tel. 604 540 510")])])}],o={name:"Slider",data:function(){return{images:[a("8ceb"),a("99e1"),a("a127"),a("2e85"),a("ff5c")],timer:null,currentIndex:0}},mounted:function(){this.startSlide()},methods:{startSlide:function(){this.timer=setInterval(this.next,5e3)},next:function(){this.currentIndex+=1},prev:function(){this.currentIndex-=1}},computed:{currentImg:function(){return this.images[Math.abs(this.currentIndex)%this.images.length]}}},l=o,p=(a("de56"),a("2877")),d=Object(p["a"])(l,c,r,!1,null,null,null),u=d.exports,v=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"container-about"},[a("div",{staticClass:"page-about"},[t._m(0),a("div",{staticClass:"page-about-border"}),t._m(1),a("div",{staticClass:"page-about-button"},[a("router-link",{attrs:{to:"okulista"}},[a("div",{staticClass:"button"},[a("p",[t._v("OKULISTA")])])]),a("router-link",{attrs:{to:"diabetolog"}},[a("div",{staticClass:"button"},[a("p",[t._v("DIABETOLOG")])])])],1)])])},f=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"page-about-header"},[a("p",[t._v("O GABINECIE")])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"page-about-content"},[a("p",[t._v("Gabinet lekarski M/M Kowalczyk oferuje pacjentom kompleksową opiekę medyczną w zakresie okulistyki i diabetologii. Nasze wieloletnie doświadczenie specjalistyczne i kliniczne pozwala na zapewnienie pacjentom profesjonalnej porady. W ramach poradni okulistycznej szczególną opieką otaczane są dzieci z problemami chorób oczu. W poradni diabetologicznej znajdą wsparcie dorośli pacjenci z cukrzycą, w tym ci leczeni za pomocą osobistych pomp insulinowych oraz kobiety z cukrzycą ciążową. Pacjenci z otyłością również mogą liczyć na poradę. "),a("br"),a("br"),t._v(" Gabinet lekarski jest dogodnie dla pacjenta zlokalizowany w centrum miasta. Obok gabinetu dostępny jest parking miejski (Strefa B).")])])}],b={},m=b,g=(a("6a39"),Object(p["a"])(m,v,f,!1,null,null,null)),C=g.exports,_=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},h=[function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"container-specialty"},[i("div",{staticClass:"page-specialty"},[i("div",{staticClass:"page-specialty-header"},[i("p",[t._v("NASZA SPECJALNOŚĆ")])]),i("div",{staticClass:"page-specialty-border"}),i("div",{staticClass:"page-specialty-box"},[i("div",{staticClass:"page-specialty-box-1"},[i("div",{staticClass:"specialty"},[i("div",{staticClass:"specialty-photo"},[i("img",{staticClass:"widget",attrs:{width:"255",height:"312",alt:"Dobór okularów",src:a("e108")}})]),i("div",{staticClass:"specialty-content"},[i("p",[t._v("DOBÓR OKULARÓW")])]),i("div",{staticClass:"specialty-border"})]),i("div",{staticClass:"specialty"},[i("div",{staticClass:"specialty-photo"},[i("img",{staticClass:"widget",attrs:{width:"255",height:"312",alt:"Okulistyka dziecięca",src:a("1fd1")}})]),i("div",{staticClass:"specialty-content"},[i("p",[t._v("OKULISTYKA DZIECIĘCA")])]),i("div",{staticClass:"specialty-border"})])]),i("div",{staticClass:"page-specialty-box-2"},[i("div",{staticClass:"specialty"},[i("div",{staticClass:"specialty-photo"},[i("img",{staticClass:"widget",attrs:{width:"255",height:"312",alt:"Zakładanie pomp insulinowych",src:a("ccbe")}})]),i("div",{staticClass:"specialty-content"},[i("p",[t._v("OSOBISTE POMPY INSULINOWE")])]),i("div",{staticClass:"specialty-border"})]),i("div",{staticClass:"specialty"},[i("div",{staticClass:"specialty-photo"},[i("img",{staticClass:"widget",attrs:{width:"255",height:"312",alt:"Cukrzyca typu pierwszego i drugiego",src:a("9c21")}})]),i("div",{staticClass:"specialty-content"},[i("p",[t._v("CUKRZYCA TYPU PIERWSZEGO I DRUGIEGO")])]),i("div",{staticClass:"specialty-border"})])])])])])}],y=document.getElementsByTagName("script")[0],k=document.createElement("script");k.src="https://mydr.pl/static/mydr-pp.min.js",y.parentNode.insertBefore(k,y),k.onload=function(){var t=new window.PatientsPlugin;t.init({app:"https://mydr.pl/patients_plugin",plugin:"https://mydr.pl/static"})};var w={},z=w,A=(a("009a"),Object(p["a"])(z,_,h,!1,null,null,null)),O=A.exports,E=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"container-footer"},[a("div",{staticClass:"page-footer"},[t._m(0),t._m(1),a("div",{staticClass:"page-footer-border"}),a("div",{staticClass:"page-footer-1"},[t._m(2),a("div",{staticClass:"page-footer-nav"},[a("div",{staticClass:"page-footer-nav-2"},[t._m(3),t._m(4),a("div",{staticClass:"page-footer-nav-menu"},[a("ul",[a("li",[a("router-link",{attrs:{to:"/"}},[t._v("Strona główna")])],1),a("li",[a("router-link",{attrs:{to:"okulista"}},[t._v("Okulista")])],1),a("li",[a("router-link",{attrs:{to:"diabetolog"}},[t._v("Diabetolog")])],1),a("li",[a("router-link",{attrs:{to:"cennik"}},[t._v("Cennik")])],1),a("li",[a("router-link",{attrs:{to:"kontakt"}},[t._v("Kontakt")])],1)])])])])])])])},x=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"page-footer-header"},[a("p",[t._v("ZAPRASZAMY")])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"page-footer-names"},[a("div",{staticClass:"name"},[a("p",[a("span",[t._v("MAŁGORZATA KOWALCZYK")]),a("br"),t._v("Specjalista Chorób Oczu")])]),a("div",{staticClass:"name"},[a("p",[a("span",[t._v("MARIUSZ KOWALCZYK")]),a("br"),t._v("Specjalista Chorób Wewnętrznych"),a("br"),t._v(" i Diabetologii")])])])},function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"page-footer-logo"},[i("img",{staticClass:"logo-footer",attrs:{width:"191",height:"24",alt:"logo MMKowalczyk",src:a("5ef6")}})])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"page-footer-nav-contact"},[a("span",[t._v("Adres")]),a("p",[t._v("Gabinety lekarskie")]),a("p",[t._v("ul. Leszczyńskiego 25")]),a("p",[t._v("20-069 Lublin")])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"page-footer-nav-contact"},[a("span",[t._v("Kontakt")]),a("a",{attrs:{href:"tel: +48604540510"}},[a("p",[t._v("tel: 604 540 510")])])])}],S={},j=S,I=(a("7886"),Object(p["a"])(j,E,x,!1,null,null,null)),K=I.exports,$={components:{AppHeader:n["a"],AppBanner:u,AppAbout:C,AppSpeciality:O,AppFooter:K}},L=$,W=Object(p["a"])(L,i,s,!1,null,null,null);e["default"]=W.exports},8099:function(t,e,a){},"8ceb":function(t,e,a){t.exports=a.p+"img/S1.521de83a.webp"},"99e1":function(t,e,a){t.exports=a.p+"img/S2.35709a76.webp"},"9c21":function(t,e,a){t.exports=a.p+"img/W4.a2f3eb00.webp"},a127:function(t,e,a){t.exports=a.p+"img/S3.c0c37d1f.webp"},ac9d:function(t,e,a){},ccbe:function(t,e,a){t.exports=a.p+"img/W3.4c292573.webp"},de56:function(t,e,a){"use strict";a("ac9d")},e108:function(t,e,a){t.exports=a.p+"img/W1.2c424ce8.webp"},ff5c:function(t,e,a){t.exports=a.p+"img/S5.887b4ec2.webp"}}]);
//# sourceMappingURL=home.937f679d.js.map