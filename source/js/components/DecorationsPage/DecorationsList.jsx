var React = require('react');

var DecorationsList = React.createClass({
  render: function () {
    return (
    <div className="col-xs-6"> 
      <div className="rounded-box">
          <div className="dropdown">
            <button className="btn btn-default dropdown-toggle" type="button" id="dropdown-lights" data-toggle="dropdown" aria-haspopup="true" aria-expanded="true">
              Lights
              <span className="caret"></span>
            </button>
            <ul className="dropdown-menu" aria-labelledby="dropdown-lights">
              <li><a href="#">Fairy Lights - 5m</a></li>
              <li><a href="#">+ Extension socket?</a></li>
            </ul>
          </div>
          <div className="dropdown">
            <button className="btn btn-default dropdown-toggle" type="button" id="dropdown-baubbles" data-toggle="dropdown" aria-haspopup="true" aria-expanded="true">
              Baubbles
              <span className="caret"></span>
            </button>
            <ul className="dropdown-menu noclose" aria-labelledby="dropdown-baubbles">
              <li><a href="#"><label htmlFor="ID">Baubbles Gold - 6 pack</label><input type="checkbox" id="ID"/></a></li>
              <li><a href="#">Baubbles Silver - 6 pack</a></li>
              <li><a href="#">Baubbles Coloured + Glitter Patterned - 6 pack</a></li>
              <li><a href="#">Baubbles Cat - 6 pack</a></li>
            </ul>
          </div>
          <div className="dropdown">
            <button className="btn btn-default dropdown-toggle" type="button" id="dropdown-tinsel" data-toggle="dropdown" aria-haspopup="true" aria-expanded="true">
              Tinsel
              <span className="caret"></span>
            </button>
            <ul className="dropdown-menu" aria-labelledby="dropdown-tinsel">
              <li><a href="#">Silver - 2m</a></li>
              <li><a href="#">Gold/silver hybrid - 2m</a></li>
              <li><a href="#">Purple - 2m</a></li>
            </ul>
          </div>  
          <div className="dropdown">
            <button className="btn btn-default dropdown-toggle" type="button" id="dropdown-stars-icicles" data-toggle="dropdown" aria-haspopup="true" aria-expanded="true">
              Stars and Icicles
              <span className="caret"></span>
            </button>
            <ul className="dropdown-menu" aria-labelledby="dropdown-stars-icicles">
              <li><a href="#">Stars - 8 pack</a></li>
              <li><a href="#">Icicles Gold - 6 Pack</a></li>
              <li><a href="#">Icicles Patterned - 6 Pack</a></li>
            </ul>
          </div>
          <div className="dropdown">
            <button className="btn btn-default dropdown-toggle" type="button" id="dropdown-shiny" data-toggle="dropdown" aria-haspopup="true" aria-expanded="true">
              Shiny things
              <span className="caret"></span>
            </button>
            <ul className="dropdown-menu" aria-labelledby="dropdown-shiny">
              <li><a href="#">Glitter Balls - 6 pack</a></li>
            </ul>
          </div> 
          <div className="dropdown">
            <button className="btn btn-default dropdown-toggle" type="button" id="dropdown-ornaments" data-toggle="dropdown" aria-haspopup="true" aria-expanded="true">
              Festive Ornaments
              <span className="caret"></span>
            </button>
            <ul className="dropdown-menu" aria-labelledby="dropdown-ornaments">
              <li><a href="#">Pine cones Gold - 8 pack</a></li>
              <li><a href="#">Robin family</a></li>
              <li><a href="#">Ribbons</a></li>
            </ul>
          </div>
          <div className="dropdown">
            <button className="btn btn-default dropdown-toggle" type="button" id="dropdown-small-ornaments" data-toggle="dropdown" aria-haspopup="true" aria-expanded="true">
              Small Ornaments
              <span className="caret"></span>
            </button>
            <ul className="dropdown-menu" aria-labelledby="dropdown-small-ornaments">
              <li><a href="#">COMING SOON</a></li>
            </ul>
          </div>
          <div className="dropdown">
            <button className="btn btn-default dropdown-toggle" type="button" id="dropdown-other-ornaments" data-toggle="dropdown" aria-haspopup="true" aria-expanded="true">
              Other Ornaments
              <span className="caret"></span>
            </button>
            <ul className="dropdown-menu" aria-labelledby="dropdown-other-ornaments">
              <li><a href="#">COMING SOON</a></li>
            </ul>
          </div> 
          <div className="dropdown">
            <button className="btn btn-default dropdown-toggle" type="button" id="dropdown-angels" data-toggle="dropdown" aria-haspopup="true" aria-expanded="true">
              Angels
              <span className="caret"></span>
            </button>
            <ul className="dropdown-menu" aria-labelledby="dropdown-angels">
              <li><a href="#">White angel</a></li>
            </ul>
          </div>          
      </div>
    </div>
    );
  }
});

module.exports = DecorationsList;