const vscode = require('vscode');



function activate(context) {

	/**
	 * @function toLower
	 * Converts selected text to uppercase
	 */
	let upperCommand = vscode.commands.registerCommand('text-case-converter.toUpper', function () {
		const editor = vscode.window.activeTextEditor;

		if (!editor) {
			return;
		}

		const selection = editor.selection;
		const text = editor.document.getText(selection);

		editor.edit(editBuilder => {
			editBuilder.replace(selection, text.toUpperCase());
		});
	});

	let lowerCommand = vscode.commands.registerCommand('text-case-converter.toLower', function () {
		const editor = vscode.window.activeTextEditor;
		if (!editor) {
			return;
		}

		const selection = editor.selection;
		const text = editor.document.getText(selection);

		editor.edit(editBuilder => {
			editBuilder.replace(selection, text.toLowerCase());
		});
	});



	/**
	 *   const titleCase = text.toLowerCase().replace(/\b\w/g, char => char.toUpperCase());
	 * Here's how it works:
	 * - `text.toLowerCase()`: Converts the entire selected text to lower case to ensure consistency.
	 * - `.replace(/\b\w/g, char => char.toUpperCase())`:
	 *     - The regular expression `/\b\w/g` matches every word boundary (`\b`) followed by a word character (`\w`).
	 *     - For each match, the callback `char => char.toUpperCase()` is called, converting the first character of each word to upper case.
	 * - The result is a string where the first letter of each word is capitalized and the rest are in lower case, i.e., title case.
	 */
	let titleCommand = vscode.commands.registerCommand('text-case-converter.toTitle', function () {
		const editor = vscode.window.activeTextEditor;
		if (!editor) {
			return; 
		}

		const selection = editor.selection;
		const text = editor.document.getText(selection);

		const titleCase = text.toLowerCase().replace(/\b\w/g, char => char.toUpperCase());

		editor.edit(editBuilder => {
			editBuilder.replace(selection, titleCase);
		});
	});


}
function deactivate() { }

module.exports = {
	activate,
	deactivate
}
