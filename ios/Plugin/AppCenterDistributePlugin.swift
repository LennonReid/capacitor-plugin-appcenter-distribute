import Foundation
import Capacitor
import AppCenterDistribute

@objc(AppCenterDistributePlugin)
public class AppCenterDistributePlugin: CAPPlugin {
    @objc func checkForUpdate(_ call: CAPPluginCall) {
        Distribute.checkForUpdate()
        call.resolve()
    }

}
