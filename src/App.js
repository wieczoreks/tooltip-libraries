import {Component} from 'react';
import React from 'react';
import { Route, Link } from 'react-router-dom';
import './App.css';
import Materialize from './Materialize';
import TippyJS from './TippyJS';
import Microtip from './Microtip';
import Custom from './Custom'
import BalloonCSS from './BalloonCSS';
import TooltipJS from './TooltipJS';
import TetherTooltip from "./TetherTooltip"

class App extends Component {
componentDidMount(){
 
}
scrollUpHandle = (e) =>{
  document.documentElement.scrollTop = 0
}

  render(){
  return (     
  <div className="App">
      
      <header className="App-header" >
      <div class="navbar-fixed"  >
        <nav >
              <div className="nav-wrapper" >
                  <ul id="nav-mobile" className="left" >
                    <li><Link to="/materialize">Materialize</Link></li>
                    <li><Link to="/tippyjs">Tippy.js</Link></li>
                    <li><Link to="/microtip">Microtip</Link></li>
                    <li><Link to="/ballooncss">Balloon-css</Link></li>
                    <li><Link to="/tooltipjs">Tooltip.js</Link></li>
                    <li><Link to="/tether">TetherTooltip</Link></li>
                    <li><Link to="/custom">Custom</Link></li>
                    <a href="#" onClick={this.scrollUpHandle} className="waves-effect waves-light btn-small">up</a>
                  </ul>
              </div>
        </nav>
        </div>
      </header>
      
      <main >
        <section style={{width:"100%"}}>
          <Route path="/materialize" exact component={Materialize} />
          <Route path="/tippyjs" exact component={TippyJS} />
          <Route path="/microtip" exact component={Microtip} />
          <Route path="/ballooncss" exact component={BalloonCSS} />
          <Route path="/tooltipjs" exact component={TooltipJS} />
          <Route path="/tether" exact component={TetherTooltip} />
          <Route path="/custom" exact component={Custom} />
          <Route path="/" exact component={Materialize} /> 
        </section>
        <section style={{fontSize:"20px", width:"50%", margin:"0 auto", backgroundColor:"grey"}}>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Alias fugiat vel sit asperiores necessitatibus quos, accusantium repudiandae, unde qui ex rem. Impedit officia non minus ullam possimus? Architecto aperiam qui, dolore aliquid odio soluta aspernatur molestias assumenda sunt, consequatur omnis! Sed reiciendis veniam neque nostrum! Aperiam reprehenderit nam a, perferendis quia et. Nemo aperiam adipisci odio eveniet ullam enim, ab quas maiores, at laudantium debitis est saepe ea. Vel, ab! Quisquam quaerat vel eum esse aliquid facere quia possimus reprehenderit doloremque quam assumenda sed, amet iusto eligendi consequuntur porro aperiam dolores fugit aspernatur deleniti odit! Autem provident doloribus saepe, unde repudiandae beatae quod quia excepturi, laudantium laborum nobis asperiores tenetur possimus rerum aut vero cumque reiciendis nisi ratione. Corrupti, amet dolorum qui voluptatibus vero ad officia beatae natus possimus dolor. Dolores nisi obcaecati nulla temporibus tempora placeat distinctio dolorum, aperiam voluptas mollitia harum dolorem quisquam necessitatibus quae autem! Perspiciatis repellat, pariatur mollitia iste officia soluta veniam excepturi odit reiciendis dolore natus totam inventore reprehenderit eius dolor animi alias architecto tempore numquam id. Libero, ab doloribus cupiditate modi ad asperiores ipsum doloremque, porro eveniet obcaecati nihil corporis! Quisquam quasi ullam tempora fuga? Ipsum quia voluptatum eos aperiam vel. Dolore, velit repudiandae placeat aspernatur similique sed pariatur facilis neque ad totam cupiditate eos quas eveniet, consequatur sit non commodi sunt ullam. Debitis nostrum ipsa tempore corporis, eligendi nulla? Hic, deleniti eos doloribus labore eum, commodi dicta nesciunt possimus aut aliquid odit beatae aliquam, impedit nihil quaerat ratione! Saepe, dicta impedit beatae commodi possimus, reprehenderit explicabo ipsam rerum, nisi totam minima asperiores blanditiis autem vero? Voluptates explicabo, praesentium earum ullam ut consequatur soluta perspiciatis labore illum dolor, ducimus magni, porro ipsum ratione voluptate dolorem necessitatibus ea quae maxime. Optio illo ipsa dolorum perspiciatis fugiat enim illum reprehenderit tempora. Expedita neque vel eum sequi, numquam perspiciatis molestiae eligendi laudantium, repudiandae consectetur nemo magnam commodi qui officia ipsa eaque porro similique obcaecati iste nobis optio reprehenderit! Et ad at hic dignissimos laboriosam ex animi sed quam, esse cum fuga id? Blanditiis ipsam in officiis delectus temporibus, beatae libero magni sed quibusdam omnis incidunt eligendi quam? Suscipit odit ipsam possimus, harum officia vel neque consectetur amet! Iusto quia delectus amet possimus consequatur doloribus esse a, quisquam obcaecati, dolorum eveniet minima officia laboriosam fugit eaque nesciunt perferendis natus molestias? Quam nesciunt voluptas in atque sed beatae cum totam animi accusantium eum sapiente exercitationem ipsum, vel eaque perspiciatis, quia praesentium quod natus? Necessitatibus unde commodi quis, eaque debitis rerum animi numquam temporibus ut reprehenderit culpa eum a molestiae nesciunt rem eveniet ipsum aliquid quo quibusdam illum, distinctio ratione veniam. Blanditiis placeat, nam corporis amet voluptatum id ipsam illo excepturi eum quae consequuntur officiis harum qui quod a? Necessitatibus laborum aliquid placeat nostrum natus eaque beatae consectetur nulla nihil qui! Assumenda quia sunt dolores officiis accusantium nemo exercitationem ratione! Distinctio cupiditate commodi blanditiis ad atque quisquam exercitationem sit omnis ipsa voluptate, eos natus officiis velit. Magni repellat corrupti eaque adipisci, esse eligendi facere rem, optio culpa et, velit harum?   
        </section>
      </main>
    </div>  );
  }
}

export default App;
