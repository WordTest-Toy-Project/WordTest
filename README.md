
# Word Test
> **리액트로 만든 토이 프로젝트** <br/> **개발기간: 2023.12.11 ~ 2023.12.22**


## 웹개발팀 소개

|     윤주원        |  이지성                 |                                                                                                                              
| :-----------------------------: | :---------------: | 
|  <img width="160px" src="https://github.com/WordTest-Toy-Project/WordTest/assets/114423035/72fbc398-8684-4d93-8fe4-d9444617905b" /> | <img width="160px" height="120px" src="https://github.com/WordTest-Toy-Project/WordTest/assets/114423035/7cff9947-24f1-4da3-80f0-605baff9cdfc"/>       |                     
|   [@JooWon_Yun](https://github.com/morningB)   |  [@Ji-Sung05](https://github.com/Ji-Sung05)   |   
| 순천향대학교 의료IT공학과 3학년 | 순천향대학교 의료IT공학과 3학년 |  


## 프로젝트 소개
Word Test는 사용자 단어를 외우다가 스스로 시험이 필요하다고 생각할 때 사용할 수 있는 서비스다. 토익 및 다른 영어 시험을 준비하며 스스로 진행하고 싶은 단어테스트가 찾기 힘든 아쉬움으로 시작했다.  자신이 입력한 단어 중 10개를 뽑아서 랜덤으로 테스트를 진행하며, 테스트를 제출하게 되면 오답 단어와 뜻이 자신의 부족한 부분을 파악할 수 있다.  <br> 
추가로 자신이 원하는 단어는 스크랩 기능으로 확인할 수 있다.  <br>
서버는 sampleJson으로 대체했고 기초 개념인 useState 훅을 사용하여 상태관리를 했다.  <br>
 

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
![Figma](https://img.shields.io/badge/Figma-F24E1E?style=for-the-badge&logo=figma&logoColor=white)

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
https://jsonplaceholder.typicode.com/
<br />
2. json-server 사용
<br />
https://www.npmjs.com/package/json-server
<br />
JSON Generator 를 사용해서 JSON 데이터를 생성할 수 있다.
<br />
https://json-generator.com/
