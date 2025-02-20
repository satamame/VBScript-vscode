# VBScript symbols extension

This extension provides symbols for VBScript.

Pressing <kbd>Ctrl</kbd> + <kbd>Shift</kbd> + <kbd>O</kbd> lists all symbols of the current file.

You can display symbols by using extensions like "Code Outline" by Patryk Zawadzki as well.

## Supported Symbols

- __Class__
- __Function__
- __Sub__
- __Property__
- __Field__
- global and class wide __Const__
- __Dim__
- Parameters

## Version 1.0.0

This version is the first version which contains a valuable feature set to make VBScript development more productive.
This version supports the recognition of all important symbols of a file and provides IntelliSense support according the scope.

## (Maybe) Upcoming Features

### VBScript debugging

I would like to see a VBScript debugger built in into this extension. This will most likely be only available for windows but it would make the VSCode - VBScript experience somwhat complete.

### Lexer (ANTLR?)

I would appreciate if the regular expressions of mine will be superseded someday by a formal grammar. A popular possibility would be ANTLR. I hope that this would make it a bit faster, more reliable and much easier to read.


[GitHub](https://github.com/Luncher91/VBScript-vscode)

## Fork

[GitHub](https://github.com/satamame/VBScript-vscode)

### v1.1.1

Support Method symbols with return type (e.g. "Function myFunc() As Integer").

### Notes

How to build.

```
server> npm ci
server> npm run compile
server> vsce package
server> cd ../client
client> npm ci
client> npm run compile
client> .\buildVSIX.bat
```

How to install.

1. Open Extensions panel.
1. Select "Install from VSIX..." from dots menu.
1. Select "client\vbscript-language-server-client-1.1.1.vsix".
1. Restart VSCode if needed.
