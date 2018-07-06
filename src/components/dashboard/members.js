import React, {Component} from 'react'
import Collapsi from './collapsi'

export default class extends Component{
    constructor(props){
        super(props)
        this.collapsible=React.createRef()
        this.members=this.members.bind(this)
    }

    members(){
        var del=this.props.del
        var verify=this.props.verify
        console.log(121212,this.props.members)
        if(this.props.members!==null){
            if(this.props.members.verified){
                return <Collapsi data={this.props.members.unverified} del={this.props.del} />
            }
            else{
                return <div style={{fontSize:20, padding: 20}}>No member found under your organisation</div>             
            }
        }
        else return(
            <div style={{fontSize:20, padding: 20}}>Loading...</div>
        )
    }

    componentDidMount(){
        console.log(this.collapsible)
        M.Collapsible.init(this.collapsible.current);
    }

    
    render(){
        console.log(22222,this.props)
        return (
            <div className="row">
                <div className="card s12">
                    <div className="card-content row">
                        <span className="card-title">Registered Members</span>
                        <div className="container" style={{marginTop:40}}>
                            <ul className="collapsible popout" ref={this.collapsible}>
                                {this.members()}
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}