---
title: "OpenCode 教學：從零開始打造你的 AI 終端程式助手"
description: "完整 OpenCode 安裝與使用教學，從環境設定、免費模型串接到實際開發，帶你用 OpenCode Zen 免費模型在終端機打造 AI 程式助手。"
pubDatetime: 2026-07-26
tags: ["opencode", "AI"]
---

## 什麼是 OpenCode？

OpenCode 是一個開源的 AI 編程代理（coding agent），直接在你的終端機中運作。它能讀懂你的專案程式碼、回答技術問題、自動修改檔案，甚至幫你從零建立新功能。

與付費工具不同，OpenCode 完全免費且開源， GitHub 上累積超過 19 萬顆星。它支援 75 種以上的 LLM 模型供應商，包括 OpenAI、Anthropic、Google Gemini，以及多種免費模型方案。

OpenCode 提供三種使用方式：終端機 TUI（終端機使用者介面）、桌面應用程式，以及 IDE 擴充套件。本篇教學以終端機 TUI 為主，因為這是最直接、最輕量的使用方式。

## 安裝 OpenCode

OpenCode 提供多種安裝方式，選擇最適合你作業系統的方法：

### macOS / Linux

```bash
curl -fsSL https://opencode.ai/install | bash
```

一行指令搞定，不需要事先安裝任何東西。

### Windows

Windows 沒有一鍵安裝腳本，你需要先安裝一個套件管理器。以下三選一：

**使用 Winget（Windows 10/11 內建，推薦）：**

```powershell
winget install anomalyco.opencode
```

**使用 Scoop：**

```powershell
scoop install opencode
```

**使用 Chocolatey：**

```powershell
choco install opencode
```

### 驗證安裝

安裝完成後，打開終端機輸入以下指令確認：

```bash
opencode --version
```

如果看到版本號輸出，代表安裝成功。

## 選擇 AI 模型：OpenCode Zen 免費方案

安裝完成後，下一步是選擇一個 AI 模型。OpenCode 支援多種付費模型（GPT、Claude、Gemini），但對新手來說，最簡單的起點是 **OpenCode Zen** 提供的免費模型。

### 什麼是 OpenCode Zen？

OpenCode Zen 是 OpenCode 團隊提供的 AI 模型閘道器。它篩選並驗證了一組適合編程代理使用的模型，確保品質和效能穩定。你不需要自己去比較哪個模型好用，Zen 幫你做好了測試。

### 7 款免費模型

OpenCode Zen 目前提供以下 **完全免費** 的模型（輸入、輸出、快取皆 $0）：

| 模型 | 提供者 | 特色 |
|------|--------|------|
| **DeepSeek V4 Flash Free** | DeepSeek | 最新 Flash 版本，速度快 |
| **MiMo-V2.5 Free** | MiMo | 通用型免費模型 |
| **Laguna S 2.1 Free** | Laguna | 穩定的免費選項 |
| **Ling-3.0-flash Free** | Ling | 快速回應的輕量模型 |
| **North Mini Code Free** | North | 專為程式碼優化的迷你模型 |
| **Nemotron 3 Ultra Free** | NVIDIA | NVIDIA 提供的免費端點 |
| **Big Pickle** | OpenCode | 神秘模型，免費體驗中 |

> **注意：** 免費模型在免費期間，收集的資料可能會被用於模型訓練。請勿在免費模型中提交機密或個人資料。

### 串接 OpenCode Zen

串接步驟非常簡單：

**步驟一：在 TUI 中執行連線指令**

啟動 OpenCode 後，輸入：

```
/connect
```

**步驟二：選擇 OpenCode Zen**

