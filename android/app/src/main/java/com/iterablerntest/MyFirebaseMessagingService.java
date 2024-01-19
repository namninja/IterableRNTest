package com.iterablerntest;

import com.iterable.iterableapi.IterableFirebaseMessagingService;
import com.google.firebase.messaging.RemoteMessage;

public class MyFirebaseMessagingService extends IterableFirebaseMessagingService {

    @Override
    public void onMessageReceived(RemoteMessage remoteMessage) {
        // Delegate message handling to Iterable's service
        super.onMessageReceived(remoteMessage);
    }

    @Override
    public void onNewToken(String s) {
        // Delegate token refresh handling to Iterable's service
        super.onNewToken(s);
    }
}
