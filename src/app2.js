


//import './link.js'
/*import subtrac,{square,add} from './link.js'
console.log('app is running baby');
console.log(square(5));
console.log(add(11,22));
console.log(subtrac(10,80));
    const Layout=(props)=>
        {
            return  <div>
            <p>output</p>
                 {props.children}
                 <h1>Happy good !!!!</h1>
                 </div>
                
            
            
            
        }
          ReactDOM.render(<Layout>
          <div>
          <h1>Page Layout</h1>
          <p>This Is My Page !!!</p>
          </div>
          </Layout>
          
          ,document.getElementById('add'));

 old syntax 
     class oldsyntax{
         constructor()
         {
             this.name="mike",
             this.getgreeting=this.getgreeting.bind(this)
         }
         getgreeting()
         {
             return `hi my name is ${this.name}`
         }
     }
     const oldsyntax=new oldsyntax();
     const getgreeting=oldsyntax.getgreeting;
     console.log(getgreeting());



     new syntax----> using babel class transform plugin

     class newsyntax
     {
         name='mike';
         getgreeting=()=>
         {
             return `hi this is ${this.name}`;
         }
     }
     const newsyntax=new newsyntax();
     const getgreeting=newsyntax.getgreeting;
     console.log(getgreeting());
     








// <script src="https://unpkg.com/react@16.0.0/umd/react.development.js"></script>
 //<script src="https://unpkg.com/react-dom@16.0.0/umd/react-dom.development.js"></script>
 

*/

//import validator from 'validator';
//console.log(validator.isEmail('shoaib@gmail.com'));
//const elem=<p>This is Jsx from WEBPACK</p>
// ReactDom.render(elem,document.getElementById('add'));
 

import React from 'react';
import ReactDOM from 'react-dom';
import Indecision from './components/indecision';
import 'normalize.css/normalize.css'
import './styles/styles.scss'
 
   ReactDOM.render(<Indecision>
       </Indecision >
       ,document.getElementById('add'));