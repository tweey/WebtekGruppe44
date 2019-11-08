const artikler = [
	{
		title: "Collaborative Security Risk Estimation in Agile Software Development",
		link: "http://jaatun.no/papers/2019/ICS_protectionpoker_final_author.pdf'",
		publishedDate: "2019-10-01",
	},
	{
		title: "The Security Intention Meeting Series as a way to increase visibility of software security decisions in agile development projects",
		link: "http://jaatun.no/papers/2019/security-intention.pdf",
		publishedDate: "2019-09-29",
	},
	{
		title: "Is a Smarter Grid Also Riskier?",
		link: "http://jaatun.no/papers/2019/smartgridrisk.pdf",
		publishedDate: "2019-07-14",
	},
	{
		title: "Understanding challenges to adoption of the Protection Poker software security game",
		link: "http://jaatun.no/papers/2019/understanding-protectionpoker.pdf",
		publishedDate: "2019-03-03",
	},
	{
		title: "A Secure MANET Routing Protocol for Crisis Situations",
		link: "http://jaatun.no/papers/2018/A-Secure-MANET-Routing-Protocol-for-Crisis-Situations.pdf",
		publishedDate: "2018-11-19",
	}
]

var tableBody = document.getElementById('artikler-tabell-body');

for (var i=0; i < artikler.length; i++) {
	const article = artikler[i];
	var tr = document.createElement('tr');
	var td = document.createElement('td');

	const publishedElement = document.createElement('td');
	publishedElement.appendChild(document.createTextNode(article.publishedDate));
	tr.appendChild(publishedElement);
	tableBody.appendChild(tr);

	const titleElement = document.createElement('td');
	titleElement.appendChild(document.createTextNode(article.title));
	tr.appendChild(titleElement);
	tableBody.appendChild(tr);

	const linkElement = document.createElement('td');
	linkElement.appendChild(document.createTextNode(article.link));
	tr.appendChild(linkElement);
	tableBody.appendChild(tr);

}
