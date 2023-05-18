#import <RCTAppDelegate.h>
#import <UIKit/UIKit.h>
#import <UserNotifications/UserNotifications.h>
@import IterableSDK;

@interface AppDelegate : RCTAppDelegate <UIApplicationDelegate, UNUserNotificationCenterDelegate, RCTBridgeDelegate>

@end
