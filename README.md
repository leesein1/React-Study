# 🎬 React 공부 Repo

> 이 레포지토리는 노마드 코더의 React 강의를 기반으로 학습 중인 프로젝트입니다.  
> 현재는 **`src/` 디렉토리 구조와 컴포넌트 기반 UI 구성**에 집중하고 있습니다.
> GitHub pages를 통한 배포를 진행하려 했으나, 포트폴리오를 현재 사용중이므로, 생략

---

## 📁 현재 작업 중인 디렉토리 구조

```text
REACT-STUDY/
├── src/                          
│   ├── components/               # 공통 UI 컴포넌트 폴더
│   │   ├── Movie.js              # 영화 카드 컴포넌트 (제목, 평점 등 렌더링)
│   │   └── Movie.module.css      # Movie 전용 스타일 모듈
│   ├── hooks/                    # 커스텀 훅 실습용 페이지 모음
│   │   ├── App_useInput.js       # useInput: input 상태를 쉽게 관리
│   │   ├── App_useTabs.js        # useTabs: 탭 전환 로직 구현
│   │   ├── App_useTitle.js       # useTitle: 문서 타이틀 동적 변경
│   │   ├── App_useClick.js       # useClick: 특정 DOM 클릭 감지
│   │   ├── App_useHover.js       # useHover: 마우스 hover 상태 감지
│   │   ├── App_useConfirm.js     # useConfirm: confirm 창 실행 로직
│   │   ├── App_usePreventLeave.js# usePreventLeave: 새로고침/이탈 방지
│   │   ├── App_useBeforeLeave.js # useBeforeLeave: 마우스 화면 이탈 감지
│   │   ├── App_useFadeIn.js      # useFadeIn: 요소 fade-in 애니메이션
│   │   ├── App_useNetwork.js     # useNetwork: 네트워크 상태 감지
│   │   ├── App_useScroll.js      # useScroll: 스크롤 위치 기반 이벤트
│   │   ├── App_useFullScreen.js  # useFullScreen: 특정 요소 전체화면 전환
│   │   ├── App_useNoti.js        # useNotification: 브라우저 알림 API
│   │   ├── App_useAxios.js       # useAxios: axios 기반 커스텀 데이터 패칭
│   │   └── useAxios.js           # useAxios 훅 로직 정의 (trigger 기반 재호출 포함)
│   ├── routes/                   
│   │   ├── Home.js               # 메인 페이지: YTS API 영화 목록 출력
│   │   └── Detail.js             # 영화 상세 페이지: route param 활용
│   ├── App.js                    # 전체 라우팅 정의 및 각 훅 페이지 연결
│   ├── App_coin.js               # Coin Tracker 실습 (useEffect + API)
│   ├── App_todo.js               # To Do List 실습 (useState 기본 활용)
│   └── index.js                  # React 진입점 (ReactDOM.createRoot)
├── .gitignore                    # Git 추적 제외 파일 설정
├── package.json                  # 프로젝트 의존성 및 스크립트
├── package-lock.json             # 정확한 의존성 버전 기록
└── README.md                     # 이 파일. 프로젝트 설명 문서  
```

### 추가 공부 사항
> 개인적으로 Hook을 좀 더 공부하고 여러가지를 만들어 볼 예정이다.  
> 로그인.. 같은 기능

---

### 리액트 정석 사용

```text
[사용자 진입]
   ↓
<App.js>
   ↓
<Route path="/profile" element={<ProfilePage />} />
   ↓
<ProfilePage />  (components)
   ┣━ useUser()             🔁  (hooks)
   ┃    ┗━ axios 호출
   ┃    ┗━ 로딩/에러 상태 관리
   ┣━ formatUserName()      🧮  (utils)
   ┗━ JSX로 결과 출력
```