import{_ as r,o as s,c,b as e,d as o,e as n,w as u,a as i,r as t}from"./app.83805edd.js";var d="/assets/images/cemu-account-settings.png";const h={},m=i('<p>In this section, we look at how to enable online play on Cemu. This involves dumping a set of online files from your Wii U to make Nintendo think that the connection from Cemu is actually coming from your console. This means you will be able to play online with both other Cemu users and real Wii U users.</p><p>If you do not plan on using online services you may skip this page. Using Cemu online has not resulted in any bans to date.</p><h2 id="getting-started" tabindex="-1"><a class="header-anchor" href="#getting-started" aria-hidden="true">#</a> Getting Started</h2><p>As we will be connecting to real Nintendo servers, do not:</p><ul><li>Use mods, cheats or hacks</li><li>Share your online files for other people to use</li><li>Play on both your console and Cemu at the same time <ul><li>There have been no confirmed ban cases, but this may still be unsafe</li><li>Using the same account to play online will kick the other player offline</li></ul></li></ul><p>Doing any of these may get your console banned, restricting you from accessing online play temporarily or permanently.</p><div class="custom-container danger"><p class="custom-container-title">DANGER</p><h4 id="warning-regarding-reformatting-or-selling-your-wii-u-console" tabindex="-1"><a class="header-anchor" href="#warning-regarding-reformatting-or-selling-your-wii-u-console" aria-hidden="true">#</a> Warning regarding reformatting or selling your Wii U Console:</h4><ul><li><p>Reformatting your console will result in your NNID being unlinked from that console. You will no longer be able to use online features on Cemu until you re-link your account to that console and re-obtain the files necessary for online play.</p></li><li><p>Selling your console (which is not permitted by Cemu because you technically do not own that data anymore) will likely also result in the new owner reformatting the console or otherwise removing your account from the same. This will result in permanent loss of access.</p></li></ul><p><strong>If you want to play online with Cemu, keep your Wii U console.</strong></p></div><h2 id="requirements" tabindex="-1"><a class="header-anchor" href="#requirements" aria-hidden="true">#</a> Requirements</h2>',8),g=e("li",null,"A FAT32 formatted USB storage device or SD card",-1),p={class:"custom-container tip"},f=e("p",{class:"custom-container-title"},"TIP",-1),y={href:"http://ridgecrop.co.uk/index.htm?guiformat.htm",target:"_blank",rel:"noopener noreferrer"},b=i('<h2 id="enabling-online-mode" tabindex="-1"><a class="header-anchor" href="#enabling-online-mode" aria-hidden="true">#</a> Enabling Online Mode</h2><ol><li>Open the Cemu emulator</li><li>On the top bar, go to <code>Options</code> -&gt; <code>General settings</code></li><li>Navigate to the <code>Account</code> tab</li><li>Ensure you have read the text at the top of the page</li><li>Check the box <code>Enable online mode</code></li></ol><p><img src="'+d+'" alt="A screenshot of a Cemu online account"></p><p>Your Wii U should now be ready to go online. If you ever want to disable online features, simply uncheck the box <code>Enable online mode</code>.</p>',4);function _(w,k){const a=t("router-link"),l=t("ExternalLinkIcon");return s(),c("div",null,[m,e("ul",null,[e("li",null,[o("Online files from your Wii U ("),n(a,{to:"/using-dumpling"},{default:u(()=>[o("Using dumpling")]),_:1}),o(")")]),g]),e("div",p,[f,e("p",null,[o("All storage devices must be formatted to FAT32 with a 32KB (32768) allocation. For storage devices larger than 32GB, use "),e("a",y,[o("guiformat"),n(l)]),o(" to format it correctly.")])]),b])}var x=r(h,[["render",_],["__file","online-play.html.vue"]]);export{x as default};
