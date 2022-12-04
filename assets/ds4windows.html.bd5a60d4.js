import{_ as r,o as s,c as a,b as e,d as o,e as t,w as c,a as d,r as i}from"./app.83805edd.js";var h="/assets/images/cemuhook.png",u="/assets/images/ds4windows.png";const p={},m=e("h2",{id:"downloads",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#downloads","aria-hidden":"true"},"#"),o(" Downloads")],-1),_={class:"custom-container warning"},f=e("p",{class:"custom-container-title"},"WARNING",-1),g={href:"https://ryochan7.github.io/ds4windows-site/",target:"_blank",rel:"noopener noreferrer"},w={href:"https://cemuhook.sshnuke.net/",target:"_blank",rel:"noopener noreferrer"},k=e("ul",null,[e("li",null,"If you installed Cemuhook earlier, you don't need to download this")],-1),C=d('<h2 id="installing-cemuhook" tabindex="-1"><a class="header-anchor" href="#installing-cemuhook" aria-hidden="true">#</a> Installing Cemuhook</h2><ol><li>Extract the contents of the Cemuhook <code>.zip</code> file to the Cemu directory</li><li>Open the Cemu application</li><li>In the bottom-right-hand corner, it should say <code>Cemu plugin x.x.x.x by rajkosto</code><ul><li>This means Cemuhook has been successfully installed</li><li>If doesn&#39;t say this, ensure that your Cemu directory looks like this:</li></ul></li></ol><p><img src="'+h+'" alt="A screenshot of Cemuhook correctly set up"></p><h2 id="instructions" tabindex="-1"><a class="header-anchor" href="#instructions" aria-hidden="true">#</a> Instructions</h2><ol><li>Download and extract DS4Windows to your computer <ul><li>Select the <code>_x64.zip</code> file</li></ul></li><li>Connect your controller to Windows via USB or Bluetooth</li><li>Open the DS4Windows application</li><li>Microsoft .NET 5.0 or newer is required; install it if asked</li><li>Ensure your controller is registered with DS4Windows</li><li>Navigate to the <code>Settings</code> tab</li><li>Enable <code>UDP Server</code><ul><li>This should say <code>127.0.0.1</code> with port <code>26760</code></li></ul></li><li>Open the Cemu application</li><li>On the top bar, go to <code>Settings</code> -&gt; <code>Input settings</code></li><li>Change <code>Emulate controller</code> to <code>Wii U Gamepad</code></li><li>Change <code>Controller API</code> to <code>XInput</code></li><li>Change <code>Controller</code> to <code>Controller X</code></li><li>Proceed to map all your controller button inputs</li><li>At the top, enter in a controller profile name, e.g. <code>Gamepad Controller</code></li><li>Click <code>Save</code></li></ol><p><img src="'+u+'" alt=""></p><h2 id="motion-controls" tabindex="-1"><a class="header-anchor" href="#motion-controls" aria-hidden="true">#</a> Motion Controls</h2><ol><li>On the top bar, go to <code>Settings</code> -&gt; <code>Gamepad Motion Source</code></li><li>Select your controller from this list</li><li>Select <code>By slot</code></li></ol>',8);function b(x,y){const n=i("router-link"),l=i("ExternalLinkIcon");return s(),a("div",null,[m,e("div",_,[f,e("p",null,[o('DualShock 3 controller motion support may not be compatible with DS4Windows. Please refer to the "'),t(n,{to:"xbox"},{default:c(()=>[o("Xbox / Others")]),_:1}),o('" section.')])]),e("ul",null,[e("li",null,[o("The latest release of "),e("a",g,[o("DS4Windows by Ryochan7"),t(l)])]),e("li",null,[o("The latest release of "),e("a",w,[o("Cemuhook"),t(l)]),k])]),C])}var v=r(p,[["render",b],["__file","ds4windows.html.vue"]]);export{v as default};
