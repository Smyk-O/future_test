import React, { Component } from 'react';
import './MainData.scss';
import classNames from 'classnames';

class GetMainData extends Component {

  constructor(props) {
    super(props);
    this.state = {
      itemTrendy: [
        { name: 'Black Genuine Leather Bags', price: '$ 23.20', imgurl: './content/bags/bags_0.png', type: 'Bags' },
        { name: 'Fashion Genuine Chain Watch', price: '$ 20.16', imgurl: './content/bags/bags_1.png', type: 'Bags' },
        { name: 'Black Genuine Leather Bags', price: '$ 30.14', imgurl: './content/bags/bags_2.png', type: 'Bags' },
        { name: 'Simply Leather Bags', price: '$ 15.20', imgurl: './content/bags/bags_3.png', type: 'Bags' },
        { name: 'New Fashion Leather Bags', price: '$ 25.20', imgurl: './content/bags/bags_4.png', type: 'Bags' },
        { name: 'Single Hand Models Bags', price: '$ 17.6', imgurl: './content/bags/bags_5.png', type: 'Bags' }
      ],
      itemOur: {
        watches: [
          { name: ' Fashion Genuine Chain Watch ', price: '$ 25.36', imgurl: './content/watch/watch_0.png', type: 'Watchec' },
          { name: ' Fashion Genuine Chain Watch ', price: '$ 25.36', imgurl: './content/watch/watch_0.png', type: 'Watchec' },
          { name: ' Fashion Genuine Chain Watch ', price: '$ 25.36', imgurl: './content/watch/watch_0.png', type: 'Watchec' },
          { name: ' Fashion Genuine Chain Watch ', price: '$ 25.36', imgurl: './content/watch/watch_0.png', type: 'Watchec' },
          { name: ' Fashion Genuine Chain Watch ', price: '$ 25.36', imgurl: './content/watch/watch_0.png', type: 'Watchec' },
          { name: ' Fashion Genuine Chain Watch ', price: '$ 25.36', imgurl: './content/watch/watch_0.png', type: 'Watchec' }]
        ,

        fashion: [
          { name: ' Fashion Silver Chain Watch ', price: '$ 35.24', imgurl: './content/watch/watch_1.png', type: 'Fashion' },
          { name: ' Fashion Silver Chain Watch ', price: '$ 35.24', imgurl: './content/watch/watch_1.png', type: 'Fashion' },
          { name: ' Fashion Silver Chain Watch ', price: '$ 35.24', imgurl: './content/watch/watch_1.png', type: 'Fashion' },
          { name: ' Fashion Silver Chain Watch ', price: '$ 35.24', imgurl: './content/watch/watch_1.png', type: 'Fashion' },
          { name: ' Fashion Silver Chain Watch ', price: '$ 35.24', imgurl: './content/watch/watch_1.png', type: 'Fashion' },
          { name: ' Fashion Silver Chain Watch ', price: '$ 35.24', imgurl: './content/watch/watch_1.png', type: 'Fashion' }]
        ,

        furnitures: [
          { name: ' Fashion Chain Watch ', price: '$ 23.12', imgurl: './content/watch/watch_2.png', type: 'Furnitures' },
          { name: ' Fashion Chain Watch ', price: '$ 23.12', imgurl: './content/watch/watch_2.png', type: 'Furnitures' },
          { name: ' Fashion Chain Watch ', price: '$ 23.12', imgurl: './content/watch/watch_2.png', type: 'Furnitures' },
          { name: ' Fashion Chain Watch ', price: '$ 23.12', imgurl: './content/watch/watch_2.png', type: 'Furnitures' },
          { name: ' Fashion Chain Watch ', price: '$ 23.12', imgurl: './content/watch/watch_2.png', type: 'Furnitures' },
          { name: ' Fashion Chain Watch ', price: '$ 23.12', imgurl: './content/watch/watch_2.png', type: 'Furnitures' }]
        ,

        mobile: [
          { name: ' Fashion Black Chain Watch  ', price: '$ 42.32', imgurl: './content/watch/watch_3.png', type: 'Mobile' },
          { name: ' Fashion Black Chain Watch  ', price: '$ 42.32', imgurl: './content/watch/watch_3.png', type: 'Mobile' },
          { name: ' Fashion Black Chain Watch  ', price: '$ 42.32', imgurl: './content/watch/watch_3.png', type: 'Mobile' },
          { name: ' Fashion Black Chain Watch  ', price: '$ 42.32', imgurl: './content/watch/watch_3.png', type: 'Mobile' },
          { name: ' Fashion Black Chain Watch  ', price: '$ 42.32', imgurl: './content/watch/watch_3.png', type: 'Mobile' },
          { name: ' Fashion Black Chain Watch  ', price: '$ 42.32', imgurl: './content/watch/watch_3.png', type: 'Mobile' }]
        ,

        cloth: [
          { name: ' Fashion Lether  Watch  ', price: '$ 15.20', imgurl: './content/watch/watch_4.png', type: 'Cloth' },
          { name: ' Fashion Lether  Watch  ', price: '$ 15.20', imgurl: './content/watch/watch_4.png', type: 'Cloth' },
          { name: ' Fashion Lether  Watch  ', price: '$ 15.20', imgurl: './content/watch/watch_4.png', type: 'Cloth' },
          { name: ' Fashion Lether  Watch  ', price: '$ 15.20', imgurl: './content/watch/watch_4.png', type: 'Cloth' },
          { name: ' Fashion Lether  Watch  ', price: '$ 15.20', imgurl: './content/watch/watch_4.png', type: 'Cloth' },
          { name: ' Fashion Lether  Watch  ', price: '$ 15.20', imgurl: './content/watch/watch_4.png', type: 'Cloth' }]
        ,

        toys: [
          { name: ' Fashion Forign Watch', price: '$ 36.12', imgurl: './content/watch/watch_5.png', type: 'Toys' },
          { name: ' Fashion Forign Watch', price: '$ 36.12', imgurl: './content/watch/watch_5.png', type: 'Toys' },
          { name: ' Fashion Forign Watch', price: '$ 36.12', imgurl: './content/watch/watch_5.png', type: 'Toys' },
          { name: ' Fashion Forign Watch', price: '$ 36.12', imgurl: './content/watch/watch_5.png', type: 'Toys' },
          { name: ' Fashion Forign Watch', price: '$ 36.12', imgurl: './content/watch/watch_5.png', type: 'Toys' },
          { name: ' Fashion Forign Watch', price: '$ 36.12', imgurl: './content/watch/watch_5.png', type: 'Toys' }]
      },
      OurState: "watches"
    };

  }

