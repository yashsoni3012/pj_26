import React from 'react'
import { useNavigate } from "react-router-dom";
import { auth } from "../../firebase";
import { signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import {getToken,onMessage } from "firebase/messaging";
import messaging from "../../firebase"

const GoogleSignInPage = () => {

    const navigate = useNavigate();
    const checkNotificationPermission = async () => {
        console.log("Current Permission:", Notification.permission);
        const permission = Notification.permission;
        if (permission === "granted") {
          console.log("Permission already granted.");
          return true;
        } else if (permission === "default") {
          console.log("Requesting permission...");
          const result = await Notification.requestPermission();
          console.log("Permission result:", result);
          return result === "granted";
        } else {
          console.warn("Notification permission is denied or blocked.");
          return false;
        }
      };
      
      
      const handleGoogleLogin = async () => {
        try {
          const provider = new GoogleAuthProvider();
          provider.setCustomParameters({
            prompt: "select_account",
          });
          const result = await signInWithPopup(auth, provider);
          const user = result.user;
      
          // Check and request notification permission
          const hasPermission = await checkNotificationPermission();
          let token = null;
      
          if (hasPermission) {
            token = await getToken(messaging, {
              vapidKey: "BLTytcn_6JPe5m8kP1Z0QskNxZB75hJZYT1_Tnf6qia2zn3izkfL_TUjYxlM9xUQoBRGj2j28DKdL7FBRs-YpNA",
            }).catch((err) => {
              console.error("Failed to get notification token:", err);
            });
          } else {
            console.warn("Notification permission not granted or blocked. Proceeding without device token.");
          }
      
          const { displayName, email, uid } = user;
    
          // Update localStorage
          localStorage.setItem("userId", uid);
          localStorage.setItem("webToken", token || "No Token"); // Handle no token scenario
          localStorage.setItem(
            "userToken",
            JSON.stringify({ email: email, name: displayName})
          );
      
          // Redirect to homepage
          navigate("/");
        } catch (error) {
          console.error("Error during Google login:", error);
        }
      
        // Listen for incoming notifications
        onMessage(messaging, (payload) => {
          console.log("Message received in foreground: ", payload);
          alert(`Notification: ${payload.notification.title} - ${payload.notification.body}`);
        });
      };
  return (
    <>
        
    </>
  )
}

export default GoogleSignInPage