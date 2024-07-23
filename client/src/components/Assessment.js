import { Component } from "react";
class Assessment extends Component{

    render() {
        const{assessmentDetails}=this.props
        const{id,name,description}=assessmentDetails

        const onClickSubmit=()=>{
            console.log(id);
        }
      return (
        <div className="assessment">
            <h2 className="assess-head">{name}</h2>
          <p className="assess-desc">{description}</p>
          <button className="assess-button" onClick={onClickSubmit}>GetStarted</button>
        </div>
      )
    }
}
export default Assessment