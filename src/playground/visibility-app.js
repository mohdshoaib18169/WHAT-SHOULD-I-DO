
class Vis extends React.Component
{    constructor(props)
    {
        super(props)
        this.clicks=this.clicks.bind(this);
        this.state=
        {
           pos: false
        }
    }
    clicks()
    {
        
            this.setState((prevState)=>
            {
               return {
                   pos: !prevState.pos
               }
            })
            console.log(this.state.pos)
        
    }
    render()
    {
        return <div>
                <h1>Visibility Toggle</h1>
                <button onClick={this.clicks}>{this.state.pos?'Hide':'Show'}</button>
                <p>{this.state.pos&&"special info"}</p>
                </div>
    }
}
ReactDOM.render(<Vis />,document.getElementById('add'))




/*var add=document.getElementById('add');
var vis=false;

var hide=()=>
{
vis=!vis;
renders();
}
var renders=()=>{
var temp=
<div>
<h1>VISIBILITY TOGGLE</h1>
<button onClick={hide}>{vis?'Hide details':'Show Details'}</button>
<p>{vis&&"SECRET info we wants to hide"}</p>
</div>
ReactDOM.render(temp,add);
}
renders();
*/