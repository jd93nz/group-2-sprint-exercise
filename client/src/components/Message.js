const Message = ({ locationData, waterDepth, startDate }) => {
  return (
    <div className="message">
      <p>
        {`The waterdepth of ${locationData.title} is ${waterDepth.data.waterDepth} on`}{" "}
        <b>{`${startDate}`}</b>
      </p>
    </div>
  );
};
export default Message;
