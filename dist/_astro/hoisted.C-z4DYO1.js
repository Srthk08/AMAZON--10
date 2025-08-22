import{s as c}from"./supabase.DNQg-7fe.js";import"./hoisted.CaEvvjRJ.js";const r=document.getElementById("forgot-password-form"),o=document.getElementById("error-message"),s=document.getElementById("error-text");r?.addEventListener("submit",async n=>{n.preventDefault();const a=new FormData(r).get("email");o?.classList.add("hidden");const e=r.querySelector('button[type="submit"]'),i=e.textContent;e.disabled=!0,e.innerHTML=`
        <svg class="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
          <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
          <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
        </svg>
        Sending...
      `;try{const{error:t}=await c.auth.resetPasswordForEmail(a,{redirectTo:`${window.location.origin}/reset-password`});if(t)throw t;typeof window.showToast=="function"&&window.showToast("Password reset link sent! Check your email.","success",5e3),r.reset()}catch(t){console.error("Password reset error:",t),s&&(s.textContent=t.message||"An error occurred while sending the reset link."),o?.classList.remove("hidden")}finally{e.disabled=!1,e.textContent=i}});
