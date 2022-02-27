import constants from "./constants.js";
import leftPanelMenu from "./components/leftPanelMenu/leftPanelMenu.js";
import mainMultiview from "./components/multiview/index.js";

// PROFILE BTN
const PROFILE_LIST_DATA = [
	{ id: 1, name: "User Settings" },
	{ id: 2, name: "Log Out" },
];

const profileList = {
	view: "list",
	id: "list12321",
	borderless: true,
	scrollY: false,
	template: "#name#",
	type: {
		height: constants.CONTENT.TITLE.PROFILE_LIST_ITEM_HEIGHT,
	},
	select: true,
	autowidth: true,
	autoheight: true,
	data: PROFILE_LIST_DATA,
};

webix.ui({
	view: "popup",
	id: constants.IDs.BTN_PROFILE_POPUP,
	width: 173,
	body: {
		// template: "Some text",
		profileList,
	},
});
// END PROFILE BTN

const productScreen = {
	cols: [leftPanelMenu, mainMultiview],
};

webix.ui(productScreen);

$$(constants.IDs.MAIN_MENU).select(1);
