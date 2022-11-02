//functional component
function CardComponent({name, dogImage}) {
  return (
    <div className="row">
      <div className="col s2">
        <div className="card medium">
          <div className="card-image">
            <img src={dogImage} />
          </div>
          <div className="card-content">
            <p>{name}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

//class component

// class CardComponent extends React.Component {
//   render() {
//     // const name = "Pembroke Welsh Corgi";
//     // const imageURL =
//     //   "https://images.dog.ceo/breeds/pembroke/n02113023_6015.jpg";

//     console.log(this.props.name)

//     return (
//       <div className="row">
//         <div className="col s2">
//           <div className="card medium">
//             <div className="card-image">
//               <img src={this.props.dogImage} />
//             </div>
//             <div className="card-content">
//               <p>{this.props.name}</p>
//             </div>
//           </div>
//         </div>
//       </div>
//     );
//   }
// }
