import { useState } from 'react'
import storage from '../../Firabase';
import './NewProduct.css'
import { getStorage, ref, uploadBytesResumable, getDownloadURL } from 'firebase/storage';
import { CreateMovie } from '../../Context/MovieContext/ApiCalls';
import { MovieContext } from '../../Context/MovieContext/MovieContext';
import { useContext } from 'react';
const NewProduct = () => {

  const [movie, setMovie] = useState({});
  const [image, setImage] = useState(null);
  const [imageTitle, setImageTitle] = useState(null);
  const [imageSm, setImageSm] = useState(null);
  const [trailer, setTrailer] = useState(null);
  const [video, setVideo] = useState(null);
  const [Uploaded, setUploaded] = useState(0);
  
  const {dispatch}=useContext(MovieContext)

  const handleChange = (e) => {
    const value = e.target.value;
    setMovie({...movie, [e.target.name]: value});
  }
  
  const upload = (items) => {
    items.forEach(item => {
      const filename =  new Date().getDate()+ item.label +item.file.name
      const storageRef = ref(storage, `/items/${filename}`);
      const uploadTask = uploadBytesResumable(storageRef, item.file);
      uploadTask.on('state_changed',
        (snapshot) => {
          const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
          console.log(`Upload is ${progress}% done.`);
        },
        (error) => {
          console.log(error);
        },
        () => {
          getDownloadURL(uploadTask.snapshot.ref).then((url) => {
            setMovie((prev) => {
              return {...prev, [item.label]: url};
            });
            setUploaded((prev) => prev + 1);
          });
        }
      );
    });
  }
  
  const handleUpload = (e) => {
    e.preventDefault();
    upload([
      {file: image, label: 'img'},
      {file: imageTitle, label: 'imgtitle'},
      {file: imageSm, label: 'imgsm'},
      {file: trailer, label: 'trailer'},
      {file: video, label: 'video'},
    ]);
  }

  const handelSubmit=(e)=>{
 e.preventDefault()
 CreateMovie(movie,dispatch)
  }

  return (
    <div className='newProduct'>
         <h1 className="addProductTitle">New Movie</h1>
      <form className="addProductForm">
        <div className="addProductItem">
          <label>Image</label>
          <input type="file" id="image" name='img' onChange={(e)=>setImage(e.target.files[0])}/>
        </div>
        <div className="addProductItem">
          <label>Title Image</label>
          <input type="file" id="imageTitle" name='imgTitle'onChange={(e)=>setImageTitle(e.target.files[0])} />
        </div>
        <div className="addProductItem">
          <label>Thumbnail Image</label>
          <input type="file" id="ImageSm" name='imgSm'onChange={(e)=>setImageSm(e.target.files[0])} />
        </div>
        <div className="addProductItem">
          <label>Title</label>
          <input type="text" placeholder="Jhon Wick" name='title' onChange={handleChange}/>
        </div>
        <div className="addProductItem">
          <label>Description</label>
          <input type="text" placeholder="Description..."name='desc' onChange={handleChange}/>
        </div>
        <div className="addProductItem">
          <label>Year</label>
          <input type="text" placeholder="Year" name='year'  onChange={handleChange}/>
        </div>
        <div className="addProductItem">
          <label>Genre</label>
          <input type="text" placeholder="genre" name='genre' onChange={handleChange} />
        </div>
        <div className="addProductItem">
          <label>Duration</label>
          <input type="text" placeholder="Duration" name='duartion' onChange={handleChange} />
        </div>
        <div className="addProductItem">
          <label>Limit</label>
          <input type="text" placeholder="Limit" name='limit' onChange={handleChange}/>
        </div>
        <div className="addProductItem">
          <label>Is Series?</label>
          <select name="isSeries" id="isSeries"  onChange={handleChange}>
            <option value="false">No</option>
            <option value="true">Yes</option>
          </select>
        </div>
        <div className="addProductItem">
          <label>Trailer</label>
          <input type="file" name='trailer'onChange={(e)=>setTrailer(e.target.files[0])} />
          </div>
          <div className="addProductItem">
          <label>Video</label>
          <input type="file" name='video' onChange={(e)=>setVideo(e.target.files[0])} />
          </div>
          {Uploaded ===5 ? (

            <button className="addProductButton" onClick={handelSubmit}>Create</button>
          ):(
            <button className="addProductButton" onClick={handleUpload}>Upload</button>
          )}
      </form>
        </div>
  )
}

export default NewProduct