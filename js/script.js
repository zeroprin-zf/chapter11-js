$('#tab-contents .tab[id != "tab1"]').hide();
//$()関数では、特定の属性を持つ要素や属性値を絞り込むことができる
//$('要素[属性]')
//('要素[属性 = "値"]')属性の値に等しい要素だけを取得したいとき
//$('要素[属性 != "値"]')属性値が特定の値に等しくない要素だけを取得したいとき
//.hide();は特定のHTML要素を非表示にするメソッド
//$('#tab-contents .tab[id != "tab1"]').hide();
//id="tab-contents"の要素のうち、class="tab"であり、id="tab1"ではない要素が非表示なる
$('#tab-menu a').on('click', function(event){
  //id="tab-menu"のaタグがクリックされたときに、処理を実行してくださいの意味
  $("#tab-contents .tab").hide();//イベント発生時に行われる処理
  //id="tab-contents"内のいずれかのタブがクリックされたときに、そのタブ内の全コンテンツをいったん非表示にする
  $("#tab-menu .active").removeClass("active");
  //.removeClass()はクラスを削除するメソッド
  //activeが削除対象のクラスとして指定されています。
  $(this).addClass("active");
  //thisのときはタブがクリックされたとき
  $($(this).attr("href")).show();
  event.preventDefault();
});

