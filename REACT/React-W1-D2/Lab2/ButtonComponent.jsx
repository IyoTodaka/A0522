
class ButtonComponent extends React.Component {
    render(){
        console.log(this.props)

        return(
            
               <div className="button">
                    <div className="icon">
                    <i className={"fa fa-" + this.props.buttonName}></i>
                    </div> 
                    <span>{this.props.buttonTitle}</span>
                </div>
           
        )
    }
}