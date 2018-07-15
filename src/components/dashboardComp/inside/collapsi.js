import React, {Component} from 'react'
import M from 'materialize-css'

export default class extends Component{
    constructor(props){
        super(props)
        this.collapsible=React.createRef()
    }
    componentDidMount(){
        console.log(this.collapsible)
        M.Collapsible.init(this.collapsible.current);
    }

    render(){
        var props=this.props
        console.log('collapsi',this.props)
        var okay=false
        var mems= this.props.data.map(function(mem){
            if(mem.visible && (okay=true))
            return(
                <li key={mem.reg}>
                    <div className="collapsible-header left-align">
                        <div className="col s12 m6"><i className="material-icons">keyboard_arrow_right</i>{mem.name}</div>
                        <div className="col s6 right-align hide-on-small-only">{mem.reg}</div>
                    </div>
                    <div className="collapsible-body memCollapsi"><span>
                        <ul className="row">
                            <li className="col s5 m6"><b>Name: </b>{mem.name}</li>
                            <li className="col s7 m6"><b>Reg No: </b>{mem.reg}</li>
                        </ul>
                        <ul className="row">
                            <li className="col s5 m6"><b>Email: </b>{mem.email}</li>
                            <li className="col s7 m6"><b>Phno: </b>{mem.phno}</li>
                        </ul>
                        
                    </span>
                    <div class="card-action">
                    {(()=>{
                            if(props.view)
                                return <a href="#" onClick={()=>props.view(mem.reg)}>View more</a>
                        })()}

                        {(()=>{
                            if(props.verify)
                                return <a href="#" onClick={()=>props.verify(mem.reg)}>Accept</a>
                        })()}
    
                        {(()=>{
                            if(props.del)
                            return <a href="#" onClick={()=>{if(window.confirm('Are you sure?')) props.del(mem.reg)}}>Remove</a>
                        })() }
                        
                    </div>
                    </div>
                </li>
            )
        })
        if(okay)
        return(
            <ul className="collapsible popout" ref={this.collapsible}>
                {mems}
                </ul>
        )
        else return <div style={{textAlign: 'center', fontSize: 20, paddingBottom: 30}}>No Member found</div>
    }
}
// export default function(props){


    
//     return(
//         <ul className="collapsible popout" ref={this.collapsible}>
//             mems
//         </ul>

// }