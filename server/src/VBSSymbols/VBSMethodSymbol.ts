import * as ls from 'vscode-languageserver';
import { VBSSymbol } from "./VBSSymbol";

export class VBSMethodSymbol extends VBSSymbol {
	public GetLsName(): string {
		return this.name + " (" + this.args + ")" + this.returnType;
	}
	
	public GetLsSymbolKind(): ls.SymbolKind {
		return ls.SymbolKind.Method;
	}

	public GetLsCompletionItem(): ls.CompletionItem {
		let item = ls.CompletionItem.create(this.name);
		item.documentation = this.visibility + " " + this.type + " " + this.name + "(" + this.args + ")" + this.returnType;
		item.filterText = this.name;
		item.insertText = this.name + "(" + this.args + ")" + this.returnType;
		item.kind = ls.CompletionItemKind.Method;
		return item;
	}
}