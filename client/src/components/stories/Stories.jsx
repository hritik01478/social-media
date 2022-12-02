import './stories.css'
import img1 from '../../img/profileImg.jpg';
// import img2 from '../../img/img2.png';
// import img3 from '../../img/img3.png';
import img4 from '../../img/img4.jpg';

export const Stories = () => {

    // Temporary Data
    const stories = [
        {
            id: 1,
            name: "Brijesh Agal",
            img: "https://images.pexels.com/photos/13916254/pexels-photo-13916254.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load"
        },
        {
            id: 2,
            name: "Aradhya Mishra",
            img: img4
        },
        {
            id: 3,
            name: "Tirth Joshi",
            img: "https://images.pexels.com/photos/13916254/pexels-photo-13916254.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load"
        },
        {
            id: 4,
            name: "Urmila Rathore",
            img: img4
        }
    ]

  return (
      <div className='Stories'>
        <div className='story'>
            <img src={img1} alt="" />
              <span>Hritik Kumar</span>
              <button className='button addBtn'>+</button>
        </div>
          {stories.map(story => (
              <div className='story'>
                  <img src={story.img} alt="" />
                  <span>{story.name}</span>
              </div>
          ))}
    </div>
  )
}
