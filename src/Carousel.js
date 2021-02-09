import React from 'react';


class Carousel extends React.Component{

    state = {
        photos: [],
        active: 0
    };

    //special react method , takes a set of props and give you back a new set of states.
    static getDerivedStateFromProps({ media }) {
        let photos = ['http://placeorgi.com/600/600'];
        
        if(media.length)
        {
            photos =media.map(({ large }) => large);

        }
        return { photos };
    }
    handleIndexClick = event => {
        this.setState({
            //convert string into int by unary +
            active: +event.target.dataset.index
        });
    };
    render() {
        const { photos, active } = this.state;

        return (
            <div className="carousel">
                <img src={photos[active]} alt="animal" />
                <div className="carousel-smaller">
                    {photos.map((photo, index) => (
                        <img
                        key={photo}
                        onClick={this.handleIndexClick}
                        data-index={index}
                        src={photo}
                        className={index === active ? "active" : ""}
                        alt="animal thumbnail"
                        />

                    ))}
                </div>   
            </div>
        );
    }
}

export default Carousel;