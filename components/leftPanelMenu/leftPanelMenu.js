import constants from "../../constants.js";
import listMenuData from "../../data/listMenuData.js";

const listMenu = {
	view: "list",
	id: constants.IDs.MAIN_MENU,
	borderless: true,
	scrollY: false,
	template:
		"<span class='icon #icon#'></span><span class='txt'>#title#</span>",
	type: {
		height: constants.LEFT_PANEL.LIST_MENU_ITEM_HEIGHT,
	},
	select: true,
	autowidth: true,
	autoheight: true,
	data: listMenuData,
};

const btnHideMenu = {
	view: "button",
	width: 30,
	type: "image",
	css: "webix_transparent",
	image: "../..img/interface/arrow_right.svg",
	click: () => {
		const wrapper = $$(constants.IDs.LEFT_MENU_WRAPPER);
		if (wrapper.$width === 250) {
			wrapper.define("width", 56);
		} else {
			wrapper.define("width", 250);
		}

		wrapper.resize();
	},
};

const leftMenu = {
	rows: [
		{
			cols: [
				{
					template: "<span class='icon #icon#'></span>",
					css: "webix_transparent header-menu-template",
					borderless: true,
				},
				{},
				btnHideMenu,
			],
			borderless: true,
			height: 70,
		},
		listMenu,
		{},
	],
	borderless: true,
	css: "main-menu",
};

const leftPanelMenu = {
	id: constants.IDs.LEFT_MENU_WRAPPER,
	rows: [leftMenu],
	borderless: true,
	css: "left-menu-wrapper primary-background-color",
	width: 250,
};

export default leftPanelMenu;
