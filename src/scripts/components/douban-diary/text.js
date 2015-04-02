var React = require('react');

var isItLove = require('../isItLove');

var Home = React.createClass({

  render: function () {

    return (
      <div>
        <div className="global-nav" />
        <div className="nav-sns" />
        <div className="wrapper">
          <div className="article">

            <div className="post">
              <div className="post-header">
                <h1>Is it Love?</h1>
                <div>
                  <a href="#douban-diary">
                    <div className="avatar" />
                  </a>
                  <a href="#douban-diary" className="author">Brian Kuan Wood</a>
                  <span className="pl">2014-03-06 18:53:50</span>
                </div>
              </div>

              <div className="post-content">
                <p>{isItLove.p1}</p>
                <p>{isItLove.p2}</p>
                <p>{isItLove.p3}</p>
                <p>{isItLove.p4}</p>
                <p>{isItLove.p5}</p>
                <p>{isItLove.p6}</p>
                <p>{isItLove.p7}</p>
              </div>
            </div>

          </div>
        </div>
      </div>
    );
  } 
});

module.exports = Home;
