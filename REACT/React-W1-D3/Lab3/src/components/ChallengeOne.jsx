import React, { Component } from 'react';
//import images
//画像をインポートする、importの後に好きな画像の名称(今回はleftとright)をつける
import left from "../assets/look-left.jpeg"
import right from '../assets/look-right.jpeg'

class ChallengeOne extends Component {

  //declare the state here
  //初期の目の位置が右なのでleftにしておく
  state = {
    checkbtn: "left"
  };

  //click left/right button handler goes here
  //　②イベントで右か左のどちらかが押されたかvalueで渡って来る
  //上のstateの値をvalueに書き換える
  changeBtn = (e) => {
    const {value} = e.target

    console.log(value)//これは確認用

      this.setState(() => ({
        checkbtn: value
      }))
  }


  render() {
    return (
      <>
        <h2>Challenge 1</h2>
        <div className="msg">
          <img
            className="ch1"
      //　③checkbtnの値が"left"ならleftの画像(importした時に付けた名前)
      //  そうでないならrightの画像を表示する
            src= {this.state.checkbtn == "left" ? left : right  }
            alt="" 
          />
        </div>
      {/* ①ボタンクリックされたときにvalueにleft/rightの文字を渡す */}
        <button className="btn" value="left" onClick={this.changeBtn}>⭠</button>
        <button className="btn" value="right" onClick={this.changeBtn}>⭢</button>
      </>
    );
  }
}

export default ChallengeOne;