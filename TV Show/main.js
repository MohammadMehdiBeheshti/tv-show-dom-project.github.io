const body = document.body;

const getData = async () => {
	const response = await fetch("https://api.tvmaze.com/shows/82/episodes");
	let data = await response.json();

	// data.forEach((each) => {
	// 	repeatCards(each);
	// });

	repeatCards(data);
};

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
	// H1 title
	const h1Title = document.createElement("h1");
	h1Title.className = "main-title";
	h1Title.innerText = "Watch Game Of Thrones Here";

	// Main
	const main = document.createElement("main");

	// Episodes
	const episodes = document.createElement("div");
	episodes.className = "episodes";

	main.prepend(h1Title);
	main.append(episodes);
	body.querySelector("header").insertAdjacentElement("afterend", main);
};

const repeatCards = (dataStorage) => {
	let dataStore = [...dataStorage];
	const navigation = document.querySelector(".navigation");

	const firstOption = document.createElement("option");
	firstOption.innerText = "Choose Episode";
	firstOption.setAttribute("selected", "selected");
	firstOption.setAttribute("disabled", "disabled");

	// Select Episode
	const select = document.createElement("select");
	select.className = "select-episode";

	select.prepend();

	dataStore.forEach((each) => {
		// Options
		const option = document.createElement("option");
		option.className = "episode-option";
		option.innerText = `${each.name} : S${String(each.season).padStart(
			2,
			"0"
		)}E${String(each.number).padStart(2, "0")}`;
		option.value = each.url;
		select.append(option);
	});
	select.prepend(firstOption);
	navigation.append(select);

	select.addEventListener("change", () => {
		if (select.value !== firstOption.value) {
			window.open(select.value);
		}
	});

	dataStorage.forEach((eachElement) => {
		const card = document.createElement("div");
		card.classList = "card";

		// Poster "IMG"
		const poster = document.createElement("img");
		poster.src = eachElement.image.medium;
		poster.className = "card__img";
		poster.alt = eachElement.name;

		// Card Infos
		const cardInfo = document.createElement("div");
		cardInfo.className = "card-info";

		// Card Information
		const cardInformation = document.createElement("div");
		cardInformation.className = "card__information";

		// Card Title
		const cardTitle = document.createElement("h3");
		cardTitle.className = "card__information-title";
		cardTitle.innerText = eachElement.name;

		// Seasons and Episode Names
		const seInfo = document.createElement("h4");
		seInfo.className = "card__information-se";
		seInfo.innerText = `S${String(eachElement.season).padStart(
			2,
			"0"
		)}E${String(eachElement.number).padStart(2, "0")}`;

		// Description
		const descText = document.createElement("p");
		descText.className = "description__par";
		descText.innerText = eachElement.summary;
		descText.innerText = descText.innerText
			.replaceAll("<p>", "")
			.replaceAll("</p>", "")
			.replaceAll("<br>", "");
		descText.innerText = descText.innerText.substring(0, 70) + "...";

		// Direct Link
		const cardBtn = document.createElement("a");
		cardBtn.classList = "watch-btn";
		cardBtn.innerText = "Watch";
		cardBtn.href = eachElement.url;

		cardInformation.append(cardTitle);
		cardInformation.append(seInfo);
		cardInfo.append(cardInformation);
		cardInfo.append(descText);
		cardInfo.append(cardBtn);
		card.append(poster);
		card.append(cardInfo);
		body.querySelector(".episodes").append(card);
	});
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

getData();

// Search
let searchInput = document.querySelector(".searchbar");

searchInput.addEventListener("input", () => {
	const cards = document.querySelectorAll(".card");
	let value = searchInput.value.toLowerCase();

	cards.forEach((eachCard) => {
		const titleOfCard = eachCard
			.querySelector(".card__information-title")
			.innerText.toLowerCase();

		if (titleOfCard.includes(value)) {
			eachCard.classList.remove("hide");
		} else {
			eachCard.classList.add("hide");
		}
	});
});
