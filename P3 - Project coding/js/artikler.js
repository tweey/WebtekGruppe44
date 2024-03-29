// Denne funksjonen skal omdirigere brukeren til en tilfeldig valgt nettside når vedkommende trykker på knappen

// Starter med å lage en array for alle artikkel-lenkene
var articleLinks = ['http://jaatun.no/papers/2005/oban_nordsec.pdf',
        'http://jaatun.no/papers/2006/kerberos_ifipsec.pdf',
        'http://jaatun.no/papers/2008/testing.pdf',
        'http://jaatun.no/papers/2008/sesa_atc.pdf',
        'http://jaatun.no/papers/2008/opc_uic.pdf',
        'http://jaatun.no/papers/2008/jaatun-asset.pdf',
        'http://jaatun.no/papers/2008/MMS_uic.pdf',
        'http://jaatun.no/papers/2008/IRMA_atc.pdf',
        'http://jaatun.no/papers/2009/zero.pdf',
        'http://jaatun.no/papers/2009/semanticcloudcom.pdf',
        'http://jaatun.no/papers/2009/oasis_requirements.pdf',
        'http://jaatun.no/papers/2009/OASIS-IWSCN.pdf',
        'http://jaatun.no/papers/2010/straight-and-narrow-IJSSE-1-3_%20article.pdf',
        'http://jaatun.no/papers/2010/road2hell.pdf',
        'http://jaatun.no/papers/2010/reference-deployment-jsuper-author.pdf',
        'http://jaatun.no/papers/2010/probabilistic-JIT.pdf',
        'http://jaatun.no/papers/2010/farewell.pdf',
        'http://jaatun.no/papers/2010/HICSS_2010.pdf',
        'http://jaatun.no/papers/2011/rain-protocol-author.pdf',
        'http://jaatun.no/papers/2011/batcave.pdf',
        'http://jaatun.no/papers/2011/Not-Ready-for-Prime-Time_-A-Survey-on-Security-in-Model-Driven-Development.pdf',
        'http://jaatun.no/papers/2011/Cyber-Security-Challenges.pdf',
        'http://jaatun.no/papers/2011/CloudSecuritySLA-Closer.pdf',
        'http://jaatun.no/papers/2012/thunder.pdf',
        'http://jaatun.no/papers/2012/thunder-post.pdf',
        'http://jaatun.no/papers/2012/sla.pdf',
        'http://jaatun.no/papers/2012/measure.pdf',
        'http://jaatun.no/papers/2012/drizzle.pdf',
        'http://jaatun.no/papers/2012/a4cloud.pdf',
        'http://jaatun.no/papers/2012/Privacy-Enhancing-Technologies-for-Information-Control.pdf',
        'http://jaatun.no/papers/2012/CloudBrokerSLA.pdf',
        'http://jaatun.no/papers/2013/sinkorswim.pdf',
        'http://jaatun.no/papers/2013/seeking-risks.pdf',
        'http://jaatun.no/papers/2013/gprs-sec.pdf',
        'http://jaatun.no/papers/2013/after-CD-ARES.pdf',
        'http://jaatun.no/papers/2013/AMI-threat-critis.pdf',
        'http://jaatun.no/papers/2013/A4CloudSessionPaper.pdf',
        'http://jaatun.no/papers/2014/guidinglights.pdf',
        'http://jaatun.no/papers/2014/HealthCareCloud.pdf',
        'http://jaatun.no/papers/2015/outsource-authorversion.pdf',
        'http://jaatun.no/papers/2015/modenhet.pdf',
        'http://jaatun.no/papers/2015/cloudincident-nonblind-as-submitted.pdf',
        'http://jaatun.no/papers/2015/Cruzes_Jaatun_Cloud%20Provider%20Transparency.pdf',
        'http://jaatun.no/papers/2016/transparency.pdf',
        'http://jaatun.no/papers/2016/temporal.pdf',
        'http://jaatun.no/papers/2016/swsec-skills.pdf',
        'http://jaatun.no/papers/2016/strongaccountability-journal.pdf',
        'http://jaatun.no/papers/2016/securecloud.pdf',
        'http://jaatun.no/papers/2016/protection-poker-profes.pdf',
        'http://jaatun.no/papers/2016/incident-management-tool.pdf',
        'http://jaatun.no/papers/2016/i4cs.pdf',
        'http://jaatun.no/papers/2016/aviation-incident.pdf',
        'http://jaatun.no/papers/2017/secdevops-author.pdf',
        'http://jaatun.no/papers/2017/outsourcing-blueprint.pdf',
        'http://jaatun.no/papers/2017/lightweight-measurement-swsec.pdf',
        'http://jaatun.no/papers/2017/cloudreq-cloudcom.pdf',
        'http://jaatun.no/papers/2017/Risk-Centric-Activities-in-Secure-Software-Development-in-Public-Organisations.pdf',
        'http://jaatun.no/papers/2018/self-healing.pdf',
        'http://jaatun.no/papers/2018/owasp-paper.pdf',
        'http://jaatun.no/papers/2018/guidinglights.pdf',
        'http://jaatun.no/papers/2018/eop_hotsos.pdf',
        'http://jaatun.no/papers/2018/devsecops-incident-submitted-nonblind.pdf',
        'http://jaatun.no/papers/2018/Threat_modeling-aswec-2018_final.pdf',
        'http://jaatun.no/papers/2018/DASC-How-Low-Can-You-go-paper.pdf',
        'http://jaatun.no/papers/2018/Canonical-action-research-Cruzes_Jaatun_Oyetoyan_final.pdf',
        'http://jaatun.no/papers/2018/A-Secure-MANET-Routing-Protocol-for-Crisis-Situations.pdf',
        'http://jaatun.no/papers/2019/understanding-protectionpoker.pdf',
        'http://jaatun.no/papers/2019/smartgridrisk.pdf',
        'http://jaatun.no/papers/2019/security-intention.pdf',
        'http://jaatun.no/papers/2019/Threat-Modeling-in-Agile-Software-Development.pdf',
        "http://jaatun.no/papers/2019/Measuring-Developers'-Software-Security-Skills-Usage-and-Training-Needs.pdf",
        'http://jaatun.no/papers/2019/ICS_protectionpoker_final_author.pdf'];

