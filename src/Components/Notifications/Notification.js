import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Notification = ({notification}) => {
    toast.info(<Display />, {
        toastId: Date.now(),
        theme: 'colored'
    });

    function Display() {
        return (
            <div>
                <p><b>{notification?.title}</b></p>
                <p>{notification?.body}</p>
                <p><i>Time {notification?.time}</i></p>
            </div>
        );
    };

    return (
        <ToastContainer
            autoClose={false}
            newestOnTop={true}
            position={'top-center'}
            closeOnClick
            rtl={false}
            pauseOnFocusLoss={false}
            draggable
            pauseOnHover={false}
            style={{marginTop: "100px"}}
        />
    );
}

export default Notification