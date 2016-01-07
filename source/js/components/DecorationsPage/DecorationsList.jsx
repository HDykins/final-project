var React = require('react');
var DecorationsListCheckBoxes = require('./DecorationsListCheckBoxes.jsx');
var DecorationsListItem = require('./DecorationsListItem.jsx');

var DecorationsList = React.createClass({

  handleMouseOver: function (decorationName) {
    this.props.handleHoverOnDecoration(decorationName);
  },

  handleMouseOut: function (decorationName) {
    this.props.handleUnHoverOnDecoration(decorationName);
  },

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
              <DecorationsListItem decorationName="FairyLights" label="Fairy Lights - 5m" handleMouseOver={this.handleMouseOver} handleMouseOut={this.handleMouseOut} />
              <DecorationsListItem decorationName="Extension" label="+ Extension Socket?" />
            </ul>
          </div>
          <div className="dropdown">
            <button className="btn button-decorations-list btn-default dropdown-toggle" type="button" id="dropdown-baubbles" data-toggle="dropdown" aria-haspopup="true" aria-expanded="true">
              <span className="decorations-list-category-text">Baubles</span>
              <span className="caret"></span>
            </button>
            <ul className="dropdown-menu noclose" aria-labelledby="dropdown-baubles">
              <DecorationsListItem decorationName="BaublesGold" label="Baubles Gold - 6 pack" handleMouseOver={this.handleMouseOver} handleMouseOut={this.handleMouseOut} />
              <DecorationsListItem decorationName="BaublesSilver" label="Baubles Silver - 6 pack" handleMouseOver={this.handleMouseOver} handleMouseOut={this.handleMouseOut} />
              <DecorationsListItem decorationName="BaublesColoured" label="Baubles Coloured + Patterned - 6 pack" handleMouseOver={this.handleMouseOver} handleMouseOut={this.handleMouseOut} />
              <DecorationsListItem decorationName="BaublesCat" label="Baubles Cat - 6 pack" handleMouseOver={this.handleMouseOver} handleMouseOut={this.handleMouseOut} />
            </ul>
          </div>
          <div className="dropdown">
            <button className="btn button-decorations-list btn-default dropdown-toggle" type="button" id="dropdown-tinsel" data-toggle="dropdown" aria-haspopup="true" aria-expanded="true">
              <span className="decorations-list-category-text">Tinsel</span>
              <span className="caret"></span>
            </button>
            <ul className="dropdown-menu" aria-labelledby="dropdown-tinsel">
              <DecorationsListItem decorationName="TinselSilver" label="Silver - 2m" handleMouseOver={this.handleMouseOver} handleMouseOut={this.handleMouseOut} />
              <DecorationsListItem decorationName="TinselHybrid" label="Gold/silver hybrid - 2m" handleMouseOver={this.handleMouseOver} handleMouseOut={this.handleMouseOut} />
              <DecorationsListItem decorationName="TinselPurple" label="Purple - 2m" handleMouseOver={this.handleMouseOver} handleMouseOut={this.handleMouseOut} />
            </ul>
          </div>  
          <div className="dropdown">
            <button className="btn button-decorations-list btn-default dropdown-toggle" type="button" id="dropdown-stars-icicles" data-toggle="dropdown" aria-haspopup="true" aria-expanded="true">
              <span className="decorations-list-category-text">Stars and Icicles</span>
              <span className="caret"></span>
            </button>
            <ul className="dropdown-menu" aria-labelledby="dropdown-stars-icicles">
              <DecorationsListItem decorationName="Stars" label="Stars - 8 pack" handleMouseOver={this.handleMouseOver} handleMouseOut={this.handleMouseOut} />
              <DecorationsListItem decorationName="IciclesGold" label="Icicles Gold - 6 Pack" handleMouseOver={this.handleMouseOver} handleMouseOut={this.handleMouseOut} />
              <DecorationsListItem decorationName="IciclesPatterned" label="Icicles Patterned - 6 Pack" handleMouseOver={this.handleMouseOver} handleMouseOut={this.handleMouseOut} />            
            </ul>
          </div>
          <div className="dropdown">
            <button className="btn button-decorations-list btn-default dropdown-toggle" type="button" id="dropdown-shiny" data-toggle="dropdown" aria-haspopup="true" aria-expanded="true">
              <span className="decorations-list-category-text">Shiny things</span>
              <span className="caret"></span>
            </button>
            <ul className="dropdown-menu" aria-labelledby="dropdown-shiny">
              <DecorationsListItem decorationName="GlitterBalls" label="Glitter Balls - 6 pack" handleMouseOver={this.handleMouseOver} handleMouseOut={this.handleMouseOut} />
            </ul>
          </div> 
          <div className="dropdown">
            <button className="btn button-decorations-list btn-default dropdown-toggle" type="button" id="dropdown-ornaments" data-toggle="dropdown" aria-haspopup="true" aria-expanded="true">
              <span className="decorations-list-category-text">Festive Ornaments</span>
              <span className="caret"></span>
            </button>
            <ul className="dropdown-menu" aria-labelledby="dropdown-ornaments">
              <DecorationsListItem decorationName="PineConesGold" label="Pine cones Gold - 8 pack" handleMouseOver={this.handleMouseOver} handleMouseOut={this.handleMouseOut} />
              <DecorationsListItem decorationName="Robins" label="Robin family" handleMouseOver={this.handleMouseOver} handleMouseOut={this.handleMouseOut} />
              <DecorationsListItem decorationName="Ribbons" label="Ribbons 8-pack" handleMouseOver={this.handleMouseOver} handleMouseOut={this.handleMouseOut} />            
            </ul>
          </div>
          <div className="dropdown">
            <button className="btn button-decorations-list btn-default dropdown-toggle" type="button" id="dropdown-small-ornaments" data-toggle="dropdown" aria-haspopup="true" aria-expanded="true">
              <span className="decorations-list-category-text">Small Ornaments</span>
              <span className="caret"></span>
            </button>
            <ul className="dropdown-menu" aria-labelledby="dropdown-small-ornaments">
              <li><label htmlFor="ID">COMING SOON</label><input type="checkbox" id="ID" disabled /></li>
            </ul>
          </div>
          <div className="dropdown">
            <button className="btn button-decorations-list btn-default dropdown-toggle" type="button" id="dropdown-other-ornaments" data-toggle="dropdown" aria-haspopup="true" aria-expanded="true">
              <span className="decorations-list-category-text">Other Ornaments</span>
              <span className="caret"></span>
            </button>
            <ul className="dropdown-menu" aria-labelledby="dropdown-other-ornaments">
              <li><label htmlFor="ID">COMING SOON</label><input type="checkbox" id="ID" disabled /></li>
            </ul>
          </div> 
          <div className="dropdown">
            <button className="btn button-decorations-list btn-default dropdown-toggle" type="button" id="dropdown-angels" data-toggle="dropdown" aria-haspopup="true" aria-expanded="true">
              <span className="decorations-list-category-text">Angels</span>
              <span className="caret"></span>
            </button>
            <ul className="dropdown-menu" aria-labelledby="dropdown-angels">
              <DecorationsListItem decorationName="Angel" label="White angel" handleMouseOver={this.handleMouseOver} handleMouseOut={this.handleMouseOut} />
            </ul>
          </div>          
      </div>
    </div>
    );
  }
});

module.exports = DecorationsList;