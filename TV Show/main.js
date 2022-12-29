const body = document.body;

const loadHeaderElements = () => {
	// Header
	const header = document.createElement("header");

	// Navigation
	const nav = document.createElement("nav");
	nav.classList.add("navigation");

	// logo
	const logo = document.createElement("img");
	logo.src = "./files/img/logo.svg";

	// Search Bar Holder
	const searchBarHolder = document.createElement("div");
	searchBarHolder.className = "searchbar-holder";

	// Search Icon
	const searchIcon = document.createElement("img");
	searchIcon.src = "./files/img/searchIcon.svg";

	// Search Bar
	const searchBar = document.createElement("input");
	searchBar.className = "searchbar";
	searchBar.type = "search";
	searchBar.placeholder = "Type Here...";

	searchBarHolder.append(searchBar);
	searchBarHolder.append(searchIcon);
	nav.append(logo);
	nav.append(searchBarHolder);
	header.append(nav);
	body.prepend(header);
};

const loadMainElements = () => {
	// Main
	const main = document.createElement("main");

	// Episodes
	const episodes = document.createElement("div");
	episodes.className = "episodes";

	// Card
	const card = document.createElement("div");
	card.classList = "card";

	// Poster "IMG"
	const poster = document.createElement("img");
	poster.src =
		"https://ntvb.tmsimg.com/assets/p8282918_b_h8_bn.jpg?w=960&h=540";
	poster.className = "card__img";
	poster.alt = null;

	// Card Infos
	const cardInfo = document.createElement("div");
	cardInfo.className = "card-info";

	// Card Information
	const cardInformation = document.createElement("div");
	cardInformation.className = "card__information";

	// Card Title
	const cardTitle = document.createElement("h3");
	cardTitle.className = "card__information-title";
	cardTitle.innerText = undefined;

	// Seasons and Episode Names
	const seInfo = document.createElement("h4");
	seInfo.className = "card__information-se";
	seInfo.innerText = undefined;

	// Description
	const descText = document.createElement("p");
	descText.className = "description__par";
	descText.innerText = undefined;

	// BTN
	const cardBtn = document.createElement("a");
	cardBtn.classList = "watch-btn";
	cardBtn.innerText = "Watch";
	cardBtn.href = undefined;
};

const loadFooterElement = () => {
	// Footer
	const footer = document.createElement("footer");
	footer.className = "footer";
	body.querySelector("main").insertAdjacentElement("afterend", footer);
	// License Text
	const licenseText = document.createElement("p");
	licenseText.classList = "tvmaze-api-license";
	// Anchor
	const anchor = document.createElement("a");
	anchor.innerText = "This website is made possible using TVmaze Api";
	anchor.href = "https://www.tvmaze.com/api#licensing";
	anchor.target = "_blank";
	licenseText.append(anchor);
	footer.append(licenseText);
	// Author
	const author = document.createElement("p");
	author.classList = "author";
	author.innerText = "Mohammad Mehdi";
	footer.append(author);
};

loadHeaderElements();
loadMainElements();
loadFooterElement();
