1.  Install Required Software:
Make sure you have Node.js installed. You can download it from nodejs.org.
Install React Native CLI by running: npm install -g react-native-cli.
Install Xcode (for iOS development) or Android Studio (for Android development) depending on your target platform.
2. Clone the GitHub Repository:
Open your terminal or command prompt.
Navigate to the directory where you want to clone the repository.
Run the following command to clone the repository:
git clone <repository_url>
Replace <repository_url> with the actual URL of the GitHub repository.
3. Install Dependencies:
Navigate into the cloned project directory using your Terminal:
cd <project_directory>
Run the following command to install the project dependencies:
npm install
In the root folder, create a file and name it Config.js and copy and paste the following:
export const iterableAPIKey = 'REPLACE WITH YOUR API KEY';
export const userEmail = 'REPLACE WITH YOUR EMAIL';
export const phoneNumber = 'REPLACE WITH YOUR number;
4. Run the App on iOS Simulator:
If you're on a Mac, you can run the app on the iOS simulator using Xcode.
Navigate into the iOS directory:
cd ios
Run the following command to install the iOS dependencies:
pod install
Go back to the root directory:
cd ..
Run the app on the iOS simulator:
npx react-native run-ios
5. Run the App on Android Emulator:
If you're on Windows or Linux, you can run the app on an Android emulator.
Start the Android emulator using Android Studio.
Run the app on the Android emulator:
npx react-native run-android
6. View the App:
After successfully running the above commands, the app should open on the simulator/emulator.


Other good references:
https://reactnative.dev/docs/environment-setup
