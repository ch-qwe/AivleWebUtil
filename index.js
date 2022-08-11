window.onload = () => {
  current_url = window.location.href;

  if (current_url.indexOf("aivle.edu.kt.co.kr")) {
    /*에이블 에듀 기능 구현 영역*/
    window.addEventListener("keydown", (e) => {
      if (e.altKey && e.key == "`") {
        open_codingMasters();
      }
    });
  } else if (current_url.indexOf("coding-ai.aivle-edu.kr")) {
    /*코딩 마스터즈 기능 구현 영역*/

    window.addEventListener("keydown", (e) => {
      if (e.altKey && e.key == "1") {
        /*실행 버튼 클릭*/
        run_btn = document.querySelector("#runButton");
        run_btn.click();
      } else if (e.altKey && e.key == "2") {
        /*평가 버튼 클릭*/
        evaluate_btn = document.querySelector("#evaluationButton");
        evaluate_btn.click();
      } else if (e.altKey && e.key == "3") {
        /*저장 버튼 클릭*/
        save_btn = document.querySelector("#btnSaveCode");
        save_btn.click();
      } else if (e.altKey && e.key == "4") {
        /*제출 버튼 클릭*/
        submit_btn = document.querySelector("#btnSubmit");
        submit_btn.click();
      }
    });
  }
};

function open_codingMasters() {
  /*에이블 에듀 페이지에서 코딩 마스터즈 실행*/

  master_href = document.querySelector(
    "ul.depth1 >li:nth-child(5) >ul >li a"
  ).href;

  start_index = master_href.indexOf("'");
  end_index = master_href.indexOf("%");
  master_href = master_href.substring(start_index + 1, end_index);
  console.log(master_href);
  window.open(master_href);
}
