import React from "react";
import SectionTitle from "../components/SectionTitle.jsx";
import AnimatedSection from "../components/AnimatedSection.jsx";

function Software() {
  return (
    <>
      <SectionTitle
        eyebrow="Software Engineering · Web Development"
        title="Software Engineering & Web Development"
        subtitle="A snapshot of my engineering skills, experience, and the projects I've shipped across web and mobile."
      />

      <AnimatedSection>
        <h2 className="text-lg font-semibold mb-3">Summary</h2>
        <p className="text-sm text-white/70 mb-4">
          Full Stack Software Engineer & Digital Marketing Specialist with 12+ years of experience across Microsoft technologies, CMS development, cloud platforms, and e-commerce. Skilled in C#, .NET Core, ASP.NET MVC, SQL, Azure, Drupal, DNN, Shopify, and API integrations. I also bring strong digital marketing expertise in Google Ads, PPC, social media advertising, and marketplace management (TikTok Shop, eBay, Deliveroo).

With an MBA (Digital Marketing – Distinction) and a deep understanding of agile environments, I bridge the gap between development, marketing, and business strategy. I enjoy creating scalable solutions, improving workflows, and helping teams deliver quality products. Always learning, always improving
        </p>
      </AnimatedSection>

      <AnimatedSection delay={0.1}>
        <h2 className="text-lg font-semibold mb-3">Key Skills</h2>
        <div className="flex flex-wrap gap-2 text-xs">
          {[
            "JavaScript · React",
            "React Native",
            "REST APIs",
            "AI API Integration",
            "Firebase / Supabase",
            "PostgreSQL",
            "Full Stack Development",
    "Web Development",

    "C# · PHP · Java · VB · Python",
    "React · JavaScript · CSS · Bootstrap · Tailwind · Redux",

    "ASP.NET · .NET Core · MVC · WebForms · Entity Framework",
    "MS SQL · MySQL · PostgreSQL · Firestore",

    "Strapi · Firebase · Firestore",
    "ASMX · .NET Core APIs · Django · PHP APIs",

    "Azure DevOps · Agile · Asana · Sprint · Scrum · Kanban",

    "Drupal · DNN · Shopify · WordPress",
          ].map((skill) => (
            <span
              key={skill}
              className="px-3 py-1 rounded-full bg-white/10 border border-white/10"
            >
              {skill}
            </span>
          ))}
        </div>
      </AnimatedSection>

      <AnimatedSection delay={0.2}>
        <h2 className="text-lg font-semibold mb-3">Experience</h2>
        <p className="text-xs text-white/60 mb-2">
         My professional journey so far:
        </p>

        {/* Example timeline item */}
        <div className="mt-4 space-y-4">
          <div className="border-l border-white/20 pl-4">
            <p className="text-xs text-white/50">November,2024 – Present</p>
            <h3 className="text-sm font-semibold">
              Sr. Application Support & Developer Specialist at Walsall Council, UK
            </h3>
            <p className="text-xs text-white/70">
              Development and management of/in 
               <li> - microsites </li>
               <li> - DNN (dot net nuke )</li>
               <li>  - Drupal (Webform, Commerce, Modules, Services etc)</li>
               <li>  - Database </li>
               <li>  - web forms </li>
               <li>  - sharepoint </li>
               <li>  - storybook</li>
               <li>  - azure (devops)</li>
            </p>
          </div>
        </div>
         <div className="mt-4 space-y-4">
          <div className="border-l border-white/20 pl-4">
            <p className="text-xs text-white/50">May,2023 – November,2024</p>
            <h3 className="text-sm font-semibold">
              eCommerce and Digital Marketing Expert at Astraza Limited, London
            </h3>
            <p className="text-xs text-white/70">
             Shopify Project Development/ Management and Digital Marketing & eCommerce Manager 
             <br></br>Roles & Responsibilities involves 
               <li> - Manage and Develop  websites. </li>
               <li> - Shopify and Marketplace integration</li>
               <li>  - Working in Sprint/Scrum with the Web Development Team.</li>
               <li>  - Coordinate with the Digital Marketing Team.</li>
               <li>  - Create Campaigns and manage Google Ads,Tiktok, Facebook/Instagram Ads </li>
               <li>  - Google Merchant Center  </li>
               <li>  - Manage Tiktok Shop, ebay, Deliveroo (Campaign, Promotions, Listings, PPC)</li>
               <li>  - Google Analytics </li>
                <li>  - MOQ Unit Testing. </li>
                <li>  - SEO Optimization </li>
                <li>Graphics Designing, Short Promotion Video Editing</li>
                <li>Agile Methodologies</li>
                <li>Repair Desk CRM to manage Queries, Promotions, Leads , Campaigns .</li>
            </p>
          </div>
        </div>

         <div className="mt-4 space-y-4">
          <div className="border-l border-white/20 pl-4">
            <p className="text-xs text-white/50">Feb,2022 – April,2023</p>
            <h3 className="text-sm font-semibold">
              Sr Software engineer at Grazitti Interactive, Panchkula Haryana, India
            </h3>
            <p className="text-xs text-white/70">
             Software engineering for Microsoft service team ( American Express Project) 
             <br></br>Roles & Responsibilities involves 
               <li>ASP .Net, .Net Core, MVC, Angular, Entity Framework, LINQ, C#, .Net Core 2+</li>
                <li>Programming experience in SQL Server (writing stored procedures, functions, triggers, Indexes)</li>
                <li>Familiar with SOA architecture design pattern & REST API principles</li>
                <li>MOQ Unit Testing</li>
                <li>Azure DevOps, Agile (Sprint/Scrum, Kanban)</li>
                <li>Agile methodologies</li>
                <li>Excellent problem-solving, analytical and debugging skills</li>

            </p>
          </div>
        </div>

        <div className="mt-4 space-y-4">
          <div className="border-l border-white/20 pl-4">
            <p className="text-xs text-white/50">September,2017 – February,2022</p>
            <h3 className="text-sm font-semibold">
              Sr Programmer at National Informatics Centre, Shimla-Himachal Pradesh, India
            </h3>
            <p className="text-xs text-white/70">
             Software engineering for Microsoft service team ( American Express Project) 
             <br></br>Roles & Responsibilities involves 
               <li>Full Stack Development using ASP.NET, .NET Core, C#, MVC, Webhooks & Services, SSRS Reporting, ADO.NET, Entity Framework, JavaScript, MS SQL, JavaScript, jQuery, AJAX, CSS, HTML, Bootstrap</li>
<li>Implementing Agile Methodology, Azure DevOps, Kanban</li>
<li>Unit Testing</li>


            </p>
          </div>
        </div>

        <div className="mt-4 space-y-4">
          <div className="border-l border-white/20 pl-4">
            <p className="text-xs text-white/50">May,2016 – July,2017</p>
            <h3 className="text-sm font-semibold">
              Web developer at Dreamdoor Productions, Shimla-Himachal Pradesh, India
            </h3>
            <p className="text-xs text-white/70">
             Software engineering for Microsoft service team ( American Express Project) 
             <br></br>Roles & Responsibilities involves 
               
               <li>Digital Marketing: Google Ads, Social Media Promotions, Lead Generation - Facebook & Instagram</li>
                <li>Web Development: Maintenance and development of web projects using WordPress, Joomla, Drupal, PHP</li>
                <li>Front-end development using JavaScript, HTML5, CSS, Bootstrap</li>
                <li>API development using .NET Core</li>
                <li>Database: MS SQL, MySQL</li>
                <li>Project build and coordination via Git</li>



            </p>
          </div>
        </div>

        <div className="mt-4 space-y-4">
          <div className="border-l border-white/20 pl-4">
            <p className="text-xs text-white/50">August,2013 – September,2014</p>
            <h3 className="text-sm font-semibold">
              Web & Digital Expert at Animation Live, Jammu & Kashmir, India
            </h3>
            <p className="text-xs text-white/70">
             Software engineering for Microsoft service team ( American Express Project) 
             <br></br>Roles & Responsibilities involves 
               
               <li>Development & Management of Corporate Website and client sites on WordPress & Drupal</li>
                <li>Front-end module includes: JavaScript, jQuery, CSS, Bootstrap</li>
                <li>Developing and implementing business development and marketing strategies on online channels</li>
                <li>Digital Marketing Campaign Management: Google Ads, social media campaigns on Facebook</li>
                <li>Advertisement management, keyword research via SEMrush, Google Analytics, Google AdSense revenue management, YouTube promotion campaigns</li>

            </p>
          </div>
        </div>

          <div className="mt-4 space-y-4">
          <div className="border-l border-white/20 pl-4">
            <p className="text-xs text-white/50">September,2012 – May,2013</p>
            <h3 className="text-sm font-semibold">
              dot net Developer at Brainstair Technology, Jammu & Kashmir, India
            </h3>
            <p className="text-xs text-white/70">
             Software engineering for Microsoft service team ( American Express Project) 
             <br></br>Roles & Responsibilities involves 
               
               <li>Assistant Software and Web Developer - .NET C# Programmer</li>
                <li>Responsibilities include writing code-behind, designing web forms</li>
                <li>HTML, Bootstrap, JavaScript</li>
                <li>Database querying using MS SQL & MS Access</li>
                <li>Skills: Databases, .NET, SQL Server Management Studio, Information Technology, ADO.NET, Adobe Photoshop, C#, ASP.NET Web Forms</li>

            </p>
          </div>
        </div>
      </AnimatedSection>
    </>
  );
}

export default Software;