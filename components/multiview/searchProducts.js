import constants from "../../constants.js";

const HEADER_DATA = [{ id: 1, name: "Search Products" }];

const header = {
	template: "#name#",
	type: "header",
	borderless: true,
	paddingY: 10,
	width: 210,
	css: "header-label",
	align: "left",
	data: HEADER_DATA,
};

// const btnHeader2 = {
// 	view: "menu",
// 	//autowidth: true,
// 	autowidth: false,
// 	width: 120,
// 	//subMenuPos:"left",
// 	data: [
// 		{ id: "1", value: "Jacob Jones", submenu: ["User Settings", "Log Out"] },
// 	],
// 	type: {
// 		subsign: true,
// 	},
// 	submenuConfig: {
// 		css: "left",
// 	},
// 	borderless: true,
// 	// align: "right",
// };

const btnHeader = {
	view: "button",
	template: (obj) => {
		const html =
			"<span class='icon-photo #icon#'></span><span class='txt'>Jacob Jones</span><span class='icon-photo #icon#'>";
		return html;
	},
	maxWidth: 180,
	click: (id) => {
		const node = $$(id).getNode();
		$$(constants.IDs.BTN_PROFILE_POPUP).show(node);
	},
};

const headerLayout = {
	cols: [
		header,
		{},
		{ rows: [{}, btnHeader, {}], borderless: true },
		{ width: 16 },
	],
	height: constants.LEFT_PANEL.HEADER_HEIGHT,
	css: "main-header primary-background-color",
	borderless: true,
};

const TOOLBAR_BTN_WIDTH = 38;
const TOOLBAR_BTN_HEIGHT = 38;
const btnImgPath = "../../img/toolbarIcons/";

const btnActions = {
	view: "menu",
	//autowidth: true,
	autowidth: false,
	width: 80,
	data: [
		{
			id: "1",
			// value: "Actions",
			template: "Some text",
			submenu: ["Show ID in Nodes ", "Auto Expand Nodes"],
		},
	],
	type: {
		subsign: true,
	},
	submenuConfig: {
		css: "left",
	},
	borderless: true,
	// align: "right", не катит
};

const toolbarBtnsBox = {
	cols: [
		{
			view: "button",
			type: "image",
			css: "webix_transparent",
			image: btnImgPath + "CreateNewProduct.svg",
			width: TOOLBAR_BTN_WIDTH,
			id: "CreateNewProduct",
		},
		{},
		{
			view: "button",
			width: TOOLBAR_BTN_WIDTH,
			id: "CreateNewCatalog",
			type: "image",
			css: "webix_transparent",
			image: btnImgPath + "CreateNewCatalog.svg",
		},
		{},
		{
			view: "button",
			width: TOOLBAR_BTN_WIDTH,
			id: "Copy",
			type: "image",
			css: "webix_transparent",
			image: btnImgPath + "CopyProduct.svg",
		},
		{},
		{
			view: "button",
			width: TOOLBAR_BTN_WIDTH,
			height: TOOLBAR_BTN_HEIGHT,
			id: "Reload",
			type: "image",
			css: "webix_transparent",
			image: btnImgPath + "Reload.svg",
		},
		{},
		{
			view: "button",
			width: TOOLBAR_BTN_WIDTH,
			id: "Export",
			type: "image",
			css: "webix_transparent",
			image: btnImgPath + "Export.svg",
		},
		{},
		{
			view: "button",
			width: TOOLBAR_BTN_WIDTH,
			id: "Undo",
			type: "image",
			css: "webix_transparent",
			image: btnImgPath + "Undo.svg",
		},
	],
	height: 40,
	width: 278,
	borderless: true,
};

const toolbar = {
	view: "toolbar",
	id: "myToolbar",
	css: "main-toolbar",
	height: 40,
	borderless: true,
	paddingX: 16,
	cols: [
		toolbarBtnsBox,
		{ width: 20 },
		{
			view: "richselect",
			id: "catalog",
			label: "Catalog",
			labelWidth: 70,
			// inputWidth: 360, поч то не выставляет ширину инпута
			width: 430,
			height: 38,
			value: 1,
			yCount: "3",
			options: [
				{ id: 1, value: "Jasper Seating" }, // the initially selected item
				{ id: 2, value: "Two" },
				{ id: 3, value: "Three" },
			],
			paddingX: 30,
		},
		{ view: "search", placeholder: "Search", width: 360 },
		{},
		btnActions,
	],
};

const contentLeftHeader = {
	cols: [
		{
			template: "Product",
			type: "header",
			borderless: true,
			height: 54,
			css: "header-label",
		},
		{},
	],
	css: "content-left__header",
};

const contentLeft = {
	rows: [contentLeftHeader, {}],
	gravity: 1,
	css: "content-left primary-background-color",
	// width: 500,
};

const contentRightHeader = {
	cols: [
		{
			view: "tabbar",
			id: "tabbar",
			value: "read", // the initially selected tab
			options: [
				{ id: "read", value: "Read" },
				{ id: "templates", value: "Templates" },
			],
			width: 300,
			height: 54,
			borderless: true,
		},
		{},
	],
	css: "content-right__header",
};

const contentRight = {
	rows: [contentRightHeader, {}],
	gravity: 1,
	css: "content-right primary-background-color",
};

export default {
	rows: [
		headerLayout,
		{ height: 16 },
		{
			cols: [
				{ width: 16 },
				{
					rows: [
						{
							rows: [{}, toolbar, {}],
							height: 78,
							css: "primary-background-color",
							borderless: true,
						},
						{ height: 16 },
						{
							cols: [
								{ width: 16 },
								contentLeft,
								{ width: 16 },
								contentRight,
								{ width: 16 },
							],
							css: "content-box",
						},
						{ height: 16 },
					],
					borderless: true,
					css: "first-box primary-background-color",
				},
				{ width: 16 },
			],
			borderless: true,
		},
		{ height: 16 },
	],
	borderless: true,
	css: "content-box-panel",
};
