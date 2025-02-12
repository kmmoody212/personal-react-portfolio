const Contact = () => {
    return (
        <div>
            <section className="top-cards">
                <div>GITHUB</div>
                <div>LINKEDIN</div>
                <div>INSTAGRAM</div>
            </section>
            <section className="message-form">
                <div className="words-container">
                    <h1>HELLO, WORLD!</h1>
                    <p>Send me a message directly so we can connect!</p>
                </div>
                <form>
                    <label>Name</label>
                    <input></input>
                    <label>Email</label>
                    <input></input>
                    <label>Message</label>
                    <textarea></textarea>
                    <button>SEND</button>
                    <p>Message successfully sent</p>
                </form>
            </section>
        </div>
    )
}

export default Contact;