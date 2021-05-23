
class Counter extends React.Component
{ constructor(props)
   {
      super(props);
      this.addone=this.addone.bind(this);
      this.minusone=this.minusone.bind(this);
      this.reset=this.reset.bind(this);
      this.state= {
         Count: props.count
      };        

   }
   componentDidMount()
   {
      const data=localStorage.getItem('count');
      const num=parseInt(data,10);
      if(!isNaN(num))
      {
         this.setState(()=>({Count:num}));
      }
   }
   componentDidUpdate(prevProps, prevState)
   {
      if(prevState.Count!==this.state.Count)
      {
         localStorage.setItem('count',this.state.Count);
      }
   }
   addone()
   {
      this.setState((prevState)=>
      {
              return {Count : prevState.Count+1};
      });
   }
   minusone()
   {
      this.setState((prevState)=>
      {
              return {Count : prevState.Count-1};
      });
   }
   reset()
   {
      this.setState(()=>
      {
              return {Count : 0};
      });

   }
   render()
   {
      return <div>
                  <h1 >Counter : {this.state.Count}</h1>
                  <button onClick={this.addone}>+1</button>
                  <button onClick={this.minusone}>-1</button>
                  <button  onClick={this.reset}>Reset</button>
             </div>
   }
}
Counter.defaultProps=
{
   count: -1
}
ReactDOM.render(<Counter count={0}/>,document.getElementById('add'));












/* babel src/app.js --out-file=public/scripts/app.js --presets=env,react 
console.log("app is running");
var add = document.getElementById('add');
var option2=[];
 var title=
 {
     names: 'pj',
     theme: 'let computer design your life',
     age:17,
     options: ['option1','option2']
 }
 var gettheme=(theme)=>
 {
     if(theme)
     return <p>{theme}</p>
     
 }

 var submits=(e)=>
 {
    e.preventDefault();
   var ele=e.target.elements.option.value;
   if(ele)
   {
      title.options.push(ele);
      e.target.elements.option.value='';
      renderapp();

   }

 }
 var clicks=()=>
 {
    title.options=[];
    renderapp();
 }
 var randomno=()=>
 {
    var k=Math.floor(Math.random()*title.options.length);
    console.log(title.options[k]);
    alert(title.options[k]);
 }
 var renderapp=()=>{
var temp = 

 <div>
<h1>{title.name?title.name:'a'}</h1>
<p>{title.age>=18&&title.age}</p>
{gettheme(title.theme)}
<p>{title.options.length > 0 ?'here r ur options':'no options'}</p>
<p>{title.options.length}</p>
<form onSubmit={submits}>
<input type='text' name='option'></input>
<button>submit</button>
</form>

{title.options.map((n)=>
   {
      return <li key={n}>{n}</li>
   })
} 
<button disabled={title.options.length===0} onClick={randomno}>WHAT SHOULD I DO ?</button>

<span><button onClick={clicks}>Remove</button></span>
<ol>
<li>one</li>
<li>two</li>
<li>three</li>
</ol>
</div>
ReactDOM.render(temp,add);
 }
 renderapp();






//   count example for changing data in react    //

/*let count=0;
let plus=()=>
{
   count++;
   renderapp();
}
let minus=()=>
{
   //console.log('minus');
   count--;
   renderapp();
}
let reset=()=>
{
   //console.log('reset');
   count=0;
   renderapp();
}
var renderapp=()=>{
let temp2 =

<div>
<h1 id="h1">COUNT : {count}</h1>
<button onClick={plus}>+1</button>
<button onClick={minus}>-1</button>
<button onClick={reset}>reset</button>
</div>
//var h1=document.getElementById('h1');

 
var add = document.getElementById('add');
ReactDOM.render(temp2,add);
}
renderapp();
*/