// Når randomArticle() blir kjørt, generer ett tilfeldig tall opp til 72, og omdiriger bruker til gitt lenke i array
function randomArticle() {
        var randomNumber = Math.round(Math.random() * 72);

        let aEl = document.createElement("a");
        aEl.href = articleLinks[randomNumber];
        aEl.setAttribute('target', '_blank');
        aEl.click();
}


// Denne loopen skal appende gitte artikler til en tabell
const articles = [
        {
                title: "Collaborative Security Risk Estimation in Agile Software Development",
                link: "http://jaatun.no/papers/2019/ICS_protectionpoker_final_author.pdf",
                publishedDate: "Oktober 2019",
        },
        {
                title: "The Security Intention Meeting Series as a way to increase visibility of software security decisions in agile development projects",
                link: "http://jaatun.no/papers/2019/security-intention.pdf",
                publishedDate: "September 2019",
        },
        {
                title: "Is a Smarter Grid Also Riskier?",
                link: "http://jaatun.no/papers/2019/smartgridrisk.pdf",
                publishedDate: "Juli 2019",
        },
        {
                title: "Understanding challenges to adoption of the Protection Poker software security game",
                link: "http://jaatun.no/papers/2019/understanding-protectionpoker.pdf",
                publishedDate: "Mars 2019",
        },
        {
                title: "A Secure MANET Routing Protocol for Crisis Situations",
                link: "http://jaatun.no/papers/2018/A-Secure-MANET-Routing-Protocol-for-Crisis-Situations.pdf",
                publishedDate: "November 2018",
        },
        {
                title: "DevOps for Better Software Security in the Cloud",
                link: "http://jaatun.no/papers/2017/secdevops-author.pdf",
                publishedDate: "September 2017",
        },
        {
                title: "Accountability Requirements for the Cloud",
                link: "http://jaatun.no/papers/2017/cloudreq-cloudcom.pdf",
                publishedDate: "August 2017",
        },
        {
                title: "Cyber Security Incident Management in the Aviation Domain",
                link: "http://jaatun.no/papers/2016/aviation-incident.pdf",
                publishedDate: "Oktober 2016",
        },
        {
                title: "How Much Cloud Can You Handle?",
                link: "http://jaatun.no/papers/2015/cloudincident-nonblind-as-submitted.pdf",
                publishedDate: "August 2015",
        },
        {
                title: "Threat modeling of AMI",
                link: "http://jaatun.no/papers/2013/AMI-threat-critis.pdf",
                publishedDate: "April 2013",
        },
        {
                title: "Cyber Security Challenges in Smart Grids",
                link: "http://jaatun.no/papers/2011/Cyber-Security-Challenges.pdf",
                publishedDate: "Desember 2011",
        },
        {
                title: "A Probabilistic Approach to Information Control",
                link: "http://jaatun.no/papers/2010/probabilistic-JIT.pdf",
                publishedDate: "Oktober 2010",
        },
        {
                title: "Learning from Software Security Testing",
                link: "http://jaatun.no/papers/2008/testing.pdf",
                publishedDate: "April 2008",
        },
        {
                title: "Secure Fast Handover in an Open Broadband Access Network using Kerberos-style Tickets",
                link: "http://jaatun.no/papers/2006/kerberos_ifipsec.pdf",
                publishedDate: "Juli 2006",
        },
        {
                title:"A Security Architecture for an Open Broadband Access Network",
                link: "http://jaatun.no/papers/2005/oban_nordsec.pdf",
                publishedDate: "October 2005",
        },

]

// Henter tbody fra HTML
var tableBody = document.getElementById('artikler-tabell-body');

// For hver artikkel i articles[i] skal den appende gitt data
for (var i=0; i < articles.length; i++) {
        // Definerer array og lager tr og td til HTML
        const article = articles[i];
        var tr = document.createElement('tr');
        var td = document.createElement('td');

        // Appender publishedData i array til HTML
        const publishedElement = document.createElement('td');
        publishedElement.classList.add("article-date");
        publishedElement.appendChild(document.createTextNode(article.publishedDate));
        tr.appendChild(publishedElement);
        tableBody.appendChild(tr);

        // Appender title i array til HTML
        const titleElement = document.createElement('td');
        titleElement.classList.add("article-title");
        titleElement.appendChild(document.createTextNode(article.title));
        tr.appendChild(titleElement);
        tableBody.appendChild(tr);

        // Appender link i array til HTML
        const linkElement = document.createElement('td');
        const aEl = document.createElement('a');
        linkElement.classList.add("article-dl");
        aEl.href = article.link;
        aEl.innerHTML = "Last ned";
        aEl.target = "_blank";
        linkElement.appendChild(aEl);
        tr.appendChild(linkElement);
        tableBody.appendChild(tr);
}