# Dev Notes (Forked version)

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
