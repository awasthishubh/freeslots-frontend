import React, {Component} from 'react'

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
        console.log(this.props)
        var props=this.props
        var mems= this.props.data.map(function(mem){
            return(
                <li key={mem.reg}>
                    <div className="collapsible-header left-align">
                        <div className="col s6"><i className="material-icons">keyboard_arrow_right</i>{mem.name}</div>
                        <div className="col s6 right-align"><div className="hide-on-small-only">{mem.reg}</div></div>
                    </div>
                    <div className="collapsible-body memCollapsi"><span>
                        <ul className="row">
                            <li className="col s6"><b>Name: </b>{mem.name}</li>
                            <li className="col s6"><b>Reg No: </b>{mem.reg}</li>
                        </ul>
                        <ul className="row">
                            <li className="col s6"><b>Email: </b>{mem.email}</li>
                            <li className="col s6"><b>Phno: </b>{mem.phno}</li>
                        </ul>
                        
                    </span>
                    <div class="card-action">
                        {(()=>{
                            if(props.verify)
                                return <a href="#" onClick={()=>props.verify(mem.reg)}>Accept</a>
                        })()}
    
                        {(()=>{
                            if(props.del)
                            return <a href="#" onClick={()=>{if(confirm('Are you sure?')) props.del(mem.reg)}}>Remove</a>
                        })() }
    
                        {/* {()=>{
                            if(props.verify)
                                return <a href="#" onClick={()=>props.verify(mem.reg)}>Accept</a>
                        }} */}
                        
                    </div>
                    </div>
                </li>
            )
        })

        return(
            <ul className="collapsible popout" ref={this.collapsible}>
                {mems}
                </ul>
        )
    }
}
// export default function(props){


    
//     return(
//         <ul className="collapsible popout" ref={this.collapsible}>
//             mems
//         </ul>

// }