# 컨벤션 문서

## 목차
1. [Naminng](#naminng)
2. [Structure](#structure)
3. [Programming](#programming)
4. [commit convention](#commit-convention)
5. [git branch strategy](#git-branch-strategy)
6. [template](#template)

## Naminng
- 변수는 snake_case를 기본으로 한다.
- 기본적으로 이름은 길이를 고려하지 않고 최대한 의도를 밝혀 명확하게 작성한다. 다만 명확성의 차이가 없을 때는 길이가 짧은 네이밍을 선택한다.
- 변수명은 맥락을 고려해서 짓는다. 예를들어 클래스 이름이 user 라면 변수에 userName과 같이 user를 붙이지 않는다.
- 변수이름에 자료형을 쓰지 않는다. 예를들어 memberList 보다는 members 처럼 복수형으로 표현한다.
- 패키지명은 대문자를 사용하지 않고 소문자로만 구성한다.
- Enum 이나 상수는 대문자로 구성하고 밑줄( _ )로 각 단어를 분리한다.
- 메서드명은 동사로 작성한다.
- 값을 반환하는 메서드의 경우 뭘 반환하는지 알 수 있게 메서드명을 짓는다.
- 클래스명과 인터페이스명은 명사로 작성하고, Upper Camel Case 를 사용한다.
- 엔티티 이름은 단수로 작성한다.
- boolean 메서드의 경우에 문법적으로 맞지 않은데 많이 사용하는 is+동사원형의 형태는 쓰지 않는다.

## Structure
```
frontend/
├── public/
├── src/
│   ├── apis/
│   ├── components/
│   ├── hooks/
│   ├── pages/
│   ├── styles/
│   └── index.tsx
├── tests/
├── node_modules/  (module)
└── package.json
```

```
backend/
├── public/
├── src/
│   ├── controllers/      # 비즈니스 로직 처리
│   ├── routes/           # 라우팅 정의
│   ├── services/         # 서비스 계층
│   ├── modules/          # 데이터 모델(Mongoose, Sequelize 등)
│   ├── config/           # 환경/설정 파일
│   ├── utils/            # 유틸리티/헬퍼 함수
│   ├── repositories/     # 데이터베이스 액세스 레이어
│   ├── middlewares/      # 미들웨어
│   └── index.ts
├── app.js
├── server.js
├── tests/
├── node_modules/         # 모듈
└── package.json
```


## Programming
- 반복되는 코드는 작성하지 않는다.
- 변수를 사용하는 위치에 가깝게 둔다.
- import를 할 때는 전체 이름을 다 적는다. * 를 사용하지 않는다.
### 롬복 설정
- 롬복은 가능한 한 사용하지 않는다.
- @Data 롬복 어노테이션은 쓰지 않는다.
- @ToString, @EqualsAndHashCode, @Getter, @Setter, @RequiredArgsConstructor 를 한 방에 해주는데 개발자가 예기치 못한 에러가 발생할 위험성이 매우 크다.
- @AllArgsConstructor 롬복 어노테이션은 쓰지 않는다.
- 모든 인자를 가진 생성자를 생성한다.
- 해당 어노테이션 사용보다 builder 패턴 혹은 정적팩토리 메서드 패턴과 같이 가독성이 더 좋은 방법이 있다. 따라서 사용하지 않는다.
- @Settr 롬복 어노테이션은 사용하지 않는다.
- 의도도 불분명하고 객체를 언제든지 변경할 수 있는 상태가 되어 객체의 안전성이 보장받기 어렵다.
- @AllArgsConstructor 롬복 어노테이션은 사용하지 않는다.
- 기본 생성자의 접근 권한을 최소화할 목적으로 접근 권한을 protected 설정한다.
- 굳이 외부에서 생성을 할 수 있또록 열어둘 필요가 없으며, 객체 생성에 대한 안전성을 보장할 수 있다.
- 롬복 어노테이션으로 작성하기보다는 코드로 직접 작성한다.
- @Builder는 클래스 상단에는 사용하지 않고 사용 시 매개변수는 최소화한다.
- @Builder 를 사용하면 해당 객체에서 AllArgsConstructor 어노테이션을 붙인 효과를 발생시킨다. 따라서 객체 생성 시 모든 필드에 대한 매개변수 활용은 방지해야하고 필요한 데이터만 매개변수로 넣어 만들 수 있도록 한다.
- 비지니스 로직에 맞게 필수값에 대해서만 열어둔다.

## commit convention
gitmoji : commit message (#이슈번호)
본문
- commit message
  - 이번 커밋에서 작업한 내용을 간단하게 설명함
- issue number
  - 깃허브 이슈 넘버 혹은 지라 티켓 넘버를 작성함

### 본문
- 제목과 본문 사이 한 줄을 개행하여 분리한다.
- 본문은 필요한 경우에 작성하고, 무엇을 왜 했는지(what과 why)를 중점으로 작성한다.

## git branch strategy
- main
  - 언제든지 배포가 가능한 상태를 유지해야 한다.
- develop
  - 다음 버전 개발을 위한 코드를 모아두는 브랜치
  - 개발이 완료되면 main 브랜치로 머지된다.
- feature branch
  - 기능 단위 개발 브랜치
  - 이슈 리스트로 브랜치 생성 및 관리
  - 네이밍은 feature/(#이슈번호)-브랜치명 의 형태로 생성한다.
  - 브랜치명은 소문자로 작성한다. 단어의 구분은 밑줄( _ )로 한다.
  - feature 브랜치에서 개발 완료 후 develop 브랜치로 PR 요청한다.
  - merge 이후 요청한 브랜치는 삭제한다.

  ### git merge strategy
  - PR 요청 시에는 반드시 리뷰어를 지정한다.
  - 리뷰어는 최소 2명 이상 지정한다.
  - 방식은 Squash and Merge를 사용한다.
## template
> 템플릿의 목적은 자주 작성하는 이슈와 PR 요청의 시간을 줄이기 위함

### issue
> 이슈 발생 원인 및 설명과 요청할 작업 및 진행도 체크(가능하면)

#### 예시
Title : 오늘 점심 및 저녁 메뉴 추천

- 먹긴 해야하는데 뭘 먹어야 할 지 모르겠음

- 선택장애라 도움이 필요함

- [ ] 점심 메뉴 확인
- [ ] 저녁 메뉴 확인
## pull request
- 작업 목적
- 주요 변경점
- 참고
- 리뷰 포인트