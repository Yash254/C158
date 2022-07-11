AFRAME.registerComponent("tour", {
  init: function () {
    this.placesContainer = this.el;
    this.createCards()
    this.createBorder()
    this.createThumbnail()
  },

  createCards: function () {
    const thumbNailsRef = [
      {
        id: "taj-mahal",
        title: "Taj Mahal",
        url: "./assets/thumbnails/taj_mahal.png",
      },
      {
        id: "budapest",
        title: "Budapest",
        url: "./assets/thumbnails/budapest.jpg",
      },

      {
        id: "eiffel-tower",
        title: "Eiffel Tower",
        url: "./assets/thumbnails/eiffel_tower.jpg",
      },
      {
        id: "new-york-city",
        title: "New York City",
        url: "./assets/thumbnails/new_york_city.png",
      },
    ];
    let prevoiusXPosition = -60;

    for (var item of thumbNailsRef) {
      const posX = prevoiusXPosition + 25;
      const posY = 10;
      const posZ = -40;
      const position = { x: posX, y: posY, z: posZ };
      prevoiusXPosition = posX;

      // Border Element
      const borderEl=this.createBorder(position,item.id);
      // Thumbnail Element
      const thumbnailEl=this.createThumbnail(item);
      borderEl.appendChild(thumbnailEl);
      // Title Text Element
      const titleEl=this.createTilte(position,item);
      borderEl.appendChild(titleEl);
      this.placesContainer.appendChild(borderEl);
    }
  },
  createBorder:function (position,id) {
    const entityEl=document.createElement('a-entity');
    entityEl.setAttribute('id',id);
    entityEl.setAttribute('visible',true);
    entityEl.setAttribute('geometry',{
      primitive:'ring',
      radiusInner:9,
      radiusOuter:10
    });

    entityEl.setAttribute('position',position);
    entityEl.setAttribute('material',{
      color:'red',
      opacity:1
    });
    entityEl.setAttribute('cursor-listener',{})
    return entityEl
  },

  createThumbnail:function (item) {
    const entityEl=document.createElement('a-entity');
    entityEl.setAttribute('visible',true);
    entityEl.setAttribute('geometry',{
      primitive:'circle',
      radius:9
    });

    entityEl.setAttribute('material',{
      src:item.url
    });

    return entityEl
  },
  createTilte:function (position,item) {
    const entityEl=document.createElement('a-entity');
    entityEl.setAttribute('text',{
      font:'exo2bold',
      align:'centre',
      width:70,
      color:'black',
      value:item.title
    });
    const Elposition=position
    Elposition.y=-20
    Elposition.x=40
    entityEl.setAttribute('position',Elposition)
    entityEl.setAttribute('visible',true);

    return entityEl
  }
});
