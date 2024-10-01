import React, { useState, useRef } from "react";
import "./Post.css";
import Heading from './Heading';
import AddCardInput from "./AddCardInput";
import Textarea from "./Textarea";
import { db } from "../utils/Firebase";
import { collection, addDoc } from "firebase/firestore";
import { getStorage, ref, uploadBytes, getDownloadURL } from "firebase/storage";
import { v4 as uuidv4 } from 'uuid';
import "./Articlepage.css";
import { Button, Form } from 'semantic-ui-react';

function Articlepage() {

    const [title, setTitle] = useState('');
    const [abstract, setAbstract] = useState('');
    const [article, setArticle] = useState('');
    const [tag, setTag] = useState('');
    const [image, setImage] = useState(null);
    const [imageUrl, setImageUrl] = useState('');
    const fileInputRef = useRef(null);

    const handleImageChange = (event) => {
        const file = event.target.files[0];
        setImage(file);
    };

    const handleImageUpload = async () => {
        if (!image) {
            alert('Please select an image first.');
            return;
        }

        try {
            const storage = getStorage();
            const storageRef = ref(storage, 'images/' + uuidv4()); // Unique file name
            await uploadBytes(storageRef, image);
            const url = await getDownloadURL(storageRef);
            console.log('Image uploaded successfully. URL:', url);
            setImageUrl(url);
        } catch (error) {
            console.error('Error uploading image: ', error);
            alert('Error uploading image. Check console for details.');
        }
    };

    const handleBrowseClick = () => {
        if (fileInputRef.current) {
            fileInputRef.current.click(); // Trigger file input
        }
    };

    const handleSubmit = async () => {
        if (!title || !abstract || !article || !tag || !imageUrl) {
            alert('Please fill out all fields and upload an image.');
            return;
        }

        try {
            await addDoc(collection(db, 'articles'), {
                title,
                abstract,
                article,
                tag,
                imageUrl
            });
            alert('Article posted successfully!');
            setTitle('');
            setAbstract('');
            setArticle('');
            setTag('');
            setImage(null);
            setImageUrl('');
        } catch (error) {
            console.error('Error posting article:', error);
            alert('Failed to post article.');
        }
    };

    return (
        <div>
            <Heading text="What do you want to ask or share" />
            <div className="a-box">
                <h4 className="text">
                    This section is designed based on the type of the post. It could be developed by conditional rendering.
                    For an article, the following section would appear.
                </h4>
            </div>

            <Form>
                <Form.Field>
                    <AddCardInput tag="Title: " name="title" placeholder="Enter your article title" size="1200px" value={title} change={(e) => setTitle(e.target.value)} />
                </Form.Field>

                <Form.Field>
                    <div className="image-section">
                        <input 
                            type="file" 
                            name="image" 
                            ref={fileInputRef} 
                            style={{ display: 'none' }} 
                            onChange={handleImageChange} 
                        />
                        <label>Add an image: </label>
                        <input 
                            type="text" 
                            name="input" 
                             
                        />
                        <div className="button-stack">
                            <Button onClick={handleBrowseClick}>Browse</Button>
                            <Button onClick={handleImageUpload} disabled={!image}>Upload</Button>
                        </div>
                        {imageUrl && <p>Uploaded Image URL: {imageUrl}</p>}
                    </div>
                </Form.Field>

                <Form.Field>
                    <Textarea tag="Abstract:" name="abstract" height="100px" width="1260px" placeholder="Enter a 1-paragraph abstract..." value={abstract} change={(e) => setAbstract(e.target.value)} />
                </Form.Field>

                <Form.Field>
                    <Textarea tag="Article text:" name="article" height="200px" width="1260px" placeholder="Enter the full article text..." value={article} change={(e) => setArticle(e.target.value)} />
                </Form.Field>

                <Form.Field>
                    <AddCardInput tag="Tags: " name="tag" size="1200px" placeholder="Please add up to 3 tags to describe what your article is about e.g. Java" value={tag} change={(e) => setTag(e.target.value)} />
                </Form.Field>

                <Form.Field>
                    <Button className="post-button" onClick={handleSubmit} disabled={!title || !abstract || !article || !tag || !imageUrl}>Post</Button>
                </Form.Field>
            </Form>
        </div>
    );
}

export default Articlepage;
