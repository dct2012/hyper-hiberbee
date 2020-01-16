'use strict';

// Monokai-desaturated
const baseRed     = 'rgb(237, 107, 136)'; // Language keywords
const baseOrange  = 'rgb(238, 155, 112)'; // Function parameters
const baseYellow  = 'rgb(249, 215, 120)'; // Strings
const baseGreen   = 'rgb(180, 218, 130)'; // Functions, methods definition
const baseCyan    = 'rgb(144, 218, 230)'; // Labels
const baseBlue    = 'rgb(156, 188, 233)'; // Abstract class or interface names
const baseMagenta = 'rgb(168, 159, 236)'; // Properties, fields, variables

// Monokai-vibrant
const saturatedRed     = 'rgb(255, 0, 114)';   // Special keywords
const saturatedOrange  = 'rgb(253, 151, 31)';  // Constants
const saturatedYellow  = 'rgb(242, 186, 75)';  // Annotations, template strings
const saturatedGreen   = 'rgb(166, 226, 46)';  // Functions, methods calls
const saturatedCyan    = 'rgb(73, 176, 241)';  // Concrete class name
const saturatedBlue    = 'rgb(48, 123, 246)';  // Links, numbers
const saturatedMagenta = 'rgb(148, 120, 246)'; // Property, fields

// macOS-based
// const macosRed     = 'rgb(236, 95, 93)';
// const macosOrange  = 'rgb(232, 135, 58)';
// const macosYellow  = 'rgb(255, 200, 60)';
// const macosGreen   = 'rgb(120, 183, 86)';
// const macosCyan    = 'rgb(84, 153, 166)';
// const macosBlue    = 'rgb(48, 123, 246)';
// const macosMagenta = 'rgb(154, 86, 163)';

// Fifty shades of grey
const editorBackgroundL = 'rgb(25, 25, 25)';
const inactiveL         = 'rgb(35, 35, 35)';
// const mainL      = 'rgb(45, 45, 45)';
// const menuL      = 'rgb(55, 55, 55)';
// const headerL    = 'rgb(67, 67, 67)';
// const separatorL = 'rgb(75, 75, 75)';
// const selectedL  = 'rgb(95, 95, 95)';
const borderL = 'rgb(100, 100, 100)';
// const textL  = 'rgb(125, 125, 125)';
// const textL2 = 'rgb(150, 150, 150)';
const textL3       = 'rgb(175, 175, 175)';
const commentTextL = 'rgb(200, 200, 200)';

const colors = {
	black:        editorBackgroundL,
	red:          saturatedRed,
	orange:       saturatedOrange,
	green:        saturatedGreen,
	yellow:       saturatedYellow,
	blue:         saturatedBlue,
	magenta:      saturatedMagenta,
	cyan:         saturatedCyan,
	white:        commentTextL,
	lightblack:   inactiveL,
	lightRed:     baseRed,
	lightOrange:  baseOrange,
	lightGreen:   baseGreen,
	lightYellow:  baseYellow,
	lightBlue:    baseBlue,
	lightMagenta: baseMagenta,
	lightCyan:    baseCyan,
	lightWhite:   textL3,
};

exports.decorateConfig = config => (
	Object.assign( {}, config, {
		backgroundColor: editorBackgroundL,
		foregroundColor: commentTextL,
		cursorColor:     borderL,
		css:             '',
		colors,
	} )
);