window.addEventListener("keydown", (e) => {
  try {
    /*코딩 마스터즈 기능 구현 영역*/
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
    } else if (e.altKey && e.key == "`") {
      open_codingMasters();
    } else if (e.altKey && e.key == ".") {
      /*영상 프레임 앞으로*/
      player = document.querySelector("#player video");
      player.currentTime += 30;
    } else if (e.altKey && e.key == ",") {
      /*영상 프레임 뒤로*/
      player = document.querySelector("#player video");
      player.currentTime -= 30;
    } else if (e.key == " ") {
      /*영상 프레임 정지 재생*/
      player = document.querySelector("#player video");
      if (player.paused) {
        player.play();
      } else {
        player.pause();
      }
    }
  } catch (error) {}
});

function open_codingMasters() {
  /*에이블 에듀 페이지에서 코딩 마스터즈 실행*/

  master_href = document.querySelector(
    "ul.depth1 >li:nth-child(5) >ul >li a"
  ).href;

  start_index = master_href.indexOf("'");
  end_index = master_href.indexOf("%");
  master_href = master_href.substring(start_index + 1, end_index);
  window.open(master_href);
}
