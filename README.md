
# Word Test
> **리액트로 만든 토이 프로젝트** <br/> **개발기간: 2023.12.11 ~ 2023.12.22**


## 웹개발팀 소개

|     윤주원        |  이지성                 |                                                                                                                              
| :-----------------------------: | :---------------: | 
|  <img width="160px" src="https://github.com/WordTest-Toy-Project/WordTest/assets/114423035/72fbc398-8684-4d93-8fe4-d9444617905b" /> | <img width="160px" height="120px" src="https://github.com/WordTest-Toy-Project/WordTest/assets/114423035/7cff9947-24f1-4da3-80f0-605baff9cdfc"/>       |                     

|   [@JooWon_Yun](https://github.com/morningB)   |  [@Ji-Sung05](https://github.com/Ji-Sung05)   |   
| 순천향대학교 의료IT공학과 3학년 | 순천향대학교 의료IT공학과 3학년 |  


## 프로젝트 소개

발룬테인은 온라인 코딩 교육 봉사를 하는 단체입니다. 기존에 소프트웨어학과에서 월드프렌즈 ICT 봉사단이라는 개발도상국에서 약 학 달 간 코딩 교육 봉사를 하는 활동이 있었는데, 봉사가 일회성으로 끝나는 점에 아쉬움을 느껴 지속적인 봉사를 하고자 만들어졌습니다. 발룬테인에서는 스크래치, 파이썬 등 프로그래밍 언어에 관한 강의를 제공하고, 질의응답과 라이브 세션을 통해 한국 학생과 외국 학생 간에 소통이 이루어집니다.

#### Voluntain will share the knowledge of programming.
You can take easy-to-understand lectures created by our team, including Scratch and Python. Also, improve your understanding and application skills of programming with exercise questions in the lecture videos.

#### Voluntain's website will give you a learning-friendly environment.

Our website supports the following component.
1. Various online lectures with detailed descriptions and exercise questions.
2. Q&A section to ask questions freely.
3. Function to check the lecture you watched recently.

## 시작 가이드
### Requirements
For building and running the application you need:

- [Node.js 21.1.0](https://nodejs.org/ca/blog/release/v21.1.0/)
- [Npm 10.2.0](https://www.npmjs.com/package/npm/v/10.2.0)

### Installation
``` bash
$ git clone https://github.com/WordTest-Toy-Project/WordTest.git
```

#### Frontend
```
$ npm install 
$ npm start
```

---

## Stacks 🧑‍💻

### Environment
![Visual Studio Code](https://img.shields.io/badge/Visual%20Studio%20Code-007ACC?style=for-the-badge&logo=Visual%20Studio%20Code&logoColor=white)
![Git](https://img.shields.io/badge/Git-F05032?style=for-the-badge&logo=Git&logoColor=white)
![Github](https://img.shields.io/badge/GitHub-181717?style=for-the-badge&logo=GitHub&logoColor=white)             

### Config
![npm](https://img.shields.io/badge/npm-CB3837?style=for-the-badge&logo=npm&logoColor=white)        

### Development
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=Javascript&logoColor=white)
![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)

### Communication
![Notion](https://img.shields.io/badge/Notion-000000?style=for-the-badge&logo=Notion&logoColor=white)


---
## 화면 구성 📺
| 메인 페이지                        | 단어장 페이지                      |
| :---------------------------------: | :--------------------------------: |
| <img src="https://github.com/WordTest-Toy-Project/WordTest/assets/115493374/41bf660b-3ff5-4277-8523-4561a2b94df2" width="300" /> | <img src="https://github.com/WordTest-Toy-Project/WordTest/assets/115493374/87580476-d7fc-491b-8fdf-3bd8d4f67660" width="300" /> |

| 테스트 페이지                       | 테스트 결과 페이지                  |
| :---------------------------------: | :----------------------------------: |
| <img src="https://github.com/WordTest-Toy-Project/WordTest/assets/115493374/519f76bd-c9d9-476c-90b6-4d30c44c9449" width="300" /> | <img src="https://github.com/WordTest-Toy-Project/WordTest/assets/115493374/474b82df-2317-4df5-9af6-41f0eab684cc" width="300" /> |

---
## 주요 기능 📦

### ⭐️ 단어 추가 기능
- 단어와 뜻을 입력하여 SampleJson에 단어 추가

### ⭐️ 스크랩 및 삭제 기능
- 스크랩 : 즐겨찾기에 스크랩한 단어 추가
- 삭제 : 단어 삭제 기능 

### ⭐️ 단어 시험 보기 기능
- 추가한 단어 중 10문제를 랜덤으로 출제하여 시험을 보고 결과 페이지에서 틀린 단어를 보여줌

### ⭐️ 시험 단어 / 뜻 변경 기능
- 토글 기능을 사용하여 시험볼 때 보여줄 단어를 선택

---
## 아키텍쳐

### 디렉토리 구조
```bash
C:.
├─components
│  ├─button
│  ├─footer
│  ├─header
│  ├─input
│  ├─table
│  └─title
├─containers
│  └─wordTable
├─pages
│  ├─favorite
│  ├─login
│  ├─main
│  ├─mypage
│  ├─study
│  ├─test_page
│  ├─test_result
│  └─test_start
└─styles
```
## 회고록
서버를 구축하지 못해 sampleJson 을 만들어서 진행했는데 sampleJson 에 CRUD 하는 방법과 컴포넌트 간에 데이터를 전달하는 방법, 폴더 구조를 나누는 방법 등이 아직 많이 미숙한 것 같다.
리팩토링할 때 리덕스 툴킷과 커스텀 훅 등을 사용하여 좀 더 효율적이고 깨끗한 코드를 작성해야 겠다.
sampleJson을 좀 더 잘 사용하기 위해 알아보다가 백엔드 없이 프론트 혼자서 서버를 쉽게 구축해서 사용할 수 있는 방법을 알게되었다.
1. jsonplaceholder 사용
```javascript
fetch('https://jsonplaceholder.typicode.com/todos/1')
      .then(response => response.json())
      .then(json => console.log(json))
```
<a href="https://jsonplaceholder.typicode.com/" />
2. json-server 사용
<a href="https://www.npmjs.com/package/json-server" />
JSON Generator 를 사용해서 JSON 데이터를 생성할 수 있다.
<a href="https://json-generator.com/" />
