"use strict";

var React = require('react');

var About = React.createClass({
	statics: {
		willTransitionTo: function(transition, params, query, callback){
			if(!confirm('Are you sure you want to read a page that\'s this boring/'))
			{
				transition.about();
			}else{
				callback();
			}
		},

		willTransitionFrom: function(transition, component){
			if(!confirm('Are you sure you leave a page that\'s this exciting?/'))
			{
				transition.about();
			}
		}
	},
render: function(){
return (
        <div>
           <p>
             This application uses the following technoloies:
             <ul>
               <li>React</li>
               <li>React Router</li>
               <li>flux</li>
               <li>Node</li>
               <li>Gulp</li>
               <li>Brpwserfy</li>
               <li>Boostrap</li>
            </ul>
          </p>
        </div>
		);
	}
});

module.exports = About;