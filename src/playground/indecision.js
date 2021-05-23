

class Indecision extends React.Component
{  
   constructor(props)
   {
       super(props);
      this.removeall=this.removeall.bind(this);
      this.showrandom=this.showrandom.bind(this);
      this.addoption=this.addoption.bind(this);
      this.deleteoption=this.deleteoption.bind(this);
       this.state=
       {
        optioned: []                //props.options
       }
   }
   componentDidMount()
   {
    try
    {    const raw=localStorage.getItem('options')
        const data=JSON.parse(raw);
       if(data)
       {    
            this.setState(()=>({optioned: data}))
       }
    }
    catch(e)
    {
       // do not do anything;
    }
   }
   componentDidUpdate(prevProps, prevState)
   {
       if(prevState.optioned.length!==this.state.optioned.length)
       {
           const data=JSON.stringify(this.state.optioned);
           localStorage.setItem('options', data);
       }
   }
  
   removeall()
   {
       this.setState(()=>({optioned: []}));
       //this.setState(()=>
       //{
       //    return {optioned: []}
      // })
   }
   showrandom()
   {
       let num= Math.floor(Math.random()*this.state.optioned.length);
       let k=this.state.optioned[num];
       alert(k);
   }
   addoption(option)
   {   if(!option)
    {
        return 'No data to add'
    }
    if(this.state.optioned.indexOf(option)>-1)
    {
        return 'Element is Already present'
    }
    this.setState((prevState)=>({optioned: prevState.optioned.concat(option)}));
      // this.setState((prevState)=>
      // {
//return  {optioned: prevState.optioned.concat(option)}; 


      // }) 
   }
   deleteoption(optionremove)
   {
          this.setState((prevState)=>
          {
              return {
                  optioned: prevState.optioned.filter((option)=>optionremove!=option)
              }
          })
   }

  
   render()
   {  //  const title='Indecision ';
       const subtitle='Put your life in hands of computer';
       return <div>
                <Header  subtitle={subtitle}/>
                <Action  len={this.state.optioned.length} showrandomop={this.showrandom}/>
                <Options arr={this.state.optioned}  removeall={this.removeall}  deleteoption={this.deleteoption} />
                
                <Optionsadd  addoption={this.addoption}/>
                </div>
   }
}

Indecision.defaultProps=
{
    options: []
}

const Header=(props)=>
{
    return  <div>
    <h1>{props.title}</h1>
    {props.subtitle&&<h2>{props.subtitle}</h2>}
     </div>
}

Header.defaultProps=
{
    title: 'Indecisions'
}
/*class Header extends React.Component
{
    render()
    {
    
     return  <div>
    <h1>{this.props.title}</h1>
    <h2>{this.props.subtitle}</h2>
     </div>
           }
    }*/

    const Action=(props)=>
    {
        return  <div>
        <button disabled={props.len===0} onClick={props.showrandomop}>What Should I Do ?</button>
           </div>

    }
/*class Action extends React.Component
{
   
    render()
    {
      
         return  <div>
        <button disabled={this.props.len===0} onClick={this.props.showrandomop}>What Should I Do ?</button>
           </div>  
       
    }
}*/

const Options=(props)=>
{
    return      <div>
    <button onClick={props.removeall}>Remove All</button>
    {props.arr.length===0&&<p>PLEASE ADD SOME DATA</p>}
        {  props.arr.map((n)=>
          {
              return <Newop key={n} opt={n}  deleteoption={props.deleteoption}/>
          })
         }
       </div>
}
/*class Options extends React.Component
{ 
    render()
    {
        return      <div>
                 <button onClick={this.props.removeall}>Remove All</button>
                     {  this.props.arr.map((n)=>
                       {
                           return <Newop key={n} opt={n}/>
                       })
                      }
                    </div>
            
        
       
    }
}*/

const Newop=(props)=>
{
      return <div >
      {props.opt}
      <button onClick={(e)=>{props.deleteoption(props.opt)}}>x remove</button>
      </div>
}
/*class Newop extends React.Component
{
    render()
    {
        return <div >
                 <li >{this.props.opt}</li>
               </div>
    }
}*/
class Optionsadd extends React.Component
{ constructor(props)
    {
        super(props);
        this.formsubmit=this.formsubmit.bind(this);
        this.state=
        {
              error: undefined
        }
    }
    formsubmit(e)
    {
    e.preventDefault();
    const opt=e.target.elements.option.value.trim();
    e.target.elements.option.value='';
    const error=this.props.addoption(opt);
    this.setState(()=>({error}));
  
   // this.setState(()=>
   // {
  //      return {error}
  //  });

    }
    render()
    { 
        return <div>
        {this.state.error&&<p>{this.state.error}</p>}
               <form onSubmit={this.formsubmit}>
               <input type='text' name='option'></input>
               <button>Submit</button>
               </form>
                </div>
            
    
    }
}

var temp=
    <div>
    <Header />
    <Action />
    <Options />
    <Optionsadd />
    </div>

  
    ReactDOM.render(<Indecision options={['playing','reading']}/>,document.getElementById('add'));
  

// <script src="https://unpkg.com/react@16.0.0/umd/react.development.js"></script>
 //<script src="https://unpkg.com/react-dom@16.0.0/umd/react-dom.development.js"></script>