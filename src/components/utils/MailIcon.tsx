import "./MailIcon.css";

type MailIconProps = {
  isSent: boolean;
};

const MailIcon = ({ isSent }: MailIconProps) => {
  return (
    <>
      <div className="relative container-mail  left-[14px]">
        <div className="mail">
          <div className="mail__back"></div>
          <div className={`mail__top ${isSent ? "closed" : ""}`}></div>
          <div className={`mail__letter ${isSent ? "move" : ""}`}>
            <div className="mail__letter-square"></div>
            <div className="mail__letter-lines"></div>
          </div>
          <div className="mail__left"></div>
          <div className="mail__right"></div>
          <div className="mail__bottom"></div>
        </div>
      </div>
    </>
  );
};

export default MailIcon;
