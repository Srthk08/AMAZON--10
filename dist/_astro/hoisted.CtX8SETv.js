import"./StandaloneAdminLayout.astro_astro_type_script_index_0_lang.CiBD5cOw.js";import"https://cdn.jsdelivr.net/npm/@supabase/supabase-js@2";import"https://cdn.tailwindcss.com/3.4.0";const w="https://lmrrdcaavwwletcjcpqv.supabase.co",b="eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImxtcnJkY2Fhdnd3bGV0Y2pjcHF2Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTU1MDQ0ODgsImV4cCI6MjA3MTA4MDQ4OH0.AU59Qfr6K9i880Gcn5y-3pjCf8PXsDIq4OI0-lPQVuQ";let s=null;function u(){return new Promise(e=>{window.supabase?(s=window.supabase.createClient(w,b),e(s)):setTimeout(()=>u().then(e),100)})}console.log("Admin dashboard loaded successfully");document.addEventListener("DOMContentLoaded",async()=>{console.log("🔄 Loading admin dashboard data..."),console.log("✅ Admin dashboard JavaScript is running!"),s||await u(),console.log("🔍 Supabase client:",s);const e=document.getElementById("users-table-body"),a=document.getElementById("contact-table-body");e&&(e.innerHTML='<tr><td colspan="6" class="px-6 py-4 text-center text-blue-500">JavaScript is working! Loading data...</td></tr>'),a&&(a.innerHTML='<tr><td colspan="6" class="px-6 py-4 text-center text-blue-500">JavaScript is working! Loading data...</td></tr>');try{console.log("🔍 Testing Supabase connection...");const{data:o,error:t}=await s.from("profiles").select("count",{count:"exact",head:!0});console.log("Profiles table test:",{data:o,error:t});const{data:c,error:r}=await s.from("contact_submissions").select("count",{count:"exact",head:!0});if(console.log("Contact submissions table test:",{data:c,error:r}),t&&(console.error("❌ Profiles table error:",t),alert("Profiles table error: "+t.message)),r){console.error("❌ Contact submissions table error:",r);const n=document.getElementById("contact-table-body");n&&(r.message.includes("Could not find the table")?n.innerHTML=`
              <tr>
                <td colspan="6" class="px-6 py-4 text-center text-red-500">
                  <div class="space-y-2">
                    <p class="font-semibold">Table 'contact_submissions' not found!</p>
                    <p class="text-sm">The database table needs to be created.</p>
                    <p class="text-sm">Please run the database migration or contact the administrator.</p>
                  </div>
                </td>
              </tr>
            `:n.innerHTML=`
              <tr>
                <td colspan="6" class="px-6 py-4 text-center text-red-500">
                  Error: ${r.message}
                </td>
              </tr>
            `)}console.log("✅ Supabase connection tests completed"),console.log("🔄 Loading users data..."),await h(),console.log("🔄 Loading contact data..."),await _(),console.log("🔄 Loading tickets data..."),await E(),console.log("🔄 Loading cart data..."),await L(),console.log("🔄 Updating summary cards..."),await $(),console.log("✅ All admin data loaded successfully")}catch(o){console.error("❌ Error loading admin data:",o),alert("Error loading admin data: "+o.message)}});async function h(){try{console.log("🔄 Loading users data from profiles table...");const{data:e,error:a}=await s.from("profiles").select("*").order("created_at",{ascending:!1});if(a){console.error("❌ Error loading users:",a),console.error("Error details:",{message:a.message,details:a.details,hint:a.hint,code:a.code});const t=document.getElementById("users-table-body");t&&(t.innerHTML=`
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
        `).join(""):o.innerHTML='<tr><td colspan="6" class="px-6 py-4 text-center text-gray-500">No users found</td></tr>'}catch(e){console.error("Error loading users data:",e)}}async function _(){try{console.log("🔄 Loading contact form data from contact_submissions table...");const{data:e,error:a}=await s.from("contact_submissions").select("*").order("created_at",{ascending:!1});if(a){console.error("❌ Error loading contact data:",a),console.error("Error details:",{message:a.message,details:a.details,hint:a.hint,code:a.code});const t=document.getElementById("contact-table-body");t&&(t.innerHTML=`
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
          </tr>
        `).join(""):o.innerHTML='<tr><td colspan="6" class="px-6 py-4 text-center text-gray-500">No contact submissions found</td></tr>'}catch(e){console.error("Error loading contact data:",e)}}async function E(){try{console.log("🔄 Loading support tickets data...");const{data:e,error:a}=await s.from("support_tickets").select("*").order("created_at",{ascending:!1});if(a){console.error("Error loading tickets data:",a);return}const o=document.getElementById("tickets-table-body");if(!o)return;e&&e.length>0?o.innerHTML=e.map(t=>`
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
        `).join(""):o.innerHTML='<tr><td colspan="6" class="px-6 py-4 text-center text-gray-500">No support tickets found</td></tr>'}catch(e){console.error("Error loading tickets data:",e)}}async function L(){try{console.log("🔄 Loading cart customizations data...");const{data:e,error:a}=await s.from("cart_customizations").select("*").order("created_at",{ascending:!1});if(a){console.error("Error loading cart data:",a);return}const o=document.getElementById("cart-table-body");if(!o)return;e&&e.length>0?o.innerHTML=e.map(t=>`
          <tr>
            <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-900">${t.user_email}</td>
            <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-900">${t.project_name||"-"}</td>
            <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-900">${t.app_name||"-"}</td>
            <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-900">${t.contact_person||"-"}</td>
            <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-900">₹${t.total_amount?t.total_amount.toLocaleString():"0"}</td>
            <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-900">${new Date(t.created_at).toLocaleDateString()}</td>
          </tr>
        `).join(""):o.innerHTML='<tr><td colspan="6" class="px-6 py-4 text-center text-gray-500">No cart customizations found</td></tr>'}catch(e){console.error("Error loading cart data:",e)}}async function $(){try{const[e,a,o,t]=await Promise.all([s.from("profiles").select("*",{count:"exact",head:!0}),s.from("contact_submissions").select("*",{count:"exact",head:!0}),s.from("support_tickets").select("*",{count:"exact",head:!0}),s.from("cart_customizations").select("*",{count:"exact",head:!0})]),c=e.count||0,r=a.count||0,n=o.count||0,g=t.count||0,l=document.getElementById("total-users"),d=document.getElementById("total-orders"),i=document.getElementById("total-tickets"),p=document.getElementById("total-revenue");if(l&&(l.textContent=c.toString()),d&&(d.textContent=g.toString()),i&&(i.textContent=n.toString()),p){const{data:m}=await s.from("cart_customizations").select("total_amount"),x=m?m.reduce((y,f)=>y+(f.total_amount||0),0):0;p.textContent=`₹${x.toLocaleString()}`}console.log("✅ Summary cards updated")}catch(e){console.error("Error updating summary cards:",e)}}
