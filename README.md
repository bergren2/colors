# Colors

A simple app to test out Cordova/Phonegap basics.

## Environment Prereqs

You should have the following minimally setup:

- [Git](https://help.github.com/articles/set-up-git) (duh)
- [Node.js](http://nodejs.org/download/)

## Initial Project Setup

    $ git clone git@github.com:bergren2/colors.git
    $ cd colors
    $ npm install -g cordova

## Development

### Browser

    $ cordova serve

Then visit [localhost:8000](http://localhost:8000).

### iOS Emulator

    $ cordova emulate ios

### Run on iPhone

    $ cordova run ios

### Caveats

If it's your first time trying to run the emulator or on the iPhone, you may
need to install additional components. You will be prompted when this happens.

## Deployment

### Beta Testing

Check out the [Apple
Documentation](https://developer.apple.com/library/ios/documentation/IDEs/Conceptual/AppDistributionGuide/TestingYouriOSApp/TestingYouriOSApp.html),
specifically "Ad Hoc Testing".

First, make sure the intended test device is properly registered on the Apple
Developer Member Center, and then that it is properly displaying in Xcode under
"Windows > Devices".

After running `cordova build ios --device`, open
`platforms/ios/Colors.xcodeproj` in Xcode. Then do the following:

1. "Product > Archive" to create an archive.
2. Open "Window > Organizer" and then choose the "Archives" tab.
3. Select "Export" and then "Save for Ad Hoc Development".
4. Double-click the `.ipa` file you just created. This should open iTunes.
5. In iTunes, open your tethered device and go to Apps, where you should see your
app. Click "Install" and apply the changes.

## License

See LICENSE for details.
