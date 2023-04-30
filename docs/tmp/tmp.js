//ラベルのマッチタイプのフィルター（ラベル名優先/labelpriority・ラベル名のみ/label・別名のみ/alias・どちらも/default）
function label_type(res) {
  let result = new Array();
  const matchtype = radio_value("labelmatchType");
  if (matchtype == "labelpriority") {
    //ラベル名優先
    const labelOnly = res.filter((x) => {
      return x.match.type == "label";
    });
    if (labelOnly.lenght > 0) {
      result = labelOnly;
    } else {
      result = res;
    }
  } else if (matchtype == "default") {
    result = res;
  } else {
    let array = new Array();
    for (let i = 0; i < res.length; i++) {
      if (res[i].match.type == matchtype) {
        array.push(res[i]);
      }
    }
    result = array;
  }
  return result;
}

//カテゴリー選択関数
function select_category(identifiers, query_data, checklist, matchlist) {
  console.log("select_category");
  let purpose_id = new Array();
  let color = new Array();
  //console.log(query_data);
  for (let id of identifiers) {
    console.log("i of id", id);
    for (let q of query_data) {
      //console.log(q);
      //クエリの結果から、マッチリスト（選択されたカテゴリー）と同じIDのものを探し、その添え字を格納している
      let idx1 = Array.from(matchlist.values()).indexOf(q.o.value);
      //マッチリストに格納されている値のどれかと一致　かつ　結果の主語部分に指定したidが含まれている場合実行
      if (idx1 != -1 && q.s.value.indexOf(id) != -1) {
        //console.log('選択されたカテゴリー',Array.from(matchlist.values()));
        //console.log('カテゴリーにマッチしたID', q);
        //console.log(idx1);

        purpose_id.push(q);
        let idx2 = Array.from(checklist.values()).indexOf(
          Array.from(matchlist.entries())[idx1][0]
        );
        reg = new RegExp("cat-d(-d)+", "g");

        if (idx2 != -1) {
          //console.log(Array.from(checklist.values()));
          //console.log(Array.from(matchlist.entries())[idx1][0]);
          //console.log(idx2);

          let tmp;
          if (reg.test(Array.from(checklist.entries())[idx2][0])) {
            let tmp1 = Array.from(checklist.entries())[idx2][0].slice(5);
            tmp = Array.from(checklist.entries())[idx2][0].replace(tmp1, "");
          } else {
            tmp = Array.from(checklist.entries())[idx2][0];
          }
          let idx3 = Object.keys(category_color).indexOf(tmp);
          //color.push(category_color["cat-" + idx3]);
          color.push(idx3);
          //console.log(Array.from(checklist.entries())[idx2][0]);
          //console.log(idx3);
          console.log(category_color);
          //console.log(category_color['cat-' + idx3]);
        }
      }
    }
  }
  //console.log(purpose_id);
  //console.log(color);
  let res = [purpose_id[0], color[0]];
  console.log("neko: ");
  console.log(res);

  return res;
}
