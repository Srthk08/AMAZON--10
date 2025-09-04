import{s as d}from"./supabase.ASU9rNY7.js";import"./hoisted.UJltcVt3.js";import"./AuthGuard.astro_astro_type_script_index_0_lang.D4Znhmp3.js";import"./index.BFAZBQoJ.js";function x(){const e=document.getElementById("ticketModal");e&&(e.classList.remove("hidden"),b())}async function b(){try{const{data:{user:e}}=await d.auth.getUser();if(e){const t=document.getElementById("ticketEmail");t&&(t.value=e.email||"")}}catch(e){console.error("Error pre-filling form:",e)}}function m(){const e=document.getElementById("ticketModal"),t=document.getElementById("ticketForm");e&&(e.classList.add("hidden"),t&&t.reset())}async function v(){const e=document.getElementById("myTicketsModal");e&&(e.classList.remove("hidden"),await w())}function h(){const e=document.getElementById("myTicketsModal");e&&e.classList.add("hidden")}async function w(){try{const{data:{user:e}}=await d.auth.getUser();if(!e){alert("Please login to view your tickets");return}const{data:t,error:l}=await d.from("support_tickets").select("*").eq("customer_email",e.email).order("created_at",{ascending:!1});if(l){alert("Error loading tickets: "+l.message);return}const n=document.getElementById("my-tickets-list"),o=document.getElementById("no-tickets");if(!t||t.length===0){n.classList.add("hidden"),o.classList.remove("hidden");return}o.classList.add("hidden"),n.classList.remove("hidden"),n.innerHTML=t.map(s=>{let r="";if(s.admin_replies){let i=[];if(Array.isArray(s.admin_replies))i=s.admin_replies;else if(typeof s.admin_replies=="string")try{i=JSON.parse(s.admin_replies)}catch{i=[{message:s.admin_replies,timestamp:new Date().toISOString()}]}else typeof s.admin_replies=="object"&&(i=[s.admin_replies]);i&&i.length>0?r=`
              <div class="mt-4 p-3 bg-blue-50 rounded-lg">
                <h5 class="font-semibold text-blue-900 mb-2">Admin Replies (${i.length}):</h5>
                ${i.map((a,u)=>`
                  <div class="mb-3 p-3 bg-white rounded border-l-4 border-blue-500">
                    <div class="flex items-start justify-between">
                      <div class="flex-1">
                        <p class="text-sm text-gray-700">${a.message||a.reply||a||"No message"}</p>
                        ${a.admin_name?`<p class="text-xs text-blue-600 mt-1">By: ${a.admin_name}</p>`:""}
                      </div>
                    </div>
                    <p class="text-xs text-gray-500 mt-2">
                      ${a.timestamp?new Date(a.timestamp).toLocaleString():a.created_at?new Date(a.created_at).toLocaleString():"Recently"}
                    </p>
                  </div>
                `).join("")}
              </div>
            `:r=`
              <div class="mt-4 p-3 bg-gray-50 rounded-lg">
                <p class="text-sm text-gray-500">No admin replies yet</p>
              </div>
            `}else r=`
            <div class="mt-4 p-3 bg-gray-50 rounded-lg">
              <p class="text-sm text-gray-500">No admin replies yet</p>
            </div>
          `;return`
          <div class="border border-gray-200 rounded-lg p-4">
            <div class="flex items-center justify-between mb-3">
              <div class="flex items-center space-x-3">
                <span class="inline-flex px-2 py-1 text-xs font-semibold rounded-full ${_(s.priority)}">
                  ${s.priority}
                </span>
                <span class="inline-flex px-2 py-1 text-xs font-semibold rounded-full ${E(s.status)}">
                  ${s.status.replace("_"," ")}
                </span>
              </div>
              <span class="text-sm text-gray-500">${new Date(s.created_at).toLocaleDateString()}</span>
            </div>
            
            <h4 class="font-semibold text-gray-900 mb-2">${s.subject}</h4>
            <p class="text-gray-600 text-sm mb-2">${s.description.length>100?s.description.substring(0,100)+"...":s.description}</p>
            <p class="text-gray-500 text-xs mb-3">Email: ${s.customer_email||s.user_email||"Not provided"}</p>
            <p class="text-gray-400 text-xs mb-3">Ticket #: ${s.ticket_number}</p>
            
            <div class="flex justify-between items-center mt-3">
              <button 
                onclick="viewTicketDetails('${s.id}')" 
                class="text-blue-600 hover:text-blue-800 text-sm font-medium"
              >
                View Details
              </button>
              <span class="text-xs text-gray-400">
                ${(()=>{let i=0;if(s.admin_replies)if(Array.isArray(s.admin_replies))i=s.admin_replies.length;else if(typeof s.admin_replies=="string")try{const a=JSON.parse(s.admin_replies);i=Array.isArray(a)?a.length:1}catch{i=1}else typeof s.admin_replies=="object"&&(i=1);return i>0?`${i} admin ${i===1?"reply":"replies"}`:"No admin replies yet"})()}
              </span>
            </div>
            
            <div id="ticket-details-${s.id}" class="hidden mt-4">
              ${r}
            </div>
          </div>
        `}).join("")}catch(e){alert("Error loading tickets: "+e.message)}}function _(e){return{low:"bg-green-100 text-green-800",medium:"bg-yellow-100 text-yellow-800",high:"bg-orange-100 text-orange-800",urgent:"bg-red-100 text-red-800"}[e]||"bg-gray-100 text-gray-800"}function E(e){return{open:"bg-blue-100 text-blue-800",in_progress:"bg-yellow-100 text-yellow-800",resolved:"bg-green-100 text-green-800",closed:"bg-gray-100 text-gray-800"}[e]||"bg-gray-100 text-gray-800"}function k(e){const t=document.getElementById(`ticket-details-${e}`);t&&(t.classList.contains("hidden")?(t.classList.remove("hidden"),t.style.display="block"):(t.classList.add("hidden"),t.style.display="none"))}window.viewTicketDetails=k;function T(){const e=document.getElementById("ticketForm"),t=document.getElementById("submitTicketBtn");e&&t&&e.addEventListener("submit",async function(n){n.preventDefault();const o=document.getElementById("ticketSubject").value,s=document.getElementById("ticketEmail").value,r=document.getElementById("ticketPriority").value,i=document.getElementById("ticketDescription").value;if(!o||!s||!r||!i){alert("Please fill in all required fields");return}if(!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(s)){alert("Please enter a valid email address");return}const u=t.textContent;t.disabled=!0,t.textContent="Creating Ticket...";try{const{data:{user:c},error:y}=await d.auth.getUser();if(y||!c){alert("Please login to create a support ticket");return}const f={ticket_number:`TKT-${Date.now()}`,customer_name:c.user_metadata?.full_name||"User",customer_email:s,subject:o,description:i,priority:r,status:"open"},{data:g,error:p}=await d.from("support_tickets").insert([f]).select().single();if(p){alert("Error creating ticket: "+p.message);return}alert(`Ticket created successfully! Ticket #${g.ticket_number}`),m(),$(`Ticket #${g.ticket_number} created successfully!`)}catch(c){alert(`An unexpected error occurred. Please try again.

Error: `+c.message)}finally{t.disabled=!1,t.textContent=u}});const l=document.getElementById("ticketModal");l&&l.addEventListener("click",function(n){n.target===this&&m()})}function $(e){const t=document.createElement("div");t.className="fixed top-4 right-4 bg-green-500 text-white px-6 py-4 rounded-lg shadow-lg z-50",t.innerHTML=`
      <div class="flex items-center">
        <svg class="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
          <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" />
        </svg>
        <span>${e}</span>
      </div>
    `,document.body.appendChild(t),setTimeout(()=>{t.parentNode&&t.parentNode.removeChild(t)},3e3)}window.openTicketModal=x;window.closeTicketModal=m;window.openMyTicketsModal=v;window.closeMyTicketsModal=h;document.addEventListener("DOMContentLoaded",T);
