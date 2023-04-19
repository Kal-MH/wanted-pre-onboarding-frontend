# 원티드 인터십 사전과제

제공된 API를 사용하여 로그인, 회원가입 기능이 첨가된 투두리스트를 만듭니다.

## 프로젝트 실행 방법
1. `npm install`
2. `npm start`를 통해 동작을 확인할 수 있습니다.

## 제공 기능

1. 로그인, 회원가입
    - 로그인, 회원가입 시 각각 email, password를 입력합니다.
    - 각각 입력값에 대해서 유효성 검사를 진행합니다. (email: @문자 포함, password: 8문자 이상)
2. 투두리스트
인증된 사용자는 투두리스트를 사용할 수 있습니다.
    - 리스트 추가: 입력한 값에 대해서 리스트에 추가할 수 있습니다.
    - 리스트 삭제: remove 버튼을 통해 리스트에서 목록 하나를 삭제할 수 있습니다
    - 리스트 수정: 입력한 값을 수정할 수 있습니다. 더불어 완료한 할 일 목록에 대해서 toggle을 통해 완료표시를 할 수 있습니다.
    
## 배포 주소
[https://wanted-pre-onboarding-frontend-eta-ten.vercel.app/](https://wanted-pre-onboarding-frontend-eta-ten.vercel.app/)
    
## 추가 사용한 라이브러리

```
  "dependencies": {
    "@craco/craco": "^7.1.0",
    "@emotion/babel-plugin": "^11.10.6",
    "@emotion/babel-preset-css-prop": "^11.10.0",
    "@emotion/react": "^11.10.6",
    "@emotion/styled": "^11.10.6",
    "axios": "^1.3.5",
    "react-router-dom": "^6.10.0",
  },
```
