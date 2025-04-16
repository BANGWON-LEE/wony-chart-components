
# wony-chart-components
data만 props로 넘기면 시각화 되는 컴포넌트 개발 프로젝트 (회사 프로젝트)

- Chart.js react-chartjs-2를 사용함
- 서버에서 받아온 데이터와 어떤 데이터를 사용할 것인지 해당 차트 타입을 props로 넘겨주면 화면에 시각화 되도록 함
- 사용자가 style 및 데이터 추가도 커스텀 할 수 있도록 개발 진행 중


- 아래와 같은 json의 데이터를 차트에 적용하는 함수만 만들어 놓음
  <br/>
const dummyData = { <br/>
  data: [ <br/>
&nbsp;&nbsp;    { <br/>
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;time: '2024-03-18 10:00', <br/>
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;temperature: 22.5, <br/>
      &nbsp; &nbsp;&nbsp;&nbsp;&nbsp;humidity: 55, <br/>
   &nbsp;&nbsp;&nbsp; &nbsp;&nbsp;co2: 33, <br/>
   &nbsp;&nbsp;&nbsp;}, <br/>
   &nbsp;&nbsp;&nbsp;{ <br/>
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;time: '2024-03-18 10:01', <br/>
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;temperature: 22.7, <br/>
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;humidity: 54, <br/>
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;co2: 23, <br/>
   &nbsp;&nbsp;&nbsp;}, <br/>
&nbsp;] <br/>
} 
<br/>

< 현재 작업 상황 >

- 차트 종류를 늘려가면서, 불필요한 코드 및 중복처리 해야 할 코드 적용 중
- 차트 options에 maxTicksLimit는 커스텀 할 수 있도록 코드 추가작업 진행 중, options 또한 스타일처럼 관리하도록 로직 변경
