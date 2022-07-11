AFRAME.registerComponent('cursor-listener', {
    schema:{
        selectedItemId:{default:'', type:'string'}, 
    },

    handelPlacesListState:function () {
        const id=this.el.getAttribute('id');
        const placeId=['taj-mahal',"budapest",'eiffel-tower', 'new-york-city'];
        if (placesId.includes(id)) {
            const placeContainer=document.querySelector('#place-container');
            placeContainer.setAttribute('cusor-listener',{
                selectedItemId:id,
            });
            this.el.setAttribute('material',{
                color:'#D76B30',
                opacity:1
            })
        }
    },

    handleMouseEnterEvents:function () {
        this.el.addEventListener('mouseenter', ()=>{
            this.handelPlacesListState();
        })
    }
})