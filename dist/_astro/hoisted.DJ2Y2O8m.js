import"./StandaloneAdminLayout.astro_astro_type_script_index_0_lang.CiBD5cOw.js";import"https://cdn.jsdelivr.net/npm/@supabase/supabase-js@2";const w="https://lmrrdcaavwwletcjcpqv.supabase.co",b="eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImxtcnJkY2Fhdnd3bGV0Y2pjcHF2Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTU1MDQ0ODgsImV4cCI6MjA3MTA4MDQ4OH0.AU59Qfr6K9i880Gcn5y-3pjCf8PXsDIq4OI0-lPQVuQ";let r=null;function g(){return new Promise(e=>{window.supabase?(r=window.supabase.createClient(w,b),e(r)):setTimeout(()=>g().then(e),100)})}console.log("Admin dashboard loaded successfully");document.addEventListener("DOMContentLoaded",async()=>{console.log("🔄 Loading admin dashboard data..."),console.log("✅ Admin dashboard JavaScript is running!"),r||await g(),console.log("🔍 Supabase client:",r);const e=document.getElementById("users-table-body"),a=document.getElementById("contact-table-body");e&&(e.innerHTML='<tr><td colspan="6" class="px-6 py-4 text-center text-blue-500">JavaScript is working! Loading data...</td></tr>'),a&&(a.innerHTML='<tr><td colspan="6" class="px-6 py-4 text-center text-blue-500">JavaScript is working! Loading data...</td></tr>');try{console.log("🔍 Testing Supabase connection...");const{data:o,error:t}=await r.from("profiles").select("count",{count:"exact",head:!0});console.log("Profiles table test:",{data:o,error:t});const{data:n,error:s}=await r.from("contact_submissions").select("count",{count:"exact",head:!0});if(console.log("Contact submissions table test:",{data:n,error:s}),t&&(console.error("❌ Profiles table error:",t),alert("Profiles table error: "+t.message)),s){console.error("❌ Contact submissions table error:",s);const c=document.getElementById("contact-table-body");c&&(s.message.includes("Could not find the table")?c.innerHTML=`
              <tr>
                <td colspan="6" class="px-6 py-4 text-center text-red-500">
                  <div class="space-y-2">
                    <p class="font-semibold">Table 'contact_submissions' not found!</p>
                    <p class="text-sm">The database table needs to be created.</p>
                    <p class="text-sm">Please run the database migration or contact the administrator.</p>
                  </div>
                </td>
              </tr>
            `:c.innerHTML=`
              <tr>
                <td colspan="6" class="px-6 py-4 text-center text-red-500">
                  Error: ${s.message}
                </td>
              </tr>
            `)}console.log("✅ Supabase connection tests completed"),console.log("🔄 Loading users data..."),await h(),console.log("🔄 Loading contact data..."),await v(),console.log("🔄 Loading tickets data..."),await _(),console.log("🔄 Loading cart data..."),await $(),console.log("🔄 Updating summary cards..."),await E(),console.log("✅ All admin data loaded successfully")}catch(o){console.error("❌ Error loading admin data:",o),alert("Error loading admin data: "+o.message)}});async function h(){try{console.log("🔄 Loading users data from profiles table...");const{data:e,error:a}=await r.from("profiles").select("*").order("created_at",{ascending:!1});if(a){console.error("❌ Error loading users:",a),console.error("Error details:",{message:a.message,details:a.details,hint:a.hint,code:a.code});const t=document.getElementById("users-table-body");t&&(t.innerHTML=`
            <tr>
              <td colspan="6" class="px-6 py-4 text-center text-red-500">
                Error loading users: ${a.message}
              </td>
            </tr>
          `);return}console.log("✅ Users loaded successfully:",e?.length||0,"users found");const o=document.getElementById("users-table-body");if(!o)return;e&&e.length>0?o.innerHTML=e.map(t=>`
          <tr>
            <td class="px-6 py-4 whitespace-nowrap">
              <div class="flex items-center">
                <div class="flex-shrink-0 h-10 w-10">
                  <div class="h-10 w-10 rounded-full bg-blue-100 flex items-center justify-center">
                    <span class="text-sm font-medium text-blue-600">${t.full_name?t.full_name.charAt(0).toUpperCase():"U"}</span>
                  </div>
                </div>
                <div class="ml-4">
                  <div class="text-sm font-medium text-gray-900">${t.full_name||"No Name"}</div>
                </div>
              </div>
            </td>
            <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-900">${t.email}</td>
            <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-900">${t.phone||"-"}</td>
            <td class="px-6 py-4 whitespace-nowrap">
              <span class="px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${t.role==="admin"?"bg-red-100 text-red-800":"bg-green-100 text-green-800"}">
                ${t.role||"customer"}
              </span>
            </td>
            <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-900">${new Date(t.created_at).toLocaleDateString()}</td>
            <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-900">${t.last_login?new Date(t.last_login).toLocaleDateString():"-"}</td>
          </tr>
        `).join(""):o.innerHTML='<tr><td colspan="6" class="px-6 py-4 text-center text-gray-500">No users found</td></tr>'}catch(e){console.error("Error loading users data:",e)}}async function v(){try{console.log("🔄 Loading contact form data from contact_submissions table...");const{data:e,error:a}=await r.from("contact_submissions").select("*").order("created_at",{ascending:!1});if(a){console.error("❌ Error loading contact data:",a),console.error("Error details:",{message:a.message,details:a.details,hint:a.hint,code:a.code});const t=document.getElementById("contact-table-body");t&&(t.innerHTML=`
            <tr>
              <td colspan="6" class="px-6 py-4 text-center text-red-500">
                Error loading contact data: ${a.message}
              </td>
            </tr>
          `);return}console.log("✅ Contact data loaded successfully:",e?.length||0,"contacts found");const o=document.getElementById("contact-table-body");if(!o)return;e&&e.length>0?o.innerHTML=e.map(t=>`
          <tr>
            <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">${t.first_name} ${t.last_name}</td>
            <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-900">${t.email}</td>
            <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-900">${t.phone||"-"}</td>
            <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-900">${t.company_name||"-"}</td>
            <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-900">${t.project_type||"-"}</td>
            <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-900">${new Date(t.created_at).toLocaleDateString()}</td>
            <td class="px-6 py-4 whitespace-nowrap text-sm font-medium">
              <button onclick="viewContactDetails('${t.id}')" class="text-blue-600 hover:text-blue-900">View Details</button>
            </td>
          </tr>
        `).join(""):o.innerHTML='<tr><td colspan="6" class="px-6 py-4 text-center text-gray-500">No contact submissions found</td></tr>'}catch(e){console.error("Error loading contact data:",e)}}async function _(){try{console.log("🔄 Loading support tickets data...");const{data:e,error:a}=await r.from("support_tickets").select("*").order("created_at",{ascending:!1});if(a){console.error("Error loading tickets data:",a);return}const o=document.getElementById("tickets-table-body");if(!o)return;e&&e.length>0?o.innerHTML=e.map(t=>`
          <tr>
            <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">#${t.id}</td>
            <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-900">${t.subject}</td>
            <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-900">${t.category}</td>
            <td class="px-6 py-4 whitespace-nowrap">
              <span class="px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${t.priority==="high"?"bg-red-100 text-red-800":t.priority==="medium"?"bg-yellow-100 text-yellow-800":"bg-green-100 text-green-800"}">
                ${t.priority}
              </span>
            </td>
            <td class="px-6 py-4 whitespace-nowrap">
              <span class="px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${t.status==="open"?"bg-blue-100 text-blue-800":"bg-gray-100 text-gray-800"}">
                ${t.status}
              </span>
            </td>
            <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-900">${new Date(t.created_at).toLocaleDateString()}</td>
          </tr>
        `).join(""):o.innerHTML='<tr><td colspan="6" class="px-6 py-4 text-center text-gray-500">No support tickets found</td></tr>'}catch(e){console.error("Error loading tickets data:",e)}}async function $(){try{console.log("🔄 Loading cart customizations data...");const{data:e,error:a}=await r.from("cart_customizations").select("*").order("created_at",{ascending:!1});if(a){console.error("Error loading cart data:",a);return}const o=document.getElementById("cart-table-body");if(!o)return;e&&e.length>0?o.innerHTML=e.map(t=>`
          <tr>
            <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-900">${t.user_email}</td>
            <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-900">${t.project_name||"-"}</td>
            <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-900">${t.app_name||"-"}</td>
            <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-900">${t.contact_person||"-"}</td>
            <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-900">₹${t.total_amount?t.total_amount.toLocaleString():"0"}</td>
            <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-900">${new Date(t.created_at).toLocaleDateString()}</td>
          </tr>
        `).join(""):o.innerHTML='<tr><td colspan="6" class="px-6 py-4 text-center text-gray-500">No cart customizations found</td></tr>'}catch(e){console.error("Error loading cart data:",e)}}async function E(){try{const[e,a,o,t]=await Promise.all([r.from("profiles").select("*",{count:"exact",head:!0}),r.from("contact_submissions").select("*",{count:"exact",head:!0}),r.from("support_tickets").select("*",{count:"exact",head:!0}),r.from("cart_customizations").select("*",{count:"exact",head:!0})]),n=e.count||0,s=a.count||0,c=o.count||0,u=t.count||0,d=document.getElementById("total-users"),l=document.getElementById("total-orders"),i=document.getElementById("total-tickets"),p=document.getElementById("total-revenue");if(d&&(d.textContent=n.toString()),l&&(l.textContent=u.toString()),i&&(i.textContent=c.toString()),p){const{data:m}=await r.from("cart_customizations").select("total_amount"),x=m?m.reduce((y,f)=>y+(f.total_amount||0),0):0;p.textContent=`₹${x.toLocaleString()}`}console.log("✅ Summary cards updated")}catch(e){console.error("Error updating summary cards:",e)}}window.viewContactDetails=async function(e){console.log("Viewing contact details for:",e);try{const{data:a,error:o}=await r.from("contact_submissions").select("*").eq("id",e).single();if(o){console.error("Error loading contact details:",o);return}const t=document.getElementById("details-modal"),n=document.getElementById("modal-title"),s=document.getElementById("modal-content");n.textContent="Contact Form Details",s.innerHTML=`
        <div class="space-y-4">
          <div class="bg-gray-50 p-4 rounded-lg">
            <h4 class="text-lg font-semibold text-gray-900 mb-3">Contact Information</h4>
            <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <p class="text-sm text-gray-600"><strong>Name:</strong> ${a.first_name} ${a.last_name}</p>
                <p class="text-sm text-gray-600"><strong>Email:</strong> ${a.email||"Not provided"}</p>
                <p class="text-sm text-gray-600"><strong>Phone:</strong> ${a.phone||"Not provided"}</p>
              </div>
              <div>
                <p class="text-sm text-gray-600"><strong>Company:</strong> ${a.company_name||"Not provided"}</p>
                <p class="text-sm text-gray-600"><strong>Project Type:</strong> ${a.project_type||"Not specified"}</p>
                <p class="text-sm text-gray-600"><strong>Submitted:</strong> ${new Date(a.created_at).toLocaleDateString()}</p>
              </div>
            </div>
          </div>
          
          <div class="bg-gray-50 p-4 rounded-lg">
            <h5 class="font-medium text-gray-900 mb-2">Project Details</h5>
            <p class="text-sm text-gray-600">${a.project_details||a.message||"No additional details provided"}</p>
          </div>
        </div>
      `,t.classList.remove("hidden")}catch(a){console.error("Error viewing contact details:",a)}};window.showContactFormDetails=async function(){console.log("Loading all contact form details...");try{const{data:e,error:a}=await r.from("contact_submissions").select("*").order("created_at",{ascending:!1});if(a){console.error("Error loading contact details:",a);return}const o=document.getElementById("contact-details-modal"),t=document.getElementById("contact-modal-title"),n=document.getElementById("contact-modal-content");t.textContent=`All Contact Form Details (${e?.length||0} submissions)`,e&&e.length>0?n.innerHTML=`
          <div class="space-y-6 max-h-96 overflow-y-auto">
            ${e.map((s,c)=>`
              <div class="bg-gray-50 p-4 rounded-lg border">
                <div class="flex justify-between items-start mb-3">
                  <h4 class="text-lg font-semibold text-gray-900">#${c+1} - ${s.first_name} ${s.last_name}</h4>
                  <span class="text-sm text-gray-500">${new Date(s.created_at).toLocaleDateString()}</span>
                </div>
                
                <div class="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                  <div>
                    <p class="text-sm text-gray-600"><strong>Email:</strong> ${s.email||"Not provided"}</p>
                    <p class="text-sm text-gray-600"><strong>Phone:</strong> ${s.phone||"Not provided"}</p>
                    <p class="text-sm text-gray-600"><strong>Company:</strong> ${s.company_name||"Not provided"}</p>
                  </div>
                  <div>
                    <p class="text-sm text-gray-600"><strong>Project Type:</strong> ${s.project_type||"Not specified"}</p>
                    <p class="text-sm text-gray-600"><strong>Submitted:</strong> ${new Date(s.created_at).toLocaleString()}</p>
                  </div>
                </div>
                
                <div class="bg-white p-3 rounded border">
                  <h5 class="font-medium text-gray-900 mb-2">Project Details:</h5>
                  <p class="text-sm text-gray-600 whitespace-pre-wrap">${s.project_details||s.message||"No additional details provided"}</p>
                </div>
              </div>
            `).join("")}
          </div>
        `:n.innerHTML=`
          <div class="text-center py-8">
            <svg class="mx-auto h-12 w-12 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"></path>
            </svg>
            <h3 class="mt-2 text-sm font-medium text-gray-900">No contact submissions</h3>
            <p class="mt-1 text-sm text-gray-500">No contact form submissions found.</p>
          </div>
        `,o.classList.remove("hidden")}catch(e){console.error("Error loading contact details:",e)}};
