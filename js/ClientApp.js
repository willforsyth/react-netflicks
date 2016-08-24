var React = require('react')
var ReactDOM = require('react-dom')
var MyTitle = require('./MyTitle')

var div = React.DOM.div

var MyFirstComponent = (
  div(null,
    React.createElement(MyTitle, {title: 'Use props everywhere'}),
    React.createElement(MyTitle, {title: 'Use props everywhere!!!!'})
  )
)

ReactDOM.render(MyFirstComponent, document.getElementById('app'))
