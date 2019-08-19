import React,{Component} from 'react';
import './Custom.css'
class Custom extends Component{
 
componentDidMount(){
   let sup = document.getElementsByClassName('sup')[1];
   let elem = document.createElement('div');
    
   sup.addEventListener('click', (e) => {
    
    elem.appendChild(document.createTextNode(sup.getAttribute('data-custom')))
    
    elem.className='custom'
    document.body.appendChild(elem)
})
}

render() {

return( 
<div>
<div style={{textAlign:"center"}}></div>
<div style={{width:"100%", height:"100%", backgroundColor:"lightgrey",margin:"20px 0"}}>

    <h3 style={{textAlign:"center"}}>Custom</h3>
   
    <div style={{width:"100%", backgroundColor:"lightgrey"}}>

         <div><span className="sup" data-custom-position="top" data-custom-text="Growth rates for orders, revenues and order backlog are on a comparable basis (local currency adjusted for acquisitions and divestitures), previously referred to as ‘like-for-like’. US$ growth rates are presented in Key Figures table" style={{color:"red"}} >1</span>test</div>
         <div style={{textAlign:"center"}}>test<span className="sup" data-custom-position="top" data-custom="Growth rates for orders, revenues and order backlog are on a comparable basis (local currency adjusted for acquisitions and divestitures), previously referred to as ‘like-for-like’. US$ growth rates are presented in Key Figures table" style={{color:"red"}}>2</span>test</div>
         <div style={{textAlign:"right"}}>test<span className="sup" data-custom-position="top" data-custom-text="Growth rates for orders, revenues and order backlog are on a comparable basis (local currency adjusted for acquisitions and divestitures), previously referred to as ‘like-for-like’. US$ growth rates are presented in Key Figures table" style={{color:"red"}}>3</span></div>
    </div>
</div>
</div>
);
}
}
 
export default Custom;