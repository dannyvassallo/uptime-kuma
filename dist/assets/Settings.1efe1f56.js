import{a as t,aG as e,r as s,o as i,$ as a,a2 as o,ah as n,a0 as r,a4 as l,ae as g,af as d,c as h,ac as c,a1 as u,ab as $,aa as p,a5 as v,aj as m,aq as b}from"./vendor.f60d008c.js";const k={class:"shadow-box"},y={class:"row"},P={key:0,class:"settings-menu col-lg-3 col-md-5"},f={class:"menu-item"},S={class:"menu-item"},M={class:"settings-content col-lg-9 col-md-7"},w={key:0,class:"settings-content-header"},x={class:"mx-3"};var G=t({data:()=>({show:!0,settings:{},settingsLoaded:!1}),computed:{currentPage(){let t=e().path.split("/"),s=t[t.length-1];return s&&"settings"!==s?s:null},showSubMenu(){return!this.$root.isMobile||!this.currentPage},subMenus(){return{general:{title:this.$t("General")},appearance:{title:this.$t("Appearance")},notifications:{title:this.$t("Notifications")},"reverse-proxy":{title:this.$t("Reverse Proxy")},"monitor-history":{title:this.$t("Monitor History")},security:{title:this.$t("Security")},proxies:{title:this.$t("Proxies")},backup:{title:this.$t("Backup")},about:{title:this.$t("About")}}}},watch:{"$root.isMobile"(){this.loadGeneralPage()}},mounted(){this.loadSettings(),this.loadGeneralPage()},methods:{loadGeneralPage(){this.currentPage||this.$root.isMobile||this.$router.push("/settings/general")},loadSettings(){this.$root.getSocket().emit("getSettings",(t=>{this.settings=t.data,void 0===this.settings.checkUpdate&&(this.settings.checkUpdate=!0),void 0===this.settings.searchEngineIndex&&(this.settings.searchEngineIndex=!1),void 0===this.settings.entryPage&&(this.settings.entryPage="dashboard"),void 0===this.settings.keepDataPeriodDays&&(this.settings.keepDataPeriodDays=180),this.settingsLoaded=!0}))},saveSettings(t,e){this.$root.getSocket().emit("setSettings",this.settings,e,(e=>{this.$root.toastRes(e),this.loadSettings(),t&&t()}))}}},[["render",function(t,e,G,_,D,I){const L=s("router-link"),j=s("font-awesome-icon"),A=s("router-view");return i(),a("div",null,[o(r("h1",{class:"mb-3"},l(t.$t("Settings")),513),[[n,D.show]]),r("div",k,[r("div",y,[I.showSubMenu?(i(),a("div",P,[(i(!0),a(g,null,d(I.subMenus,((t,e)=>(i(),h(L,{key:e,to:`/settings/${e}`},{default:c((()=>[r("div",f,l(t.title),1)])),_:2},1032,["to"])))),128)),t.$root.isMobile&&t.$root.loggedIn&&"autoLogin"!==t.$root.socket.token?(i(),a("a",{key:0,class:"logout",onClick:e[0]||(e[0]=u(((...e)=>t.$root.logout&&t.$root.logout(...e)),["prevent"]))},[r("div",S,[$(j,{icon:"sign-out-alt"}),p(" "+l(t.$t("Logout")),1)])])):v("",!0)])):v("",!0),r("div",M,[I.currentPage?(i(),a("div",w,l(I.subMenus[I.currentPage].title),1)):v("",!0),r("div",x,[$(A,null,{default:c((({Component:t})=>[$(m,{name:"slide-fade",appear:""},{default:c((()=>[(i(),h(b(t)))])),_:2},1024)])),_:1})])])])])])}],["__scopeId","data-v-46d24b4e"]]);export{G as default};
