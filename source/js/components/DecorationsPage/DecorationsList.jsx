var React = require('react');
var DecorationsListCheckBoxes = require('./DecorationsListCheckBoxes.jsx');

var DecorationsList = React.createClass({

  render: function () {
    return (
    <div className="col-xs-6"> 
      <div className="rounded-box visible">
          <div className="dropdown">
            <button className="btn button-decorations-list btn-default dropdown-toggle" type="button" id="dropdown-lights" data-toggle="dropdown" aria-haspopup="true" aria-expanded="true">
              <span className="decorations-list-category-text">Lights</span>
              <span className="caret"></span>
            </button>
            <ul className="dropdown-menu" aria-labelledby="dropdown-lights">
              <li><a href="#"><label htmlFor="ID">Fairy Lights - 5m</label><DecorationsListCheckBoxes decorationName="FairyLights" /></a></li>
              <li><a href="#"><label htmlFor="ID">+ Extension socket?</label><DecorationsListCheckBoxes decorationName="Extension" /></a></li>
            </ul>
          </div>
          <div className="dropdown">
            <button className="btn button-decorations-list btn-default dropdown-toggle" type="button" id="dropdown-baubbles" data-toggle="dropdown" aria-haspopup="true" aria-expanded="true">
              <span className="decorations-list-category-text">Baubles</span>
              <span className="caret"></span>
            </button>
            <ul className="dropdown-menu noclose" aria-labelledby="dropdown-baubles">
              <li><a href="#"><label htmlFor="ID">Baubles Gold - 6 pack</label><DecorationsListCheckBoxes decorationName="BaublesGold" /></a></li>
              <li><a href="#"><label htmlFor="ID">Baubles Silver - 6 pack</label><DecorationsListCheckBoxes decorationName="BaublesSilver" /></a></li>
              <li><a href="#"><label htmlFor="ID">Baubles Coloured + Patterned - 6 pack</label><DecorationsListCheckBoxes decorationName="BaublesColoured" /></a></li>
              <li><a href="#"><label htmlFor="ID">Baubles Cat - 6 pack</label><DecorationsListCheckBoxes decorationName="BaublesCat" /></a></li>
            </ul>
          </div>
          <div className="dropdown">
            <button className="btn button-decorations-list btn-default dropdown-toggle" type="button" id="dropdown-tinsel" data-toggle="dropdown" aria-haspopup="true" aria-expanded="true">
              <span className="decorations-list-category-text">Tinsel</span>
              <span className="caret"></span>
            </button>
            <ul className="dropdown-menu" aria-labelledby="dropdown-tinsel">
              <li><a href="#"><label htmlFor="ID">Silver - 2m</label><DecorationsListCheckBoxes decorationName="TinselSilver" /></a></li>
              <li><a href="#"><label htmlFor="ID">Gold/silver hybrid - 2m</label><DecorationsListCheckBoxes decorationName="TinselHybrid" /></a></li>
              <li><a href="#"><label htmlFor="ID">Purple - 2m</label><DecorationsListCheckBoxes decorationName="TinselPurple" /></a></li>
            </ul>
          </div>  
          <div className="dropdown">
            <button className="btn button-decorations-list btn-default dropdown-toggle" type="button" id="dropdown-stars-icicles" data-toggle="dropdown" aria-haspopup="true" aria-expanded="true">
              <span className="decorations-list-category-text">Stars and Icicles</span>
              <span className="caret"></span>
            </button>
            <ul className="dropdown-menu" aria-labelledby="dropdown-stars-icicles">
              <li><a href="#"><label htmlFor="ID">Stars - 8 pack</label><DecorationsListCheckBoxes decorationName="Stars" /></a></li>
              <li><a href="#"><label htmlFor="ID">Icicles Gold - 6 Pack</label><DecorationsListCheckBoxes decorationName="IciclesGold" /></a></li>
              <li><a href="#"><label htmlFor="ID">Icicles Patterned - 6 Pack</label><DecorationsListCheckBoxes decorationName="IciclesPatterned" /></a></li>
            </ul>
          </div>
          <div className="dropdown">
            <button className="btn button-decorations-list btn-default dropdown-toggle" type="button" id="dropdown-shiny" data-toggle="dropdown" aria-haspopup="true" aria-expanded="true">
              <span className="decorations-list-category-text">Shiny things</span>
              <span className="caret"></span>
            </button>
            <ul className="dropdown-menu" aria-labelledby="dropdown-shiny">
              <li><a href="#"><label htmlFor="ID">Glitter Balls - 6 pack</label><DecorationsListCheckBoxes decorationName="GlitterBalls" /></a></li>
            </ul>
          </div> 
          <div className="dropdown">
            <button className="btn button-decorations-list btn-default dropdown-toggle" type="button" id="dropdown-ornaments" data-toggle="dropdown" aria-haspopup="true" aria-expanded="true">
              <span className="decorations-list-category-text">Festive Ornaments</span>
              <span className="caret"></span>
            </button>
            <ul className="dropdown-menu" aria-labelledby="dropdown-ornaments">
              <li><a href="#"><label htmlFor="ID">Pine cones Gold - 8 pack</label><DecorationsListCheckBoxes decorationName="PineConesGold" /></a></li>
              <li><a href="#"><label htmlFor="ID">Robin family</label><DecorationsListCheckBoxes decorationName="Robins" /></a></li>
              <li><a href="#"><label htmlFor="ID">Ribbons 8-pack</label><DecorationsListCheckBoxes decorationName="Ribbons" /></a></li>
            </ul>
          </div>
          <div className="dropdown">
            <button className="btn button-decorations-list btn-default dropdown-toggle" type="button" id="dropdown-small-ornaments" data-toggle="dropdown" aria-haspopup="true" aria-expanded="true">
              <span className="decorations-list-category-text">Small Ornaments</span>
              <span className="caret"></span>
            </button>
            <ul className="dropdown-menu" aria-labelledby="dropdown-small-ornaments">
              <li><a href="#"><label htmlFor="ID">COMING SOON</label><input type="checkbox" id="ID" disabled /></a></li>
            </ul>
          </div>
          <div className="dropdown">
            <button className="btn button-decorations-list btn-default dropdown-toggle" type="button" id="dropdown-other-ornaments" data-toggle="dropdown" aria-haspopup="true" aria-expanded="true">
              <span className="decorations-list-category-text">Other Ornaments</span>
              <span className="caret"></span>
            </button>
            <ul className="dropdown-menu" aria-labelledby="dropdown-other-ornaments">
              <li><a href="#"><label htmlFor="ID">COMING SOON</label><input type="checkbox" id="ID" disabled /></a></li>
            </ul>
          </div> 
          <div className="dropdown">
            <button className="btn button-decorations-list btn-default dropdown-toggle" type="button" id="dropdown-angels" data-toggle="dropdown" aria-haspopup="true" aria-expanded="true">
              <span className="decorations-list-category-text">Angels</span>
              <span className="caret"></span>
            </button>
            <ul className="dropdown-menu" aria-labelledby="dropdown-angels">
              <li><a href="#"><label htmlFor="ID">White angel</label><DecorationsListCheckBoxes decorationName="Angel" /></a></li>
            </ul>
          </div>          
      </div>
    </div>
    );
  }
});

module.exports = DecorationsList;