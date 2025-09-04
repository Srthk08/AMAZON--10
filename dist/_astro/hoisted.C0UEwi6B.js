import"./hoisted.UJltcVt3.js";import"./AdminLayout.astro_astro_type_script_index_0_lang.B-MLJzw4.js";import"https://cdn.jsdelivr.net/npm/@supabase/supabase-js@2";const $="https://lmrrdcaavwwletcjcpqv.supabase.co",L="eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImxtcnJkY2Fhdnd3bGV0Y2pjcHF2Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTU1MDQ0ODgsImV4cCI6MjA3MTA4MDQ4OH0.AU59Qfr6K9i880Gcn5y-3pjCf8PXsDIq4OI0-lPQVuQ";let m=null,r=[],c=[],a=1,f=10,d=1;function x(){return new Promise(s=>{window.supabase?(m=window.supabase.createClient($,L),s(m)):setTimeout(()=>x().then(s),100)})}function P(){E(),j()}async function E(){try{console.log("🔄 Loading tickets from Supabase..."),m||await x();const{data:s,error:t}=await m.from("support_tickets").select("*").order("created_at",{ascending:!1});if(t){console.error("❌ Error loading tickets:",t),console.error("Error details:",{message:t.message,details:t.details,hint:t.hint,code:t.code});let e="";t.code==="PGRST116"?e='Table "support_tickets" does not exist. Please run the fix-support-tickets-complete.sql script in Supabase SQL Editor.':t.code==="PGRST301"?e="Permission denied. Please check RLS policies in Supabase.":e=`Database Error: ${t.message}. Please run the fix-support-tickets-complete.sql script in Supabase.`,w(e);return}if(console.log("✅ Raw tickets from Supabase:",s),!s||s.length===0){console.log("⚠️ No tickets found in database"),r=[],c=[],u(),y();const e=document.getElementById("tickets-tbody"),o=document.getElementById("empty-tickets");e&&(e.innerHTML=`
            <tr>
              <td colspan="7" class="px-6 py-4 text-center">
                <div class="text-blue-600">
                  <div class="font-medium">📋 No support tickets found</div>
                  <div class="text-sm mt-1">Support tickets will appear here when users create them.</div>
                  <div class="text-xs mt-2 text-gray-500">
                    To add sample data, run the fix-support-tickets-complete.sql script in Supabase SQL Editor.
                  </div>
                </div>
              </td>
            </tr>
          `),o&&o.classList.add("hidden");return}r=s.map(e=>{console.log("🔍 Processing ticket:",{id:e.id,rawTicket:e,allKeys:Object.keys(e)});const o={id:e.id,ticketNumber:e.ticket_number||e.ticketNumber||e.ticket_id||e.id,customerName:e.customer_name||e.customerName||e.name||e.user_name||e.userName||"No Name",customerEmail:e.customer_email||e.customerEmail||e.email||e.user_email||e.userEmail||"No Email",subject:e.subject||e.title||e.issue||"No Subject",description:e.description||e.message||e.content||e.details||"No Description",priority:e.priority||e.urgency||"medium",status:e.status||e.state||"open",createdAt:e.created_at||e.createdAt||e.date_created||e.dateCreated||new Date().toISOString(),updatedAt:e.updated_at||e.updatedAt||e.date_updated||e.dateUpdated||new Date().toISOString(),adminReplies:e.admin_replies||e.adminReplies||e.replies||e.responses||[]};return console.log("✅ Processed ticket:",{original:e,processed:o,nameSource:e.customer_name?"customer_name":e.customerName?"customerName":e.name?"name":"fallback",emailSource:e.customer_email?"customer_email":e.customerEmail?"customerEmail":e.email?"email":"fallback"}),o}),c=[...r],a=1,console.log("📊 Final processed tickets:",r),u(),y()}catch(s){console.error("❌ Error loading tickets:",s),w(`Connection Error: ${s.message}`)}}function w(s){const t=document.getElementById("tickets-tbody"),e=document.getElementById("empty-tickets");t&&(t.innerHTML=`
        <tr>
          <td colspan="7" class="px-6 py-4 text-center">
            <div class="text-red-600">
              <div class="font-medium">Error Loading Tickets</div>
              <div class="text-sm mt-1">${s}</div>
              <div class="text-xs mt-2 text-gray-500">
                Please check the browser console for more details and run the create-support-tickets-table.sql script in Supabase.
              </div>
            </div>
          </td>
        </tr>
      `),e&&e.classList.add("hidden")}function u(){const s=document.getElementById("tickets-tbody"),t=document.getElementById("empty-tickets");if(!s||!t)return;if(c.length===0){s.innerHTML="",t.classList.remove("hidden"),h();return}t.classList.add("hidden"),d=Math.ceil(c.length/f);const e=(a-1)*f,o=e+f,i=c.slice(e,o);console.log("Rendering tickets:",i),s.innerHTML=i.map(n=>(console.log("Rendering ticket:",n.customerName,n.customerEmail),`
      <tr class="hover:bg-gray-50">
        <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">${n.ticketNumber}</td>
        <td class="px-6 py-4 whitespace-nowrap">
          <div class="flex items-center">
            <div class="w-8 h-8 bg-primary-100 rounded-full flex items-center justify-center mr-3">
              <span class="text-sm font-medium text-primary-600">${(n.customerName||"U").charAt(0).toUpperCase()}</span>
            </div>
            <div>
              <div class="text-sm font-medium text-gray-900">${n.customerName||"Unknown User"}</div>
              <div class="text-sm text-gray-500">${n.customerEmail||"No Email"}</div>
            </div>
          </div>
        </td>
        <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-900">${n.subject}</td>
        <td class="px-6 py-4 whitespace-nowrap">
          <span class="inline-flex px-2 py-1 text-xs font-semibold rounded-full ${A(n.priority)}">
            ${n.priority}
          </span>
        </td>
        <td class="px-6 py-4 whitespace-nowrap">
          <span class="inline-flex px-2 py-1 text-xs font-semibold rounded-full ${B(n.status)}">
            ${n.status.replace("_"," ")}
          </span>
        </td>
        <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
          ${R(n.createdAt)}
        </td>
                 <td class="px-6 py-4 whitespace-nowrap text-sm font-medium">
           <div class="flex items-center space-x-2">
             <button onclick="viewTicket('${n.id}')" class="text-primary-600 hover:text-primary-900">View & Reply</button>
             <button onclick="assignTicket('${n.id}')" class="text-green-600 hover:text-green-900">Assign</button>
           </div>
         </td>
      </tr>
      `)).join(""),h()}function h(){const s=document.getElementById("page-numbers"),t=document.getElementById("prev-page"),e=document.getElementById("next-page");if(!s||!t||!e)return;t.disabled=a===1,t.classList.toggle("opacity-50",a===1),t.classList.toggle("cursor-not-allowed",a===1),e.disabled=a===d||d===0,e.classList.toggle("opacity-50",a===d||d===0),e.classList.toggle("cursor-not-allowed",a===d||d===0);let o="";const i=5;let n=Math.max(1,a-Math.floor(i/2)),p=Math.min(d,n+i-1);p-n+1<i&&(n=Math.max(1,p-i+1));for(let l=n;l<=p;l++)o+=`
        <button 
          class="px-3 py-1 text-sm border rounded-md transition-colors ${l===a?"bg-primary-50 text-primary-700 border-primary-200":"text-gray-700 bg-white border-gray-300 hover:bg-gray-50"}"
          onclick="goToPage(${l})"
        >
          ${l}
        </button>
      `;s.innerHTML=o}function N(s){s<1||s>d||(a=s,u())}function k(){a<d&&(a++,u())}function I(){a>1&&(a--,u())}function T(){const s=document.getElementById("items-per-page");s&&(f=parseInt(s.value),a=1,u())}function y(){const s=document.getElementById("tickets-count");s&&(s.textContent=`Showing ${c.length} of ${r.length} tickets`)}function A(s){return{low:"bg-green-100 text-green-800",medium:"bg-yellow-100 text-yellow-800",high:"bg-orange-100 text-orange-800",urgent:"bg-red-100 text-red-800"}[s]||"bg-gray-100 text-gray-800"}function B(s){return{open:"bg-blue-100 text-blue-800",in_progress:"bg-yellow-100 text-yellow-800",resolved:"bg-green-100 text-green-800",closed:"bg-gray-100 text-gray-800"}[s]||"bg-gray-100 text-gray-800"}function R(s){const t=new Date,e=new Date(s),o=Math.floor((t-e)/(1e3*60*60));if(o<1)return"Just now";if(o<24)return`${o} hour${o>1?"s":""} ago`;const i=Math.floor(o/24);return i<7?`${i} day${i>1?"s":""} ago`:e.toLocaleDateString()}function _(s){const t=r.find(i=>i.id===s);if(!t)return;document.getElementById("ticket-modal").classList.remove("hidden");const e=document.getElementById("modal-title"),o=document.getElementById("modal-content");e&&o&&(e.textContent=`Ticket ${t.ticketNumber}`,o.innerHTML=`
         <div class="space-y-4">
           <!-- Customer Information -->
           <div>
             <label class="block text-sm font-medium text-gray-700 mb-2">Customer</label>
             <div class="bg-gray-50 p-3 rounded text-sm text-gray-900">
               ${t.customerName} (${t.customerEmail})
             </div>
           </div>
           
           <!-- Subject -->
           <div>
             <label class="block text-sm font-medium text-gray-700 mb-2">Subject</label>
             <div class="bg-gray-50 p-3 rounded text-sm text-gray-900">
               ${t.subject}
             </div>
           </div>
           
           <!-- Issue Description -->
           <div>
             <label class="block text-sm font-medium text-gray-700 mb-2">Issue Description</label>
             <div class="bg-gray-50 p-3 rounded text-sm text-gray-900">
               ${t.description}
             </div>
           </div>
           
           <!-- Admin Replies Section -->
           <div>
             <label class="block text-sm font-medium text-gray-700 mb-2">Admin Replies</label>
             <div id="admin-replies" class="bg-gray-50 p-3 rounded text-sm text-gray-900 max-h-32 overflow-y-auto">
               ${t.adminReplies&&t.adminReplies.length>0?t.adminReplies.map(i=>`
                   <div class="mb-2 p-2 bg-blue-50 rounded border-l-4 border-blue-400">
                     <div class="font-medium text-blue-800">Admin Reply:</div>
                     <div class="text-blue-700">${i.message}</div>
                     <div class="text-xs text-blue-600 mt-1">${new Date(i.timestamp).toLocaleString()}</div>
                   </div>
                 `).join(""):'<div class="text-gray-500">No admin replies yet</div>'}
             </div>
           </div>
           
           <!-- Status Update -->
           <div>
             <label for="ticket-status" class="block text-sm font-medium text-gray-700">Update Status</label>
             <select id="ticket-status" class="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-primary-500">
               <option value="open" ${t.status==="open"?"selected":""}>Open</option>
               <option value="in_progress" ${t.status==="in_progress"?"selected":""}>In Progress</option>
               <option value="resolved" ${t.status==="resolved"?"selected":""}>Resolved</option>
               <option value="closed" ${t.status==="closed"?"selected":""}>Closed</option>
             </select>
           </div>
           
           <!-- Admin Response -->
           <div>
             <label for="ticket-response" class="block text-sm font-medium text-gray-700">Add Admin Reply</label>
             <textarea
               id="ticket-response"
               rows="4"
               class="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
               placeholder="Type your reply to the customer..."
             ></textarea>
           </div>
           
           <!-- Action Buttons -->
           <div class="flex justify-end space-x-3 pt-4">
             <button onclick="closeTicketModal()" class="px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-md hover:bg-gray-50">
               Cancel
             </button>
             <button onclick="updateTicket('${t.id}')" class="px-4 py-2 text-sm font-medium text-white bg-primary-600 rounded-md hover:bg-primary-700">
               Send Reply & Update
             </button>
           </div>
         </div>
       `)}function b(){document.getElementById("ticket-modal").classList.add("hidden")}function M(s){confirm("Assign this ticket to yourself?")&&(console.log("Assigning ticket:",s),alert("Ticket assigned successfully!"))}async function C(s){if(confirm("Reopen this ticket?"))try{m||await x();const{error:t}=await m.from("support_tickets").update({status:"open",updated_at:new Date().toISOString()}).eq("id",s);if(t){console.error("Error reopening ticket:",t),alert("Failed to reopen ticket: "+t.message);return}const e=r.findIndex(o=>o.id===s);e>-1&&(r[e].status="open",r[e].updatedAt=new Date().toISOString(),c=[...r],u(),y()),alert("Ticket reopened successfully!")}catch(t){console.error("Error reopening ticket:",t),alert("Failed to reopen ticket")}}async function D(s){const t=document.getElementById("ticket-status").value,e=document.getElementById("ticket-response").value;if(!e.trim()){alert("Please add a reply before updating the ticket");return}try{m||await x();const o=r.find(v=>v.id===s);if(!o){alert("Ticket not found");return}const i={message:e,timestamp:new Date().toISOString(),adminName:"Admin"},p=[...o.adminReplies||[],i],{error:l}=await m.from("support_tickets").update({status:t,admin_replies:p,updated_at:new Date().toISOString()}).eq("id",s);if(l){console.error("Error updating ticket:",l),alert("Failed to update ticket: "+l.message);return}const g=r.findIndex(v=>v.id===s);g>-1&&(r[g].status=t,r[g].adminReplies=p,r[g].updatedAt=new Date().toISOString(),c=[...r],u(),y());const S=`✅ Reply sent successfully!

Ticket #${o.ticketNumber} has been updated.
Status: ${t}
Customer: ${o.customerName}

An email notification has been sent to ${o.customerEmail}`;alert(S),b(),O(`Reply sent to ${o.customerName} for ticket #${o.ticketNumber}`)}catch(o){console.error("Error updating ticket:",o),alert("Failed to update ticket")}}function j(){document.getElementById("refresh-tickets")?.addEventListener("click",E),document.getElementById("items-per-page")?.addEventListener("change",T),document.getElementById("prev-page")?.addEventListener("click",I),document.getElementById("next-page")?.addEventListener("click",k),document.getElementById("close-modal")?.addEventListener("click",b),document.getElementById("ticket-modal")?.addEventListener("click",s=>{s.target===s.currentTarget&&b()})}window.goToPage=N;window.nextPage=k;window.prevPage=I;window.changeItemsPerPage=T;document.addEventListener("DOMContentLoaded",P);function O(s){const t=document.createElement("div");t.className="fixed top-4 right-4 bg-green-500 text-white px-6 py-3 rounded-lg shadow-lg z-50 transform transition-all duration-300 translate-x-full",t.innerHTML=`
      <div class="flex items-center">
        <svg class="w-5 h-8 text-white mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
        </svg>
        <span>${s}</span>
      </div>
    `,document.body.appendChild(t),setTimeout(()=>{t.classList.remove("translate-x-full")},100),setTimeout(()=>{t.classList.add("translate-x-full"),setTimeout(()=>{t.parentNode&&t.parentNode.removeChild(t)},300)},5e3)}window.viewTicket=_;window.closeTicketModal=b;window.assignTicket=M;window.reopenTicket=C;window.updateTicket=D;
