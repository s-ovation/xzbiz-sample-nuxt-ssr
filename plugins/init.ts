// 初期化時1度だけ呼ばれる

if (process.browser && window.localStorage) {
  /**
   * 動作確認のため強制的にABテストを無効にしてます
   * 本番ではこの処理は行わないでください
   */
  window.localStorage.setItem("closke_ab_test_id_key", "100");
}
