import photo_grid from '../assets/photo-grid.png'

export default function(){
    return (
        <section className='hero'>
            <img className='section--photo-grid' src={photo_grid} alt='photo-image' ></img>
            <h1 className='poppins-semibold'>Online Experiences</h1>
            <p className='poppins-light'>Join unique interactive activities led by 
            one-of-a-kind hosts—all without leaving home.</p>
        </section>
    );
}