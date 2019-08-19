import React,{Component} from 'react';
import tetherTooltipBundle from './assets/tether_bundle.png';
import tetherTooltipOptions from './assets/tether_options.png';
import Tooltip from "../node_modules/tether-tooltip/dist/js/tooltip.js";
import  "../node_modules/tether-tooltip/dist/css/tooltip-theme-arrows.css";
class TetherTooltip extends Component{

 componentDidMount(){

//   new Tooltip({
//   target: document.querySelector('#testelem'),
//   position: 'top right',
//   content: "Growth rates for orders, revenues and order backlog are on a comparable basis (local currency adjusted for acquisitions and divestitures), previously referred to as ‘like-for-like’. US$ growth rates are presented in Key Figures table" ,
//   classes: 'my-tether-theme'})
  }

render() {
return(  <div>
    <h3 style={{textAlign:"center"}}><a target="_blank" href="https://github.com/HubSpot/tooltip">TetherTooltip</a></h3>
    <div className="imageContainer">
      <img src={tetherTooltipBundle} alt="microtip" />
    </div>
    <div className="imageContainer">
      <img src={tetherTooltipOptions} alt="microtip" />
    </div>
    <div style={{fontSize:"20px", width:"50%", margin:"0 auto", backgroundColor:"grey"}}>
             Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt suscipit qui ratione tempora fugit corrupti? In eveniet est atque possimus minus pariatur quaerat nesciunt architecto accusantium. Omnis consequatur repellendus maxime incidunt mollitia eligendi totam suscipit? Tempore temporibus at alias et harum repellendus porro rem, animi, corrupti eos pariatur deserunt quas itaque! Ipsum iusto fugiat aperiam corrupti? Reprehenderit doloribus assumenda veniam necessitatibus recusandae vitae, porro atque nulla sed magnam quaerat placeat adipisci ad tempora quas corrupti officia rem vel, et fugit? Obcaecati similique praesentium ipsum dolorum adipisci, delectus iusto vitae aliquam, deserunt numquam culpa natus harum molestiae cupiditate, aperiam explicabo accusantium magnam consectetur quaerat veniam! Tempore vel vitae consequatur, blanditiis autem, hic quae reprehenderit ad nulla, fugiat itaque ullam atque culpa unde odio repellat rerum illum. Dicta ratione excepturi quae,consequuntur sapiente iure quasi, consequatur aspernatur tempore minima dignissimos, minus officia earum! Nemo, voluptatibus repudiandae consectetur illo unde nisi explicabo ut in, ex excepturi voluptates dicta tempora officiis quod labore necessitatibus quo non doloremque?
    </div>
    <div style={{width:"100%", margin:"10px auto 10px auto", backgroundColor:"lightgrey"}}>
        <div>
              <span className="sup" data-tooltip= "Growth rates for orders, revenues and order backlog are on a comparable basis (local currency adjusted for acquisitions and divestitures), previously referred to as ‘like-for-like’. US$ growth rates are presented in Key Figures table" data-tooltip-position="top center"   style={{color:"red"}} >1</span>test
          </div>
         <div style={{textAlign:"center"}}>test
              <span className="sup " data-tooltip= "Growth rates for orders, revenues and order backlog are on a comparable basis (local currency adjusted for acquisitions and divestitures), previously referred to as ‘like-for-like’. US$ growth rates are presented in Key Figures table" data-tooltip-position="top center"  style={{color:"red"}}>2</span>test
        </div>
         <div style={{textAlign:"right"}}>test
              <span className="sup " data-tooltip= "Growth rates for orders, revenues and order backlog are on a comparable basis (local currency adjusted for acquisitions and divestitures), previously referred to as ‘like-for-like’. US$ growth rates are presented in Key Figures table" data-tooltip-position="top center"  style={{color:"red"}}>3</span>
        </div>
    </div>
</div>
);
}
}
 
export default TetherTooltip;