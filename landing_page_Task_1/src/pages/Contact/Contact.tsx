import Style from "./Contact.module.css";
const Contact = () => {
  return (
    <>
      <div className={Style.container}>
        <div>
          <p className={Style.title}>Contact 7ROCK7</p>
          <p className={Style.content}>
            Thank you for your interest in 7ROCK7! We value every connection
            with our fans, fellow musicians, and industry professionals. If you
            have any questions, comments, or collaboration proposals, we'd love
            to hear from you. Feel free to reach out using any of the following
            channels:
          </p>
          <p className={Style.title}>General Inquiries</p>
          <p className={Style.content}>
            For general inquiries and information about 7ROCK7, you can contact
            us at:
            <p>Email: contact@7rock7band.com</p>
            <p>Phone: [+91 8707278056]</p>
          </p>
          <p className={Style.title}>Booking and Press</p>
          <p className={Style.content}>
            To book 7ROCK7 for live performances, events, or interviews, please
            contact our booking and press team:
            <p>Email: bookings@7rock7band.com</p>
            <p>Phone: [+91 8707278056]</p>
          </p>
          <p className={Style.title}>Fan Engagement</p>
          <p className={Style.content}>
            We cherish our fans, and your support means the world to us. If you
            want to share your experiences, fan art, or simply say hello,
            connect with us on our social media platforms:
            <p>Instagram: @7rock7band</p>
            <p>Twitter: @7rock7band </p>
            <p>Facebook: facebook.com/7rock7band</p>
          </p>
        </div>
      </div>
    </>
  );
};

export default Contact;
