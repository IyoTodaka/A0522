//threadの親要素(これの下に掲示板のスレが1つずつ表示される)
const threadSectionDOM =document.querySelector(".thread-section") ;

//formタグ submitボタンが押された時のデータ登録の記述するために必要
const formDOM = document.querySelector(".form-section");

//入力欄title要素
const inputTextDOM = document.getElementById("inputTitle");
//入力欄content要素
const inputContentDOM = document.getElementById("inputContent");

//POSTメソッドで使う要素
//入力された値を格納するのでletで宣言しておく
let inputText = "";
let inputContentText ="";


//DB内の全てのデータを取得する
const getAllThreads = async () =>{
    try{
        //axiosライブラリ(HTTP通信/API通信でサーバーからデータを取得する)
        //のget関数を使い指定したURLのデータを取ってくる
        let allThreads = await axios.get("/api/v1/threads");

        //まずObject型としてデータを取ってくる
        console.log(allThreads);

        //次に配列として表示させる
        let { data } = allThreads;
        console.log(data);

        //最後にmap関数を使ってデータの中身1つ1つを出力する
        allThreads = data.map((thread) => {
            // console.log(thread);
            // //titleのみ欲しければthread.titleと記述する
            // console.log(thread.title);

            //↑のやり方でも出力できるけどJSでは分割代入で取ってくるのがデフォ
            //threadデータの中のtitle, contentだけを抜き出す
            const{ title, content } = thread;
            console.log(title, content);

            return`
            <div class="single-thread">
            <h3>${title}</h3>
            <p>${content}</p>
            </div>
            `;
        })
        //呼び出したデータの後ろに.join("")を記述しないと、
        //データの「,」区切りの「,」が画面に表示されてしまう
        .join("");
        threadSectionDOM.innerHTML = allThreads;
    }catch(err){
        console.log(err);
    }
};

getAllThreads();



//POSTメソッド
//addEventListenerの第一引数にchangeを指定するとinputBOXから
//フォーカスが外れるごとにイベントが発生する
//これはtitle要素
inputTextDOM.addEventListener("change",(e)=>{
    inputText = e.target.value;
    console.log(inputText);
});
//これはContent要素
inputContentDOM.addEventListener("change",(e)=>{
    inputContentText = e.target.value;
    console.log(inputContentText);
});


//データの追加
//submit(ボタンが押されたときに発火) 
formDOM.addEventListener("submit", async (e) =>{
    //preventDefaultはデフォルトの動作を妨げるという意味
    //formタグのデフォルトの動作で送信先URLが設定されていないと現在のURLに
    //内容を送信する(画面をリロードする)という動作がある為preventDefault()でリロードを阻止する
    e.preventDefault();
    
    //inputTextとinputContentTextが入力されている時
    if(inputText && inputContentText){
        console.log("add date")
        try{
            //postメソッドの第二引数にpostしたいデータを渡す
            //第二引数の部分がserver.jsのPOSTメソッドのreq.bodyにあたる
            await axios.post("/api/v1/thread",{
            title: inputText,
            content: inputContentText,
            });
            getAllThreads();

        }catch(err){
            console.log(err);
        }
    }
})
