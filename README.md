This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.

## Lint・フォーマット方針

- コード品質チェックには **ESLint** を使用しています（`eslint.config.mjs`参照）。
- フォーマットには **Biome** を利用しています（`.vscode/settings.json`でデフォルトフォーマッタ指定、`Biomefile`参照）。
- 推奨コマンド:
  - Lint: `npx eslint .`
  - フォーマット: `npx biome check .` またはエディタの保存時自動整形

## Backend (Go + Echo)

フロントと同一リポジトリ内に `backend` ディレクトリとしてGo(Echo)のAPIサーバを追加しています。

### 起動方法（Docker）

```bash
cd backend
docker build -t portfolio-backend .
docker run --rm -p 8080:8080 portfolio-backend
```

### 起動方法（ローカル Go 1.22+）

```bash
cd backend
go run ./cmd/server
```

### エンドポイント

- `GET /healthz`
- `GET /api/profile`
- `GET /api/projects`
- `GET /api/projects/:id`
- `POST /api/contact` { name, email, message }

### Next.js からのアクセス

`next.config.ts` の `rewrites` により、フロントの `/api/*` へのアクセスは `http://localhost:8080/api/*` にプロキシされます。
