<br />
<div align="center">

   <img src="https://github.com/Jobs-Js/JJA/assets/102240503/668ab3de-ec37-460f-90dc-d3f721c68997" alt="overview">

  <h3 align="center">📚JJA(JsJobs Archive)📚</h3>

  <p align="center">
'Js-Jobs' 스터디 그룹의 활동을 아카이빙하여 책장 속 책으로 표현한 웹사이트입니다.
    <br />
    <br />
    <a href="https://jsjobs-archive.netlify.app/"><strong>JJA 홈페이지 바로가기 »</strong></a>
  </p>
</div>

## Contributors

<table>
  <tr>
        <td align="center"><a href="https://github.com/ony540"><img src="https://avatars.githubusercontent.com/u/102240503?v=4" width="100px" alt=""/><br /><sub><b>오나영</b></sub></a><br /></td>
        <td align="center"><a href="https://github.com/eunjoo0311"><img src="https://avatars.githubusercontent.com/u/120389195?v=4" width="100px"  alt=""/><br /><sub><b>이은주</b></sub></a><br /></td>
  </tr>
</table>

## Technologies Used

<img src="https://img.shields.io/badge/react-61DAFB?style=for-the-badge&logo=react&logoColor=black">
<img src="https://img.shields.io/badge/javascript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black">
<img src="https://img.shields.io/badge/emotion-DB7093?style=for-the-badge&logo=styledcomponents&logoColor=white">
<img src="https://img.shields.io/badge/webpack-8DD6F9?style=for-the-badge&logo=webpack&logoColor=black">
<img src="https://img.shields.io/badge/yarn-2C8EBB?style=for-the-badge&logo=yarn&logoColor=white">

#### Clone the repository

```sh
git clone https://github.com/Jobs-Js/JJA.git
```

#### Install dependencies

```sh
yarn install
```

#### Project Start

```sh
yarn dev
```

## File Folder Structure



```bash
📚 JJA
├─ public
│  ├─ favicon.ico
│  └─ index.html
└─ src
  ├── App.js
  ├── assets
  │   ├── fonts
  │   └── images
  ├── components
  │   ├── CircleButton
  │   │   └── CircleButton.jsx
  │   ├── Header
  │   │   └── Header.jsx
  │   └── Spinner
  │       └── Spinner.jsx
  ├── db
  │   ├── chapter.json
  │   ├── content.json
  │   └── pptImg.json
  ├── index.js
  ├── pages
  │   ├── BookcontentsPage
  │   │   ├── ChapterPage
  │   │   │   ├── ChapterPage.jsx
  │   │   │   └── ChapterPageStyle.jsx
  │   │   └── IndexPage
  │   │       ├── IndexPage.jsx
  │   │       └── IndexPageStyle.jsx
  │   ├── ErrorPage
  │   │   └── ErrorPage.jsx
  │   ├── InformationPage
  │   │   └── InformationPage.jsx
  │   ├── MainPage
  │   │   ├── MainPage.jsx
  │   │   └── MainPageStyle.jsx
  │   ├── RootLayout.jsx
  │   └── Router.jsx
  ├── style
  │   ├── globalStyle.js
  │   └── theme.js
  └── utils
    └── debounce.js
```


