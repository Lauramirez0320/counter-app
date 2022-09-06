
const newMessageData = [{
  message: "Hola Mundo",
  title: "Laura",
}];

const newMessage = (props) => {
 
  return JSON.stringify(props)
}

const FirstApp = () => {
  // const { message } = newMessage;
  return (
    <>
      <h1>{newMessage(newMessageData)}</h1>
    </>
  );
};

export default FirstApp;
