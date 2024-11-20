# 不動産取引価格を検索するAPI

## 使用バージョン

|         | Version |
| :------ | :------ |
| Node    | 18.20.4 |
| npm     | 10.7.0  |
| Nest.js | 10.4.8 |


## 環境構築

はじめに、リポジトリをクローンします。

```bash
git clone git@github.com:rdhdchloe/estate-api.git
cd estate-api
```

次に、コンテナを構築します。

```bash
docker compose up --build
```

### エンドポイント

`GET: http://localhost:3000/api/v1/townPlanning/estateTransaction/bar`

### クエリパラメーター

例）`GET: http://localhost:3000/api/v1/townPlanning/estateTransaction/bar?prefCode=13&cityCode=13101&displayType=1`

| Name | Description | Validation | Required |
| --- | --- | --- | --- |
| year | 年度　指定可能年度:2009-2021年 | 2015年から2018年の値であること | True |
| prefectureCode | 都道府県（関東のみ） | 関東のみのコードであること | True |
| type | 1：住宅地　　　2：商業地 | 1 ~ 2の値であること | True |

[![Image from Gyazo](https://i.gyazo.com/100e2a4dd7418ea71a3898a057a1f4bb.png)](https://gyazo.com/100e2a4dd7418ea71a3898a057a1f4bb)

## テスト

```javascript
docker compose exec api npm run test

> estate-transaction-api@0.0.1 test
> jest

 PASS  test/unit/modules/town-planning/use-cases/get-estate-transaction.use-case.spec.ts
 PASS  test/unit/modules/town-planning/controllers/estate-transaction.controller.spec.ts

Test Suites: 2 passed, 2 total
Tests:       2 passed, 2 total
Snapshots:   0 total
Time:        1.786 s
Ran all test suites.
```


## その他の情報

[バックエンド　スキルチェック](https://landit-inc.notion.site/13b6e565ac0a80d494a5cdfd6e4c7f10)
