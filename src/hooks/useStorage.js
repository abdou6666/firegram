import { useState, useEffect } from "react";
import { storage } from "../firebase/config";
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";

const useStorage = (file) => {
    const [error, setError] = useState(null)
    const [progress, setProgress] = useState(0)
    const [url, setUrl] = useState(null);
    useEffect(() => {
        //references
        if (file === null) return 
        const storageRef = ref(storage,file.name);
        const uploadTask = uploadBytesResumable(storageRef, file);


        uploadTask.on('state_changed', (snap) => {
            let percentage = (snap.bytesTransferred / snap.totalBytes) * 100;
            console.log(percentage)
            setProgress(percentage);
        }, (error) => {
            setError(error);
        }, async () => {
             const url = await getDownloadURL(uploadTask.snapshot.ref)
            setUrl(url);    
        })
    },[file])
    return  {progress,url,error}
}

export default useStorage
