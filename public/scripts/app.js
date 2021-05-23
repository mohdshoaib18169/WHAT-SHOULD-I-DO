'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Indecision = function (_React$Component) {
    _inherits(Indecision, _React$Component);

    function Indecision(props) {
        _classCallCheck(this, Indecision);

        var _this = _possibleConstructorReturn(this, (Indecision.__proto__ || Object.getPrototypeOf(Indecision)).call(this, props));

        _this.removeall = _this.removeall.bind(_this);
        _this.showrandom = _this.showrandom.bind(_this);
        _this.addoption = _this.addoption.bind(_this);
        _this.deleteoption = _this.deleteoption.bind(_this);
        _this.state = {
            optioned: [] //props.options
        };
        return _this;
    }

    _createClass(Indecision, [{
        key: 'componentDidMount',
        value: function componentDidMount() {
            try {
                var raw = localStorage.getItem('options');
                var data = JSON.parse(raw);
                if (data) {
                    this.setState(function () {
                        return { optioned: data };
                    });
                }
            } catch (e) {
                // do not do anything;
            }
        }
    }, {
        key: 'componentDidUpdate',
        value: function componentDidUpdate(prevProps, prevState) {
            if (prevState.optioned.length !== this.state.optioned.length) {
                var data = JSON.stringify(this.state.optioned);
                localStorage.setItem('options', data);
            }
        }
    }, {
        key: 'removeall',
        value: function removeall() {
            this.setState(function () {
                return { optioned: [] };
            });
            //this.setState(()=>
            //{
            //    return {optioned: []}
            // })
        }
    }, {
        key: 'showrandom',
        value: function showrandom() {
            var num = Math.floor(Math.random() * this.state.optioned.length);
            var k = this.state.optioned[num];
            alert(k);
        }
    }, {
        key: 'addoption',
        value: function addoption(option) {
            if (!option) {
                return 'No data to add';
            }
            if (this.state.optioned.indexOf(option) > -1) {
                return 'Element is Already present';
            }
            this.setState(function (prevState) {
                return { optioned: prevState.optioned.concat(option) };
            });
            // this.setState((prevState)=>
            // {
            //return  {optioned: prevState.optioned.concat(option)}; 


            // }) 
        }
    }, {
        key: 'deleteoption',
        value: function deleteoption(optionremove) {
            this.setState(function (prevState) {
                return {
                    optioned: prevState.optioned.filter(function (option) {
                        return optionremove != option;
                    })
                };
            });
        }
    }, {
        key: 'render',
        value: function render() {
            //  const title='Indecision ';
            var subtitle = 'Put your life in hands of computer';
            return React.createElement(
                'div',
                null,
                React.createElement(Header, { subtitle: subtitle }),
                React.createElement(Action, { len: this.state.optioned.length, showrandomop: this.showrandom }),
                React.createElement(Options, { arr: this.state.optioned, removeall: this.removeall, deleteoption: this.deleteoption }),
                React.createElement(Optionsadd, { addoption: this.addoption })
            );
        }
    }]);

    return Indecision;
}(React.Component);

Indecision.defaultProps = {
    options: []
};

var Header = function Header(props) {
    return React.createElement(
        'div',
        null,
        React.createElement(
            'h1',
            null,
            props.title
        ),
        props.subtitle && React.createElement(
            'h2',
            null,
            props.subtitle
        )
    );
};

Header.defaultProps = {
    title: 'Indecisions'
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

};var Action = function Action(props) {
    return React.createElement(
        'div',
        null,
        React.createElement(
            'button',
            { disabled: props.len === 0, onClick: props.showrandomop },
            'What Should I Do ?'
        )
    );
};
/*class Action extends React.Component
{
   
    render()
    {
      
         return  <div>
        <button disabled={this.props.len===0} onClick={this.props.showrandomop}>What Should I Do ?</button>
           </div>  
       
    }
}*/

var Options = function Options(props) {
    return React.createElement(
        'div',
        null,
        React.createElement(
            'button',
            { onClick: props.removeall },
            'Remove All'
        ),
        props.arr.length === 0 && React.createElement(
            'p',
            null,
            'PLEASE ADD SOME DATA'
        ),
        props.arr.map(function (n) {
            return React.createElement(Newop, { key: n, opt: n, deleteoption: props.deleteoption });
        })
    );
};
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

var Newop = function Newop(props) {
    return React.createElement(
        'div',
        null,
        props.opt,
        React.createElement(
            'button',
            { onClick: function onClick(e) {
                    props.deleteoption(props.opt);
                } },
            'x remove'
        )
    );
};
/*class Newop extends React.Component
{
    render()
    {
        return <div >
                 <li >{this.props.opt}</li>
               </div>
    }
}*/

var Optionsadd = function (_React$Component2) {
    _inherits(Optionsadd, _React$Component2);

    function Optionsadd(props) {
        _classCallCheck(this, Optionsadd);

        var _this2 = _possibleConstructorReturn(this, (Optionsadd.__proto__ || Object.getPrototypeOf(Optionsadd)).call(this, props));

        _this2.formsubmit = _this2.formsubmit.bind(_this2);
        _this2.state = {
            error: undefined
        };
        return _this2;
    }

    _createClass(Optionsadd, [{
        key: 'formsubmit',
        value: function formsubmit(e) {
            e.preventDefault();
            var opt = e.target.elements.option.value.trim();
            e.target.elements.option.value = '';
            var error = this.props.addoption(opt);
            this.setState(function () {
                return { error: error };
            });

            // this.setState(()=>
            // {
            //      return {error}
            //  });
        }
    }, {
        key: 'render',
        value: function render() {
            return React.createElement(
                'div',
                null,
                this.state.error && React.createElement(
                    'p',
                    null,
                    this.state.error
                ),
                React.createElement(
                    'form',
                    { onSubmit: this.formsubmit },
                    React.createElement('input', { type: 'text', name: 'option' }),
                    React.createElement(
                        'button',
                        null,
                        'Submit'
                    )
                )
            );
        }
    }]);

    return Optionsadd;
}(React.Component);

var temp = React.createElement(
    'div',
    null,
    React.createElement(Header, null),
    React.createElement(Action, null),
    React.createElement(Options, null),
    React.createElement(Optionsadd, null)
);

ReactDOM.render(React.createElement(Indecision, { options: ['playing', 'reading'] }), document.getElementById('add'));
