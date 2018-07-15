import React from 'react'
import {Component} from 'react'
import {bindActionCreators} from 'redux'
import {connect} from 'react-redux'
import {updateData} from '../../actions/index.js'
import axios from 'axios'
import Cookies from 'js-cookie'

class orgLogin extends Component{
    constructor(props){
        super(props)
        this.isFilled=this.isFilled.bind(this)
        this.send=this.send.bind(this)
        this.state={login_usid:false, login_pass:false, err: null}

    }
    isFilled(e){
        e.target.classList.remove('valid')
        e.target.classList.remove('invalid')
        var state=[]
        state[e.target.id]=e.target.value
        this.setState(state)
        if(e.target.value){
            e.target.classList.add('valid')
        } else{
            e.target.classList.add('invalid')
        }
    }
    async send(){

        if(this.state.login_usid && this.state.login_pass){
            console.log(this.state.login_usid , this.state.login_usid)
            var form = new FormData();
            form.append('usid',this.state.login_usid)
            form.append('passwd',this.state.login_pass)
            try{
                var request=await axios.post('http://localhost:5000/auth',form)
                console.log('login',request.data.info)
                this.props.updateData(request.data.info,'UPDATE_ORG_DETAILS')
                this.setState({'err':null})
                Cookies.set('token', request.data.access_token, { expires: 7 });
                window.location = "/dashboard";
            } catch(e){
                this.setState({'err':'Invalid id/password'})
            }
        } else this.setState({'err':'Enter id and password'})
    }
    render(){
        console.log(this.props)
        return(
                <div className="row"> 
                <div className="col s12"><h5><center>Enter your login credentials</center></h5></div>   
                <form>
                        <div className="input-field col s12">
                            <input id='login_usid' className="" onChange={this.isFilled} type="text" />
                            <label htmlFor='login_usid' >Organisation ID</label>
                            <span className="helper-text" data-error="Organisation id is required"></span>
                        </div>
                        <div className="input-field col s12">
                            <input id='login_pass' type="text" onChange={this.isFilled}  />
                            <label htmlFor='login_pass' >Password</label>
                            <span className="helper-text" data-error="Password in required"></span>
                        </div>
                    <div className="red-text">{this.state.err}</div>
                    <center><a className="waves-effect waves-light btn" onClick={this.send}>Login</a></center>

                    </form>
                    <div className="col s12" style={{marginTop:40,textAlign:'right', color:'grey'}}>
                        <a href="#" onClick={(e)=>this.props.change(true)}>Register your Organisation?</a>
                    </div>
                </div>
        )
    }
}

function mapStateToProps(state){
    return state
}

function mapDispatchToProps(dispatch){
    return bindActionCreators({updateData}, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(orgLogin)