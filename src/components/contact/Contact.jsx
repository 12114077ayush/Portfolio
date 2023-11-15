import "./contact.scss"

const Contact = () => {
    return (
        <div className="contact">
            <div className="textcontainer">
                <h1>Let's work together</h1>
                <div className="item">
                    <h2>Mail</h2>
                    <span>2003ayushchoudhary@gmail.com</span>
                </div>
                <div className="item">
                    <h2>Address</h2>
                    <span>plot.no 11 behind Central Academy jodhpur cantt,</span>
                    <span>Jodhpur Rajsthan 342015</span>
                </div>
                <div className="item">
                    <h2>Mail</h2>
                    <span>2003ayushchoudhary@gmail.com</span>
                </div>
                <div className="item">
                    <h2>Phone no.</h2>
                    <span>+91 7877722737</span>
                </div>
            </div>
            <div className="formcontainer">
                <form >
                    <input type="text" required placeholder="Name" />
                    <input type="email" required placeholder="Email" />
                    <textarea rows={8} placeholder="Message" />
                    <button>Submit</button>
                </form>
            </div>
        </div>
    );
}

export default Contact;