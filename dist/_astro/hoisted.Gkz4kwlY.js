import"./hoisted.CaEvvjRJ.js";const s=document.getElementById("contact-form"),r=document.getElementById("success-message"),o=document.getElementById("error-message"),n=document.getElementById("error-text");s?.addEventListener("submit",async c=>{c.preventDefault(),r?.classList.add("hidden"),o?.classList.add("hidden");const e=s.querySelector('button[type="submit"]'),a=e.textContent;e.disabled=!0,e.innerHTML=`
      <svg class="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
        <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
        <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
      </svg>
      Sending...
    `;try{const t=new FormData(s),i=Object.fromEntries(t);console.log("Contact form data:",i),await new Promise(l=>setTimeout(l,1e3)),r?.classList.remove("hidden"),s.reset()}catch(t){console.error("Contact form error:",t),n&&(n.textContent=t.message||"An error occurred while sending your message."),o?.classList.remove("hidden")}finally{e.disabled=!1,e.textContent=a}});
