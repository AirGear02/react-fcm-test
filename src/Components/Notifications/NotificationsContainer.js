import { useState, useEffect } from 'react';
import { onMessageListener } from '../../firebaseInit';
import Notification from './Notification';

const NotificationsContainer = () => {
    const [notification, setNotification] = useState({ title: '', body: '', time: '' });
    const sw = navigator.serviceWorker;

    //receiving background notifications
    useEffect(() => {
        if (sw) {
            window.addEventListener('load', () => {
                sw.register('./firebase-messaging-sw.js')
                    .then(() => sw.ready)
                    .then(() => {
                        sw.addEventListener('message', ({ data }) => {
                            setNotification({
                                title: data?.notificationTitle, body: data.notificationOptions?.body,
                                time: (new Date()).toLocaleTimeString()
                            })
                        })
                    })
            })
        }
    }, [setNotification, sw])

    //receiving foreground notifications
    onMessageListener()
        .then((payload) => {
            setNotification({
                title: payload?.notification?.title, body: payload?.notification?.body,
                time: (new Date()).toLocaleTimeString()
            });
        })
        .catch((err) => console.log('failed: ', err));


    return (
        <div>
            {notification.title && <Notification notification={notification} />}
        </div>
    );
}

export default NotificationsContainer;