/*eslint-disable strict*/ //Disabling check beacuse we canpt run strict mode. Need global vars.

var React = require('react');
var Header = require('./common/header');
var RouteHandler = require('react-router').RouteHandler;
$ = jQuery = require('jquery');

var App = React.createClass({
	render: function(){
		return (
            <div>
              <Header/>
              <div className="containe-fluid">
                 <RouteHandler/>
              </div>  
            </div>
			);
	}
});

module.exports = App;