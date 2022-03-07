import '../Styles/FcmToken.css';

const FcmTokenLabel = ({ token }) => {
    return (
        <div className="fcmWrapper">
            <label>FCM token: </label>
            <input type={'text'} value={token} disabled={true} id={'token'}></input>
            <button onClick={() => { navigator.clipboard.writeText(token)}}>
                <img src='./clipboard.png' title="Copy to clipboard" alt='Copy to clipboard'></img>
            </button>
        </div>
    );
}

export default FcmTokenLabel;