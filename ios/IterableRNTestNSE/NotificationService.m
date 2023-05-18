//
//  NotificationService.m
//  IterableRNTestNSE
//
//  Created by Nam Ngo on 5/18/23.
//



// File: NotificationService.m
#import "NotificationService.h"
#import "IterableAppExtensions-Swift.h"
@import IterableAppExtensions;

@interface NotificationService ()

@property (nonatomic, strong) ITBNotificationServiceExtension *baseExtension;
@end

@implementation NotificationService
- (void)didReceiveNotificationRequest:(UNNotificationRequest *)request withContentHandler:(void (^)(UNNotificationContent * _Nonnull))contentHandler {
    self.baseExtension = [[ITBNotificationServiceExtension alloc] init];
    [self.baseExtension didReceiveNotificationRequest:request withContentHandler:contentHandler];
}

- (void)serviceExtensionTimeWillExpire {
    [self.baseExtension serviceExtensionTimeWillExpire];
}
@end
