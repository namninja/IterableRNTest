1.  Install Required Software: </br>
-Make sure you have Node.js installed. You can download it from nodejs.org.</br>
-Install React Native CLI by running: </br>
--npm install -g react-native-cli.</br>
-Install Xcode (for iOS development) or Android Studio (for Android development) depending on your target platform.
</br></br>
2. Clone the GitHub Repository:</br>
-Open your terminal or command prompt.</br>
-Navigate to the directory where you want to clone the repository.</br>
-Run the following command to clone the repository:</br>
--git clone <repository_url></br>
-Replace <repository_url> with the actual URL of the GitHub repository.</br>
</br></br>
3. Install Dependencies:</br>
-Navigate into the cloned project directory using your Terminal:</br>
---cd <project_directory></br>
Run the following command to install the project dependencies:</br>
--npm install</br>
-In the root folder, create a file and name it Config.js and copy and paste the following:</br>
--export const iterableAPIKey = 'REPLACE WITH YOUR API KEY';</br>
--export const userEmail = 'REPLACE WITH YOUR EMAIL';</br>
--export const phoneNumber = 'REPLACE WITH YOUR number;</br>
</br></br>
4. Run the App on iOS Simulator:</br>
-If you're on a Mac, you can run the app on the iOS simulator using Xcode.</br>
-Navigate into the iOS directory:</br>
--cd ios</br>
-Run the following command to install the iOS dependencies:</br>
--pod install</br>
-Go back to the root directory:</br>
--cd ..</br>
-Run the app on the iOS simulator:</br>
--npx react-native run-ios</br>
</br></br>
5. Run the App on Android Emulator:</br>
-If you're on Windows or Linux, you can run the app on an Android emulator.</br>
-Start the Android emulator using Android Studio.</br>
-Run the app on the Android emulator:</br>
--npx react-native run-android</br>
</br></br>
6. View the App:</br>
-After successfully running the above commands, the app should open on the simulator/emulator.</br>
</br></br>

Other good references:</br>
-https://reactnative.dev/docs/environment-setup</br>
