# LocalLink 发布页（GitHub Pages）

仓库本身就是普通 Git 仓库；打开 **Pages** 后，这个仓库会变成免费网站。

## 网站地址（启用 Pages 后）

- 项目页：`https://qq944463782.github.io/app-load-like/`
- 若绑定域名 `loadlink.wbox.top`，在 Pages → Custom domain 填入即可（应用内已指向此地址）

## 启用步骤

1. 打开仓库 **Settings → Pages**
2. Source 选 **Deploy from a branch**
3. Branch 选 `main`，文件夹 `/ (root)` → Save
4. 等待 1–2 分钟访问上面的 URL

## 更新商店 / 安装包链接

编辑 `downloads.json`：

```json
{
  "platforms": {
    "ios": { "store": "https://apps.apple.com/...", "direct": "" },
    "android": { "store": "https://play.google.com/...", "direct": "downloads/xxx.apk" },
    "mac": { "store": "", "direct": "" },
    "windows": { "store": "", "direct": "" }
  }
}
```

推送到 `main` 后网站自动更新。

## 语言

页面右上角：**简中 / 繁中 / EN**，也会按浏览器语言自动选择。
