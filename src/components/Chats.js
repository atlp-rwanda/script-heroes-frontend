import React, { useState, useEffect } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { Col, Input, Container, Row } from "reactstrap";
import timeAgo from "../helpers/timeAgo";
import axios from "axios";
import "./Chat.scss";
import chatImage from "../assets/img/chat_img.png";
import sendImage from "../assets/img/send_img.png";

function handleSendMessage() {
  const msg = document.querySelector(".chat_field").value;
  const token = localStorage.getItem("x-auth-token");
  const newMessage = { message: msg };
  const headers = {
    "x-auth-token": token,
  };
  axios
    .post(process.env.CHAT_ENDPOINT, newMessage, { headers })
    .then((response) => this.setState({ newMessage: response.data.id }));

  document.querySelector(".chat_field").value = "";
}

function Chat() {
  const [data, setData] = useState({ messages: [] });

  useEffect(() => {
    const fetchData = async () => {
      const result = await axios(process.env.CHAT_ENDPOINT);
      setData(result.data);
    };

    fetchData();
  });

  const handleKeyDown = (event) => {
    if (event.key === "Enter") {
      handleSendMessage();
    }
  };

  return (
    <div>
      <Router>
        <Container className="container-chat">
          <Row>
            <Col md="6">
              <h2>Chat</h2>
              <img src={chatImage} alt="Chat Image" className="chat_image" />
            </Col>
            <Col className="chat">
              <div className="messages">
                {data.messages.map((msg) => (
                  <div className="chat_msg">
                    <span className="bigText">
                      {msg.sender.firstName} {msg.sender.lastName}
                    </span>
                    <div className="mediumText">{msg.messageText}</div>
                    <span class="smallText">
                      Posted: {timeAgo(msg.createdAt)}
                    </span>
                  </div>
                ))}
              </div>
              <div className="send">
                <Input
                  type="text"
                  name="message"
                  placeholder="Tape a message..."
                  className="chat_field"
                  onKeyDown={handleKeyDown}
                  required
                />
                <img
                  src={sendImage}
                  alt="Send Image"
                  className="send_image"
                  onClick={handleSendMessage}
                />
              </div>
            </Col>
          </Row>
        </Container>
      </Router>
    </div>
  );
}

export default Chat;

// import React, { useState, useEffect } from "react";

// export const DateTime = () => {
//   var [date, setDate] = useState(new Date());

//   useEffect(() => {
//     var timer = setInterval(() => setDate(new Date()), 1000);
//     return function cleanup() {
//       clearInterval(timer);
//     };
//   });

//   return (
//     <div>
//       <p> Time : {date.toLocaleTimeString()}</p>
//       <p> Date : {date.toLocaleDateString()}</p>
//     </div>
//   );
// };

// export default DateTime;
