document.querySelectorAll('a[href^="#"]').forEach(t=>{t.addEventListener("click",function(n){n.preventDefault();const e=document.querySelector(this.getAttribute("href"));e&&e.scrollIntoView({behavior:"smooth",block:"start"})})});document.querySelectorAll('button[type="submit"]').forEach(t=>{t.addEventListener("click",function(){this.form&&this.form.checkValidity()&&(this.disabled=!0,this.innerHTML='<svg class="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"><circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle><path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path></svg>Processing...',setTimeout(()=>{this.disabled=!1,this.innerHTML=this.dataset.originalText||"Submit"},3e3))})});document.querySelectorAll('button[type="submit"]').forEach(t=>{t.dataset.originalText=t.innerHTML});const u=document.getElementById("mobile-menu-button"),m=document.getElementById("mobile-menu");u?.addEventListener("click",()=>{m?.classList.toggle("hidden")});const r=document.getElementById("user-menu-button"),s=document.getElementById("user-menu");r?.addEventListener("click",()=>{s?.classList.toggle("hidden")});document.addEventListener("click",t=>{!r?.contains(t.target)&&!s?.contains(t.target)&&s?.classList.add("hidden")});const h=document.getElementById("logout-btn");h?.addEventListener("click",async()=>{try{(await fetch("/api/auth/logout",{method:"POST"})).ok&&(window.location.href="/")}catch(t){console.error("Logout error:",t),window.location.href="/"}});const i=async()=>{try{const t=await fetch("/api/cart/count");if(t.ok){const{count:n}=await t.json(),e=document.getElementById("cart-count");e&&(e.textContent=n.toString(),e.style.display=n>0?"flex":"none")}}catch(t){console.error("Error updating cart count:",t)}};document.getElementById("cart-count")&&i();window.addEventListener("cartUpdated",i);window.showToast=function(t,n="info",e=5e3){document.querySelectorAll('[id^="toast-"]').forEach(d=>d.remove());const c=`toast-${Date.now()}`,o=document.createElement("div");o.id=c,o.className="fixed top-4 right-4 z-50 max-w-sm w-full bg-white border-l-4 shadow-lg rounded-lg transform transition-all duration-300 ease-in-out translate-x-full opacity-0";const l={success:"border-green-600",error:"border-red-600",info:"border-blue-600",warning:"border-yellow-600"};o.className+=` ${l[n]}`;const a={success:"text-green-800",error:"text-red-800",info:"text-blue-800",warning:"text-yellow-800"};o.innerHTML=`
      <div class="flex items-center p-4">
        <div class="ml-3 flex-1">
          <p class="text-sm font-medium ${a[n]}">${t}</p>
        </div>
        <div class="ml-4 flex-shrink-0">
          <button
            type="button"
            class="text-gray-400 hover:text-gray-600 focus:outline-none focus:text-gray-600 transition-colors"
            onclick="this.parentElement.parentElement.parentElement.remove()"
          >
            <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path>
            </svg>
          </button>
        </div>
      </div>
    `,document.body.appendChild(o),setTimeout(()=>{o.classList.remove("translate-x-full","opacity-0"),o.classList.add("translate-x-0","opacity-100")},100),e>0&&setTimeout(()=>{o.parentElement&&o.remove()},e)};
