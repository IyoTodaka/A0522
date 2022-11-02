//class component

class CardComponent extends React.Component {
  render() {
    const name = "Pembroke Welsh Corgi";
    const imageURL =
      "https://images.dog.ceo/breeds/pembroke/n02113023_6015.jpg";

    return (
      <div className="row">
        <div className="col s2">
          <div className="card medium">
            <div className="card-image">
              <img src={imageURL} />
            </div>
            <div className="card-content">
              <p>{name}</p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
