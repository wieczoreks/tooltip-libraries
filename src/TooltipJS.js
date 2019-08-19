import React, {Component} from 'react';
import tooltipJSBundle from './assets/tooltipJS_bundle.png';
import tooltipJSOptions from './assets/balloon_options.png';
import Tooltip from '../node_modules/tooltip.js/dist/tooltip.js'

class TooltipJS extends Component{

componentDidMount(){
  
    new Tooltip(document.querySelector("#tooltip1"), {
        placement:"auto",
        title:"Growth rates for orders, revenues and order backlog are on a comparable basis (local currency adjusted for acquisitions and divestitures), previously referred to as ‘like-for-like’. US$ growth rates are presented in Key Figures table",
        template:'<div class="tooltip" style="color:white; background-color:black; width:200px" role="tooltip"><div class="tooltip-arrow"></div><div class="tooltip-inner"></div></div>',
        offset:-1000,
        container:false,
        delay: 0,
        arrowSelector:".tooltip-arrow",
        innerSelector: ".tooltip-inner",
        popperOptions: {
            placement:"top"
        }
    });

    new Tooltip(document.querySelector("#tooltip2"), {
        placement:"auto",
        title:"Growth rates for orders, revenues and order backlog are on a comparable basis (local currency adjusted for acquisitions and divestitures), previously referred to as ‘like-for-like’. US$ growth rates are presented in Key Figures table",
        template:'<div class="tooltip" style="color:white; background-color:black" role="tooltip"><div class="tooltip-arrow"></div><div class="tooltip-inner"></div></div>',
        offset:1000,
        container:false,
        delay: 0,
        arrowSelector:".tooltip-arrow",
        innerSelector: ".tooltip-inner",
        popperOptions: {
            placement:"top"
        }
    });
    new Tooltip(document.querySelector("#tooltip3"), {
        placement:"auto",
        arrowSelector:".tooltip-arrow",
        innerSelector: ".tooltip-inner",
        title:"Growth rates for orders, revenues and order backlog are on a comparable basis (local currency adjusted for acquisitions and divestitures), previously referred to as ‘like-for-like’. US$ growth rates are presented in Key Figures table",
        template:'<div class="tooltip" style="color:white; background-color:black" role="tooltip"><div class="tooltip-arrow"></div><div class="tooltip-inner"></div></div>',
        offset:1000,
        container:false,
        delay: 0,
        popperOptions: {
         placement:"top"
        }
    });

}

render() {
return(  <div>
    <h3 style={{textAlign:"center"}}><a target="_blank" href="https://popper.js.org/tooltip-examples.html">Tooltip.js</a></h3>
    <div className="imageContainer">
      <img src={tooltipJSBundle} alt="balloon" />
    </div>
    <div className="imageContainer">
      <img src={tooltipJSOptions} alt="balloon" />
    </div>
    <div style={{fontSize:"20px", width:"50%", margin:"0 auto", backgroundColor:"grey"}}>
             Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt suscipit qui ratione tempora fugit corrupti? In eveniet est atque possimus minus pariatur quaerat nesciunt architecto accusantium. Omnis consequatur repellendus maxime incidunt mollitia eligendi totam suscipit? Tempore temporibus at alias et harum repellendus porro rem, animi, corrupti eos pariatur deserunt quas itaque! Ipsum iusto fugiat aperiam corrupti? Reprehenderit doloribus assumenda veniam necessitatibus recusandae vitae, porro atque nulla sed magnam quaerat placeat adipisci ad tempora quas corrupti officia rem vel, et fugit? Obcaecati similique praesentium ipsum dolorum adipisci, delectus iusto vitae aliquam, deserunt numquam culpa natus harum molestiae cupiditate, aperiam explicabo accusantium magnam consectetur quaerat veniam! Tempore vel vitae consequatur, blanditiis autem, hic quae reprehenderit ad nulla, fugiat itaque ullam atque culpa unde odio repellat rerum illum. Dicta ratione excepturi quae,consequuntur sapiente iure quasi, consequatur aspernatur tempore minima dignissimos, minus officia earum! Nemo, voluptatibus repudiandae consectetur illo unde nisi explicabo ut in, ex excepturi voluptates dicta tempora officiis quod labore necessitatibus quo non doloremque?
    </div>
    <div style={{width:"100%", margin:"10px auto 10px auto", backgroundColor:"lightgrey"}}>
        <div>
              <span className="sup" id="tooltip1"  style={{color:"red"}} >1</span>test
          </div>
         <div style={{textAlign:"center"}}>test
              <span className="sup " id="tooltip2" style={{color:"red"}}>2</span>test
        </div>
         <div style={{textAlign:"right"}}>test
              <span className="sup " id="tooltip3" style={{color:"red"}}>3</span>
        </div>
    </div>
</div>
);
}
}
 
export default TooltipJS;