在彈出的選單中選擇 `opencode`，然後前往 [opencode.ai/auth](https://opencode.ai/auth) 註冊帳號。

**步驟三：取得 API Key**

在 OpenCode Zen 網站上登入、建立 API Key，複製你的 API Key。

**步驟四：貼上 API Key**

回到終端機，將 API Key 貼上並確認。

**步驟五：選擇模型**

執行以下指令查看可用的免費模型：

```
/models
```

選擇一個免費模型（名稱中帶有 `Free` 的就是），就可以開始使用了。

## 初始化你的第一個專案

接下來，讓我們用 OpenCode 來初始化一個專案。

### 步驟一：進入專案目錄

```bash
cd /path/to/your/project
```

如果你還沒有專案，可以先建立一個：

```bash
mkdir my-project && cd my-project
```

### 步驟二：啟動 OpenCode

```bash
opencode
```

你會看到一個漂亮的終端機介面，準備好幫你寫程式了。

### 步驟三：執行初始化

在 TUI 中輸入：

```
/init
```

OpenCode 會分析你的專案結構，自動建立一個 `AGENTS.md` 檔案。這個檔案記錄了專案的結構、程式碼風格、慣用模式，讓 OpenCode 在後續對話中能更好地理解你的專案。

**AGENTS.md 的作用：**
- 記錄專案結構和資料夾組織
- 描述使用的框架和技術棧
- 標註程式碼風格和慣例
- 提供常見操作的參考指引

## 基本操作教學

### 問問題

直接用自然語言提問，OpenCode 會讀懂你的程式碼來回答：

```
這個專案的認證機制是怎麼處理的？
```

你也可以用 `@` 符號引用特定檔案：

```
幫我解釋 @src/utils/helper.ts 裡的 formatDate 函式
```

### Plan 模式 vs Build 模式

OpenCode 有兩種核心模式，用 **Tab** 鍵切換：

| 模式 | 功能 | 適合場景 |
|------|------|----------|
| **Plan 模式** | 只分析和規劃，不修改程式碼 | 複雜功能的前期規劃 |
| **Build 模式** | 直接修改檔案、執行指令 | 實際開發和修改 |

**使用建議：** 先用 Plan 模式確認方向，再切換到 Build 模式執行。這能避免 AI 做出不符合預期的修改。

### 建立新功能

在 Plan 模式下描述你想要的功能：

```
我想建立一個使用者註冊頁面，包含帳號密碼驗證、
Email 確認、以及錯誤處理。幫我規劃實作步驟。
```

確認計畫後，切換到 Build 模式：

```
計畫看起來不錯，開始實作吧。
```

### 撤銷與重做

如果不滿意修改結果，隨時可以用指令撤銷：

```
/undo
```

想重新執行撤銷的操作：

```
/redo
```

### MCP 伺服器串接

MCP（Model Context Protocol）讓 OpenCode 能連接外部工具，例如記憶體、GitHub、文件搜尋等。

以下示範如何串接官方的 **Memory** 伺服器——它能讓 OpenCode 跨對話記住你的資訊（專案結構、偏好、決策紀錄等），建立一個知識圖譜。

在 `opencode.json` 中加入：

```json
{
  "$schema": "https://opencode.ai/config.json",
  "mcp": {
    "memory": {
      "type": "local",
      "command": ["npx", "-y", "@modelcontextprotocol/server-memory"]
    }
  }
}
```

加入後，OpenCode 會自動啟動 Memory 伺服器。你可以在對話中直接使用，例如：

```
記住我喜歡用 Tailwind CSS 而不是 styled-components
```

OpenCode 會自動將這條資訊存入知識圖譜，下次對話時也能記得住。

更多 MCP 伺服器選項可參考 [OpenCode MCP 文件](https://opencode.ai/docs/mcp-servers)。

### 自訂指令

你可以建立自訂指令來簡化重複操作。在設定檔中定義：

```json
{
  "commands": {
    "review": {
      "description": "程式碼審查",
      "prompt": "幫我審查最近的修改，重點檢查安全性、效能、可維護性"
    }
  }
}
```

之後在 TUI 中輸入 `/review` 就能快速執行。

### Session 管理

OpenCode 會自動儲存你的對話記錄。常用指令：

| 指令 | 功能 |
|------|------|
| `/sessions` | 列出所有 Session |
| `/clear` | 開始新的 Session |
| `/share` | 分享當前對話連結 |
| `/export` | 匯出對話為 Markdown |

## 實戰演練

讓我們用一個實際案例來串連所有學到的內容。

**情境：** 你想幫一個 Node.js 專案新增「密碼重設」功能。

**第一步：啟動 OpenCode 並初始化**

```bash
cd my-node-project
opencode
/init
```

**第二步：用 Plan 模式規劃**

切換到 Plan 模式（Tab 鍵），輸入：

```
我想新增密碼重設功能。流程是：
1. 使用者在前端輸入註冊的 Email
2. 後端產生一個有時效性的 reset token
3. 發送重設連結到使用者 Email
4. 使用者點擊連結後設定新密碼

請幫我規劃實作步驟，包括 API 設計和資料庫 Schema。
```

**第三步：審查計畫**

OpenCode 會產出完整的實作計畫，包括：
- API 端點設計
- 資料庫 Schema 變更
- 前端頁面結構
- 安全性考量

**第四步：切換到 Build 模式執行**

確認計畫後，切換到 Build 模式：

```
計畫沒問題，開始實作。先從後端 API 開始。
```

**第五步：測試與調整**

完成後要求 OpenCode 撰寫測試：

```
幫我為密碼重設功能撰寫單元測試和整合測試
```

## 常見問題排除

| 問題 | 症狀 | 解決方法 |
|------|------|----------|
| API Key 無效 | 送出訊息後回傳 401 錯誤 | 執行 `/connect` 重新設定，確認 API Key 正確 |
| 模型回應很慢 | 等待超過 30 秒無回應 | 切換到較快的免費模型（如 DeepSeek V4 Flash Free） |
| AGENTS.md 未建立 | `/init` 無反應 | 確認在專案根目錄下執行，或手動建立 AGENTS.md |
| MCP 伺服器連線失敗 | 工具無法使用 | 執行 `opencode mcp list` 檢查狀態，確認網路連線 |
| TUI 顯示異常 | 畫面錯亂或字元錯位 | 更新終端機到最新版本，確認支援 Unicode |
| Windows 路徑問題 | 檔案操作失敗 | 使用 WSL 或確保路徑使用正斜線 |
| 記憶體不足 | 大型專案操作卡頓 | 執行 `/clear` 開始新 Session，或使用 `/compact` 壓縮對話 |

## 延伸學習

現在你已經掌握了 OpenCode 的基礎操作，以下資源可以幫助你更深入：

**官方資源：**
- [OpenCode 官方文件](https://opencode.ai/docs/) — 完整的功能說明和 API 參考
- [OpenCode GitHub](https://github.com/anomalyco/opencode) — 原始碼、Issue 回報、社群討論
- [OpenCode Zen](https://opencode.ai/zen) — 免費與付費模型方案

**社群資源：**
- [r/opencode](https://www.reddit.com/r/opencode/) — Reddit 社群，分享技巧和問題排查
- [OpenCode Discord](https://discord.gg/opencode) — 即時討論和支援

**推薦下一步：**
- 嘗試用 MCP 串接 GitHub，讓 OpenCode 能直接操作你的 Repository
- 建立自訂指令，將常用的開發流程自動化
- 探索 Plan 模式的進階用法，處理更複雜的架構設計

OpenCode 的強大之處在於它能隨著你的專案一起成長。花越多時間使用，AGENTS.md 就越完善，AI 就越能精準理解你的需求和程式碼風格。現在就打開終端機，開始你的 AI 編程之旅吧。
