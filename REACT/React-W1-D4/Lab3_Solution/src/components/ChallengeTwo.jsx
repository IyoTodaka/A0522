import React, { Component } from 'react'

const studentList = [
  'Randall Malfoy',
  'Kvothe Black',
  'Chun Zorander',
  'Leomund Ridcully',
  'Rary Stibbons',
  'Gandalf Dresden',
  'Zeddicus Doom',
]

export default class ChallengeTwo extends Component {
  //declare the states
  //arrという空の配列を準備しておく
  state = {
    arr: [],
  }

  //componentDidMount will execute when the page has loaded (this will only run once)
  componentDidMount() { 
    //display the student list after 3 seconds

    //setTimeoutは設定した時間の後に第一引数の動作を実行する
    setTimeout(() => {

      //setStateでStateの更新arrにstudentListを入れる
      // this.state.arr = studentList
      this.setState({arr:studentList})
    },3000)
  }


  //random button handler
  randomize = () => {
    //shuffle the array and set the state
    //setStateのprevStateには更新前のStateの値が勝手に入る(仕様)
    //arrに更新前(現在)のState.arrをsortしたものを入れる
    //Math.random()はランダムに0～1の値を返す(小数点第8位までの値)
    //0.5 - Math.random()でほぼ完全に半数がマイナスの値になる
    //sortを使って配列をランダムにしているらしいが中身の動きがよくわからない
    this.setState((prevState) =>({
    arr:prevState.arr.sort((a,b) => 0.5 - Math.random())
   }))
  }

  render() {
    return (
      <>
        <h2>Challenge 2</h2>
        <div className='msg'>
          <ul>
            {/* display the list of students by iterating through the array */}
            {//現在のstateのarrの中身をmapで全て表示させるforEachとは違いreturnが出来る、mapは新しい配列を作る
            //map((student,index)のindexには配列の0番から順に番号がふられる(仕様)
            //この番号をkeyとして使用しないとエラーになる場合があるので、mapを使う場合はkeyを必須で指定する
            //idの値をkeyとして使用してもいい
            //これは再起処理(コールバック関数)を使って表示させる書き方
            this.state.arr.map((student,index) => {
              retuen (
                <li key={index}>{student}</li>
              )
            }
            )}
          </ul>
        </div>
        <button className='btn large' onClick={this.randomize}>Randomize</button>
      </>
    )
  }
}
