const projectDetails = {
  bni: {title:"BNIdirect Cash & BNIdirect Bisnis",description:"BNI corporate banking engagements from February 2026 onward, as described in the LinkedIn project entries.",contribution:"L2/L3 production support, log analysis, tracing Java execution flows, source-code debugging, code-level bug fixes, SQL/database investigation, and root cause analysis.",focus:"Corporate cash management workflows, application stability, data consistency, and business-impact-aware incident resolution."},
  bnilite: {title:"BNI Direct Lite",description:"A separate corporate banking platform project listed on the LinkedIn profile from February 2026 onward.",contribution:"Investigated production incidents, reviewed Java source code, debugged defects, analyzed SQL and database records, and collaborated with technical stakeholders to validate fixes.",focus:"Reliable application behavior, data consistency, and production stability."},
  danamon: {title:"Danamon Cash Connect (DCC)",description:"Corporate banking application engagement from April to October 2025, as listed on the LinkedIn profile.",contribution:"Java application support, production issue investigation, log analysis, defect troubleshooting, and incident follow-through.",focus:"Reliable cash management services and minimizing impact of production incidents."},
  kopra: {title:"Kopra by Mandiri",description:"Engagement supporting one domestic application and four foreign applications in the Kopra wholesale banking ecosystem.",contribution:"Application support and troubleshooting within a multi-application banking environment.",focus:"Production application reliability and coordination across application components."},
  sk: {title:"SK Pilot Asset Management System",description:"South Korea pilot project during my Java Technical Consultant role (September–October 2024).",contribution:"Contributed to backend/ERP implementation and technical alignment with project requirements.",focus:"Asset management process support and maintainable enterprise solution delivery."},
  trina: {title:"Trina Solar — Manufacturing Execution System",description:"Manufacturing-focused project in China (June–August 2024), recorded in my CV as MES Specialist IT Outsource.",contribution:"Java technical consulting and development contribution for manufacturing-related software.",focus:"Manufacturing execution workflows and enterprise project delivery."},
  traveloka: {title:"Bangkit Capstone Project with Traveloka",description:"Cloud Computing learning path capstone in Bangkit 2022. My CV identifies my role as a Cloud and Server team member.",contribution:"Cloud/server team contribution as part of a learning program capstone.",focus:"Google Cloud fundamentals, cloud deployment concepts, and server-side collaboration."},
  campus: {title:"University Management System",description:"Bachelor’s academic project at BINUS University.",contribution:"Developed a university management system for attendance and complaint management.",focus:"PHP Laravel, MVC architecture, and academic administration workflows."}
};
const modal = document.getElementById("modal");
const openModal = (key) => { const d=projectDetails[key]; if(!d)return; document.getElementById("modalTitle").textContent=d.title; document.getElementById("modalDescription").textContent=d.description; document.getElementById("modalContribution").textContent=d.contribution; document.getElementById("modalFocus").textContent=d.focus; modal.classList.add("open"); modal.setAttribute("aria-hidden","false"); document.body.style.overflow="hidden"; };
const closeModal = () => {modal.classList.remove("open");modal.setAttribute("aria-hidden","true");document.body.style.overflow="";};
document.querySelectorAll("[data-project]").forEach(btn=>btn.addEventListener("click",()=>openModal(btn.dataset.project)));
document.getElementById("modalClose").addEventListener("click",closeModal);
modal.addEventListener("click",e=>{if(e.target===modal)closeModal();});
document.addEventListener("keydown",e=>{if(e.key==="Escape")closeModal();});
document.querySelectorAll(".filter").forEach(btn=>btn.addEventListener("click",()=>{
  document.querySelectorAll(".filter").forEach(b=>b.classList.remove("active"));btn.classList.add("active");
  const category=btn.dataset.filter;
  document.querySelectorAll(".project-card").forEach(card=>card.classList.toggle("hidden",category!=="all"&&card.dataset.category!==category));
}));
const menuToggle=document.getElementById("menuToggle"),nav=document.getElementById("nav");
menuToggle.addEventListener("click",()=>nav.classList.toggle("open"));
nav.querySelectorAll("a").forEach(a=>a.addEventListener("click",()=>nav.classList.remove("open")));
document.getElementById("year").textContent=new Date().getFullYear();
// Small reveal-on-scroll effect with graceful fallback.
const revealTargets=document.querySelectorAll(".metric,.project-card,.timeline-item,.about-panel,.skills-panel");
if("IntersectionObserver" in window){const observer=new IntersectionObserver(entries=>entries.forEach(entry=>{if(entry.isIntersecting){entry.target.classList.add("revealed");observer.unobserve(entry.target);}}),{threshold:.12});revealTargets.forEach(el=>{el.classList.add("reveal");observer.observe(el);});}
