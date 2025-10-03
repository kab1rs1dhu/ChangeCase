const vscode = require('vscode');
const { toUpper, toLower, toTitle, toCamel, toSnake, toConstant } = require('./functions');

function activate(context) {

	let upperCommand = vscode.commands.registerCommand('text-case-converter.toUpper', function () {
		const editor = vscode.window.activeTextEditor;

		if (!editor) {
			return;
		}

		const selection = editor.selection;
		const text = editor.document.getText(selection);
		const upperText = toUpper(text);

		editor.edit(editBuilder => {
			editBuilder.replace(selection, upperText);
		});
	});

	let lowerCommand = vscode.commands.registerCommand('text-case-converter.toLower', function () {
		const editor = vscode.window.activeTextEditor;
		if (!editor) {
			return;
		}

		const selection = editor.selection;
		const text = editor.document.getText(selection);
		const lowerText = toLower(text);

		editor.edit(editBuilder => {
			editBuilder.replace(selection, lowerText);
		});
	});

	let titleCommand = vscode.commands.registerCommand('text-case-converter.toTitle', function () {
		const editor = vscode.window.activeTextEditor;
		if (!editor) {
			return; 
		}

		const selection = editor.selection;
		const text = editor.document.getText(selection);
		const titleText = toTitle(text);

		editor.edit(editBuilder => {
			editBuilder.replace(selection, titleText);
		});
	});

	let camelCommand = vscode.commands.registerCommand('text-case-converter.toCamel', function () {
		const editor = vscode.window.activeTextEditor;
		if (!editor) {
			return; 
		}

		const selection = editor.selection;
		const text = editor.document.getText(selection);
		const camelText = toCamel(text);
		
		editor.edit(editBuilder => {
			editBuilder.replace(selection, camelText);
		});
	});

	let snakeCommand = vscode.commands.registerCommand('text-case-converter.toSnake', function () {
		const editor = vscode.window.activeTextEditor;
		if (!editor) {
			return; 
		}

		const selection = editor.selection;
		const text = editor.document.getText(selection);
		const snakeText = toSnake(text);
		
		editor.edit(editBuilder => {
			editBuilder.replace(selection, snakeText);
		});
	});

	let makeConstantCommand = vscode.commands.registerCommand('text-case-converter.toConstant', function () {
		const editor = vscode.window.activeTextEditor;
		if (!editor) {
			return; 
		}
		
		const selection = editor.selection;
		const text = editor.document.getText(selection);
		const constantText = toConstant(text);

		
		editor.edit(editBuilder => {
			editBuilder.replace(selection, constantText);
		});
	});

	// Register all commands with the context
	context.subscriptions.push(upperCommand);
	context.subscriptions.push(lowerCommand);
	context.subscriptions.push(titleCommand);
	context.subscriptions.push(camelCommand);
	context.subscriptions.push(snakeCommand);
	context.subscriptions.push(makeConstantCommand);
}
function deactivate() { }

module.exports = {
	activate,
	deactivate
}