  OurBrands() {
    return (
      <div className="ourBrands">
        <div className="info">
          <h1>Our Brands</h1>
          <h2>
            Small Shoes 2017 new Arrivals  mini Messenger <a href="/">Classic Shoes</a>
          </h2>
          <span className="infoText">
            In porttitor elit ac mi placerat hendrerit. Morbi accumsan, erat in ullamcorper consectetur, nisi erat efficitur eros, sagittis tristique odio turpis vitae dui. Vestibulum gravida est ut erat pretium, non pretium diam feugiat. Integer egestas suscipit lorem ac fermentum. Integer at mauris vitae justo sagittis dapibus. Pellentesque sit amet nisl vitae orci vehicula faucibus. Fusce et lat, feugiat est.
            </span>
        </div>
      </div>
    );
  }

  GetCatalogElement (items) {
    return items.map((item, i, arr) => {
			return (
				<div key={arr+item+i}>
          <div className="element">
          <img src={item.imgurl} className="elementImg" alt="itemPhoto"/>
          <div className="elementName">{item.name}</div>
          <div className="elementPrice">{item.price}</div>
          <button className="addToCart">Add to Cart</button>
          </div>
        </div>
			);
		});
  }

  BtnOurState(type) {
    this.setState ({
      OurState: type
    })
  }

  GetCatalog(type) {
    if (type === "Trendy") {
      return (
        <div className="catalogElement" >
          {this.GetCatalogElement(this.state.itemTrendy)}
        </div>
      )
    } else {
      let elements = this.state.itemOur[this.state.OurState];
      return (
        <div className="catalogElement">
          <div className="btnGroup">
            <button className={classNames({catalogBtn: true, activeCatalogBtn:(this.state.OurState === "fashion")})} onClick={(()=>this.BtnOurState("fashion"))}>Fashion</button>
            <button className={classNames({catalogBtn: true, activeCatalogBtn:(this.state.OurState === "furnitures")})} onClick={(()=>this.BtnOurState("furnitures"))}>Furnitures</button>
            <button className={classNames({catalogBtn: true, activeCatalogBtn:(this.state.OurState === "watches")})} onClick={(()=>this.BtnOurState("watches"))}>Watches</button>
            <button className={classNames({catalogBtn: true, activeCatalogBtn:(this.state.OurState === "mobile")})} onClick={(()=>this.BtnOurState("mobile"))}>Mobile</button>
            <button className={classNames({catalogBtn: true, activeCatalogBtn:(this.state.OurState === "cloth")})} onClick={(()=>this.BtnOurState("cloth"))}>Cloth</button>
            <button className={classNames({catalogBtn: true, activeCatalogBtn:(this.state.OurState === "toys")})} onClick={(()=>this.BtnOurState("toys"))}>Toys</button>
          </div>
            {this.GetCatalogElement(elements)}
        </div>
      )
    }
  }

  render() {
    return (
      < div className="mainData">
        <div className="showcase showcaseTrend">
          <h1>Trendy Arrivals</h1>
          {this.GetCatalog("Trendy")}
        </div>
        {this.OurBrands()}
        <div className="showcase showcaseCatalogue">
          <h1>Our Showcase</h1>
          {this.GetCatalog()}
        </div>
      </div>
    );
  }
}

export default GetMainData;
