# React Todo App

React + Vitaを使用した、シンプルで使いやすいTodoアプリケーションです。

## 機能

- ✅ Todoタスクの作成・編集・削除
- ✅ タスク完了状態の切り替え
- ✅ リアルタイム画面更新（HMR対応）
- ✅ シンプルで直感的なUI

## 技術スタック

- **React** - UIコンポーネント構築
- **Vite** - 高速なビルドツール
- **JavaScript/JSX** - 開発言語
- **ESLint** - コード品質管理

## セットアップ

### 前提条件
- Node.js 16以上

### インストール

```bash
# 依存パッケージをインストール
npm install

# 開発サーバーを起動
npm run dev

# 本番用ビルド
npm run build

# プレビュー
npm run preview
```

## 開発

このプロジェクトではViteの高速HMR（Hot Module Replacement）を活用しており、ファイル保存時に即座に画面に反映されます。

## プロジェクト構造

```
├── src/
│   ├── App.jsx
│   ├── main.jsx
│   └── ...
├── index.html
├── vite.config.js
└── package.json
```

## ライセンス

MITライセンス

## 貢献

バグ報告や機能リクエストはIssuesでお願いします。
