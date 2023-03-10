<h1>:sunny: 서비스 소개</h1>
<p>:cloud: 개발자, 퍼블리셔가 작업하면서 가장 고민인 클래스 네이밍을 좀 더 쉽고 체계적으로 적용할 수 있도록 도와주기 위한 웹사이트 :cloud:</p>

<span>사이트 보기 : [NamingConvention link](https://kimminyoung-naming.cozyfex.com)</span>



<h2>:sun_with_face: 주요기능</h2>
<div>
<ol>
  <li>
    <h3>:rose: 메인페이지</h3>
    <p>한글로 된 단어를 번역하고, 등록할수있습니다.</p>
    <img width="800" alt="img1" src="https://user-images.githubusercontent.com/80198577/223934322-2d212067-4378-4fb8-a93e-6b2f3335a261.png"/>
  </li>
  <li>
    <h3>:hatched_chick: 검색 기능</h3>
    <p>구글 번역기를 통해서 단어를 여어로 번역해, 영어 단어를 손쉽게 입력, autocomplete 기능을 통해서 단어를 자동완성할 수 있다.</p>
    <ul>
      <li> npm : autocomplete</li>
      <li> api : 구글 번역기</li>
    </ul>
    <img width="800" alt="검색단어" src="https://user-images.githubusercontent.com/80198577/223945768-58dbeb34-9742-4c3b-aa45-f9c906338bc2.png">
  </li>
   <li>
    <h3>:first_quarter_moon:NamingConvention</h3> 
     <p>검색한 단어를 선택해 네이밍 컨벤션에 맞게 탭에서 snake_casing,camelCasing,PascalCase,kebab-case을 선택해 원하는 변수명을 완성 할수있습니다.</p>
   <img width="800" alt="tab" src="https://user-images.githubusercontent.com/80198577/223945236-a872f8fe-11b8-402d-b78f-7aadc8f330a1.png">
  </li>
  <li>
    <h3>:tulip: 로그인 </h3>
    <p>kakao, naver, google 토큰 발급 요청 API를 통해 회원 정보중 "email"을 받아서 로그인할 수 있습니다.</p>
    <ul>
      <li> 
        <p>api : KakaoLoginApi</p>
        <span>카카오톡 실행 또는 실행 중인 카카오톡으로 이동, 카카오톡에 연결된 카카오계정의 자격정보(Credentials)를 통해 사용자 인증(사용자의 카카오계정 입력)사용자가 필수 동의 항목에 동의하고 로그인을 요청하면, 카카오 인증 서버는 인가 코드(Authorization Code)를 발급해 서비스 앱에 등록된 Redirect URI로 전달합니다.

</span>
      </li>
      <li> 
        <p>api : NaverLoginApi</p>
        <span>이용자가 네이버 회원 인증에 성공하면 API로부터 받은 code 값을 이용해서 접근 토큰 발급 요청 API를 호출합니다. 접근 토큰 발급 요청 API를 통해 받은 접근 토큰(access token)으로 회원 email을 통해 로그인 할 수있습니다.</span>
      </li>
      <li> 
        <p>api : googleLoginApi</p>
        <span>구글 계정으로 OAuth인증을 통해 로그인 할 수 있습니다.</span>
        <img width="800" alt="loginApi" src="https://user-images.githubusercontent.com/80198577/223945669-e186d47f-6661-494a-940f-b6e0ae699758.png">
      </li>
    </ul>
  </li>
   
  <li>
    <h3>:cactus: modal</h3>
    <p>bootstrap를 통해서 modal를 띄울수 있습니다.</p>
    <img width="800" alt="부트스트랩 모달" src="https://user-images.githubusercontent.com/80198577/223947472-6bcf3739-7b1f-45e4-b7e8-0dcdb83c4eb9.png">
  </li>
  <li>
    <h3>:bouquet: 로그아웃</h3>
    <p>로그아웃 을 할수있습니다.</p>
  </li>
  <li>
    <h3>:first_quarter_moon:DarkMod</h3> 
    <p>darkmode 를 구현해 눈의 피로감을 줄여줄 수 있습니다.</p>
    <img width="800" alt="darkmode" src="https://user-images.githubusercontent.com/80198577/223945850-ccc8c80a-c0ff-468a-86ff-7be35b2f0734.png">
  </li>
  <li>
    <h3>:first_quarter_moon:내 리스트</h3> 
    <p>로그인 이후에는 내가 등록한 변수들을 한꺼번에 보고, 복사하고, 삭제하고 수정할수있습니다.</p>
    <ul>
      <li>
        <p>단어를 등록한뒤 리스트를 통해서 변수를 한꺼번에 나열할수있습니다. 또한 리스트에 있는 좋아요 버튼을 통해 단어를 선택할수있습니다.</p>
        <img width="800" alt="등록된 단어 list" src="https://user-images.githubusercontent.com/80198577/223945551-cf4cc1cb-39c5-4f1a-bc1d-36930329b688.png">
      </li>
      <li>
        <p>나열된 변수를 수정및 삭제 할수있습니다.</p>
        <img width="800" alt="수정, 삭제" src="https://user-images.githubusercontent.com/80198577/223945421-4ebb1948-485a-4912-832b-207486e10ce2.png">
      </li>
      <li>
        <p>각각의 변수들을 프로그래밍 언어에 맞게 선택해 복사할수 있는 기능이 있습니다.</p>
       <img width="800" alt="copy" src="https://user-images.githubusercontent.com/80198577/223945347-599068eb-dca2-4ae4-a2e6-8b9110ab5c65.png">
      </li>
      <li>
        <p>자주 사용및 좋아하는 단어를 선택해서 나만의 변수명을 사용할 수 있습니다.</p>
        <img width="800" alt="bookmark" src="https://user-images.githubusercontent.com/80198577/223945112-ab3ae0d5-9e31-484e-9d21-84c5bd3d8d97.png">
      </li>
    </ul>
    
  </li>
</ol>







</div>

