# 🎬 React 공부 Repo

> 이 레포지토리는 노마드 코더의 React 강의를 기반으로 학습 중인 프로젝트입니다.  
> 현재는 **`src/` 디렉토리 구조와 컴포넌트 기반 UI 구성**에 집중하고 있습니다.
> GitHub pages를 통한 배포를 진행하려 했으나, 포트폴리오를 현재 사용중이므로, 생략

---

## 📁 현재 작업 중인 디렉토리 구조

```text
REACT-STUDY/
├── src/                    # 소스 코드 루트 디렉토리
│   ├── components/         # 공통 UI 컴포넌트 폴더
│   │   ├── Movie.js        # 영화 카드/아이템을 렌더링하는 컴포넌트
│   │   └── Movie.module.css # Movie 컴포넌트 전용 CSS 모듈
│   ├── routes/             # 라우팅용 페이지 단위 컴포넌트
│   │   ├── Home.js         # `/` 또는 `/home` 경로에서 보여줄 메인 페이지
│   │   └── Detail.js       # `/movie`-> Detail.js로 연동하는 등 상세 페이지
│   ├── App.js              # 메인 라우터 및 전체 페이지 구성
│   ├── App_coin.js         # 추가 실습 또는 페이지 (코인 관련)
│   ├── App_todo.js         # 추가 실습 또는 페이지 (To Do 리스트)
│   └── index.js            # React 앱의 진입점 (ReactDOM.render)
├── .gitignore              
├── package.json            
├── package-lock.json       
└── README.md               
```