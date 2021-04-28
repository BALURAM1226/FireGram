import React , { useState }from "react";
import "./style.css";
import Title from "./Components/Title";
import Upload from "./Components/Upload";
import Images from "./Components/Images";
import { useAuthState } from "react-firebase-hooks/auth";
import Modal from "./Components/Modal";
import {projectAuth} from "./firebase/config";



export default function App() {

  const [user] = useAuthState(projectAuth);

  const [selectedImg, setSelectedImg] = useState(null);

  return (
    <div className="App">
      <Title/>
      <Images setSelectedImg={setSelectedImg} />
      { selectedImg && (
        <Modal selectedImg={selectedImg} setSelectedImg={setSelectedImg} />
      )}
    </div>
  );


}
