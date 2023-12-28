<img src="https://github.com/Elice-8Team/MealAi-Server/blob/main/MainImage.png?raw=true">

# :rice: 나만의 맞춤 AI 영양사, MealAi

- AI 기반 식단 분석 서비스

## :books: 프로젝트 구성

### 1. 프로젝트 기간

- 2023년 4월 17일(월) ~ 2023년 5월 19일(금), 5주

### 2. 프로젝트 목표

##### :one: 기획의도

&emsp;&emsp;_자극적이고 서구화되어가는 식습관으로 젊은 세대에서도 각종 성인병과 당뇨
위험이 증가하고 있는 추세_ <br/>
&emsp;&emsp;_주식이 ‘밥’인 민족 특성상 식사시 탄수화물의 비율이 높아 전체적인 영양소 측면에서 불균형하다.<br/>_
&emsp;&emsp;_이를 해소하고자 하는 사용자들을 위하여 식단의 영양소 정보를 제공하고 사용자간의 식단 사진을 공유할 수 있도록 기획하였다._

##### :two: 해결책

&emsp;&emsp;_올바르고 균형잡힌 식사를 위한 음식 영양정보 제공 서비스_

##### :three: 참고자료

&emsp;&emsp; 1. 음식이미지 및 영양정보 텍스트 데이터 [AIHUB](https://aihub.or.kr/aihubdata/data/view.do?currMenu=115&topMenu=100&aihubDataSe=realm&dataSetSn=74)<br>
&emsp;&emsp; 2. 성별 연령별 영양소별 섭취 기준 [국민영양통계](https://www.khidi.or.kr/kps/dhraStat/result5?menuId=MENU01657&gubun=age1&year=7%EA%B8%B0)


### 3. 프로젝트 기술 스택

- :heavy_check_mark: **Front-End** &ensp;
  <img src="https://img.shields.io/badge/React-20232A?style=flat-square&logo=react&logoColor=white">
  <img src="https://img.shields.io/badge/TypeScript-007ACC?style=flat-square&logo=typescript&logoColor=white">
  <img src="https://img.shields.io/badge/Recoil-005FED?style=flat-square&logo=&logoColor=white">
  <img src="https://img.shields.io/badge/styledcomponents-DB7093.svg?style=flat-square&logo=styledcomponents&logoColor=white">
  <img src="https://img.shields.io/badge/tailwindcss-06B6D4?style=flat-square&logo=tailwindcss&logoColor=white">
  <img src="https://img.shields.io/badge/axios-5A29E4?style=flat-square&logo=axios&logoColor=white">
  <img src="https://img.shields.io/badge/figma-%23F24E1E.svg?style=flat-square&logo=figma&logoColor=white">

- :heavy_check_mark: **Back-End** &ensp;
  <img src="https://img.shields.io/badge/Python-14354C?style=flat-square&logo=python&logoColor=white">
  <img src="https://img.shields.io/badge/FastAPI-009688?style=flat-square&logo=fastapi&logoColor=white">
  <img src="https://img.shields.io/badge/MySQL-4479A1?style=flat-square&logo=MySQL&logoColor=black">
  <img src="https://img.shields.io/badge/Redis-DC382D?style=flat-square&logo=Redis&logoColor=black">
  <img src="https://img.shields.io/badge/Amazon S3-569A31?style=flat-square&logo=AmazonS3&logoColor=black">
  <img src="https://img.shields.io/badge/JSONWebTokens-ff0000?style=flat-square&logo=JSONWebTokens&logoColor=white%22/%3E">
  <img src="https://img.shields.io/badge/Swagger-82?style=flat-square&logo=Swagger&logoColor=white%22/%3E">
  
 
- :heavy_check_mark: &ensp;&ensp;&ensp;**AI** &ensp;&ensp;&ensp;&ensp;
  <img src="https://img.shields.io/badge/Python-14354C?style=flat-square&logo=python&logoColor=white">
  <img src="https://img.shields.io/badge/numpy-%23013243.svg?style=flat-square&logo=numpy&logoColor=white">
  <img src="https://img.shields.io/badge/Ultralytics-%23150458.svg?style=flat-square&logo=pytorch&logoColor=white">
  <img src="https://img.shields.io/badge/PIL-5C3EE8?style=flat-square&logo=&logoColor=white">
  <img src="https://img.shields.io/badge/ClearML-149EF2?style=flat-square&logo=c&logoColor=white">
  

### 4. 프로젝트 기능 설명

##### :one: 식단 AI 분석
음식 사진을 올려 AI 분석을 통해 영양소 정보를 얻을 수 있습니다.
- 시작 전 분석 성공률을 높이기 위한 안내
- AI 사진 분석 (성공/실패 결과 제공)
- 분석 결과를 사용자가 개별 수정할 수 있는 기능 제공 (추가/수정/삭제)
- 결과 비공개 설정

##### :two: 식단톡
분석한 결과를 공유할 수 있습니다.
- Infinity Scroll
- 좋아요
- 최신/인기순 sorting, 목표별 filter
- 게시글 수정/삭제

##### :three: 식단일지 & 리포트
분석 기록을 확인할 수 있고, 리포트를 받아볼 수 있습니다. (회원 전용 기능)
- 주별 식단 분석 기록 히스토리 제공
- 일별 & 주별 영양소 정보 제공
- 게시글 수정/삭제
- 주별 리포트 : 한 주간의 영양소 섭취 그래프와 피드백 제공

##### :four: 회원 관련
- 이메일 인증을 통한 회원가입
- 마이페이지 : 좋아한 게시글 목록, 회원정보 수정, 탈퇴
- 회원별 목표 설정 및 연령대 선택하여 그룹화



### 5. 프로젝트 팀원 역할 분담

| 이름  | 담당 업무        |
|-----|--------------|
| 장시엘 | 인공지능 / 프론트엔드 |
| 서지영 | 프론트엔드        |
| 김지수 | 프론트엔드        |
| 허지환 | 프론트엔드        |
| 신희태 | 인공지능 / 백엔드   |
| 김성연 | 백엔드          |


### 6. Link
- 🔗 [Team GitHub](https://github.com/Elice-8Team) (private)
- 🔗 [Figma](https://www.figma.com/file/DlRaUX758hoLYsonwHglml/3%EC%B0%A8-%ED%94%84%EB%A1%9C%EC%A0%9D%ED%8A%B8?type=design&node-id=291%3A577&t=7F6ZGxFDuCq4BwZu-1)
- 🔗 [시연영상](https://youtu.be/O62orfwvG-k)
