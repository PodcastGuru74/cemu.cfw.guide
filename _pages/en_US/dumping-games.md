---
title: Dumping Games
permalink: /dumping-games
redirect_from:
  - dumping
  - dumping-updates-and-dlc
  - transferring-save-data
---

{% include toc title="Table of Contents" %}

In this section, we look at how to "dump" (copy) your games, updates, DLC and saves from your Wii U system over to your PC.

To do this, we're going to need to use a custom homebrew application to dump your games. This is done using an exploit in the Wii U browser.

## Requirements

- An SD card for homebrew
- (Optional) A USB storage device to dump the game to
  - Only required if the game is too big for the SD card
  - Wii U games can vary in size up to 17GB, but having 12GB of storage should be okay for most games

## Downloads

- The latest release of [MochaCFW](https://www.wiiubru.com/appstore/zips/mocha.zip)
  - This will also work with (Coldboot) Haxchi
- The Mocha [config](/assets/files/config.ini)
- The latest release of [Homebrew Launcher Installer](https://github.com/wiiu-env/homebrew_launcher_installer/releases/latest)
  - You will need to download the `payload.zip` file
- The v1.4 release of [The Homebrew Launcher](https://github.com/dimok789/homebrew_launcher/releases/tag/1.4)
  - You will need to download the v1.4 `homebrew_launcher.v1.4.zip` release of The Homebrew Launcher
- The latest release of [dumpling](https://github.com/emiyl/dumpling/releases/latest)

## Preparations

1. Extract the `mocha.zip` file to the root of your SD card
  - If prompted to, replace any pre-existing files
1. Extract the `homebrew_launcher.v.1.4.zip` file to the root of your SD card
1. Copy the `config.ini` file to the `/wiiu/apps/mocha` folder on your SD card
1. Copy the `payload.elf` file from the `payload.zip` file to the `/wiiu` folder on your SD card
1. Extract the `dumpling.zip` file to the root of your SD card
1. Eject your SD card from Windows and put it into your Wii U console
1. Plug a USB storage device into your Wii U if you want to dump to USB storage
  - Some users have reported better performance using the back ports, however the front ports should be fine too

## Launching MochaCFW

1. Turn on your Wii U console
1. Launch the internet browser and open `wiiuexploit.xyz`
1. Tap `Run Homebrew Launcher!`
  - If your console freezes for more than 10 seconds, hold down the Power button for 4 seconds and reboot
  - Once rebooted, [reset the browser's save data](https://en-americas-support.nintendo.com/app/answers/detail/a_id/1507/~/how-to-delete-the-internet-browser-history) and try again
1. Once in the Homebrew Launcher, launch MochaCFW
  - This should return you back to the Homebrew Launcher, where we will now launch dumpling

## Using dumpling

If you notice slowdowns while using dumpling, try copying via [FTP or disc2app](dumping-games-(ftp)) instead. This is useful on large games such as Breath of the Wild.
{: .notice--info}

1. Run the dumpling app from the Homebrew Launcher
1. Use **(ZL)** and **(ZR)** to toggle between dumping to your SD card or a FAT32 USB device
1. Select `Account Data` using the **(A)** button
  - If you'd like to dump a disc, also select "Disc dump"
1. Press **(START)** to begin dumping
  - If you're dumping a disc, skip to step 13
1. Once finished, press **(X)** and wait for the metadata to be fetched
  - This can take up to 5 seconds for every title installed, be patient
1. Use **(L)** and **(R)** to toggle between dumping from internal storage or from USB
1. Press **(A)** to select the titles you'd like to dump
1. Press **(START)** to continue
1. Press **(A)** to select which parts of the title you'd like to dump
  - This will apply to all titles you selected previously
1. Press **(SELECT)** to begin dumping
  - This can take a very long time
1. Once finished, turn off your Wii U and put your SD/USB that you dumped to into your computer

## Installing to Cemu

### Games

1. When installing Cemu, you should've selected a "Game path" to put your games in
1. Copy the contents of the `dumpling/games` folder from your SD/USB to that folder
1. Open the Cemu application
1. Right click on the screen and click `Refresh game list`

    ---

5. If you haven't made a game path, copy the `dumpling/games` folder from your SD/USB to somewhere safe on your computer
1. Open the Cemu application
1. On the top bar, click `Options` -> `General Settings`
1. Under `Game Paths` click `Add`
1. Navigate to the directory of your newly dumped games

### Updates/DLC

1. Open the Cemu application
1. On the top bar, click `File` -> `Install game update or DLC`
1. Navigate to the `dumpling/updates/GAME` or `dumpling/dlc/GAME` folder on your SD/USB in your dump folder
1. Open the `meta` folder and select `meta.xml`
1. Cemu should now automatically install the update for you

### Saves

1. Open the Cemu application
1. Right click on the game you'd like to transfer the save to
1. Click `Save directory`
1. Copy over the contents of the `dumpling/save/GAME` folder from your SD/USB to the save directory
1. Navigate to the root of your mlc01 directory
1. Copy over the contents of `dumpling/account_data/mlc01` from your SD/USB to the mlc01 directory and replace any files if prompted
1. Close Cemu and re-open it again
1. On the top bar, click `Options` -> `Active Account`
1. Select the account used from your Wii U

You should now have any games, updates, DLC and saves installed onto Cemu.

We will now enable online multiplayer and play with people across the world on Nintendo servers in our online play guide.

Continue to [Online Play](online-play)
{: .notice--info}