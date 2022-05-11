import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Form, Container } from "react-bootstrap";
import { Button } from "react-bootstrap";
import { useUserAuth } from "../context/UserAuthContext";
import "../components/component.css"
import { async } from "@firebase/util";
import { collection, addDoc } from "firebase/firestore";
import { db } from "../firebase"

const Vote = () => {
    const [email, setEmail] = useState("");
    const [error, setError] = useState("");

    const [presname, setName] = useState("");
    const [vicepresname, setName1] = useState("");
    const [secname, setName2] = useState("");
    const [infoname, setName3] = useState("");
    const [budname, setName4] = useState("");
    const [matname, setName5] = useState("");
    const [logname, setName6] = useState("");
    const [pubname, setName7] = useState("");

    const userCollectionRef = collection(db, "users")


    const Vote = async () => {
        await addDoc(userCollectionRef, {
            President: presname, VicePresident: vicepresname,
            Secretary: secname, InfoMedia: infoname,
            Budget: budname, Material: matname,
            Logistics: logname, PubRelations: pubname,
        })
    }


    const { logOut, user } = useUserAuth();
    const navigate = useNavigate();
    const handleLogout = async () => {
        try {
            await logOut();
            navigate("/");
        } catch (error) {
            console.log(error.message);
        }
    };

    return (
        <>
            <div className="but">
                <Button variant="primary" onClick={handleLogout}>
                    Log out
                </Button>
            </div>          

            <h2 className="title">Source Election</h2>
            <div className="nam">{user && user.email}</div>  
            <div className="no">
                <Container className="c" style={{ backgroundColor: "orange" }}>
                    <div className="titles1"><h4 className="sa">PRESIDENT</h4></div>
                    <p>	•Jessa Mae E. Dabon</p><p className="presbox">	•Andres Edman G. Olario</p>

                    <div className="pres" controlId="formBasicEmail">
                        <Form.Control
                            type="email"
                            placeholder=""
                            onChange={(e) => setName(e.target.value)}
                        />
                    </div>
                </Container>
                <Container className="co" style={{ backgroundColor: "orange" }}>
                    <div className="titles2"><h4 className="sa">VICE PRESIDENT</h4></div>
                    <p>	•Harlie Quin C. Quipit</p><p className="presbox1">	•Lord Emmanuel C. Figueras</p>

                    <div className="pres1" controlId="formBasicEmail">
                        <Form.Control
                            type="email"
                            placeholder=""
                            onChange={(e) => setName1(e.target.value)}
                        />
                    </div>
                </Container>
                <Container className="con" style={{ backgroundColor: "orange" }}>
                    <div className="titles1"><h4 className="sa">SECRETARY</h4></div>
                    <p>	•Edyr Ryle G. Ilisan</p><p className="presbox">	•Kissy Cyrine A. Garciano</p>

                    <div className="pres2" controlId="formBasicEmail">
                        <Form.Control
                            type="email"
                            placeholder=""
                            onChange={(e) => setName2(e.target.value)}
                        />
                    </div>
                </Container>
                <Container className="cons" style={{ backgroundColor: "orange" }}>
                    <div className="titles1"><h4 className="sa">INFOMEDIA</h4></div>
                    <p>	•Cathylyn Shaine P. Olandre</p><p className="presbox2">	•Lucy Mae Tan</p>

                    <div className="pres" controlId="formBasicEmail">
                        <Form.Control
                            type="email"
                            placeholder=""
                            onChange={(e) => setName3(e.target.value)}
                        />
                    </div>
                </Container>
                <Container className="const" style={{ backgroundColor: "orange" }}>
                    <div className="titles3"><h4 className="sa">BUDGET AND FINANCE</h4></div>
                    <p>	•Abby Kate V. Dela Pena</p><p className="presbox3">	•Ruffa Mae L. Arañez</p>

                    <div className="pres" controlId="formBasicEmail">
                        <Form.Control
                            type="email"
                            placeholder=""
                            onChange={(e) => setName4(e.target.value)}
                        />
                    </div>
                </Container>
                <Container className="constan" style={{ backgroundColor: "orange" }}>
                    <div className="titles4"><p className="san">MATERIAL PREPARATION AND SERVICES</p></div>
                    <p className="presb">•John Piolo H. Mutia</p><p className="presbox4">	•Keith M. Ostia</p>

                    <div className="pres2" controlId="formBasicEmail">
                        <Form.Control
                            type="email"
                            placeholder=""
                            onChange={(e) => setName5(e.target.value)}
                        />
                    </div>
                </Container>
                <Container className="constant" style={{ backgroundColor: "orange" }}>
                    <div className="titles1"><h4 className="sa">LOGISTICS</h4></div>
                    <p>	•Mark Chezter M.<br></br> Barcelo</p><p className="presbox5">	•Aliza Nicole M.<br></br> Gumapac</p>

                    <div className="pres" controlId="formBasicEmail">
                        <Form.Control
                            type="email"
                            placeholder=""
                            onChange={(e) => setName6(e.target.value)}
                        />
                    </div>
                </Container>
                <Container className="constanta" style={{ backgroundColor: "orange" }}>
                    <div className="titles4"><h4 className="sa">PUBLIC RELATIONS AND  COMMUNICATION</h4></div>
                    <p>	•Chris Heart E. Blanco</p><p className="presbox6">•Wena Mae V. Mabasa</p>
                    <p className="presbox7">	•Ruel Dean Buray</p>
                    <div className="pres3" controlId="formBasicEmail">
                        <Form.Control
                            type="email"
                            placeholder=""
                            onChange={(e) => setName7(e.target.value)}
                        />
                    </div>
                </Container>






                <div className="subbut">
                    <Button className="sb" onClick={Vote}>
                        Vote
                    </Button>
                </div>
            </div>


        </>
    );
};

export default Vote;
