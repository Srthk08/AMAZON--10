import{s as o}from"./supabase.ASU9rNY7.js";import"./hoisted.UJltcVt3.js";import"./AdminLayout.astro_astro_type_script_index_0_lang.B-MLJzw4.js";import"https://cdn.jsdelivr.net/npm/@supabase/supabase-js@2";import"./index.BFAZBQoJ.js";console.log("Admin data dashboard loaded successfully");document.addEventListener("DOMContentLoaded",async()=>{console.log("🔄 Loading admin data dashboard...");try{await Promise.all([m(),x(),y(),u(),f()]),console.log("✅ All admin data loaded successfully")}catch(s){console.error("❌ Error loading admin data:",s)}});async function m(){try{console.log("🔄 Loading users data...");const{data:s,error:t}=await o.from("profiles").select("*").order("created_at",{ascending:!1});if(t){console.error("Error loading users:",t);return}const a=document.getElementById("users-table-body");if(!a)return;s&&s.length>0?a.innerHTML=s.map(e=>`
          <tr>
            <td class="px-6 py-4 whitespace-nowrap">
              <div class="flex items-center">
                <div class="flex-shrink-0 h-10 w-10">
                  <div class="h-10 w-10 rounded-full bg-blue-100 flex items-center justify-center">
                    <span class="text-sm font-medium text-blue-600">${e.full_name?e.full_name.charAt(0).toUpperCase():"U"}</span>
                  </div>
                </div>
                <div class="ml-4">
                  <div class="text-sm font-medium text-gray-900">${e.full_name||"No Name"}</div>
                </div>
              </div>
            </td>
            <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-900">${e.email}</td>
            <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-900">${e.phone||"-"}</td>
            <td class="px-6 py-4 whitespace-nowrap">
              <span class="px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${e.role==="admin"?"bg-red-100 text-red-800":"bg-green-100 text-green-800"}">
                ${e.role||"customer"}
              </span>
            </td>
            <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-900">${new Date(e.created_at).toLocaleDateString()}</td>
            <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-900">${e.last_login?new Date(e.last_login).toLocaleDateString():"-"}</td>
            <td class="px-6 py-4 whitespace-nowrap text-sm font-medium">
              <button onclick="viewUserDetails('${e.id}')" class="text-blue-600 hover:text-blue-900">View Details</button>
            </td>
          </tr>
        `).join(""):a.innerHTML='<tr><td colspan="7" class="px-6 py-4 text-center text-gray-500">No users found</td></tr>'}catch(s){console.error("Error loading users data:",s)}}async function x(){try{console.log("🔄 Loading contact form data...");const{data:s,error:t}=await o.from("contact_submissions").select("*").order("created_at",{ascending:!1});if(t){console.error("Error loading contact data:",t);return}const a=document.getElementById("contact-table-body");if(!a)return;s&&s.length>0?a.innerHTML=s.map(e=>`
          <tr>
            <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">${e.first_name} ${e.last_name}</td>
            <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-900">${e.email||"Not provided"}</td>
            <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-900">${e.phone||"-"}</td>
            <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-900">${e.company_name||"-"}</td>
            <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-900">${e.project_type||"-"}</td>
            <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-900">${new Date(e.created_at).toLocaleDateString()}</td>
            <td class="px-6 py-4 whitespace-nowrap text-sm font-medium">
              <button onclick="viewContactDetails('${e.id}')" class="text-blue-600 hover:text-blue-900">View Details</button>
            </td>
          </tr>
        `).join(""):a.innerHTML='<tr><td colspan="7" class="px-6 py-4 text-center text-gray-500">No contact submissions found</td></tr>'}catch(s){console.error("Error loading contact data:",s)}}async function y(){try{console.log("🔄 Loading support tickets data...");const{data:s,error:t}=await o.from("support_tickets").select("*").order("created_at",{ascending:!1});if(t){console.error("Error loading tickets data:",t);return}const a=document.getElementById("tickets-table-body");if(!a)return;s&&s.length>0?a.innerHTML=s.map(e=>`
          <tr>
            <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">#${e.id}</td>
            <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-900">${e.subject}</td>
            <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-900">${e.category}</td>
            <td class="px-6 py-4 whitespace-nowrap">
              <span class="px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${e.priority==="high"?"bg-red-100 text-red-800":e.priority==="medium"?"bg-yellow-100 text-yellow-800":"bg-green-100 text-green-800"}">
                ${e.priority}
              </span>
            </td>
            <td class="px-6 py-4 whitespace-nowrap">
              <span class="px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${e.status==="open"?"bg-blue-100 text-blue-800":"bg-gray-100 text-gray-800"}">
                ${e.status}
              </span>
            </td>
            <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-900">${new Date(e.created_at).toLocaleDateString()}</td>
            <td class="px-6 py-4 whitespace-nowrap text-sm font-medium">
              <button onclick="viewTicketDetails('${e.id}')" class="text-blue-600 hover:text-blue-900">View Details</button>
            </td>
          </tr>
        `).join(""):a.innerHTML='<tr><td colspan="7" class="px-6 py-4 text-center text-gray-500">No support tickets found</td></tr>'}catch(s){console.error("Error loading tickets data:",s)}}async function u(){try{console.log("🔄 Loading cart customizations data...");const{data:s,error:t}=await o.from("cart_customizations").select("*").order("created_at",{ascending:!1});if(t){console.error("Error loading cart data:",t);return}const a=document.getElementById("cart-table-body");if(!a)return;s&&s.length>0?a.innerHTML=s.map(e=>`
          <tr>
            <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-900">${e.user_email}</td>
            <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-900">${e.project_name||"-"}</td>
            <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-900">${e.app_name||"-"}</td>
            <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-900">${e.contact_person||"-"}</td>
            <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-900">₹${e.total_amount?e.total_amount.toLocaleString():"0"}</td>
            <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-900">${new Date(e.created_at).toLocaleDateString()}</td>
            <td class="px-6 py-4 whitespace-nowrap text-sm font-medium">
              <button onclick="viewCartDetails('${e.id}')" class="text-blue-600 hover:text-blue-900">View Details</button>
            </td>
          </tr>
        `).join(""):a.innerHTML='<tr><td colspan="7" class="px-6 py-4 text-center text-gray-500">No cart customizations found</td></tr>'}catch(s){console.error("Error loading cart data:",s)}}async function f(){try{const[s,t,a,e]=await Promise.all([o.from("profiles").select("*",{count:"exact",head:!0}),o.from("contact_form_data").select("*",{count:"exact",head:!0}),o.from("support_tickets").select("*",{count:"exact",head:!0}),o.from("cart_customizations").select("*",{count:"exact",head:!0})]),r=s.count||0,n=t.count||0,p=a.count||0,g=e.count||0,l=document.getElementById("total-users"),d=document.getElementById("total-contacts"),i=document.getElementById("total-tickets"),c=document.getElementById("total-orders");l&&(l.textContent=r.toString()),d&&(d.textContent=n.toString()),i&&(i.textContent=p.toString()),c&&(c.textContent=g.toString()),console.log("✅ Summary cards updated")}catch(s){console.error("Error updating summary cards:",s)}}document.addEventListener("DOMContentLoaded",()=>{const s=document.getElementById("details-modal");document.getElementById("close-modal")?.addEventListener("click",()=>{s.classList.add("hidden")}),s?.addEventListener("click",a=>{a.target===s&&s.classList.add("hidden")})});window.viewUserDetails=async function(s){console.log("Viewing user details for:",s);try{const{data:t,error:a}=await o.from("profiles").select("*").eq("id",s).single();if(a){console.error("Error loading user details:",a);return}const e=document.getElementById("details-modal"),r=document.getElementById("modal-title"),n=document.getElementById("modal-content");r.textContent="User Details",n.innerHTML=`
        <div class="space-y-4">
          <div class="flex items-center space-x-4">
            <div class="h-16 w-16 rounded-full bg-blue-100 flex items-center justify-center">
              <span class="text-2xl font-medium text-blue-600">${t.full_name?t.full_name.charAt(0).toUpperCase():"U"}</span>
            </div>
            <div>
              <h4 class="text-xl font-semibold text-gray-900">${t.full_name||"No Name"}</h4>
              <p class="text-gray-600">${t.email}</p>
            </div>
          </div>
          
          <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div class="bg-gray-50 p-4 rounded-lg">
              <h5 class="font-medium text-gray-900 mb-2">Contact Information</h5>
              <p class="text-sm text-gray-600"><strong>Email:</strong> ${t.email}</p>
              <p class="text-sm text-gray-600"><strong>Phone:</strong> ${t.phone||"Not provided"}</p>
            </div>
            
            <div class="bg-gray-50 p-4 rounded-lg">
              <h5 class="font-medium text-gray-900 mb-2">Account Information</h5>
              <p class="text-sm text-gray-600"><strong>Role:</strong> <span class="px-2 py-1 text-xs rounded-full ${t.role==="admin"?"bg-red-100 text-red-800":"bg-green-100 text-green-800"}">${t.role||"customer"}</span></p>
              <p class="text-sm text-gray-600"><strong>Registered:</strong> ${new Date(t.created_at).toLocaleDateString()}</p>
              <p class="text-sm text-gray-600"><strong>Last Login:</strong> ${t.last_login?new Date(t.last_login).toLocaleDateString():"Never"}</p>
            </div>
          </div>
        </div>
      `,e.classList.remove("hidden")}catch(t){console.error("Error viewing user details:",t)}};window.viewContactDetails=async function(s){console.log("Viewing contact details for:",s);try{const{data:t,error:a}=await o.from("contact_submissions").select("*").eq("id",s).single();if(a){console.error("Error loading contact details:",a);return}const e=document.getElementById("details-modal"),r=document.getElementById("modal-title"),n=document.getElementById("modal-content");r.textContent="Contact Form Details",n.innerHTML=`
        <div class="space-y-4">
          <div class="bg-gray-50 p-4 rounded-lg">
            <h4 class="text-lg font-semibold text-gray-900 mb-3">Contact Information</h4>
            <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <p class="text-sm text-gray-600"><strong>Name:</strong> ${t.first_name} ${t.last_name}</p>
                <p class="text-sm text-gray-600"><strong>Email:</strong> ${t.email||"Not provided"}</p>
                <p class="text-sm text-gray-600"><strong>Phone:</strong> ${t.phone||"Not provided"}</p>
              </div>
              <div>
                <p class="text-sm text-gray-600"><strong>Company:</strong> ${t.company_name||"Not provided"}</p>
                <p class="text-sm text-gray-600"><strong>Project Type:</strong> ${t.project_type||"Not specified"}</p>
                <p class="text-sm text-gray-600"><strong>Submitted:</strong> ${new Date(t.created_at).toLocaleDateString()}</p>
              </div>
            </div>
          </div>
          
          <div class="bg-gray-50 p-4 rounded-lg">
            <h5 class="font-medium text-gray-900 mb-2">Project Details</h5>
            <p class="text-sm text-gray-600">${t.project_details||"No additional details provided"}</p>
          </div>
        </div>
      `,e.classList.remove("hidden")}catch(t){console.error("Error viewing contact details:",t)}};window.viewTicketDetails=async function(s){console.log("Viewing ticket details for:",s);try{const{data:t,error:a}=await o.from("support_tickets").select("*").eq("id",s).single();if(a){console.error("Error loading ticket details:",a);return}const e=document.getElementById("details-modal"),r=document.getElementById("modal-title"),n=document.getElementById("modal-content");r.textContent=`Support Ticket #${t.id}`,n.innerHTML=`
        <div class="space-y-4">
          <div class="bg-gray-50 p-4 rounded-lg">
            <h4 class="text-lg font-semibold text-gray-900 mb-3">Ticket Information</h4>
            <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <p class="text-sm text-gray-600"><strong>Subject:</strong> ${t.subject}</p>
                <p class="text-sm text-gray-600"><strong>Category:</strong> ${t.category}</p>
                <p class="text-sm text-gray-600"><strong>Priority:</strong> <span class="px-2 py-1 text-xs rounded-full ${t.priority==="high"?"bg-red-100 text-red-800":t.priority==="medium"?"bg-yellow-100 text-yellow-800":"bg-green-100 text-green-800"}">${t.priority}</span></p>
              </div>
              <div>
                <p class="text-sm text-gray-600"><strong>Status:</strong> <span class="px-2 py-1 text-xs rounded-full ${t.status==="open"?"bg-blue-100 text-blue-800":"bg-gray-100 text-gray-800"}">${t.status}</span></p>
                <p class="text-sm text-gray-600"><strong>Email:</strong> ${t.email}</p>
                <p class="text-sm text-gray-600"><strong>Created:</strong> ${new Date(t.created_at).toLocaleDateString()}</p>
              </div>
            </div>
          </div>
          
          <div class="bg-gray-50 p-4 rounded-lg">
            <h5 class="font-medium text-gray-900 mb-2">Description</h5>
            <p class="text-sm text-gray-600">${t.description||"No description provided"}</p>
          </div>
        </div>
      `,e.classList.remove("hidden")}catch(t){console.error("Error viewing ticket details:",t)}};window.viewCartDetails=async function(s){console.log("Viewing cart details for:",s);try{const{data:t,error:a}=await o.from("cart_customizations").select("*").eq("id",s).single();if(a){console.error("Error loading cart details:",a);return}const e=document.getElementById("details-modal"),r=document.getElementById("modal-title"),n=document.getElementById("modal-content");r.textContent="Cart Customization Details",n.innerHTML=`
        <div class="space-y-4">
          <div class="bg-gray-50 p-4 rounded-lg">
            <h4 class="text-lg font-semibold text-gray-900 mb-3">Project Information</h4>
            <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <p class="text-sm text-gray-600"><strong>User Email:</strong> ${t.user_email}</p>
                <p class="text-sm text-gray-600"><strong>Project Name:</strong> ${t.project_name||"Not specified"}</p>
                <p class="text-sm text-gray-600"><strong>App Name:</strong> ${t.app_name||"Not specified"}</p>
                <p class="text-sm text-gray-600"><strong>Contact Person:</strong> ${t.contact_person||"Not specified"}</p>
              </div>
              <div>
                <p class="text-sm text-gray-600"><strong>Total Amount:</strong> ₹${t.total_amount?t.total_amount.toLocaleString():"0"}</p>
                <p class="text-sm text-gray-600"><strong>Created:</strong> ${new Date(t.created_at).toLocaleDateString()}</p>
                <p class="text-sm text-gray-600"><strong>Restaurant Name:</strong> ${t.restaurant_name||"N/A"}</p>
                <p class="text-sm text-gray-600"><strong>Cuisine Type:</strong> ${t.cuisine_type||"N/A"}</p>
              </div>
            </div>
          </div>
          
          <div class="bg-gray-50 p-4 rounded-lg">
            <h5 class="font-medium text-gray-900 mb-2">Customization Details</h5>
            <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <p class="text-sm text-gray-600"><strong>Primary Color:</strong> <span class="inline-block w-4 h-4 rounded-full border" style="background-color: ${t.primary_color||"#000"}"></span> ${t.primary_color||"Not specified"}</p>
                <p class="text-sm text-gray-600"><strong>Secondary Color:</strong> <span class="inline-block w-4 h-4 rounded-full border" style="background-color: ${t.secondary_color||"#000"}"></span> ${t.secondary_color||"Not specified"}</p>
                <p class="text-sm text-gray-600"><strong>Accent Color:</strong> <span class="inline-block w-4 h-4 rounded-full border" style="background-color: ${t.accent_color||"#000"}"></span> ${t.accent_color||"Not specified"}</p>
              </div>
              <div>
                <p class="text-sm text-gray-600"><strong>Logo URL:</strong> ${t.logo_url?'<a href="'+t.logo_url+'" target="_blank" class="text-blue-600 hover:underline">View Logo</a>':"Not provided"}</p>
                <p class="text-sm text-gray-600"><strong>Additional Notes:</strong> ${t.additional_notes||"None"}</p>
              </div>
            </div>
          </div>
        </div>
      `,e.classList.remove("hidden")}catch(t){console.error("Error viewing cart details:",t)}};
