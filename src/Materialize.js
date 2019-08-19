import M from 'materialize-css';
import materializeOptions from './assets/materialize_options.png';
import materializeBundle from './assets/materialize_bundle.png';
import React,{Component} from 'react';
 
class Materialize extends Component{
 
componentDidMount(){
 
  let elems = document.querySelectorAll('.tooltipped');
  let instances = M.Tooltip.init(elems);

}

render() {
return( <div>
    <h3 style={{textAlign:"center"}}><a target="_blank" href="https://materializecss.com/tooltips.html">Materialize</a></h3>
    <div className="imageContainer">
      <img src={materializeBundle} alt="tippy" />
    </div>
    <div className="imageContainer">
      <img src={materializeOptions} alt="tippy" />
    </div>
    <div style={{fontSize:"20px", width:"50%", margin:"0 auto", backgroundColor:"grey"}}>
             Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt suscipit qui ratione tempora fugit corrupti? In eveniet est atque possimus minus pariatur quaerat nesciunt architecto accusantium. Omnis consequatur repellendus maxime incidunt mollitia eligendi totam suscipit? Tempore temporibus at alias et harum repellendus porro rem, animi, corrupti eos pariatur deserunt quas itaque! Ipsum iusto fugiat aperiam corrupti? Reprehenderit doloribus assumenda veniam necessitatibus recusandae vitae, porro atque nulla sed magnam quaerat placeat adipisci ad tempora quas corrupti officia rem vel, et fugit? Obcaecati similique praesentium ipsum dolorum adipisci, delectus iusto vitae aliquam, deserunt numquam culpa natus harum molestiae cupiditate, aperiam explicabo accusantium magnam consectetur quaerat veniam! Tempore vel vitae consequatur, blanditiis autem, hic quae reprehenderit ad nulla, fugiat itaque ullam atque culpa unde odio repellat rerum illum. Dicta ratione excepturi quae,consequuntur sapiente iure quasi, consequatur aspernatur tempore minima dignissimos, minus officia earum! Nemo, voluptatibus repudiandae consectetur illo unde nisi explicabo ut in, ex excepturi voluptates dicta tempora officiis quod labore necessitatibus quo non doloremque?
    </div>
    <div style={{width:"100%", margin:"10px auto 10px auto", backgroundColor:"lightgrey"}}>
          <div>
              <span className="sup tooltipped" data-position="top" data-tooltip="Growth rates for orders, revenues and order backlog are on a comparable basis (local currency adjusted for acquisitions and divestitures), previously referred to as ‘like-for-like’. US$ growth rates are presented in Key Figures table" style={{color:"red"}} >1</span>test
          </div>
         <div style={{textAlign:"center"}}>test
              <span className="sup tooltipped" data-position="top" data-tooltip="Growth rates for orders, revenues and order backlog are on a comparable basis (local currency adjusted for acquisitions and divestitures), previously referred to as ‘like-for-like’. US$ growth rates are presented in Key Figures table" style={{color:"red"}}>2</span>test
        </div>
         <div style={{textAlign:"right"}}>test
              <span className="sup tooltipped" data-position="top" data-tooltip="Growth rates for orders, revenues and order backlog are on a comparable basis (local currency adjusted for acquisitions and divestitures), previously referred to as ‘like-for-like’. US$ growth rates are presented in Key Figures table" style={{color:"red"}}>3</span>
        </div>
    </div>
</div>
);
}
}
 
export default Materialize;