import { registerPlugin } from '@capacitor/core';
import { AppCenterDistributePlugin } from './definitions';


export class AppCenterDistributeWeb implements AppCenterDistributePlugin {
  async checkForUpdate(): Promise<void> {
    console.log('Checking for updates');
  }
}

const AppCenterDistributeWebInstance: any = new AppCenterDistributeWeb();

export { AppCenterDistributeWebInstance as AppCenterDistribute };

registerPlugin('AppCenterDistribute', {
  web: () => AppCenterDistributeWebInstance,
});
